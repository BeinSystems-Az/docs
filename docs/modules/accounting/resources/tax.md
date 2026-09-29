---
sidebar_position: 24
title: Vergilər
---

# Vergilər

Vergilər resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `taxes`
:::

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `package_code` | string/null | Əlaqəli qeydin response-da göstərilən kodudur. |
| `package_version` | number | Resursun “package version” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `effective_from` | datetime/null | Resursun “effective from” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `effective_to` | datetime/null | Resursun “effective to” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `is_statutory` | boolean | Resursun “is statutory” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `scheme` | string/null | Resursun “scheme” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `treatment` | string/null | Resursun “treatment” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `calculation_method` | string/null | Resursun “calculation method” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `rate` | number | Resursun “rate” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `impact` | string/null | Resursun “impact” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `usage` | enum/string | Resursun “usage” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `selection_group` | string/null | Resursun “selection group” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `applicability` | string/null | Resursun “applicability” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `sequence` | number | Siyahıda emal və görünmə ardıcıllığını müəyyən edir. |
| `base_mode` | string/null | Resursun “base mode” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `reporting_code` | string/null | Əlaqəli qeydin response-da göstərilən kodudur. |
| `posting_account_id` | UUID | Qeydi əlaqəli “posting account” resursuna bağlayır. |
| `label` | string/null | Resursun “label” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Vergilər siyahısını al

**Endpoint** · `GET /api/v1/taxes`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `taxes.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "direction": "sale",
    "document_date": "2026-09-22",
    "usage": "document",
    "filter": {
      "direction": "sale",
      "document_date": "2026-09-22",
      "usage": "document"
    }
  },
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": [
    {
      "code": "DEMO",
      "name": "Nümunə qeyd",
      "package_code": "Nümunə dəyər",
      "package_version": 1,
      "effective_from": "Nümunə dəyər",
      "effective_to": "Nümunə dəyər",
      "is_statutory": true,
      "active": true,
      "scheme": "Nümunə dəyər",
      "treatment": "Nümunə dəyər"
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Vergilər qeydini oxu

**Endpoint** · `GET /api/v1/taxes/{tax}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `taxes.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "tax": "22222222-2222-4222-8222-222222222222"
  },
  "query": {
    "direction": "sale",
    "document_date": "2026-09-22",
    "usage": "document",
    "filter": {
      "direction": "sale",
      "document_date": "2026-09-22",
      "usage": "document"
    }
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
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "package_code": "Nümunə dəyər",
    "package_version": 1,
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "is_statutory": true,
    "active": true,
    "scheme": "Nümunə dəyər",
    "treatment": "Nümunə dəyər",
    "calculation_method": "Nümunə dəyər",
    "rate": 1,
    "impact": "Nümunə dəyər",
    "usage": "document",
    "selection_group": "Nümunə dəyər",
    "applicability": "Nümunə dəyər",
    "sequence": 1,
    "base_mode": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

