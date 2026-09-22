---
sidebar_position: 4
title: POS ödəniş tipləri
---

# POS ödəniş tipləri

POS ödəniş tipləri resursu pos modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `pos_payment_types`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** POS ödəniş tipləri resursu pos modulunda aid olduğu məlumat və əməliyyatları idarə edir. POS operativ satış kanalıdır; konfiqurasiya resursları nəticə yaratmır, post edilmiş satış və qaytarışlar isə stok və maliyyə nəticəsi yaradır.

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
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `account_id` | UUID | Qeydi əlaqəli “account” resursuna bağlayır. |
| `wallet_id` | UUID | Qeydi əlaqəli “wallet” resursuna bağlayır. |
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `kind` | string/null | Resursun “kind” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |
| `configuration` | array/object | Resursun “configuration” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### POS ödəniş tipləri siyahısını al

**Endpoint** · `GET /api/v1/pos-payment-types`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_payment_types.read`

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
      "code": "DEMO",
      "name": "Nümunə qeyd",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "account_id": "33333333-3333-4333-8333-333333333333",
      "wallet_id": "33333333-3333-4333-8333-333333333333",
      "kind": "Nümunə dəyər",
      "active": true,
      "configuration": {}
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### POS ödəniş tipləri qeydi yarat

**Endpoint** · `POST /api/v1/pos-payment-types`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `pos_payment_types.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "active": true
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "POS payment type created.",
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "kind": "Nümunə dəyər",
    "active": true,
    "configuration": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · POS ödəniş tipləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### POS ödəniş tipləri qeydini sil

**Endpoint** · `DELETE /api/v1/pos-payment-types/{posPaymentType}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `pos_payment_types.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "posPaymentType": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "POS payment type archived.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · POS ödəniş tipləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### POS ödəniş tipləri qeydini oxu

**Endpoint** · `GET /api/v1/pos-payment-types/{posPaymentType}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_payment_types.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "posPaymentType": "22222222-2222-4222-8222-222222222222"
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
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "kind": "Nümunə dəyər",
    "active": true,
    "configuration": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### POS ödəniş tipləri qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/pos-payment-types/{posPaymentType}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `pos_payment_types.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "posPaymentType": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "POS payment type updated.",
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "kind": "Nümunə dəyər",
    "active": true,
    "configuration": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · POS ödəniş tipləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

