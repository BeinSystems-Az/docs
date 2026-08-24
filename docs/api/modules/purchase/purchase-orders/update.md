---
sidebar_position: 6
---

# Alış sifarişini qismən yenilə

`PATCH /api/v1/purchase-orders/{purchase_order}`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_order` | path | UUID | Bəli | Yenilənəcək sifariş. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Request body:** `POST` sifariş sahələri.

**Cavab — `200`:** tam Purchase order obyekti.
