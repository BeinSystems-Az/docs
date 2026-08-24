---
title: Hesabatlar və çıxışlar
---

# Hesabatlar və çıxışlar

Bu səhifə aktiv ERP API route-larının statik referansıdır. İdentifikatorlar ayrıca qeyd edilmədikdə UUID-dir.

## `/api/v1/document-outputs/{type}/{record}/html`

### `POST` — Document Outputs: html

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `document-outputs.html`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `type` | path | Bəli | Resursun UUID identifikatoru. |
| `record` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/document-outputs/{type}/{record}/templates`

### `GET` — Document Outputs: templates

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `document-outputs.templates`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `type` | path | Bəli | Resursun UUID identifikatoru. |
| `record` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/output-templates`

### `GET` — Output Templates: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `output-templates.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Output Templates: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `output-templates.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/output-templates/{outputTemplate}`

### `GET` — Output Templates: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `output-templates.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `outputTemplate` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Output Templates: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `output-templates.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `outputTemplate` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/output-templates/{outputTemplate}/assignments`

### `PUT` — Output Templates: assignments

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `output-templates.assignments`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `outputTemplate` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/output-templates/{outputTemplate}/clone`

### `POST` — Output Templates: Klonla

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `output-templates.clone`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `outputTemplate` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/output-templates/{outputTemplate}/draft`

### `PATCH` — Output Templates: updateDraft

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `output-templates.draft`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `outputTemplate` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/output-templates/{outputTemplate}/preview`

### `POST` — Output Templates: Önizlə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `output-templates.preview`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `outputTemplate` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/output-templates/{outputTemplate}/publish`

### `POST` — Output Templates: Yayımla

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `output-templates.publish`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `outputTemplate` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/reports`

### `GET` — Reports: Siyahı

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `reports.catalog`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/reports/account-card`

### `GET` — Reports: accountCard

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `reports.account-card`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/reports/balance-sheet`

### `GET` — Reports: balanceSheet

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `reports.balance-sheet`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/reports/profit-loss`

### `GET` — Reports: profitLoss

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `reports.profit-loss`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/reports/trial-balance`

### `GET` — Reports: trialBalance

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `reports.trial-balance`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/reports/{reportKey}`

### `GET` — Reports: Detalı göstər

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `reports.unified.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `reportKey` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

