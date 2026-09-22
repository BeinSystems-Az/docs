---
sidebar_position: 7
title: Lot və seriyalar
---

# Lot və seriyalar

Lot və seriyalar resursu anbar və stok modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `stock_lots`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Lot və seriyalar resursu anbar və stok modulunda aid olduğu məlumat və əməliyyatları idarə edir. Master məlumatlar stok miqdarını dəyişmir; yalnız post edilmiş hərəkət sənədləri faktiki qalıq və valuation nəticəsi yaradır.

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
| `product_id` | UUID | Sətirdə istifadə olunan məhsulu müəyyən edir. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `expiration_date` | date/null | Resursun “expiration date” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |

## Endpointlər

### Lot və seriyalar siyahısını al

**Endpoint** · `GET /api/v1/stock-lots`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_lots.read`

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
      "name": "Nümunə qeyd",
      "product_id": "33333333-3333-4333-8333-333333333333",
      "expiration_date": "2026-09-22",
      "active": true
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Lot və seriyalar qeydi yarat

**Endpoint** · `POST /api/v1/stock-lots`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `stock_lots.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "product_id": "33333333-3333-4333-8333-333333333333",
    "name": "Nümunə qeyd",
    "expiration_date": "2026-09-22",
    "active": true
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "expiration_date": "2026-09-22",
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Lot və seriyalar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Lot və seriyalar qeydini oxu

**Endpoint** · `GET /api/v1/stock-lots/{stock_lot}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `stock_lots.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stock_lot": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "expiration_date": "2026-09-22",
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Lot və seriyalar qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/stock-lots/{stock_lot}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `stock_lots.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stock_lot": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "expiration_date": "2026-09-22",
    "active": true
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
    "product_id": "33333333-3333-4333-8333-333333333333",
    "expiration_date": "2026-09-22",
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Lot və seriyalar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

