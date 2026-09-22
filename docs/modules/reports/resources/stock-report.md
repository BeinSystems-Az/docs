---
sidebar_position: 6
title: Stok hesabatları
---

# Stok hesabatları

Stok hesabatları resursu hesabatlar modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `stock_reports`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Stok hesabatları resursu hesabatlar modulunda aid olduğu məlumat və əməliyyatları idarə edir. Hesabat endpointləri mənbə əməliyyat məlumatını oxuyur; biznes sənədini və ya jurnal nəticəsini dəyişmir.

**İlkin şərtlər.** İstifadəçinin hesabat icazəsi və hesabatın tələb etdiyi tarix, filial və digər filter konteksti olmalıdır.

**İş axını.** Əvvəl kataloqdan report key və filter kontraktını alın, sonra həmin key ilə hesabatı icra edin.

**State-lər və biznes təsiri.** Yoxdur; yalnız hesablanmış oxu nəticəsi qaytarılır.

**Əlaqəli resurslar.** Mühasibatlıq, satış, satınalma, stok, POS və istehsal.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `stock_id` | UUID | Məhsul hərəkətinin aid olduğu anbarı müəyyən edir. |
| `product_id` | UUID | Sətirdə istifadə olunan məhsulu müəyyən edir. |
| `category_id` | UUID | Qeydi əlaqəli “category” resursuna bağlayır. |
| `location_id` | UUID | Qeydi əlaqəli “location” resursuna bağlayır. |
| `source_location_id` | UUID | Qeydi əlaqəli “source location” resursuna bağlayır. |
| `destination_location_id` | UUID | Qeydi əlaqəli “destination location” resursuna bağlayır. |
| `lot_id` | UUID | Qeydi əlaqəli “lot” resursuna bağlayır. |
| `partner_id` | UUID | Əməliyyatın aid olduğu müştəri və ya təchizatçını göstərir. |
| `date_from` | date/null | Resursun “date from” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `date_to` | date/null | Resursun “date to” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `as_of` | date/null | Resursun “as of” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `group_by` | enum/string | Resursun “group by” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |
| `document_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `page` | number | Resursun “page” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `per_page` | number | Resursun “per page” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Stok hesabatları: az qalan stoku al

**Endpoint** · `GET /api/v1/stock-reports/low-stock`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_reports.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "state": "draft",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
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
    "state": "draft",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Stok hesabatları: mövcud qalığı al

**Endpoint** · `GET /api/v1/stock-reports/on-hand`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_reports.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "state": "draft",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
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
    "state": "draft",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Stok hesabatları: qablaşdırma üzrə qalığı al

**Endpoint** · `GET /api/v1/stock-reports/on-hand-by-packaging`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_reports.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "state": "draft",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
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
    "state": "draft",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Stok hesabatları: anbar üzrə qalığı al

**Endpoint** · `GET /api/v1/stock-reports/on-hand-by-warehouse`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_reports.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "state": "draft",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
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
    "state": "draft",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Stok hesabatları: stok kartını al

**Endpoint** · `GET /api/v1/stock-reports/stock-card`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_reports.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "state": "draft",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
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
    "state": "draft",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Stok hesabatları: saxlama müddətini al

**Endpoint** · `GET /api/v1/stock-reports/storage-duration`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_reports.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "state": "draft",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
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
    "state": "draft",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Stok hesabatları: dövriyyəni al

**Endpoint** · `GET /api/v1/stock-reports/turnover`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_reports.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "state": "draft",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
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
    "state": "draft",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Stok hesabatları: stok dəyərini al

**Endpoint** · `GET /api/v1/stock-reports/valuation`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_reports.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "state": "draft",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
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
    "state": "draft",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "as_of": "2026-09-22",
    "group_by": "product",
    "document_type": "sale_receipt",
    "page": 1,
    "per_page": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

