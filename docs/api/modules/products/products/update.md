---
sidebar_position: 6
---

# Məhsulu qismən yenilə

`PATCH /api/v1/products/{product}`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product` | path | UUID | Bəli | Yenilənəcək məhsul. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

## Request body

`POST /api/v1/products` sahələrini qəbul edir. `name` tələb olunur; cari məhsulun unikal ad yoxlamasından istisnadır. `unit_id` yalnız body-də varsa yoxlanır.

```json
{"name":"Arabica qəhvə 1 kq","price":26}
```

## Cavab — `200`

```json
{"status":"success","message":"Product updated successfully.","data":{"id":"…","name":"Arabica qəhvə 1 kq","price":"26.0000"}}
```

Tarixi biznes sənədləri dəyişmir.
