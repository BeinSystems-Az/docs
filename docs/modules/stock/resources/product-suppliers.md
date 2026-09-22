---
sidebar_position: 8
title: Məhsul təchizatçıları
---

# Məhsul təchizatçıları

Məhsul üçün mümkün təchizatçıları, alış vahidini, qiyməti, minimum sifariş miqdarını və çatdırılma müddətini saxlayır.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `products`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Məhsul üçün mümkün təchizatçıları, alış vahidini, qiyməti, minimum sifariş miqdarını və çatdırılma müddətini saxlayır. Master məlumatlar stok miqdarını dəyişmir; yalnız post edilmiş hərəkət sənədləri faktiki qalıq və valuation nəticəsi yaradır.

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
| `supplier_id` | UUID | Alışın aid olduğu təchizatçını göstərir. |
| `unit_id` | UUID | Qeydi əlaqəli “unit” resursuna bağlayır. |
| `currency_id` | UUID | Sənədin məbləğlərinin hesablandığı valyutanı seçir. |
| `price` | number | Bir vahid üçün tətbiq olunan qiymətdir. |
| `minimum_order_quantity` | number | Resursun “minimum order quantity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `order_multiple` | number | Resursun “order multiple” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `lead_time_days` | number | Resursun “lead time days” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `is_preferred` | boolean | Resursun “is preferred” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |

## Endpointlər

### Məhsul təchizatçıları: təchizatçıları al

**Endpoint** · `GET /api/v1/product-suppliers`

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
    "supplier_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "unit_id": "33333333-3333-4333-8333-333333333333",
    "price": 1,
    "minimum_order_quantity": 1,
    "order_multiple": 1,
    "lead_time_days": 1,
    "is_preferred": true,
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Məhsul təchizatçıları: təchizatçı parametri yarat

**Endpoint** · `POST /api/v1/product-suppliers`

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
    "product_id": "33333333-3333-4333-8333-333333333333",
    "supplier_id": "33333333-3333-4333-8333-333333333333",
    "unit_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "price": 1,
    "minimum_order_quantity": 1,
    "order_multiple": 1,
    "lead_time_days": 1,
    "is_preferred": true,
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
    "supplier_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "unit_id": "33333333-3333-4333-8333-333333333333",
    "price": 1,
    "minimum_order_quantity": 1,
    "order_multiple": 1,
    "lead_time_days": 1,
    "is_preferred": true,
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Məhsul təchizatçıları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Məhsul təchizatçıları: təchizatçı parametrini sil

**Endpoint** · `DELETE /api/v1/product-suppliers/{productSupplier}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `products.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "productSupplier": "22222222-2222-4222-8222-222222222222"
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

**Biznes təsiri** · Məhsul təchizatçıları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Məhsul təchizatçıları: təchizatçı parametrini yenilə

**Endpoint** · `PUT /api/v1/product-suppliers/{productSupplier}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `products.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "productSupplier": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "product_id": "33333333-3333-4333-8333-333333333333",
    "supplier_id": "33333333-3333-4333-8333-333333333333",
    "unit_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "price": 1,
    "minimum_order_quantity": 1,
    "order_multiple": 1,
    "lead_time_days": 1,
    "is_preferred": true,
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
    "supplier_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "product_id": "33333333-3333-4333-8333-333333333333",
    "unit_id": "33333333-3333-4333-8333-333333333333",
    "price": 1,
    "minimum_order_quantity": 1,
    "order_multiple": 1,
    "lead_time_days": 1,
    "is_preferred": true,
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Məhsul təchizatçıları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

