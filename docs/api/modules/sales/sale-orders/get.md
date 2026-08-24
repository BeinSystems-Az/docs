---
sidebar_position: 4
---

# Satış sifarişini oxu

`GET /api/v1/sale-orders/{sale_order}` — body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_order` | path | UUID | Bəli | Sifariş ID-si. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID / all | Xeyr | Oxu konteksti. |

**Cavab — `200`:** tam sifariş: başlıq, əlaqələr, state, cəmlər, item-lar, vergilər və `action_availability`. Tapılmadıqda `404`.
