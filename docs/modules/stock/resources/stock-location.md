---
sidebar_position: 6
title: Stok lokasiyaları
---

# Stok lokasiyaları

Stok lokasiyaları resursu anbar və stok modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `stock_locations`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Stok lokasiyaları resursu anbar və stok modulunda aid olduğu məlumat və əməliyyatları idarə edir. Master məlumatlar stok miqdarını dəyişmir; yalnız post edilmiş hərəkət sənədləri faktiki qalıq və valuation nəticəsi yaradır.

**İlkin şərtlər.** Filial, anbar/lokasiya, məhsul və tələb olunan valuation hesabları mövcud olmalıdır.

**İş axını.** Anbar strukturunu qurun, sənədi draft yaradın, sətirləri yoxlayın, sonra post edin və hesabatlardan nəticəni izləyin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Post etmə stok hərəkəti və lazım olduqda jurnal yaradır; cancel/reversal nəticəni geri çevirir.

**Əlaqəli resurslar.** Kataloq, satış, satınalma, istehsal və mühasibatlıq.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `stock_id` | UUID | Məhsul hərəkətinin aid olduğu anbarı müəyyən edir. |
| `parent_id` | UUID | Qeydi əlaqəli “parent” resursuna bağlayır. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `usage` | enum/string | Resursun “usage” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `stock_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `parent_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `created_at` | datetime/null | Qeydin yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Qeydin son dəyişdirilmə vaxtıdır. |
| `deleted_at` | datetime/null | Soft-delete və ya arxivlənmə vaxtıdır. |

## Endpointlər

### Stok lokasiyaları siyahısını al

**Endpoint** · `GET /api/v1/stock-locations`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_locations.read`

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
      "code": "DEMO",
      "name": "Nümunə qeyd",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "stock_id": "33333333-3333-4333-8333-333333333333",
      "parent_id": "33333333-3333-4333-8333-333333333333",
      "usage": "internal",
      "active": true,
      "stock_name": "Nümunə dəyər",
      "parent_name": "Nümunə dəyər"
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

### Stok lokasiyaları qeydi yarat

**Endpoint** · `POST /api/v1/stock-locations`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `stock_locations.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "name": "Nümunə qeyd",
    "code": "DEMO",
    "usage": "internal",
    "active": true
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Stock location created.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "usage": "internal",
    "active": true,
    "stock_name": "Nümunə dəyər",
    "parent_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Stok lokasiyaları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Stok lokasiyaları qeydini sil

**Endpoint** · `DELETE /api/v1/stock-locations/{stock_location}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `stock_locations.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stock_location": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Stock location archived.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Stok lokasiyaları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Stok lokasiyaları qeydini oxu

**Endpoint** · `GET /api/v1/stock-locations/{stock_location}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_locations.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stock_location": "22222222-2222-4222-8222-222222222222"
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
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "usage": "internal",
    "active": true,
    "stock_name": "Nümunə dəyər",
    "parent_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Stok lokasiyaları qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/stock-locations/{stock_location}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `stock_locations.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stock_location": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "name": "Nümunə qeyd",
    "code": "DEMO",
    "usage": "internal",
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Stock location updated.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "usage": "internal",
    "active": true,
    "stock_name": "Nümunə dəyər",
    "parent_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Stok lokasiyaları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

