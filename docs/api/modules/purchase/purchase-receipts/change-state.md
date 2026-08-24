---
sidebar_position: 8
---

# Alış qəbzinin state-ni dəyiş

`PATCH /api/v1/purchase-receipts/{purchaseReceipt}/state`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchaseReceipt` | path | UUID | Bəli | Hədəf qəbz. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |
| `state` | body | string | Bəli | `draft`, `posted`, `cancelled`. |

```json
{"state":"posted"}
```

**Cavab — `200`:** tam Purchase receipt obyekti. `posted` stok qəbulu, jurnal/debit-credit və expense nəticələrini transaction-da yaradır; `cancelled` revers edir; `draft` ləğv edib qaralamaya qaytarır.
