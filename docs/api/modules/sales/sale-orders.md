---
sidebar_position: 2
---

# Sale orders API

Sale order müştəriyə satış öhdəliyidir. Bütün endpointlər `Authorization: Bearer <token>` və filial konteksti üçün `X-Branch-Id` istifadə edir; `sale_orders` üçün uyğun `read`, `create`, `update`, `delete` permission-u tələb olunur.

| Kod | Səbəb |
| --- | --- |
| `401` | JWT və ya tenant istifadəçisi etibarsızdır. |
| `403` | Sale orders permission-u və ya filial icazəsi yoxdur. |
| `404` | `sale_order` UUID-si tapılmır. |
| `422` | Validation və ya icazəsiz state keçidi. |
| `503` | Tenant provisioning hazır deyil. |

## Siyahı

### `GET /api/v1/sale-orders`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `q` | query | string | Xeyr | Sifariş üzrə mətn axtarışı. |
| `page`, `per_page` | query | integer | Xeyr | Pagination. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Filial oxu konteksti. |

`200` response `data` massivində hər sifariş üçün `id`, `name`, `customer_id`, `customer_name`, `stock_id`, `stock_name`, `currency_id`, `currency_code`, `date`, `expiration_date`, `state`, `state_color`, `total_quantity`, `total_net`, `total_tax`, `total_gross`, `global_discount_type`, `global_discount_value`, `created_at`, `updated_at` qaytarır. Bundan əlavə standart `links` və `meta` pagination sahələri gəlir.

## Yaratmaq

### `POST /api/v1/sale-orders`

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `customer_id` | UUID | Bəli | Mövcud `partners` içində customer olmalıdır. |
| `stock_id` | UUID | Bəli | Mövcud anbar. |
| `items` | array | Bəli | Minimum bir sətir. |
| `items[].product_id` | UUID | Bəli | Mövcud məhsul. |
| `items[].quantity` | numeric | Bəli | `> 0`. |
| `items[].price` | numeric | Bəli | `>= 0`. |
| `items[].unit_id`, `items[].packaging_id` | UUID/null | Xeyr | Mövcud unit və packaging. |
| `items[].packaging_quantity` | numeric/null | Xeyr | `> 0`. |
| `items[].discount` | numeric/null | Xeyr | `>= 0`. |
| `items[].taxes[]` | array | Xeyr | Hər elementdə unikal mövcud tax UUID-si və opsional `reason_code`. |
| `name`, `user_id`, `currency_id`, `date`, `expiration_date`, `description` | string/UUID/date/null | Xeyr | Sifariş metadata-sı. |
| `state` | string/null | Xeyr | `draft`, `sent`, `sale_order`, `cancelled`. |
| `global_discount_type` | string/null | Xeyr | `percent` və ya `fixed`. |
| `global_discount_value` | numeric/null | Xeyr | `>= 0`. |

```json
{
  "customer_id": "11111111-1111-1111-1111-111111111111",
  "stock_id": "22222222-2222-2222-2222-222222222222",
  "currency_id": "33333333-3333-3333-3333-333333333333",
  "date": "2026-08-24",
  "items": [{
    "product_id": "44444444-4444-4444-4444-444444444444",
    "quantity": 2,
    "price": 25.50,
    "taxes": [{"id": "55555555-5555-5555-5555-555555555555"}]
  }]
}
```

Uğurlu `201` response-in `data` obyekti siyahı sahələrinə əlavə olaraq `items`, `tax_totals` və `action_availability` qaytarır. Hər `items[]` sətirində `id`, `product_id`, `product_name`, `unit_id`, `unit_name`, `quantity`, `price`, `discount`, `subtotal`, `net_amount`, `tax_amount`, `gross_amount`, `taxes` və `applications` olur.

```json
{
  "status": "success",
  "message": "Sale order created successfully.",
  "data": {"id":"66666666-6666-6666-6666-666666666666","state":"draft","items":[]}
}
```

## Oxumaq, yeniləmək və silmək

### `GET /api/v1/sale-orders/{sale_order}`

`sale_order` UUID path parametridir; body yoxdur. `200` response yaratma response-indəki tam order kontraktını qaytarır.

### `PUT /api/v1/sale-orders/{sale_order}` və `PATCH /api/v1/sale-orders/{sale_order}`

Path parametri UUID-dir, request body `POST` ilə eynidir. Mövcud state `sale_order` olduqda backend sənədi əvvəl `draft`-a qaytarır, yeniləyir və yenidən `sale_order` olaraq təsdiqləyir. Bu səbəbdən uğursuz validation-da əvvəlki təsdiqlənmiş sənəd qorunur. Uğurlu response `200` və tam order object-dir.

### `DELETE /api/v1/sale-orders/{sale_order}`

Body yoxdur. `200` response:

```json
{"status":"success","message":"Sale order deleted successfully.","data":null}
```

Post edilmiş downstream çatdırılma və ya qaydaya zidd state olduqda silmə `422`/`409` ilə rədd edilə bilər.

## State keçidi

### `PATCH /api/v1/sale-orders/{sale_order}/state`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_order` | path | UUID | Bəli | Hədəf sifariş. |
| `state` | body | string | Bəli | `draft`, `sent`, `sale_order`, `cancelled`. |

```json
{"state":"sale_order"}
```

`draft → sent` yalnız kommersiya vəziyyətini dəyişir. `→ sale_order` sifariş sətirlərini rezerv edir və mənşəyi bu sifariş olan qaralama delivery stock document yaradır/sinxronlaşdırır. Bu keçid jurnal entry yaratmır. `→ cancelled` və ya `→ draft` açıq rezervi buraxır; artıq post edilmiş delivery varsa backend keçidi rədd edir. Uğurlu `200` response tam order object-dir.
