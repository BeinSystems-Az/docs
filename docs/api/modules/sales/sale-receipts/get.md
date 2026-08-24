---
sidebar_position: 4
---

# Satış qəbzini oxu

`GET /api/v1/sale-receipts/{sale_receipt}` — body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_receipt` | path | UUID | Bəli | Qəbz ID-si. |
| `Authorization` | header | Bearer token | Bəli | JWT. |
| `X-Branch-Id` | header | UUID / all | Xeyr | Oxu konteksti. |

**Cavab — `200`:** tam receipt obyekti. Tapılmadıqda `404`.
