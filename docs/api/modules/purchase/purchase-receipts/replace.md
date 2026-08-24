---
sidebar_position: 5
---

# Alış qəbzini yenilə

`PUT /api/v1/purchase-receipts/{purchase_receipt}`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_receipt` | path | UUID | Bəli | Yenilənəcək qəbz. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Request body:** supplier, stock, currency, date, item və expense sahələri create kontraktı ilə qəbul olunur. `origin_type` və `origin_id` update üçün qadağandır.

**Cavab — `200`:** tam Purchase receipt obyekti.
