---
sidebar_position: 3
slug: /api/sales/receipts
---

# Satış qəbzləri

:::info Kontekst
`Bearer` JWT və ya integration token · `sale_receipts` permission-ları · tenant konteksti; oxuda `filter.branch_id`, yazmada body `branch_id` ilə filial seçimi
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Satış qəbzi faktiki satış sənədidir. `posted` stok çıxışı, vergi, jurnal və stok maya dəyəri düzəlişlərini yaradır; `cancelled` nəticələri revers edir.

**İlkin şərtlər.** Yeni qəbz üçün `customer_id` tələb olunur. Mənbə sifariş/faktura seçilmirsə `stock_id`, ən azı bir məhsul sətri, müsbət miqdar və mənfi olmayan qiymət də tələb olunur.

**İş axını.** Sətirləri birbaşa yazın və ya mənbə sənəddən gətirin, qaralamanı yoxlayın, sonra post edin. Səhv post edilmiş sənədi yenidən redaktə etmək əvəzinə ləğv edin.

**State-lər və biznes təsiri.** `draft`, `posted` və `cancelled` keçidləri aşağıdakı həyat dövründə göstərilir. Maliyyə və stok nəticəsi yalnız `posted` state-ində yaranır.

**Əlaqəli resurslar.** Satış sifarişləri, tərəfdaşlar, anbar/stok, məhsullar, lotlar, vergilər, qiymət tipləri və mühasibat hesabları.

**Əsas məhdudiyyətlər.** `sale_receipts` permission-ı, tenant/filial scope-u və mənbə sənədinə bağlı validation qaydaları tətbiq edilir. `origin_type` yalnız dəstəklənən mənbələri qəbul edir.

## Həyat dövrü

- `draft` — redaktə olunan qəbzdir; stok və jurnal təsiri yoxdur.
- `posted` — satış təsdiqlənib; stok çıxışı, vergi, jurnal və stok maya dəyəri nəticəsi yaranır.
- `cancelled` — satış ləğv edilib; stok və jurnal revers olunur.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Qəbzin dəyişməz texniki identifikatorudur. |
| `name` | string | İstifadəçinin gördüyü qəbz nömrəsi/adıdır. |
| `branch_id` | UUID/null | Yazma sorğusunda əməliyyat filialını seçir; response-da saxlanmış filialdır. |
| `branch_name` | string/null | Response-da filialın görünən adıdır. |
| `project_id` | UUID/null | Qəbzi layihə ilə əlaqələndirir. |
| `project_name` | string/null | Response-da layihənin görünən adıdır. |
| `customer_id` | UUID | Satışın müştərisini göstərir. |
| `customer_name` | string/null | Response-da müştərinin görünən adıdır. |
| `stock_id` | UUID | Məhsulun çıxıldığı anbardır. |
| `stock_name` | string/null | Response-da anbarın görünən adıdır. |
| `origin_type` | string/null | Qəbzin yarandığı mənbə sənədin tipidir. |
| `origin_id` | UUID/null | Qəbzin yarandığı mənbə sənədin identifikatorudur. |
| `source_document` | string/null | Response-da mənbə sənədin görünən nömrəsidir. |
| `currency_id` | UUID/null | Hesablaşma valyutasını göstərir. |
| `currency_code` | string/null | Response-da valyutanın kodudur. |
| `currency_symbol` | string/null | Response-da valyutanın simvoludur. |
| `date` | date/null | Faktiki satışın əməliyyat tarixidir. |
| `note` | string/null | Qəbzin qeyd mətnidir. |
| `items` | array | Məhsul, lot, vahid, miqdar, qiymət və vergi sətirləridir. |
| `items[].id` | UUID/null | Response-da qəbz sətrinin identifikatorudur. |
| `items[].origin_type` | string/null | Sətrin yarandığı mənbə tipini göstərir. |
| `items[].origin_id` | UUID/null | Sətrin yarandığı mənbə identifikatorunu göstərir. |
| `items[].product_id` | UUID | Satılan məhsuldur. |
| `items[].price_type_id` | UUID/null | Tətbiq olunan qiymət tipidir. |
| `items[].lot_id` | UUID/null | Lot/seriya ilə izlənən məhsulun lotudur. |
| `items[].unit_id` | UUID/null | Sətirin ölçü vahididir. |
| `items[].packaging_id` | UUID/null | Seçilmiş məhsul qablaşdırmasıdır. |
| `items[].packaging_quantity` | decimal/null | Seçilmiş qablaşdırma sayıdır. |
| `items[].quantity` | decimal | Satış miqdarıdır və sıfırdan böyük olmalıdır. |
| `items[].price` | decimal | Faktiki vahid qiymətidir. |
| `items[].base_price` | decimal/null | Endirimdən əvvəlki baza qiymətidir. |
| `items[].discount` | decimal/null | Sətir endirim dəyəridir. |
| `items[].taxes` | array/null | Vergi seçimləri və optional `reason_code` dəyərləridir. |
| `items[].account_id` | UUID/null | Sətir üçün override edilən mühasibat hesabıdır. |
| `items[].net_amount` | decimal | Response-da hesablanmış vergisiz sətir məbləğidir. |
| `items[].tax_amount` | decimal | Response-da hesablanmış sətir vergisidir. |
| `items[].gross_amount` | decimal | Response-da hesablanmış yekun sətir məbləğidir. |
| `global_discount_type` | enum/null | Sənəd endirimini `percent` və ya `fixed` edir. |
| `global_discount_value` | decimal/null | Endirim faizi və ya sabit məbləğidir. |
| `global_discount_amount` | decimal | Response-da hesablanmış ümumi endirimdir. |
| `total_quantity` | decimal | Response-da ümumi məhsul miqdarıdır. |
| `amount_untaxed` | decimal | Vergidən əvvəlki yekun məbləğdir. |
| `amount_tax` | decimal | Serverin hesabladığı vergi yekunudur. |
| `amount_total` | decimal | Vergi və endirimdən sonrakı yekun məbləğdir. |
| `tax_totals` | array | Vergi xülasəsidir. |
| `ledger_items` | array | Mühasibat proyeksiyasıdır. |
| `state` | enum | Qəbzin lifecycle vəziyyətidir. |
| `action_availability` | object | Cari state-də icazəli action-ları göstərir. |

## Endpointlər

### Qəbzləri siyahıla

**Endpoint** · `GET /api/v1/sale-receipts`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
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
  "message": "Satış sənədləri uğurla siyahılandı.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "SR-2026-0001",
      "customer_id": "33333333-3333-4333-8333-333333333333",
      "stock_id": "44444444-4444-4444-8444-444444444444",
      "state": "draft",
      "amount_total": "51.00"
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

**Xətalar** · `401/403` — giriş və ya permission xətası. **Biznes təsiri** · Yoxdur.

### Qəbz yarat

**Endpoint** · `POST /api/v1/sale-receipts`

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
  "message": "Satış sənədi yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "SR-2026-0001",
    "state": "draft",
    "items": [
      {
        "product_id": "66666666-6666-4666-8666-666666666666",
        "quantity": "2",
        "price": "25.50"
      }
    ],
    "tax_totals": [],
    "ledger_items": [],
    "amount_total": "51.00"
  }
}
```

**Xətalar** · `403` — create permission yoxdur; `422` — field/origin validation-u keçmir. **Biznes təsiri** · Qaralama stok və jurnal yaratmır.

### Qəbzi oxu

**Endpoint** · `GET /api/v1/sale-receipts/{sale_receipt}`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "sale_receipt": "22222222-2222-4222-8222-222222222222"
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
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "SR-2026-0001",
    "customer_name": "Demo müştəri",
    "stock_name": "Əsas anbar",
    "state": "draft",
    "items": [
      {
        "product_name": "Arabica qəhvə",
        "quantity": "2",
        "price": "25.50"
      }
    ],
    "amount_total": "51.00",
    "action_availability": {
      "post": true,
      "update": true
    }
  }
}
```

**Xətalar** · `403` — read permission yoxdur; `404` — qəbz tapılmır. **Biznes təsiri** · Yoxdur.

### Qəbzi yenilə

**Endpoint** · `PUT|PATCH /api/v1/sale-receipts/{sale_receipt}`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "sale_receipt": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "customer_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "44444444-4444-4444-8444-444444444444",
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
  "message": "Satış sənədi yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "state": "draft",
    "items": [
      {
        "product_id": "66666666-6666-4666-8666-666666666666",
        "quantity": "3",
        "price": "25.50"
      }
    ],
    "amount_total": "76.50"
  }
}
```

**Xətalar** · `404` — qəbz tapılmır; `409/422` — state redaktəni bloklayır. **Biznes təsiri** · Post edilmiş nəticə birbaşa yenidən yazılmır.

### Qəbzi sil

**Endpoint** · `DELETE /api/v1/sale-receipts/{sale_receipt}`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "sale_receipt": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**
```json
{
  "status": "success",
  "message": "Satış sənədi silindi.",
  "data": null
}
```

**Xətalar** · `404` — qəbz tapılmır; `409/422` — post/əlaqə silinməni bloklayır. **Biznes təsiri** · Post edilmiş tarixçə üçün cancel tələb olunur.

### Qəbzin state-ni dəyiş

**Endpoint** · `PATCH /api/v1/sale-receipts/{sale_receipt}/state`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "sale_receipt": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "state": "posted"
  }
}
```

**Response JSON · `200`**
```json
{
  "status": "success",
  "message": "Satış sənədi təsdiqləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "state": "posted",
    "amount_total": "51.00",
    "ledger_items": [
      {
        "debit": "51.00",
        "credit": "0.00"
      },
      {
        "debit": "0.00",
        "credit": "51.00"
      }
    ],
    "action_availability": {
      "cancel": true,
      "update": false
    }
  }
}
```

**Xətalar** · `404` — qəbz tapılmır; `409/422` — state, stok və ya jurnal qaydası keçmir. **Biznes təsiri** · `posted` stok çıxışı/jurnal/xərc yaradır; `cancelled` revers edir.
