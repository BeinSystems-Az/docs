---
sidebar_position: 3
---

# Categories API

Kateqoriya master məlumatıdır. Bütün endpointlər JWT, `X-Branch-Id` və filial icazəsi tələb edir. `401`, `403`, `404`, `422`, `503` kodları authentication, permission, category tapılmaması, validation və provisioning xəta vəziyyətləridir.

## Endpointlər

| Metod | URL | Request | Uğurlu cavab |
| --- | --- | --- | --- |
| `GET` | `/api/v1/categories?query=&page=&per_page=` | Body yoxdur | `200`, pagination `data[]`, `links`, `meta` |
| `POST` | `/api/v1/categories` | Aşağıdakı Category body | `200`, Category object |
| `GET` | `/api/v1/categories/{category}` | Body yoxdur | `200`, Category object |
| `PUT`, `PATCH` | `/api/v1/categories/{category}` | Category body | `200`, Category object |
| `DELETE` | `/api/v1/categories/{category}` | Body yoxdur | `200`, `data: null` |

`category` path parametri UUID-dir. `query` mətn axtarışı, `page`/`per_page` pagination üçündür.

## Create və update body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `name` | string | Bəli | Maksimum 100 simvol, tenant daxilində unikal. |
| `parent_id` | UUID/null | Xeyr | Ana kateqoriya UUID-si. |
| `active` | boolean | Xeyr | Göndərilərsə boolean. |
| `customFields` | object | Xeyr | Tenant category custom-field tərifi ilə uyğun. |

```json
{"name":"Qəhvə","parent_id":null,"active":true}
```

Category response `data` sahələri: `id`, `name`, `parent_id`, `parent`, `parent_name`, `active`, `created_at`, `updated_at` və tenant custom fields-dir.

```json
{"status":"success","message":"Category created successfully.","data":{"id":"11111111-1111-1111-1111-111111111111","name":"Qəhvə","parent_id":null,"parent":null,"active":true,"created_at":"2026-08-24T10:00:00+00:00","updated_at":"2026-08-24T10:00:00+00:00"}}
```

Delete response `{"status":"success","data":null}`-dır. Category yaratmaq/yeniləmək stok və mühasibat təsiri yaratmır; məhsul kartları həmin kateqoriyaya bağlana bilər.
