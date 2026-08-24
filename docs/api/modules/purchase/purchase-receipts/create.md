---
sidebar_position: 3
---

# Alış qəbzi yarat

`POST /api/v1/purchase-receipts`

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `supplier_id` | UUID | Bəli* | Origin istisnası yoxdursa. |
| `stock_id` | UUID | Bəli* | Origin istisnası yoxdursa. |
| `items` | array | Bəli* | Origin istisnası yoxdursa. |
| `origin_type` | string / null | Xeyr | `purchase_order`, `purchase_invoice`. |
| `origin_id` | UUID / null | Xeyr | Mənbə sənəd. |
| `currency_id` | UUID / null | Xeyr | Valyuta. |
| `date` | date / null | Xeyr | Qəbul tarixi. |
| `items[].product_id` | UUID | Bəli* | Məhsul. |
| `items[].quantity` | numeric | Bəli* | `> 0`. |
| `items[].unit_cost` | numeric / null | Xeyr | `>= 0`. |
| `items[].lot_id` | UUID / null | Xeyr | Lot. |
| `items[].unit_id` | UUID / null | Xeyr | Vahid. |
| `items[].packaging_id` | UUID / null | Xeyr | Qablaşdırma. |
| `expenses` | array | Xeyr | Qəbul xərcləri. |
| `expenses[].reason_id` | UUID | Bəli* | Xərc səbəbi. |
| `expenses[].amount` | numeric | Bəli* | `> 0`. |

```json
{"supplier_id":"…","stock_id":"…","items":[{"product_id":"…","quantity":10,"unit_cost":18}]}
```

**Cavab — `201`:** tam receipt obyekti, `items`, `expenses`, `tax_totals`, `ledger_items`. Qaralama stok və jurnal yaratmır.
