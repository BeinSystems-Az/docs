---
sidebar_position: 2
slug: /api/purchasing/orders
---

# Alış sifarişləri

Alış sifarişi təchizatçıya verilən kommersiya sifarişidir. Bütün endpointlər üçün Bearer JWT, `purchase_orders` icazəsi və `X-Branch-Id` tətbiq olunur. `401`, `403`, `404`, `422`, `503` giriş, icazə, resurs, doğrulama/state və provisioning xətalarıdır.

## `GET /api/v1/purchase-orders`

Sifarişləri səhifələnmiş qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `q` | query | string | Xeyr | Sifariş axtarış mətni. |
| `page` | query | integer | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | integer | Xeyr | Səhifə ölçüsü. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu filial konteksti. |

**Cavab — `200`** — `data[]`, `links`, `meta`; elementlərdə `id`, `name`, owner/user, supplier, stock, branch, currency, cəmlər, discount, `description`, `state`, `states`, `version`, `date`, audit və custom-field sahələri qaytarılır.

## `POST /api/v1/purchase-orders`

Alış sifarişi yaradır.

### Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `supplier_id` | UUID | Bəli | Mövcud supplier tərəfdaş. |
| `stock_id` | UUID | Bəli | Təyinat anbarı. |
| `items` | array | Xeyr | Sifariş sətirləri. |
| `items[].id` | UUID | Şərti | Mövcud sətiri yeniləmək üçün; `product_id` yoxdursa tələb olunur. |
| `items[].product_id` | UUID | Şərti | Məhsul; `id` yoxdursa tələb olunur. |
| `items[].quantity` | numeric | Bəli* | Sətir olduqda tələb olunur. |
| `items[].price` | numeric | Bəli* | Sətir olduqda tələb olunur. |
| `items[].unit_id` | UUID / `null` | Xeyr | Ölçü vahidi. |
| `items[].packaging_id` | UUID / `null` | Xeyr | Qablaşdırma. |
| `items[].packaging_quantity` | numeric / `null` | Xeyr | `> 0`. |
| `items[].discount` | numeric / `null` | Xeyr | Numeric dəyər. |
| `items[].taxes` | array | Xeyr | Vergi tətbiqləri. |
| `items[].taxes[].id` | UUID | Bəli* | Unikal tax ID-si. |
| `items[].taxes[].reason_code` | string / `null` | Xeyr | Vergi səbəb kodu. |
| `name` | string / `null` | Xeyr | Sifariş adı/nömrəsi. |
| `user_id` | UUID / `null` | Xeyr | Yaradan istifadəçi. |
| `owner_id` | UUID / `null` | Xeyr | Cavabdeh istifadəçi. |
| `currency_id` | UUID / `null` | Xeyr | Valyuta. |
| `date` | date / `null` | Xeyr | Sifariş tarixi. |
| `description` | string / `null` | Xeyr | Maksimum 300 simvol. |
| `state` | string / `null` | Xeyr | `draft`, `confirmed`, `cancelled`. |
| `global_discount_type` | string / `null` | Xeyr | `percent` və ya `fixed`. |
| `global_discount_value` | numeric / `null` | Xeyr | `>= 0`. |
| `customFields` | object | Xeyr | Tenant custom fields. |

```json
{"supplier_id":"11111111-1111-1111-1111-111111111111","stock_id":"22222222-2222-2222-2222-222222222222","currency_id":"33333333-3333-3333-3333-333333333333","items":[{"product_id":"44444444-4444-4444-4444-444444444444","quantity":10,"price":18}],"global_discount_type":"percent","global_discount_value":2}
```

**Cavab — `200`** — tam Purchase order obyekti: başlıq, supplier/stock/currency əlaqələri, cəmlər, `items`, procurement progress sahələri, `tax_totals`, `ledger_items`, `action_availability`, audit və custom-field sahələri.

## `GET /api/v1/purchase-orders/{purchase_order}`

Bir sifarişi qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_order` | path | UUID | Bəli | Sifariş ID-si. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu konteksti. |

**Cavab — `200`** — tam Purchase order obyekti; `items` məhsul, unit, kateqoriya və şöbə əlaqələri ilə yüklənir.

## `PUT /api/v1/purchase-orders/{purchase_order}`

Sifarişi yeniləyir.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_order` | path | UUID | Bəli | Yenilənəcək sifariş. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

### Request body

`supplier_id`, `stock_id`, `items`, bütün `items[]` sahələri, `name`, `user_id`, `owner_id`, `currency_id`, `date`, `description`, `state`, qlobal discount və `customFields` `POST` body-sindəki tip və qaydalarla qəbul edilir.

**Cavab — `200`** — tam Purchase order obyekti.

## `PATCH /api/v1/purchase-orders/{purchase_order}`

Sifarişi yeniləyir; `PUT` ilə eyni path parametri, request body və `200` response kontraktı tətbiq olunur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_order` | path | UUID | Bəli | Yenilənəcək sifariş. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

## `DELETE /api/v1/purchase-orders/{purchase_order}`

Sifarişi arxivləyir; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchase_order` | path | UUID | Bəli | Silinəcək sifariş. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Cavab — `200`**

```json
{"status":"success","message":"Purchase order archived successfully.","data":null}
```

Bağlı və ya uyğun olmayan state-dəki sənəd `422`/`409` ilə rədd edilə bilər.

## `PATCH /api/v1/purchase-orders/{purchaseOrderId}/state`

Sifarişin biznes state-ni dəyişir.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `purchaseOrderId` | path | UUID | Bəli | Hədəf sifariş. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

### Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `state` | string | Bəli | `draft`, `confirmed`, `cancelled`. |

```json
{"state":"confirmed"}
```

**Cavab — `200`** — tam Purchase order obyekti.

`confirmed` sifarişi tədarük öhdəliyi kimi təsdiqləyir, fiziki stok, valuation və jurnal entry yaratmır. `cancelled` sifarişi ləğv edir. `draft`-a dönüş əvvəl confirmed sifarişi ləğv edir, sonra qaralamaya qaytarır.
