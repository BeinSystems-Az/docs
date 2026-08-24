---
sidebar_position: 2
---

# Satış qəbzlərini siyahıla

`GET /api/v1/sale-receipts` — body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `page` | query | integer | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | integer | Xeyr | Səhifə ölçüsü. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID / all | Xeyr | Oxu konteksti. |

**Cavab — `200`:** `data[]`, `links`, `meta`; elementlər qəbz başlığı, state, cəmlər və əlaqələri qaytarır.
