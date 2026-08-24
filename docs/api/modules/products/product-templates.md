---
sidebar_position: 5
---

# Product templates API

Product template variantlı məhsullar üçün master şablondur. JWT/filial konteksti tələb olunur. Bütün detail endpointlərdə `{id}` UUID-dir; tapılmadıqda `404`, validation-da `422` qaytarılır.

## Endpointlər

| Metod | URL | Body | Uğurlu cavab |
| --- | --- | --- | --- |
| `GET` | `/api/v1/product-templates?query=&page=&per_page=` | Yoxdur | `200`, pagination |
| `POST` | `/api/v1/product-templates` | Template body | `201`, Template object |
| `GET` | `/api/v1/product-templates/{product_template}` | Yoxdur | `200`, Template object |
| `PUT`, `PATCH` | `/api/v1/product-templates/{product_template}` | Template body | `200`, Template object |
| `DELETE` | `/api/v1/product-templates/{product_template}` | Yoxdur | `200`, `data:null` |

## Template body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `name` | string | Bəli | Maksimum 255 simvol. |
| `type` | integer/null | Xeyr | `1`, `2`, `3`. |
| `category_id`, `unit_id` | UUID/null | Xeyr | Mövcud category/unit. |
| `price` | numeric/null | Xeyr | `>= 0`. |
| `tracking` | string/null | Xeyr | `none`, `lot`, `serial`. |
| `description`, `image` | string/null | Xeyr | Təsvir və şəkil dəyəri. |
| `active` | boolean | Xeyr | Aktivlik. |
| `customFields` | object | Xeyr | Tenant custom fields. |

```json
{"name":"Arabica qəhvə","type":1,"tracking":"lot","price":25.5,"active":true}
```

Response `data`: `id`, `name`, `type`, category/unit id və adları, `price`, `tracking`, `description`, `active`, `image`, `variants_count`, `created_at`, `updated_at` və custom fields. Şablon əməliyyatı stok/jurnal təsiri yaratmır.
