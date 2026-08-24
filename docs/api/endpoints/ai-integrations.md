---
title: AI və inteqrasiyalar
---

# AI və inteqrasiyalar

Bu səhifə aktiv ERP API route-larının statik referansıdır. İdentifikatorlar ayrıca qeyd edilmədikdə UUID-dir.

## `/api/health`

### `GET` — Health: health

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `health`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Public

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/health/live`

### `GET` — Health: live

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `health.live`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Public

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/health/ready`

### `GET` — Health: ready

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `health.ready`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Public

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/ai/action-proposals/{id}/confirm`

### `POST` — Ai: confirm

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `ai.proposals.confirm`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/ai/action-proposals/{id}/reject`

### `POST` — Ai: reject

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `ai.proposals.reject`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/ai/conversations`

### `POST` — Ai: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `ai.conversations.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `GET` — Ai: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `ai.conversations.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/ai/conversations/{id}`

### `DELETE` — Ai: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `ai.conversations.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/ai/conversations/{id}/messages`

### `GET` — Ai: messages

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `ai.conversations.messages`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/ai/conversations/{id}/messages/stream`

### `POST` — Ai: operation

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `ai.conversations.stream`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/dashboard/report-catalog`

### `GET` — Dashboard: catalog

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `dashboard.report-catalog`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/integrations/actions`

### `GET` — Integrations: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `integrations.actions.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer service token + `X-Tenant-Account` + `X-Branch-Id`

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Bəli | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `X-Tenant-Account` | header | Bəli | Service account üçün tenant hesabı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/integrations/actions/{actionKey}`

### `GET` — Integrations: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `integrations.actions.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer service token + `X-Tenant-Account` + `X-Branch-Id`

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `actionKey` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Bəli | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `X-Tenant-Account` | header | Bəli | Service account üçün tenant hesabı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/integrations/actions/{actionKey}/execute`

### `POST` — Integrations: execute

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `integrations.actions.execute`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer service token + `X-Tenant-Account` + `X-Branch-Id`

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `actionKey` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Bəli | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `X-Tenant-Account` | header | Bəli | Service account üçün tenant hesabı. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

