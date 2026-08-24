---
sidebar_position: 3
---

# Sale receipts API

Sale receipt faktiki satış sənədidir. `sale_receipts` permission-u və JWT/filial konteksti tələb olunur. İcazəsiz sorğu `401`/`403`, tapılmayan `sale_receipt` `404`, validation və state qaydası `422`, hazır olmayan tenant isə `503` qaytarır.

## Endpointlər

| Metod | URL | Məqsəd |
| --- | --- | --- |
| `GET` | `/api/v1/sale-receipts?page=&per_page=` | Pagination ilə siyahı. |
| `POST` | `/api/v1/sale-receipts` | Qaralama qəbz yaratmaq. |
| `GET` | `/api/v1/sale-receipts/{sale_receipt}` | Tam qəbz detalı. |
| `PUT`, `PATCH` | `/api/v1/sale-receipts/{sale_receipt}` | Qaralama qəbzi yeniləmək. |
| `DELETE` | `/api/v1/sale-receipts/{sale_receipt}` | Silmək. |
| `PATCH` | `/api/v1/sale-receipts/{sale_receipt}/state` | `draft`, `posted`, `cancelled` keçidi. |

`GET` body qəbul etmir. `page` və `per_page` query parametridir; `X-Branch-Id` filial header-idir. Siyahı `data[]`, `links`, `meta` qaytarır; list elementində ledger və stok availability genişləndirilməsi yoxdur.

## Yaratmaq və yeniləmək

### `POST /api/v1/sale-receipts`

### `PUT|PATCH /api/v1/sale-receipts/{sale_receipt}`

| Sahə | Tip | Create tələbi | Qayda |
| --- | --- | --- | --- |
| `customer_id` | UUID | Bəli | Customer tərəfdaş. Update-də `sometimes`. |
| `stock_id` | UUID | Bəli* | *Mənbə `sale_order`, `purchase_receipt` və ya `sale_invoice` olmadıqda. |
| `items` | array | Bəli* | Minimum bir sətir; origin istisnası yuxarıdakı kimidir. |
| `origin_type` | string/null | Xeyr | `sale_order`, `purchase_receipt`, `sale_invoice`. |
| `origin_id` | UUID/null | Xeyr | Origin varsa UUID. |
| `currency_id`, `date`, `note` | UUID/date/string/null | Xeyr | `note` maksimum 1000 simvol. |
| `global_discount_type`, `global_discount_value` | string/numeric/null | Xeyr | `percent`/`fixed`, dəyər `>= 0`. |
| `items[].product_id`, `items[].quantity`, `items[].price` | UUID/numeric | Bəli | Məhsul, `quantity > 0`, `price >= 0`. |
| `items[].lot_id`, `unit_id`, `packaging_id`, `packaging_quantity`, `name`, `discount`, `account_id` | müxtəlif | Xeyr | Lot/unit/packaging UUID-ləri; packaging quantity `> 0`; discount `>= 0`. |
| `items[].taxes[]` | array | Xeyr | Tax UUID-si və opsional `reason_code`. |
| `expenses[]` | array | Xeyr | Hər sətirdə `reason_id` və `amount > 0`; opsional partner, account, tax, due date, ref. |

```json
{
  "customer_id":"11111111-1111-1111-1111-111111111111",
  "stock_id":"22222222-2222-2222-2222-222222222222",
  "origin_type":"sale_order",
  "origin_id":"33333333-3333-3333-3333-333333333333",
  "items":[{"product_id":"44444444-4444-4444-4444-444444444444","quantity":2,"price":25.5}]
}
```

Create `201`, update `200` qaytarır. Tam `data` objectində `id`, `name`, `state`, filial/valyuta/müştəri/anbar əlaqələri, `date`, `note`, origin, cəmlər, global discount, `expenses`, `expenses_total`, `tax_totals`, `items`, `ledger_items`, `action_availability`, `created_at`, `updated_at` var. `items[]` elementində məhsul, lot, unit, packaging, quantity/price/discount, taxes/applications və net/tax/gross məbləğləri qaytarılır.

## State keçidi və biznes təsiri

### `PATCH /api/v1/sale-receipts/{sale_receipt}/state`

```json
{"state":"posted"}
```

`state` məcburidir və yalnız `draft`, `posted`, `cancelled` ola bilər. `posted` qəbz stok çıxışını, jurnal entry və debit/credit sətirlərini, həmçinin qəbz xərclərini bir database transaction-da yaradır. Vergilər postdan əvvəl dondurulur. `cancelled` post edilmiş stok/maliyyə nəticəsini revers edir və audit izini saxlayır. `draft`-a dönüş post edilmiş qəbzi əvvəl ləğv edir, sonra expense-ləri qaralamaya qaytarır. Uğurlu `200` response yuxarıdakı tam receipt object-dir.

### `DELETE /api/v1/sale-receipts/{sale_receipt}`

Body yoxdur və uğurlu cavab `{"status":"success","data":null}`-dır. Post edilmiş və ya biznes qaydasına bağlı sənəd silinə bilməz; bu halda `422`/`409` qaytarılır.
