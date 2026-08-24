---
title: Anbar və stok
---

# Anbar və stok

Bu səhifə aktiv ERP API route-larının statik referansıdır. İdentifikatorlar ayrıca qeyd edilmədikdə UUID-dir.

## `/api/v1/product-suppliers`

### `GET` — Api/V1/Product Suppliers: suppliers

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Api/V1/Product Suppliers: storeSupplier

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/product-suppliers/{productSupplier}`

### `PUT` — Api/V1/Product Suppliers/\{ProductSupplier\}: updateSupplier

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `productSupplier` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Api/V1/Product Suppliers/\{ProductSupplier\}: destroySupplier

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `productSupplier` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-availability/as-of`

### `POST` — Stock Availability: operation

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-availability.as-of`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-documents`

### `GET` — Stock Documents: Siyahı

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-documents.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Stock Documents: Yarat

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-documents.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `type` | string | receipt, delivery, internal_transfer, scrap, inventory_adjustment |
| `stock_id` | string | — |
| `destination_stock_id` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `source_location_id` | string | — |
| `destination_location_id` | string | — |
| `origin_type` | string | — |
| `origin_id` | string | — |
| `note` | string | — |
| `items` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-documents/{stockDocument}/cancel`

### `POST` — Stock Documents: Ləğv et

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-documents.cancel`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stockDocument` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-documents/{stockDocument}/draft`

### `POST` — Stock Documents: Qaralamaya qaytar

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-documents.draft`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stockDocument` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-documents/{stockDocument}/post`

### `POST` — Stock Documents: Post et

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-documents.post`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stockDocument` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-documents/{stock_document}`

### `GET` — Stock Documents: Detalı göstər

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-documents.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stock_document` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Stock Documents: Yenilə

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-documents.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stock_document` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `type` | string | receipt, delivery, internal_transfer, scrap, inventory_adjustment |
| `stock_id` | string | — |
| `destination_stock_id` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `source_location_id` | string | — |
| `destination_location_id` | string | — |
| `origin_type` | string | — |
| `origin_id` | string | — |
| `note` | string | — |
| `items` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Stock Documents: Yenilə

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-documents.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stock_document` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `type` | string | receipt, delivery, internal_transfer, scrap, inventory_adjustment |
| `stock_id` | string | — |
| `destination_stock_id` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `source_location_id` | string | — |
| `destination_location_id` | string | — |
| `origin_type` | string | — |
| `origin_id` | string | — |
| `note` | string | — |
| `items` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Stock Documents: Sil

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-documents.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stock_document` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-landed-costs`

### `POST` — Api/V1/Stock Landed Costs: storeLandedCost

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `GET` — Api/V1/Stock Landed Costs: landedCosts

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-landed-costs/{landedCost}`

### `GET` — Api/V1/Stock Landed Costs/\{LandedCost\}: showLandedCost

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `landedCost` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Api/V1/Stock Landed Costs/\{LandedCost\}: updateLandedCost

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `landedCost` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-landed-costs/{landedCost}/cancel`

### `POST` — Api/V1/Stock Landed Costs/\{LandedCost\}/Cancel: cancelLandedCost

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `landedCost` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-landed-costs/{landedCost}/post`

### `POST` — Api/V1/Stock Landed Costs/\{LandedCost\}/Post: postLandedCost

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `landedCost` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-locations`

### `GET` — Stock Locations: Siyahı

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-locations.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Stock Locations: Yarat

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-locations.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `stock_id` | string | — |
| `parent_id` | string | — |
| `name` | string | — |
| `code` | string | — |
| `usage` | string | internal, supplier, customer, inventory, scrap, transit |
| `active` | boolean | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-locations/{stock_location}`

### `GET` — Stock Locations: Detalı göstər

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-locations.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stock_location` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Stock Locations: Yenilə

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-locations.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stock_location` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `stock_id` | string | — |
| `parent_id` | string | — |
| `name` | string | — |
| `code` | string | — |
| `usage` | string | internal, supplier, customer, inventory, scrap, transit |
| `active` | boolean | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Stock Locations: Yenilə

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-locations.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stock_location` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `stock_id` | string | — |
| `parent_id` | string | — |
| `name` | string | — |
| `code` | string | — |
| `usage` | string | internal, supplier, customer, inventory, scrap, transit |
| `active` | boolean | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Stock Locations: Sil

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-locations.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stock_location` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-lots`

### `GET` — Stock Lots: Siyahı

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-lots.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Stock Lots: Yarat

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-lots.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-lots/{stock_lot}`

### `GET` — Stock Lots: Detalı göstər

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-lots.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stock_lot` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Stock Lots: Yenilə

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-lots.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stock_lot` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Stock Lots: Yenilə

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-lots.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stock_lot` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reorder-rules`

### `GET` — Api/V1/Stock Reorder Rules: rules

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Api/V1/Stock Reorder Rules: storeRule

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reorder-rules/{stockReorderRule}`

### `PUT` — Api/V1/Stock Reorder Rules/\{StockReorderRule\}: updateRule

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stockReorderRule` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Api/V1/Stock Reorder Rules/\{StockReorderRule\}: destroyRule

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stockReorderRule` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-replenishments/preview`

### `POST` — Stock Replenishments: Önizlə

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-replenishments.preview`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-replenishments/purchase-orders`

### `POST` — Stock Replenishments: createOrders

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-replenishments.purchase-orders`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reports/low-stock`

### `GET` — Stock Reports: lowStock

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-reports.low-stock`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reports/on-hand`

### `GET` — Stock Reports: onHand

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-reports.on-hand`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reports/on-hand-by-packaging`

### `GET` — Stock Reports: onHandByPackaging

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-reports.on-hand-by-packaging`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reports/on-hand-by-warehouse`

### `GET` — Stock Reports: onHandByWarehouse

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-reports.on-hand-by-warehouse`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reports/stock-card`

### `GET` — Stock Reports: stockCard

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-reports.stock-card`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reports/storage-duration`

### `GET` — Stock Reports: storageDuration

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-reports.storage-duration`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reports/turnover`

### `GET` — Stock Reports: turnover

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-reports.turnover`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reports/valuation`

### `GET` — Stock Reports: valuation

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock-reports.valuation`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reservation-allocations/{allocation}/options`

### `GET` — Api/V1/Stock Reservation Allocations/\{Allocation\}/Options: allocationOptions

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `allocation` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reservation-allocations/{allocation}/reallocate`

### `POST` — Api/V1/Stock Reservation Allocations/\{Allocation\}/Reallocate: reallocate

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `allocation` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reservations`

### `GET` — Api/V1/Stock Reservations: Siyahı

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reservations/{stockReservation}`

### `GET` — Api/V1/Stock Reservations/\{StockReservation\}: Detalı göstər

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stockReservation` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reservations/{stockReservation}/history`

### `GET` — Api/V1/Stock Reservations/\{StockReservation\}/History: history

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stockReservation` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reservations/{stockReservation}/release`

### `POST` — Api/V1/Stock Reservations/\{StockReservation\}/Release: release

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stockReservation` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-reservations/{stockReservation}/retry`

### `POST` — Api/V1/Stock Reservations/\{StockReservation\}/Retry: retry

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stockReservation` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-revaluations`

### `POST` — Api/V1/Stock Revaluations: storeRevaluation

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `GET` — Api/V1/Stock Revaluations: revaluations

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-revaluations/{revaluation}`

### `GET` — Api/V1/Stock Revaluations/\{Revaluation\}: showRevaluation

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `revaluation` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Api/V1/Stock Revaluations/\{Revaluation\}: updateRevaluation

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `revaluation` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-revaluations/{revaluation}/cancel`

### `POST` — Api/V1/Stock Revaluations/\{Revaluation\}/Cancel: cancelRevaluation

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `revaluation` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stock-revaluations/{revaluation}/post`

### `POST` — Api/V1/Stock Revaluations/\{Revaluation\}/Post: postRevaluation

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `adsız`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `revaluation` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stocks`

### `GET` — Stock: Siyahı

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Stock: Yarat

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `code` | string | — |
| `default_source_location_id` | string | — |
| `default_destination_location_id` | string | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/stocks/{stock}`

### `GET` — Stock: Detalı göstər

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stock` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Stock: Yenilə

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stock` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `code` | string | — |
| `default_source_location_id` | string | — |
| `default_destination_location_id` | string | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Stock: Yenilə

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stock` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `code` | string | — |
| `default_source_location_id` | string | — |
| `default_destination_location_id` | string | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Stock: Sil

Anbar qalığı, hərəkət, rezervasiya və dəyərləndirmə əməliyyatı. Backend route adı: `stock.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `stock` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

