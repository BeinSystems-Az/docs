---
sidebar_position: 2
slug: /api/sales/orders
---

# Satış sifarişləri

:::info Kontekst
`Bearer` JWT və ya integration token · `sale_orders` permission-ları · tenant konteksti; oxuda `filter.branch_id`, yazmada body `branch_id` ilə filial seçimi
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Satış sifarişi müştəriyə qarşı kommersiya öhdəliyidir. `sale_order` rezerv və qaralama delivery yarada bilər, lakin faktiki stok çıxışı və jurnal nəticəsi Satış qəbzindən yaranır.

**İlkin şərtlər.** `customer_id`, `stock_id` və ən azı bir `items` sətri məcburidir; hər sətirdə mövcud məhsul, müsbət miqdar və mənfi olmayan qiymət verilir.

**İş axını.** Müştəri, anbar və sətirlərlə qaralama yaradın, lazım gələrsə göndərin və `sale_order` state-inə keçirin. Faktiki satış üçün ondan Satış qəbzi yaradın.

**State-lər və biznes təsiri.** `draft`, `sent`, `sale_order` və `cancelled` keçidləri aşağıdakı həyat dövründə göstərilir. Stok çıxışı və jurnal yalnız Satış qəbzi post ediləndə yaranır.

**Əlaqəli resurslar.** Tərəfdaşlar, stok/anbar, məhsullar, ölçü vahidləri, qablaşdırmalar, vergilər, CRM lead-lər və Satış qəbzləri.

**Əsas məhdudiyyətlər.** `sale_orders` permission-ı, tenant/filial scope-u və əlaqəli identifikatorların validation-u tətbiq edilir. Məbləğlər serverin hesabladığı yekunlara etibar etməlidir.

## Həyat dövrü

- `draft` — redaktə olunan qaralamadır; stok və jurnal təsiri yoxdur.
- `sent` — müştəriyə göndərilib; stok və jurnal təsiri yoxdur.
- `sale_order` — satış öhdəliyi təsdiqlənib; siyasət aktivdirsə rezerv və qaralama delivery sinxronlaşdırılır.
- `cancelled` — sifariş ləğv edilib; açıq rezerv buraxılır və downstream sənəd keçidi bloklana bilər.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Sifarişin dəyişməz texniki identifikatorudur. |
| `name` | string | İstifadəçinin gördüyü sifariş nömrəsi/adıdır. |
| `user_id` | UUID/null | Sifarişi yaradan/məsul istifadəçidir; göndərilməzsə autentifikasiya olunmuş user tətbiq edilir. |
| `branch_id` | UUID/null | Yazma sorğusunda əməliyyat filialını seçir; response-da saxlanmış filialdır. |
| `branch_name` | string/null | Response-da filialın görünən adıdır. |
| `customer_id` | UUID | Satışın aid olduğu müştəri Partner-dir. |
| `customer_name` | string/null | Response-da müştərinin görünən adıdır. |
| `stock_id` | UUID | Məhsulun rezerv/çatdırılma ediləcəyi anbardır. |
| `stock_name` | string/null | Response-da anbarın görünən adıdır. |
| `currency_id` | UUID/null | Qiymət və cəmlərin valyutasıdır. |
| `currency_code` | string/null | Response-da valyutanın kodudur. |
| `currency_symbol` | string/null | Response-da valyutanın simvoludur. |
| `project_id` | UUID/null | Sifarişi layihə ilə əlaqələndirir. |
| `project_name` | string/null | Response-da layihənin görünən adıdır. |
| `crm_lead_id` | UUID/null | Sifarişi mənbə CRM lead ilə əlaqələndirir. |
| `crm_lead_name` | string/null | Response-da CRM lead-in görünən adıdır. |
| `date` | date/null | Sifarişin əməliyyat tarixidir. |
| `expiration_date` | date/null | Sifarişin etibarlılıq son tarixidir. |
| `description` | string/null | Sifarişə aid qeyd və şərtlərdir. |
| `state` | enum | `draft`, `sent`, `sale_order`, `cancelled` lifecycle vəziyyətidir. |
| `items` | array | Məhsul, vahid, qablaşdırma, miqdar, qiymət və vergiləri daşıyır. |
| `items[].id` | UUID/null | Response-da sifariş sətrinin identifikatorudur. |
| `items[].product_id` | UUID | Sətirdə satılan məhsuldur. |
| `items[].price_type_id` | UUID/null | Sətir qiymətinin aid olduğu qiymət tipidir. |
| `items[].unit_id` | UUID/null | Sətirin ölçü vahididir. |
| `items[].packaging_id` | UUID/null | Seçilmiş məhsul qablaşdırmasıdır. |
| `items[].packaging_quantity` | decimal/null | Qablaşdırma ilə daxil edilən miqdardır. |
| `items[].quantity` | decimal | Satış miqdarıdır və sıfırdan böyük olmalıdır. |
| `items[].price` | decimal | Faktiki vahid qiymətidir və mənfi ola bilməz. |
| `items[].base_price` | decimal/null | Endirimdən əvvəlki baza qiymətidir. |
| `items[].discount` | decimal/null | Sətir endirim dəyəridir. |
| `items[].taxes` | array/null | Sətirə tətbiq olunan vergi seçimləridir. |
| `items[].taxes[].id` | UUID | Vergi tərifinin identifikatorudur. |
| `items[].taxes[].reason_code` | string/null | Vergi istisnası/səbəbi üçün koddur. |
| `global_discount_type` | enum | Endirimin `percent` və ya `fixed` olmasını seçir. |
| `global_discount_value` | decimal | Sənəd üzrə endirim məbləğini və ya faizini saxlayır. |
| `global_discount_amount` | decimal | Response-da serverin hesabladığı ümumi endirimdir. |
| `total_quantity` | decimal | Serverin hesabladığı ümumi miqdardır. |
| `total_net` | decimal | Vergisiz yekun məbləğdir. |
| `total_tax` | decimal | Serverin hesabladığı ümumi vergi məbləğidir. |
| `total_gross` | decimal | Vergi və endirimdən sonrakı yekun məbləğdir. |
| `tax_totals` | array | Response-da vergi tərifləri üzrə yekun xülasədir. |
| `version` | integer | Optimistic/document versiya göstəricisidir. |
| `action_availability` | object | Cari state-də icazəli növbəti action-ları göstərir. |
| `created_at` | datetime/null | Yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Son dəyişiklik vaxtıdır. |

## Endpointlər

### Sifarişləri siyahıla

**Endpoint** · `GET /api/v1/sale-orders`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "q": "SO-2026",
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
  "message": "Sale orders listed successfully.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "SO-2026-0001",
      "customer_id": "33333333-3333-4333-8333-333333333333",
      "stock_id": "44444444-4444-4444-8444-444444444444",
      "state": "draft",
      "total_net": "51.00",
      "total_tax": "9.18",
      "total_gross": "60.18"
    }
  ],
  "links": {
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

**Xətalar** · `401` — token etibarsızdır; `403` — oxu permission-ı yoxdur. **Biznes təsiri** · Yoxdur.

### Sifariş yarat

**Endpoint** · `POST /api/v1/sale-orders`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "customer_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "44444444-4444-4444-8444-444444444444",
    "currency_id": "55555555-5555-4555-8555-555555555555",
    "date": "2026-09-22",
    "state": "draft",
    "items": [
      {
        "product_id": "66666666-6666-4666-8666-666666666666",
        "quantity": 2,
        "price": 25.5
      }
    ]
  }
}
```

**Response JSON · `201`**
```json
{
  "status": "success",
  "message": "Satış sifarişi yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "SO-2026-0001",
    "customer_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "44444444-4444-4444-8444-444444444444",
    "state": "draft",
    "items": [
      {
        "product_id": "66666666-6666-4666-8666-666666666666",
        "quantity": "2",
        "price": "25.50",
        "net_amount": "51.00"
      }
    ],
    "total_net": "51.00",
    "total_tax": "0.00",
    "total_gross": "51.00",
    "action_availability": {
      "update": true,
      "delete": true
    }
  }
}
```

**Xətalar** · `403` — yaratma permission-ı yoxdur; `422` — field və ya biznes validation-u keçmir. **Biznes təsiri** · `draft` stok və jurnal yaratmır.

### Sifarişi oxu

**Endpoint** · `GET /api/v1/sale-orders/{sale_order}`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "sale_order": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**
```json
{
  "status": "success",
  "message": "Satış sifarişi uğurla gətirildi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "SO-2026-0001",
    "customer_name": "Demo müştəri",
    "stock_name": "Əsas anbar",
    "currency_code": "AZN",
    "state": "draft",
    "items": [
      {
        "product_name": "Arabica qəhvə",
        "quantity": "2",
        "price": "25.50"
      }
    ],
    "total_gross": "51.00",
    "action_availability": {
      "update": true,
      "delete": true
    }
  }
}
```

**Xətalar** · `403` — oxu permission-ı yoxdur; `404` — sifariş tapılmır və ya scope xaricindədir. **Biznes təsiri** · Yoxdur.

### Sifarişi yenilə

**Endpoint** · `PUT|PATCH /api/v1/sale-orders/{sale_order}`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "sale_order": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "customer_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "44444444-4444-4444-8444-444444444444",
    "description": "Yenilənmiş sifariş",
    "items": [
      {
        "product_id": "66666666-6666-4666-8666-666666666666",
        "quantity": 3,
        "price": 25.5
      }
    ]
  }
}
```

**Response JSON · `200`**
```json
{
  "status": "success",
  "message": "Satış sifarişi yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "state": "draft",
    "description": "Yenilənmiş sifariş",
    "items": [
      {
        "product_id": "66666666-6666-4666-8666-666666666666",
        "quantity": "3",
        "price": "25.50"
      }
    ],
    "total_gross": "76.50",
    "version": 2
  }
}
```

**Xətalar** · `404` — sifariş tapılmır; `409/422` — state və downstream sənəd redaktəni bloklayır. **Biznes təsiri** · `sale_order` state-dədirsə backend draft → update → reapprove edir; rezerv/delivery yenilənə bilər.

### Sifarişi sil

**Endpoint** · `DELETE /api/v1/sale-orders/{sale_order}`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "sale_order": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**
```json
{
  "status": "success",
  "message": "Satış sifarişi silindi.",
  "data": null
}
```

**Xətalar** · `404` — sifariş tapılmır; `409/422` — bağlı sənəd silinməni bloklayır. **Biznes təsiri** · Yalnız silinməyə uyğun sifariş silinir.

### Sifarişin state-ni dəyiş

**Endpoint** · `PATCH /api/v1/sale-orders/{sale_order}/state`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "sale_order": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "state": "sale_order"
  }
}
```

**Response JSON · `200`**
```json
{
  "status": "success",
  "message": "Satış sifarişinin vəziyyəti yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "SO-2026-0001",
    "state": "sale_order",
    "total_gross": "51.00",
    "action_availability": {
      "update": true,
      "delete": false,
      "cancel": true
    }
  }
}
```

**Xətalar** · `404` — sifariş tapılmır; `409/422` — state keçidi uyğun deyil. **Biznes təsiri** · `sale_order` siyasət aktivdirsə rezerv və qaralama delivery yaradır; `draft/cancelled` açıq rezervi buraxır; jurnal yaratmır.
