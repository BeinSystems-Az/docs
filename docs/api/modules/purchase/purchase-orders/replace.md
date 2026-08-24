---
sidebar_position: 5
---

# Alış sifarişini yenilə

`PUT /api/v1/purchase-orders/{purchase_order}`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_order` | path | UUID | Bəli | Yenilənəcək sifariş. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Request body:** supplier, stock, item, metadata, state, discount və `customFields` create kontraktı ilə qəbul olunur.

**Cavab — `200`:** tam Purchase order obyekti.
