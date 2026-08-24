---
sidebar_position: 2
---

# Məhsulları siyahıla

`GET /api/v1/products`

Məhsulları səhifələnmiş qaytarır. Body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `query` | query | string | Xeyr | Məhsul axtarışı. |
| `page` | query | integer | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | integer | Xeyr | Səhifə ölçüsü. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu filial konteksti. |

## Cavab — `200`

```json
{"status":"success","data":[{"id":"…","name":"Arabica qəhvə 1 kq","category_id":"…","category_name":"Qəhvə","unit_id":"…","unit_name":"Ədəd","price":"25.5000","resolved_price":"24.9000","active":true}],"links":{},"meta":{"current_page":1,"per_page":25,"total":1}}
```

Bu yalnız oxu əməliyyatıdır; stok və mühasibat nəticəsi yaratmır.
