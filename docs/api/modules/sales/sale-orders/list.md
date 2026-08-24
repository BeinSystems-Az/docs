---
sidebar_position: 2
---

# Satış sifarişlərini siyahıla

`GET /api/v1/sale-orders` — body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `q` | query | string | Xeyr | Mətn axtarışı. |
| `page` | query | integer | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | integer | Xeyr | Səhifə ölçüsü. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu konteksti. |

**Cavab — `200`:** `data[]`, `links`, `meta`. Hər element `id`, `name`, customer, stock, currency, state, cəmlər, discount və audit sahələrini qaytarır.
