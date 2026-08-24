---
sidebar_position: 3
---

# Purchase receipts API

Purchase receipt fiziki alış qəbuludur. JWT, `X-Branch-Id` və `purchase_receipts` permission-u tələb olunur. `401`, `403`, `404`, `422`, `503` kodları uyğun olaraq credential, icazə, resurs, validation/state və tenant provisioning xətasını bildirir.

## Endpointlər

| Metod | URL | Məqsəd |
| --- | --- | --- |
| `GET` | `/api/v1/purchase-receipts?state=&origin_id=&supplier_id=&stock_id=&page=&per_page=` | Filtrlənmiş siyahı. |
| `POST` | `/api/v1/purchase-receipts` | Qaralama qəbz yaratmaq. |
| `GET` | `/api/v1/purchase-receipts/{purchase_receipt}` | Tam qəbz. |
| `PUT`, `PATCH` | `/api/v1/purchase-receipts/{purchase_receipt}` | Qaralama qəbzi yeniləmək. |
| `DELETE` | `/api/v1/purchase-receipts/{purchase_receipt}` | Qəbzi silmək. |
| `PATCH` | `/api/v1/purchase-receipts/{purchaseReceipt}/state` | `draft`, `posted`, `cancelled` keçidi. |

Siyahıda `state`, `origin_id`, `supplier_id`, `stock_id` birbaşa query ilə və ya `filter.<field>.value` formatında verilə bilər. `data[]`, `links`, `meta` qaytarılır.

## Yaratmaq və yeniləmək

| Sahə | Tip | Create tələbi | Qayda |
| --- | --- | --- | --- |
| `supplier_id`, `stock_id`, `items` | UUID/UUID/array | Bəli* | *`origin_type` `purchase_order` və ya `purchase_invoice` olmadıqda. |
| `origin_type`, `origin_id` | string/UUID/null | Xeyr | Create-də birlikdə verilir; type yalnız `purchase_order`/`purchase_invoice`. Update-də qadağandır. |
| `currency_id`, `date`, `note` | UUID/date/string/null | Xeyr | Metadata. |
| `global_discount_type`, `global_discount_value` | string/numeric/null | Xeyr | `percent`/`fixed`, value `>=0`. |
| `items[].product_id`, `items[].quantity` | UUID/numeric | Sətir varsa bəli | Mövcud məhsul, `quantity > 0`. |
| `items[].lot_id`, `unit_id`, `packaging_id` | UUID/null | Xeyr | Mövcud lot/unit/packaging. |
| `items[].packaging_quantity` | numeric/null | Xeyr | `>0`. |
| `items[].unit_cost`, `discount` | numeric/null | Xeyr | `>=0`. |
| `items[].origin_type`, `origin_id` | string/UUID/null | Xeyr | Origin type `purchase_order_item` və ya `purchase_invoice_item`. |
| `items[].taxes[]` | array | Xeyr | Tax UUID-si və opsional reason code. |
| `expenses[]` | array | Xeyr | Hər sətirdə `reason_id`, `amount > 0`; opsional partner/account/tax/due date/ref. |

```json
{
  "origin_type":"purchase_order",
  "origin_id":"11111111-1111-1111-1111-111111111111",
  "supplier_id":"22222222-2222-2222-2222-222222222222",
  "stock_id":"33333333-3333-3333-3333-333333333333",
  "items":[{"product_id":"44444444-4444-4444-4444-444444444444","quantity":10,"unit_cost":18}]
}
```

`POST` `201`, update `200` qaytarır. Tam `data` objectində `id`, `name`, `state`, filial, supplier, stock, currency, origin, tarix/note, cəmlər və discount, `items`, `expenses`, `expenses_total`, `tax_totals`, `ledger_items`, `action_availability`, audit tarixləri var. Item-lar məhsul/lot/unit/packaging, quantity, unit cost, discount, tax tətbiqləri və məbləğləri daşıyır.

## Oxumaq, state və silmək

### `GET /api/v1/purchase-receipts/{purchase_receipt}`

Path UUID-dir, body yoxdur. `200` response tam receipt kontraktıdır.

### `PATCH /api/v1/purchase-receipts/{purchaseReceipt}/state`

```json
{"state":"posted"}
```

`state` məcburidir: `draft`, `posted`, `cancelled`. Post edilmiş qəbz stok qəbulunu, uyğun jurnal entry/debit-credit sətirlərini və receipt expense-lərini bir transaction-da yaradır. Ləğv həmin nəticələri revers edir. `draft`-a dönüş post edilmiş qəbzi ləğv edir və expense-ləri qaralamaya qaytarır. Vergi postdan əvvəl dondurulur. Uğurlu cavab `200` və tam receipt object-dir.

### `DELETE /api/v1/purchase-receipts/{purchase_receipt}`

Body yoxdur, uğurlu cavab `{"status":"success","data":null}`-dır. Post edilmiş və ya bağlı sənəd business guard səbəbindən `422`/`409` qaytara bilər.
