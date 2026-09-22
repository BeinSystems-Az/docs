---
sidebar_position: 3
slug: /api/catalog/categories
---

# Kateqoriyalar

:::info Kontekst
`Bearer` JWT və ya integration token · `categories.read/create/update/delete` permission-ları · tenant konteksti; oxuda `filter.branch_id`, yazmada body `branch_id` ilə filial seçimi
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Kateqoriya məhsulları iyerarxik qruplaşdıran master məlumatdır; stok və maliyyə hərəkəti yaratmır.

**İlkin şərtlər.** Tenant və filial konteksti tələb olunur; alt kateqoriya üçün `parent_id` ilə mövcud ana kateqoriya seçilir.

**İş axını.** Kateqoriyanı yaradın, lazım gələrsə onu ana kateqoriyaya bağlayın, sonra məhsul və şablonlarda seçin.

**State-lər və biznes təsiri.** Lifecycle state-i yoxdur; `active` seçimi gələcək kataloq seçimlərinə təsir edir, tarixçəyə yox.

**Əlaqəli resurslar.** Məhsullar və məhsul şablonları.

**Əsas məhdudiyyətlər.** `categories` resource permission-ları və cari tenant/filial scope-u tətbiq edilir; `parent_id` həmin scope-da olmalıdır.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Kateqoriyanın dəyişməz identifikatorudur. |
| `name` | string | Kataloqda görünən unikal addır. |
| `parent_id` | UUID/null | Alt kateqoriyanı ana kateqoriyaya bağlayır. |
| `parent_name` | string/null | Response-da ana kateqoriyanın görünən adıdır. |
| `active` | boolean | Kateqoriyanın seçimlərdə görünməsini idarə edir. |
| `customFields` | object | Tenant-a məxsus dinamik sahələri qəbul edir; response-da onların açarları root səviyyəsində qaytarılır. |
| `created_at` | datetime/null | Yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Son dəyişiklik vaxtıdır. |

## Endpointlər

### Siyahıla

**Endpoint** · `GET /api/v1/categories`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "query": "demo",
    "page": 1,
    "per_page": 25
  },
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Kateqoriyalar yükləndi.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "Qəhvə",
      "parent_id": null,
      "active": true
    }
  ],
  "links": {
    "first": null,
    "last": null,
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "path": "/api/v1/categories",
    "per_page": 25,
    "to": 1,
    "total": 1
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Yoxdur.

### Yarat

**Endpoint** · `POST /api/v1/categories`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "name": "Qəhvə",
    "parent_id": null,
    "active": true
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Kateqoriya yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Qəhvə",
    "parent_id": null,
    "parent": null,
    "parent_name": null,
    "active": true
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Master-data yazılır; stok və jurnal yaranmır.

### Oxu

**Endpoint** · `GET /api/v1/categories/{category}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "category": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Kateqoriya yükləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Qəhvə",
    "parent_id": null,
    "parent": null,
    "parent_name": null,
    "active": true
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Yoxdur.

### Tam yenilə

**Endpoint** · `PUT /api/v1/categories/{category}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "category": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Qəhvə",
    "parent_id": null,
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Kateqoriya yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Qəhvə",
    "parent_id": null,
    "parent": null,
    "parent_name": null,
    "active": true
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Gələcək istifadəyə təsir edir; tarixi sənədlər yenidən hesablanmır.

### Qismən yenilə

**Endpoint** · `PATCH /api/v1/categories/{category}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "category": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Premium qəhvə"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Kateqoriya yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Premium qəhvə",
    "parent_id": null,
    "parent": null,
    "parent_name": null,
    "active": true
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Gələcək istifadəyə təsir edir; tarixi sənədlər yenidən hesablanmır.

### Sil

**Endpoint** · `DELETE /api/v1/categories/{category}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "category": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Kateqoriya arxivləndi.",
  "data": null
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Master-data silinir; tarixi əməliyyatlar dəyişmir.
