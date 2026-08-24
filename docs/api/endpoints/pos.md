---
title: POS
---

# POS

Bu səhifə aktiv ERP API route-larının statik referansıdır. İdentifikatorlar ayrıca qeyd edilmədikdə UUID-dir.

## `/api/v1/pos-cash-movements`

### `GET` — Pos Cash Movements: Siyahı

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-cash-movements.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-cash-movements/{id}`

### `GET` — Pos Cash Movements: Detalı göstər

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-cash-movements.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-cash-reasons`

### `GET` — Pos Cash Reasons: Siyahı

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-cash-reasons.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Pos Cash Reasons: Yarat

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-cash-reasons.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-cash-reasons/{posCashReason}`

### `GET` — Pos Cash Reasons: Detalı göstər

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-cash-reasons.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posCashReason` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Pos Cash Reasons: Yenilə

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-cash-reasons.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posCashReason` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Pos Cash Reasons: Yenilə

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-cash-reasons.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posCashReason` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Pos Cash Reasons: Sil

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-cash-reasons.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posCashReason` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-deposits`

### `GET` — Pos Deposits: deposits

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-deposits.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-deposits/{id}`

### `GET` — Pos Deposits: showDeposit

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-deposits.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-payment-types`

### `GET` — Pos Payment Types: Siyahı

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-payment-types.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Pos Payment Types: Yarat

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-payment-types.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-payment-types/{posPaymentType}`

### `GET` — Pos Payment Types: Detalı göstər

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-payment-types.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posPaymentType` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Pos Payment Types: Yenilə

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-payment-types.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posPaymentType` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Pos Payment Types: Yenilə

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-payment-types.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posPaymentType` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Pos Payment Types: Sil

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-payment-types.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posPaymentType` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-reasons`

### `GET` — Pos Reasons: Siyahı

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-reasons.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Pos Reasons: Yarat

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-reasons.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-reasons/{posCashReason}`

### `GET` — Pos Reasons: Detalı göstər

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-reasons.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posCashReason` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Pos Reasons: Yenilə

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-reasons.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posCashReason` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Pos Reasons: Yenilə

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-reasons.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posCashReason` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Pos Reasons: Sil

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-reasons.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posCashReason` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-registers`

### `GET` — Pos Registers: Siyahı

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-registers.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Pos Registers: Yarat

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-registers.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-registers/{posRegister}`

### `GET` — Pos Registers: Detalı göstər

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-registers.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posRegister` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Pos Registers: Yenilə

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-registers.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posRegister` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Pos Registers: Yenilə

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-registers.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posRegister` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Pos Registers: Sil

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-registers.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posRegister` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-registers/{posRegister}/activation-code`

### `POST` — Pos Registers: activationCode

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-registers.activation-code`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posRegister` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-registers/{posRegister}/reset-installation`

### `POST` — Pos Registers: resetInstallation

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-registers.reset-installation`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `posRegister` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-returns`

### `GET` — Pos Returns: Siyahı

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-returns.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-returns/{id}`

### `GET` — Pos Returns: Detalı göstər

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-returns.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-sale-returns`

### `GET` — Pos Sale Returns: Siyahı

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-sale-returns.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-sale-returns/{id}`

### `GET` — Pos Sale Returns: Detalı göstər

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-sale-returns.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-sales`

### `GET` — Pos Sales: Siyahı

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-sales.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `q` | query | Xeyr | Mətn üzrə axtarış. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-sales/{id}`

### `GET` — Pos Sales: Detalı göstər

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-sales.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-shifts`

### `GET` — Pos Shifts: Siyahı

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-shifts.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-shifts/{id}`

### `GET` — Pos Shifts: Detalı göstər

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-shifts.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-shifts/{id}/z-report`

### `GET` — Pos Shifts: zReport

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-shifts.z-report`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-sync`

### `GET` — Pos Sync: Siyahı

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-sync.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-sync-monitor`

### `GET` — Pos Sync Monitor: Siyahı

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-sync-monitor.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-sync-monitor/status`

### `GET` — Pos Sync Monitor: status

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-sync-monitor.status`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-sync/status`

### `GET` — Pos Sync: status

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-sync.status`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-withdrawals`

### `GET` — Pos Withdrawals: withdrawals

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-withdrawals.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos-withdrawals/{id}`

### `GET` — Pos Withdrawals: showWithdrawal

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos-withdrawals.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos/sync/ack`

### `POST` — Pos: ack

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos.sync.ack`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** `Authorization: Device <tenant-uuid>.<device-secret>`

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos/sync/activate`

### `POST` — Pos: Aktivləşdir

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos.sync.activate`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Public

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos/sync/batches/{id}`

### `GET` — Pos: batch

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos.sync.batches.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** `Authorization: Device <tenant-uuid>.<device-secret>`

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos/sync/bootstrap`

### `POST` — Pos: bootstrap

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos.sync.bootstrap`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** `Authorization: Device <tenant-uuid>.<device-secret>`

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos/sync/bootstrap/{id}/chunk`

### `GET` — Pos: bootstrapChunk

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos.sync.bootstrap.chunk`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** `Authorization: Device <tenant-uuid>.<device-secret>`

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos/sync/device-token/refresh`

### `POST` — Pos: refreshDeviceToken

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos.sync.device-token.refresh`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Public

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos/sync/operations/{id}`

### `GET` — Pos: operation

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos.sync.operations.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** `Authorization: Device <tenant-uuid>.<device-secret>`

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos/sync/operations/{id}/retry`

### `POST` — Pos: retry

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos.sync.operations.retry`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** `Authorization: Device <tenant-uuid>.<device-secret>`

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos/sync/pull`

### `GET` — Pos: Qəbul et

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos.sync.pull`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** `Authorization: Device <tenant-uuid>.<device-secret>`

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos/sync/push`

### `POST` — Pos: Göndər

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos.sync.push`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** `Authorization: Device <tenant-uuid>.<device-secret>`

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/pos/sync/status`

### `GET` — Pos: status

POS inzibatçılığı və ya cihaz sinxronizasiyası əməliyyatı. Backend route adı: `pos.sync.status`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** `Authorization: Device <tenant-uuid>.<device-secret>`

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

