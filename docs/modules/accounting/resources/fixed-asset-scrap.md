---
sidebar_position: 15
title: Əsas vəsait silinmələri
---

# Əsas vəsait silinmələri

Əsas vəsait silinmələri resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `fixed_asset_scraps`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Əsas vəsait silinmələri resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu modul maliyyə nəticəsini və baş kitabı idarə edir; fiziki stok hərəkətinin mənbəyi satış, alış və stok sənədləridir.

**İlkin şərtlər.** Tenant, uyğun filial, valyuta, hesab planı və sənədin tələb etdiyi tərəfdaş və ya maliyyə hesabı əvvəlcədən mövcud olmalıdır.

**İş axını.** Əvvəl master məlumatları qurun, sənədi draft yaradın, sətirləri yoxlayın, sonra uyğun state action ilə post edin və hesabatlardan nəticəni izləyin.

**State-lər və biznes təsiri.** Master məlumat dəyişiklikləri jurnal yaratmır. Maliyyə sənədinin `posted` vəziyyəti baş kitab və borc nəticəsi yarada, `cancelled` isə həmin nəticəni revers edə bilər.

**Əlaqəli resurslar.** Satış, satınalma, tərəfdaşlar, stok, layihələr və hesabatlar.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `date` | datetime/null | Əməliyyatın biznes tarixidir. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |
| `reason` | string/null | Resursun “reason” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `created_by` | string/null | Resursun “created by” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Əsas vəsait silinmələri siyahısını al

**Endpoint** · `GET /api/v1/fixed-asset-scraps`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `fixed_asset_scraps.read`

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
      "reason": "Nümunə səbəb",
      "created_by": "Nümunə dəyər",
      "q": "qəhvə",
      "date_from": "2026-09-22",
      "date_to": "2026-09-22"
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

### Əsas vəsait silinmələri qeydi yarat

**Endpoint** · `POST /api/v1/fixed-asset-scraps`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `fixed_asset_scraps.create`

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
  "message": "Aktiv silinməsi yaradıldı.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "date": "2026-09-22",
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

### Əsas vəsait silinmələri qeydini sil

**Endpoint** · `DELETE /api/v1/fixed-asset-scraps/{fixedAssetScrap}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `fixed_asset_scraps.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "fixedAssetScrap": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Aktiv silinməsi silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Əsas vəsait silinmələri qeydini oxu

**Endpoint** · `GET /api/v1/fixed-asset-scraps/{fixedAssetScrap}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `fixed_asset_scraps.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "fixedAssetScrap": "22222222-2222-4222-8222-222222222222"
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
    "reason": "Nümunə səbəb",
    "created_by": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Əsas vəsait silinmələri qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/fixed-asset-scraps/{fixedAssetScrap}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `fixed_asset_scraps.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "fixedAssetScrap": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "date": "2026-09-22",
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
  "message": "Aktiv silinməsi yeniləndi.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "date": "2026-09-22",
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

### Əsas vəsait silinmələri qeydini ləğv et

**Endpoint** · `POST /api/v1/fixed-asset-scraps/{fixedAssetScrap}/cancel`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `fixed_asset_scraps.cancel`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "fixedAssetScrap": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Aktiv silinməsi ləğv edildi.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "date": "2026-09-22",
    "reason": "Nümunə səbəb",
    "created_by": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Əsas vəsait silinmələri qeydini post et

**Endpoint** · `POST /api/v1/fixed-asset-scraps/{fixedAssetScrap}/post`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `fixed_asset_scraps.confirm`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "fixedAssetScrap": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Aktiv silinməsi təsdiqləndi.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "date": "2026-09-22",
    "reason": "Nümunə səbəb",
    "created_by": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

