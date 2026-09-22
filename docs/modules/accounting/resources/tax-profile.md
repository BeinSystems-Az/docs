---
sidebar_position: 25
title: Vergi profili
---

# Vergi profili

Vergi profili resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `tax_profile`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Vergi profili resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu modul maliyyə nəticəsini və baş kitabı idarə edir; fiziki stok hərəkətinin mənbəyi satış, alış və stok sənədləridir.

**İlkin şərtlər.** Tenant, uyğun filial, valyuta, hesab planı və sənədin tələb etdiyi tərəfdaş və ya maliyyə hesabı əvvəlcədən mövcud olmalıdır.

**İş axını.** Əvvəl master məlumatları qurun, sənədi draft yaradın, sətirləri yoxlayın, sonra uyğun state action ilə post edin və hesabatlardan nəticəni izləyin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Master məlumat dəyişiklikləri jurnal yaratmır. Maliyyə sənədinin `posted` vəziyyəti baş kitab və borc nəticəsi yarada, `cancelled` isə həmin nəticəni revers edə bilər.

**Əlaqəli resurslar.** Satış, satınalma, tərəfdaşlar, stok, layihələr və hesabatlar.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `package_code` | string/null | Əlaqəli qeydin response-da göstərilən kodudur. |
| `package_version` | number | Resursun “package version” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `taxpayer_kind` | string/null | Resursun “taxpayer kind” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `primary_regime` | string/null | Resursun “primary regime” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `vat_registered` | boolean | Resursun “vat registered” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `effective_from` | datetime/null | Resursun “effective from” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `effective_to` | datetime/null | Resursun “effective to” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `review_state` | string/null | Resursun “review state” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `confirmed_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `settings` | array/object | Resursun “settings” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Vergi profili qeydini oxu

**Endpoint** · `GET /api/v1/tax-profile`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `tax_profile.read`

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
    "status": "active",
    "package_code": "Nümunə dəyər",
    "package_version": 1,
    "taxpayer_kind": "Nümunə dəyər",
    "primary_regime": "Nümunə dəyər",
    "vat_registered": true,
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "review_state": "Nümunə dəyər",
    "confirmed_at": "2026-09-22T10:30:00+04:00",
    "settings": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Vergi profili qeydini yenilə

**Endpoint** · `PUT /api/v1/tax-profile`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `tax_profile.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "package_code": "Nümunə dəyər",
    "taxpayer_kind": "Nümunə dəyər",
    "primary_regime": "Nümunə dəyər",
    "vat_registered": true,
    "confirmed": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "status": "active",
    "package_code": "Nümunə dəyər",
    "package_version": 1,
    "taxpayer_kind": "Nümunə dəyər",
    "primary_regime": "Nümunə dəyər",
    "vat_registered": true,
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "review_state": "Nümunə dəyər",
    "confirmed_at": "2026-09-22T10:30:00+04:00",
    "settings": {},
    "confirmed": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Vergi profili konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Vergi profili: hazırlıq vəziyyətini yoxla

**Endpoint** · `GET /api/v1/tax-profile/readiness`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `tax_profile.read`

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
    "status": "active",
    "package_code": "Nümunə dəyər",
    "package_version": 1,
    "taxpayer_kind": "Nümunə dəyər",
    "primary_regime": "Nümunə dəyər",
    "vat_registered": true,
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "review_state": "Nümunə dəyər",
    "confirmed_at": "2026-09-22T10:30:00+04:00",
    "settings": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Vergi profili: sxemi al

**Endpoint** · `GET /api/v1/tax-profile/schema`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `tax_profile.read`

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
    "status": "active",
    "package_code": "Nümunə dəyər",
    "package_version": 1,
    "taxpayer_kind": "Nümunə dəyər",
    "primary_regime": "Nümunə dəyər",
    "vat_registered": true,
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "review_state": "Nümunə dəyər",
    "confirmed_at": "2026-09-22T10:30:00+04:00",
    "settings": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

