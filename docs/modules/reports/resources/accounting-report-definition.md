---
sidebar_position: 2
title: Mühasibat hesabat tərifləri
---

# Mühasibat hesabat tərifləri

Mühasibat hesabat tərifləri resursu hesabatlar modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `accounting_report_definitions`, `accounting_report_item_rules`, `accounting_report_items`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Mühasibat hesabat tərifləri resursu hesabatlar modulunda aid olduğu məlumat və əməliyyatları idarə edir. Hesabat endpointləri mənbə əməliyyat məlumatını oxuyur; biznes sənədini və ya jurnal nəticəsini dəyişmir.

**İlkin şərtlər.** İstifadəçinin hesabat icazəsi və hesabatın tələb etdiyi tarix, filial və digər filter konteksti olmalıdır.

**İş axını.** Əvvəl kataloqdan report key və filter kontraktını alın, sonra həmin key ilə hesabatı icra edin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Yoxdur; yalnız hesablanmış oxu nəticəsi qaytarılır.

**Əlaqəli resurslar.** Mühasibatlıq, satış, satınalma, stok, POS və istehsal.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `key` | string/null | Resursun “key” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `package_code` | string/null | Əlaqəli qeydin response-da göstərilən kodudur. |
| `package_version` | number | Resursun “package version” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `accounting_standard` | string/null | Resursun “accounting standard” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `effective_from` | datetime/null | Resursun “effective from” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `effective_to` | datetime/null | Resursun “effective to” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `title` | string/null | Resursun “title” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `category` | string/null | Resursun “category” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `report_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `is_statutory` | boolean | Resursun “is statutory” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `is_immutable` | boolean | Resursun “is immutable” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `is_active` | boolean | Resursun “is active” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `sort_order` | number | Resursun “sort order” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `parent_key` | string/null | Resursun “parent key” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `label` | string/null | Resursun “label” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `item_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `sequence` | number | Siyahıda emal və görünmə ardıcıllığını müəyyən edir. |
| `normal_balance` | enum/string | Resursun “normal balance” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `formula` | array/object | Resursun “formula” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `is_drilldown_enabled` | boolean | Resursun “is drilldown enabled” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `match_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `internal_group` | string/null | Resursun “internal group” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `user_type_id` | UUID | Qeydi əlaqəli “user type” resursuna bağlayır. |
| `account_code_from` | string/null | Resursun “account code from” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `account_code_to` | string/null | Resursun “account code to” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `account_code_prefix` | string/null | Resursun “account code prefix” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `cash_flow_activity` | string/null | Resursun “cash flow activity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `tax_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `move_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |

## Endpointlər

### Mühasibat hesabat tərifləri siyahısını al

**Endpoint** · `GET /api/v1/accounting-report-definitions`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `accounting_report_definitions.read`

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
  "message": "Hesabat parametrləri uğurla siyahılandı.",
  "data": [
    {
      "key": "sample_key",
      "package_code": "Nümunə dəyər",
      "package_version": 1,
      "accounting_standard": "Nümunə dəyər",
      "effective_from": "Nümunə dəyər",
      "effective_to": "Nümunə dəyər",
      "title": "Nümunə başlıq",
      "category": "general",
      "report_type": "standard",
      "is_statutory": true
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Mühasibat hesabat tərifləri qeydi yarat

**Endpoint** · `POST /api/v1/accounting-report-definitions`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `accounting_report_definitions.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "key": "sample_key",
    "title": "Nümunə başlıq",
    "category": "general",
    "report_type": "standard",
    "is_active": true,
    "sort_order": 1
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Hesabat parametri uğurla yaradıldı.",
  "data": {
    "key": "sample_key",
    "package_code": "Nümunə dəyər",
    "package_version": 1,
    "accounting_standard": "Nümunə dəyər",
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "title": "Nümunə başlıq",
    "category": "general",
    "report_type": "standard",
    "is_statutory": true,
    "is_immutable": true,
    "is_active": true,
    "sort_order": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Mühasibat hesabat tərifləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Mühasibat hesabat tərifləri qeydini sil

**Endpoint** · `DELETE /api/v1/accounting-report-definitions/{id}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `accounting_report_definitions.delete`

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
  "message": "Hesabat parametri uğurla silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Mühasibat hesabat tərifləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Mühasibat hesabat tərifləri qeydini yenilə

**Endpoint** · `PUT /api/v1/accounting-report-definitions/{id}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `accounting_report_definitions.update`

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
  "body": {
    "key": "sample_key",
    "title": "Nümunə başlıq",
    "category": "general",
    "report_type": "standard",
    "is_active": true,
    "sort_order": 1
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Hesabat parametri uğurla yeniləndi.",
  "data": {
    "key": "sample_key",
    "package_code": "Nümunə dəyər",
    "package_version": 1,
    "accounting_standard": "Nümunə dəyər",
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "title": "Nümunə başlıq",
    "category": "general",
    "report_type": "standard",
    "is_statutory": true,
    "is_immutable": true,
    "is_active": true,
    "sort_order": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Mühasibat hesabat tərifləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Mühasibat hesabat tərifləri: sətir yarat

**Endpoint** · `POST /api/v1/accounting-report-definitions/{id}/items`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `accounting_report_definitions.create`

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
  "body": {
    "key": "sample_key",
    "parent_key": "Nümunə dəyər",
    "label": "Nümunə etiket",
    "item_type": "section",
    "sequence": 1,
    "normal_balance": "debit",
    "formula": {},
    "is_drilldown_enabled": true
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Hesabat sətri uğurla yaradıldı.",
  "data": {
    "key": "sample_key",
    "package_code": "Nümunə dəyər",
    "package_version": 1,
    "accounting_standard": "Nümunə dəyər",
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "title": "Nümunə başlıq",
    "category": "general",
    "report_type": "standard",
    "is_statutory": true,
    "is_immutable": true,
    "is_active": true,
    "sort_order": 1,
    "parent_key": "Nümunə dəyər",
    "label": "Nümunə etiket",
    "item_type": "section",
    "sequence": 1,
    "normal_balance": "debit"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Mühasibat hesabat tərifləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Mühasibat hesabat tərifləri qeydini oxu

**Endpoint** · `GET /api/v1/accounting-report-definitions/{key}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `accounting_report_definitions.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "key": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Hesabat parametri uğurla gətirildi.",
  "data": {
    "key": "sample_key",
    "package_code": "Nümunə dəyər",
    "package_version": 1,
    "accounting_standard": "Nümunə dəyər",
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "title": "Nümunə başlıq",
    "category": "general",
    "report_type": "standard",
    "is_statutory": true,
    "is_immutable": true,
    "is_active": true,
    "sort_order": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Mühasibat hesabat tərifləri: qaydanı sil

**Endpoint** · `DELETE /api/v1/accounting-report-item-rules/{id}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `accounting_report_item_rules.delete`

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
  "message": "Hesabat qaydası uğurla silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Mühasibat hesabat tərifləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Mühasibat hesabat tərifləri: qaydanı yenilə

**Endpoint** · `PUT /api/v1/accounting-report-item-rules/{id}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `accounting_report_item_rules.update`

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
  "body": {
    "match_type": "standard",
    "internal_group": "Nümunə dəyər",
    "user_type_id": "33333333-3333-4333-8333-333333333333",
    "account_code_from": "Nümunə dəyər",
    "account_code_to": "Nümunə dəyər",
    "account_code_prefix": "Nümunə dəyər",
    "cash_flow_activity": "Nümunə dəyər",
    "tax_type": "standard",
    "move_type": "standard"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Hesabat qaydası uğurla yeniləndi.",
  "data": {
    "key": "sample_key",
    "package_code": "Nümunə dəyər",
    "package_version": 1,
    "accounting_standard": "Nümunə dəyər",
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "title": "Nümunə başlıq",
    "category": "general",
    "report_type": "standard",
    "is_statutory": true,
    "is_immutable": true,
    "is_active": true,
    "sort_order": 1,
    "match_type": "standard",
    "internal_group": "Nümunə dəyər",
    "user_type_id": "33333333-3333-4333-8333-333333333333",
    "account_code_from": "Nümunə dəyər",
    "account_code_to": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Mühasibat hesabat tərifləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Mühasibat hesabat tərifləri: sətri sil

**Endpoint** · `DELETE /api/v1/accounting-report-items/{id}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `accounting_report_items.delete`

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
  "message": "Hesabat sətri uğurla silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Mühasibat hesabat tərifləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Mühasibat hesabat tərifləri: sətri yenilə

**Endpoint** · `PUT /api/v1/accounting-report-items/{id}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `accounting_report_items.update`

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
  "body": {
    "key": "sample_key",
    "parent_key": "Nümunə dəyər",
    "label": "Nümunə etiket",
    "item_type": "section",
    "sequence": 1,
    "normal_balance": "debit",
    "formula": {},
    "is_drilldown_enabled": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Hesabat sətri uğurla yeniləndi.",
  "data": {
    "key": "sample_key",
    "package_code": "Nümunə dəyər",
    "package_version": 1,
    "accounting_standard": "Nümunə dəyər",
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "title": "Nümunə başlıq",
    "category": "general",
    "report_type": "standard",
    "is_statutory": true,
    "is_immutable": true,
    "is_active": true,
    "sort_order": 1,
    "parent_key": "Nümunə dəyər",
    "label": "Nümunə etiket",
    "item_type": "section",
    "sequence": 1,
    "normal_balance": "debit"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Mühasibat hesabat tərifləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Mühasibat hesabat tərifləri: qayda yarat

**Endpoint** · `POST /api/v1/accounting-report-items/{id}/rules`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `accounting_report_items.create`

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
  "body": {
    "match_type": "standard",
    "internal_group": "Nümunə dəyər",
    "user_type_id": "33333333-3333-4333-8333-333333333333",
    "account_code_from": "Nümunə dəyər",
    "account_code_to": "Nümunə dəyər",
    "account_code_prefix": "Nümunə dəyər",
    "cash_flow_activity": "Nümunə dəyər",
    "tax_type": "standard",
    "move_type": "standard"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Hesabat qaydası uğurla yaradıldı.",
  "data": {
    "key": "sample_key",
    "package_code": "Nümunə dəyər",
    "package_version": 1,
    "accounting_standard": "Nümunə dəyər",
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "title": "Nümunə başlıq",
    "category": "general",
    "report_type": "standard",
    "is_statutory": true,
    "is_immutable": true,
    "is_active": true,
    "sort_order": 1,
    "match_type": "standard",
    "internal_group": "Nümunə dəyər",
    "user_type_id": "33333333-3333-4333-8333-333333333333",
    "account_code_from": "Nümunə dəyər",
    "account_code_to": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Mühasibat hesabat tərifləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

