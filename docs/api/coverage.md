---
sidebar_position: 4
---

# API əhatəsi və oxuma qaydası

Biznes modul menyusundakı API səhifələri istifadəçinin birbaşa idarə etdiyi və ya iş prosesində oxuduğu resurslara aiddir. Serverin daxili valuation, reservation, sync, metadata və health endpointləri bu menyuda göstərilmir. Backend səviyyəsində tam inventar üçün [backend endpoint axtarışı](./reference/route-finder) və [avtomatik route kataloqu](./reference/route-catalog) istifadə olunur. Hazırkı backend snapshotında `api/*` altında **380 unikal URI** və **662 HTTP operation** var. Laravel-də `GET|HEAD` və `PUT|PATCH` kimi birgə route metodları inteqratorun istifadə etdiyi HTTP operation kimi ayrıca göstərilir.

Əl ilə yazılmış modul səhifələri ən çox istifadə olunan resursların request/response kontraktını və biznes mənasını izah edir. Tam route kataloqu isə heç bir endpointin itib getməməsi üçün path, handler və giriş kontekstinin avtoritet indeksidir.

## Referansın tərkibi

| Nə axtarırsınız? | Baxılacaq yer | Orada olan məlumat |
| --- | --- | --- |
| Endpoint mövcuddurmu? | [Backend endpoint axtarışı](./reference/route-finder) | Path, metod, modul və handler üzrə filterlənən bütün backend operation-ları. Çap edilə bilən tam cədvəl üçün route kataloquna keçin. |
| Body və cavab necədir? | Detallı resurs səhifələri | Ayrı, çoxsətirli request/response JSON nümunələri və hər field üçün izah cədvəli. |
| Resurs nə üçündür? | Modul icmalı və entity xəritəsi | Biznes mənası, sahib modul və əlaqəli entity-lər. |
| State/action nə edir? | Biznes sənədləri | Təsdiq, ləğv və digər action-ların prosesə təsiri. |

Route kataloqu body field-lərini təxmin etmir: route manifestində olmayan kontrakt detallarını yalnız backend kodundan təsdiqlənmiş resurs səhifələri verir. Path identifikatorları, ayrıca göstərilmədikdə, UUID-dir. Nümunələrdə yalnız sintetik UUID və məlumat istifadə olunmalıdır.

## Modul xəritəsi

| Qrup | Əsas resurslar |
| --- | --- |
| Platform və metadata | tenant, datasets, fields, regions, lists, schema, layout, dashboards, settings, users, roles, permissions |
| Master data | branches, partners, departments, products, templates, categories, units, packaging, qiymət tipləri |
| Satış və alış | sale-orders, sale-receipts, purchase-orders, purchase-receipts, invoices, returns |
| Anbar | stocks, stock-documents, locations, lots, availability, reservations, replenishment, valuation |
| Mühasibat | accounts, currencies, taxes, wallets, payments, accounting entries, open items, reconciliation, maliyyə hesabatları |
| İstehsal | BOM, routing, work centers, production orders, cost və traceability reports |
| POS | registers, payment types, shifts, sales, returns, cash movements və `/pos/sync` cihaz protokolu |
| Mağaza, çıxış və inteqrasiya | storefront sazlaması və public kataloq, output templates, document outputs, reports, workflow, webhook/connector, business network və bulk action-ları |

Endpointin yalnız HTTP kontraktını yox, post, cancel və state dəyişikliyinin domen təsirini başa düşmək üçün [Biznes sənədləri və sistem təsirləri](../architecture/business-documents) bölməsindən istifadə edin. Entity-nin nə üçün mövcud olduğunu başa düşmək üçün [entity xəritəsini](../domains/entity-map), AI ilə işləyərkən isə [AI sistem xəritəsini](../ai/system-map) istifadə edin.
