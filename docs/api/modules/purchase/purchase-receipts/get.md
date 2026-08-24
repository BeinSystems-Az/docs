---
sidebar_position: 4
---

# Alış qəbzini oxu

`GET /api/v1/purchase-receipts/{purchase_receipt}` — body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_receipt` | path | UUID | Bəli | Qəbz ID-si. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID / all | Xeyr | Oxu konteksti. |

**Cavab — `200`:** tam Purchase receipt obyekti. Tapılmadıqda `404`.
