---
sidebar_position: 19
title: Ödənişlər
---

# Ödənişlər

Daxil olan və çıxan ödənişi, wallet hərəkətini və sənədlərə allocation-u idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `payments`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Daxil olan və çıxan ödənişi, wallet hərəkətini və sənədlərə allocation-u idarə edir. Bu modul maliyyə nəticəsini və baş kitabı idarə edir; fiziki stok hərəkətinin mənbəyi satış, alış və stok sənədləridir.

**İlkin şərtlər.** Tenant, uyğun filial, valyuta, hesab planı və sənədin tələb etdiyi tərəfdaş və ya maliyyə hesabı əvvəlcədən mövcud olmalıdır.

**İş axını.** Əvvəl master məlumatları qurun, sənədi draft yaradın, sətirləri yoxlayın, sonra uyğun state action ilə post edin və hesabatlardan nəticəni izləyin.

**State-lər və biznes təsiri.** Master məlumat dəyişiklikləri jurnal yaratmır. Maliyyə sənədinin `posted` vəziyyəti baş kitab və borc nəticəsi yarada, `cancelled` isə həmin nəticəni revers edə bilər.

**Əlaqəli resurslar.** Satış, satınalma, tərəfdaşlar, stok, layihələr və hesabatlar.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.


| State | Mənası | Sistem təsiri |
| --- | --- | --- |
| `draft` | Qaralama | Redaktə edilə bilər; post edilmiş əməliyyat nəticəsi yoxdur. |
| `posted` | Post edilib | Əməliyyat yekunlaşıb; moduldan asılı olaraq stok, baş kitab, vergi və ya borc nəticəsi yaranır. |
| `cancelled` | Ləğv edilib | Əməliyyat dayandırılıb; əvvəl yaranmış nəticələr domain qaydasına görə revers edilir. |
| `reversed` | Revers edilib | Əvvəlki post edilmiş nəticə əks jurnal və ya hərəkətlə geri çevrilib. |

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `partner_id` | UUID | Əməliyyatın aid olduğu müştəri və ya təchizatçını göstərir. |
| `account_id` | UUID | Qeydi əlaqəli “account” resursuna bağlayır. |
| `wallet_id` | UUID | Qeydi əlaqəli “wallet” resursuna bağlayır. |
| `currency_id` | UUID | Sənədin məbləğlərinin hesablandığı valyutanı seçir. |
| `date` | datetime/null | Əməliyyatın biznes tarixidir. |
| `amount` | number | Əməliyyatın pul məbləğidir. |
| `payment_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `operation_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `counterpart_account_id` | UUID | Qeydi əlaqəli “counterpart account” resursuna bağlayır. |
| `tax_id` | UUID | Qeydi əlaqəli “tax” resursuna bağlayır. |
| `loan_term` | enum/string | Resursun “loan term” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `memo` | string/null | Resursun “memo” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `pos_register_id` | UUID | Qeydi əlaqəli “pos register” resursuna bağlayır. |
| `pos_operation_id` | UUID | Qeydi əlaqəli “pos operation” resursuna bağlayır. |
| `pos_shift_id` | UUID | Qeydi əlaqəli “pos shift” resursuna bağlayır. |
| `pos_payment_type_id` | UUID | Qeydi əlaqəli “pos payment type” resursuna bağlayır. |
| `allocations` | array/object | Resursun “allocations” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `target_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `target_id` | UUID | Qeydi əlaqəli “target” resursuna bağlayır. |
| `allocations[].target_type` | enum/string | Massiv elementində “target type” dəyərini saxlayır. |
| `allocations[].target_id` | UUID | Qeydi əlaqəli “target” resursuna bağlayır. |
| `allocations[].amount` | number | Əməliyyatın pul məbləğidir. |
| `origin_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `origin_id` | UUID | Qeydi əlaqəli “origin” resursuna bağlayır. |

## Endpointlər

### Ödənişlər siyahısını al

**Endpoint** · `GET /api/v1/payments`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `payments.read`

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
  "message": "Tərəfdaş ödənişləri uğurla siyahılandı.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "Nümunə qeyd",
      "state": "draft",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "partner_id": "33333333-3333-4333-8333-333333333333",
      "date": "2026-09-22",
      "currency_id": "33333333-3333-4333-8333-333333333333",
      "account_id": "33333333-3333-4333-8333-333333333333",
      "wallet_id": "33333333-3333-4333-8333-333333333333",
      "amount": 1
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

### Ödənişlər qeydi yarat

**Endpoint** · `POST /api/v1/payments`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `payments.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "amount": 1,
    "payment_type": "inbound",
    "operation_type": "settlement",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "tax_id": "33333333-3333-4333-8333-333333333333",
    "loan_term": "short_term",
    "name": "Nümunə qeyd",
    "memo": "Sintetik ödəniş qeydi",
    "allocations": [
      {
        "target_type": "expense",
        "target_id": "33333333-3333-4333-8333-333333333333",
        "amount": 1
      }
    ],
    "origin_type": "purchase_receipt",
    "origin_id": "33333333-3333-4333-8333-333333333333"
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
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "amount": 1,
    "payment_type": "inbound",
    "operation_type": "settlement",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "tax_id": "33333333-3333-4333-8333-333333333333",
    "loan_term": "short_term",
    "memo": "Sintetik ödəniş qeydi",
    "pos_register_id": "33333333-3333-4333-8333-333333333333",
    "pos_operation_id": "33333333-3333-4333-8333-333333333333",
    "pos_shift_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Ödənişlər qeydini sil

**Endpoint** · `DELETE /api/v1/payments/{payment}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `payments.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "payment": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Tərəfdaş ödənişi uğurla silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Ödənişlər qeydini oxu

**Endpoint** · `GET /api/v1/payments/{payment}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `payments.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "payment": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Tərəfdaş ödənişi uğurla gətirildi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "amount": 1,
    "payment_type": "inbound",
    "operation_type": "settlement",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "tax_id": "33333333-3333-4333-8333-333333333333",
    "loan_term": "short_term",
    "memo": "Sintetik ödəniş qeydi",
    "pos_register_id": "33333333-3333-4333-8333-333333333333",
    "pos_operation_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Ödənişlər qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/payments/{payment}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `payments.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "payment": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "amount": 1,
    "payment_type": "inbound",
    "operation_type": "settlement",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "tax_id": "33333333-3333-4333-8333-333333333333",
    "loan_term": "short_term",
    "name": "Nümunə qeyd",
    "memo": "Sintetik ödəniş qeydi",
    "allocations": [
      {
        "target_type": "expense",
        "target_id": "33333333-3333-4333-8333-333333333333",
        "amount": 1
      }
    ],
    "origin_type": "purchase_receipt",
    "origin_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Tərəfdaş ödənişi uğurla yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "amount": 1,
    "payment_type": "inbound",
    "operation_type": "settlement",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "tax_id": "33333333-3333-4333-8333-333333333333",
    "loan_term": "short_term",
    "memo": "Sintetik ödəniş qeydi",
    "pos_register_id": "33333333-3333-4333-8333-333333333333",
    "pos_operation_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Ödənişlər state-ni dəyiş

**Endpoint** · `PATCH /api/v1/payments/{payment}/state`

Resursun lifecycle vəziyyətini backend keçid qaydalarına uyğun dəyişir.

**İcazə** · `payments.__document_transition__`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "payment": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "state": "posted",
    "date": "2026-09-22"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Ödənişin vəziyyəti uğurla yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "amount": 1,
    "payment_type": "inbound",
    "operation_type": "settlement",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "tax_id": "33333333-3333-4333-8333-333333333333",
    "loan_term": "short_term",
    "memo": "Sintetik ödəniş qeydi",
    "pos_register_id": "33333333-3333-4333-8333-333333333333",
    "pos_operation_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Ödənişlər: daxil olan ödəniş yarat

**Endpoint** · `POST /api/v1/payments/inbound`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `payments.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "amount": 1,
    "payment_type": "inbound",
    "operation_type": "settlement",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "tax_id": "33333333-3333-4333-8333-333333333333",
    "loan_term": "short_term",
    "name": "Nümunə qeyd",
    "memo": "Sintetik ödəniş qeydi",
    "allocations": [
      {
        "target_type": "expense",
        "target_id": "33333333-3333-4333-8333-333333333333",
        "amount": 1
      }
    ],
    "origin_type": "purchase_receipt",
    "origin_id": "33333333-3333-4333-8333-333333333333"
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
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "amount": 1,
    "payment_type": "inbound",
    "operation_type": "settlement",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "tax_id": "33333333-3333-4333-8333-333333333333",
    "loan_term": "short_term",
    "memo": "Sintetik ödəniş qeydi",
    "pos_register_id": "33333333-3333-4333-8333-333333333333",
    "pos_operation_id": "33333333-3333-4333-8333-333333333333",
    "pos_shift_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Ödənişlər: çıxan ödəniş yarat

**Endpoint** · `POST /api/v1/payments/outbound`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `payments.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "amount": 1,
    "payment_type": "inbound",
    "operation_type": "settlement",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "tax_id": "33333333-3333-4333-8333-333333333333",
    "loan_term": "short_term",
    "name": "Nümunə qeyd",
    "memo": "Sintetik ödəniş qeydi",
    "allocations": [
      {
        "target_type": "expense",
        "target_id": "33333333-3333-4333-8333-333333333333",
        "amount": 1
      }
    ],
    "origin_type": "purchase_receipt",
    "origin_id": "33333333-3333-4333-8333-333333333333"
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
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "amount": 1,
    "payment_type": "inbound",
    "operation_type": "settlement",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "tax_id": "33333333-3333-4333-8333-333333333333",
    "loan_term": "short_term",
    "memo": "Sintetik ödəniş qeydi",
    "pos_register_id": "33333333-3333-4333-8333-333333333333",
    "pos_operation_id": "33333333-3333-4333-8333-333333333333",
    "pos_shift_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Ödənişlər: hesablaşma seçimlərini al

**Endpoint** · `GET /api/v1/payments/settlement-options`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `payments.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "payment_type": "inbound",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "payment_id": "33333333-3333-4333-8333-333333333333"
  },
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Açıq borclar uğurla gətirildi.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "amount": 1,
    "payment_type": "inbound",
    "operation_type": "settlement",
    "counterpart_account_id": "33333333-3333-4333-8333-333333333333",
    "tax_id": "33333333-3333-4333-8333-333333333333",
    "loan_term": "short_term",
    "memo": "Sintetik ödəniş qeydi",
    "pos_register_id": "33333333-3333-4333-8333-333333333333",
    "pos_operation_id": "33333333-3333-4333-8333-333333333333",
    "pos_shift_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

