---
sidebar_position: 4
slug: /api/catalog/units
---

# Ölçü vahidləri

Ölçü vahidi master məlumatıdır. Bütün sorğular Bearer token, products icazəsi və filial kontekstindən istifadə edir; əsas xətalar `401`, `403`, `404`, `422`, `503`-dür. Vahid dəyişikliyi post edilmiş sənəd sətirlərini yenidən hesablamır.

## `GET /api/v1/units`

Vahidləri səhifələnmiş qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `query` | query | string | Xeyr | Ad üzrə axtarış. |
| `filter[product_id]` | query | UUID | Xeyr | Verildikdə məhsulun aktiv qablaşdırma vahidləri və inventar vahidi. |
| `page` | query | integer | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | integer | Xeyr | Səhifə ölçüsü. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu konteksti. |

**Cavab — `200`**

```json
{"status":"success","message":"Units listed successfully.","data":[{"id":"11111111-1111-1111-1111-111111111111","name":"Qutu","relative_unit_id":"22222222-2222-2222-2222-222222222222","relative_unit_name":"Ədəd","relative_unit":{"id":"22222222-2222-2222-2222-222222222222","name":"Ədəd"},"relative_factor":"12.0000","factor":"12.0000","rounding_precision":"1.0000","sequence":10,"active":true,"created_at":"2026-08-24T10:00:00+00:00","updated_at":"2026-08-24T10:00:00+00:00"}],"links":{},"meta":{"current_page":1,"per_page":25,"total":1}}
```

## `POST /api/v1/units`

Yeni ölçü vahidi yaradır.

### Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `name` | string | Bəli | Maksimum 100 simvol; tenant daxilində unikaldır. |
| `relative_unit_id` | UUID / `null` | Xeyr | Mövcud vahid; cari vahid özü ola bilməz. |
| `relative_factor` | numeric / `null` | Xeyr | Göndərilərsə `> 0`. |
| `rounding_precision` | numeric / `null` | Xeyr | Göndərilərsə `> 0`. |
| `sequence` | integer / `null` | Xeyr | Göndərilərsə `>= 0`. |
| `active` | boolean | Xeyr | Aktivlik. |
| `customFields` | object | Xeyr | Tenant custom fields. |

```json
{"name":"Qutu","relative_unit_id":"22222222-2222-2222-2222-222222222222","relative_factor":12,"rounding_precision":1,"sequence":10,"active":true}
```

**Cavab — `201`** — `GET` response-indəki Unit obyektini `data` daxilində qaytarır.

## `GET /api/v1/units/{unit}`

Bir vahidi qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `unit` | path | UUID | Bəli | Ölçü vahidi ID-si. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu konteksti. |

**Cavab — `200`** — `data` daxilində `id`, `name`, `relative_unit_id`, `relative_unit_name`, `relative_unit`, `relative_factor`, `factor`, `rounding_precision`, `sequence`, `active`, `created_at`, `updated_at` qaytarılır.

## `PUT /api/v1/units/{unit}`

Vahidi yeniləyir.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `unit` | path | UUID | Bəli | Yenilənəcək vahid. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

### Request body

`name`, `relative_unit_id`, `relative_factor`, `rounding_precision`, `sequence`, `active` və `customFields` sahələri `POST` body-sindəki tip və qaydalarla qəbul olunur; `name` tələb olunur və cari vahid unikal yoxlamadan istisnadır.

**Cavab — `200`** — tam Unit obyekti.

## `PATCH /api/v1/units/{unit}`

Vahidi yeniləyir; `PUT` ilə eyni path parametri, request body doğrulaması və `200` Unit response kontraktı tətbiq olunur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `unit` | path | UUID | Bəli | Yenilənəcək vahid. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

## `DELETE /api/v1/units/{unit}`

Vahidi silir; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `unit` | path | UUID | Bəli | Silinəcək vahid. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Cavab — `200`**

```json
{"status":"success","message":"Unit deleted successfully.","data":null}
```
