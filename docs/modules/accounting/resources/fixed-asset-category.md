---
sidebar_position: 12
title: Əsas vəsait kateqoriyaları
---

# Əsas vəsait kateqoriyaları

Əsas vəsait kateqoriyaları resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `fixed_asset_categories`
:::

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `depreciable` | boolean | Resursun “depreciable” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `useful_life_months` | number | Resursun “useful life months” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `depreciation_method` | enum/string | Resursun “depreciation method” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `asset_account_id` | UUID | Qeydi əlaqəli “asset account” resursuna bağlayır. |
| `capitalization_account_id` | UUID | Qeydi əlaqəli “capitalization account” resursuna bağlayır. |
| `accumulated_depreciation_account_id` | UUID | Qeydi əlaqəli “accumulated depreciation account” resursuna bağlayır. |
| `depreciation_expense_account_id` | UUID | Qeydi əlaqəli “depreciation expense account” resursuna bağlayır. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |

## Endpointlər

### Əsas vəsait kateqoriyaları siyahısını al

**Endpoint** · `GET /api/v1/fixed-asset-categories`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `fixed_asset_categories.read`

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
      "code": "DEMO",
      "name": "Nümunə qeyd",
      "depreciable": true,
      "useful_life_months": 1,
      "depreciation_method": "straight_line",
      "asset_account_id": "33333333-3333-4333-8333-333333333333",
      "capitalization_account_id": "33333333-3333-4333-8333-333333333333",
      "accumulated_depreciation_account_id": "33333333-3333-4333-8333-333333333333",
      "depreciation_expense_account_id": "33333333-3333-4333-8333-333333333333",
      "active": true
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

### Əsas vəsait kateqoriyaları qeydi yarat

**Endpoint** · `POST /api/v1/fixed-asset-categories`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `fixed_asset_categories.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "depreciable": true,
    "useful_life_months": 1,
    "depreciation_method": "straight_line",
    "asset_account_id": "33333333-3333-4333-8333-333333333333",
    "capitalization_account_id": "33333333-3333-4333-8333-333333333333",
    "accumulated_depreciation_account_id": "33333333-3333-4333-8333-333333333333",
    "depreciation_expense_account_id": "33333333-3333-4333-8333-333333333333",
    "active": true
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Əsas vəsait kateqoriyası yaradıldı.",
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "depreciable": true,
    "useful_life_months": 1,
    "depreciation_method": "straight_line",
    "asset_account_id": "33333333-3333-4333-8333-333333333333",
    "capitalization_account_id": "33333333-3333-4333-8333-333333333333",
    "accumulated_depreciation_account_id": "33333333-3333-4333-8333-333333333333",
    "depreciation_expense_account_id": "33333333-3333-4333-8333-333333333333",
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Əsas vəsait kateqoriyaları qeydini sil

**Endpoint** · `DELETE /api/v1/fixed-asset-categories/{fixedAssetCategory}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `fixed_asset_categories.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "fixedAssetCategory": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Əsas vəsait kateqoriyası silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Əsas vəsait kateqoriyaları qeydini oxu

**Endpoint** · `GET /api/v1/fixed-asset-categories/{fixedAssetCategory}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `fixed_asset_categories.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "fixedAssetCategory": "22222222-2222-4222-8222-222222222222"
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
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "depreciable": true,
    "useful_life_months": 1,
    "depreciation_method": "straight_line",
    "asset_account_id": "33333333-3333-4333-8333-333333333333",
    "capitalization_account_id": "33333333-3333-4333-8333-333333333333",
    "accumulated_depreciation_account_id": "33333333-3333-4333-8333-333333333333",
    "depreciation_expense_account_id": "33333333-3333-4333-8333-333333333333",
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Əsas vəsait kateqoriyaları qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/fixed-asset-categories/{fixedAssetCategory}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `fixed_asset_categories.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "fixedAssetCategory": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "depreciable": true,
    "useful_life_months": 1,
    "depreciation_method": "straight_line",
    "asset_account_id": "33333333-3333-4333-8333-333333333333",
    "capitalization_account_id": "33333333-3333-4333-8333-333333333333",
    "accumulated_depreciation_account_id": "33333333-3333-4333-8333-333333333333",
    "depreciation_expense_account_id": "33333333-3333-4333-8333-333333333333",
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Əsas vəsait kateqoriyası yeniləndi.",
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "depreciable": true,
    "useful_life_months": 1,
    "depreciation_method": "straight_line",
    "asset_account_id": "33333333-3333-4333-8333-333333333333",
    "capitalization_account_id": "33333333-3333-4333-8333-333333333333",
    "accumulated_depreciation_account_id": "33333333-3333-4333-8333-333333333333",
    "depreciation_expense_account_id": "33333333-3333-4333-8333-333333333333",
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

