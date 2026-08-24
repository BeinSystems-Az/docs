---
sidebar_position: 7
---

# Alış sifarişini sil

`DELETE /api/v1/purchase-orders/{purchase_order}` — body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_order` | path | UUID | Bəli | Arxivlənəcək sifariş. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

```json
{"status":"success","message":"Purchase order archived successfully.","data":null}
```

Bağlı state-də sənəd `422`/`409` qaytara bilər.
