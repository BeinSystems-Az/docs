---
title: Mühasibat və maliyyə
---

# Mühasibat və maliyyə

Bu səhifə aktiv ERP API route-larının statik referansıdır. İdentifikatorlar ayrıca qeyd edilmədikdə UUID-dir.

## `/api/v1/account-properties`

### `GET` — Account Properties: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `account-properties.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Account Properties: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `account-properties.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/account-properties/{account_property}`

### `GET` — Account Properties: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `account-properties.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `account_property` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Account Properties: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `account-properties.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `account_property` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Account Properties: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `account-properties.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `account_property` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Account Properties: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `account-properties.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `account_property` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/accounting-entries`

### `GET` — Accounting Entries: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `accounting-entries.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Accounting Entries: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `accounting-entries.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/accounting-entries/{accounting_entry}`

### `GET` — Accounting Entries: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `accounting-entries.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `accounting_entry` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Accounting Entries: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `accounting-entries.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `accounting_entry` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Accounting Entries: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `accounting-entries.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `accounting_entry` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Accounting Entries: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `accounting-entries.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `accounting_entry` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/accounting-entries/{entry}/state`

### `PATCH` — Accounting Entries: Vəziyyəti dəyiş

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `accounting-entries.change-state`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `entry` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `state` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/accounting-entry-items`

### `GET` — Accounting Entry Items: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `accounting-entry-items.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/accounting-entry-items/{accounting_entry_item}`

### `GET` — Accounting Entry Items: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `accounting-entry-items.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `accounting_entry_item` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/accounting-report-definitions`

### `GET` — Accounting Report Definitions: Siyahı

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `accounting-report-definitions.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Accounting Report Definitions: Yarat

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `accounting-report-definitions.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `key` | string | — |
| `title` | string | — |
| `category` | string | — |
| `report_type` | string | — |
| `is_active` | boolean | — |
| `sort_order` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/accounting-report-definitions/{id}`

### `PUT` — Accounting Report Definitions: Yenilə

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `accounting-report-definitions.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `key` | string | — |
| `title` | string | — |
| `category` | string | — |
| `report_type` | string | — |
| `is_active` | boolean | — |
| `sort_order` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Accounting Report Definitions: Sil

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `accounting-report-definitions.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `GET` — Accounting Report Definitions: Detalı göstər

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `accounting-report-definitions.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/accounting-report-definitions/{id}/items`

### `POST` — Accounting Report Definitions: storeItem

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `accounting-report-definitions.items.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `key` | string | — |
| `label` | string | — |
| `item_type` | string | section, item, subtotal, total, balance, account, partner, open_item, tax, invoice_item, analytic_account, metric |
| `parent_key` | string | — |
| `sequence` | number | — |
| `normal_balance` | string | debit, credit |
| `formula` | array | — |
| `is_drilldown_enabled` | boolean | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/accounting-report-item-rules/{id}`

### `PUT` — Accounting Report Item Rules: updateRule

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `accounting-report-item-rules.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `match_type` | string | — |
| `internal_group` | string | — |
| `user_type_id` | string | — |
| `account_code_from` | string | — |
| `account_code_to` | string | — |
| `account_code_prefix` | string | — |
| `cash_flow_activity` | string | — |
| `tax_type` | string | — |
| `move_type` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Accounting Report Item Rules: destroyRule

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `accounting-report-item-rules.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/accounting-report-items/{id}`

### `PUT` — Accounting Report Items: updateItem

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `accounting-report-items.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `key` | string | — |
| `label` | string | — |
| `item_type` | string | section, item, subtotal, total, balance, account, partner, open_item, tax, invoice_item, analytic_account, metric |
| `parent_key` | string | — |
| `sequence` | number | — |
| `normal_balance` | string | debit, credit |
| `formula` | array | — |
| `is_drilldown_enabled` | boolean | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Accounting Report Items: destroyItem

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `accounting-report-items.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/accounting-report-items/{id}/rules`

### `POST` — Accounting Report Items: storeRule

Hesabat məlumatının oxunması və ya qurulması əməliyyatı. Backend route adı: `accounting-report-items.rules.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `match_type` | string | — |
| `internal_group` | string | — |
| `user_type_id` | string | — |
| `account_code_from` | string | — |
| `account_code_to` | string | — |
| `account_code_prefix` | string | — |
| `cash_flow_activity` | string | — |
| `tax_type` | string | — |
| `move_type` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/accounts`

### `GET` — Accounts: Siyahı

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `accounts.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Accounts: Yarat

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `accounts.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/accounts/{account}`

### `GET` — Accounts: Detalı göstər

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `accounts.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `account` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Accounts: Yenilə

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `accounts.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `account` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Accounts: Yenilə

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `accounts.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `account` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Accounts: Sil

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `accounts.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `account` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/analytic-accounts`

### `GET` — Analytic Accounts: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `analytic-accounts.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/analytic-accounts/{analytic_account}`

### `GET` — Analytic Accounts: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `analytic-accounts.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `analytic_account` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/countries`

### `GET` — Countries: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `countries.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Countries: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `countries.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/countries/{country}`

### `GET` — Countries: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `countries.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `country` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Countries: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `countries.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `country` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Countries: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `countries.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `country` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Countries: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `countries.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `country` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/currencies`

### `GET` — Currencies: Siyahı

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `currencies.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Currencies: Yarat

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `currencies.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/currencies/{currency}`

### `GET` — Currencies: Detalı göstər

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `currencies.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `currency` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Currencies: Yenilə

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `currencies.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `currency` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Currencies: Yenilə

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `currencies.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `currency` | path | Bəli | Resursun UUID identifikatoru. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Currencies: Sil

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `currencies.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `currency` | path | Bəli | Resursun UUID identifikatoru. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/currency-rates`

### `GET` — Currency Rates: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `currency-rates.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Currency Rates: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `currency-rates.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/currency-rates/{currency_rate}`

### `GET` — Currency Rates: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `currency-rates.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `currency_rate` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Currency Rates: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `currency-rates.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `currency_rate` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Currency Rates: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `currency-rates.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `currency_rate` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Currency Rates: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `currency-rates.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `currency_rate` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/debts`

### `GET` — Debts: Siyahı

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `debts.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/debts/{id}`

### `GET` — Debts: Detalı göstər

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `debts.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/document-ledger-items/{item}/account`

### `PATCH` — Document Ledger Items: updateAccount

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `document-ledger-items.account.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `item` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/expense-reason-groups`

### `GET` — Expense Reason Groups: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `expense-reason-groups.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Expense Reason Groups: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `expense-reason-groups.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/expense-reason-groups/{expense_reason_group}`

### `GET` — Expense Reason Groups: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `expense-reason-groups.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `expense_reason_group` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Expense Reason Groups: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `expense-reason-groups.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `expense_reason_group` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Expense Reason Groups: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `expense-reason-groups.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `expense_reason_group` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Expense Reason Groups: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `expense-reason-groups.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `expense_reason_group` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/expense-reasons`

### `GET` — Expense Reasons: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `expense-reasons.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Expense Reasons: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `expense-reasons.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/expense-reasons/{expense_reason}`

### `GET` — Expense Reasons: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `expense-reasons.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `expense_reason` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Expense Reasons: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `expense-reasons.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `expense_reason` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Expense Reasons: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `expense-reasons.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `expense_reason` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Expense Reasons: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `expense-reasons.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `expense_reason` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/expenses`

### `GET` — Expenses: Siyahı

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `expenses.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Expenses: Yarat

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `expenses.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `partner_id` | string | — |
| `reason_id` | string | — |
| `origin_type` | string | — |
| `origin_id` | string | — |
| `currency_id` | string | — |
| `date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `account_id` | string | — |
| `tax_item_id` | string | — |
| `amount` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/expenses/{entry}/state`

### `PATCH` — Expenses: Vəziyyəti dəyiş

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `expenses.change-state`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `entry` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `state` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/expenses/{expense}`

### `GET` — Expenses: Detalı göstər

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `expenses.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `expense` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Expenses: Yenilə

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `expenses.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `expense` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `partner_id` | string | — |
| `reason_id` | string | — |
| `origin_type` | string | — |
| `origin_id` | string | — |
| `currency_id` | string | — |
| `date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `account_id` | string | — |
| `tax_item_id` | string | — |
| `amount` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Expenses: Yenilə

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `expenses.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `expense` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `partner_id` | string | — |
| `reason_id` | string | — |
| `origin_type` | string | — |
| `origin_id` | string | — |
| `currency_id` | string | — |
| `date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `account_id` | string | — |
| `tax_item_id` | string | — |
| `amount` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Expenses: Sil

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `expenses.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `expense` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/finance/open-items`

### `GET` — Finance: openItems

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `finance.open-items`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/finance/partner-balances`

### `GET` — Finance: partnerBalances

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `finance.partner-balances`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/finance/reconciliations`

### `POST` — Finance: reconcile

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `finance.reconciliations.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `debit_item_id` | string | — |
| `credit_item_id` | string | — |
| `amount` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/finance/reconciliations/{id}`

### `DELETE` — Finance: unreconcile

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `finance.reconciliations.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/fixed-assets`

### `GET` — Fixed Assets: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `fixed-assets.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Fixed Assets: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `fixed-assets.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/fixed-assets/depreciations/post-due`

### `POST` — Fixed Assets: postDue

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `fixed-assets.depreciations.post-due`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/fixed-assets/{asset}/activate`

### `POST` — Fixed Assets: Aktivləşdir

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `fixed-assets.activate`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `asset` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/fixed-assets/{fixed_asset}`

### `GET` — Fixed Assets: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `fixed-assets.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `fixed_asset` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Fixed Assets: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `fixed-assets.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `fixed_asset` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Fixed Assets: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `fixed-assets.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `fixed_asset` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Fixed Assets: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `fixed-assets.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `fixed_asset` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manual-accounting-entries`

### `GET` — Manual Accounting Entries: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `manual-accounting-entries.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Manual Accounting Entries: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `manual-accounting-entries.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `manualAccountingEntry` | string | — |
| `name` | string | — |
| `date` | string | — |
| `ref` | string | — |
| `currency_id` | string | — |
| `items` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manual-accounting-entries/{entry}/state`

### `PATCH` — Manual Accounting Entries: Vəziyyəti dəyiş

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `manual-accounting-entries.change-state`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `entry` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `state` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/manual-accounting-entries/{manual_accounting_entry}`

### `GET` — Manual Accounting Entries: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `manual-accounting-entries.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `manual_accounting_entry` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Manual Accounting Entries: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `manual-accounting-entries.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `manual_accounting_entry` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `manualAccountingEntry` | string | — |
| `name` | string | — |
| `date` | string | — |
| `ref` | string | — |
| `currency_id` | string | — |
| `items` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Manual Accounting Entries: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `manual-accounting-entries.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `manual_accounting_entry` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `manualAccountingEntry` | string | — |
| `name` | string | — |
| `date` | string | — |
| `ref` | string | — |
| `currency_id` | string | — |
| `items` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Manual Accounting Entries: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `manual-accounting-entries.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `manual_accounting_entry` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/payments`

### `GET` — Payments: Siyahı

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `payments.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Payments: Yarat

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `payments.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `partner_id` | string | — |
| `account_id` | string | — |
| `wallet_id` | string | — |
| `currency_id` | string | — |
| `date` | string | — |
| `amount` | number | — |
| `payment_type` | string | inbound, outbound |
| `operation_type` | string | settlement, other, capital_in, capital_out, loan_in, loan_out, supplier_advance_paid, customer_advance_received, employee_advance_paid, interest_received, interest_paid, dividend_paid, other_receivable, other_payable |
| `counterpart_account_id` | string | — |
| `tax_id` | string | — |
| `loan_term` | string | short_term, long_term |
| `name` | string | — |
| `memo` | string | — |
| `allocations` | array | — |
| `origin_type` | string | purchase_receipt, sale_receipt, expense |
| `origin_id` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/payments/inbound`

### `POST` — Payments: storeInbound

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `payments.inbound.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `partner_id` | string | — |
| `account_id` | string | — |
| `wallet_id` | string | — |
| `currency_id` | string | — |
| `date` | string | — |
| `amount` | number | — |
| `payment_type` | string | inbound, outbound |
| `operation_type` | string | settlement, other, capital_in, capital_out, loan_in, loan_out, supplier_advance_paid, customer_advance_received, employee_advance_paid, interest_received, interest_paid, dividend_paid, other_receivable, other_payable |
| `counterpart_account_id` | string | — |
| `tax_id` | string | — |
| `loan_term` | string | short_term, long_term |
| `name` | string | — |
| `memo` | string | — |
| `allocations` | array | — |
| `origin_type` | string | purchase_receipt, sale_receipt, expense |
| `origin_id` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/payments/outbound`

### `POST` — Payments: storeOutbound

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `payments.outbound.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `partner_id` | string | — |
| `account_id` | string | — |
| `wallet_id` | string | — |
| `currency_id` | string | — |
| `date` | string | — |
| `amount` | number | — |
| `payment_type` | string | inbound, outbound |
| `operation_type` | string | settlement, other, capital_in, capital_out, loan_in, loan_out, supplier_advance_paid, customer_advance_received, employee_advance_paid, interest_received, interest_paid, dividend_paid, other_receivable, other_payable |
| `counterpart_account_id` | string | — |
| `tax_id` | string | — |
| `loan_term` | string | short_term, long_term |
| `name` | string | — |
| `memo` | string | — |
| `allocations` | array | — |
| `origin_type` | string | purchase_receipt, sale_receipt, expense |
| `origin_id` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/payments/settlement-options`

### `GET` — Payments: settlementOptions

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `payments.settlement-options`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/payments/{payment}`

### `GET` — Payments: Detalı göstər

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `payments.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `payment` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Payments: Yenilə

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `payments.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `payment` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `partner_id` | string | — |
| `account_id` | string | — |
| `wallet_id` | string | — |
| `currency_id` | string | — |
| `date` | string | — |
| `amount` | number | — |
| `payment_type` | string | inbound, outbound |
| `operation_type` | string | settlement, other, capital_in, capital_out, loan_in, loan_out, supplier_advance_paid, customer_advance_received, employee_advance_paid, interest_received, interest_paid, dividend_paid, other_receivable, other_payable |
| `counterpart_account_id` | string | — |
| `tax_id` | string | — |
| `loan_term` | string | short_term, long_term |
| `name` | string | — |
| `memo` | string | — |
| `allocations` | array | — |
| `origin_type` | string | purchase_receipt, sale_receipt, expense |
| `origin_id` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Payments: Yenilə

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `payments.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `payment` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `partner_id` | string | — |
| `account_id` | string | — |
| `wallet_id` | string | — |
| `currency_id` | string | — |
| `date` | string | — |
| `amount` | number | — |
| `payment_type` | string | inbound, outbound |
| `operation_type` | string | settlement, other, capital_in, capital_out, loan_in, loan_out, supplier_advance_paid, customer_advance_received, employee_advance_paid, interest_received, interest_paid, dividend_paid, other_receivable, other_payable |
| `counterpart_account_id` | string | — |
| `tax_id` | string | — |
| `loan_term` | string | short_term, long_term |
| `name` | string | — |
| `memo` | string | — |
| `allocations` | array | — |
| `origin_type` | string | purchase_receipt, sale_receipt, expense |
| `origin_id` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Payments: Sil

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `payments.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `payment` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/payments/{payment}/state`

### `PATCH` — Payments: Vəziyyəti dəyiş

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `payments.change-state`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `payment` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `state` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/tax-profile`

### `GET` — Tax Profile: Detalı göstər

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `tax-profile.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Tax Profile: Yenilə

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `tax-profile.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/tax-profile/readiness`

### `GET` — Tax Profile: readiness

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `tax-profile.readiness`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/tax-profile/schema`

### `GET` — Tax Profile: schema

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `tax-profile.schema`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/taxes`

### `GET` — Taxes: Siyahı

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `taxes.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/taxes/{tax}`

### `GET` — Taxes: Detalı göstər

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `taxes.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `tax` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/wallet-transfers`

### `GET` — Wallet Transfers: Siyahı

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `wallet-transfers.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Wallet Transfers: Yarat

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `wallet-transfers.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `source_wallet_id` | string | — |
| `destination_wallet_id` | string | — |
| `currency_id` | string | — |
| `date` | string | — |
| `amount` | number | — |
| `ref` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/wallet-transfers/{entry}/state`

### `PATCH` — Wallet Transfers: Vəziyyəti dəyiş

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `wallet-transfers.change-state`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `entry` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `state` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/wallet-transfers/{wallet_transfer}`

### `GET` — Wallet Transfers: Detalı göstər

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `wallet-transfers.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `wallet_transfer` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Wallet Transfers: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `wallet-transfers.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `wallet_transfer` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `source_wallet_id` | string | — |
| `destination_wallet_id` | string | — |
| `currency_id` | string | — |
| `date` | string | — |
| `amount` | number | — |
| `ref` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Wallet Transfers: Yenilə

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `wallet-transfers.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `wallet_transfer` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `source_wallet_id` | string | — |
| `destination_wallet_id` | string | — |
| `currency_id` | string | — |
| `date` | string | — |
| `amount` | number | — |
| `ref` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Wallet Transfers: Sil

ERP resursu və ya sistem konfiqurasiyası əməliyyatı. Backend route adı: `wallet-transfers.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `wallet_transfer` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/wallets`

### `GET` — Wallets: Siyahı

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `wallets.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Wallets: Yarat

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `wallets.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/wallets/{wallet}`

### `GET` — Wallets: Detalı göstər

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `wallets.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `wallet` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Wallets: Yenilə

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `wallets.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `wallet` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Wallets: Yenilə

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `wallets.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `wallet` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

Bu endpoint JSON body qəbul edir; sahələr controller səviyyəsində yoxlanır.

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Wallets: Sil

Mühasibat, jurnal, ödəniş və maliyyə hesabatı əməliyyatı. Backend route adı: `wallets.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `wallet` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

