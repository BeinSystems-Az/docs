---
sidebar_position: 9
title: Stok sifariş qaydaları
---

# Stok sifariş qaydaları

Anbar və məhsul üzrə minimum və hədəf qalıq hədlərini saxlayaraq replenishment təkliflərinin necə hesablanacağını müəyyən edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `products`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Anbar və məhsul üzrə minimum və hədəf qalıq hədlərini saxlayaraq replenishment təkliflərinin necə hesablanacağını müəyyən edir. Master məlumatlar stok miqdarını dəyişmir; yalnız post edilmiş hərəkət sənədləri faktiki qalıq və valuation nəticəsi yaradır.

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
| `product_id` | UUID | Sətirdə istifadə olunan məhsulu müəyyən edir. |
| `product_supplier_id` | UUID | Qeydi əlaqəli “product supplier” resursuna bağlayır. |
| `minimum_quantity` | number | Resursun “minimum quantity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `target_quantity` | number | Resursun “target quantity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |

## Endpointlər

### Stok sifariş qaydaları: qaydaları al

**Endpoint** · `GET /api/v1/stock-reorder-rules`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `products.read`

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
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "product_supplier_id": "33333333-3333-4333-8333-333333333333",
    "minimum_quantity": 1,
    "target_quantity": 1,
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Stok sifariş qaydaları: qayda yarat

**Endpoint** · `POST /api/v1/stock-reorder-rules`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `products.update`

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
    "product_id": "33333333-3333-4333-8333-333333333333",
    "product_supplier_id": "33333333-3333-4333-8333-333333333333",
    "minimum_quantity": 1,
    "target_quantity": 1,
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
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "product_supplier_id": "33333333-3333-4333-8333-333333333333",
    "minimum_quantity": 1,
    "target_quantity": 1,
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Stok sifariş qaydaları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Stok sifariş qaydaları: qaydanı sil

**Endpoint** · `DELETE /api/v1/stock-reorder-rules/{stockReorderRule}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `products.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stockReorderRule": "22222222-2222-4222-8222-222222222222"
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
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Stok sifariş qaydaları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Stok sifariş qaydaları: qaydanı yenilə

**Endpoint** · `PUT /api/v1/stock-reorder-rules/{stockReorderRule}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `products.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stockReorderRule": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "product_supplier_id": "33333333-3333-4333-8333-333333333333",
    "minimum_quantity": 1,
    "target_quantity": 1,
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
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "product_supplier_id": "33333333-3333-4333-8333-333333333333",
    "minimum_quantity": 1,
    "target_quantity": 1,
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Stok sifariş qaydaları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

