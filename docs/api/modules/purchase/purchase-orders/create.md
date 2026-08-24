---
sidebar_position: 3
---

# Alış sifarişi yarat

`POST /api/v1/purchase-orders`

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `supplier_id` | UUID | Bəli | Supplier tərəfdaş. |
| `stock_id` | UUID | Bəli | Təyinat anbarı. |
| `items` | array | Xeyr | Sifariş sətirləri. |
| `items[].id` | UUID | Şərti | Mövcud sətir; `product_id` yoxdursa tələb olunur. |
| `items[].product_id` | UUID | Şərti | Məhsul; `id` yoxdursa tələb olunur. |
| `items[].quantity` | numeric | Bəli* | Sətir varsa. |
| `items[].price` | numeric | Bəli* | Sətir varsa. |
| `items[].unit_id` | UUID / null | Xeyr | Vahid. |
| `items[].packaging_id` | UUID / null | Xeyr | Qablaşdırma. |
| `currency_id` | UUID / null | Xeyr | Valyuta. |
| `date` | date / null | Xeyr | Sifariş tarixi. |
| `state` | string / null | Xeyr | `draft`, `confirmed`, `cancelled`. |
| `global_discount_type` | string / null | Xeyr | `percent`, `fixed`. |
| `global_discount_value` | numeric / null | Xeyr | `>= 0`. |

```json
{"supplier_id":"…","stock_id":"…","items":[{"product_id":"…","quantity":10,"price":18}]}
```

**Cavab — `200`:** tam Purchase order obyekti, item-lar, vergilər və action availability. Sifariş stok və jurnal entry yaratmır.
