---
sidebar_position: 3
---

# Satış sifarişi yarat

`POST /api/v1/sale-orders` — `Authorization: Bearer <token>` və opsional `X-Branch-Id` qəbul edir.

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `customer_id` | UUID | Bəli | Customer tərəfdaş. |
| `stock_id` | UUID | Bəli | Mövcud anbar. |
| `items` | array | Bəli | Minimum bir sətir. |
| `items[].product_id` | UUID | Bəli | Məhsul. |
| `items[].quantity` | numeric | Bəli | `> 0`. |
| `items[].price` | numeric | Bəli | `>= 0`. |
| `items[].unit_id` | UUID / null | Xeyr | Vahid. |
| `items[].packaging_id` | UUID / null | Xeyr | Qablaşdırma. |
| `items[].discount` | numeric / null | Xeyr | `>= 0`. |
| `currency_id` | UUID / null | Xeyr | Valyuta. |
| `date` | date / null | Xeyr | Sifariş tarixi. |
| `state` | string / null | Xeyr | `draft`, `sent`, `sale_order`, `cancelled`. |

```json
{"customer_id":"…","stock_id":"…","items":[{"product_id":"…","quantity":2,"price":25.5}]}
```

**Cavab — `201`:** tam Sale order obyekti, `items`, `tax_totals`, `action_availability`. Qaralama yaratmaq jurnal entry yaratmır.
