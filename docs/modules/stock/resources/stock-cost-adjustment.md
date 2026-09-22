---
sidebar_position: 4
title: Stok dəyər düzəlişləri
---

# Stok dəyər düzəlişləri

Stok dəyər düzəlişləri resursu anbar və stok modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `stock_revaluations`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Stok dəyər düzəlişləri resursu anbar və stok modulunda aid olduğu məlumat və əməliyyatları idarə edir. Master məlumatlar stok miqdarını dəyişmir; yalnız post edilmiş hərəkət sənədləri faktiki qalıq və valuation nəticəsi yaradır.

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
| `id` | UUID | Qeydin unikal identifikatorudur. |

## Endpointlər

### Stok dəyər düzəlişləri: dəyər düzəlişlərini al

**Endpoint** · `GET /api/v1/stock-revaluations`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_revaluations.read`

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
  "data": {
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Stok dəyər düzəlişləri: dəyər düzəlişi yarat

**Endpoint** · `POST /api/v1/stock-revaluations`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `stock_revaluations.create`

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
    "name": "Nümunə qeyd",
    "date": "2026-09-22",
    "new_unit_cost": 1,
    "new_cost_method": 100,
    "reason": "Nümunə səbəb"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "date": "2026-09-22",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "new_unit_cost": 1,
    "new_cost_method": 100,
    "reason": "Nümunə səbəb"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · State keçidindən asılı olaraq stok hərəkəti, valuation və jurnal nəticəsi yarana və ya revers oluna bilər.

### Stok dəyər düzəlişləri: dəyər düzəlişini oxu

**Endpoint** · `GET /api/v1/stock-revaluations/{revaluation}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_revaluations.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "revaluation": "22222222-2222-4222-8222-222222222222"
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
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Stok dəyər düzəlişləri: dəyər düzəlişini yenilə

**Endpoint** · `PUT /api/v1/stock-revaluations/{revaluation}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `stock_revaluations.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "revaluation": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "date": "2026-09-22",
    "new_unit_cost": 1,
    "new_cost_method": 100,
    "reason": "Nümunə səbəb"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "date": "2026-09-22",
    "new_unit_cost": 1,
    "new_cost_method": 100,
    "reason": "Nümunə səbəb"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · State keçidindən asılı olaraq stok hərəkəti, valuation və jurnal nəticəsi yarana və ya revers oluna bilər.

### Stok dəyər düzəlişləri: dəyər düzəlişini ləğv et

**Endpoint** · `POST /api/v1/stock-revaluations/{revaluation}/cancel`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `stock_revaluations.cancel`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "revaluation": "22222222-2222-4222-8222-222222222222"
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
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · State keçidindən asılı olaraq stok hərəkəti, valuation və jurnal nəticəsi yarana və ya revers oluna bilər.

### Stok dəyər düzəlişləri: dəyər düzəlişini post et

**Endpoint** · `POST /api/v1/stock-revaluations/{revaluation}/post`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `stock_revaluations.confirm`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "revaluation": "22222222-2222-4222-8222-222222222222"
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
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · State keçidindən asılı olaraq stok hərəkəti, valuation və jurnal nəticəsi yarana və ya revers oluna bilər.

