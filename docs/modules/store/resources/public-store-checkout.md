---
sidebar_position: 2
title: Public Store Checkout
---

# Public Store Checkout

Public Store Checkout resursu onlayn mağaza modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
Public endpointlər token tələb etmir; rate-limit və endpointə aid validation qaydaları tətbiq edilir.
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Public Store Checkout resursu onlayn mağaza modulunda aid olduğu məlumat və əməliyyatları idarə edir. Dərc etmə məhsulu mağazada görünən edir; bu endpointlər sifariş və ödəniş yaratmır.

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

### Public Store Checkout qeydi yarat

**Endpoint** · `POST /api/store/v1/{store}/checkout`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `store.create`

**Request JSON**

```json
{
  "headers": {},
  "path": {
    "store": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "checkout_token": "33333333-3333-4333-8333-333333333333",
    "name": "Nümunə qeyd",
    "surname": "Məmmədov",
    "phone": "+994501234567",
    "email": "demo@example.test",
    "delivery_address": "Nümunə dəyər",
    "note": "Sintetik nümunə məlumatı",
    "items": [
      {
        "product_id": "33333333-3333-4333-8333-333333333333",
        "quantity": 1
      }
    ]
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
    "checkout_token": "33333333-3333-4333-8333-333333333333",
    "surname": "Məmmədov",
    "phone": "+994501234567",
    "email": "demo@example.test",
    "delivery_address": "Nümunə dəyər",
    "note": "Sintetik nümunə məlumatı",
    "items": [
      {
        "product_id": "33333333-3333-4333-8333-333333333333",
        "quantity": 1
      }
    ]
  }
}
```

**Xətalar** · `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Public Store Checkout konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

