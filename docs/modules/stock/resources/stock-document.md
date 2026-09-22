---
sidebar_position: 5
title: Stok sənədləri
---

# Stok sənədləri

Stok sənədləri resursu anbar və stok modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `stock_documents`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Stok sənədləri resursu anbar və stok modulunda aid olduğu məlumat və əməliyyatları idarə edir. Master məlumatlar stok miqdarını dəyişmir; yalnız post edilmiş hərəkət sənədləri faktiki qalıq və valuation nəticəsi yaradır.

**İlkin şərtlər.** Filial, anbar/lokasiya, məhsul və tələb olunan valuation hesabları mövcud olmalıdır.

**İş axını.** Anbar strukturunu qurun, sənədi draft yaradın, sətirləri yoxlayın, sonra post edin və hesabatlardan nəticəni izləyin.

**State-lər və biznes təsiri.** Post etmə stok hərəkəti və lazım olduqda jurnal yaradır; cancel/reversal nəticəni geri çevirir.

**Əlaqəli resurslar.** Kataloq, satış, satınalma, istehsal və mühasibatlıq.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `destination_branch_id` | UUID | Qeydi əlaqəli “destination branch” resursuna bağlayır. |
| `stock_id` | UUID | Məhsul hərəkətinin aid olduğu anbarı müəyyən edir. |
| `destination_stock_id` | UUID | Qeydi əlaqəli “destination stock” resursuna bağlayır. |
| `partner_id` | UUID | Əməliyyatın aid olduğu müştəri və ya təchizatçını göstərir. |
| `date` | datetime/null | Əməliyyatın biznes tarixidir. |
| `origin_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `origin_id` | UUID | Qeydi əlaqəli “origin” resursuna bağlayır. |
| `source_location_id` | UUID | Qeydi əlaqəli “source location” resursuna bağlayır. |
| `destination_location_id` | UUID | Qeydi əlaqəli “destination location” resursuna bağlayır. |
| `note` | string/null | Əməliyyatla bağlı daxili qeyddir. |
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `sequence` | number | Siyahıda emal və görünmə ardıcıllığını müəyyən edir. |
| `product_id` | UUID | Sətirdə istifadə olunan məhsulu müəyyən edir. |
| `product_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `unit_id` | UUID | Qeydi əlaqəli “unit” resursuna bağlayır. |
| `unit_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `packaging_id` | UUID | Qeydi əlaqəli “packaging” resursuna bağlayır. |
| `packaging_quantity` | number | Resursun “packaging quantity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `quantity` | number | Əməliyyat olunan məhsul miqdarıdır. |
| `unit_cost` | number | Bir vahidin stok maya dəyəridir. |
| `theoretical_quantity` | number | Resursun “theoretical quantity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `counted_quantity` | number | Resursun “counted quantity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `branch_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `destination_branch_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `stock_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `destination_stock_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `partner_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `source_location_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `destination_location_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `items` | array/object | Sənədin məhsul, hesab və ya əməliyyat sətirləridir. |
| `created_at` | datetime/null | Qeydin yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Qeydin son dəyişdirilmə vaxtıdır. |
| `items[].product_id` | UUID | Sətirdə istifadə olunan məhsulu müəyyən edir. |
| `items[].lot_id` | UUID | Qeydi əlaqəli “lot” resursuna bağlayır. |
| `items[].unit_id` | UUID | Qeydi əlaqəli “unit” resursuna bağlayır. |
| `items[].packaging_id` | UUID | Qeydi əlaqəli “packaging” resursuna bağlayır. |
| `items[].packaging_quantity` | number | Massiv elementində “packaging quantity” dəyərini saxlayır. |
| `items[].source_location_id` | UUID | Qeydi əlaqəli “source location” resursuna bağlayır. |
| `items[].destination_location_id` | UUID | Qeydi əlaqəli “destination location” resursuna bağlayır. |
| `items[].quantity` | number | Əməliyyat olunan məhsul miqdarıdır. |
| `items[].unit_cost` | number | Bir vahidin stok maya dəyəridir. |
| `items[].theoretical_quantity` | number | Massiv elementində “theoretical quantity” dəyərini saxlayır. |
| `items[].counted_quantity` | number | Massiv elementində “counted quantity” dəyərini saxlayır. |
| `items[].note` | array field | Əməliyyatla bağlı daxili qeyddir. |

## Endpointlər

### Stok sənədləri siyahısını al

**Endpoint** · `GET /api/v1/stock-documents`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_documents.read`

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
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "Nümunə qeyd",
      "state": "draft",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "partner_id": "33333333-3333-4333-8333-333333333333",
      "date": "2026-09-22",
      "items": {},
      "type": "receipt",
      "destination_branch_id": "33333333-3333-4333-8333-333333333333",
      "stock_id": "33333333-3333-4333-8333-333333333333"
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

### Stok sənədləri qeydi yarat

**Endpoint** · `POST /api/v1/stock-documents`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `stock_documents.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "type": "receipt",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "destination_stock_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "origin_type": "standard",
    "origin_id": "33333333-3333-4333-8333-333333333333",
    "note": "Sintetik nümunə məlumatı",
    "items": [
      {
        "product_id": "33333333-3333-4333-8333-333333333333",
        "lot_id": "33333333-3333-4333-8333-333333333333",
        "unit_id": "33333333-3333-4333-8333-333333333333",
        "packaging_id": "33333333-3333-4333-8333-333333333333",
        "packaging_quantity": 1,
        "source_location_id": "33333333-3333-4333-8333-333333333333",
        "destination_location_id": "33333333-3333-4333-8333-333333333333",
        "quantity": 1,
        "unit_cost": 1,
        "theoretical_quantity": 1,
        "counted_quantity": 1,
        "note": "Sintetik nümunə məlumatı"
      }
    ]
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Stock document created.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "items": [
      {
        "product_id": "33333333-3333-4333-8333-333333333333",
        "lot_id": "33333333-3333-4333-8333-333333333333",
        "unit_id": "33333333-3333-4333-8333-333333333333",
        "packaging_id": "33333333-3333-4333-8333-333333333333",
        "packaging_quantity": 1,
        "source_location_id": "33333333-3333-4333-8333-333333333333",
        "destination_location_id": "33333333-3333-4333-8333-333333333333",
        "quantity": 1,
        "unit_cost": 1,
        "theoretical_quantity": 1,
        "counted_quantity": 1,
        "note": "Sintetik nümunə məlumatı"
      }
    ],
    "type": "receipt",
    "destination_branch_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "destination_stock_id": "33333333-3333-4333-8333-333333333333",
    "origin_type": "standard",
    "origin_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "note": "Sintetik nümunə məlumatı",
    "sequence": 1,
    "product_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · State keçidindən asılı olaraq stok hərəkəti, valuation və jurnal nəticəsi yarana və ya revers oluna bilər.

### Stok sənədləri qeydini sil

**Endpoint** · `DELETE /api/v1/stock-documents/{stock_document}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `stock_documents.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stock_document": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Stock document deleted.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · State keçidindən asılı olaraq stok hərəkəti, valuation və jurnal nəticəsi yarana və ya revers oluna bilər.

### Stok sənədləri qeydini oxu

**Endpoint** · `GET /api/v1/stock-documents/{stock_document}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_documents.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stock_document": "22222222-2222-4222-8222-222222222222"
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
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "items": {},
    "type": "receipt",
    "destination_branch_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "destination_stock_id": "33333333-3333-4333-8333-333333333333",
    "origin_type": "standard",
    "origin_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "note": "Sintetik nümunə məlumatı",
    "sequence": 1,
    "product_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Stok sənədləri qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/stock-documents/{stock_document}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `stock_documents.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stock_document": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "type": "receipt",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "destination_stock_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "origin_type": "standard",
    "origin_id": "33333333-3333-4333-8333-333333333333",
    "note": "Sintetik nümunə məlumatı",
    "items": [
      {
        "product_id": "33333333-3333-4333-8333-333333333333",
        "lot_id": "33333333-3333-4333-8333-333333333333",
        "unit_id": "33333333-3333-4333-8333-333333333333",
        "packaging_id": "33333333-3333-4333-8333-333333333333",
        "packaging_quantity": 1,
        "source_location_id": "33333333-3333-4333-8333-333333333333",
        "destination_location_id": "33333333-3333-4333-8333-333333333333",
        "quantity": 1,
        "unit_cost": 1,
        "theoretical_quantity": 1,
        "counted_quantity": 1,
        "note": "Sintetik nümunə məlumatı"
      }
    ]
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Stock document updated.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "items": [
      {
        "product_id": "33333333-3333-4333-8333-333333333333",
        "lot_id": "33333333-3333-4333-8333-333333333333",
        "unit_id": "33333333-3333-4333-8333-333333333333",
        "packaging_id": "33333333-3333-4333-8333-333333333333",
        "packaging_quantity": 1,
        "source_location_id": "33333333-3333-4333-8333-333333333333",
        "destination_location_id": "33333333-3333-4333-8333-333333333333",
        "quantity": 1,
        "unit_cost": 1,
        "theoretical_quantity": 1,
        "counted_quantity": 1,
        "note": "Sintetik nümunə məlumatı"
      }
    ],
    "type": "receipt",
    "destination_branch_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "destination_stock_id": "33333333-3333-4333-8333-333333333333",
    "origin_type": "standard",
    "origin_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "note": "Sintetik nümunə məlumatı",
    "sequence": 1,
    "product_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · State keçidindən asılı olaraq stok hərəkəti, valuation və jurnal nəticəsi yarana və ya revers oluna bilər.

### Stok sənədləri qeydini ləğv et

**Endpoint** · `POST /api/v1/stock-documents/{stockDocument}/cancel`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `stock_documents.cancel`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stockDocument": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Stock document cancelled.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "items": {},
    "type": "receipt",
    "destination_branch_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "destination_stock_id": "33333333-3333-4333-8333-333333333333",
    "origin_type": "standard",
    "origin_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "note": "Sintetik nümunə məlumatı",
    "sequence": 1,
    "product_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · State keçidindən asılı olaraq stok hərəkəti, valuation və jurnal nəticəsi yarana və ya revers oluna bilər.

### Stok sənədləri: qaralamaya qaytar

**Endpoint** · `POST /api/v1/stock-documents/{stockDocument}/draft`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `stock_documents.cancel`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stockDocument": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Stock document returned to draft.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "items": {},
    "type": "receipt",
    "destination_branch_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "destination_stock_id": "33333333-3333-4333-8333-333333333333",
    "origin_type": "standard",
    "origin_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "note": "Sintetik nümunə məlumatı",
    "sequence": 1,
    "product_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · State keçidindən asılı olaraq stok hərəkəti, valuation və jurnal nəticəsi yarana və ya revers oluna bilər.

### Stok sənədləri qeydini post et

**Endpoint** · `POST /api/v1/stock-documents/{stockDocument}/post`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `stock_documents.confirm`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stockDocument": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Stock document posted.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "items": {},
    "type": "receipt",
    "destination_branch_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "destination_stock_id": "33333333-3333-4333-8333-333333333333",
    "origin_type": "standard",
    "origin_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "note": "Sintetik nümunə məlumatı",
    "sequence": 1,
    "product_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · State keçidindən asılı olaraq stok hərəkəti, valuation və jurnal nəticəsi yarana və ya revers oluna bilər.

