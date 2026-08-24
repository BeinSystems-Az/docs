---
sidebar_position: 4
---

# Units API

Ölçü vahidi master məlumatıdır. JWT və `X-Branch-Id` tələb olunur; `401`, `403`, `404`, `422`, `503` müvafiq olaraq credential, permission, unit, validation və provisioning xətalarını bildirir.

## Endpointlər

| Metod | URL | Parametr və body | Uğurlu cavab |
| --- | --- | --- | --- |
| `GET` | `/api/v1/units?query=&filter[product_id]=&page=&per_page=` | Body yoxdur | `200`, pagination |
| `POST` | `/api/v1/units` | Unit body | `201`, Unit object |
| `GET` | `/api/v1/units/{unit}` | Body yoxdur | `200`, Unit object |
| `PUT`, `PATCH` | `/api/v1/units/{unit}` | Unit body | `200`, Unit object |
| `DELETE` | `/api/v1/units/{unit}` | Body yoxdur | `200`, `data:null` |

`query` mətn axtarışıdır. `filter[product_id]` verildikdə yalnız məhsulun aktiv packaging vahidləri və inventar vahidi qaytarılır. `unit` UUID path parametridir.

## Unit body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `name` | string | Bəli | Maksimum 100 simvol, unikal. |
| `relative_unit_id` | UUID/null | Xeyr | Mövcud unit; cari unit özü ola bilməz. |
| `relative_factor`, `rounding_precision` | numeric/null | Xeyr | `> 0`. |
| `sequence` | integer/null | Xeyr | `>= 0`. |
| `active` | boolean | Xeyr | Aktivlik. |
| `customFields` | object | Xeyr | Tenant custom fields. |

```json
{"name":"Qutu","relative_unit_id":"11111111-1111-1111-1111-111111111111","relative_factor":12,"rounding_precision":1,"sequence":10,"active":true}
```

Unit response sahələri: `id`, `name`, `relative_unit_id`, `relative_unit_name`, `relative_unit:{id,name}`, `relative_factor`, `factor`, `rounding_precision`, `sequence`, `active`, `created_at`, `updated_at` və custom fields.

Unit dəyişmək keçmiş sənəd sətirlərini yenidən hesablamır; yalnız gələcək məhsul/sənəd seçimlərinə təsir edir.
