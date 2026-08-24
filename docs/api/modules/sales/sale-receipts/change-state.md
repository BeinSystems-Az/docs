---
sidebar_position: 8
---

# Satış qəbzinin state-ni dəyiş

`PATCH /api/v1/sale-receipts/{sale_receipt}/state`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_receipt` | path | UUID | Bəli | Hədəf qəbz. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |
| `state` | body | string | Bəli | `draft`, `posted`, `cancelled`. |

```json
{"state":"posted"}
```

**Cavab — `200`:** tam receipt obyekti. `posted` stok çıxışı, jurnal/debit-credit sətirləri və expense-ləri bir transaction-da yaradır; `cancelled` revers edir; `draft` əvvəl ləğv edib qaralamaya qaytarır.
