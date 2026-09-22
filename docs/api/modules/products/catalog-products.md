---
sidebar_position: 2
slug: /api/catalog/products
---

# Məhsullar

:::info Kontekst
`Bearer` JWT və ya integration token · məhsul CRUD-u üçün `products.*`, filial sazlamaları üçün `branch_product_settings.update/delete` permission-ları · tenant konteksti; oxuda `filter.branch_id`, yazmada body `branch_id` ilə filial seçimi
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Məhsul satış, alış, stok və istehsal sənədlərinin istifadə etdiyi master kartdır. Kartı dəyişmək stok, rezerv və jurnal yaratmır; həmin nəticələr məhsul biznes sənədində istifadə ediləndə yaranır.

**İlkin şərtlər.** `name` məcburidir. `category_id`, `unit_id`, vergi, hesab, təchizatçı, qablaşdırma və replenishment qaydası göndərilirsə, həmin identifikatorlar tenant-da mövcud olmalıdır.

**İş axını.** Məhsul kartını yaradın, lazım olan kataloq və qiymət sazlamalarını bağlayın, sonra onu sənəd sətirlərində seçin. Filiala məxsus qiymət üçün branch setting-dən istifadə edin.

**State-lər və biznes təsiri.** Lifecycle state-i yoxdur; `active` yalnız yeni seçimləri idarə edir. Qiymət və kart dəyişiklikləri post edilmiş sənədləri yenidən hesablamır.

**Əlaqəli resurslar.** Kateqoriyalar, ölçü vahidləri, məhsul şablonları, qablaşdırmalar, təchizatçı sazlamaları, stok və alış/satış sənəd sətirləri.

**Əsas məhdudiyyətlər.** `name` tenant daxilində unikaldır. `products` permission-ı, tenant/filial scope-u və hər əlaqəli field üçün request validation-u tətbiq edilir.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Məhsulun dəyişməz identifikatoru; sənəd sətirlərində `product_id` kimi istifadə olunur. |
| `name` | string | İstifadəçinin gördüyü məhsul adı; tenant daxilində unikaldır. |
| `description` | string/null | Məhsulun uzun izah və qeyd mətnidir. |
| `color` | string/null | UI-da məhsulu fərqləndirmək üçün rəng dəyəridir. |
| `category_id` | UUID/null | Məhsulu kataloq kateqoriyasına bağlayır. |
| `category_name` | string/null | Response-da kateqoriyanın görünən adıdır. |
| `department_id` | UUID/null | Məhsulun məsul şöbəsini göstərir. |
| `department_name` | string/null | Response-da şöbənin görünən adıdır. |
| `unit_id` | UUID/null | Stokun saxlandığı əsas inventar vahididir. |
| `unit_name` | string/null | Response-da inventar vahidinin görünən adıdır. |
| `tax_id` | UUID/null | Sənəd sətrinə default vergi seçimi verir. |
| `tax_name` | string/null | Response-da default verginin görünən adıdır. |
| `expense_category_id` | UUID/null | Məhsulu xərc kateqoriyasına bağlayır. |
| `expense_category_name` | string/null | Response-da xərc kateqoriyasının adıdır. |
| `product_template_id` | UUID/null | Məhsulu variantlarının ortaq şablonuna bağlayır. |
| `price` | decimal/null | Məhsulun standart satış qiymətidir. |
| `buy_price` | decimal/null | Məhsulun standart alış qiymətidir. |
| `min_price` | decimal/null | Endirimin enə bilmədiyi minimum satış qiymətidir. |
| `resolved_price` | decimal/null | Cari filial kontekstində override tətbiq edildikdən sonrakı qiymətdir. |
| `resolved_buy_price` | decimal/null | Cari filial override-ından sonrakı alış qiymətidir. |
| `resolved_min_price` | decimal/null | Cari filial override-ından sonrakı minimum satış qiymətidir. |
| `standard_cost` | decimal/null | Response-da stok qiymətləndirməsinin saxlanmış standart maya dəyəridir; request-də birbaşa dəyişdirilə bilməz. |
| `active` | boolean | Məhsulun yeni əməliyyatlarda seçilə bilməsini idarə edir. |
| `type` | integer/null | Məhsul növünü 1, 2 və ya 3 dəyəri ilə seçir. |
| `is_complimentary` | boolean/null | Məhsulun ödənişsiz təqdim oluna bilməsini göstərir. |
| `is_weight` | boolean/null | Miqdarın çəki əsasında daxil edilməsini göstərir. |
| `plu` | string/null | Tərəzi/POS üçün PLU kodudur. |
| `default_code` | string/null | Daxili SKU və ya məhsul kodudur. |
| `barcode` | string/null | Skan və sürətli məhsul tapmaq üçün xarici koddur. |
| `image` | file/string/null | Update request-də şəkil faylı, response-da saxlanmış şəkil istinadıdır. |
| `weight` | decimal/null | Məhsulun çəki göstəricisidir. |
| `volume` | decimal/null | Məhsulun həcm göstəricisidir. |
| `income_account_id` | UUID/null | Satış gəliri üçün aktiv income hesabıdır. |
| `stock_output_account_id` | UUID/null | Stok çıxışının xərc hesabıdır. |
| `stock_valuation_account_id` | UUID/null | Stok dəyərinin asset hesabıdır. |
| `min_stock` | decimal/null | Aşağı stok/replenishment üçün minimum səviyyədir. |
| `prices` | array | Qiymət tipinə görə əlavə satış qiymətləridir. |
| `prices[].id` | UUID/null | Mövcud məhsul qiyməti sətrinin identifikatorudur. |
| `prices[].price_type_id` | UUID | Qiymətin aid olduğu qiymət tipidir. |
| `prices[].price` | decimal | Həmin qiymət tipi üzrə satış qiymətidir. |
| `packagings` | array | İnventar vahidi ilə alış/satış qablaşdırmaları arasındakı çevirmələrdir. |
| `packagings[].id` | UUID/null | Mövcud qablaşdırma sətrinin identifikatorudur. |
| `packagings[].unit_id` | UUID | Qablaşdırmanın ölçü vahididir. |
| `packagings[].quantity_in_inventory_unit` | decimal | Bir qablaşdırmadakı inventar vahidi sayıdır. |
| `packagings[].purchase_price` | decimal | Qablaşdırma üzrə alış qiymətidir. |
| `packagings[].sale_price` | decimal | Qablaşdırma üzrə satış qiymətidir. |
| `packagings[].barcode` | string/null | Qablaşdırmaya məxsus barkoddur. |
| `packagings[].active` | boolean | Qablaşdırmanın seçimdə aktivliyidir. |
| `suppliers` | array | Məhsulun təchizatçı və alış sazlamalarıdır. |
| `suppliers[].id` | UUID/null | Mövcud supplier sazlamasının identifikatorudur. |
| `suppliers[].supplier_id` | UUID | Məhsulu verən Partner identifikatorudur. |
| `suppliers[].unit_id` | UUID | Təchizatçının istifadə etdiyi alış vahididir. |
| `suppliers[].currency_id` | UUID | Təchizatçı qiymətinin valyutasıdır. |
| `suppliers[].price` | decimal/null | Təchizatçının alış qiymətidir. |
| `suppliers[].minimum_order_quantity` | decimal/null | Minimum sifariş miqdarıdır. |
| `suppliers[].order_multiple` | decimal/null | Sifariş miqdarının addımıdır. |
| `suppliers[].lead_time_days` | integer/null | Təchizat müddətini günlə göstərir. |
| `suppliers[].is_preferred` | boolean | Default təchizatçı seçimini göstərir. |
| `suppliers[].active` | boolean | Təchizatçı sazlamasının aktivliyidir. |
| `reorder_rules` | array | Aşağı stokda replenishment hesablaması üçün qaydalardır. |
| `reorder_rules[].id` | UUID/null | Mövcud replenishment qaydasının identifikatorudur. |
| `reorder_rules[].stock_id` | UUID | Qaydanın aid olduğu anbardır. |
| `reorder_rules[].product_supplier_id` | UUID/null | Replenishment üçün seçilmiş supplier sazlamasıdır. |
| `reorder_rules[].minimum_quantity` | decimal/null | Replenishment-i başladan minimum səviyyədir. |
| `reorder_rules[].target_quantity` | decimal | Replenishment-dən sonra hədəf miqdardır. |
| `reorder_rules[].active` | boolean | Qaydanın aktivliyidir. |
| `variant_ids` | array | Eyni şablona bağlı variantların update məlumatıdır. |
| `variant_ids[].id` | UUID | Yenilənəcək variant identifikatorudur. |
| `variant_ids[].barcode` | string/null | Variant barkodudur. |
| `variant_ids[].default_code` | string/null | Variant SKU-sudur. |
| `variant_ids[].sale_price` | decimal/null | Variant satış qiymətidir. |
| `variant_ids[].cost_price` | decimal/null | Variant alış/maya qiymətidir. |
| `branch_pricing` | object | Cari filial üçün həll edilmiş qiymət və override xülasəsidir. |
| `branch_pricing.branch_id` | UUID/null | Qiymətin həll edildiyi filialdır. |
| `branch_pricing.is_available` | boolean | Məhsulun filialda satışa açıq olub-olmadığını göstərir. |
| `branch_pricing.sale_price` | decimal | Həll edilmiş satış qiymətidir. |
| `branch_pricing.min_price` | decimal/null | Həll edilmiş minimum qiymətdir. |
| `branch_pricing.purchase_price` | decimal | Həll edilmiş alış qiymətidir. |
| `branch_pricing.overrides` | object | Hər qiymətin filial override-ından gəlib-gəlmədiyini göstərir. |
| `quantity` | decimal/null | Siyahıda stok mövcudluğu hesablanıbsa fiziki qalıq alias-ıdır. |
| `stock_on_hand` | decimal/null | Siyahıda hesablanan fiziki stok qalığıdır. |
| `stock_reserved` | decimal/null | Siyahıda hesablanan rezerv miqdarıdır. |
| `stock_available` | decimal/null | Siyahıda hesablanan sərbəst qalıqdır. |
| `customFields` | object | Tenant-a məxsus dinamik sahələri qəbul edir; response-da onların açarları root səviyyəsində qaytarılır. |
| `created_at` | datetime/null | Yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Son dəyişiklik vaxtıdır. |

## Endpointlər

### Məhsulları siyahıla

**Endpoint** · `GET /api/v1/products`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "query": "Arabica",
    "page": 1,
    "per_page": 25
  },
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Products listed successfully.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "Arabica qəhvə 1 kq",
      "category_id": "33333333-3333-4333-8333-333333333333",
      "unit_id": "44444444-4444-4444-8444-444444444444",
      "price": "25.5000",
      "active": true
    }
  ],
  "links": {
    "first": "/api/v1/products?page=1",
    "last": "/api/v1/products?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "per_page": 25,
    "total": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır; `403` — oxu permission-ı yoxdur.

**Biznes təsiri** · Yoxdur.

### Məhsul yarat

**Endpoint** · `POST /api/v1/products`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "name": "Arabica qəhvə 1 kq",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "unit_id": "44444444-4444-4444-8444-444444444444",
    "price": 25.5,
    "buy_price": 18,
    "min_price": 22,
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Məhsul yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Arabica qəhvə 1 kq",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "unit_id": "44444444-4444-4444-8444-444444444444",
    "price": "25.5000",
    "buy_price": "18.0000",
    "min_price": "22.0000",
    "resolved_price": "25.5000",
    "active": true,
    "packagings": []
  }
}
```

**Xətalar** · `403` — yaratma permission-ı yoxdur; `422` — field və ya əlaqə validation-u keçmir.

**Biznes təsiri** · Master-data yazılır; stok, rezerv və jurnal yaranmır.

### Məhsulu oxu

**Endpoint** · `GET /api/v1/products/{product}`

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
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Məhsul yükləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Arabica qəhvə 1 kq",
    "category_id": "33333333-3333-4333-8333-333333333333",
    "unit_id": "44444444-4444-4444-8444-444444444444",
    "price": "25.5000",
    "resolved_price": "24.9000",
    "active": true,
    "branch_pricing": {
      "sale_price": "24.9000"
    },
    "packagings": [],
    "suppliers": [],
    "reorder_rules": []
  }
}
```

**Xətalar** · `403` — oxu permission-ı yoxdur; `404` — məhsul tapılmır və ya scope xaricindədir.

**Biznes təsiri** · Yoxdur.

### Məhsulu yenilə

**Endpoint** · `PUT|PATCH /api/v1/products/{product}`

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
    "name": "Arabica qəhvə 1 kq",
    "price": 26,
    "buy_price": 18,
    "min_price": 22,
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Məhsul yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Arabica qəhvə 1 kq",
    "price": "26.0000",
    "buy_price": "18.0000",
    "min_price": "22.0000",
    "resolved_price": "26.0000",
    "active": true
  }
}
```

**Xətalar** · `404` — məhsul tapılmır; `422` — validation və ya əlaqə qaydası keçmir.

**Biznes təsiri** · Gələcək sənədlərin istifadə etdiyi kart dəyişir; post edilmiş sənədlər yenidən hesablanmır.

### Məhsulu sil

**Endpoint** · `DELETE /api/v1/products/{product}`

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
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Product deleted successfully.",
  "data": null
}
```

**Xətalar** · `404` — məhsul tapılmır; `409/422` — əlaqəli biznes qaydası silməni bloklayır.

**Biznes təsiri** · Məhsul kartı silinir; post edilmiş sənədlər və jurnal tarixçəsi dəyişmir.

### Filial sazlamasını yaz

**Endpoint** · `PUT /api/v1/branches/{branch}/products/{product}/settings`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "branch": "11111111-1111-4111-8111-111111111111",
    "product": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "is_available": true,
    "sale_price": 24.9,
    "min_price": 22,
    "purchase_price": 18
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "branch_id": "11111111-1111-4111-8111-111111111111",
    "is_available": true,
    "sale_price": "24.9000",
    "min_price": "22.0000",
    "purchase_price": "18.0000",
    "overrides": {
      "sale_price": true,
      "min_price": true,
      "purchase_price": true
    }
  }
}
```

**Xətalar** · `404` — filial və ya məhsul tapılmır; `422` — qiymət validation-u keçmir.

**Biznes təsiri** · Yalnız filial override-ı dəyişir; əsas kart və tarixi sənədlər dəyişmir.

### Filial sazlamasını sil

**Endpoint** · `DELETE /api/v1/branches/{branch}/products/{product}/settings`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "branch": "11111111-1111-4111-8111-111111111111",
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
    "branch_id": "11111111-1111-4111-8111-111111111111",
    "is_available": true,
    "sale_price": "25.5000",
    "min_price": "22.0000",
    "purchase_price": "18.0000",
    "overrides": {
      "sale_price": false,
      "min_price": false,
      "purchase_price": false
    }
  }
}
```

**Xətalar** · `404` — filial, məhsul və ya override tapılmır; `403` — update permission-ı yoxdur.

**Biznes təsiri** · Filial yenidən standart məhsul qiymət və sazlamalarını istifadə edir.
