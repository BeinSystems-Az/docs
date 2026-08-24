---
sidebar_position: 6
---

# Satış qəbzini qismən yenilə

`PATCH /api/v1/sale-receipts/{sale_receipt}`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_receipt` | path | UUID | Bəli | Yenilənəcək qəbz. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Request body:** `POST` qəbz sahələri; `customer_id` yalnız göndərilərsə yoxlanır.

**Cavab — `200`:** tam receipt obyekti.
