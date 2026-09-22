---
sidebar_position: 3
title: Authorization policy-ləri
---

# Authorization policy-ləri

Authorization policy-ləri resursu istifadəçi və giriş modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Authorization policy-ləri resursu istifadəçi və giriş modulunda aid olduğu məlumat və əməliyyatları idarə edir. Giriş idarəetməsi hansı əməliyyatın görülə biləcəyini müəyyən edir; özü biznes sənədi yaratmır.

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
| `name` | string/null | İstifadəçiyə görünən addır. |
| `description` | string/null | Qeyd haqqında əlavə izahdır. |
| `resource` | string/null | Resursun “resource” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `action` | string/null | Resursun “action” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `conditions` | array/object | Resursun “conditions” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `priority` | number | Resursun “priority” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `version` | number | Optimistic locking zamanı paralel dəyişikliyi aşkarlamaq üçün istifadə olunur. |
| `created_by` | string/null | Resursun “created by” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `published_by` | string/null | Resursun “published by” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `published_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `subjects` | array/object | Resursun “subjects” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `created_at` | datetime/null | Qeydin yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Qeydin son dəyişdirilmə vaxtıdır. |
| `key` | string/null | Resursun “key” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `title` | string/null | Resursun “title” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `section_key` | string/null | Resursun “section key” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `section_title` | string/null | Resursun “section title” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `actions` | string/null | Resursun “actions” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `attributes` | string/null | Resursun “attributes” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `expression_version` | number | Resursun “expression version” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `logical_operators` | string/null | Resursun “logical operators” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `comparison_operators` | string/null | Resursun “comparison operators” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `subject_types` | string/null | Resursun “subject types” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `statuses` | string/null | Resursun “statuses” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `resources` | object | POS cihazının serverdən delta və ya tam snapshot istədiyi resurs xəritəsidir. |
| `parent_id` | UUID | Qeydi əlaqəli “parent” resursuna bağlayır. |
| `login` | string/null | Resursun “login” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
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
| `role` | string/null | Resursun “role” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `value` | string/null | Resursun “value” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `label` | string/null | Resursun “label” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `user` | string/null | Resursun “user” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `department` | string/null | Resursun “department” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `options` | string/null | Resursun “options” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Authorization policy-ləri siyahısını al

**Endpoint** · `GET /api/v1/authorization/policies`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `authorization.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "resource": "sale_orders",
    "action": "read",
    "status": "active",
    "subject_type": "user",
    "subject_id": "33333333-3333-4333-8333-333333333333",
    "per_page": 1
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
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "Nümunə qeyd",
      "status": "active",
      "description": "Sintetik nümunə məlumatı",
      "resource": "sale_orders",
      "action": "read",
      "conditions": {},
      "priority": 1,
      "version": 1,
      "created_by": "Nümunə dəyər"
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

### Authorization policy-ləri qeydi yarat

**Endpoint** · `POST /api/v1/authorization/policies`

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
    "description": "Sintetik nümunə məlumatı",
    "resource": "sale_orders",
    "action": "read",
    "conditions": {},
    "priority": 1,
    "subjects": [
      {
        "type": "all",
        "id": "22222222-2222-4222-8222-222222222222"
      }
    ],
    "comment": "Sintetik yoxlama qeydi"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Authorization policy draft created.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "status": "active",
    "description": "Sintetik nümunə məlumatı",
    "resource": "sale_orders",
    "action": "read",
    "conditions": {},
    "priority": 1,
    "version": 1,
    "created_by": "Nümunə dəyər",
    "published_by": "Nümunə dəyər",
    "published_at": "2026-09-22T10:30:00+04:00",
    "type": "user",
    "subjects": [
      {
        "type": "all",
        "id": "22222222-2222-4222-8222-222222222222"
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Authorization policy-ləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Authorization policy-ləri qeydini oxu

**Endpoint** · `GET /api/v1/authorization/policies/{policy}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `authorization.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "policy": "22222222-2222-4222-8222-222222222222"
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
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "status": "active",
    "description": "Sintetik nümunə məlumatı",
    "resource": "sale_orders",
    "action": "read",
    "conditions": {},
    "priority": 1,
    "version": 1,
    "created_by": "Nümunə dəyər",
    "published_by": "Nümunə dəyər",
    "published_at": "2026-09-22T10:30:00+04:00",
    "subjects": {},
    "type": "user"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Authorization policy-ləri qeydini yenilə

**Endpoint** · `PUT /api/v1/authorization/policies/{policy}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `authorization.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "policy": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "expected_version": 1,
    "name": "Nümunə qeyd",
    "description": "Sintetik nümunə məlumatı",
    "resource": "sale_orders",
    "action": "read",
    "conditions": {},
    "priority": 1,
    "subjects": [
      {
        "type": "all",
        "id": "22222222-2222-4222-8222-222222222222"
      }
    ],
    "comment": "Sintetik yoxlama qeydi"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Authorization policy draft updated.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "status": "active",
    "description": "Sintetik nümunə məlumatı",
    "resource": "sale_orders",
    "action": "read",
    "conditions": {},
    "priority": 1,
    "version": 1,
    "created_by": "Nümunə dəyər",
    "published_by": "Nümunə dəyər",
    "published_at": "2026-09-22T10:30:00+04:00",
    "subjects": [
      {
        "id": "22222222-2222-4222-8222-222222222222",
        "type": "all"
      }
    ],
    "type": "user",
    "expected_version": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Authorization policy-ləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Authorization policy-ləri: arxivləşdir

**Endpoint** · `POST /api/v1/authorization/policies/{policy}/archive`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `authorization.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "policy": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "expected_version": 1,
    "comment": "Sintetik yoxlama qeydi"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Authorization policy archived.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "status": "active",
    "description": "Sintetik nümunə məlumatı",
    "resource": "sale_orders",
    "action": "read",
    "conditions": {},
    "priority": 1,
    "version": 1,
    "created_by": "Nümunə dəyər",
    "published_by": "Nümunə dəyər",
    "published_at": "2026-09-22T10:30:00+04:00",
    "subjects": {},
    "type": "user",
    "expected_version": 1,
    "comment": "Sintetik yoxlama qeydi"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Authorization policy-ləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Authorization policy-ləri: dərc et

**Endpoint** · `POST /api/v1/authorization/policies/{policy}/publish`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `authorization.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "policy": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "expected_version": 1,
    "comment": "Sintetik yoxlama qeydi"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Authorization policy published.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "status": "active",
    "description": "Sintetik nümunə məlumatı",
    "resource": "sale_orders",
    "action": "read",
    "conditions": {},
    "priority": 1,
    "version": 1,
    "created_by": "Nümunə dəyər",
    "published_by": "Nümunə dəyər",
    "published_at": "2026-09-22T10:30:00+04:00",
    "subjects": {},
    "type": "user",
    "expected_version": 1,
    "comment": "Sintetik yoxlama qeydi"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Authorization policy-ləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Authorization policy-ləri kataloqunu al

**Endpoint** · `GET /api/v1/authorization/policies/catalog`

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
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "status": "active",
    "description": "Sintetik nümunə məlumatı",
    "resource": "sale_orders",
    "action": "read",
    "conditions": {},
    "priority": 1,
    "version": 1,
    "created_by": "Nümunə dəyər",
    "published_by": "Nümunə dəyər",
    "published_at": "2026-09-22T10:30:00+04:00",
    "key": "sample_key",
    "title": "Nümunə başlıq",
    "section_key": "Nümunə dəyər",
    "section_title": "Nümunə dəyər",
    "actions": "Nümunə dəyər",
    "attributes": "Nümunə dəyər",
    "expression_version": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Authorization policy-ləri: subject seçimlərini al

**Endpoint** · `GET /api/v1/authorization/policies/subjects`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `authorization.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "type": "user",
    "q": "qəhvə",
    "limit": 1
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
    "name": "Nümunə qeyd",
    "status": "active",
    "description": "Sintetik nümunə məlumatı",
    "resource": "sale_orders",
    "action": "read",
    "conditions": {},
    "priority": 1,
    "version": 1,
    "created_by": "Nümunə dəyər",
    "published_by": "Nümunə dəyər",
    "published_at": "2026-09-22T10:30:00+04:00",
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "login": "demo.user",
    "surname": "Məmmədov",
    "phone": "+994501234567",
    "email": "demo@example.test",
    "pin": "4827",
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

