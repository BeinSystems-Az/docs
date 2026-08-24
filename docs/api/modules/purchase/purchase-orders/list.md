---
sidebar_position: 2
---

# Alış sifarişlərini siyahıla

`GET /api/v1/purchase-orders` — body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `q` | query | string | Xeyr | Axtarış mətni. |
| `page` | query | integer | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | integer | Xeyr | Səhifə ölçüsü. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID / all | Xeyr | Oxu konteksti. |

**Cavab — `200`:** `data[]`, `links`, `meta`; sifariş başlığı, supplier, stock, currency, state, cəmlər və audit sahələri.
