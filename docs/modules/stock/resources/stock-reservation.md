---
sidebar_position: 11
title: Stok rezervləri
---

# Stok rezervləri

Stok rezervləri resursu anbar və stok modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `stock_reservations`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Stok rezervləri resursu anbar və stok modulunda aid olduğu məlumat və əməliyyatları idarə edir. Master məlumatlar stok miqdarını dəyişmir; yalnız post edilmiş hərəkət sənədləri faktiki qalıq və valuation nəticəsi yaradır.

**İlkin şərtlər.** Filial, anbar/lokasiya, məhsul və tələb olunan valuation hesabları mövcud olmalıdır.

**İş axını.** Anbar strukturunu qurun, sənədi draft yaradın, sətirləri yoxlayın, sonra post edin və hesabatlardan nəticəni izləyin.

**State-lər və biznes təsiri.** Post etmə stok hərəkəti və lazım olduqda jurnal yaradır; cancel/reversal nəticəni geri çevirir.

**Əlaqəli resurslar.** Kataloq, satış, satınalma, istehsal və mühasibatlıq.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.


| State | Mənası | Sistem təsiri |
| --- | --- | --- |
| `waiting` | Gözləyir | Rezerv üçün uyğun stok və ya növbəti əməliyyat gözlənilir. |
| `partial` | Qismən | Tələb olunan miqdarın yalnız bir hissəsi qarşılanıb. |
| `reserved` | Rezerv edilib | Tələb olunan stok ayrılıb, lakin hələ istehlak edilməyib. |
| `partially_consumed` | Qismən istifadə edilib | Rezervin bir hissəsi faktiki hərəkətdə istifadə olunub. |
| `consumed` | İstifadə edilib | Rezerv tam olaraq faktiki stok hərəkətinə çevrilib. |
| `released` | Buraxılıb | Rezerv ləğv olunub və stok yenidən əlçatan edilib. |

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `stock_id` | UUID | Məhsul hərəkətinin aid olduğu anbarı müəyyən edir. |
| `product_id` | UUID | Sətirdə istifadə olunan məhsulu müəyyən edir. |
| `packaging_id` | UUID | Qeydi əlaqəli “packaging” resursuna bağlayır. |
| `sale_order_id` | UUID | Qeydi əlaqəli “sale order” resursuna bağlayır. |
| `sale_order_item_id` | UUID | Qeydi əlaqəli “sale order item” resursuna bağlayır. |
| `source_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `source_id` | UUID | Qeydi əlaqəli “source” resursuna bağlayır. |
| `source_item_id` | UUID | Qeydi əlaqəli “source item” resursuna bağlayır. |
| `stock_document_id` | UUID | Qeydi əlaqəli “stock document” resursuna bağlayır. |
| `demand_quantity` | number | Resursun “demand quantity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `reserved_quantity` | number | Resursun “reserved quantity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `consumed_quantity` | number | Resursun “consumed quantity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `waiting_quantity` | number | Resursun “waiting quantity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |
| `priority_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `reservation_id` | UUID | Qeydi əlaqəli “reservation” resursuna bağlayır. |
| `quant_id` | UUID | Qeydi əlaqəli “quant” resursuna bağlayır. |
| `location_id` | UUID | Qeydi əlaqəli “location” resursuna bağlayır. |
| `location_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `stock_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `lot_id` | UUID | Qeydi əlaqəli “lot” resursuna bağlayır. |
| `lot_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `expiration_date` | date/null | Resursun “expiration date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `quantity` | number | Əməliyyat olunan məhsul miqdarıdır. |
| `open_quantity` | number | Resursun “open quantity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `product_code` | string/null | Əlaqəli qeydin response-da göstərilən kodudur. |
| `product_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `category_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `unit_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `sale_order_name` | number | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `customer_id` | UUID | Satışın aid olduğu müştərini göstərir. |
| `customer_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `stock_document_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `state_color` | string/null | Resursun “state color” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `state_color_hex` | string/null | Resursun “state color hex” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `allocations_count` | number | Əlaqəli qeydlərin hesablanmış sayıdır. |
| `allocations` | string/null | Resursun “allocations” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `available_actions` | string/null | Resursun “available actions” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `created_at` | datetime/null | Qeydin yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Qeydin son dəyişdirilmə vaxtıdır. |
| `effective_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `event_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `event_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `quantity_delta` | number | Resursun “quantity delta” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `reserved_balance` | number | Resursun “reserved balance” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `document_id` | UUID | Qeydi əlaqəli “document” resursuna bağlayır. |
| `document_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `document_resource` | string/null | Resursun “document resource” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `document_link` | string/null | Resursun “document link” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Stok rezervləri: allocation seçimlərini al

**Endpoint** · `GET /api/v1/stock-reservation-allocations/{allocation}/options`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_reservations.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "allocation": "22222222-2222-4222-8222-222222222222"
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
    "state": "waiting",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "packaging_id": "33333333-3333-4333-8333-333333333333",
    "sale_order_id": "33333333-3333-4333-8333-333333333333",
    "sale_order_item_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "source_item_id": "33333333-3333-4333-8333-333333333333",
    "stock_document_id": "33333333-3333-4333-8333-333333333333",
    "demand_quantity": 1,
    "reserved_quantity": 1,
    "consumed_quantity": 1,
    "waiting_quantity": 1,
    "priority_at": "2026-09-22T10:30:00+04:00"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Stok rezervləri: yenidən ayır

**Endpoint** · `POST /api/v1/stock-reservation-allocations/{allocation}/reallocate`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `stock_reservations.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "allocation": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "quant_id": "33333333-3333-4333-8333-333333333333",
    "quantity": 1
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "state": "waiting",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "packaging_id": "33333333-3333-4333-8333-333333333333",
    "sale_order_id": "33333333-3333-4333-8333-333333333333",
    "sale_order_item_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "source_item_id": "33333333-3333-4333-8333-333333333333",
    "stock_document_id": "33333333-3333-4333-8333-333333333333",
    "demand_quantity": 1,
    "reserved_quantity": 1,
    "consumed_quantity": 1,
    "waiting_quantity": 1,
    "priority_at": "2026-09-22T10:30:00+04:00",
    "reservation_id": "33333333-3333-4333-8333-333333333333",
    "quant_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Stok rezervləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Stok rezervləri siyahısını al

**Endpoint** · `GET /api/v1/stock-reservations`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_reservations.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "scope": "active",
    "state": "waiting",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "sale_order_id": "33333333-3333-4333-8333-333333333333"
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
      "id": "22222222-2222-4222-8222-222222222222",
      "state": "waiting",
      "customer_id": "33333333-3333-4333-8333-333333333333",
      "stock_id": "33333333-3333-4333-8333-333333333333",
      "product_id": "33333333-3333-4333-8333-333333333333",
      "packaging_id": "33333333-3333-4333-8333-333333333333",
      "sale_order_id": "33333333-3333-4333-8333-333333333333",
      "sale_order_item_id": "33333333-3333-4333-8333-333333333333",
      "source_type": "standard",
      "source_id": "33333333-3333-4333-8333-333333333333"
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

### Stok rezervləri qeydini oxu

**Endpoint** · `GET /api/v1/stock-reservations/{stockReservation}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_reservations.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stockReservation": "22222222-2222-4222-8222-222222222222"
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
    "state": "waiting",
    "customer_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "packaging_id": "33333333-3333-4333-8333-333333333333",
    "sale_order_id": "33333333-3333-4333-8333-333333333333",
    "sale_order_item_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "source_item_id": "33333333-3333-4333-8333-333333333333",
    "stock_document_id": "33333333-3333-4333-8333-333333333333",
    "demand_quantity": 1,
    "reserved_quantity": 1,
    "consumed_quantity": 1,
    "waiting_quantity": 1,
    "priority_at": "2026-09-22T10:30:00+04:00",
    "stock_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Stok rezervləri: tarixçəni al

**Endpoint** · `GET /api/v1/stock-reservations/{stockReservation}/history`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_reservations.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stockReservation": "22222222-2222-4222-8222-222222222222"
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
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "state": "waiting",
      "stock_id": "33333333-3333-4333-8333-333333333333",
      "product_id": "33333333-3333-4333-8333-333333333333",
      "packaging_id": "33333333-3333-4333-8333-333333333333",
      "sale_order_id": "33333333-3333-4333-8333-333333333333",
      "sale_order_item_id": "33333333-3333-4333-8333-333333333333",
      "source_type": "standard",
      "source_id": "33333333-3333-4333-8333-333333333333",
      "source_item_id": "33333333-3333-4333-8333-333333333333",
      "stock_document_id": "33333333-3333-4333-8333-333333333333",
      "demand_quantity": 1,
      "reserved_quantity": 1,
      "consumed_quantity": 1,
      "waiting_quantity": 1,
      "priority_at": "2026-09-22T10:30:00+04:00",
      "effective_at": "2026-09-22T10:30:00+04:00",
      "event_type": "standard"
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

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Stok rezervləri: rezervi burax

**Endpoint** · `POST /api/v1/stock-reservations/{stockReservation}/release`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `stock_reservations.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stockReservation": "22222222-2222-4222-8222-222222222222"
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
    "state": "waiting",
    "customer_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "packaging_id": "33333333-3333-4333-8333-333333333333",
    "sale_order_id": "33333333-3333-4333-8333-333333333333",
    "sale_order_item_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "source_item_id": "33333333-3333-4333-8333-333333333333",
    "stock_document_id": "33333333-3333-4333-8333-333333333333",
    "demand_quantity": 1,
    "reserved_quantity": 1,
    "consumed_quantity": 1,
    "waiting_quantity": 1,
    "priority_at": "2026-09-22T10:30:00+04:00",
    "stock_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Stok rezervləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Stok rezervləri icrasını təkrarla

**Endpoint** · `POST /api/v1/stock-reservations/{stockReservation}/retry`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `stock_reservations.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stockReservation": "22222222-2222-4222-8222-222222222222"
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
    "state": "waiting",
    "customer_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "packaging_id": "33333333-3333-4333-8333-333333333333",
    "sale_order_id": "33333333-3333-4333-8333-333333333333",
    "sale_order_item_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "source_item_id": "33333333-3333-4333-8333-333333333333",
    "stock_document_id": "33333333-3333-4333-8333-333333333333",
    "demand_quantity": 1,
    "reserved_quantity": 1,
    "consumed_quantity": 1,
    "waiting_quantity": 1,
    "priority_at": "2026-09-22T10:30:00+04:00",
    "stock_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Stok rezervləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

