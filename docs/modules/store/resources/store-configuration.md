---
sidebar_position: 4
title: Mağaza konfiqurasiyası
---

# Mağaza konfiqurasiyası

Mağaza konfiqurasiyası resursu onlayn mağaza modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Mağaza konfiqurasiyası resursu onlayn mağaza modulunda aid olduğu məlumat və əməliyyatları idarə edir. Dərc etmə məhsulu mağazada görünən edir; bu endpointlər sifariş və ödəniş yaratmır.

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

### Mağaza konfiqurasiyası qeydini oxu

**Endpoint** · `GET /api/v1/store/configuration`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `store.manage` global permission

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
  "data": {
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Mağaza konfiqurasiyası qeydini yenilə

**Endpoint** · `PUT /api/v1/store/configuration`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `store.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "slug": "numune-magaza",
    "name": "Nümunə qeyd",
    "description": "Sintetik nümunə məlumatı",
    "logo": "Nümunə dəyər",
    "banner": "Nümunə dəyər",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "out_of_stock_policy": "show_disabled",
    "stock_safety_buffer": 1,
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Store konfiqurasiyası yadda saxlanıldı.",
  "data": {
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "slug": "numune-magaza",
    "description": "Sintetik nümunə məlumatı",
    "logo": "Nümunə dəyər",
    "banner": "Nümunə dəyər",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "out_of_stock_policy": "show_disabled",
    "stock_safety_buffer": 1,
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Mağaza konfiqurasiyası konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

