---
sidebar_position: 2
---

# Purchase orders API

Purchase order təchizatçıya verilən kommersiya sifarişidir. Bütün operation-lar Bearer JWT, `X-Branch-Id` və `purchase_orders` permission-u tələb edir. Authentication/permission xətası `401`/`403`, tapılmayan `purchase_order` `404`, validation və state qaydası `422`, provisioning isə `503` qaytarır.

## Siyahı

### `GET /api/v1/purchase-orders`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `q` | query | string | Xeyr | Sifariş axtarışı. |
| `page`, `per_page` | query | integer | Xeyr | Pagination. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Filial oxu konteksti. |

`200` cavabında `data[]`, `links`, `meta` olur. List elementinin sahələri `id`, `name`, user/owner, supplier, stock, branch, currency, cəmlər, global discount, `description`, `state`, `states`, `version`, `date`, audit tarixləri və tenant custom fields-dir.

## Yaratmaq və yeniləmək

### `POST /api/v1/purchase-orders`

### `PUT|PATCH /api/v1/purchase-orders/{purchase_order}`

| Sahə | Tip | Create tələbi | Qayda |
| --- | --- | --- | --- |
| `supplier_id` | UUID | Bəli | Mövcud supplier tərəfdaş. |
| `stock_id` | UUID | Bəli | Təyinat anbarı. |
| `items` | array | Xeyr | Hər sətir məhsul və ya mövcud item identifikatoru daşıyır. |
| `items[].product_id` / `items[].id` | UUID | Şərti | Sətirdə onlardan biri tələb olunur. |
| `items[].quantity`, `items[].price` | numeric | Sətir varsa bəli | Quantity və price tələb olunur. |
| `items[].unit_id`, `packaging_id` | UUID/null | Xeyr | Packaging mövcud olmalıdır. |
| `items[].packaging_quantity` | numeric/null | Xeyr | `> 0`. |
| `items[].discount` | numeric/null | Xeyr | Numeric. |
| `items[].taxes[]` | array | Xeyr | Unikal tax UUID-si, opsional `reason_code`. |
| `name`, `user_id`, `owner_id`, `currency_id`, `date`, `description` | müxtəlif | Xeyr | Metadata; description maksimum 300 simvol. |
| `state` | string/null | Xeyr | `draft`, `confirmed`, `cancelled`. |
| `global_discount_type`, `global_discount_value` | string/numeric/null | Xeyr | `percent`/`fixed`, dəyər `>=0`. |
| `customFields` | object | Xeyr | Tenant custom field konfiqurasiyasına uyğun. |

```json
{
  "supplier_id":"11111111-1111-1111-1111-111111111111",
  "stock_id":"22222222-2222-2222-2222-222222222222",
  "currency_id":"33333333-3333-3333-3333-333333333333",
  "items":[{"product_id":"44444444-4444-4444-4444-444444444444","quantity":10,"price":18}],
  "global_discount_type":"percent",
  "global_discount_value":2
}
```

Create və update uğurlu olduqda `200` qaytarılır. `data`-da siyahı sahələrinə əlavə olaraq `items[]`, procurement miqdar/progress sahələri, `tax_totals`, `ledger_items` və `action_availability` var. Item response məhsul/unit əlaqələrini, miqdar, qiymət, discount, vergi tətbiqləri və cəmləri daşıyır.

## Oxumaq və silmək

### `GET /api/v1/purchase-orders/{purchase_order}`

Path UUID-dir, request body yoxdur. `200` response yuxarıdakı tam order kontraktıdır; `items` məhsul, unit və category/department əlaqələri ilə yüklənir.

### `DELETE /api/v1/purchase-orders/{purchase_order}`

Body yoxdur. Uğurlu cavab:

```json
{"status":"success","message":"Purchase order archived successfully.","data":null}
```

Bağlı və ya icazəsiz state-də silmə `422`/`409` ilə rədd edilə bilər.

## State keçidi

### `PATCH /api/v1/purchase-orders/{purchaseOrderId}/state`

| Sahə | Yer | Tip | Tələb | Dəyər |
| --- | --- | --- | --- | --- |
| `purchaseOrderId` | path | UUID | Bəli | Hədəf sifariş. |
| `state` | body | string | Bəli | `draft`, `confirmed`, `cancelled`. |

```json
{"state":"confirmed"}
```

`confirmed` sifarişi tədarük öhdəliyi kimi təsdiqləyir; fiziki stok, valuation və jurnal entry yaratmır. `cancelled` sifarişi ləğv edir. `draft`-a dönüş üçün backend əvvəl confirmed sifarişi ləğv edir, sonra qaralama edir. Uğurlu `200` cavabı tam purchase order object-dir.
