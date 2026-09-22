---
sidebar_position: 10
title: POS sync monitoru
---

# POS sync monitoru

POS sync monitoru resursu pos modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `pos_sync_monitor`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** POS sync monitoru resursu pos modulunda aid olduğu məlumat və əməliyyatları idarə edir. POS operativ satış kanalıdır; konfiqurasiya resursları nəticə yaratmır, post edilmiş satış və qaytarışlar isə stok və maliyyə nəticəsi yaradır.

**İlkin şərtlər.** Filial, anbar, nağd wallet, ödəniş tipləri və aktivləşdirilmiş POS cihazı mövcud olmalıdır.

**İş axını.** Registr və ödəniş tiplərini qurun, cihazı aktivləşdirin, növbə açın, əməliyyatları sync edin və növbəni bağlayın.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Post edilmiş POS satışı stok çıxışı və maliyyə nəticəsi, qaytarış isə əks hərəkət yaradır; sync inbox idempotent emalı qoruyur.

**Əlaqəli resurslar.** Məhsullar, stok, wallet-lər, satış və mühasibatlıq.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `register_id` | UUID | Qeydi əlaqəli “register” resursuna bağlayır. |
| `inbox_id` | UUID | Qeydi əlaqəli “inbox” resursuna bağlayır. |
| `pos_sale_id` | UUID | Qeydi əlaqəli “pos sale” resursuna bağlayır. |
| `pos_shift_id` | UUID | Qeydi əlaqəli “pos shift” resursuna bağlayır. |
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `severity` | string/null | Resursun “severity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `context` | array/object | Resursun “context” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `resolved_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `register` | string/null | Resursun “register” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `created_at` | datetime/null | Qeydin yaradılma vaxtıdır. |
| `installation_id` | UUID | POS tətbiq quraşdırmasının cihaz tərəfindən yaradılmış sabit UUID-sidir. |
| `operation_id` | UUID | Qeydi əlaqəli “operation” resursuna bağlayır. |
| `user_id` | UUID | Əməliyyatla əlaqəli istifadəçini göstərir. |
| `operation_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `payload` | array/object | Resursun “payload” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `payload_hash` | string/null | Resursun “payload hash” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `client_shift_id` | UUID | Qeydi əlaqəli “client shift” resursuna bağlayır. |
| `sequence` | number | Siyahıda emal və görünmə ardıcıllığını müəyyən edir. |
| `attempts` | number | Resursun “attempts” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `next_retry_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `processing_started_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `processed_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `last_error` | string/null | Resursun “last error” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `error_code` | string/null | Əlaqəli qeydin response-da göstərilən kodudur. |
| `result` | array/object | Resursun “result” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `result_entity_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `result_entity_id` | UUID | Qeydi əlaqəli “result entity” resursuna bağlayır. |
| `queued` | string/null | Resursun “queued” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `stock_id` | UUID | Məhsul hərəkətinin aid olduğu anbarı müəyyən edir. |
| `cash_wallet_id` | UUID | Qeydi əlaqəli “cash wallet” resursuna bağlayır. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |
| `activated_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `last_seen_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `last_received_sequence` | number | Resursun “last received sequence” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `active_registers` | boolean | Resursun “active registers” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `backlog` | integer | Hələ tam emal edilməmiş POS operation sayıdır. |
| `oldest_pending_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `retry_wait` | string/null | Resursun “retry wait” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `review_required` | integer | İnsan yoxlaması tələb edən POS operation sayıdır. |
| `open_issues` | string/null | Resursun “open issues” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### POS sync monitoru siyahısını al

**Endpoint** · `GET /api/v1/pos-sync`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_sync_monitor.read`

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
      "status": "active",
      "register_id": "33333333-3333-4333-8333-333333333333",
      "inbox_id": "33333333-3333-4333-8333-333333333333",
      "pos_sale_id": "33333333-3333-4333-8333-333333333333",
      "pos_shift_id": "33333333-3333-4333-8333-333333333333",
      "severity": "Nümunə dəyər",
      "message": "Nümunə dəyər"
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

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### POS sync monitoru siyahısını al

**Endpoint** · `GET /api/v1/pos-sync-monitor`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_sync_monitor.read`

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
      "status": "active",
      "register_id": "33333333-3333-4333-8333-333333333333",
      "inbox_id": "33333333-3333-4333-8333-333333333333",
      "pos_sale_id": "33333333-3333-4333-8333-333333333333",
      "pos_shift_id": "33333333-3333-4333-8333-333333333333",
      "severity": "Nümunə dəyər",
      "message": "Nümunə dəyər"
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

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### POS sync monitoru icrasını təkrarla

**Endpoint** · `POST /api/v1/pos-sync-monitor/{issue}/retry`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `pos_sync_monitor.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "issue": "22222222-2222-4222-8222-222222222222"
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
    "status": "active",
    "register_id": "33333333-3333-4333-8333-333333333333",
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "operation_id": "33333333-3333-4333-8333-333333333333",
    "user_id": "33333333-3333-4333-8333-333333333333",
    "operation_type": "standard",
    "payload": {},
    "payload_hash": "Nümunə dəyər",
    "client_shift_id": "33333333-3333-4333-8333-333333333333",
    "sequence": 1,
    "attempts": 1,
    "next_retry_at": "2026-09-22T10:30:00+04:00",
    "processing_started_at": "2026-09-22T10:30:00+04:00",
    "processed_at": "2026-09-22T10:30:00+04:00",
    "last_error": "Nümunə dəyər",
    "error_code": "Nümunə dəyər",
    "result": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · POS əməliyyatı satış/qaytarış state-inə uyğun stok və maliyyə nəticəsi yarada bilər; sync idempotency qaydaları tətbiq edilir.

### POS sync monitoru: statusu al

**Endpoint** · `GET /api/v1/pos-sync-monitor/status`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_sync_monitor.read`

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
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "status": "active",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "cash_wallet_id": "33333333-3333-4333-8333-333333333333",
    "active": true,
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "activated_at": "2026-09-22T10:30:00+04:00",
    "last_seen_at": "2026-09-22T10:30:00+04:00",
    "last_received_sequence": 1,
    "register_id": "33333333-3333-4333-8333-333333333333",
    "operation_id": "33333333-3333-4333-8333-333333333333",
    "user_id": "33333333-3333-4333-8333-333333333333",
    "operation_type": "standard",
    "payload": {},
    "payload_hash": "Nümunə dəyər",
    "client_shift_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### POS sync monitoru icrasını təkrarla

**Endpoint** · `POST /api/v1/pos-sync/{issue}/retry`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `pos_sync_monitor.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "issue": "22222222-2222-4222-8222-222222222222"
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
    "status": "active",
    "register_id": "33333333-3333-4333-8333-333333333333",
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "operation_id": "33333333-3333-4333-8333-333333333333",
    "user_id": "33333333-3333-4333-8333-333333333333",
    "operation_type": "standard",
    "payload": {},
    "payload_hash": "Nümunə dəyər",
    "client_shift_id": "33333333-3333-4333-8333-333333333333",
    "sequence": 1,
    "attempts": 1,
    "next_retry_at": "2026-09-22T10:30:00+04:00",
    "processing_started_at": "2026-09-22T10:30:00+04:00",
    "processed_at": "2026-09-22T10:30:00+04:00",
    "last_error": "Nümunə dəyər",
    "error_code": "Nümunə dəyər",
    "result": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · POS əməliyyatı satış/qaytarış state-inə uyğun stok və maliyyə nəticəsi yarada bilər; sync idempotency qaydaları tətbiq edilir.

### POS sync monitoru: statusu al

**Endpoint** · `GET /api/v1/pos-sync/status`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_sync_monitor.read`

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
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "status": "active",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "cash_wallet_id": "33333333-3333-4333-8333-333333333333",
    "active": true,
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "activated_at": "2026-09-22T10:30:00+04:00",
    "last_seen_at": "2026-09-22T10:30:00+04:00",
    "last_received_sequence": 1,
    "register_id": "33333333-3333-4333-8333-333333333333",
    "operation_id": "33333333-3333-4333-8333-333333333333",
    "user_id": "33333333-3333-4333-8333-333333333333",
    "operation_type": "standard",
    "payload": {},
    "payload_hash": "Nümunə dəyər",
    "client_shift_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

