---
sidebar_position: 8
title: POS növbələri
---

# POS növbələri

POS növbələri resursu pos modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `pos_shifts`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** POS növbələri resursu pos modulunda aid olduğu məlumat və əməliyyatları idarə edir. POS operativ satış kanalıdır; konfiqurasiya resursları nəticə yaratmır, post edilmiş satış və qaytarışlar isə stok və maliyyə nəticəsi yaradır.

**İlkin şərtlər.** Filial, anbar, nağd wallet, ödəniş tipləri və aktivləşdirilmiş POS cihazı mövcud olmalıdır.

**İş axını.** Registr və ödəniş tiplərini qurun, cihazı aktivləşdirin, növbə açın, əməliyyatları sync edin və növbəni bağlayın.

**State-lər və biznes təsiri.** Post edilmiş POS satışı stok çıxışı və maliyyə nəticəsi, qaytarış isə əks hərəkət yaradır; sync inbox idempotent emalı qoruyur.

**Əlaqəli resurslar.** Məhsullar, stok, wallet-lər, satış və mühasibatlıq.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.


| State | Mənası | Sistem təsiri |
| --- | --- | --- |
| `open` | Açıq | Əməliyyat davam edir və yeni hərəkət qəbul edə bilər. |
| `closed` | Bağlı | Əməliyyat tamamlanıb və yeni hərəkət qəbulu dayandırılıb. |

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `register_id` | UUID | Qeydi əlaqəli “register” resursuna bağlayır. |
| `installation_id` | UUID | POS tətbiq quraşdırmasının cihaz tərəfindən yaradılmış sabit UUID-sidir. |
| `user_id` | UUID | Əməliyyatla əlaqəli istifadəçini göstərir. |
| `client_shift_id` | UUID | Qeydi əlaqəli “client shift” resursuna bağlayır. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |
| `open_operation_id` | UUID | Qeydi əlaqəli “open operation” resursuna bağlayır. |
| `close_operation_id` | UUID | Qeydi əlaqəli “close operation” resursuna bağlayır. |
| `open_sequence` | number | Resursun “open sequence” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `close_sequence` | number | Resursun “close sequence” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `open_payload_hash` | string/null | Resursun “open payload hash” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `close_payload_hash` | string/null | Resursun “close payload hash” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `opened_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `closed_at` | datetime/null | Resursun bağlandığı vaxtdır. |
| `user_snapshot` | array/object | Resursun “user snapshot” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `operation_manifest` | array/object | Resursun “operation manifest” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `pending_operations` | array/object | Resursun “pending operations” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `pos_payment_totals` | array/object | Resursun “pos payment totals” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `pos_totals` | array/object | Resursun “pos totals” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `erp_payment_totals` | array/object | Resursun “erp payment totals” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `erp_totals` | array/object | Resursun “erp totals” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `review_issues` | array/object | Resursun “review issues” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `opening_cash` | number | Resursun “opening cash” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `counted_cash` | number | Resursun “counted cash” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `pos_expected_cash` | number | Resursun “pos expected cash” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `pos_variance` | number | Resursun “pos variance” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `erp_expected_cash` | number | Resursun “erp expected cash” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `erp_variance` | number | Resursun “erp variance” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `reconciliation_state` | string/null | Resursun “reconciliation state” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `reconciled_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `shift_id` | UUID | Qeydi əlaqəli “shift” resursuna bağlayır. |
| `user` | string/null | Resursun “user” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `surname` | string/null | Resursun “surname” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `operations` | array | POS cihazından serverə göndərilən ardıcıl və idempotent əməliyyatlardır. |
| `sales` | string/null | Resursun “sales” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `returns` | string/null | Resursun “returns” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `cash_movements` | string/null | Resursun “cash movements” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `payments` | string/null | Resursun “payments” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### POS növbələri siyahısını al

**Endpoint** · `GET /api/v1/pos-shifts`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_shifts.read`

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
      "register_id": "33333333-3333-4333-8333-333333333333",
      "installation_id": "33333333-3333-4333-8333-333333333333",
      "user_id": "33333333-3333-4333-8333-333333333333",
      "client_shift_id": "33333333-3333-4333-8333-333333333333",
      "open_operation_id": "33333333-3333-4333-8333-333333333333",
      "close_operation_id": "33333333-3333-4333-8333-333333333333",
      "open_sequence": 1,
      "close_sequence": 1
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

### POS növbələri qeydini oxu

**Endpoint** · `GET /api/v1/pos-shifts/{id}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_shifts.read`

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
    "register_id": "33333333-3333-4333-8333-333333333333",
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "user_id": "33333333-3333-4333-8333-333333333333",
    "client_shift_id": "33333333-3333-4333-8333-333333333333",
    "open_operation_id": "33333333-3333-4333-8333-333333333333",
    "close_operation_id": "33333333-3333-4333-8333-333333333333",
    "open_sequence": 1,
    "close_sequence": 1,
    "open_payload_hash": "Nümunə dəyər",
    "close_payload_hash": "Nümunə dəyər",
    "opened_at": "2026-09-22T10:30:00+04:00",
    "closed_at": "2026-09-22T10:30:00+04:00",
    "user_snapshot": {},
    "operation_manifest": {},
    "pending_operations": {},
    "pos_payment_totals": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### POS növbələri: Z hesabatını al

**Endpoint** · `GET /api/v1/pos-shifts/{id}/z-report`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_shifts.read`

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
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "register_id": "33333333-3333-4333-8333-333333333333",
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "user_id": "33333333-3333-4333-8333-333333333333",
    "client_shift_id": "33333333-3333-4333-8333-333333333333",
    "open_operation_id": "33333333-3333-4333-8333-333333333333",
    "close_operation_id": "33333333-3333-4333-8333-333333333333",
    "open_sequence": 1,
    "close_sequence": 1,
    "open_payload_hash": "Nümunə dəyər",
    "close_payload_hash": "Nümunə dəyər",
    "opened_at": "2026-09-22T10:30:00+04:00",
    "closed_at": "2026-09-22T10:30:00+04:00",
    "user_snapshot": {},
    "operation_manifest": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

