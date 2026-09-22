---
sidebar_position: 18
title: Jurnal sətirləri
---

# Jurnal sətirləri

Jurnal sətirləri resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `accounting_entry_items`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Jurnal sətirləri resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu modul maliyyə nəticəsini və baş kitabı idarə edir; fiziki stok hərəkətinin mənbəyi satış, alış və stok sənədləridir.

**İlkin şərtlər.** Tenant, uyğun filial, valyuta, hesab planı və sənədin tələb etdiyi tərəfdaş və ya maliyyə hesabı əvvəlcədən mövcud olmalıdır.

**İş axını.** Əvvəl master məlumatları qurun, sənədi draft yaradın, sətirləri yoxlayın, sonra uyğun state action ilə post edin və hesabatlardan nəticəni izləyin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Master məlumat dəyişiklikləri jurnal yaratmır. Maliyyə sənədinin `posted` vəziyyəti baş kitab və borc nəticəsi yarada, `cancelled` isə həmin nəticəni revers edə bilər.

**Əlaqəli resurslar.** Satış, satınalma, tərəfdaşlar, stok, layihələr və hesabatlar.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `entry_id` | UUID | Qeydi əlaqəli “entry” resursuna bağlayır. |
| `account_id` | UUID | Qeydi əlaqəli “account” resursuna bağlayır. |
| `partner_id` | UUID | Əməliyyatın aid olduğu müştəri və ya təchizatçını göstərir. |
| `commercial_partner_id` | UUID | Qeydi əlaqəli “commercial partner” resursuna bağlayır. |
| `product_id` | UUID | Sətirdə istifadə olunan məhsulu müəyyən edir. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `quantity` | number | Əməliyyat olunan məhsul miqdarıdır. |
| `price` | number | Bir vahid üçün tətbiq olunan qiymətdir. |
| `discount` | number | Resursun “discount” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `debit` | number | Hesab sətirinin debet məbləğidir. |
| `credit` | number | Hesab sətirinin kredit məbləğidir. |
| `currency_id` | UUID | Sənədin məbləğlərinin hesablandığı valyutanı seçir. |
| `amount_currency` | number | Serverin hesabladığı pul və ya yekun göstəricidir. |
| `due_date` | datetime/null | Resursun “due date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `amount_residual` | number | Serverin hesabladığı pul və ya yekun göstəricidir. |
| `matching_status` | string/null | Resursun “matching status” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `is_reconciled` | boolean | Resursun “is reconciled” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `tax_item_id` | UUID | Qeydi əlaqəli “tax item” resursuna bağlayır. |
| `tax_ids` | array/object | Resursun “tax ids” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `tax_grid` | string/null | Resursun “tax grid” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `display_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `posting_key` | string/null | Resursun “posting key” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `balance` | number | Resursun “balance” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Jurnal sətirləri siyahısını al

**Endpoint** · `GET /api/v1/accounting-entry-items`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `accounting_entry_items.read`

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
  "message": "Qeydlər uğurla siyahılandı.",
  "data": [
    {
      "name": "Nümunə qeyd",
      "partner_id": "33333333-3333-4333-8333-333333333333",
      "currency_id": "33333333-3333-4333-8333-333333333333",
      "entry_id": "33333333-3333-4333-8333-333333333333",
      "account_id": "33333333-3333-4333-8333-333333333333",
      "commercial_partner_id": "33333333-3333-4333-8333-333333333333",
      "product_id": "33333333-3333-4333-8333-333333333333",
      "quantity": 1,
      "price": 1,
      "discount": 1
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

### Jurnal sətirləri qeydini oxu

**Endpoint** · `GET /api/v1/accounting-entry-items/{accounting_entry_item}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `accounting_entry_items.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "accounting_entry_item": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "entry_id": "33333333-3333-4333-8333-333333333333",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "commercial_partner_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "quantity": 1,
    "price": 1,
    "discount": 1,
    "debit": 1,
    "credit": 1,
    "amount_currency": 1,
    "due_date": "2026-09-22",
    "amount_residual": 1,
    "matching_status": "Nümunə dəyər",
    "is_reconciled": true,
    "tax_item_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

