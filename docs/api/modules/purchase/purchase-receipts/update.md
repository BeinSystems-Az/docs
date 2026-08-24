---
sidebar_position: 6
---

# Alış qəbzini qismən yenilə

`PATCH /api/v1/purchase-receipts/{purchase_receipt}`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_receipt` | path | UUID | Bəli | Yenilənəcək qəbz. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Request body:** `POST` qəbz sahələri, origin sahələri istisna olmaqla.

**Cavab — `200`:** tam Purchase receipt obyekti.
