---
sidebar_position: 6
slug: /api/catalog/product-packagings
---

# Qablaşdırmalar

:::info Kontekst
`Bearer` JWT və ya integration token · `product_packagings.read/create/update/delete` permission-ları · tenant konteksti; oxuda `filter.branch_id`, yazmada body `branch_id` ilə filial seçimi
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Qablaşdırma alış/satış vahidini məhsulun inventar vahidinə çevirir və ayrıca qiymət saxlaya bilir.

**İlkin şərtlər.** Tenant və filial konteksti ilə mövcud `product_id` və `unit_id` seçilməlidir.

**İş axını.** Məhsulu və qablaşdırma vahidini seçin, inventar vahidi əmsalını və qiymətləri yazın, sonra sənəd sətirlərində istifadə edin.

**State-lər və biznes təsiri.** Lifecycle state-i yoxdur; `active` seçimi yeni alış/satış seçimlərinə təsir edir, tarixi sənədləri dəyişmir.

**Əlaqəli resurslar.** Məhsullar, ölçü vahidləri, alış və satış sənəd sətirləri.

**Əsas məhdudiyyətlər.** `product_packagings` resource permission-ları və cari tenant/filial scope-u tətbiq edilir; məhsul və vahid identifikatorları həmin scope-da olmalıdır.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Qablaşdırmanın identifikatorudur. |
| `product_id` | UUID | Qablaşdırmanın aid olduğu məhsuldur. |
| `product_name` | string/null | Response-da məhsulun görünən adıdır. |
| `unit_id` | UUID | Qutu/paket kimi satış-alış vahididir. |
| `unit_name` | string/null | Response-da qablaşdırma vahidinin adıdır. |
| `inventory_unit_id` | UUID/null | Response-da məhsulun əsas inventar vahididir. |
| `inventory_unit_name` | string/null | Response-da əsas inventar vahidinin adıdır. |
| `quantity_in_inventory_unit` | decimal | Bir qablaşdırmadakı inventar vahidi sayıdır. |
| `purchase_price` | decimal | Qablaşdırma üzrə alış qiymətidir. |
| `sale_price` | decimal | Qablaşdırma üzrə satış qiymətidir. |
| `barcode` | string/null | Qablaşdırmanı skan etmək üçün koddur. |
| `active` | boolean | Qablaşdırmanın seçimlərdə görünməsini idarə edir. |
| `created_at` | datetime/null | Yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Son dəyişiklik vaxtıdır. |

## Endpointlər

### Siyahıla

**Endpoint** · `GET /api/v1/product-packagings`

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
  "message": "Product packagings listed successfully.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "product_id": "33333333-3333-4333-8333-333333333333",
      "product_name": "Arabica qəhvə",
      "unit_id": "11111111-1111-4111-8111-111111111111",
      "unit_name": "Qutu",
      "quantity_in_inventory_unit": "12.0000",
      "purchase_price": "18.0000",
      "sale_price": "25.5000",
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
    "path": "/api/v1/product-packagings",
    "per_page": 25,
    "to": 1,
    "total": 1
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Yoxdur.

### Yarat

**Endpoint** · `POST /api/v1/product-packagings`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "product_id": "33333333-3333-4333-8333-333333333333",
    "unit_id": "11111111-1111-4111-8111-111111111111",
    "quantity_in_inventory_unit": 12,
    "purchase_price": 18,
    "sale_price": 25.5,
    "active": true
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Product packaging created successfully.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "product_name": "Arabica qəhvə",
    "unit_id": "11111111-1111-4111-8111-111111111111",
    "unit_name": "Qutu",
    "quantity_in_inventory_unit": "12.0000",
    "purchase_price": "18.0000",
    "sale_price": "25.5000",
    "active": true
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Master-data yazılır; stok və jurnal yaranmır.

### Oxu

**Endpoint** · `GET /api/v1/product-packagings/{product_packaging}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "product_packaging": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Product packaging details.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "product_name": "Arabica qəhvə",
    "unit_id": "11111111-1111-4111-8111-111111111111",
    "unit_name": "Qutu",
    "quantity_in_inventory_unit": "12.0000",
    "purchase_price": "18.0000",
    "sale_price": "25.5000",
    "active": true
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Yoxdur.

### Tam yenilə

**Endpoint** · `PUT /api/v1/product-packagings/{product_packaging}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "product_packaging": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "product_id": "33333333-3333-4333-8333-333333333333",
    "unit_id": "11111111-1111-4111-8111-111111111111",
    "quantity_in_inventory_unit": 12,
    "purchase_price": 18,
    "sale_price": 25.5,
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Product packaging updated.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "product_name": "Arabica qəhvə",
    "unit_id": "11111111-1111-4111-8111-111111111111",
    "unit_name": "Qutu",
    "quantity_in_inventory_unit": "12.0000",
    "purchase_price": "18.0000",
    "sale_price": "25.5000",
    "active": true
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Gələcək istifadəyə təsir edir; tarixi sənədlər yenidən hesablanmır.

### Qismən yenilə

**Endpoint** · `PATCH /api/v1/product-packagings/{product_packaging}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "product_packaging": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "product_id": "33333333-3333-4333-8333-333333333333",
    "unit_id": "11111111-1111-4111-8111-111111111111",
    "quantity_in_inventory_unit": 12,
    "purchase_price": 18,
    "sale_price": 26,
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Product packaging updated.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "product_name": "Arabica qəhvə",
    "unit_id": "11111111-1111-4111-8111-111111111111",
    "unit_name": "Qutu",
    "quantity_in_inventory_unit": 12,
    "purchase_price": 18,
    "sale_price": 26,
    "active": true
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Gələcək istifadəyə təsir edir; tarixi sənədlər yenidən hesablanmır.

### Sil

**Endpoint** · `DELETE /api/v1/product-packagings/{product_packaging}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "product_packaging": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Product packaging deleted.",
  "data": null
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Master-data silinir; tarixi əməliyyatlar dəyişmir.
