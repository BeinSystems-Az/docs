---
sidebar_position: 3
slug: /api/catalog/categories
---

# Kateqoriyalar

Kateqoriya məhsul kartları üçün master məlumatıdır; bu endpointlər stok və mühasibat hərəkəti yaratmır. Bütün sorğular `Authorization: Bearer <token>` qəbul edir; uyğun products icazəsi və `X-Branch-Id` filial konteksti tələb olunur. `401`, `403`, `422`, `503` müvafiq olaraq giriş, icazə, doğrulama və tenant hazırlığı xətalarıdır.

## Kateqoriyaları siyahıla

`GET /api/v1/categories`

Kateqoriyaları səhifələnmiş qaytarır. Request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `query` | query | string | Xeyr | Ad üzrə axtarış. |
| `page` | query | integer | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | integer | Xeyr | Səhifə ölçüsü. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu filial konteksti. |

**Cavab — `200`**

```json
{"status":"success","message":"Categories listed successfully.","data":[{"id":"11111111-1111-1111-1111-111111111111","name":"Qəhvə","parent_id":null,"parent":null,"parent_name":null,"active":true,"created_at":"2026-08-24T10:00:00+00:00","updated_at":"2026-08-24T10:00:00+00:00"}],"links":{},"meta":{"current_page":1,"per_page":25,"total":1}}
```

## Kateqoriya yarat

`POST /api/v1/categories`

Yeni kateqoriya yaradır.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma filial konteksti. |

### Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `name` | string | Bəli | Maksimum 100 simvol; tenant daxilində unikaldır. |
| `parent_id` | UUID / `null` | Xeyr | Mövcud ana kateqoriya. |
| `active` | boolean | Xeyr | Aktivlik bayrağı. |
| `customFields` | object | Xeyr | Tenant-in category custom-field tərifi. |

```json
{"name":"Qəhvə","parent_id":null,"active":true}
```

**Cavab — `200`**

```json
{"status":"success","message":"Category created successfully.","data":{"id":"11111111-1111-1111-1111-111111111111","name":"Qəhvə","parent_id":null,"parent":null,"parent_name":null,"active":true,"created_at":"2026-08-24T10:00:00+00:00","updated_at":"2026-08-24T10:00:00+00:00"}}
```

## Kateqoriyanı oxu

`GET /api/v1/categories/{category}`

Bir kateqoriyanı qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `category` | path | UUID | Bəli | Kateqoriya identifikatoru. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu filial konteksti. |

**Cavab — `200`**

```json
{"status":"success","message":"Category retrieved successfully.","data":{"id":"11111111-1111-1111-1111-111111111111","name":"Qəhvə","parent_id":null,"parent":null,"parent_name":null,"active":true,"created_at":"2026-08-24T10:00:00+00:00","updated_at":"2026-08-24T10:00:00+00:00"}}
```

Tapılmadıqda `404` qaytarılır.

## Kateqoriyanı tam yenilə

`PUT /api/v1/categories/{category}`

Kateqoriyanı yeniləyir.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `category` | path | UUID | Bəli | Yenilənəcək kateqoriya. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma filial konteksti. |

### Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `name` | string | Bəli | Maksimum 100 simvol; cari kateqoriya unikal yoxlamadan istisnadır. |
| `parent_id` | UUID / `null` | Xeyr | Ana kateqoriya. |
| `active` | boolean | Xeyr | Aktivlik bayrağı. |
| `customFields` | object | Xeyr | Tenant custom fields. |

**Cavab — `200`** — `POST` cavabındakı tam Category obyektini qaytarır. Məhsul və tarixi sənədlər yenidən hesablanmır.

## Kateqoriyanı qismən yenilə

`PATCH /api/v1/categories/{category}`

Kateqoriyanı yeniləyir; route `PUT` ilə eyni doğrulama, request body və `200` Category response kontraktına malikdir.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `category` | path | UUID | Bəli | Yenilənəcək kateqoriya. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma filial konteksti. |

## Kateqoriyanı sil

`DELETE /api/v1/categories/{category}`

Kateqoriyanı silir; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `category` | path | UUID | Bəli | Silinəcək kateqoriya. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma filial konteksti. |

**Cavab — `200`**

```json
{"status":"success","message":"Category deleted successfully.","data":null}
```

Əlaqəli məhsullara görə silməyə icazə verilməzsə backend `422` və ya `409` qaytara bilər.
