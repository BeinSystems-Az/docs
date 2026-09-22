---
sidebar_position: 3
title: Əsas vəsait hesabatları
---

# Əsas vəsait hesabatları

Əsas vəsait hesabatları resursu hesabatlar modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `fixed_assets`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Əsas vəsait hesabatları resursu hesabatlar modulunda aid olduğu məlumat və əməliyyatları idarə edir. Hesabat endpointləri mənbə əməliyyat məlumatını oxuyur; biznes sənədini və ya jurnal nəticəsini dəyişmir.

**İlkin şərtlər.** İstifadəçinin hesabat icazəsi və hesabatın tələb etdiyi tarix, filial və digər filter konteksti olmalıdır.

**İş axını.** Əvvəl kataloqdan report key və filter kontraktını alın, sonra həmin key ilə hesabatı icra edin.

**State-lər və biznes təsiri.** Yoxdur; yalnız hesablanmış oxu nəticəsi qaytarılır.

**Əlaqəli resurslar.** Mühasibatlıq, satış, satınalma, stok, POS və istehsal.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.


| State | Mənası | Sistem təsiri |
| --- | --- | --- |
| `draft` | Qaralama | Redaktə edilə bilər; post edilmiş əməliyyat nəticəsi yoxdur. |
| `active` | Aktiv | Resurs istifadəyə açıqdır və yeni əməliyyatlarda seçilə bilər. |
| `sold` | Satılıb | Əsas vəsait satış əməliyyatı ilə uçotdan çıxarılıb. |
| `scrapped` | Silinib | Əsas vəsait scrap əməliyyatı ilə istismardan çıxarılıb. |
| `planned` | planned | Keçid backend domain qaydaları ilə idarə edilir; təsir uyğun endpoint blokunda göstərilir. |
| `posted` | Post edilib | Əməliyyat yekunlaşıb; moduldan asılı olaraq stok, baş kitab, vergi və ya borc nəticəsi yaranır. |
| `cancelled` | Ləğv edilib | Əməliyyat dayandırılıb; əvvəl yaranmış nəticələr domain qaydasına görə revers edilir. |

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `fixed_asset_id` | UUID | Qeydi əlaqəli “fixed asset” resursuna bağlayır. |
| `period_date` | datetime/null | Resursun “period date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `amount` | number | Əməliyyatın pul məbləğidir. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |
| `journal_entry_id` | UUID | Qeydi əlaqəli “journal entry” resursuna bağlayır. |
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `asset_code` | string/null | Əlaqəli qeydin response-da göstərilən kodudur. |
| `asset_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `rows` | array | Hesablanmış nəticə sətirləridir. |
| `total` | number | Resursun “total” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `created_by` | string/null | Resursun “created by” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `category_id` | UUID | Qeydi əlaqəli “category” resursuna bağlayır. |
| `product_id` | UUID | Sətirdə istifadə olunan məhsulu müəyyən edir. |
| `stock_id` | UUID | Məhsul hərəkətinin aid olduğu anbarı müəyyən edir. |
| `stock_document_id` | UUID | Qeydi əlaqəli “stock document” resursuna bağlayır. |
| `responsible_user_id` | UUID | Qeydi əlaqəli “responsible user” resursuna bağlayır. |
| `location_id` | UUID | Qeydi əlaqəli “location” resursuna bağlayır. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `barcode` | string/null | Resursun “barcode” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `acquisition_date` | datetime/null | Resursun “acquisition date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `in_service_date` | datetime/null | Resursun “in service date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `cost` | number | Resursun “cost” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `salvage_value` | number | Resursun “salvage value” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `useful_life_months` | string/null | Resursun “useful life months” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `method` | string/null | Resursun “method” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `asset_account_id` | UUID | Qeydi əlaqəli “asset account” resursuna bağlayır. |
| `accumulated_depreciation_account_id` | UUID | Qeydi əlaqəli “accumulated depreciation account” resursuna bağlayır. |
| `depreciation_expense_account_id` | UUID | Qeydi əlaqəli “depreciation expense account” resursuna bağlayır. |
| `accumulated_depreciation` | number | Resursun “accumulated depreciation” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `depreciation_state` | string/null | Resursun “depreciation state” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `disposal_date` | datetime/null | Resursun “disposal date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `notes` | string/null | Resursun “notes” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `depreciations` | string/null | Resursun “depreciations” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `category_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `branch_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `location_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `responsible_user_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `carrying_amount` | number | Resursun “carrying amount” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `totals` | object | Nəticə üzrə serverin hesabladığı yekunlardır. |

## Endpointlər

### Əsas vəsait hesabatları: amortizasiya cədvəlini al

**Endpoint** · `GET /api/v1/fixed-assets/reports/depreciation-schedule`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `fixed_assets.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "state": "planned",
    "category_id": "33333333-3333-4333-8333-333333333333"
  },
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
    "fixed_asset_id": "33333333-3333-4333-8333-333333333333",
    "period_date": "2026-09-22",
    "amount": 1,
    "journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "asset_code": "Nümunə dəyər",
    "asset_name": "Nümunə dəyər",
    "rows": "Nümunə dəyər",
    "total": 100,
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "category_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Əsas vəsait hesabatları: tenant qeydiyyatdan keçir

**Endpoint** · `GET /api/v1/fixed-assets/reports/register`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `fixed_assets.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "as_of_date": "2026-09-22",
    "state": "draft",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "responsible_user_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333"
  },
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
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "created_by": "Nümunə dəyər",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "stock_document_id": "33333333-3333-4333-8333-333333333333",
    "responsible_user_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "barcode": "869000000001",
    "acquisition_date": "2026-09-22",
    "in_service_date": "2026-09-22",
    "cost": 1,
    "salvage_value": 1,
    "useful_life_months": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

