---
sidebar_position: 5
---

# Satış qəbzini yenilə

`PUT /api/v1/sale-receipts/{sale_receipt}`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_receipt` | path | UUID | Bəli | Yenilənəcək qəbz. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Request body:** customer, stock, origin, date, currency, item və expense sahələri create kontraktı ilə qəbul olunur.

**Cavab — `200`:** tam receipt obyekti.
