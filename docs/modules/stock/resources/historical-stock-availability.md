---
sidebar_position: 2
title: Tarixi stok mövcudluğu
---

# Tarixi stok mövcudluğu

Tarixi stok mövcudluğu resursu anbar və stok modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `stock_availability`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Tarixi stok mövcudluğu resursu anbar və stok modulunda aid olduğu məlumat və əməliyyatları idarə edir. Master məlumatlar stok miqdarını dəyişmir; yalnız post edilmiş hərəkət sənədləri faktiki qalıq və valuation nəticəsi yaradır.

**İlkin şərtlər.** Filial, anbar/lokasiya, məhsul və tələb olunan valuation hesabları mövcud olmalıdır.

**İş axını.** Anbar strukturunu qurun, sənədi draft yaradın, sətirləri yoxlayın, sonra post edin və hesabatlardan nəticəni izləyin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Post etmə stok hərəkəti və lazım olduqda jurnal yaradır; cancel/reversal nəticəni geri çevirir.

**Əlaqəli resurslar.** Kataloq, satış, satınalma, istehsal və mühasibatlıq.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `stock_id` | UUID | Məhsul hərəkətinin aid olduğu anbarı müəyyən edir. |
| `at` | date/null | Resursun “at” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `product_ids` | array/object | Resursun “product ids” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `product_ids[]` | UUID | Massiv elementində “product ids” dəyərini saxlayır. |
| `source_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `source_id` | UUID | Qeydi əlaqəli “source” resursuna bağlayır. |
| `document_resource` | enum/string | Resursun “document resource” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `document_action` | enum/string | Resursun “document action” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Tarixi stok mövcudluğu: əməliyyatı icra et

**Endpoint** · `POST /api/v1/stock-availability/as-of`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `stock_availability.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "at": "2026-09-22",
    "product_ids": [
      "33333333-3333-4333-8333-333333333333"
    ],
    "source_type": "stock_document",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "document_resource": "stock_documents",
    "document_action": "read"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "at": "2026-09-22",
    "product_ids": [
      "33333333-3333-4333-8333-333333333333"
    ],
    "source_type": "stock_document",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "document_resource": "stock_documents",
    "document_action": "read"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Tarixi stok mövcudluğu konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

