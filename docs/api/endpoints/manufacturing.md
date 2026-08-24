---
title: İstehsal
---

# İstehsal

Bu səhifə aktiv ERP API route-larının statik referansıdır. İdentifikatorlar ayrıca qeyd edilmədikdə UUID-dir.

## `/api/v1/manufacturing/boms`

### `GET` — Manufacturing: Siyahı

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.boms.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Manufacturing: Yarat

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.boms.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/boms/{bom}`

### `GET` — Manufacturing: Detalı göstər

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.boms.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `bom` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Manufacturing: Yenilə

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.boms.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `bom` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Manufacturing: Yenilə

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.boms.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `bom` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Manufacturing: Sil

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.boms.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `bom` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/boms/{bom}/activate`

### `POST` — Manufacturing: Aktivləşdir

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.boms.activate`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `bom` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/boms/{bom}/archive`

### `POST` — Manufacturing: Arxivlə

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.boms.archive`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `bom` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/orders`

### `GET` — Manufacturing: Siyahı

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Manufacturing: Yarat

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/orders/{order}`

### `GET` — Manufacturing: Detalı göstər

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Manufacturing: Yenilə

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Manufacturing: Yenilə

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Manufacturing: Sil

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/orders/{order}/cancel`

### `POST` — Manufacturing: transition

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.cancel`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/orders/{order}/close`

### `POST` — Manufacturing: transition

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.close`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/orders/{order}/complete`

### `POST` — Manufacturing: transition

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.complete`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/orders/{order}/confirm`

### `POST` — Manufacturing: transition

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.confirm`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/orders/{order}/consume`

### `POST` — Manufacturing: consume

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.consume`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/orders/{order}/operations/{operation}/complete`

### `POST` — Manufacturing: operate

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.operations.complete`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `operation` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/orders/{order}/operations/{operation}/pause`

### `POST` — Manufacturing: operate

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.operations.pause`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `operation` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/orders/{order}/operations/{operation}/start`

### `POST` — Manufacturing: operate

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.operations.start`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `operation` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/orders/{order}/produce`

### `POST` — Manufacturing: produce

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.produce`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/orders/{order}/start`

### `POST` — Manufacturing: transition

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.orders.start`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/reports/order-cost`

### `GET` — Manufacturing: costQuery

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.reports.order-cost.query`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/reports/order-cost/{order}`

### `GET` — Manufacturing: cost

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.reports.order-cost`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/reports/traceability`

### `GET` — Manufacturing: traceabilityQuery

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.reports.traceability.query`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/reports/traceability/{order}`

### `GET` — Manufacturing: traceability

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.reports.traceability`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/routings`

### `GET` — Manufacturing: Siyahı

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.routings.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Manufacturing: Yarat

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.routings.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/routings/{routing}`

### `GET` — Manufacturing: Detalı göstər

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.routings.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `routing` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Manufacturing: Yenilə

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.routings.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `routing` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Manufacturing: Yenilə

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.routings.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `routing` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Manufacturing: Sil

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.routings.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `routing` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/routings/{routing}/activate`

### `POST` — Manufacturing: Aktivləşdir

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.routings.activate`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `routing` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/routings/{routing}/archive`

### `POST` — Manufacturing: Arxivlə

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.routings.archive`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `routing` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/work-centers`

### `GET` — Manufacturing: Siyahı

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.work-centers.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Manufacturing: Yarat

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.work-centers.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manufacturing/work-centers/{workCenter}`

### `GET` — Manufacturing: Detalı göstər

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.work-centers.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `workCenter` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Manufacturing: Yenilə

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.work-centers.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `workCenter` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Manufacturing: Yenilə

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.work-centers.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `workCenter` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Manufacturing: Sil

İstehsal planlama və icra əməliyyatı. Backend route adı: `manufacturing.work-centers.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `workCenter` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

