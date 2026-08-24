---
sidebar_position: 7
---

# Satış qəbzini sil

`DELETE /api/v1/sale-receipts/{sale_receipt}` — body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_receipt` | path | UUID | Bəli | Silinəcək qəbz. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

```json
{"status":"success","message":"Sale receipt deleted successfully.","data":null}
```

Post edilmiş və ya bağlı sənəd `422`/`409` qaytara bilər.
