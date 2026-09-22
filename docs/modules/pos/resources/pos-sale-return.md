---
sidebar_position: 7
title: POS satış qaytarışları
---

# POS satış qaytarışları

POS satış qaytarışları resursu pos modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `pos_sale_returns`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** POS satış qaytarışları resursu pos modulunda aid olduğu məlumat və əməliyyatları idarə edir. POS operativ satış kanalıdır; konfiqurasiya resursları nəticə yaratmır, post edilmiş satış və qaytarışlar isə stok və maliyyə nəticəsi yaradır.

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
| `pos_sale_id` | UUID | Qeydi əlaqəli “pos sale” resursuna bağlayır. |
| `stock_id` | UUID | Məhsul hərəkətinin aid olduğu anbarı müəyyən edir. |
| `currency_id` | UUID | Sənədin məbləğlərinin hesablandığı valyutanı seçir. |
| `occurred_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `business_date` | datetime/null | Resursun “business date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `receipt_number` | string/null | Resursun “receipt number” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `total_quantity` | number | Serverin hesabladığı pul və ya yekun göstəricidir. |
| `amount_untaxed` | number | Serverin hesabladığı pul və ya yekun göstəricidir. |
| `amount_tax` | number | Serverin hesabladığı pul və ya yekun göstəricidir. |
| `amount_total` | number | Serverin hesabladığı pul və ya yekun göstəricidir. |
| `client_snapshot` | array/object | Resursun “client snapshot” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `fiscal_data` | array/object | Resursun “fiscal data” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `register_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `pos_sale_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `stock_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `currency_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `currency_code` | string/null | Əlaqəli qeydin response-da göstərilən kodudur. |
| `items` | array | Sənədin məhsul, hesab və ya əməliyyat sətirləridir. |
| `product_id` | UUID | Sətirdə istifadə olunan məhsulu müəyyən edir. |
| `product_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `unit_id` | UUID | Qeydi əlaqəli “unit” resursuna bağlayır. |
| `unit_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `tax_id` | UUID | Qeydi əlaqəli “tax” resursuna bağlayır. |
| `tax_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `quantity` | number | Əməliyyat olunan məhsul miqdarıdır. |
| `price` | number | Bir vahid üçün tətbiq olunan qiymətdir. |
| `net_amount` | number | Resursun “net amount” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `tax_amount` | number | Resursun “tax amount” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `gross_amount` | number | Resursun “gross amount” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `payments` | string/null | Resursun “payments” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `payment_type_id` | UUID | Qeydi əlaqəli “payment type” resursuna bağlayır. |
| `payment_type_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `kind` | string/null | Resursun “kind” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `amount` | number | Əməliyyatın pul məbləğidir. |
| `wallet_id` | UUID | Qeydi əlaqəli “wallet” resursuna bağlayır. |
| `wallet_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |

## Endpointlər

### POS satış qaytarışları siyahısını al

**Endpoint** · `GET /api/v1/pos-returns`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_sale_returns.read`

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
      "state": "draft",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "currency_id": "33333333-3333-4333-8333-333333333333",
      "amount_total": 1,
      "register_id": "33333333-3333-4333-8333-333333333333",
      "installation_id": "33333333-3333-4333-8333-333333333333",
      "operation_id": "33333333-3333-4333-8333-333333333333",
      "client_shift_id": "33333333-3333-4333-8333-333333333333",
      "pos_shift_id": "33333333-3333-4333-8333-333333333333"
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

### POS satış qaytarışları qeydini oxu

**Endpoint** · `GET /api/v1/pos-returns/{id}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_sale_returns.read`

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
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "items": "Nümunə dəyər",
    "register_id": "33333333-3333-4333-8333-333333333333",
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "operation_id": "33333333-3333-4333-8333-333333333333",
    "client_shift_id": "33333333-3333-4333-8333-333333333333",
    "pos_shift_id": "33333333-3333-4333-8333-333333333333",
    "pos_sale_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "occurred_at": "2026-09-22T10:30:00+04:00",
    "business_date": "2026-09-22",
    "receipt_number": "Nümunə dəyər",
    "total_quantity": 1,
    "amount_untaxed": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### POS satış qaytarışları siyahısını al

**Endpoint** · `GET /api/v1/pos-sale-returns`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_sale_returns.read`

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
      "state": "draft",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "currency_id": "33333333-3333-4333-8333-333333333333",
      "amount_total": 1,
      "register_id": "33333333-3333-4333-8333-333333333333",
      "installation_id": "33333333-3333-4333-8333-333333333333",
      "operation_id": "33333333-3333-4333-8333-333333333333",
      "client_shift_id": "33333333-3333-4333-8333-333333333333",
      "pos_shift_id": "33333333-3333-4333-8333-333333333333"
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

### POS satış qaytarışları qeydini oxu

**Endpoint** · `GET /api/v1/pos-sale-returns/{id}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_sale_returns.read`

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
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "items": "Nümunə dəyər",
    "register_id": "33333333-3333-4333-8333-333333333333",
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "operation_id": "33333333-3333-4333-8333-333333333333",
    "client_shift_id": "33333333-3333-4333-8333-333333333333",
    "pos_shift_id": "33333333-3333-4333-8333-333333333333",
    "pos_sale_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "occurred_at": "2026-09-22T10:30:00+04:00",
    "business_date": "2026-09-22",
    "receipt_number": "Nümunə dəyər",
    "total_quantity": 1,
    "amount_untaxed": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

