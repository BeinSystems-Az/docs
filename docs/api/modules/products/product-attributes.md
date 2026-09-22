---
sidebar_position: 7
slug: /api/catalog/product-attributes
---

# Məhsul atributları

:::info Kontekst
`Bearer` JWT və ya integration token · `product_attributes.read/create/update/delete` permission-ları · tenant konteksti; oxuda `filter.branch_id`, yazmada body `branch_id` ilə filial seçimi
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Məhsul atributu variantları rəng, ölçü və digər seçilən xüsusiyyətlər üzrə fərqləndirir.

**İlkin şərtlər.** Tenant və filial konteksti tələb olunur; rəng seçimi üçün `hex_color` dəyəri attribute value ilə verilir.

**İş axını.** Atributu və görünüş tipini yaradın, seçilə bilən dəyərləri əlavə edin, sonra şablonun variant seçimində istifadə edin.

**State-lər və biznes təsiri.** Lifecycle state-i yoxdur; dəyişikliyin təsiri kataloq və variant seçimləri ilə məhdudlaşır.

**Əlaqəli resurslar.** Məhsul şablonları və onların variantları.

**Əsas məhdudiyyətlər.** `product_attributes` resource permission-ları və cari tenant/filial scope-u tətbiq edilir; `display_type` və value strukturu validation-dan keçir.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Atributun identifikatorudur. |
| `name` | string | Rəng və ya ölçü kimi atribut adıdır. |
| `display_type` | enum | UI seçim formasını `select`, `radio` və ya `color` edir. |
| `values` | array/null | Atributun seçilə bilən dəyərləridir; paginated siyahı response-u child kolleksiyanı qısa saxlamaq üçün buraxa bilər. |
| `values[].id` | UUID/null | Mövcud atribut dəyərinin identifikatorudur. |
| `values[].name` | string | İstifadəçiyə görünən dəyər adıdır. |
| `values[].hex_color` | string/null | `color` tipi üçün vizual rəng kodudur. |
| `created_at` | datetime/null | Yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Son dəyişiklik vaxtıdır. |

## Endpointlər

### Siyahıla

**Endpoint** · `GET /api/v1/product-attributes`

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
  "message": "Attributes listed successfully.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "Rəng",
      "display_type": "color"
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
    "path": "/api/v1/product-attributes",
    "per_page": 25,
    "to": 1,
    "total": 1
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Yoxdur.

### Yarat

**Endpoint** · `POST /api/v1/product-attributes`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "name": "Rəng",
    "display_type": "color",
    "values": [
      {
        "name": "Qara",
        "hex_color": "#111111"
      }
    ]
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Attribute created successfully.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Rəng",
    "display_type": "color",
    "values": [
      {
        "id": "33333333-3333-4333-8333-333333333333",
        "name": "Qara",
        "hex_color": "#111111"
      }
    ]
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Master-data yazılır; stok və jurnal yaranmır.

### Oxu

**Endpoint** · `GET /api/v1/product-attributes/{product_attribute}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "product_attribute": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Attribute shown successfully.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Rəng",
    "display_type": "color",
    "values": [
      {
        "id": "33333333-3333-4333-8333-333333333333",
        "name": "Qara",
        "hex_color": "#111111"
      }
    ]
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Yoxdur.

### Tam yenilə

**Endpoint** · `PUT /api/v1/product-attributes/{product_attribute}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "product_attribute": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Rəng",
    "display_type": "color",
    "values": [
      {
        "name": "Qara",
        "hex_color": "#111111"
      }
    ]
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Attribute updated successfully.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Rəng",
    "display_type": "color",
    "values": [
      {
        "id": "33333333-3333-4333-8333-333333333333",
        "name": "Qara",
        "hex_color": "#111111"
      }
    ]
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Gələcək istifadəyə təsir edir; tarixi sənədlər yenidən hesablanmır.

### Qismən yenilə

**Endpoint** · `PATCH /api/v1/product-attributes/{product_attribute}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "product_attribute": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Məhsul rəngi",
    "display_type": "color"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Attribute updated successfully.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Məhsul rəngi",
    "display_type": "color",
    "values": [
      {
        "id": "33333333-3333-4333-8333-333333333333",
        "name": "Qara",
        "hex_color": "#111111"
      }
    ]
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Gələcək istifadəyə təsir edir; tarixi sənədlər yenidən hesablanmır.

### Sil

**Endpoint** · `DELETE /api/v1/product-attributes/{product_attribute}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "product_attribute": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Attribute deleted successfully.",
  "data": null
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Master-data silinir; tarixi əməliyyatlar dəyişmir.
