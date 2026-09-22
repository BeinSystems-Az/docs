---
sidebar_position: 5
title: Şəbəkə profili
---

# Şəbəkə profili

Şəbəkə profili resursu biznes şəbəkəsi modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Şəbəkə profili resursu biznes şəbəkəsi modulunda aid olduğu məlumat və əməliyyatları idarə edir. Şəbəkə qəbul və göndəriş qatıdır; yerli biznes sənədi yalnız import/accept əməliyyatında yaranır.

**İlkin şərtlər.** Hər iki tərəfin profili, əlaqəsi və tələb olunan master-data mapping-ləri hazır olmalıdır.

**İş axını.** Profili tapın, əlaqə yaradın, mapping-ləri qurun, exchange göndərin və qarşı tərəfdə qəbul və ya rədd edin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Qəbul edilən exchange yerli sənəd yarada bilər; rədd yalnız mübadilə state-ni dəyişir.

**Əlaqəli resurslar.** Tərəfdaşlar, satış, satınalma və inteqrasiyalar.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `tenant_id` | UUID | Qeydi əlaqəli “tenant” resursuna bağlayır. |
| `display_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `tax_id` | UUID | Qeydi əlaqəli “tax” resursuna bağlayır. |
| `email` | string/null | Resursun “email” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `phone` | string/null | Resursun “phone” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |

## Endpointlər

### Şəbəkə profili: axtar

**Endpoint** · `GET /api/v1/business-network/companies/search`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `business_network.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "account": "demo-company"
  },
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "tenant_id": "33333333-3333-4333-8333-333333333333",
    "display_name": "Nümunə dəyər",
    "tax_id": "33333333-3333-4333-8333-333333333333",
    "email": "demo@example.test",
    "phone": "+994501234567",
    "active": true,
    "account": "demo-company"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Şəbəkə profili qeydini oxu

**Endpoint** · `GET /api/v1/business-network/profile`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `business_network.view` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "tenant_id": "33333333-3333-4333-8333-333333333333",
    "display_name": "Nümunə dəyər",
    "tax_id": "33333333-3333-4333-8333-333333333333",
    "email": "demo@example.test",
    "phone": "+994501234567",
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

