---
sidebar_position: 5
slug: /api/catalog/product-templates
---

# Məhsul şablonları

:::info Kontekst
`Bearer` JWT və ya integration token · `product_templates.read/create/update/delete` permission-ları · tenant konteksti; oxuda `filter.branch_id`, yazmada body `branch_id` ilə filial seçimi
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Məhsul şablonu variantlı məhsulların ortaq kataloq məlumatını saxlayır; stok və jurnal yaratmır.

**İlkin şərtlər.** Tenant və filial konteksti, həmçinin istifadə olunacaq kateqoriya və vahid mövcud olmalıdır.

**İş axını.** Şablonu yaradın, atributları və variantları onun üzərində qurun, sonra məhsul kartlarında istifadə edin.

**State-lər və biznes təsiri.** Lifecycle state-i yoxdur; dəyişiklik yalnız gələcək kataloq seçimlərinə təsir edir.

**Əlaqəli resurslar.** Məhsullar, kateqoriyalar, ölçü vahidləri və məhsul atributları.

**Əsas məhdudiyyətlər.** `product_templates` resource permission-ları və cari tenant/filial scope-u tətbiq edilir; əlaqəli identifikatorlar həmin scope-da olmalıdır.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Şablonun dəyişməz identifikatorudur. |
| `name` | string | Variantların paylaşdığı görünən addır. |
| `type` | integer/null | Şablonun məhsul növünü seçir: 1, 2 və ya 3. |
| `category_id` | UUID/null | Şablonu kataloq kateqoriyasına bağlayır. |
| `category_name` | string/null | Response-da kateqoriyanın görünən adıdır. |
| `unit_id` | UUID/null | Variantların default ölçü vahididir. |
| `unit_name` | string/null | Response-da ölçü vahidinin görünən adıdır. |
| `price` | decimal/null | Variant üçün başlanğıc satış qiymətidir. |
| `tracking` | enum/null | Stok izləməsini `none`, `lot` və ya `serial` edir. |
| `description` | string/null | Şablonun izah və qeyd mətnidir. |
| `active` | boolean | Yeni variant və sənədlərdə istifadəyə açıq olmasını idarə edir. |
| `image` | string/null | Şablon şəklinin saxlanmış istinadıdır. |
| `variants_count` | integer | Response-da şablondan yaranan variant sayıdır. |
| `customFields` | object | Tenant-a məxsus dinamik sahələri qəbul edir; response-da onların açarları root səviyyəsində qaytarılır. |
| `created_at` | datetime/null | Yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Son dəyişiklik vaxtıdır. |

## Endpointlər

### Siyahıla

**Endpoint** · `GET /api/v1/product-templates`

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
  "message": "Product templates listed successfully.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "Arabica qəhvə",
      "type": 1,
      "category_id": "33333333-3333-4333-8333-333333333333",
      "category_name": "Qəhvə",
      "unit_id": null,
      "unit_name": null,
      "price": "25.5000",
      "tracking": "lot",
      "active": true,
      "variants_count": 0
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
    "path": "/api/v1/product-templates",
    "per_page": 25,
    "to": 1,
    "total": 1
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Yoxdur.

### Yarat

**Endpoint** · `POST /api/v1/product-templates`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "name": "Arabica qəhvə",
    "type": 1,
    "category_id": "33333333-3333-4333-8333-333333333333",
    "price": 25.5,
    "tracking": "lot",
    "active": true
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Product template created successfully.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Arabica qəhvə",
    "type": 1,
    "category_id": "33333333-3333-4333-8333-333333333333",
    "category_name": "Qəhvə",
    "unit_id": null,
    "unit_name": null,
    "price": "25.5000",
    "tracking": "lot",
    "active": true,
    "variants_count": 0
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Master-data yazılır; stok və jurnal yaranmır.

### Oxu

**Endpoint** · `GET /api/v1/product-templates/{product_template}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "product_template": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Product template retrieved successfully.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Arabica qəhvə",
    "type": 1,
    "category_id": "33333333-3333-4333-8333-333333333333",
    "category_name": "Qəhvə",
    "unit_id": null,
    "unit_name": null,
    "price": "25.5000",
    "tracking": "lot",
    "active": true,
    "variants_count": 0
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Yoxdur.

### Tam yenilə

**Endpoint** · `PUT /api/v1/product-templates/{product_template}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "product_template": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Arabica qəhvə",
    "type": 1,
    "category_id": "33333333-3333-4333-8333-333333333333",
    "price": 25.5,
    "tracking": "lot",
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Product template updated successfully.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Arabica qəhvə",
    "type": 1,
    "category_id": "33333333-3333-4333-8333-333333333333",
    "category_name": "Qəhvə",
    "unit_id": null,
    "unit_name": null,
    "price": "25.5000",
    "tracking": "lot",
    "active": true,
    "variants_count": 0
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Gələcək istifadəyə təsir edir; tarixi sənədlər yenidən hesablanmır.

### Qismən yenilə

**Endpoint** · `PATCH /api/v1/product-templates/{product_template}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "product_template": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Arabica qəhvə Premium",
    "price": 27
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Product template updated successfully.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Arabica qəhvə Premium",
    "type": 1,
    "category_id": "33333333-3333-4333-8333-333333333333",
    "category_name": "Qəhvə",
    "unit_id": null,
    "unit_name": null,
    "price": 27,
    "tracking": "lot",
    "active": true,
    "variants_count": 0
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Gələcək istifadəyə təsir edir; tarixi sənədlər yenidən hesablanmır.

### Sil

**Endpoint** · `DELETE /api/v1/product-templates/{product_template}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "product_template": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Product template deleted successfully.",
  "data": null
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Master-data silinir; tarixi əməliyyatlar dəyişmir.
