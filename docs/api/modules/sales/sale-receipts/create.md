---
sidebar_position: 3
---

# Satış qəbzi yarat

`POST /api/v1/sale-receipts`

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `customer_id` | UUID | Bəli | Customer tərəfdaş. |
| `stock_id` | UUID | Bəli* | Origin istisnası yoxdursa. |
| `items` | array | Bəli* | Origin istisnası yoxdursa. |
| `origin_type` | string / null | Xeyr | `sale_order`, `purchase_receipt`, `sale_invoice`. |
| `origin_id` | UUID / null | Xeyr | Mənbə sənəd. |
| `currency_id` | UUID / null | Xeyr | Valyuta. |
| `date` | date / null | Xeyr | Qəbz tarixi. |
| `items[].product_id` | UUID | Bəli* | Məhsul. |
| `items[].quantity` | numeric | Bəli* | `> 0`. |
| `items[].price` | numeric | Bəli* | `>= 0`. |
| `items[].lot_id` | UUID / null | Xeyr | Lot. |
| `items[].unit_id` | UUID / null | Xeyr | Vahid. |
| `expenses` | array | Xeyr | Qəbz xərcləri. |
| `expenses[].reason_id` | UUID | Bəli* | Xərc səbəbi. |
| `expenses[].amount` | numeric | Bəli* | `> 0`. |

```json
{"customer_id":"…","stock_id":"…","items":[{"product_id":"…","quantity":2,"price":25.5}]}
```

**Cavab — `201`:** tam receipt obyekti: cəmlər, `items`, `expenses`, `tax_totals`, `ledger_items`. Qaralama hələ stok və jurnal yazmır.
