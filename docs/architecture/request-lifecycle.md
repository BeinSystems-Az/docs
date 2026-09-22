---
sidebar_position: 2
---

# Sorğunun həyat dövrü

Bu səhifə `v1` API sorğusunun hansı kontekstlərdən keçdiyini izah edir. Endpointin field-ləri, permission adı və status kodları üçün həmişə uyğun API referansını əsas götürün.

```mermaid
sequenceDiagram
  participant C as İnteqrator
  participant A as API
  participant T as Tenant konteksti
  participant B as Filial konteksti
  participant D as Domen əməliyyatı
  participant P as PostgreSQL

  C->>A: HTTP sorğusu və credential
  A->>T: Tenant və istifadəçini müəyyən edir
  T->>P: Tenant schema-nı aktivləşdirir
  A->>B: Filial scope-u yoxlanır
  A->>D: Permission və input yoxlaması
  D->>P: Resursu oxuyur və ya dəyişir
  D-->>A: Nəticə
  A-->>C: Standart JSON response
```

## 1. Autentifikasiya və tenant seçimi

Əksər `v1` route-ları Bearer credential ilə qorunur. Xarici JWT tenant hesabı və user login-i, `bei_int_...` integration token isə bağlı integration client və user üzərindən həll olunur. Backend tenantı yoxlayır, sonra tenant database kontekstini aktivləşdirir. Tenant, client və ya istifadəçi tapılmadıqda sorğu `401` ilə tamamlanır.

Tenant provisioning hələ hazır deyilsə, qorunan route `503` qaytara bilər. Credential formatları və istisna endpointlər üçün [Autentifikasiya və kontekst](../api/authentication) səhifəsinə baxın.

## 2. Filial scope-u

Filial-scope route-larında header istifadə edilmir. `GET` və `HEAD` sorğularında `?filter[branch_id]=<uuid>` (və ya metadata formatında `?filter[branch_id][value]=<uuid>`) verilməzsə middleware istifadəçinin bütün icazəli aktiv filiallarını `branch_ids` scope-u kimi tətbiq edir. Konkret filial filteri göndərildikdə həmin filial aktiv və istifadəçi üçün əlçatan olmalıdır.

Yazma sorğularında konkret filial request body-də `branch_id` ilə seçilir. Field göndərilməzsə istifadəçinin aktiv default filialı, sonra ilk əlçatan aktiv filial seçilir. Seçilən filial request attribute-larında həm `branch_id`, həm də tək elementli `branch_ids` scope-u kimi controller və model qatına ötürülür.

## 3. İcazə, input və əməliyyat

Route controller-i əvvəl resursa uyğun `read`, `create`, `update` və ya `delete` permission-ını yoxlayır. İcazə çatmadıqda nəticə `403` olur.

Yazma sorğusu request data kontraktı ilə yoxlanır. Yoxlamadan keçən məlumat domen əməliyyatına verilir; əməliyyat state keçidi, mövcudluq, əlaqəli sənədlər və mühasibat dövrü kimi biznes şərtlərini ayrıca yoxlaya bilər. Buna görə sintaktik cəhətdən düzgün JSON da `422` ilə rədd edilə bilər.

## 4. Nəticə və xəta davranışı

Uğurlu cavab `status`, `message` və `data` zərfində qaytarılır. Siyahı endpointləri pagination məlumatı da qaytara bilər. Cavab zərfi, pagination və standart xəta formatı [API kontraktı](../api/contract) səhifəsindədir.

Bir biznes sənədinin post və ya cancel əməliyyatı stok, jurnal və digər nəticələri eyni domen əməliyyatında yarada və ya geri ala bilər. Bu təsirlərin ümumi izahı [Biznes sənədləri](./business-documents), konkret kontraktı isə həmin resursun endpoint səhifələrində verilir.
