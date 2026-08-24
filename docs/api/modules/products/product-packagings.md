---
sidebar_position: 6
slug: /api/catalog/product-packagings
---

# Qablaşdırmalar

Qablaşdırma məhsulun inventar vahidi ilə alış/satış vahidi arasındakı çevirməni saxlayır. Dəyişiklik tarixi sənədləri yenidən hesablamır. Bütün endpointlər Bearer token, products permission-u və filial konteksti tələb edir.

## `GET /api/v1/product-packagings`

Qablaşdırmaları səhifələnmiş qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product_id` | query | UUID | Xeyr | Məhsula görə filter. |
| `query` | query | string | Xeyr | Mətn axtarışı. |
| `page` | query | integer | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | integer | Xeyr | Səhifə ölçüsü. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu konteksti. |

**Cavab — `200`**

```json
{"status":"success","data":[{"id":"11111111-1111-1111-1111-111111111111","product_id":"22222222-2222-2222-2222-222222222222","product_name":"Arabica qəhvə","unit_id":"33333333-3333-3333-3333-333333333333","unit_name":"Qutu","quantity_in_inventory_unit":"12.0000","purchase_price":"18.0000","sale_price":"25.5000","inventory_unit_id":"44444444-4444-4444-4444-444444444444","inventory_unit_name":"Ədəd","barcode":null,"active":true,"created_at":"2026-08-24T10:00:00+00:00","updated_at":"2026-08-24T10:00:00+00:00"}],"links":{},"meta":{"current_page":1,"per_page":25,"total":1}}
```

## `POST /api/v1/product-packagings`

Qablaşdırma yaradır.

### Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `product_id` | UUID | Bəli | Mövcud məhsul. |
| `unit_id` | UUID | Bəli | Qablaşdırma vahidi. |
| `quantity_in_inventory_unit` | numeric | Bəli | `> 0`. |
| `purchase_price` | numeric | Bəli | `>= 0`. |
| `sale_price` | numeric | Bəli | `>= 0`. |
| `barcode` | string / `null` | Xeyr | Maksimum 100 simvol. |
| `active` | boolean | Xeyr | Aktivlik. |

```json
{"product_id":"22222222-2222-2222-2222-222222222222","unit_id":"33333333-3333-3333-3333-333333333333","quantity_in_inventory_unit":12,"purchase_price":18,"sale_price":25.5,"active":true}
```

**Cavab — `201`** — tam Packaging obyekti.

## `GET /api/v1/product-packagings/{product_packaging}`

Bir qablaşdırmanı qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product_packaging` | path | UUID | Bəli | Qablaşdırma ID-si. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu konteksti. |

**Cavab — `200`** — `GET` siyahısındakı tam Packaging obyekti.

## `PUT /api/v1/product-packagings/{product_packaging}`

Qablaşdırmanı yeniləyir.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product_packaging` | path | UUID | Bəli | Yenilənəcək qablaşdırma. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

### Request body

`product_id`, `unit_id`, `quantity_in_inventory_unit`, `purchase_price`, `sale_price`, `barcode`, `active` sahələri `POST` body-sindəki tip və qaydalarla qəbul olunur.

**Cavab — `200`** — tam Packaging obyekti.

## `PATCH /api/v1/product-packagings/{product_packaging}`

Qablaşdırmanı yeniləyir; `PUT` ilə eyni path parametri, request body və `200` response kontraktı tətbiq olunur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product_packaging` | path | UUID | Bəli | Yenilənəcək qablaşdırma. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

## `DELETE /api/v1/product-packagings/{product_packaging}`

Qablaşdırmanı silir; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product_packaging` | path | UUID | Bəli | Silinəcək qablaşdırma. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Cavab — `200`**

```json
{"status":"success","message":"Product packaging deleted successfully.","data":null}
```
