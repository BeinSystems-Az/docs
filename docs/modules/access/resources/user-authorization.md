---
sidebar_position: 7
title: İstifadəçi səlahiyyətləri
---

# İstifadəçi səlahiyyətləri

İstifadəçi səlahiyyətləri resursu istifadəçi və giriş modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** İstifadəçi səlahiyyətləri resursu istifadəçi və giriş modulunda aid olduğu məlumat və əməliyyatları idarə edir. Giriş idarəetməsi hansı əməliyyatın görülə biləcəyini müəyyən edir; özü biznes sənədi yaratmır.

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
| `role_ids` | array/object | Resursun “role ids” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `role_ids[]` | number | Massiv elementində “role ids” dəyərini saxlayır. |
| `access_mode` | enum/string | Resursun “access mode” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `new_role_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `permissions` | array/object | Resursun “permissions” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `permissions[]` | array/object | Massiv elementində “permissions” dəyərini saxlayır. |
| `expected_version` | number | Resursun “expected version” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `comment` | string/null | Resursun “comment” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### İstifadəçi səlahiyyətləri qeydini oxu

**Endpoint** · `GET /api/v1/users/{user}/authorization`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `authorization.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "user": "22222222-2222-4222-8222-222222222222"
  },
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
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### İstifadəçi səlahiyyətləri qeydini yenilə

**Endpoint** · `PUT /api/v1/users/{user}/authorization`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `authorization.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "user": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "role_ids": [
      1
    ],
    "access_mode": "role",
    "new_role_name": "Nümunə dəyər",
    "permissions": [
      {}
    ],
    "expected_version": 1,
    "comment": "Sintetik yoxlama qeydi"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "role_ids": [
      1
    ],
    "access_mode": "role",
    "new_role_name": "Nümunə dəyər",
    "permissions": [
      {}
    ],
    "expected_version": 1,
    "comment": "Sintetik yoxlama qeydi"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İstifadəçi səlahiyyətləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

