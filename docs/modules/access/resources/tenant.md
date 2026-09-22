---
sidebar_position: 9
title: Tenant idarəetməsi
---

# Tenant idarəetməsi

Tenant idarəetməsi resursu istifadəçi və giriş modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
Public endpointlər token tələb etmir; rate-limit və endpointə aid validation qaydaları tətbiq edilir.
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Tenant idarəetməsi resursu istifadəçi və giriş modulunda aid olduğu məlumat və əməliyyatları idarə edir. Giriş idarəetməsi hansı əməliyyatın görülə biləcəyini müəyyən edir; özü biznes sənədi yaratmır.

**İlkin şərtlər.** Tenant və idarəetmə səlahiyyətinə malik autentifikasiya konteksti olmalıdır.

**İş axını.** Tenant və filialı qurun, istifadəçi və rolları yaradın, permission və policy-ləri təyin edin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. İcazə və görünürlük dəyişir; stok və jurnal təsiri yoxdur, təhlükəsizlik audit izi yarana bilər.

**Əlaqəli resurslar.** Bütün modullar, audit və inteqrasiya client-ləri.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `account` | string/null | Resursun “account” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `login` | string/null | Resursun “login” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `tax_id` | UUID | Qeydi əlaqəli “tax” resursuna bağlayır. |
| `surname` | string/null | Resursun “surname” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `email` | string/null | Resursun “email” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `phone` | string/null | Resursun “phone” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `pin` | string/null | Resursun “pin” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `employee_id` | UUID | Qeydi əlaqəli “employee” resursuna bağlayır. |
| `schema_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |

## Endpointlər

### Tenant idarəetməsi qeydini sil

**Endpoint** · `DELETE /api/v1/tenant/{id}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `settings.edit` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "id": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Tenant uğurla silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Tenant idarəetməsi konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Tenant idarəetməsi: tenant qeydiyyatdan keçir

**Endpoint** · `POST /api/v1/tenant/register`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · Ayrıca resource permission tələb etmir.

**Request JSON**

```json
{
  "headers": {},
  "path": {},
  "query": {},
  "body": {
    "account": "demo-company",
    "login": "demo.user",
    "name": "Nümunə qeyd",
    "tax_id": "33333333-3333-4333-8333-333333333333",
    "surname": "Məmmədov",
    "email": "demo@example.test",
    "phone": "+994501234567",
    "pin": "4827",
    "status": "active",
    "employee_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "status": "active",
    "data": {},
    "schema_name": "Nümunə dəyər",
    "account": "demo-company",
    "login": "demo.user",
    "tax_id": "33333333-3333-4333-8333-333333333333",
    "surname": "Məmmədov",
    "email": "demo@example.test",
    "phone": "+994501234567",
    "pin": "4827",
    "employee_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Tenant idarəetməsi konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

