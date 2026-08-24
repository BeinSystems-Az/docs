---
sidebar_position: 3
slug: /api/sales/receipts
---

# Satış qəbzləri

Satış qəbzi faktiki satış sənədidir. Bütün endpointlər Bearer JWT, `sale_receipts` icazəsi və `X-Branch-Id` filial konteksti tələb edir. `401`, `403`, `404`, `422`, `503` uyğun giriş, icazə, resurs, doğrulama/state və tenant hazırlığı xətalarıdır.

## `GET /api/v1/sale-receipts`

Qəbzləri səhifələnmiş qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `page` | query | integer | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | integer | Xeyr | Səhifə ölçüsü. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu konteksti. |

**Cavab — `200`** — `data[]`, `links`, `meta`; hər element `id`, `name`, `state`, filial, valyuta, customer, stock, tarix, origin, cəmlər, discount, expenses, taxes, items və audit sahələrini daşıyır.

## `POST /api/v1/sale-receipts`

Qaralama satış qəbzi yaradır.

### Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `customer_id` | UUID | Bəli | Customer tərəfdaş. |
| `stock_id` | UUID | Bəli* | Origin `sale_order`, `purchase_receipt`, `sale_invoice` olmadıqda. |
| `items` | array | Bəli* | Origin istisnası yoxdursa minimum bir sətir. |
| `origin_type` | string / `null` | Xeyr | `sale_order`, `purchase_receipt`, `sale_invoice`. |
| `origin_id` | UUID / `null` | Xeyr | Origin ID-si. |
| `currency_id` | UUID / `null` | Xeyr | Valyuta. |
| `date` | date / `null` | Xeyr | Qəbz tarixi. |
| `note` | string / `null` | Xeyr | Maksimum 1000 simvol. |
| `global_discount_type` | string / `null` | Xeyr | `percent` və ya `fixed`. |
| `global_discount_value` | numeric / `null` | Xeyr | `>= 0`. |
| `items[].product_id` | UUID | Bəli* | Məhsul. |
| `items[].quantity` | numeric | Bəli* | `> 0`. |
| `items[].price` | numeric | Bəli* | `>= 0`. |
| `items[].lot_id` | UUID / `null` | Xeyr | Lot. |
| `items[].unit_id` | UUID / `null` | Xeyr | Ölçü vahidi. |
| `items[].packaging_id` | UUID / `null` | Xeyr | Qablaşdırma. |
| `items[].packaging_quantity` | numeric / `null` | Xeyr | `> 0`. |
| `items[].name` | string / `null` | Xeyr | Sətir adı. |
| `items[].discount` | numeric / `null` | Xeyr | `>= 0`. |
| `items[].account_id` | UUID / `null` | Xeyr | Hesab əlaqəsi. |
| `items[].taxes` | array | Xeyr | Vergi tətbiqləri. |
| `expenses` | array | Xeyr | Qəbz xərcləri. |
| `expenses[].reason_id` | UUID | Bəli* | Xərc səbəbi. |
| `expenses[].amount` | numeric | Bəli* | `> 0`. |
| `expenses[].partner_id` | UUID / `null` | Xeyr | Tərəfdaş. |
| `expenses[].account_id` | UUID / `null` | Xeyr | Hesab. |
| `expenses[].tax_id` | UUID / `null` | Xeyr | Vergi. |
| `expenses[].due_date` | date / `null` | Xeyr | Ödəniş son tarixi. |
| `expenses[].reference` | string / `null` | Xeyr | İstinad. |

```json
{"customer_id":"11111111-1111-1111-1111-111111111111","stock_id":"22222222-2222-2222-2222-222222222222","items":[{"product_id":"33333333-3333-3333-3333-333333333333","quantity":2,"price":25.5}]}
```

**Cavab — `201`** — tam receipt obyekti: başlıq, cəmlər, `items`, `expenses`, `expenses_total`, `tax_totals`, `ledger_items`, `action_availability`, audit sahələri.

## `GET /api/v1/sale-receipts/{sale_receipt}`

Bir qəbzi qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_receipt` | path | UUID | Bəli | Qəbz ID-si. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu konteksti. |

**Cavab — `200`** — `POST` response-indəki tam receipt obyekti.

## `PUT /api/v1/sale-receipts/{sale_receipt}`

Qaralama qəbzi yeniləyir.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_receipt` | path | UUID | Bəli | Yenilənəcək qəbz. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

### Request body

`POST` body-sindəki `customer_id`, `stock_id`, origin, tarix/valyuta/discount, item və expense sahələri qəbul edilir; update-də `customer_id` yalnız göndərildikdə yoxlanır.

**Cavab — `200`** — tam receipt obyekti.

## `PATCH /api/v1/sale-receipts/{sale_receipt}`

Qaralama qəbzi yeniləyir; `PUT` ilə eyni path parametri, request body və `200` response kontraktı tətbiq olunur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_receipt` | path | UUID | Bəli | Yenilənəcək qəbz. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

## `DELETE /api/v1/sale-receipts/{sale_receipt}`

Qəbzi silir; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_receipt` | path | UUID | Bəli | Silinəcək qəbz. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Cavab — `200`**

```json
{"status":"success","message":"Sale receipt deleted successfully.","data":null}
```

Post edilmiş və ya bağlı sənəd `422`/`409` ilə silinməyə bilər.

## `PATCH /api/v1/sale-receipts/{sale_receipt}/state`

Qəbzin biznes state-ni dəyişir.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_receipt` | path | UUID | Bəli | Hədəf qəbz. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

### Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `state` | string | Bəli | `draft`, `posted`, `cancelled`. |

```json
{"state":"posted"}
```

**Cavab — `200`** — tam receipt obyekti.

`posted` stok çıxışı, jurnal entry/debit-credit sətirləri və qəbz xərclərini bir transaction-da yaradır; vergilər postdan əvvəl dondurulur. `cancelled` maliyyə və stok nəticəsini revers edir. `draft` post edilmiş qəbzi əvvəl ləğv edir, sonra expense-ləri qaralamaya qaytarır.
