---
sidebar_position: 7
---

# Product attributes API

Attribute məhsul variantlarının xüsusiyyətidir. JWT və filial konteksti tələb olunur; `401`, `403`, `404`, `422`, `503` ümumi authentication, permission, resurs, validation və provisioning halları üçün qaytarılır.

## Endpointlər

| Metod | URL | Body | Uğurlu cavab |
| --- | --- | --- | --- |
| `GET` | `/api/v1/product-attributes?query=&paginate=false&page=&per_page=` | Yoxdur | `200`, pagination və ya sadə array |
| `POST` | `/api/v1/product-attributes` | Attribute body | `200`, Attribute object |
| `GET` | `/api/v1/product-attributes/{product_attribute}` | Yoxdur | `200`, Attribute object |
| `PUT`, `PATCH` | `/api/v1/product-attributes/{product_attribute}` | Attribute body | `200`, Attribute object |
| `DELETE` | `/api/v1/product-attributes/{product_attribute}` | Yoxdur | `200`, `data:null` |

`paginate=false` olduqda `data` pagination zərfi olmadan attribute array-dir. Əks halda `links` və `meta` qaytarılır.

## Attribute body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `name` | string | Bəli | Maksimum 100 simvol, tenant daxilində unikal. |
| `display_type` | string | Bəli | `select`, `radio`, `color`. |
| `values` | array/null | Xeyr | Attribute value-ları. |
| `values[].id` | UUID/null | Xeyr | Mövcud attribute value. |
| `values[].name` | string | Şərti | `values` elementində tələb olunur, maksimum 100. |
| `values[].hex_color` | string/null | Xeyr | Maksimum 20 simvol. |

```json
{"name":"Rəng","display_type":"color","values":[{"name":"Qara","hex_color":"#111111"}]}
```

Response `data` sahələri: `id`, `name`, `display_type`, `values:[{id,name,hex_color}]`, `created_at`, `updated_at`. Attribute yaratmaq/yeniləmək stok və jurnal yazılışı yaratmır.
