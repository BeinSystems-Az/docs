---
sidebar_position: 5
---

# Məhsulu yenilə

`PUT /api/v1/products/{product}`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product` | path | UUID | Bəli | Yenilənəcək məhsul. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

## Request body

`POST /api/v1/products` üçün göstərilən sahələr qəbul edilir. `name` tələb olunur, cari məhsulun unikal ad yoxlamasından istisnadır; `unit_id` yalnız göndərilərsə yoxlanır.

```json
{"name":"Arabica qəhvə 1 kq","category_id":"…","unit_id":"…","price":25.5,"active":true}
```

## Cavab — `200`

```json
{"status":"success","message":"Product updated successfully.","data":{"id":"…","name":"Arabica qəhvə 1 kq","active":true}}
```

Əvvəl post edilmiş sənədlər və jurnal yazılışları yenidən hesablanmır.
