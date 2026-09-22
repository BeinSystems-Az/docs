---
sidebar_position: 6
title: Rollar
---

# Rollar

Rollar resursu istifadəçi və giriş modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Rollar resursu istifadəçi və giriş modulunda aid olduğu məlumat və əməliyyatları idarə edir. Giriş idarəetməsi hansı əməliyyatın görülə biləcəyini müəyyən edir; özü biznes sənədi yaratmır.

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
| `is_system` | boolean | Resursun “is system” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `permissions_version` | number | Resursun “permissions version” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `hidden_data_groups` | array/object | Resursun “hidden data groups” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `guard_name` | enum/string | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `version` | number | Optimistic locking zamanı paralel dəyişikliyi aşkarlamaq üçün istifadə olunur. |
| `permissions` | array/object | Resursun “permissions” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `rule_count` | number | Əlaqəli qeydlərin hesablanmış sayıdır. |
| `permissions[]` | array/object | Massiv elementində “permissions” dəyərini saxlayır. |
| `expected_version` | number | Resursun “expected version” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `comment` | string/null | Resursun “comment” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `rules` | string/null | Resursun “rules” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Rollar siyahısını al

**Endpoint** · `GET /api/v1/roles`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `authorization.manage` global permission

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
  "message": "Roles listed successfully.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "Nümunə qeyd",
      "is_system": true,
      "permissions_version": 1,
      "hidden_data_groups": {},
      "guard_name": "api",
      "version": 1,
      "permissions": {},
      "rule_count": "Nümunə dəyər"
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Rollar qeydi yarat

**Endpoint** · `POST /api/v1/roles`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `authorization.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "guard_name": "api",
    "permissions": [
      {}
    ],
    "expected_version": 1,
    "comment": "Sintetik yoxlama qeydi"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Role created successfully.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "is_system": true,
    "permissions_version": 1,
    "hidden_data_groups": {},
    "guard_name": "api",
    "version": 1,
    "rule_count": "Nümunə dəyər",
    "permissions": [
      {}
    ],
    "expected_version": 1,
    "comment": "Sintetik yoxlama qeydi"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Rollar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Rollar qeydini sil

**Endpoint** · `DELETE /api/v1/roles/{role}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `authorization.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "role": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Role deleted successfully.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Rollar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Rollar qeydini oxu

**Endpoint** · `GET /api/v1/roles/{role}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `authorization.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "role": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Role retrieved successfully.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "is_system": true,
    "permissions_version": 1,
    "hidden_data_groups": {},
    "guard_name": "api",
    "version": 1,
    "permissions": {},
    "rules": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Rollar qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/roles/{role}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `authorization.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "role": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "guard_name": "api",
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
  "message": "Role updated successfully.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "is_system": true,
    "permissions_version": 1,
    "hidden_data_groups": {},
    "guard_name": "api",
    "version": 1,
    "rule_count": "Nümunə dəyər",
    "permissions": [
      {}
    ],
    "expected_version": 1,
    "comment": "Sintetik yoxlama qeydi"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Rollar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

