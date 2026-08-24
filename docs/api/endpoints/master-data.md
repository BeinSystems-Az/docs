---
title: Əsas məlumatlar
---

# Əsas məlumatlar

Bu səhifə aktiv ERP API route-larının statik referansıdır. İdentifikatorlar ayrıca qeyd edilmədikdə UUID-dir.

## `/api/v1/categories`

### `GET` — Category: Siyahı

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `category.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Category: Yarat

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `category.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `parent_id` | string | — |
| `active` | boolean | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/categories/{category}`

### `GET` — Category: Detalı göstər

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `category.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `category` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Category: Yenilə

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `category.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `category` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `parent_id` | string | — |
| `active` | boolean | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Category: Yenilə

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `category.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `category` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `parent_id` | string | — |
| `active` | boolean | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Category: Sil

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `category.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `category` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/departments`

### `GET` — Department: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `department.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Department: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `department.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/departments/{department}`

### `GET` — Department: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `department.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `department` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Department: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `department.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `department` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Department: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `department.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `department` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Department: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `department.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `department` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/partner-bank-accounts`

### `GET` — Partner Bank Account: Siyahı

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner-bank-account.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Partner Bank Account: Yarat

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner-bank-account.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `partner_id` | string | — |
| `bank_identifier_code` | string | — |
| `bank` | string | — |
| `address` | string | — |
| `correspondent_account` | string | — |
| `bank_account` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/partner-bank-accounts/{partner_bank_account}`

### `GET` — Partner Bank Account: Detalı göstər

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner-bank-account.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `partner_bank_account` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Partner Bank Account: Yenilə

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner-bank-account.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `partner_bank_account` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `partner_id` | string | — |
| `bank_identifier_code` | string | — |
| `bank` | string | — |
| `address` | string | — |
| `correspondent_account` | string | — |
| `bank_account` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Partner Bank Account: Yenilə

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner-bank-account.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `partner_bank_account` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `partner_id` | string | — |
| `bank_identifier_code` | string | — |
| `bank` | string | — |
| `address` | string | — |
| `correspondent_account` | string | — |
| `bank_account` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Partner Bank Account: Sil

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner-bank-account.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `partner_bank_account` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/partner-groups`

### `GET` — Partner Group: Siyahı

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner-group.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Partner Group: Yarat

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner-group.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `description` | string | — |
| `active` | boolean | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/partner-groups/{partner_group}`

### `GET` — Partner Group: Detalı göstər

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner-group.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `partner_group` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Partner Group: Yenilə

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner-group.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `partner_group` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `description` | string | — |
| `active` | boolean | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Partner Group: Yenilə

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner-group.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `partner_group` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `description` | string | — |
| `active` | boolean | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Partner Group: Sil

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner-group.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `partner_group` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/partners`

### `GET` — Partner: Siyahı

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Partner: Yarat

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `parent_id` | string | — |
| `is_company` | boolean | — |
| `is_customer` | boolean | — |
| `is_supplier` | boolean | — |
| `group_id` | string | — |
| `price_type_id` | string | — |
| `code` | string | — |
| `name` | string | — |
| `surname` | string | — |
| `gender` | string | — |
| `fin` | string | — |
| `phone` | string | — |
| `email` | string | — |
| `card` | string | — |
| `bonus` | number | — |
| `tin` | string | — |
| `legal_address` | string | — |
| `physical_address` | string | — |
| `bank_accounts` | array | — |
| `description` | string | — |
| `type` | number | — |
| `active` | boolean | — |
| `receivable_account_id` | string | — |
| `payable_account_id` | string | — |
| `branch_visibility` | string | — |
| `branch_ids` | array | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/partners/{partner}`

### `GET` — Partner: Detalı göstər

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `partner` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Partner: Yenilə

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `partner` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `parent_id` | string | — |
| `is_company` | boolean | — |
| `is_customer` | boolean | — |
| `is_supplier` | boolean | — |
| `group_id` | string | — |
| `price_type_id` | string | — |
| `code` | string | — |
| `name` | string | — |
| `surname` | string | — |
| `gender` | string | — |
| `fin` | string | — |
| `phone` | string | — |
| `email` | string | — |
| `card` | string | — |
| `bonus` | number | — |
| `tin` | string | — |
| `legal_address` | string | — |
| `physical_address` | string | — |
| `bank_accounts` | array | — |
| `description` | string | — |
| `type` | number | — |
| `active` | boolean | — |
| `receivable_account_id` | string | — |
| `payable_account_id` | string | — |
| `branch_visibility` | string | — |
| `branch_ids` | array | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Partner: Yenilə

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `partner` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `parent_id` | string | — |
| `is_company` | boolean | — |
| `is_customer` | boolean | — |
| `is_supplier` | boolean | — |
| `group_id` | string | — |
| `price_type_id` | string | — |
| `code` | string | — |
| `name` | string | — |
| `surname` | string | — |
| `gender` | string | — |
| `fin` | string | — |
| `phone` | string | — |
| `email` | string | — |
| `card` | string | — |
| `bonus` | number | — |
| `tin` | string | — |
| `legal_address` | string | — |
| `physical_address` | string | — |
| `bank_accounts` | array | — |
| `description` | string | — |
| `type` | number | — |
| `active` | boolean | — |
| `receivable_account_id` | string | — |
| `payable_account_id` | string | — |
| `branch_visibility` | string | — |
| `branch_ids` | array | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Partner: Sil

Tərəfdaş əsas məlumatı əməliyyatı. Backend route adı: `partner.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `partner` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/price-types`

### `GET` — Price Type: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `price-type.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Price Type: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `price-type.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/price-types/{price_type}`

### `GET` — Price Type: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `price-type.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `price_type` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Price Type: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `price-type.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `price_type` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Price Type: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `price-type.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `price_type` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Price Type: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `price-type.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `price_type` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/product-attributes`

### `GET` — Product Attributes: Siyahı

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-attributes.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Product Attributes: Yarat

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-attributes.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `display_type` | string | — |
| `values` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/product-attributes/{product_attribute}`

### `GET` — Product Attributes: Detalı göstər

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-attributes.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product_attribute` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Product Attributes: Yenilə

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-attributes.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product_attribute` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `display_type` | string | — |
| `values` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Product Attributes: Yenilə

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-attributes.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product_attribute` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `display_type` | string | — |
| `values` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Product Attributes: Sil

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-attributes.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product_attribute` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/product-packagings`

### `GET` — Product Packaging: Siyahı

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-packaging.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Product Packaging: Yarat

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-packaging.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `product_id` | string | — |
| `unit_id` | string | — |
| `quantity_in_inventory_unit` | number | — |
| `purchase_price` | number | — |
| `sale_price` | number | — |
| `barcode` | string | — |
| `active` | boolean | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/product-packagings/{product_packaging}`

### `GET` — Product Packaging: Detalı göstər

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-packaging.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product_packaging` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Product Packaging: Yenilə

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-packaging.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product_packaging` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `product_id` | string | — |
| `unit_id` | string | — |
| `quantity_in_inventory_unit` | number | — |
| `purchase_price` | number | — |
| `sale_price` | number | — |
| `barcode` | string | — |
| `active` | boolean | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Product Packaging: Yenilə

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-packaging.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product_packaging` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `product_id` | string | — |
| `unit_id` | string | — |
| `quantity_in_inventory_unit` | number | — |
| `purchase_price` | number | — |
| `sale_price` | number | — |
| `barcode` | string | — |
| `active` | boolean | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Product Packaging: Sil

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-packaging.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product_packaging` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/product-templates`

### `GET` — Product Template: Siyahı

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-template.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Product Template: Yarat

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-template.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `type` | number | — |
| `category_id` | string | — |
| `unit_id` | string | — |
| `price` | string | — |
| `tracking` | string | — |
| `description` | string | — |
| `active` | boolean | — |
| `image` | string | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/product-templates/{product_template}`

### `GET` — Product Template: Detalı göstər

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-template.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product_template` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Product Template: Yenilə

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-template.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product_template` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `type` | number | — |
| `category_id` | string | — |
| `unit_id` | string | — |
| `price` | string | — |
| `tracking` | string | — |
| `description` | string | — |
| `active` | boolean | — |
| `image` | string | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Product Template: Yenilə

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-template.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product_template` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `type` | number | — |
| `category_id` | string | — |
| `unit_id` | string | — |
| `price` | string | — |
| `tracking` | string | — |
| `description` | string | — |
| `active` | boolean | — |
| `image` | string | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Product Template: Sil

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product-template.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product_template` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/products`

### `GET` — Product: Siyahı

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Product: Yarat

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `category_id` | string | — |
| `department_id` | string | — |
| `unit_id` | string | — |
| `name` | string | — |
| `description` | string | — |
| `color` | string | — |
| `price` | string | — |
| `buy_price` | string | — |
| `active` | boolean | — |
| `type` | number | — |
| `is_complimentary` | boolean | — |
| `is_weight` | boolean | — |
| `plu` | string | — |
| `image` | string | — |
| `tax_id` | string | — |
| `product_template_id` | string | — |
| `default_code` | string | — |
| `barcode` | string | — |
| `weight` | string | — |
| `volume` | string | — |
| `min_price` | string | — |
| `income_account_id` | string | — |
| `expense_account_id` | string | — |
| `min_stock` | string | — |
| `standard_cost` | string | — |
| `cost_method` | string | — |
| `variant_ids` | array | — |
| `suppliers` | array | — |
| `packagings` | array | — |
| `reorder_rules` | array | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/products/{product}`

### `GET` — Product: Detalı göstər

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Product: Yenilə

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `category_id` | string | — |
| `department_id` | string | — |
| `unit_id` | string | — |
| `name` | string | — |
| `description` | string | — |
| `color` | string | — |
| `price` | string | — |
| `buy_price` | string | — |
| `active` | boolean | — |
| `type` | number | — |
| `is_complimentary` | boolean | — |
| `is_weight` | boolean | — |
| `plu` | string | — |
| `image` | string | — |
| `tax_id` | string | — |
| `product_template_id` | string | — |
| `default_code` | string | — |
| `barcode` | string | — |
| `weight` | string | — |
| `volume` | string | — |
| `min_price` | string | — |
| `income_account_id` | string | — |
| `expense_account_id` | string | — |
| `min_stock` | string | — |
| `standard_cost` | string | — |
| `cost_method` | string | — |
| `variant_ids` | array | — |
| `suppliers` | array | — |
| `packagings` | array | — |
| `reorder_rules` | array | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Product: Yenilə

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `category_id` | string | — |
| `department_id` | string | — |
| `unit_id` | string | — |
| `name` | string | — |
| `description` | string | — |
| `color` | string | — |
| `price` | string | — |
| `buy_price` | string | — |
| `active` | boolean | — |
| `type` | number | — |
| `is_complimentary` | boolean | — |
| `is_weight` | boolean | — |
| `plu` | string | — |
| `image` | string | — |
| `tax_id` | string | — |
| `product_template_id` | string | — |
| `default_code` | string | — |
| `barcode` | string | — |
| `weight` | string | — |
| `volume` | string | — |
| `min_price` | string | — |
| `income_account_id` | string | — |
| `expense_account_id` | string | — |
| `min_stock` | string | — |
| `standard_cost` | string | — |
| `cost_method` | string | — |
| `variant_ids` | array | — |
| `suppliers` | array | — |
| `packagings` | array | — |
| `reorder_rules` | array | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Product: Sil

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `product.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `product` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/units`

### `GET` — Unit: Siyahı

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `unit.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Unit: Yarat

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `unit.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `relative_unit_id` | string | — |
| `relative_factor` | number | — |
| `rounding_precision` | number | — |
| `sequence` | number | — |
| `active` | boolean | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/units/{unit}`

### `GET` — Unit: Detalı göstər

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `unit.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `unit` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Unit: Yenilə

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `unit.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `unit` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `relative_unit_id` | string | — |
| `relative_factor` | number | — |
| `rounding_precision` | number | — |
| `sequence` | number | — |
| `active` | boolean | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Unit: Yenilə

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `unit.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `unit` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `relative_unit_id` | string | — |
| `relative_factor` | number | — |
| `rounding_precision` | number | — |
| `sequence` | number | — |
| `active` | boolean | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Unit: Sil

Məhsul kataloqu və məhsul parametrləri əməliyyatı. Backend route adı: `unit.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `unit` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

