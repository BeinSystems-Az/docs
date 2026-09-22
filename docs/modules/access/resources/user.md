---
sidebar_position: 10
title: İstifadəçilər
---

# İstifadəçilər

İstifadəçilər resursu istifadəçi və giriş modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** İstifadəçilər resursu istifadəçi və giriş modulunda aid olduğu məlumat və əməliyyatları idarə edir. Giriş idarəetməsi hansı əməliyyatın görülə biləcəyini müəyyən edir; özü biznes sənədi yaratmır.

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
| `login` | string/null | Resursun “login” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `surname` | string/null | Resursun “surname” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `phone` | string/null | Resursun “phone” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `email` | string/null | Resursun “email” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `pin` | string/null | Resursun “pin” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |
| `employee_id` | UUID | Qeydi əlaqəli “employee” resursuna bağlayır. |
| `department_id` | UUID | Qeydi əlaqəli “department” resursuna bağlayır. |
| `must_set_pin` | string/null | Resursun “must set pin” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `default_branch_id` | UUID | Qeydi əlaqəli “default branch” resursuna bağlayır. |
| `hidden_data_groups` | string/null | Resursun “hidden data groups” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `role_ids` | array/object | Resursun “role ids” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `role_ids[]` | number | Massiv elementində “role ids” dəyərini saxlayır. |
| `allowed_branch_ids` | array/object | Resursun “allowed branch ids” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `allowed_branch_ids[]` | UUID | Massiv elementində “allowed branch ids” dəyərini saxlayır. |

## Endpointlər

### İstifadəçilər: icazələri al

**Endpoint** · `GET /api/v1/me/permissions`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · Ayrıca resource permission tələb etmir.

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
  "message": "Permissions retrieved successfully.",
  "data": {
    "name": "Nümunə qeyd",
    "login": "demo.user",
    "surname": "Məmmədov",
    "phone": "+994501234567",
    "email": "demo@example.test",
    "pin": "4827",
    "active": true,
    "employee_id": "33333333-3333-4333-8333-333333333333",
    "department_id": "33333333-3333-4333-8333-333333333333",
    "must_set_pin": "Nümunə dəyər",
    "default_branch_id": "33333333-3333-4333-8333-333333333333",
    "hidden_data_groups": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### İstifadəçilər siyahısını al

**Endpoint** · `GET /api/v1/users`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `users.admin` global permission

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
  "data": [
    {
      "name": "Nümunə qeyd",
      "login": "demo.user",
      "surname": "Məmmədov",
      "phone": "+994501234567",
      "email": "demo@example.test",
      "pin": "4827",
      "active": true,
      "employee_id": "33333333-3333-4333-8333-333333333333",
      "department_id": "33333333-3333-4333-8333-333333333333",
      "must_set_pin": "Nümunə dəyər"
    }
  ],
  "links": {
    "first": "https://erp.example.test/api/v1/resource?page=1",
    "last": "https://erp.example.test/api/v1/resource?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "per_page": 20,
    "to": 1,
    "total": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### İstifadəçilər qeydi yarat

**Endpoint** · `POST /api/v1/users`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `users.admin` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "login": "demo.user",
    "name": "Nümunə qeyd",
    "surname": "Məmmədov",
    "phone": "+994501234567",
    "email": "demo@example.test",
    "pin": "4827",
    "active": true,
    "employee_id": "33333333-3333-4333-8333-333333333333",
    "role_ids": [
      1
    ],
    "allowed_branch_ids": [
      "33333333-3333-4333-8333-333333333333"
    ],
    "default_branch_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "login": "demo.user",
    "surname": "Məmmədov",
    "phone": "+994501234567",
    "email": "demo@example.test",
    "pin": "4827",
    "active": true,
    "employee_id": "33333333-3333-4333-8333-333333333333",
    "department_id": "33333333-3333-4333-8333-333333333333",
    "must_set_pin": "Nümunə dəyər",
    "default_branch_id": "33333333-3333-4333-8333-333333333333",
    "hidden_data_groups": "Nümunə dəyər",
    "role_ids": [
      1
    ],
    "allowed_branch_ids": [
      "33333333-3333-4333-8333-333333333333"
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İstifadəçilər konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### İstifadəçilər qeydini sil

**Endpoint** · `DELETE /api/v1/users/{user}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `users.admin` global permission

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
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · İstifadəçilər konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### İstifadəçilər qeydini oxu

**Endpoint** · `GET /api/v1/users/{user}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `users.admin` global permission

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
    "name": "Nümunə qeyd",
    "login": "demo.user",
    "surname": "Məmmədov",
    "phone": "+994501234567",
    "email": "demo@example.test",
    "pin": "4827",
    "active": true,
    "employee_id": "33333333-3333-4333-8333-333333333333",
    "department_id": "33333333-3333-4333-8333-333333333333",
    "must_set_pin": "Nümunə dəyər",
    "default_branch_id": "33333333-3333-4333-8333-333333333333",
    "hidden_data_groups": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### İstifadəçilər qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/users/{user}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `users.admin` global permission

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
    "login": "demo.user",
    "name": "Nümunə qeyd",
    "surname": "Məmmədov",
    "phone": "+994501234567",
    "email": "demo@example.test",
    "pin": "4827",
    "active": true,
    "employee_id": "33333333-3333-4333-8333-333333333333",
    "role_ids": [
      1
    ],
    "allowed_branch_ids": [
      "33333333-3333-4333-8333-333333333333"
    ],
    "default_branch_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "login": "demo.user",
    "surname": "Məmmədov",
    "phone": "+994501234567",
    "email": "demo@example.test",
    "pin": "4827",
    "active": true,
    "employee_id": "33333333-3333-4333-8333-333333333333",
    "department_id": "33333333-3333-4333-8333-333333333333",
    "must_set_pin": "Nümunə dəyər",
    "default_branch_id": "33333333-3333-4333-8333-333333333333",
    "hidden_data_groups": "Nümunə dəyər",
    "role_ids": [
      1
    ],
    "allowed_branch_ids": [
      "33333333-3333-4333-8333-333333333333"
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İstifadəçilər konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

