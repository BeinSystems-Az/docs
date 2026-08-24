---
sidebar_position: 6
---

# Satış sifarişini qismən yenilə

`PATCH /api/v1/sale-orders/{sale_order}`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_order` | path | UUID | Bəli | Yenilənəcək sifariş. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Request body:** `POST`-dakı customer, stock, item, metadata və discount sahələri.

**Cavab — `200`:** tam Sale order obyekti; post edilmiş downstream delivery qorunur.
