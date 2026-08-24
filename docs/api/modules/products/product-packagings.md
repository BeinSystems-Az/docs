---
sidebar_position: 6
---

# Product packagings API

Qablaşdırma məhsulun inventar vahidi ilə satış/alış vahidi arasındakı çevirməni saxlayır. JWT və filial konteksti tələb olunur.

## Endpointlər

| Metod | URL | Parametr/body | Uğurlu cavab |
| --- | --- | --- | --- |
| `GET` | `/api/v1/product-packagings?product_id=&query=&page=&per_page=` | Body yoxdur | `200`, pagination |
| `POST` | `/api/v1/product-packagings` | Packaging body | `201`, Packaging object |
| `GET` | `/api/v1/product-packagings/{product_packaging}` | Body yoxdur | `200`, Packaging object |
| `PUT`, `PATCH` | `/api/v1/product-packagings/{product_packaging}` | Packaging body | `200`, Packaging object |
| `DELETE` | `/api/v1/product-packagings/{product_packaging}` | Body yoxdur | `200`, `data:null` |

`product_id` məhsula görə filter, `query` mətn filteridir. `product_packaging` UUID path parametridir.

## Packaging body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `product_id`, `unit_id` | UUID | Bəli | Mövcud məhsul və unit. |
| `quantity_in_inventory_unit` | numeric | Bəli | `> 0`. |
| `purchase_price`, `sale_price` | numeric | Bəli | `>= 0`. |
| `barcode` | string/null | Xeyr | Maksimum 100 simvol. |
| `active` | boolean | Xeyr | Aktivlik. |

```json
{"product_id":"11111111-1111-1111-1111-111111111111","unit_id":"22222222-2222-2222-2222-222222222222","quantity_in_inventory_unit":12,"purchase_price":18,"sale_price":25.5,"active":true}
```

Response `data`: `id`, `product_id`, `product_name`, `unit_id`, `unit_name`, `quantity_in_inventory_unit`, `purchase_price`, `sale_price`, `inventory_unit_id`, `inventory_unit_name`, `barcode`, `active`, `created_at`, `updated_at`. Qablaşdırma post edilmiş sənədləri dəyişmir; yeni sənəd sətirlərində çevirmə üçün istifadə olunur.
