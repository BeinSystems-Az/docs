---
sidebar_position: 4
---

# API əhatəsi və oxuma qaydası

Bu portal backend-in aktiv `/api/v1` route inventarını əhatə edir. İndiki snapshot 302 unikal URI və 535 OpenAPI operation-dan ibarətdir; Laravel-də `GET|HEAD` və `PUT|PATCH` kimi birgə qeyd olunan metodlar API referansında ayrıca HTTP operation kimi göstərilir. Health endpointləri `/api/health*` altında ayrıca saxlanılır.

## Referansın tərkibi

Hər operation aşağıdakı məlumatı verir:

- metod, path və route adı;
- tələb olunan credential və filial/tenant header-ləri;
- route parametrinin tipi;
- controller-in qəbul etdiyi request DTO-dan çıxarılan body sahələri və validation enum-ları;
- uğurlu `status` / `message` / `data` zərfi, mümkün pagination, 401, 403 və 422 xəta forması;
- endpointin aid olduğu ERP domeni.

`GET` siyahı operationlarında backend-in qaytardığı `data`, `links` və `meta` pagination zərfi görünür. Path identifikatorları, ayrıca göstərilmədikdə, UUID-dir. Nümunələrdə yalnız sintetik UUID və məlumat istifadə olunmalıdır.

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
| Çıxış və inteqrasiya | output templates, document outputs, reports, AI conversations və service-account action-ları |

Endpointin yalnız HTTP kontraktını yox, post, cancel və state dəyişikliyinin domen təsirini başa düşmək üçün [Biznes sənədləri və sistem təsirləri](../architecture/business-documents) bölməsindən istifadə edin.
