---
sidebar_position: 4
---

# Məhsulu oxu

`GET /api/v1/products/{product}`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product` | path | UUID | Bəli | Məhsul ID-si. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Resolve edilmiş qiymət konteksti. |

Body yoxdur.

## Cavab — `200`

```json
{"status":"success","message":"Product retrieved successfully.","data":{"id":"…","name":"Arabica qəhvə 1 kq","category_id":"…","unit_id":"…","price":"25.5000","resolved_price":"24.9000","branch_pricing":{},"packagings":[],"suppliers":[],"reorder_rules":[]}}
```

Məhsul tapılmadıqda `404` qaytarılır.
