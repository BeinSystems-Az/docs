---
sidebar_position: 7
slug: /api/catalog/product-attributes
---

# Məhsul atributları

Atribut məhsul variantının xüsusiyyətidir. Bu master-data əməliyyatları stok və jurnal entry yaratmır. Bütün endpointlər Bearer token, products permission-u və filial konteksti tələb edir.

## Məhsul atributlarını siyahıla

`GET /api/v1/product-attributes`

Atributları qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `query` | query | string | Xeyr | Ad üzrə axtarış. |
| `paginate` | query | boolean | Xeyr | `false` olduqda `data` birbaşa array-dir; əks halda pagination qaytarılır. |
| `page` | query | integer | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | integer | Xeyr | Səhifə ölçüsü. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu konteksti. |

**Cavab — `200`**

```json
{"status":"success","data":[{"id":"11111111-1111-1111-1111-111111111111","name":"Rəng","display_type":"color","values":[{"id":"22222222-2222-2222-2222-222222222222","name":"Qara","hex_color":"#111111"}],"created_at":"2026-08-24T10:00:00+00:00","updated_at":"2026-08-24T10:00:00+00:00"}],"links":{},"meta":{"current_page":1,"per_page":25,"total":1}}
```

## Məhsul atributu yarat

`POST /api/v1/product-attributes`

Atribut yaradır.

### Request body

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `name` | string | Bəli | Maksimum 100 simvol; tenant daxilində unikaldır. |
| `display_type` | string | Bəli | `select`, `radio` və ya `color`. |
| `values` | array / `null` | Xeyr | Atribut dəyərləri. |
| `values[].id` | UUID / `null` | Xeyr | Mövcud dəyəri yeniləmək üçün ID. |
| `values[].name` | string | Bəli* | Maksimum 100 simvol. |
| `values[].hex_color` | string / `null` | Xeyr | Maksimum 20 simvol. |

`*` `values` massivində element olduqda tələb olunur.

```json
{"name":"Rəng","display_type":"color","values":[{"name":"Qara","hex_color":"#111111"}]}
```

**Cavab — `200`** — tam Attribute obyekti.

## Məhsul atributunu oxu

`GET /api/v1/product-attributes/{product_attribute}`

Bir atributu qaytarır; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product_attribute` | path | UUID | Bəli | Atribut ID-si. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Oxu konteksti. |

**Cavab — `200`** — `id`, `name`, `display_type`, `values[]`, `created_at`, `updated_at` olan Attribute obyekti.

## Məhsul atributunu tam yenilə

`PUT /api/v1/product-attributes/{product_attribute}`

Atributu yeniləyir.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product_attribute` | path | UUID | Bəli | Yenilənəcək atribut. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

### Request body

`name`, `display_type`, `values`, `values[].id`, `values[].name`, `values[].hex_color` `POST` body-sindəki tip və qaydalarla qəbul olunur.

**Cavab — `200`** — tam Attribute obyekti.

## Məhsul atributunu qismən yenilə

`PATCH /api/v1/product-attributes/{product_attribute}`

Atributu yeniləyir; `PUT` ilə eyni path parametri, request body və `200` response kontraktı tətbiq olunur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product_attribute` | path | UUID | Bəli | Yenilənəcək atribut. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

## Məhsul atributunu sil

`DELETE /api/v1/product-attributes/{product_attribute}`

Atributu silir; request body yoxdur.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product_attribute` | path | UUID | Bəli | Silinəcək atribut. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma konteksti. |

**Cavab — `200`**

```json
{"status":"success","message":"Product attribute deleted successfully.","data":null}
```
