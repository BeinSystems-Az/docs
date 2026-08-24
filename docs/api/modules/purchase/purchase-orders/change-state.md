---
sidebar_position: 8
---

# Alış sifarişinin state-ni dəyiş

`PATCH /api/v1/purchase-orders/{purchaseOrderId}/state`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchaseOrderId` | path | UUID | Bəli | Hədəf sifariş. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |
| `state` | body | string | Bəli | `draft`, `confirmed`, `cancelled`. |

```json
{"state":"confirmed"}
```

**Cavab — `200`:** tam Purchase order obyekti. `confirmed` öhdəliyi təsdiqləyir, fiziki stok və jurnal entry yaratmır; `cancelled` ləğv edir.
