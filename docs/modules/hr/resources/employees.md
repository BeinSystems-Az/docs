---
title: Əməkdaşlar
---

# Əməkdaşlar

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · uyğun resurs permission-ı
:::

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Employee master ID-si; sənəd owner_id-si buna istinad edir. |
| `partner_id` | UUID | Əməkdaşın fiziki şəxs qeydi. |
| `name` | dəyər | Şəxsin adı. |
| `started_on` | dəyər | İş dövrünün başlanğıcı. |
| `active` | dəyər | Əməkdaşın aktivliyi. |

## Endpointlər

### Əməkdaşları siyahıla

**Endpoint** · `GET /api/v1/hr/employees`

Şəxs və iş təyinatı ilə Employee master qeydini idarə edir; login hesabı yaratmır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {},
  "query": {
    "q": "Aysel"
  },
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": [],
  "links": {
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "per_page": 20,
    "total": 0
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Yoxdur; məlumat oxunur.

### Əməkdaş yarat

**Endpoint** · `POST /api/v1/hr/employees`

Şəxs və iş təyinatı ilə Employee master qeydini idarə edir; login hesabı yaratmır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {},
  "query": {},
  "body": {
    "name": "Aysel",
    "surname": "Əliyeva",
    "started_on": "2026-08-01"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "name": "Aysel",
    "surname": "Əliyeva",
    "active": true,
    "started_on": "2026-08-01",
    "assignments": []
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · active işçi təyinatını göstərir; deaktiv etmə cari iş dövrünü bitirir.

### Əməkdaşı oxu

**Endpoint** · `GET /api/v1/hr/employees/{employee}`

Şəxs və iş təyinatı ilə Employee master qeydini idarə edir; login hesabı yaratmır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {
    "employee": "22222222-2222-4222-8222-222222222222"
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
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "name": "Aysel",
    "surname": "Əliyeva",
    "active": true,
    "started_on": "2026-08-01",
    "assignments": []
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Yoxdur; məlumat oxunur.

### Əməkdaşı yenilə

**Endpoint** · `PUT|PATCH /api/v1/hr/employees/{employee}`

Şəxs və iş təyinatı ilə Employee master qeydini idarə edir; login hesabı yaratmır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {
    "employee": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Aysel",
    "started_on": "2026-08-01",
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "name": "Aysel",
    "surname": "Əliyeva",
    "active": true,
    "started_on": "2026-08-01",
    "assignments": []
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · active işçi təyinatını göstərir; deaktiv etmə cari iş dövrünü bitirir.
