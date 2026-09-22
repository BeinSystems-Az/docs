---
sidebar_position: 5
title: POS registrləri
---

# POS registrləri

Fiziki və ya virtual satış nöqtəsini anbar, nağd wallet və qəbul etdiyi ödəniş tipləri ilə bağlayır.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `pos_registers`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Fiziki və ya virtual satış nöqtəsini anbar, nağd wallet və qəbul etdiyi ödəniş tipləri ilə bağlayır. POS operativ satış kanalıdır; konfiqurasiya resursları nəticə yaratmır, post edilmiş satış və qaytarışlar isə stok və maliyyə nəticəsi yaradır.

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
| `stock_id` | UUID | Məhsul hərəkətinin aid olduğu anbarı müəyyən edir. |
| `cash_wallet_id` | UUID | Qeydi əlaqəli “cash wallet” resursuna bağlayır. |
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |
| `installation_id` | UUID | POS tətbiq quraşdırmasının cihaz tərəfindən yaradılmış sabit UUID-sidir. |
| `activated_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `last_seen_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `last_received_sequence` | number | Resursun “last received sequence” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### POS registrləri siyahısını al

**Endpoint** · `GET /api/v1/pos-registers`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_registers.read`

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
      "stock_id": "33333333-3333-4333-8333-333333333333",
      "cash_wallet_id": "33333333-3333-4333-8333-333333333333",
      "active": true,
      "installation_id": "33333333-3333-4333-8333-333333333333",
      "activated_at": "2026-09-22T10:30:00+04:00",
      "last_seen_at": "2026-09-22T10:30:00+04:00",
      "last_received_sequence": 1
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### POS registrləri qeydi yarat

**Endpoint** · `POST /api/v1/pos-registers`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `pos_registers.create`

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
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "cash_wallet_id": "33333333-3333-4333-8333-333333333333",
    "active": true,
    "payment_type_ids": [
      "33333333-3333-4333-8333-333333333333"
    ],
    "payment_methods": [
      {
        "payment_type_id": "33333333-3333-4333-8333-333333333333",
        "sort_order": 1
      }
    ]
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "POS register created.",
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "cash_wallet_id": "33333333-3333-4333-8333-333333333333",
    "active": true,
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "activated_at": "2026-09-22T10:30:00+04:00",
    "last_seen_at": "2026-09-22T10:30:00+04:00",
    "last_received_sequence": 1,
    "payment_type_ids": [
      "33333333-3333-4333-8333-333333333333"
    ],
    "payment_methods": [
      {
        "payment_type_id": "33333333-3333-4333-8333-333333333333",
        "sort_order": 1
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · POS registrləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### POS registrləri qeydini sil

**Endpoint** · `DELETE /api/v1/pos-registers/{posRegister}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `pos_registers.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "posRegister": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "POS register archived.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · POS registrləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### POS registrləri qeydini oxu

**Endpoint** · `GET /api/v1/pos-registers/{posRegister}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `pos_registers.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "posRegister": "22222222-2222-4222-8222-222222222222"
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
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "cash_wallet_id": "33333333-3333-4333-8333-333333333333",
    "active": true,
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "activated_at": "2026-09-22T10:30:00+04:00",
    "last_seen_at": "2026-09-22T10:30:00+04:00",
    "last_received_sequence": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### POS registrləri qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/pos-registers/{posRegister}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `pos_registers.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "posRegister": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "cash_wallet_id": "33333333-3333-4333-8333-333333333333",
    "active": true,
    "payment_type_ids": [
      "33333333-3333-4333-8333-333333333333"
    ],
    "payment_methods": [
      {
        "payment_type_id": "33333333-3333-4333-8333-333333333333",
        "sort_order": 1
      }
    ]
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "POS register updated.",
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "cash_wallet_id": "33333333-3333-4333-8333-333333333333",
    "active": true,
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "activated_at": "2026-09-22T10:30:00+04:00",
    "last_seen_at": "2026-09-22T10:30:00+04:00",
    "last_received_sequence": 1,
    "payment_type_ids": [
      "33333333-3333-4333-8333-333333333333"
    ],
    "payment_methods": [
      {
        "payment_type_id": "33333333-3333-4333-8333-333333333333",
        "sort_order": 1
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · POS registrləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### POS registrləri: aktivasiya kodu yarat

**Endpoint** · `POST /api/v1/pos-registers/{posRegister}/activation-code`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `pos_registers.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "posRegister": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "One-time activation code issued.",
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "cash_wallet_id": "33333333-3333-4333-8333-333333333333",
    "active": true,
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "activated_at": "2026-09-22T10:30:00+04:00",
    "last_seen_at": "2026-09-22T10:30:00+04:00",
    "last_received_sequence": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · POS registrləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### POS registrləri: cihaz bağlantısını sıfırla

**Endpoint** · `POST /api/v1/pos-registers/{posRegister}/reset-installation`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `pos_registers.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "posRegister": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "POS installation binding reset.",
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "cash_wallet_id": "33333333-3333-4333-8333-333333333333",
    "active": true,
    "installation_id": "33333333-3333-4333-8333-333333333333",
    "activated_at": "2026-09-22T10:30:00+04:00",
    "last_seen_at": "2026-09-22T10:30:00+04:00",
    "last_received_sequence": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · POS registrləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

