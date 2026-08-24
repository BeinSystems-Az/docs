---
sidebar_position: 3
---

# Məhsul yarat

`POST /api/v1/products`

Yeni məhsul kartı yaradır. `Authorization: Bearer <token>` tələb olunur; `X-Branch-Id` opsional yazma kontekstidir.

## Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `name` | string | Bəli | Maksimum 100 simvol; tenant daxilində unikaldır. |
| `category_id` | UUID / null | Xeyr | Mövcud kateqoriya. |
| `department_id` | UUID / null | Xeyr | Mövcud şöbə. |
| `unit_id` | UUID / null | Xeyr | İnventar vahidi. |
| `description` | string / null | Xeyr | Məhsul təsviri. |
| `price` | numeric / null | Xeyr | Standart satış qiyməti. |
| `buy_price` | numeric / null | Xeyr | Standart alış qiyməti. |
| `min_price` | numeric / null | Xeyr | Minimum satış qiyməti. |
| `tax_id` | UUID / null | Xeyr | Vergi. |
| `active` | boolean | Xeyr | Aktivlik. |
| `barcode` | string / null | Xeyr | Maksimum 50 simvol. |
| `packagings` | array | Xeyr | Qablaşdırma sazlamaları. |
| `packagings[].unit_id` | UUID | Bəli* | Qablaşdırma vahidi. |
| `packagings[].quantity_in_inventory_unit` | numeric | Bəli* | `> 0`. |
| `packagings[].purchase_price` | numeric | Bəli* | `>= 0`. |
| `packagings[].sale_price` | numeric | Bəli* | `>= 0`. |

```json
{"name":"Arabica qəhvə 1 kq","category_id":"…","unit_id":"…","price":25.5,"buy_price":18,"active":true}
```

## Cavab — `200`

```json
{"status":"success","message":"Product created successfully.","data":{"id":"…","name":"Arabica qəhvə 1 kq","price":"25.5000","resolved_price":"25.5000","active":true,"packagings":[]}}
```

Master-data əməliyyatıdır: stok, rezerv və jurnal entry yaratmır.
