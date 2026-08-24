---
sidebar_position: 8
---

# Filial məhsul sazlamasını yaz

`PUT /api/v1/branches/{branch}/products/{product}/settings`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `branch` | path | UUID | Bəli | Sazlamanın aid olduğu filial. |
| `product` | path | UUID | Bəli | Məhsul ID-si. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Filial konteksti. |

## Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `is_available` | boolean | Xeyr | Filialda məhsulun seçilə bilməsi. |
| `sale_price` | numeric / null | Xeyr | `>= 0`. |
| `min_price` | numeric / null | Xeyr | `>= 0`. |
| `purchase_price` | numeric / null | Xeyr | `>= 0`. |

## Cavab — `200`

```json
{"status":"success","data":{"branch_id":"…","is_available":true,"sale_price":"24.9000","min_price":"22.0000","purchase_price":"18.0000","overrides":{"sale_price":true,"min_price":true,"purchase_price":true}}}
```

Yalnız filial override-ını dəyişir; əsas məhsul kartı və post edilmiş sənədlər dəyişmir.
