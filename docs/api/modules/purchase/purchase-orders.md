---
sidebar_position: 2
slug: /api/purchasing/orders
---

# Alış sifarişləri

:::info Kontekst
`Bearer` JWT və ya integration token · `purchase_orders` permission-ları · tenant konteksti; oxuda `filter.branch_id`, yazmada body `branch_id` ilə filial seçimi
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Alış sifarişi təchizatçıya qarşı kommersiya öhdəliyidir. `confirmed` öhdəliyi təsdiqləyir, amma stok və jurnal nəticəsi yaratmır.

**İlkin şərtlər.** `supplier_id` və `stock_id` məcburidir. Sətir göndərilirsə məhsul və ya mövcud sətir identifikatoru, miqdar və qiymət request validation-undan keçməlidir.

**İş axını.** Təchizatçı, qəbul anbarı və sətirlərlə sifarişi yaradın, şərtləri yoxlayın, sonra `confirmed` edin. Fiziki mal gəldikdə Alış qəbzi yaradın.

**State-lər və biznes təsiri.** `draft`, `confirmed` və `cancelled` keçidləri aşağıdakı həyat dövründə göstərilir. Sifarişin özü stok və jurnal yaratmır.

**Əlaqəli resurslar.** Tərəfdaşlar, stok/anbar, məhsullar, qablaşdırmalar, vergilər, Alış qəbzləri və Alış fakturaları.

**Əsas məhdudiyyətlər.** `purchase_orders` permission-ı, tenant/filial scope-u və əlaqəli identifikatorların validation-u tətbiq edilir. Endirim tipi yalnız `percent` və ya `fixed` ola bilər.

## Həyat dövrü

- `draft` — redaktə olunan sifarişdir; stok və jurnal təsiri yoxdur.
- `confirmed` — tədarük təsdiqlənib; vergi snapshot-ı alınır, stok və jurnal yaranmır.
- `cancelled` — öhdəlik bağlanıb; aktiv törəmə sənəd keçidi bloklana bilər.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Sifarişin dəyişməz texniki identifikatorudur. |
| `name` | string | İstifadəçinin gördüyü sifariş nömrəsi/adıdır. |
| `user_id` | UUID/null | Sifarişi yaradan istifadəçidir; göndərilməzsə autentifikasiya olunmuş user tətbiq edilir. |
| `owner_id` | UUID/null | Sifarişə cavabdeh istifadəçidir. |
| `branch_id` | UUID/null | Yazma sorğusunda əməliyyat filialını seçir; response-da saxlanmış filialdır. |
| `branch_name` | string/null | Response-da filialın görünən adıdır. |
| `project_id` | UUID/null | Sifarişi layihə ilə əlaqələndirir. |
| `project_name` | string/null | Response-da layihənin görünən adıdır. |
| `supplier_id` | UUID | Malın alındığı təchizatçı Partner-dir. |
| `supplier_name` | string/null | Response-da təchizatçının görünən adıdır. |
| `stock_id` | UUID | Malın qəbul ediləcəyi anbardır. |
| `stock_name` | string/null | Response-da anbarın görünən adıdır. |
| `currency_id` | UUID/null | Sifariş valyutasını göstərir. |
| `currency_code` | string/null | Response-da valyutanın kodudur. |
| `currency_symbol` | string/null | Response-da valyutanın simvoludur. |
| `date` | date/null | Sifarişin əməliyyat tarixidir. |
| `description` | string/null | Sifarişin qeyd və şərtləridir. |
| `items` | array | Məhsul, vahid, qablaşdırma, miqdar, qiymət və vergilərdir. |
| `items[].id` | UUID/null | Mövcud sifariş sətrinin identifikatorudur; update-də məhsul əvəzinə istifadə oluna bilər. |
| `items[].product_id` | UUID | Yeni sətirdə alınan məhsuldur. |
| `items[].unit_id` | UUID/null | Sətirin ölçü vahididir. |
| `items[].packaging_id` | UUID/null | Seçilmiş məhsul qablaşdırmasıdır. |
| `items[].packaging_quantity` | decimal/null | Seçilmiş qablaşdırma sayıdır. |
| `items[].quantity` | decimal | Sifariş miqdarıdır. |
| `items[].price` | decimal | Faktiki vahid qiymətidir. |
| `items[].base_price` | decimal/null | Endirimdən əvvəlki baza qiymətidir. |
| `items[].discount` | decimal/null | Sətir endirim dəyəridir. |
| `items[].taxes` | array/null | Vergi identifikatoru və optional `reason_code` seçimləridir. |
| `global_discount_type` | enum | Endirimin percent və ya fixed olmasını seçir. |
| `global_discount_value` | decimal | Sənəd üzrə endirim məbləğini və ya faizini saxlayır. |
| `global_discount_amount` | decimal | Response-da hesablanmış ümumi endirimdir. |
| `total_quantity` | decimal/null | Response-da sifarişin ümumi miqdarıdır. |
| `total_net` | decimal/null | Response-da vergisiz yekun məbləğdir. |
| `total_tax` | decimal/null | Response-da ümumi vergi məbləğidir. |
| `total_gross` | decimal/null | Response-da vergi və endirimdən sonrakı yekundur. |
| `state` | enum | `draft`, `confirmed`, `cancelled` lifecycle vəziyyətidir. |
| `state_color` | string | Response-da cari state rəngidir. |
| `states` | array | Response-da statusbar üçün mümkün state dəyərləridir. |
| `version` | integer | Sifarişin document versiyasıdır. |
| `tax_totals` | array | Detail response-da vergi xülasəsidir. |
| `ledger_items` | array | Detail response-da maliyyə proyeksiyasıdır; sifariş özü jurnal post etmir. |
| `action_availability` | object | Cari vəziyyətdə icazəli action-ları göstərir. |
| `customFields` | object | Tenant-a məxsus dinamik sahələri qəbul edir; response-da onların açarları root səviyyəsində qaytarılır. |
| `created_at` | datetime/null | Yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Son dəyişiklik vaxtıdır. |

## Endpointlər

### Sifarişləri siyahıla

**Endpoint** · `GET /api/v1/purchase-orders`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "q": "PO-2026",
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
  "message": "Alışlar yükləndi.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "PO-2026-0001",
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
**Xətalar** · `401/403` — giriş və ya permission xətası. **Biznes təsiri** · Yoxdur.

### Sifariş yarat

**Endpoint** · `POST /api/v1/purchase-orders`

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
    "currency_id": "55555555-5555-4555-8555-555555555555",
    "items": [
      {
        "product_id": "66666666-6666-4666-8666-666666666666",
        "quantity": 10,
        "price": 18
      }
    ]
  }
}
```
**Response JSON · `200`**
```json
{
  "status": "success",
  "message": "Alış yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "PO-2026-0001",
    "state": "draft",
    "items": [
      {
        "product_id": "66666666-6666-4666-8666-666666666666",
        "quantity": "10",
        "price": "18.00"
      }
    ],
    "total_gross": "180.00",
    "action_availability": {
      "confirm": true,
      "update": true
    }
  }
}
```
**Xətalar** · `403` — create permission yoxdur; `422` — validation keçmir. **Biznes təsiri** · Stok və jurnal yaranmır.

### Sifarişi oxu

**Endpoint** · `GET /api/v1/purchase-orders/{purchase_order}`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "purchase_order": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```
**Response JSON · `200`**
```json
{
  "status": "success",
  "message": "Alış yükləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "PO-2026-0001",
    "supplier_name": "Demo təchizatçı",
    "stock_name": "Əsas anbar",
    "state": "draft",
    "items": [
      {
        "product_name": "Arabica qəhvə",
        "quantity": "10",
        "price": "18.00"
      }
    ],
    "total_gross": "180.00"
  }
}
```
**Xətalar** · `403` — read permission yoxdur; `404` — sifariş tapılmır. **Biznes təsiri** · Yoxdur.

### Sifarişi yenilə

**Endpoint** · `PUT|PATCH /api/v1/purchase-orders/{purchase_order}`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "purchase_order": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "supplier_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "44444444-4444-4444-8444-444444444444",
    "items": [
      {
        "product_id": "66666666-6666-4666-8666-666666666666",
        "quantity": 12,
        "price": 18
      }
    ]
  }
}
```
**Response JSON · `200`**
```json
{
  "status": "success",
  "message": "Alış yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "state": "draft",
    "total_quantity": "12",
    "total_gross": "216.00",
    "version": 2
  }
}
```
**Xətalar** · `404` — tapılmır; `409/422` — state/törəmə sənəd bloklayır. **Biznes təsiri** · Tədarük öhdəliyi dəyişir; stok/jurnal yoxdur.

### Sifarişi sil

**Endpoint** · `DELETE /api/v1/purchase-orders/{purchase_order}`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "purchase_order": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```
**Response JSON · `200`**
```json
{
  "status": "success",
  "message": "Alış arxivləndi.",
  "data": null
}
```
**Xətalar** · `404` — tapılmır; `409/422` — bağlı sənəd bloklayır. **Biznes təsiri** · Sifariş arxivlənir.

### Sifarişin state-ni dəyiş

**Endpoint** · `PATCH /api/v1/purchase-orders/{purchaseOrderId}/state`

**Request JSON**
```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "purchaseOrderId": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "state": "confirmed"
  }
}
```
**Response JSON · `200`**
```json
{
  "status": "success",
  "message": "Alış yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "state": "confirmed",
    "total_gross": "180.00",
    "action_availability": {
      "cancel": true,
      "update": true
    }
  }
}
```
**Xətalar** · `404` — tapılmır; `409/422` — keçid uyğun deyil. **Biznes təsiri** · `confirmed` vergi snapshot-ı yaradır, stok/jurnal yaratmır.
