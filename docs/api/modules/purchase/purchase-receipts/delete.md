---
sidebar_position: 7
---

# Alış qəbzini sil

`DELETE /api/v1/purchase-receipts/{purchase_receipt}` — body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_receipt` | path | UUID | Bəli | Silinəcək qəbz. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

```json
{"status":"success","message":"Purchase receipt deleted successfully.","data":null}
```

Post edilmiş və ya bağlı sənəd `422`/`409` qaytara bilər.
