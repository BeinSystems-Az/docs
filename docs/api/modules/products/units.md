---
sidebar_position: 4
slug: /api/catalog/units
---

# Ölçü vahidləri

:::info Kontekst
`Bearer` JWT və ya integration token · `units.read/create/update/delete` permission-ları · tenant konteksti; oxuda `filter.branch_id`, yazmada body `branch_id` ilə filial seçimi
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Ölçü vahidi məhsul miqdarının necə saxlandığını və vahidlərarası çevirməni müəyyən edir.

**İlkin şərtlər.** Tenant və filial konteksti tələb olunur; çevirmə varsa `relative_unit_id` ilə mövcud vahid seçilir.

**İş axını.** Əsas vahidi yaradın, ehtiyac olduqda çevirmə faktorunu təyin edin, sonra məhsul və qablaşdırmada istifadə edin.

**State-lər və biznes təsiri.** Lifecycle state-i yoxdur; vahid dəyişikliyi yeni sənəd seçimlərinə təsir edir, tarixi miqdarları dəyişmir.

**Əlaqəli resurslar.** Məhsullar, məhsul şablonları və qablaşdırmalar.

**Əsas məhdudiyyətlər.** `units` resource permission-ları və cari tenant/filial scope-u tətbiq edilir; çevirmə dəyərləri validation-dan keçir.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Vahidin dəyişməz identifikatorudur. |
| `name` | string | Sənəd və stokda görünən vahid adıdır. |
| `relative_unit_id` | UUID/null | Çevirmənin əsaslandığı başqa vahiddir. |
| `relative_unit_name` | string/null | Response-da relative vahidin görünən adıdır. |
| `relative_unit` | object/null | Response-da relative vahidin `id` və `name` xülasəsidir. |
| `relative_factor` | decimal/null | Bir vahidin neçə relative unit etdiyini göstərir. |
| `factor` | decimal | Response-da vahidin normallaşdırılmış çevirmə faktorudur. |
| `rounding_precision` | decimal/null | Miqdar yuvarlaqlaşdırma addımıdır. |
| `sequence` | integer/null | Seçim siyahısındakı sıralamadır. |
| `active` | boolean | Vahidin yeni əməliyyatlarda seçilməsini idarə edir. |
| `customFields` | object | Tenant-a məxsus dinamik sahələri qəbul edir; response-da onların açarları root səviyyəsində qaytarılır. |
| `created_at` | datetime/null | Yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Son dəyişiklik vaxtıdır. |

## Endpointlər

### Siyahıla

**Endpoint** · `GET /api/v1/units`

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
  "message": "Units listed successfully.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "Qutu",
      "relative_unit_id": "33333333-3333-4333-8333-333333333333",
      "relative_unit_name": "Ədəd",
      "relative_factor": "12.0000",
      "rounding_precision": "1.0000",
      "sequence": 10,
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
    "path": "/api/v1/units",
    "per_page": 25,
    "to": 1,
    "total": 1
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Yoxdur.

### Yarat

**Endpoint** · `POST /api/v1/units`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "name": "Qutu",
    "relative_unit_id": "33333333-3333-4333-8333-333333333333",
    "relative_factor": 12,
    "rounding_precision": 1,
    "sequence": 10,
    "active": true
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Unit created successfully.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Qutu",
    "relative_unit_id": "33333333-3333-4333-8333-333333333333",
    "relative_unit_name": "Ədəd",
    "relative_factor": "12.0000",
    "rounding_precision": "1.0000",
    "sequence": 10,
    "active": true
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Master-data yazılır; stok və jurnal yaranmır.

### Oxu

**Endpoint** · `GET /api/v1/units/{unit}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "unit": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Unit details.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Qutu",
    "relative_unit_id": "33333333-3333-4333-8333-333333333333",
    "relative_unit_name": "Ədəd",
    "relative_factor": "12.0000",
    "rounding_precision": "1.0000",
    "sequence": 10,
    "active": true
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Yoxdur.

### Tam yenilə

**Endpoint** · `PUT /api/v1/units/{unit}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "unit": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Qutu",
    "relative_unit_id": "33333333-3333-4333-8333-333333333333",
    "relative_factor": 12,
    "rounding_precision": 1,
    "sequence": 10,
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Unit updated.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Qutu",
    "relative_unit_id": "33333333-3333-4333-8333-333333333333",
    "relative_unit_name": "Ədəd",
    "relative_factor": "12.0000",
    "rounding_precision": "1.0000",
    "sequence": 10,
    "active": true
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Gələcək istifadəyə təsir edir; tarixi sənədlər yenidən hesablanmır.

### Qismən yenilə

**Endpoint** · `PATCH /api/v1/units/{unit}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "unit": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Böyük qutu",
    "relative_factor": 24
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Unit updated.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Böyük qutu",
    "relative_unit_id": "33333333-3333-4333-8333-333333333333",
    "relative_unit_name": "Ədəd",
    "relative_factor": 24,
    "rounding_precision": "1.0000",
    "sequence": 10,
    "active": true
  }
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Gələcək istifadəyə təsir edir; tarixi sənədlər yenidən hesablanmır.

### Sil

**Endpoint** · `DELETE /api/v1/units/{unit}`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "unit": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Unit deleted.",
  "data": null
}
```

**Xətalar** · `401/403` — giriş və permission; `404` — detail resurs tapılmır; `422` — request validation-u keçmir.

**Biznes təsiri** · Master-data silinir; tarixi əməliyyatlar dəyişmir.
