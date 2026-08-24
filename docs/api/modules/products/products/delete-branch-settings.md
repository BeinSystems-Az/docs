---
sidebar_position: 9
---

# Filial məhsul sazlamasını sil

`DELETE /api/v1/branches/{branch}/products/{product}/settings`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `branch` | path | UUID | Bəli | Override-ı silinəcək filial. |
| `product` | path | UUID | Bəli | Məhsul ID-si. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Filial konteksti. |

Body yoxdur.

## Cavab — `200`

```json
{"status":"success","message":"Branch product settings deleted successfully.","data":null}
```

Override silindikdən sonra həmin filial standart məhsul qiymət və sazlamalarına qayıdır.
