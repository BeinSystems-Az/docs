---
title: Platform və idarəetmə
---

# Platform və idarəetmə

Bu səhifə aktiv ERP API route-larının statik referansıdır. İdentifikatorlar ayrıca qeyd edilmədikdə UUID-dir.

## `/api/v1/authorization/audit`

### `GET` — Authorization: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `authorization.audit`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/authorization/catalog`

### `GET` — Authorization: catalog

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `authorization.catalog`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/branches`

### `GET` — Branches: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `branches.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Branches: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `branches.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/branches/{branch}`

### `GET` — Branches: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `branches.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `branch` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Branches: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `branches.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `branch` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Branches: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `branches.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `branch` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Branches: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `branches.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `branch` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/branches/{branch}/products/{product}/settings`

### `PUT` — Api/V1/Branches/\{Branch\}/Products/\{Product\}/Settings: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `branch` | path | Bəli | Resursun UUID identifikatoru. |
| `product` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Api/V1/Branches/\{Branch\}/Products/\{Product\}/Settings: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `branch` | path | Bəli | Resursun UUID identifikatoru. |
| `product` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/bulk/{documentType}/actions`

### `GET` — Bulk: availableActions

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `bulk.actions.list`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `documentType` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Bulk: executeBulkAction

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `bulk.actions.execute`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `documentType` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/bulk/{documentType}/edit`

### `POST` — Bulk: executeBulkEdit

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `bulk.edit.execute`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `documentType` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/dashboards`

### `GET` — Dashboards: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `dashboards.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Dashboards: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `dashboards.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/dashboards/{dashboard}`

### `GET` — Dashboards: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `dashboards.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `dashboard` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Dashboards: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `dashboards.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `dashboard` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Dashboards: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `dashboards.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `dashboard` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/dashboards/{dashboard}/clone`

### `POST` — Dashboards: Klonla

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `dashboards.clone`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `dashboard` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/dashboards/{dashboard}/data`

### `POST` — Dashboards: data

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `dashboards.data`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `dashboard` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/dashboards/{dashboard}/layout`

### `PUT` — Dashboards: saveLayout

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `dashboards.layout`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `dashboard` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/dashboards/{dashboard}/set-default`

### `POST` — Dashboards: setDefault

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `dashboards.set-default`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `dashboard` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/dashboards/{dashboard}/widgets`

### `POST` — Dashboards: addWidget

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `dashboards.widgets.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `dashboard` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/dashboards/{dashboard}/widgets/{widget}`

### `PATCH` — Dashboards: updateWidget

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `dashboards.widgets.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `dashboard` | path | Bəli | Resursun UUID identifikatoru. |
| `widget` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Dashboards: deleteWidget

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `dashboards.widgets.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `dashboard` | path | Bəli | Resursun UUID identifikatoru. |
| `widget` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/datasets`

### `GET` — Datasets: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `datasets.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Datasets: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `datasets.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/datasets/{dataset}`

### `GET` — Datasets: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `datasets.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `dataset` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Datasets: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `datasets.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `dataset` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/document-numbering/configurations`

### `GET` — Document Numbering: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `document-numbering.configurations.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/document-numbering/configurations/{document_type}`

### `PUT` — Document Numbering: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `document-numbering.configurations.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `document_type` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/documents/{document_type}/{id}/name`

### `PATCH` — Documents: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `documents.name.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `document_type` | path | Bəli | Resursun UUID identifikatoru. |
| `id` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/documents/{resource}/{id}/related-documents`

### `GET` — Documents: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `documents.related.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `resource` | path | Bəli | Resursun UUID identifikatoru. |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/fields`

### `POST` — Fields: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `fields.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/fields/{field}`

### `DELETE` — Fields: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `fields.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `field` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Fields: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `fields.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `field` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/forms/{resource}/onchange`

### `POST` — Forms: operation

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `forms.onchange`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `resource` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/layout/menu`

### `GET` — Layout: getMenu

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `layout.menu`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/layout/menu/config`

### `GET` — Layout: getMenuConfiguration

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `layout.menu.config`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Layout: saveMenuConfiguration

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `layout.menu.config.save`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/layout/menu/groups`

### `POST` — Layout: createMenuGroup

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `layout.menu.groups.create`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/layout/menu/groups/{group_id}`

### `PATCH` — Layout: updateMenuGroup

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `layout.menu.groups.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `group_id` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Layout: deleteMenuGroup

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `layout.menu.groups.delete`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `group_id` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/layout/menu/{navigation_menu_id}`

### `PATCH` — Layout: updateMenuSettings

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `layout.menu.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `navigation_menu_id` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/lists`

### `POST` — Lists: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `lists.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Lists: Sinxronlaşdır

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `lists.sync`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/lists/item/{id}`

### `GET` — Lists: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `lists.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/lists/{field_id}`

### `GET` — Lists: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `lists.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `field_id` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Lists: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `lists.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `field_id` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Lists: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `lists.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `field_id` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/me/branches`

### `GET` — Me: mine

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `me.branches`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/me/permissions`

### `GET` — Me: permissions

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `me.permissions`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/page-schema/{pageKey}`

### `GET` — Page Schema: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `page-schema.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `pageKey` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/permissions`

### `GET` — Permissions: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `permissions.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/permissions/{permission}`

### `GET` — Permissions: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `permissions.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `permission` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/regions`

### `POST` — Regions: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `regions.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/regions/{region}`

### `PUT` — Regions: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `regions.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `region` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Regions: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `regions.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `region` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/roles`

### `GET` — Roles: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `roles.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Roles: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `roles.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `guard_name` | string | — |
| `permissions` | array | — |
| `rules` | array | — |
| `expected_version` | number | — |
| `comment` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/roles/{role}`

### `GET` — Roles: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `roles.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `role` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Roles: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `roles.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `role` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `guard_name` | string | — |
| `permissions` | array | — |
| `rules` | array | — |
| `expected_version` | number | — |
| `comment` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Roles: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `roles.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `role` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `guard_name` | string | — |
| `permissions` | array | — |
| `rules` | array | — |
| `expected_version` | number | — |
| `comment` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Roles: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `roles.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `role` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/settings`

### `GET` — Settings: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `settings.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Settings: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `settings.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/settings/posting-readiness`

### `GET` — Settings: postingReadiness

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `settings.posting-readiness`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/tenant/provisioning`

### `GET` — Tenant: provisioning

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `tenant.provisioning`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Public

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/tenant/register`

### `POST` — Tenant: register

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `tenant.register`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Public

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/tenant/{id}`

### `DELETE` — Tenant: delete

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `tenant.delete`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/users`

### `GET` — Users: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `users.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Users: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `users.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/users/{user}`

### `GET` — Users: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `users.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `user` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Users: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `users.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `user` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Users: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `users.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `user` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Users: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `users.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `user` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/users/{user}/authorization`

### `GET` — Users: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `users.authorization.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `user` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Users: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `users.authorization.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `user` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/view-schema/filter-templates`

### `POST` — Filter Templates: addFilterTemplate

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `filter-templates.add`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/view-schema/filter-templates/{id}`

### `DELETE` — Filter Templates: deleteFilterTemplate

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `filter-templates.delete`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Filter Templates: editFilterTemplate

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `filter-templates.edit`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/view-schema/{viewName}`

### `GET` — View Schema: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `view-schema.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `viewName` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — View Schema: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `view-schema.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `viewName` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/view-schema/{viewName}/reset`

### `POST` — View Schema: resetViewSettings

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `view-schema.reset`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `viewName` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

