---
sidebar_position: 3
slug: /api/purchasing/receipts
---

# Alış qəbzləri

:::info Kontekst
`Bearer` JWT və ya integration token · `purchase_receipts` permission-ları · tenant konteksti; oxuda `filter.branch_id`, yazmada body `branch_id` ilə filial seçimi
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Alış qəbzi fiziki mal qəbuludur. `posted` stok, valuation, vergi, jurnal və xərcləri yaradır; `cancelled` nəticələri revers edir.

**İlkin şərtlər.** Mənbə sifariş/faktura seçilmirsə `supplier_id`, `stock_id` və ən azı bir məhsul sətri tələb olunur. Hər məhsul sətri müsbət miqdar daşıyır.

**İş axını.** Qəbzi birbaşa yaradın və ya Alış sifarişi/fakturadan gətirin, qəbul olunan miqdar və xərcləri yoxlayın, sonra post edin. Səhv nəticəni düzəltmək üçün qəbzi ləğv edin.

**State-lər və biznes təsiri.** `draft`, `posted` və `cancelled` keçidləri aşağıdakı həyat dövründə göstərilir. Stok və mühasibat nəticəsi yalnız `posted` state-ində yaranır.

**Əlaqəli resurslar.** Alış sifarişləri, Alış fakturaları, təchizatçılar, anbar/stok, məhsullar, lotlar, vergilər və mühasibat hesabları.

**Əsas məhdudiyyətlər.** `purchase_receipts` permission-ı, tenant/filial scope-u və mənbə sənəd validation-u tətbiq edilir. Update zamanı `origin_type` və `origin_id` göndərilə bilməz.

## Həyat dövrü

- `draft` — redaktə olunan qəbul sənədidir; stok və jurnal təsiri yoxdur.
- `posted` — fiziki qəbul təsdiqlənib; stok, valuation, vergi, jurnal və expense yaranır.
- `cancelled` — qəbul ləğv edilib; stok və jurnal revers olunur.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Qəbulun dəyişməz texniki identifikatorudur. |
| `name` | string | İstifadəçinin gördüyü qəbul nömrəsi/adıdır. |
| `branch_id` | UUID/null | Yazma sorğusunda əməliyyat filialını seçir; response-da saxlanmış filialdır. |
| `branch_name` | string/null | Response-da filialın görünən adıdır. |
| `project_id` | UUID/null | Qəbzi layihə ilə əlaqələndirir. |
| `project_name` | string/null | Response-da layihənin görünən adıdır. |
| `supplier_id` | UUID | Malın alındığı təchizatçı Partner-dir. |
| `supplier_name` | string/null | Response-da təchizatçının görünən adıdır. |
| `stock_id` | UUID | Malın daxil olduğu anbardır. |
| `stock_name` | string/null | Response-da anbarın görünən adıdır. |
| `origin_type` | string/null | Mənbə alış sifarişi/invoice tipidir. |
| `origin_id` | UUID/null | Mənbə sənədin identifikatorudur. |
| `source_document` | string/null | Response-da mənbə sənədin görünən nömrəsidir. |
| `currency_id` | UUID/null | Qəbulun valyutasını göstərir. |
| `currency_code` | string/null | Response-da valyutanın kodudur. |
| `currency_symbol` | string/null | Response-da valyutanın simvoludur. |
| `date` | date/null | Fiziki qəbulun əməliyyat tarixidir. |
| `note` | string/null | Qəbulun qeyd mətnidir. |
| `items` | array | Məhsul, lot, vahid, miqdar və unit cost sətirləridir. |
| `items[].id` | UUID/null | Response-da qəbul sətrinin identifikatorudur. |
| `items[].origin_type` | string/null | Sətrin mənbə order/invoice tipini göstərir. |
| `items[].origin_id` | UUID/null | Sətrin mənbə order/invoice identifikatorunu göstərir. |
| `items[].product_id` | UUID | Qəbul edilən məhsuldur. |
| `items[].lot_id` | UUID/null | Lot/seriya ilə izlənən məhsulun lotudur. |
| `items[].unit_id` | UUID/null | Sətrin ölçü vahididir. |
| `items[].packaging_id` | UUID/null | Seçilmiş məhsul qablaşdırmasıdır. |
| `items[].packaging_quantity` | decimal/null | Seçilmiş qablaşdırma sayıdır. |
| `items[].quantity` | decimal | Qəbul miqdarıdır və sıfırdan böyük olmalıdır. |
| `items[].unit_cost` | decimal/null | Faktiki vahid maya dəyəridir. |
| `items[].base_price` | decimal/null | Endirimdən əvvəlki baza qiymətidir. |
| `items[].discount` | decimal/null | Sətir endirim dəyəridir. |
| `items[].taxes` | array/null | Vergi identifikatoru və optional `reason_code` seçimləridir. |
| `items[].net_amount` | decimal | Response-da hesablanmış vergisiz sətir məbləğidir. |
| `items[].tax_amount` | decimal | Response-da hesablanmış sətir vergisidir. |
| `items[].gross_amount` | decimal | Response-da hesablanmış yekun sətir məbləğidir. |
| `global_discount_type` | enum/null | Sənəd endirimini `percent` və ya `fixed` edir. |
| `global_discount_value` | decimal/null | Endirim faizi və ya sabit məbləğidir. |
| `global_discount_amount` | decimal | Response-da hesablanmış ümumi endirimdir. |
| `landed_cost_target_receipt_id` | UUID/null | Bu qəbzin xərcinin bölüşdürüləcəyi əvvəlki alış qəbzidir. |
| `landed_cost_allocation_method` | enum/null | Landed cost bölgüsünü `equal`, `quantity`, `current_value`, `weight` və ya `volume` edir. |
| `total_quantity` | decimal | Response-da ümumi qəbul miqdarıdır. |
| `total_net` | decimal | Response-da vergisiz yekun məbləğdir. |
| `total_tax` | decimal | Response-da ümumi vergi məbləğidir. |
| `total_gross` | decimal | Response-da vergi və endirimdən sonrakı yekundur. |
| `tax_totals` | array | Vergi nəticələrinin xülasəsidir. |
| `ledger_items` | array | Mühasibat nəticələrinin proyeksiyasıdır. |
| `state` | enum | Qəbulun lifecycle vəziyyətidir. |
| `action_availability` | object | Cari state-də icazəli action-ları göstərir. |
| `created_at` | datetime/null | Yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Son dəyişiklik vaxtıdır. |

## Endpointlər

### Qəbzləri siyahıla

**Endpoint** · `GET /api/v1/purchase-receipts`
**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "state": "draft",
    "supplier_id": "33333333-3333-4333-8333-333333333333",
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
  "message": null,
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "PR-2026-0001",
      "supplier_id": "33333333-3333-4333-8333-333333333333",
      "stock_id": "44444444-4444-4444-8444-444444444444",
      "state": "draft",
      "total_gross": "180.00"
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
**Xətalar** · `401/403` — giriş və permission xətası. **Biznes təsiri** · Yoxdur.

### Qəbz yarat

**Endpoint** · `POST /api/v1/purchase-receipts`
**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "supplier_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "44444444-4444-4444-8444-444444444444",
    "items": [
      {
        "product_id": "66666666-6666-4666-8666-666666666666",
        "quantity": 10,
        "unit_cost": 18
      }
    ]
  }
}
```
**Response JSON · `201`**
```json
{
  "status": "success",
  "message": "Alış sənədi yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "PR-2026-0001",
    "state": "draft",
    "items": [
      {
        "product_id": "66666666-6666-4666-8666-666666666666",
        "quantity": "10",
        "unit_cost": "18.00"
      }
    ],
    "ledger_items": [],
    "total_gross": "180.00"
  }
}
```
**Xətalar** · `403` — create permission yoxdur; `422` — field/origin validation-u keçmir. **Biznes təsiri** · Qaralama stok/jurnal yaratmır.

### Qəbzi oxu

**Endpoint** · `GET /api/v1/purchase-receipts/{purchase_receipt}`
**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "purchase_receipt": "22222222-2222-4222-8222-222222222222"
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
    "name": "PR-2026-0001",
    "supplier_name": "Demo təchizatçı",
    "stock_name": "Əsas anbar",
    "state": "draft",
    "items": [
      {
        "product_name": "Arabica qəhvə",
        "quantity": "10",
        "unit_cost": "18.00"
      }
    ],
    "total_gross": "180.00",
    "action_availability": {
      "post": true
    }
  }
}
```
**Xətalar** · `403` — read permission yoxdur; `404` — qəbz tapılmır. **Biznes təsiri** · Yoxdur.

### Qəbzi yenilə

**Endpoint** · `PUT|PATCH /api/v1/purchase-receipts/{purchase_receipt}`
**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "purchase_receipt": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "supplier_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "44444444-4444-4444-8444-444444444444",
    "items": [
      {
        "product_id": "66666666-6666-4666-8666-666666666666",
        "quantity": 12,
        "unit_cost": 18
      }
    ]
  }
}
```
**Response JSON · `200`**
```json
{
  "status": "success",
  "message": "Alış sənədi yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "state": "draft",
    "total_quantity": "12",
    "total_gross": "216.00"
  }
}
```
**Xətalar** · `404` — tapılmır; `409/422` — state bloklayır. **Biznes təsiri** · Post edilmiş nəticə birbaşa dəyişmir.

### Qəbzi sil

**Endpoint** · `DELETE /api/v1/purchase-receipts/{purchase_receipt}`
**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "purchase_receipt": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```
**Response JSON · `200`**
```json
{
  "status": "success",
  "message": "Alış sənədi silindi.",
  "data": null
}
```
**Xətalar** · `404` — tapılmır; `409/422` — post/əlaqə bloklayır. **Biznes təsiri** · Post edilmiş tarixçə üçün cancel tələb olunur.

### Qəbzin state-ni dəyiş

**Endpoint** · `PATCH /api/v1/purchase-receipts/{purchaseReceipt}/state`
**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "purchaseReceipt": "22222222-2222-4222-8222-222222222222"
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
  "message": "Alış sənədi təsdiqləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "state": "posted",
    "total_gross": "180.00",
    "ledger_items": [
      {
        "debit": "180.00",
        "credit": "0.00"
      },
      {
        "debit": "0.00",
        "credit": "180.00"
      }
    ],
    "action_availability": {
      "cancel": true
    }
  }
}
```
**Xətalar** · `404` — tapılmır; `409/422` — state/stok/jurnal qaydası keçmir. **Biznes təsiri** · `posted` stok/valuation/jurnal yaradır; `cancelled` revers edir.
