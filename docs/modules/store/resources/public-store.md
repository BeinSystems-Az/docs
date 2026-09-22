---
sidebar_position: 3
title: Public mağaza kataloqu
---

# Public mağaza kataloqu

Public mağaza kataloqu resursu onlayn mağaza modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
Public endpointlər token tələb etmir; rate-limit və endpointə aid validation qaydaları tətbiq edilir.
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Public mağaza kataloqu resursu onlayn mağaza modulunda aid olduğu məlumat və əməliyyatları idarə edir. Dərc etmə məhsulu mağazada görünən edir; bu endpointlər sifariş və ödəniş yaratmır.

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
| `id` | UUID | Qeydin unikal identifikatorudur. |

## Endpointlər

### Public mağaza kataloqu: kateqoriyaları al

**Endpoint** · `GET /api/store/v1/{store}/categories`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `store.__undeclared__`

**Request JSON**

```json
{
  "headers": {},
  "path": {
    "store": "22222222-2222-4222-8222-222222222222"
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
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Public mağaza kataloqu: məhsulları al

**Endpoint** · `GET /api/store/v1/{store}/products`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `store.__undeclared__`

**Request JSON**

```json
{
  "headers": {},
  "path": {
    "store": "22222222-2222-4222-8222-222222222222"
  },
  "query": {
    "q": "qəhvə",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "price_min": 1,
    "price_max": 1,
    "sort": "name",
    "direction": "asc",
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
      "q": "qəhvə",
      "category_id": "33333333-3333-4333-8333-333333333333",
      "price_min": 1,
      "price_max": 1,
      "sort": "name",
      "direction": "asc",
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

**Xətalar** · `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Public mağaza kataloqu: məhsulu al

**Endpoint** · `GET /api/store/v1/{store}/products/{product}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `store.__undeclared__`

**Request JSON**

```json
{
  "headers": {},
  "path": {
    "store": "22222222-2222-4222-8222-222222222222",
    "product": "22222222-2222-4222-8222-222222222222"
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
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Public mağaza kataloqu: parametrləri al

**Endpoint** · `GET /api/store/v1/{store}/settings`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `store.__undeclared__`

**Request JSON**

```json
{
  "headers": {},
  "path": {
    "store": "22222222-2222-4222-8222-222222222222"
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
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

