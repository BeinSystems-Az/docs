---
sidebar_position: 2
slug: /api/sales/orders
---

# Satış sifarişləri

Satış sifarişi kommersiya öhdəliyidir. Bütün endpointlər üçün `Authorization: Bearer <token>`, uyğun `sale_orders` icazəsi və `X-Branch-Id` filial konteksti tətbiq edilir. `401`, `403`, `404`, `422`, `503` giriş, icazə, resurs, doğrulama/state və tenant hazırlığı xətalarını bildirir.

## `GET /api/v1/sale-orders`

Sifarişləri səhifələnmiş qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `q` | query | string | Xeyr | Sifariş mətn axtarışı. |
| `page` | query | integer | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | integer | Xeyr | Səhifə ölçüsü. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu filial konteksti. |

**Cavab — `200`**

```json
{"status":"success","data":[{"id":"11111111-1111-1111-1111-111111111111","name":"SO-0001","customer_id":"22222222-2222-2222-2222-222222222222","customer_name":"Demo Müştəri","stock_id":"33333333-3333-3333-3333-333333333333","stock_name":"Əsas anbar","currency_id":"44444444-4444-4444-4444-444444444444","currency_code":"AZN","date":"2026-08-24","expiration_date":null,"state":"draft","state_color":"gray","total_quantity":"2.0000","total_net":"51.0000","total_tax":"9.1800","total_gross":"60.1800","global_discount_type":null,"global_discount_value":null,"created_at":"2026-08-24T10:00:00+00:00","updated_at":"2026-08-24T10:00:00+00:00"}],"links":{},"meta":{"current_page":1,"per_page":25,"total":1}}
```

## `POST /api/v1/sale-orders`

Qaralama satış sifarişi yaradır.

### Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `customer_id` | UUID | Bəli | Customer tipli mövcud tərəfdaş. |
| `stock_id` | UUID | Bəli | Mövcud anbar. |
| `items` | array | Bəli | Minimum bir sətir. |
| `items[].product_id` | UUID | Bəli* | Mövcud məhsul. |
| `items[].quantity` | numeric | Bəli* | `> 0`. |
| `items[].price` | numeric | Bəli* | `>= 0`. |
| `items[].unit_id` | UUID / `null` | Xeyr | Mövcud ölçü vahidi. |
| `items[].packaging_id` | UUID / `null` | Xeyr | Mövcud qablaşdırma. |
| `items[].packaging_quantity` | numeric / `null` | Xeyr | `> 0`. |
| `items[].discount` | numeric / `null` | Xeyr | `>= 0`. |
| `items[].taxes` | array | Xeyr | Vergi tətbiqləri. |
| `items[].taxes[].id` | UUID | Bəli* | Unikal mövcud tax ID-si. |
| `items[].taxes[].reason_code` | string / `null` | Xeyr | Vergi əsaslandırma kodu. |
| `name` | string / `null` | Xeyr | Sifariş nömrəsi/adı. |
| `user_id` | UUID / `null` | Xeyr | Sifarişi yaradan istifadəçi. |
| `currency_id` | UUID / `null` | Xeyr | Valyuta. |
| `date` | date / `null` | Xeyr | Sifariş tarixi. |
| `expiration_date` | date / `null` | Xeyr | Etibarlılıq son tarixi. |
| `description` | string / `null` | Xeyr | Qeyd. |
| `state` | string / `null` | Xeyr | `draft`, `sent`, `sale_order`, `cancelled`. |
| `global_discount_type` | string / `null` | Xeyr | `percent` və ya `fixed`. |
| `global_discount_value` | numeric / `null` | Xeyr | `>= 0`. |

`*` item/tax elementi göndərildikdə tələb olunur.

```json
{"customer_id":"22222222-2222-2222-2222-222222222222","stock_id":"33333333-3333-3333-3333-333333333333","currency_id":"44444444-4444-4444-4444-444444444444","date":"2026-08-24","items":[{"product_id":"55555555-5555-5555-5555-555555555555","quantity":2,"price":25.5,"taxes":[{"id":"66666666-6666-6666-6666-666666666666"}]}]}
```

**Cavab — `201`**

```json
{"status":"success","message":"Sale order created successfully.","data":{"id":"11111111-1111-1111-1111-111111111111","name":"SO-0001","state":"draft","items":[{"id":"22222222-2222-2222-2222-222222222222","product_id":"55555555-5555-5555-5555-555555555555","quantity":"2.0000","price":"25.5000","net_amount":"51.0000","tax_amount":"9.1800","gross_amount":"60.1800"}],"tax_totals":[],"action_availability":{}}}
```

## `GET /api/v1/sale-orders/{sale_order}`

Bir sifarişi qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_order` | path | UUID | Bəli | Sifariş ID-si. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu konteksti. |

**Cavab — `200`** — `POST` response-indəki tam sifariş obyektidir: başlıq, customer/stock/currency əlaqələri, cəmlər, `items`, `tax_totals`, `action_availability`, audit tarixləri.

## `PUT /api/v1/sale-orders/{sale_order}`

Sifarişi yeniləyir.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_order` | path | UUID | Bəli | Yenilənəcək sifariş. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

### Request body

`customer_id`, `stock_id`, `items`, bütün `items[]` sahələri, `name`, `user_id`, `currency_id`, `date`, `expiration_date`, `description`, `state`, `global_discount_type`, `global_discount_value` `POST` endpointindəki tip və qaydalarla qəbul edilir.

**Cavab — `200`** — tam Sale order obyekti. Mövcud state `sale_order` olarsa backend sənədi transaction daxilində draft-a qaytarır, yeniləyir və yenidən təsdiqləyir; validation uğursuz olarsa əvvəlki təsdiqlənmiş sənəd qorunur.

## `PATCH /api/v1/sale-orders/{sale_order}`

Sifarişi yeniləyir; `PUT` ilə eyni path parametri, request body kontraktı və `200` response-u vardır.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_order` | path | UUID | Bəli | Yenilənəcək sifariş. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

## `DELETE /api/v1/sale-orders/{sale_order}`

Sifarişi silir; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_order` | path | UUID | Bəli | Silinəcək sifariş. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Cavab — `200`**

```json
{"status":"success","message":"Sale order deleted successfully.","data":null}
```

Post edilmiş downstream çatdırılma və ya uyğun olmayan state olduqda `422`/`409` qaytarıla bilər.

## `PATCH /api/v1/sale-orders/{sale_order}/state`

Sifarişin biznes state-ni dəyişir.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `sale_order` | path | UUID | Bəli | Hədəf sifariş. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

### Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `state` | string | Bəli | `draft`, `sent`, `sale_order`, `cancelled`. |

```json
{"state":"sale_order"}
```

**Cavab — `200`** — tam Sale order obyekti.

`draft → sent` yalnız kommersiya state-ni dəyişir. `sale_order` sətirləri rezerv edir və bu sifarişdən qaralama delivery stok sənədini yaradır/sinxronlaşdırır; jurnal entry yaratmır. `cancelled` və `draft` açıq rezervi buraxır. Post edilmiş delivery varsa keçid rədd edilir.
