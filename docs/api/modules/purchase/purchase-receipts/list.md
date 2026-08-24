---
sidebar_position: 2
---

# Alış qəbzlərini siyahıla

`GET /api/v1/purchase-receipts` — body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `state` | query | string | Xeyr | State filtri. |
| `origin_id` | query | UUID | Xeyr | Mənbə sənəd filtri. |
| `supplier_id` | query | UUID | Xeyr | Təchizatçı filtri. |
| `stock_id` | query | UUID | Xeyr | Anbar filtri. |
| `page` | query | integer | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | integer | Xeyr | Səhifə ölçüsü. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID / all | Xeyr | Oxu konteksti. |

**Cavab — `200`:** `data[]`, `links`, `meta`; qəbz başlığı, əlaqələr, cəmlər, item, expense və audit sahələri.
