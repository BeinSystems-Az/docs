---
sidebar_position: 5
title: Mağazada məhsul dərc edilməsi
---

# Mağazada məhsul dərc edilməsi

Mağazada məhsul dərc edilməsi resursu onlayn mağaza modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Mağazada məhsul dərc edilməsi resursu onlayn mağaza modulunda aid olduğu məlumat və əməliyyatları idarə edir. Dərc etmə məhsulu mağazada görünən edir; bu endpointlər sifariş və ödəniş yaratmır.

**İlkin şərtlər.** Store konfiqurasiyası və dərc ediləcək kataloq məhsulları mövcud olmalıdır.

**İş axını.** Mağazanı konfiqurasiya edin, məhsulları dərc edin, public endpointlərlə kataloqu təqdim edin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Görünürlük və storefront məlumatı dəyişir; stok və jurnal təsiri yoxdur.

**Əlaqəli resurslar.** Məhsullar, kateqoriyalar və filial qiymətləri.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `storefront_id` | UUID | Qeydi əlaqəli “storefront” resursuna bağlayır. |
| `product_id` | UUID | Sətirdə istifadə olunan məhsulu müəyyən edir. |
| `published_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |

## Endpointlər

### Mağazada məhsul dərc edilməsi siyahısını al

**Endpoint** · `GET /api/v1/store/products`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `store.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "q": "qəhvə",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "published": true,
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
  "data": [
    {
      "storefront_id": "33333333-3333-4333-8333-333333333333",
      "product_id": "33333333-3333-4333-8333-333333333333",
      "published_at": "2026-09-22T10:30:00+04:00",
      "q": "qəhvə",
      "category_id": "33333333-3333-4333-8333-333333333333",
      "published": true,
      "page": 1,
      "per_page": 1
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

### Mağazada məhsul dərc edilməsi qeydini yenilə

**Endpoint** · `PATCH /api/v1/store/products/{product}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `store.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "product": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "is_published": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "storefront_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "published_at": "2026-09-22T10:30:00+04:00",
    "is_published": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Mağazada məhsul dərc edilməsi konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

