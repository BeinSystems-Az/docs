---
sidebar_position: 3
slug: /api/purchasing/receipts
---

# Alış qəbzləri

Alış qəbzi fiziki qəbul sənədidir. Bütün endpointlər Bearer JWT, `purchase_receipts` icazəsi və `X-Branch-Id` filial konteksti tələb edir. `401`, `403`, `404`, `422`, `503` uyğun giriş, icazə, resurs, doğrulama/state və tenant hazırlığı xətalarıdır.

## `GET /api/v1/purchase-receipts`

Qəbzləri filtrlənmiş, səhifələnmiş qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `state` | query | string | Xeyr | State filtri. |
| `origin_id` | query | UUID | Xeyr | Mənbə sənəd ID-si filtri. |
| `supplier_id` | query | UUID | Xeyr | Təchizatçı filtri. |
| `stock_id` | query | UUID | Xeyr | Anbar filtri. |
| `filter[state].value` | query | string | Xeyr | `state` üçün alternativ filter sintaksisi. |
| `filter[origin_id].value` | query | UUID | Xeyr | `origin_id` üçün alternativ filter sintaksisi. |
| `filter[supplier_id].value` | query | UUID | Xeyr | `supplier_id` üçün alternativ filter sintaksisi. |
| `filter[stock_id].value` | query | UUID | Xeyr | `stock_id` üçün alternativ filter sintaksisi. |
| `page` | query | integer | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | integer | Xeyr | Səhifə ölçüsü. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu konteksti. |

**Cavab — `200`** — `data[]`, `links`, `meta`; elementlərdə qəbz başlığı, branch/supplier/stock/currency, origin, cəmlər, item-lar, expenses, taxes, ledger və audit məlumatı olur.

## `POST /api/v1/purchase-receipts`

Qaralama alış qəbzi yaradır.

### Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `supplier_id` | UUID | Bəli* | Origin `purchase_order` və ya `purchase_invoice` olmadıqda. |
| `stock_id` | UUID | Bəli* | Origin istisnası yoxdursa. |
| `items` | array | Bəli* | Origin istisnası yoxdursa minimum bir sətir. |
| `origin_type` | string / `null` | Xeyr | `purchase_order` və ya `purchase_invoice`. |
| `origin_id` | UUID / `null` | Xeyr | Origin ID-si; create-də origin ilə birlikdə. |
| `currency_id` | UUID / `null` | Xeyr | Valyuta. |
| `date` | date / `null` | Xeyr | Qəbul tarixi. |
| `note` | string / `null` | Xeyr | Qeyd. |
| `global_discount_type` | string / `null` | Xeyr | `percent` və ya `fixed`. |
| `global_discount_value` | numeric / `null` | Xeyr | `>= 0`. |
| `items[].product_id` | UUID | Bəli* | Məhsul. |
| `items[].quantity` | numeric | Bəli* | `> 0`. |
| `items[].lot_id` | UUID / `null` | Xeyr | Lot. |
| `items[].unit_id` | UUID / `null` | Xeyr | Ölçü vahidi. |
| `items[].packaging_id` | UUID / `null` | Xeyr | Qablaşdırma. |
| `items[].packaging_quantity` | numeric / `null` | Xeyr | `> 0`. |
| `items[].unit_cost` | numeric / `null` | Xeyr | `>= 0`. |
| `items[].discount` | numeric / `null` | Xeyr | `>= 0`. |
| `items[].origin_type` | string / `null` | Xeyr | `purchase_order_item` və ya `purchase_invoice_item`. |
| `items[].origin_id` | UUID / `null` | Xeyr | Mənbə sətir ID-si. |
| `items[].taxes` | array | Xeyr | Vergi tətbiqləri. |
| `expenses` | array | Xeyr | Qəbul xərcləri. |
| `expenses[].reason_id` | UUID | Bəli* | Xərc səbəbi. |
| `expenses[].amount` | numeric | Bəli* | `> 0`. |
| `expenses[].partner_id` | UUID / `null` | Xeyr | Tərəfdaş. |
| `expenses[].account_id` | UUID / `null` | Xeyr | Hesab. |
| `expenses[].tax_id` | UUID / `null` | Xeyr | Vergi. |
| `expenses[].due_date` | date / `null` | Xeyr | Son tarix. |
| `expenses[].reference` | string / `null` | Xeyr | İstinad. |

```json
{"origin_type":"purchase_order","origin_id":"11111111-1111-1111-1111-111111111111","supplier_id":"22222222-2222-2222-2222-222222222222","stock_id":"33333333-3333-3333-3333-333333333333","items":[{"product_id":"44444444-4444-4444-4444-444444444444","quantity":10,"unit_cost":18}]}
```

**Cavab — `201`** — tam receipt obyekti: qəbz başlığı, əlaqələr, origin, cəmlər/discount, `items`, `expenses`, `expenses_total`, `tax_totals`, `ledger_items`, `action_availability`, audit sahələri.

## `GET /api/v1/purchase-receipts/{purchase_receipt}`

Bir qəbzi qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_receipt` | path | UUID | Bəli | Qəbz ID-si. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu konteksti. |

**Cavab — `200`** — `POST` response-indəki tam Purchase receipt obyekti.

## `PUT /api/v1/purchase-receipts/{purchase_receipt}`

Qaralama alış qəbzini yeniləyir.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_receipt` | path | UUID | Bəli | Yenilənəcək qəbz. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

### Request body

`POST` body-sindəki supplier, stock, currency, tarix, note, discount, item və expense sahələri qəbul edilir. `origin_type` və `origin_id` update body-sində qadağandır; göndərilərsə `422` qaytarılır.

**Cavab — `200`** — tam Purchase receipt obyekti.

## `PATCH /api/v1/purchase-receipts/{purchase_receipt}`

Qaralama alış qəbzini yeniləyir; `PUT` ilə eyni path parametri, request body və `200` response kontraktı tətbiq olunur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_receipt` | path | UUID | Bəli | Yenilənəcək qəbz. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

## `DELETE /api/v1/purchase-receipts/{purchase_receipt}`

Qəbzi silir; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_receipt` | path | UUID | Bəli | Silinəcək qəbz. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Cavab — `200`**

```json
{"status":"success","message":"Purchase receipt deleted successfully.","data":null}
```

Post edilmiş və ya bağlı sənəd `422`/`409` ilə silinməyə bilər.

## `PATCH /api/v1/purchase-receipts/{purchaseReceipt}/state`

Qəbzin biznes state-ni dəyişir.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchaseReceipt` | path | UUID | Bəli | Hədəf qəbz. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

### Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `state` | string | Bəli | `draft`, `posted`, `cancelled`. |

```json
{"state":"posted"}
```

**Cavab — `200`** — tam Purchase receipt obyekti.

`posted` stok qəbulunu, uyğun jurnal entry/debit-credit sətirlərini və receipt expense-lərini bir transaction-da yaradır; vergi postdan öncə dondurulur. `cancelled` nəticələri revers edir. `draft` post edilmiş qəbzi ləğv edib expense-ləri qaralamaya qaytarır.
