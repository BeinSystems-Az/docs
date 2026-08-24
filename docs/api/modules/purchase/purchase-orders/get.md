---
sidebar_position: 4
---

# Alış sifarişini oxu

`GET /api/v1/purchase-orders/{purchase_order}` — body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_order` | path | UUID | Bəli | Sifariş ID-si. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID / all | Xeyr | Oxu konteksti. |

**Cavab — `200`:** tam sifariş, məhsul/unit/kateqoriya əlaqəli item-lar. Tapılmadıqda `404`.
