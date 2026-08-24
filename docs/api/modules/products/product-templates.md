---
sidebar_position: 5
slug: /api/catalog/product-templates
---

# Məhsul şablonları

Şablon variantlı məhsullar üçün master məlumatıdır; stok və jurnal entry yaratmır. Sorğular Bearer token, products permission-u və filial konteksti tələb edir.

## Məhsul şablonlarını siyahıla

`GET /api/v1/product-templates`

Şablonları səhifələnmiş qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `query` | query | string | Xeyr | Ad üzrə axtarış. |
| `page` | query | integer | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | integer | Xeyr | Səhifə ölçüsü. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu konteksti. |

**Cavab — `200`**

```json
{"status":"success","data":[{"id":"11111111-1111-1111-1111-111111111111","name":"Arabica qəhvə","type":1,"category_id":null,"category_name":null,"unit_id":null,"unit_name":null,"price":"25.5000","tracking":"lot","description":null,"active":true,"image":null,"variants_count":0,"created_at":"2026-08-24T10:00:00+00:00","updated_at":"2026-08-24T10:00:00+00:00"}],"links":{},"meta":{"current_page":1,"per_page":25,"total":1}}
```

## Məhsul şablonu yarat

`POST /api/v1/product-templates`

Şablon yaradır.

### Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `name` | string | Bəli | Maksimum 255 simvol. |
| `type` | integer / `null` | Xeyr | `1`, `2` və ya `3`. |
| `category_id` | UUID / `null` | Xeyr | Mövcud kateqoriya. |
| `unit_id` | UUID / `null` | Xeyr | Mövcud ölçü vahidi. |
| `price` | numeric / `null` | Xeyr | Göndərilərsə `>= 0`. |
| `tracking` | string / `null` | Xeyr | `none`, `lot` və ya `serial`. |
| `description` | string / `null` | Xeyr | Təsvir. |
| `image` | string / `null` | Xeyr | Şəkil dəyəri/ünvanı. |
| `active` | boolean | Xeyr | Aktivlik. |
| `customFields` | object | Xeyr | Tenant custom fields. |

```json
{"name":"Arabica qəhvə","type":1,"tracking":"lot","price":25.5,"active":true}
```

**Cavab — `201`** — `GET` siyahısındakı tam Template obyekti `data` daxilində qaytarılır.

## Məhsul şablonunu oxu

`GET /api/v1/product-templates/{product_template}`

Bir şablonu qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product_template` | path | UUID | Bəli | Şablon ID-si. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu konteksti. |

**Cavab — `200`** — tam Template obyekti; tapılmadıqda `404`.

## Məhsul şablonunu tam yenilə

`PUT /api/v1/product-templates/{product_template}`

Şablonu yeniləyir.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product_template` | path | UUID | Bəli | Yenilənəcək şablon. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

### Request body

`name`, `type`, `category_id`, `unit_id`, `price`, `tracking`, `description`, `image`, `active`, `customFields` `POST` body-sindəki tip və qaydalarla qəbul olunur; `name` tələb olunur.

**Cavab — `200`** — tam Template obyekti.

## Məhsul şablonunu qismən yenilə

`PATCH /api/v1/product-templates/{product_template}`

Şablonu yeniləyir; `PUT` ilə eyni path parametri, body kontraktı və `200` Template response-u tətbiq olunur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product_template` | path | UUID | Bəli | Yenilənəcək şablon. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

## Məhsul şablonunu sil

`DELETE /api/v1/product-templates/{product_template}`

Şablonu silir; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product_template` | path | UUID | Bəli | Silinəcək şablon. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Cavab — `200`**

```json
{"status":"success","message":"Product template deleted successfully.","data":null}
```
