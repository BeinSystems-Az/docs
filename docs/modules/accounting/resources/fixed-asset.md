---
sidebar_position: 13
title: Əsas vəsaitlər
---

# Əsas vəsaitlər

Əsas vəsaitlər resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `fixed_assets`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Əsas vəsaitlər resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu modul maliyyə nəticəsini və baş kitabı idarə edir; fiziki stok hərəkətinin mənbəyi satış, alış və stok sənədləridir.

**İlkin şərtlər.** Tenant, uyğun filial, valyuta, hesab planı və sənədin tələb etdiyi tərəfdaş və ya maliyyə hesabı əvvəlcədən mövcud olmalıdır.

**İş axını.** Əvvəl master məlumatları qurun, sənədi draft yaradın, sətirləri yoxlayın, sonra uyğun state action ilə post edin və hesabatlardan nəticəni izləyin.

**State-lər və biznes təsiri.** Master məlumat dəyişiklikləri jurnal yaratmır. Maliyyə sənədinin `posted` vəziyyəti baş kitab və borc nəticəsi yarada, `cancelled` isə həmin nəticəni revers edə bilər.

**Əlaqəli resurslar.** Satış, satınalma, tərəfdaşlar, stok, layihələr və hesabatlar.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.


| State | Mənası | Sistem təsiri |
| --- | --- | --- |
| `draft` | Qaralama | Redaktə edilə bilər; post edilmiş əməliyyat nəticəsi yoxdur. |
| `active` | Aktiv | Resurs istifadəyə açıqdır və yeni əməliyyatlarda seçilə bilər. |
| `sold` | Satılıb | Əsas vəsait satış əməliyyatı ilə uçotdan çıxarılıb. |
| `scrapped` | Silinib | Əsas vəsait scrap əməliyyatı ilə istismardan çıxarılıb. |

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `created_by` | string/null | Resursun “created by” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `category_id` | UUID | Qeydi əlaqəli “category” resursuna bağlayır. |
| `product_id` | UUID | Sətirdə istifadə olunan məhsulu müəyyən edir. |
| `stock_id` | UUID | Məhsul hərəkətinin aid olduğu anbarı müəyyən edir. |
| `stock_document_id` | UUID | Qeydi əlaqəli “stock document” resursuna bağlayır. |
| `responsible_user_id` | UUID | Qeydi əlaqəli “responsible user” resursuna bağlayır. |
| `location_id` | UUID | Qeydi əlaqəli “location” resursuna bağlayır. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `barcode` | string/null | Resursun “barcode” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `acquisition_date` | datetime/null | Resursun “acquisition date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `in_service_date` | datetime/null | Resursun “in service date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `cost` | number | Resursun “cost” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `salvage_value` | number | Resursun “salvage value” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `useful_life_months` | string/null | Resursun “useful life months” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `method` | string/null | Resursun “method” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `asset_account_id` | UUID | Qeydi əlaqəli “asset account” resursuna bağlayır. |
| `accumulated_depreciation_account_id` | UUID | Qeydi əlaqəli “accumulated depreciation account” resursuna bağlayır. |
| `depreciation_expense_account_id` | UUID | Qeydi əlaqəli “depreciation expense account” resursuna bağlayır. |
| `accumulated_depreciation` | number | Resursun “accumulated depreciation” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |
| `depreciation_state` | string/null | Resursun “depreciation state” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `disposal_date` | datetime/null | Resursun “disposal date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `notes` | string/null | Resursun “notes” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Əsas vəsaitlər siyahısını al

**Endpoint** · `GET /api/v1/fixed-assets`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `fixed_assets.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "q": "qəhvə",
    "state": "draft",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "responsible_user_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "in_service_date": "2026-09-22",
    "in_service_date_from": "2026-09-22",
    "in_service_date_to": "2026-09-22"
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
      "code": "DEMO",
      "name": "Nümunə qeyd",
      "state": "draft",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "created_by": "Nümunə dəyər",
      "category_id": "33333333-3333-4333-8333-333333333333",
      "product_id": "33333333-3333-4333-8333-333333333333",
      "stock_id": "33333333-3333-4333-8333-333333333333",
      "stock_document_id": "33333333-3333-4333-8333-333333333333",
      "responsible_user_id": "33333333-3333-4333-8333-333333333333"
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

### Əsas vəsaitlər qeydi yarat

**Endpoint** · `POST /api/v1/fixed-assets`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `fixed_assets.create`

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
    "code": "DEMO",
    "barcode": "869000000001",
    "in_service_date": "2026-09-22",
    "responsible_user_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "cost": 1,
    "salvage_value": 1,
    "notes": "Sintetik qeyd"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Əsas vəsait kartı yaradıldı.",
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "created_by": "Nümunə dəyər",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "stock_document_id": "33333333-3333-4333-8333-333333333333",
    "responsible_user_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "barcode": "869000000001",
    "acquisition_date": "2026-09-22",
    "in_service_date": "2026-09-22",
    "cost": 1,
    "salvage_value": 1,
    "useful_life_months": "Nümunə dəyər",
    "method": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Əsas vəsaitlər qeydini sil

**Endpoint** · `DELETE /api/v1/fixed-assets/{asset}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `fixed_assets.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "asset": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Əsas vəsait kartı silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Əsas vəsaitlər qeydini oxu

**Endpoint** · `GET /api/v1/fixed-assets/{asset}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `fixed_assets.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "asset": "22222222-2222-4222-8222-222222222222"
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
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "created_by": "Nümunə dəyər",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "stock_document_id": "33333333-3333-4333-8333-333333333333",
    "responsible_user_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "barcode": "869000000001",
    "acquisition_date": "2026-09-22",
    "in_service_date": "2026-09-22",
    "cost": 1,
    "salvage_value": 1,
    "useful_life_months": "Nümunə dəyər",
    "method": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Əsas vəsaitlər qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/fixed-assets/{asset}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `fixed_assets.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "asset": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "code": "DEMO",
    "barcode": "869000000001",
    "in_service_date": "2026-09-22",
    "responsible_user_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "cost": 1,
    "salvage_value": 1,
    "notes": "Sintetik qeyd"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Əsas vəsait kartı yeniləndi.",
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "created_by": "Nümunə dəyər",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "stock_document_id": "33333333-3333-4333-8333-333333333333",
    "responsible_user_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "barcode": "869000000001",
    "acquisition_date": "2026-09-22",
    "in_service_date": "2026-09-22",
    "cost": 1,
    "salvage_value": 1,
    "useful_life_months": "Nümunə dəyər",
    "method": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Əsas vəsaitlər qeydini təsdiqlə

**Endpoint** · `POST /api/v1/fixed-assets/{asset}/confirm`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `fixed_assets.confirm`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "asset": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Əsas vəsait istismara verildi.",
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "created_by": "Nümunə dəyər",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "stock_document_id": "33333333-3333-4333-8333-333333333333",
    "responsible_user_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "barcode": "869000000001",
    "acquisition_date": "2026-09-22",
    "in_service_date": "2026-09-22",
    "cost": 1,
    "salvage_value": 1,
    "useful_life_months": "Nümunə dəyər",
    "method": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

