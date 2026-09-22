---
sidebar_position: 6
title: Valyuta məzənnələri
---

# Valyuta məzənnələri

Valyuta məzənnələri xarici valyutanın təşkilatın əsas valyutasına tarix üzrə çevrilmə əmsalını saxlayır.

:::info Kontekst
`Authorization: Bearer <token>` · tenant konteksti · `currency_rates.read/create/update/delete`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Hər qeyd bir xarici valyuta, biznes tarixi, müsbət əmsal və məzənnə tipi saxlayır. Məzənnə özü jurnal yaratmır; valyutalı sənəd post edilərkən conversion üçün seçilir.

**İlkin şərtlər.** `currency_id` mövcud və təşkilatın əsas valyutasından fərqli valyuta olmalıdır. `rate` sıfırdan böyük, `rate_type` isə `official`, `market` və ya `interbank` olmalıdır.

**İş axını.** Xarici valyutanı yaradın, uyğun tarix üçün məzənnəni saxlayın, sonra həmin tarixli sənədi post edin. Currency engine tarixə uyğun məzənnəni seçir.

**State-lər və biznes təsiri.** Lifecycle state yoxdur. Sonradan edilən dəyişiklik yalnız gələcək hesablamalara təsir edir; artıq post edilmiş sənədin saxladığı tarixi conversion nəticəsi avtomatik yenilənmir.

**Əlaqəli resurslar.** Valyutalar, jurnal sətirləri, ödənişlər, fakturalar və maliyyə hesabatları.

**Əsas məhdudiyyətlər.** Əsas valyutanın ayrıca məzənnəsi yaradıla bilməz (`BASE_CURRENCY_RATE_FORBIDDEN`). Əmsal müsbət olmalıdır (`CURRENCY_RATE_INVALID`).

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Məzənnə qeydinin identifikatorudur. |
| `currency_id` | UUID | Çevrilən xarici valyutanı seçir. |
| `currency_name` | string/null | Valyutanın response-da göstərilən adıdır. |
| `date` | datetime | Məzənnənin qüvvədə olduğu biznes tarixidir. |
| `rate` | decimal string | Xarici valyutadan əsas valyutaya müsbət çevrilmə əmsalıdır. |
| `rate_type` | enum | `official`, `market` və ya `interbank` mənbə tipidir. |

## Endpointlər

### Valyuta məzənnələri siyahısını al

**Endpoint** · `GET /api/v1/currency-rates`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `currency_rates.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "q": "official",
    "page": 1,
    "per_page": 20
  },
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qeydlər uğurla siyahılandı.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "currency_id": "33333333-3333-4333-8333-333333333333",
      "currency_name": "ABŞ dolları",
      "date": "2026-09-22T00:00:00+04:00",
      "rate": "1.700000",
      "rate_type": "official"
    }
  ],
  "links": {
    "first": "https://erp.example.test/api/v1/currency-rates?page=1",
    "last": "https://erp.example.test/api/v1/currency-rates?page=1",
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

### Valyuta məzənnələri qeydi yarat

**Endpoint** · `POST /api/v1/currency-rates`

Xarici valyuta üçün tarixli məzənnə yaradır.

**İcazə** · `currency_rates.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "rate": 1.7,
    "rate_type": "official"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Qeyd uğurla yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "currency_name": "ABŞ dolları",
    "date": "2026-09-22T00:00:00+04:00",
    "rate": "1.700000",
    "rate_type": "official"
  }
}
```

**Xətalar** · `401` — token etibarsızdır; `403` — `currency_rates.create` icazəsi yoxdur; `422` — valyuta/tip yanlışdır, əmsal müsbət deyil və ya əsas valyuta seçilib.

**Biznes təsiri** · Göstərilən tarix üzrə gələcək conversion hesablamalarına yeni əmsal əlavə olunur; dərhal jurnal yaranmır.

### Valyuta məzənnələri qeydini sil

**Endpoint** · `DELETE /api/v1/currency-rates/{currency_rate}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `currency_rates.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "currency_rate": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qeyd uğurla silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Valyuta məzənnələri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Valyuta məzənnələri qeydini oxu

**Endpoint** · `GET /api/v1/currency-rates/{currency_rate}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `currency_rates.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "currency_rate": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qeyd uğurla gətirildi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "currency_name": "ABŞ dolları",
    "date": "2026-09-22T00:00:00+04:00",
    "rate": "1.700000",
    "rate_type": "official"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Valyuta məzənnələri qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/currency-rates/{currency_rate}`

Tarixi məzənnənin valyuta, tarix, əmsal və ya tipini yeniləyir.

**İcazə** · `currency_rates.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "currency_rate": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "rate": 1.71,
    "rate_type": "official"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qeyd uğurla yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "currency_name": "ABŞ dolları",
    "date": "2026-09-22T00:00:00+04:00",
    "rate": "1.710000",
    "rate_type": "official"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Gələcək conversion nəticələri dəyişə bilər; artıq post edilmiş sənədlər avtomatik yenidən hesablanmır.
