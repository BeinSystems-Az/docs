---
sidebar_position: 8
---

# Satış sifarişinin state-ni dəyiş

`PATCH /api/v1/sale-orders/{sale_order}/state`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_order` | path | UUID | Bəli | Hədəf sifariş. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |
| `state` | body | string | Bəli | `draft`, `sent`, `sale_order`, `cancelled`. |

```json
{"state":"sale_order"}
```

**Cavab — `200`:** tam Sale order obyekti. `sale_order` rezerv yaradır və qaralama delivery sinxronlaşdırır; jurnal entry yaratmır. `draft`/`cancelled` açıq rezervi buraxır.
