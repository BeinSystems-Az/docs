---
sidebar_position: 16
title: Əsas vəsait transferləri
---

# Əsas vəsait transferləri

Əsas vəsait transferləri resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `fixed_asset_transfers`
:::

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.

## Field-lər

**Sənəd identifikasiyası.** `user_id` dəyişməyən yaradan User hesabıdır; `owner_id` dəyişdirilə və boş saxlanıla bilən cavabdeh Employee qeydidir. İstifadəçi ilə yaradılan sənəddə ilkin cavabdeh həmin istifadəçiyə bağlı aktiv əməkdaş olur. İnteqrasiya və fon əməliyyatında cavabdeh açıq seçilməyibsə boş qalır. İstifadəçi əməkdaş qeydinə bağlı deyilsə əl ilə sənəd yarada bilmir.


Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `user_id` | UUID | Sənədi yaradan User hesabı; sistem tərəfindən təyin olunur və dəyişmir. |
| `owner_id` | UUID/null | Cavabdeh əməkdaşın Employee ID-si; açıq seçilə, dəyişdirilə və təmizlənə bilər. |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `date` | datetime/null | Əməliyyatın biznes tarixidir. |
| `location_id` | UUID | Qeydi əlaqəli “location” resursuna bağlayır. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |
| `reason` | string/null | Resursun “reason” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `created_by` | string/null | Resursun “created by” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Əsas vəsait transferləri siyahısını al

**Endpoint** · `GET /api/v1/fixed-asset-transfers`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `fixed_asset_transfers.read`

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
    "date_from": "2026-09-22",
    "date_to": "2026-09-22"
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
      "name": "Nümunə qeyd",
      "state": "draft",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "date": "2026-09-22",
      "owner_id": "33333333-3333-4333-8333-333333333333",
      "location_id": "33333333-3333-4333-8333-333333333333",
      "reason": "Nümunə səbəb",
      "created_by": "Nümunə dəyər",
      "q": "qəhvə",
      "date_from": "2026-09-22"
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

### Əsas vəsait transferləri qeydi yarat

**Endpoint** · `POST /api/v1/fixed-asset-transfers`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `fixed_asset_transfers.create`

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
    "date": "2026-09-22",
    "owner_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "reason": "Nümunə səbəb",
    "items": [
      {
        "fixed_asset_id": "33333333-3333-4333-8333-333333333333"
      }
    ]
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Transfer sənədi yaradıldı.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "date": "2026-09-22",
    "owner_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "reason": "Nümunə səbəb",
    "created_by": "Nümunə dəyər",
    "items": [
      {
        "fixed_asset_id": "33333333-3333-4333-8333-333333333333"
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Əsas vəsait transferləri qeydini sil

**Endpoint** · `DELETE /api/v1/fixed-asset-transfers/{fixedAssetTransfer}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `fixed_asset_transfers.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "fixedAssetTransfer": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Transfer sənədi silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Əsas vəsait transferləri qeydini oxu

**Endpoint** · `GET /api/v1/fixed-asset-transfers/{fixedAssetTransfer}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `fixed_asset_transfers.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "fixedAssetTransfer": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "date": "2026-09-22",
    "owner_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "reason": "Nümunə səbəb",
    "created_by": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Əsas vəsait transferləri qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/fixed-asset-transfers/{fixedAssetTransfer}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `fixed_asset_transfers.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "fixedAssetTransfer": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "date": "2026-09-22",
    "owner_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "reason": "Nümunə səbəb",
    "items": [
      {
        "fixed_asset_id": "33333333-3333-4333-8333-333333333333"
      }
    ]
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Transfer sənədi yeniləndi.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "date": "2026-09-22",
    "owner_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "reason": "Nümunə səbəb",
    "created_by": "Nümunə dəyər",
    "items": [
      {
        "fixed_asset_id": "33333333-3333-4333-8333-333333333333"
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Əsas vəsait transferləri qeydini ləğv et

**Endpoint** · `POST /api/v1/fixed-asset-transfers/{fixedAssetTransfer}/cancel`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `fixed_asset_transfers.cancel`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "fixedAssetTransfer": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Transfer ləğv edildi.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "date": "2026-09-22",
    "owner_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "reason": "Nümunə səbəb",
    "created_by": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Əsas vəsait transferləri qeydini post et

**Endpoint** · `POST /api/v1/fixed-asset-transfers/{fixedAssetTransfer}/post`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `fixed_asset_transfers.confirm`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "fixedAssetTransfer": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Transfer təsdiqləndi.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "date": "2026-09-22",
    "owner_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "reason": "Nümunə səbəb",
    "created_by": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

