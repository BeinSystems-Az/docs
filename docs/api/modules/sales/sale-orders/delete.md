---
sidebar_position: 7
---

# Satış sifarişini sil

`DELETE /api/v1/sale-orders/{sale_order}` — body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_order` | path | UUID | Bəli | Silinəcək sifariş. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

```json
{"status":"success","message":"Sale order deleted successfully.","data":null}
```

Downstream sənəd varsa `422` və ya `409` qaytarıla bilər.
