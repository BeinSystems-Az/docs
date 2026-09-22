---
sidebar_position: 21
title: Alış qaytarışları
---

# Alış qaytarışları

Alış qaytarışları resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `purchase_returns`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Alış qaytarışları resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu modul maliyyə nəticəsini və baş kitabı idarə edir; fiziki stok hərəkətinin mənbəyi satış, alış və stok sənədləridir.

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
| `name` | string/null | İstifadəçiyə görünən addır. |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `project_id` | UUID | Qeydi əlaqəli “project” resursuna bağlayır. |
| `partner_id` | UUID | Əməliyyatın aid olduğu müştəri və ya təchizatçını göstərir. |
| `date` | date/null | Əməliyyatın biznes tarixidir. |
| `invoice_date` | date/null | Resursun “invoice date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `due_date` | date/null | Resursun “due date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `ref` | string/null | Xarici və ya daxili sənəd istinad nömrəsidir. |
| `note` | string/null | Əməliyyatla bağlı daxili qeyddir. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |
| `currency_id` | UUID | Sənədin məbləğlərinin hesablandığı valyutanı seçir. |
| `amount_total` | number | Serverin hesabladığı pul və ya yekun göstəricidir. |
| `amount_untaxed` | number | Serverin hesabladığı pul və ya yekun göstəricidir. |
| `amount_tax` | number | Serverin hesabladığı pul və ya yekun göstəricidir. |
| `global_discount_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `global_discount_value` | number | Resursun “global discount value” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `global_discount_amount` | number | Resursun “global discount amount” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `origin_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `origin_id` | UUID | Qeydi əlaqəli “origin” resursuna bağlayır. |
| `stock_id` | UUID | Məhsul hərəkətinin aid olduğu anbarı müəyyən edir. |
| `items` | array/object | Sənədin məhsul, hesab və ya əməliyyat sətirləridir. |

## Endpointlər

### Alış qaytarışları siyahısını al

**Endpoint** · `GET /api/v1/purchase-returns`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `purchase_returns.read`

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
  "message": "Records listed successfully.",
  "data": [
    {
      "name": "Nümunə qeyd",
      "state": "draft",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "partner_id": "33333333-3333-4333-8333-333333333333",
      "date": "2026-09-22",
      "currency_id": "33333333-3333-4333-8333-333333333333",
      "amount_total": 1,
      "project_id": "33333333-3333-4333-8333-333333333333",
      "invoice_date": "2026-09-22",
      "due_date": "2026-09-22"
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

### Alış qaytarışları qeydi yarat

**Endpoint** · `POST /api/v1/purchase-returns`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `purchase_returns.create`

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
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "project_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "note": "Sintetik nümunə məlumatı",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "origin_type": "purchase_receipt",
    "origin_id": "33333333-3333-4333-8333-333333333333",
    "items": {},
    "global_discount_type": "percent",
    "global_discount_value": 1
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Record created successfully.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "items": {},
    "project_id": "33333333-3333-4333-8333-333333333333",
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "note": "Sintetik nümunə məlumatı",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "global_discount_type": "percent",
    "global_discount_value": 1,
    "global_discount_amount": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Alış qaytarışları state-ni dəyiş

**Endpoint** · `PATCH /api/v1/purchase-returns/{entry}/state`

Resursun lifecycle vəziyyətini backend keçid qaydalarına uyğun dəyişir.

**İcazə** · `purchase_returns.__document_transition__`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "entry": "22222222-2222-4222-8222-222222222222"
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
  "message": "State updated successfully.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "project_id": "33333333-3333-4333-8333-333333333333",
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "note": "Sintetik nümunə məlumatı",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "global_discount_type": "percent",
    "global_discount_value": 1,
    "global_discount_amount": 1,
    "origin_type": "purchase_receipt"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Alış qaytarışları qeydini sil

**Endpoint** · `DELETE /api/v1/purchase-returns/{purchase_return}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `purchase_returns.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "purchase_return": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Record deleted successfully.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Alış qaytarışları qeydini oxu

**Endpoint** · `GET /api/v1/purchase-returns/{purchase_return}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `purchase_returns.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "purchase_return": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Record retrieved successfully.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "project_id": "33333333-3333-4333-8333-333333333333",
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "note": "Sintetik nümunə məlumatı",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "global_discount_type": "percent",
    "global_discount_value": 1,
    "global_discount_amount": 1,
    "origin_type": "purchase_receipt"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Alış qaytarışları qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/purchase-returns/{purchase_return}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `purchase_returns.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "purchase_return": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "project_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "note": "Sintetik nümunə məlumatı",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "origin_type": "purchase_receipt",
    "origin_id": "33333333-3333-4333-8333-333333333333",
    "items": {},
    "global_discount_type": "percent",
    "global_discount_value": 1
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Record updated successfully.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "items": {},
    "project_id": "33333333-3333-4333-8333-333333333333",
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "note": "Sintetik nümunə məlumatı",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "global_discount_type": "percent",
    "global_discount_value": 1,
    "global_discount_amount": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Alış qaytarışları siyahısını al

**Endpoint** · `GET /api/v1/refunds-in`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `purchase_returns.read`

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
  "message": "Records listed successfully.",
  "data": [
    {
      "name": "Nümunə qeyd",
      "state": "draft",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "partner_id": "33333333-3333-4333-8333-333333333333",
      "date": "2026-09-22",
      "currency_id": "33333333-3333-4333-8333-333333333333",
      "amount_total": 1,
      "project_id": "33333333-3333-4333-8333-333333333333",
      "invoice_date": "2026-09-22",
      "due_date": "2026-09-22"
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

### Alış qaytarışları qeydi yarat

**Endpoint** · `POST /api/v1/refunds-in`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `purchase_returns.create`

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
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "project_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "note": "Sintetik nümunə məlumatı",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "origin_type": "purchase_receipt",
    "origin_id": "33333333-3333-4333-8333-333333333333",
    "items": {},
    "global_discount_type": "percent",
    "global_discount_value": 1
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Record created successfully.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "items": {},
    "project_id": "33333333-3333-4333-8333-333333333333",
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "note": "Sintetik nümunə məlumatı",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "global_discount_type": "percent",
    "global_discount_value": 1,
    "global_discount_amount": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Alış qaytarışları state-ni dəyiş

**Endpoint** · `PATCH /api/v1/refunds-in/{entry}/state`

Resursun lifecycle vəziyyətini backend keçid qaydalarına uyğun dəyişir.

**İcazə** · `purchase_returns.__document_transition__`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "entry": "22222222-2222-4222-8222-222222222222"
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
  "message": "State updated successfully.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "project_id": "33333333-3333-4333-8333-333333333333",
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "note": "Sintetik nümunə məlumatı",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "global_discount_type": "percent",
    "global_discount_value": 1,
    "global_discount_amount": 1,
    "origin_type": "purchase_receipt"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Alış qaytarışları qeydini sil

**Endpoint** · `DELETE /api/v1/refunds-in/{refunds_in}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `purchase_returns.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "refunds_in": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Record deleted successfully.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Alış qaytarışları qeydini oxu

**Endpoint** · `GET /api/v1/refunds-in/{refunds_in}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `purchase_returns.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "refunds_in": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Record retrieved successfully.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "project_id": "33333333-3333-4333-8333-333333333333",
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "note": "Sintetik nümunə məlumatı",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "global_discount_type": "percent",
    "global_discount_value": 1,
    "global_discount_amount": 1,
    "origin_type": "purchase_receipt"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Alış qaytarışları qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/refunds-in/{refunds_in}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `purchase_returns.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "refunds_in": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "project_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "note": "Sintetik nümunə məlumatı",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "origin_type": "purchase_receipt",
    "origin_id": "33333333-3333-4333-8333-333333333333",
    "items": {},
    "global_discount_type": "percent",
    "global_discount_value": 1
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Record updated successfully.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "items": {},
    "project_id": "33333333-3333-4333-8333-333333333333",
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "note": "Sintetik nümunə məlumatı",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "global_discount_type": "percent",
    "global_discount_value": 1,
    "global_discount_amount": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

