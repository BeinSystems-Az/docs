---
sidebar_position: 17
title: Jurnal yazılışları
---

# Jurnal yazılışları

Baş kitabın debit və kredit sətirlərindən ibarət jurnal yazılışını idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `accounting_entries`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Baş kitabın debit və kredit sətirlərindən ibarət jurnal yazılışını idarə edir. Bu modul maliyyə nəticəsini və baş kitabı idarə edir; fiziki stok hərəkətinin mənbəyi satış, alış və stok sənədləridir.

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
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `partner_id` | UUID | Əməliyyatın aid olduğu müştəri və ya təchizatçını göstərir. |
| `date` | date/null | Əməliyyatın biznes tarixidir. |
| `invoice_date` | datetime/null | Resursun “invoice date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `due_date` | datetime/null | Resursun “due date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `ref` | string/null | Xarici və ya daxili sənəd istinad nömrəsidir. |
| `move_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |
| `currency_id` | UUID | Sənədin məbləğlərinin hesablandığı valyutanı seçir. |
| `amount_total` | number | Serverin hesabladığı pul və ya yekun göstəricidir. |
| `amount_untaxed` | number | Serverin hesabladığı pul və ya yekun göstəricidir. |
| `amount_tax` | number | Serverin hesabladığı pul və ya yekun göstəricidir. |
| `reversed_entry_id` | UUID | Qeydi əlaqəli “reversed entry” resursuna bağlayır. |
| `reversal_entry_id` | UUID | Qeydi əlaqəli “reversal entry” resursuna bağlayır. |
| `source_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `source_id` | UUID | Qeydi əlaqəli “source” resursuna bağlayır. |
| `origin_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `origin_id` | UUID | Qeydi əlaqəli “origin” resursuna bağlayır. |

## Endpointlər

### Jurnal yazılışları siyahısını al

**Endpoint** · `GET /api/v1/accounting-entries`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `accounting_entries.read`

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
  "message": "Əməliyyat jurnalı uğurla hazırlandı.",
  "data": {
    "report": {
      "key": "journal-entries",
      "title": "Əməliyyat jurnalı",
      "category": "accounting",
      "type": "journal"
    },
    "columns": [
      {
        "key": "date",
        "label": "Tarix"
      },
      {
        "key": "name",
        "label": "Sənəd"
      },
      {
        "key": "debit",
        "label": "Debet"
      },
      {
        "key": "credit",
        "label": "Kredit"
      }
    ],
    "rows": [
      {
        "id": "22222222-2222-4222-8222-222222222222",
        "date": "2026-09-22",
        "name": "JE-0001",
        "debit": 125,
        "credit": 125
      }
    ],
    "totals": {
      "debit": 125,
      "credit": 125
    },
    "filters": {},
    "warnings": [],
    "context_notices": [],
    "currency": {
      "code": "AZN",
      "symbol": "₼"
    },
    "generated_at": "2026-09-22T10:30:00+04:00"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Jurnal yazılışları qeydi yarat

**Endpoint** · `POST /api/v1/accounting-entries`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `accounting_entries.create`

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
    "date": "2026-09-22",
    "ref": "REF-0001",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "items": [
      {
        "account_id": "33333333-3333-4333-8333-333333333333",
        "partner_id": "33333333-3333-4333-8333-333333333333",
        "name": "Nümunə qeyd",
        "debit": 1,
        "credit": 1
      }
    ]
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Əməliyyat yazılışı yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "items": [
      {
        "account_id": "33333333-3333-4333-8333-333333333333",
        "partner_id": "33333333-3333-4333-8333-333333333333",
        "name": "Nümunə qeyd",
        "debit": 1,
        "credit": 1
      }
    ],
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "move_type": "standard",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "reversed_entry_id": "33333333-3333-4333-8333-333333333333",
    "reversal_entry_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Jurnal yazılışları qeydini sil

**Endpoint** · `DELETE /api/v1/accounting-entries/{accounting_entry}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `accounting_entries.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "accounting_entry": "22222222-2222-4222-8222-222222222222"
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

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Jurnal yazılışları qeydini oxu

**Endpoint** · `GET /api/v1/accounting-entries/{accounting_entry}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `accounting_entries.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "accounting_entry": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "move_type": "standard",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "reversed_entry_id": "33333333-3333-4333-8333-333333333333",
    "reversal_entry_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Jurnal yazılışları qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/accounting-entries/{accounting_entry}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `accounting_entries.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "accounting_entry": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "date": "2026-09-22",
    "ref": "REF-0001",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "items": [
      {
        "account_id": "33333333-3333-4333-8333-333333333333",
        "partner_id": "33333333-3333-4333-8333-333333333333",
        "name": "Nümunə qeyd",
        "debit": 1,
        "credit": 1
      }
    ]
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Əməliyyat yazılışı yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "items": [
      {
        "account_id": "33333333-3333-4333-8333-333333333333",
        "partner_id": "33333333-3333-4333-8333-333333333333",
        "name": "Nümunə qeyd",
        "debit": 1,
        "credit": 1
      }
    ],
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "move_type": "standard",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "reversed_entry_id": "33333333-3333-4333-8333-333333333333",
    "reversal_entry_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Jurnal yazılışları state-ni dəyiş

**Endpoint** · `PATCH /api/v1/accounting-entries/{entry}/state`

Resursun lifecycle vəziyyətini backend keçid qaydalarına uyğun dəyişir.

**İcazə** · `accounting_entries.__document_transition__`

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
    "state": "posted"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Status yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "move_type": "standard",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "reversed_entry_id": "33333333-3333-4333-8333-333333333333",
    "reversal_entry_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Jurnal yazılışları: manual yazılışları siyahıla

**Endpoint** · `GET /api/v1/manual-accounting-entries`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `accounting_entries.read`

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
  "message": "Əməliyyat yazılışları siyahılandı.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "Nümunə qeyd",
      "state": "draft",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "partner_id": "33333333-3333-4333-8333-333333333333",
      "date": "2026-09-22",
      "currency_id": "33333333-3333-4333-8333-333333333333",
      "amount_total": 1,
      "invoice_date": "2026-09-22",
      "due_date": "2026-09-22",
      "ref": "REF-0001",
      "move_type": "standard",
      "amount_untaxed": 1,
      "amount_tax": 1,
      "reversed_entry_id": "33333333-3333-4333-8333-333333333333",
      "reversal_entry_id": "33333333-3333-4333-8333-333333333333",
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

### Jurnal yazılışları qeydi yarat

**Endpoint** · `POST /api/v1/manual-accounting-entries`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `accounting_entries.create`

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
    "date": "2026-09-22",
    "ref": "REF-0001",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "items": [
      {
        "account_id": "33333333-3333-4333-8333-333333333333",
        "partner_id": "33333333-3333-4333-8333-333333333333",
        "name": "Nümunə qeyd",
        "debit": 1,
        "credit": 1
      }
    ]
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Əməliyyat yazılışı yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "items": [
      {
        "account_id": "33333333-3333-4333-8333-333333333333",
        "partner_id": "33333333-3333-4333-8333-333333333333",
        "name": "Nümunə qeyd",
        "debit": 1,
        "credit": 1
      }
    ],
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "move_type": "standard",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "reversed_entry_id": "33333333-3333-4333-8333-333333333333",
    "reversal_entry_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Jurnal yazılışları state-ni dəyiş

**Endpoint** · `PATCH /api/v1/manual-accounting-entries/{entry}/state`

Resursun lifecycle vəziyyətini backend keçid qaydalarına uyğun dəyişir.

**İcazə** · `accounting_entries.__document_transition__`

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
    "state": "posted"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Status yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "move_type": "standard",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "reversed_entry_id": "33333333-3333-4333-8333-333333333333",
    "reversal_entry_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Jurnal yazılışları qeydini sil

**Endpoint** · `DELETE /api/v1/manual-accounting-entries/{manual_accounting_entry}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `accounting_entries.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "manual_accounting_entry": "22222222-2222-4222-8222-222222222222"
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

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Jurnal yazılışları qeydini oxu

**Endpoint** · `GET /api/v1/manual-accounting-entries/{manual_accounting_entry}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `accounting_entries.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "manual_accounting_entry": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "move_type": "standard",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "reversed_entry_id": "33333333-3333-4333-8333-333333333333",
    "reversal_entry_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Jurnal yazılışları qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/manual-accounting-entries/{manual_accounting_entry}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `accounting_entries.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "manual_accounting_entry": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "date": "2026-09-22",
    "ref": "REF-0001",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "items": [
      {
        "account_id": "33333333-3333-4333-8333-333333333333",
        "partner_id": "33333333-3333-4333-8333-333333333333",
        "name": "Nümunə qeyd",
        "debit": 1,
        "credit": 1
      }
    ]
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Əməliyyat yazılışı yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "amount_total": 1,
    "items": [
      {
        "account_id": "33333333-3333-4333-8333-333333333333",
        "partner_id": "33333333-3333-4333-8333-333333333333",
        "name": "Nümunə qeyd",
        "debit": 1,
        "credit": 1
      }
    ],
    "invoice_date": "2026-09-22",
    "due_date": "2026-09-22",
    "ref": "REF-0001",
    "move_type": "standard",
    "amount_untaxed": 1,
    "amount_tax": 1,
    "reversed_entry_id": "33333333-3333-4333-8333-333333333333",
    "reversal_entry_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

