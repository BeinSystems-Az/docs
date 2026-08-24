---
sidebar_position: 5
---

# Satış sifarişini yenilə

`PUT /api/v1/sale-orders/{sale_order}`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_order` | path | UUID | Bəli | Yenilənəcək sifariş. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Request body:** `customer_id`, `stock_id`, `items[]`, tarix, valyuta, state və discount sahələri `POST` kontraktı ilə qəbul olunur.

**Cavab — `200`:** tam Sale order obyekti. Təsdiqlənmiş `sale_order` yenilənərkən transaction daxilində draft-a qaytarılıb yenidən təsdiqlənir.
