---
sidebar_position: 7
---

# Məhsulu sil

`DELETE /api/v1/products/{product}`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product` | path | UUID | Bəli | Silinəcək məhsul. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

Body yoxdur.

## Cavab — `200`

```json
{"status":"success","message":"Product deleted successfully.","data":null}
```

Əlaqəli biznes qaydası silməni bloklasa `422` və ya `409`, məhsul tapılmazsa `404` qaytarıla bilər. Post edilmiş sənədlər dəyişmir.
