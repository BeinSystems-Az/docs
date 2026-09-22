---
sidebar_position: 2
title: POS kassa hərəkətləri
---

# POS kassa hərəkətləri

POS kassa hərəkətləri resursu pos modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `pos_cash_movements`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** POS kassa hərəkətləri resursu pos modulunda aid olduğu məlumat və əməliyyatları idarə edir. POS operativ satış kanalıdır; konfiqurasiya resursları nəticə yaratmır, post edilmiş satış və qaytarışlar isə stok və maliyyə nəticəsi yaradır.

**İlkin şərtlər.** Filial, anbar, nağd wallet, ödəniş tipləri və aktivləşdirilmiş POS cihazı mövcud olmalıdır.

**İş axını.** Registr və ödəniş tiplərini qurun, cihazı aktivləşdirin, növbə açın, əməliyyatları sync edin və növbəni bağlayın.

**State-lər və biznes təsiri.** Post edilmiş POS satışı stok çıxışı və maliyyə nəticəsi, qaytarış isə əks hərəkət yaradır; sync inbox idempotent emalı qoruyur.

**Əlaqəli resurslar.** Məhsullar, stok, wallet-lər, satış və mühasibatlıq.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `register_id` | UUID | Qeydi əlaqəli “register” resursuna bağlayır. |
| `installation_id` | UUID | POS tətbiq quraşdırmasının cihaz tərəfindən yaradılmış sabit UUID-sidir. |
| `operation_id` | UUID | Qeydi əlaqəli “operation” resursuna bağlayır. |
| `client_shift_id` | UUID | Qeydi əlaqəli “client shift” resursuna bağlayır. |
| `pos_shift_id` | UUID | Qeydi əlaqəli “pos shift” resursuna bağlayır. |
| `cash_reason_id` | UUID | Qeydi əlaqəli “cash reason” resursuna bağlayır. |
| `cash_account_id` | UUID | Qeydi əlaqəli “cash account” resursuna bağlayır. |
| `counterpart_account_id` | UUID | Qeydi əlaqəli “counterpart account” resursuna bağlayır. |
| `currency_id` | UUID | Sənədin məbləğlərinin hesablandığı valyutanı seçir. |
| `direction` | string/null | Resursun “direction” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `amount` | number | Əməliyyatın pul məbləğidir. |
| `occurred_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `business_date` | datetime/null | Resursun “business date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `note` | string/null | Əməliyyatla bağlı daxili qeyddir. |
| `client_snapshot` | array/object | Resursun “client snapshot” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |

## Endpointlər

### POS kassa hərəkətləri siyahısını al

**Endpoint** · `GET /api/v1/pos-cash-movements`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_cash_movements.read`

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
      "state": "draft",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "currency_id": "33333333-3333-4333-8333-333333333333",
      "register_id": "33333333-3333-4333-8333-333333333333",
      "installation_id": "33333333-3333-4333-8333-333333333333",
      "operation_id": "33333333-3333-4333-8333-333333333333",
      "client_shift_id": "33333333-3333-4333-8333-333333333333",
      "pos_shift_id": "33333333-3333-4333-8333-333333333333",
      "cash_reason_id": "33333333-3333-4333-8333-333333333333",
      "cash_account_id": "33333333-3333-4333-8333-333333333333"
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

### POS kassa hərəkətləri qeydini oxu

**Endpoint** · `GET /api/v1/pos-cash-movements/{id}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_cash_movements.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "id": "22222222-2222-4222-8222-222222222222"
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
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "register_id": "33333333-3333-4333-8333-333333333333",
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "operation_id": "33333333-3333-4333-8333-333333333333",
    "client_shift_id": "33333333-3333-4333-8333-333333333333",
    "pos_shift_id": "33333333-3333-4333-8333-333333333333",
    "cash_reason_id": "33333333-3333-4333-8333-333333333333",
    "cash_account_id": "33333333-3333-4333-8333-333333333333",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "direction": "Nümunə dəyər",
    "amount": 1,
    "occurred_at": "2026-09-22T10:30:00+04:00",
    "business_date": "2026-09-22",
    "note": "Sintetik nümunə məlumatı",
    "client_snapshot": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### POS kassa hərəkətləri: mədaxilləri al

**Endpoint** · `GET /api/v1/pos-deposits`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_cash_movements.read`

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
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "register_id": "33333333-3333-4333-8333-333333333333",
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "operation_id": "33333333-3333-4333-8333-333333333333",
    "client_shift_id": "33333333-3333-4333-8333-333333333333",
    "pos_shift_id": "33333333-3333-4333-8333-333333333333",
    "cash_reason_id": "33333333-3333-4333-8333-333333333333",
    "cash_account_id": "33333333-3333-4333-8333-333333333333",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "direction": "Nümunə dəyər",
    "amount": 1,
    "occurred_at": "2026-09-22T10:30:00+04:00",
    "business_date": "2026-09-22",
    "note": "Sintetik nümunə məlumatı",
    "client_snapshot": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### POS kassa hərəkətləri: mədaxili oxu

**Endpoint** · `GET /api/v1/pos-deposits/{id}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_cash_movements.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "id": "22222222-2222-4222-8222-222222222222"
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
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "register_id": "33333333-3333-4333-8333-333333333333",
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "operation_id": "33333333-3333-4333-8333-333333333333",
    "client_shift_id": "33333333-3333-4333-8333-333333333333",
    "pos_shift_id": "33333333-3333-4333-8333-333333333333",
    "cash_reason_id": "33333333-3333-4333-8333-333333333333",
    "cash_account_id": "33333333-3333-4333-8333-333333333333",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "direction": "Nümunə dəyər",
    "amount": 1,
    "occurred_at": "2026-09-22T10:30:00+04:00",
    "business_date": "2026-09-22",
    "note": "Sintetik nümunə məlumatı",
    "client_snapshot": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### POS kassa hərəkətləri: məxaricləri al

**Endpoint** · `GET /api/v1/pos-withdrawals`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_cash_movements.read`

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
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "register_id": "33333333-3333-4333-8333-333333333333",
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "operation_id": "33333333-3333-4333-8333-333333333333",
    "client_shift_id": "33333333-3333-4333-8333-333333333333",
    "pos_shift_id": "33333333-3333-4333-8333-333333333333",
    "cash_reason_id": "33333333-3333-4333-8333-333333333333",
    "cash_account_id": "33333333-3333-4333-8333-333333333333",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "direction": "Nümunə dəyər",
    "amount": 1,
    "occurred_at": "2026-09-22T10:30:00+04:00",
    "business_date": "2026-09-22",
    "note": "Sintetik nümunə məlumatı",
    "client_snapshot": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### POS kassa hərəkətləri: məxarici oxu

**Endpoint** · `GET /api/v1/pos-withdrawals/{id}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_cash_movements.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "id": "22222222-2222-4222-8222-222222222222"
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
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "register_id": "33333333-3333-4333-8333-333333333333",
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "operation_id": "33333333-3333-4333-8333-333333333333",
    "client_shift_id": "33333333-3333-4333-8333-333333333333",
    "pos_shift_id": "33333333-3333-4333-8333-333333333333",
    "cash_reason_id": "33333333-3333-4333-8333-333333333333",
    "cash_account_id": "33333333-3333-4333-8333-333333333333",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "direction": "Nümunə dəyər",
    "amount": 1,
    "occurred_at": "2026-09-22T10:30:00+04:00",
    "business_date": "2026-09-22",
    "note": "Sintetik nümunə məlumatı",
    "client_snapshot": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

