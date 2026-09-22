---
sidebar_position: 3
---

# Əsas məlumatlar

> Cari backend snapshotından yaranıb: **117 HTTP operation**. Bu texniki indeks path və handler üçündür; field və JSON nümunələri resursun öz səhifəsində saxlanılır.

## Məhsul kataloqu

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `DELETE` | `/api/v1/branches/{branch}/products/{product}/settings` | Qeydi silir | Tenant Bearer + filial | `Product\BranchProductSettingController@destroy` |
| `PUT` | `/api/v1/branches/{branch}/products/{product}/settings` | Qeydi yeniləyir | Tenant Bearer + filial | `Product\BranchProductSettingController@update` |
| `GET` | `/api/v1/categories` | Siyahı oxuyur | Tenant Bearer + filial | `Product\CategoryController@index` |
| `POST` | `/api/v1/categories` | Yeni qeyd yaradır | Tenant Bearer + filial | `Product\CategoryController@store` |
| `DELETE` | `/api/v1/categories/{category}` | Qeydi silir | Tenant Bearer + filial | `Product\CategoryController@destroy` |
| `GET` | `/api/v1/categories/{category}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Product\CategoryController@show` |
| `PATCH` | `/api/v1/categories/{category}` | Qeydi yeniləyir | Tenant Bearer + filial | `Product\CategoryController@update` |
| `PUT` | `/api/v1/categories/{category}` | Qeydi yeniləyir | Tenant Bearer + filial | `Product\CategoryController@update` |
| `GET` | `/api/v1/product-attributes` | Siyahı oxuyur | Tenant Bearer + filial | `Product\ProductAttributeController@index` |
| `POST` | `/api/v1/product-attributes` | Yeni qeyd yaradır | Tenant Bearer + filial | `Product\ProductAttributeController@store` |
| `DELETE` | `/api/v1/product-attributes/{product_attribute}` | Qeydi silir | Tenant Bearer + filial | `Product\ProductAttributeController@destroy` |
| `GET` | `/api/v1/product-attributes/{product_attribute}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Product\ProductAttributeController@show` |
| `PATCH` | `/api/v1/product-attributes/{product_attribute}` | Qeydi yeniləyir | Tenant Bearer + filial | `Product\ProductAttributeController@update` |
| `PUT` | `/api/v1/product-attributes/{product_attribute}` | Qeydi yeniləyir | Tenant Bearer + filial | `Product\ProductAttributeController@update` |
| `GET` | `/api/v1/product-packagings` | Siyahı oxuyur | Tenant Bearer + filial | `Product\ProductPackagingController@index` |
| `POST` | `/api/v1/product-packagings` | Yeni qeyd yaradır | Tenant Bearer + filial | `Product\ProductPackagingController@store` |
| `DELETE` | `/api/v1/product-packagings/{product_packaging}` | Qeydi silir | Tenant Bearer + filial | `Product\ProductPackagingController@destroy` |
| `GET` | `/api/v1/product-packagings/{product_packaging}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Product\ProductPackagingController@show` |
| `PATCH` | `/api/v1/product-packagings/{product_packaging}` | Qeydi yeniləyir | Tenant Bearer + filial | `Product\ProductPackagingController@update` |
| `PUT` | `/api/v1/product-packagings/{product_packaging}` | Qeydi yeniləyir | Tenant Bearer + filial | `Product\ProductPackagingController@update` |
| `GET` | `/api/v1/product-templates` | Siyahı oxuyur | Tenant Bearer + filial | `Product\ProductTemplateController@index` |
| `POST` | `/api/v1/product-templates` | Yeni qeyd yaradır | Tenant Bearer + filial | `Product\ProductTemplateController@store` |
| `DELETE` | `/api/v1/product-templates/{product_template}` | Qeydi silir | Tenant Bearer + filial | `Product\ProductTemplateController@destroy` |
| `GET` | `/api/v1/product-templates/{product_template}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Product\ProductTemplateController@show` |
| `PATCH` | `/api/v1/product-templates/{product_template}` | Qeydi yeniləyir | Tenant Bearer + filial | `Product\ProductTemplateController@update` |
| `PUT` | `/api/v1/product-templates/{product_template}` | Qeydi yeniləyir | Tenant Bearer + filial | `Product\ProductTemplateController@update` |
| `GET` | `/api/v1/products` | Siyahı oxuyur | Tenant Bearer + filial | `Product\ProductController@index` |
| `POST` | `/api/v1/products` | Yeni qeyd yaradır | Tenant Bearer + filial | `Product\ProductController@store` |
| `DELETE` | `/api/v1/products/{product}` | Qeydi silir | Tenant Bearer + filial | `Product\ProductController@destroy` |
| `GET` | `/api/v1/products/{product}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Product\ProductController@show` |
| `PATCH` | `/api/v1/products/{product}` | Qeydi yeniləyir | Tenant Bearer + filial | `Product\ProductController@update` |
| `PUT` | `/api/v1/products/{product}` | Qeydi yeniləyir | Tenant Bearer + filial | `Product\ProductController@update` |
| `GET` | `/api/v1/units` | Siyahı oxuyur | Tenant Bearer + filial | `Product\UnitController@index` |
| `POST` | `/api/v1/units` | Yeni qeyd yaradır | Tenant Bearer + filial | `Product\UnitController@store` |
| `DELETE` | `/api/v1/units/{unit}` | Qeydi silir | Tenant Bearer + filial | `Product\UnitController@destroy` |
| `GET` | `/api/v1/units/{unit}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Product\UnitController@show` |
| `PATCH` | `/api/v1/units/{unit}` | Qeydi yeniləyir | Tenant Bearer + filial | `Product\UnitController@update` |
| `PUT` | `/api/v1/units/{unit}` | Qeydi yeniləyir | Tenant Bearer + filial | `Product\UnitController@update` |

## Tərəfdaşlar

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/partner-bank-accounts` | Siyahı oxuyur | Tenant Bearer + filial | `Partner\PartnerBankAccountController@index` |
| `POST` | `/api/v1/partner-bank-accounts` | Yeni qeyd yaradır | Tenant Bearer + filial | `Partner\PartnerBankAccountController@store` |
| `DELETE` | `/api/v1/partner-bank-accounts/{partner_bank_account}` | Qeydi silir | Tenant Bearer + filial | `Partner\PartnerBankAccountController@destroy` |
| `GET` | `/api/v1/partner-bank-accounts/{partner_bank_account}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Partner\PartnerBankAccountController@show` |
| `PATCH` | `/api/v1/partner-bank-accounts/{partner_bank_account}` | Qeydi yeniləyir | Tenant Bearer + filial | `Partner\PartnerBankAccountController@update` |
| `PUT` | `/api/v1/partner-bank-accounts/{partner_bank_account}` | Qeydi yeniləyir | Tenant Bearer + filial | `Partner\PartnerBankAccountController@update` |
| `GET` | `/api/v1/partner-groups` | Siyahı oxuyur | Tenant Bearer + filial | `Partner\PartnerGroupController@index` |
| `POST` | `/api/v1/partner-groups` | Yeni qeyd yaradır | Tenant Bearer + filial | `Partner\PartnerGroupController@store` |
| `DELETE` | `/api/v1/partner-groups/{partner_group}` | Qeydi silir | Tenant Bearer + filial | `Partner\PartnerGroupController@destroy` |
| `GET` | `/api/v1/partner-groups/{partner_group}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Partner\PartnerGroupController@show` |
| `PATCH` | `/api/v1/partner-groups/{partner_group}` | Qeydi yeniləyir | Tenant Bearer + filial | `Partner\PartnerGroupController@update` |
| `PUT` | `/api/v1/partner-groups/{partner_group}` | Qeydi yeniləyir | Tenant Bearer + filial | `Partner\PartnerGroupController@update` |
| `GET` | `/api/v1/partners` | Siyahı oxuyur | Tenant Bearer + filial | `Partner\PartnerController@index` |
| `POST` | `/api/v1/partners` | Yeni qeyd yaradır | Tenant Bearer + filial | `Partner\PartnerController@store` |
| `DELETE` | `/api/v1/partners/{partner}` | Qeydi silir | Tenant Bearer + filial | `Partner\PartnerController@destroy` |
| `GET` | `/api/v1/partners/{partner}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Partner\PartnerController@show` |
| `PATCH` | `/api/v1/partners/{partner}` | Qeydi yeniləyir | Tenant Bearer + filial | `Partner\PartnerController@update` |
| `PUT` | `/api/v1/partners/{partner}` | Qeydi yeniləyir | Tenant Bearer + filial | `Partner\PartnerController@update` |
| `POST` | `/api/v1/partners/taxpayer-lookup` | Əməliyyatı başladır | Tenant Bearer + filial | `Partner\TaxpayerLookupController` |
| `POST` | `/api/v1/partners/taxpayer-risk-check` | Əməliyyatı başladır | Tenant Bearer + filial | `Partner\TaxpayerRiskCheckController` |
| `POST` | `/api/v1/partners/taxpayer-risk-check-all` | Əməliyyatı başladır | Tenant Bearer + filial | `Partner\TaxpayerRiskCheckAllController` |

## CRM

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/crm/dashboard` | Məlumatı oxuyur | Tenant Bearer + filial | `Crm\DashboardController` |
| `GET` | `/api/v1/crm/leads` | Siyahı oxuyur | Tenant Bearer + filial | `Crm\LeadController@index` |
| `POST` | `/api/v1/crm/leads` | Yeni qeyd yaradır | Tenant Bearer + filial | `Crm\LeadController@store` |
| `DELETE` | `/api/v1/crm/leads/{lead}` | Qeydi silir | Tenant Bearer + filial | `Crm\LeadController@destroy` |
| `GET` | `/api/v1/crm/leads/{lead}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Crm\LeadController@show` |
| `PATCH` | `/api/v1/crm/leads/{lead}` | Qeydi yeniləyir | Tenant Bearer + filial | `Crm\LeadController@update` |
| `PUT` | `/api/v1/crm/leads/{lead}` | Qeydi yeniləyir | Tenant Bearer + filial | `Crm\LeadController@update` |
| `GET` | `/api/v1/crm/lost-reasons` | Siyahı oxuyur | Tenant Bearer + filial | `Crm\LostReasonController@index` |
| `POST` | `/api/v1/crm/lost-reasons` | Yeni qeyd yaradır | Tenant Bearer + filial | `Crm\LostReasonController@store` |
| `DELETE` | `/api/v1/crm/lost-reasons/{lostReason}` | Qeydi silir | Tenant Bearer + filial | `Crm\LostReasonController@destroy` |
| `GET` | `/api/v1/crm/lost-reasons/{lostReason}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Crm\LostReasonController@show` |
| `PATCH` | `/api/v1/crm/lost-reasons/{lostReason}` | Qeydi yeniləyir | Tenant Bearer + filial | `Crm\LostReasonController@update` |
| `PUT` | `/api/v1/crm/lost-reasons/{lostReason}` | Qeydi yeniləyir | Tenant Bearer + filial | `Crm\LostReasonController@update` |
| `GET` | `/api/v1/crm/pipelines` | Siyahı oxuyur | Tenant Bearer + filial | `Crm\PipelineController@index` |
| `POST` | `/api/v1/crm/pipelines` | Yeni qeyd yaradır | Tenant Bearer + filial | `Crm\PipelineController@store` |
| `DELETE` | `/api/v1/crm/pipelines/{pipeline}` | Qeydi silir | Tenant Bearer + filial | `Crm\PipelineController@destroy` |
| `GET` | `/api/v1/crm/pipelines/{pipeline}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Crm\PipelineController@show` |
| `PATCH` | `/api/v1/crm/pipelines/{pipeline}` | Qeydi yeniləyir | Tenant Bearer + filial | `Crm\PipelineController@update` |
| `PUT` | `/api/v1/crm/pipelines/{pipeline}` | Qeydi yeniləyir | Tenant Bearer + filial | `Crm\PipelineController@update` |
| `GET` | `/api/v1/crm/sources` | Siyahı oxuyur | Tenant Bearer + filial | `Crm\SourceController@index` |
| `POST` | `/api/v1/crm/sources` | Yeni qeyd yaradır | Tenant Bearer + filial | `Crm\SourceController@store` |
| `DELETE` | `/api/v1/crm/sources/{source}` | Qeydi silir | Tenant Bearer + filial | `Crm\SourceController@destroy` |
| `GET` | `/api/v1/crm/sources/{source}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Crm\SourceController@show` |
| `PATCH` | `/api/v1/crm/sources/{source}` | Qeydi yeniləyir | Tenant Bearer + filial | `Crm\SourceController@update` |
| `PUT` | `/api/v1/crm/sources/{source}` | Qeydi yeniləyir | Tenant Bearer + filial | `Crm\SourceController@update` |
| `GET` | `/api/v1/crm/stages` | Siyahı oxuyur | Tenant Bearer + filial | `Crm\StageController@index` |
| `POST` | `/api/v1/crm/stages` | Yeni qeyd yaradır | Tenant Bearer + filial | `Crm\StageController@store` |
| `DELETE` | `/api/v1/crm/stages/{stage}` | Qeydi silir | Tenant Bearer + filial | `Crm\StageController@destroy` |
| `GET` | `/api/v1/crm/stages/{stage}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Crm\StageController@show` |
| `PATCH` | `/api/v1/crm/stages/{stage}` | Qeydi yeniləyir | Tenant Bearer + filial | `Crm\StageController@update` |
| `PUT` | `/api/v1/crm/stages/{stage}` | Qeydi yeniləyir | Tenant Bearer + filial | `Crm\StageController@update` |
| `GET` | `/api/v1/crm/tasks` | Siyahı oxuyur | Tenant Bearer + filial | `Crm\TaskController@index` |
| `POST` | `/api/v1/crm/tasks` | Yeni qeyd yaradır | Tenant Bearer + filial | `Crm\TaskController@store` |
| `DELETE` | `/api/v1/crm/tasks/{task}` | Qeydi silir | Tenant Bearer + filial | `Crm\TaskController@destroy` |
| `GET` | `/api/v1/crm/tasks/{task}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Crm\TaskController@show` |
| `PATCH` | `/api/v1/crm/tasks/{task}` | Qeydi yeniləyir | Tenant Bearer + filial | `Crm\TaskController@update` |
| `PUT` | `/api/v1/crm/tasks/{task}` | Qeydi yeniləyir | Tenant Bearer + filial | `Crm\TaskController@update` |

## İnsan resursları

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/departments` | Siyahı oxuyur | Tenant Bearer | `Hr\DepartmentController@index` |
| `POST` | `/api/v1/departments` | Yeni qeyd yaradır | Tenant Bearer | `Hr\DepartmentController@store` |
| `DELETE` | `/api/v1/departments/{department}` | Qeydi silir | Tenant Bearer | `Hr\DepartmentController@destroy` |
| `GET` | `/api/v1/departments/{department}` | Bir qeydi oxuyur | Tenant Bearer | `Hr\DepartmentController@show` |
| `PATCH` | `/api/v1/departments/{department}` | Qeydi yeniləyir | Tenant Bearer | `Hr\DepartmentController@update` |
| `PUT` | `/api/v1/departments/{department}` | Qeydi yeniləyir | Tenant Bearer | `Hr\DepartmentController@update` |

## İnventar

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/price-types` | Siyahı oxuyur | Tenant Bearer | `Inventory\PriceTypeController@index` |
| `POST` | `/api/v1/price-types` | Yeni qeyd yaradır | Tenant Bearer | `Inventory\PriceTypeController@store` |
| `DELETE` | `/api/v1/price-types/{price_type}` | Qeydi silir | Tenant Bearer | `Inventory\PriceTypeController@destroy` |
| `GET` | `/api/v1/price-types/{price_type}` | Bir qeydi oxuyur | Tenant Bearer | `Inventory\PriceTypeController@show` |
| `PATCH` | `/api/v1/price-types/{price_type}` | Qeydi yeniləyir | Tenant Bearer | `Inventory\PriceTypeController@update` |
| `PUT` | `/api/v1/price-types/{price_type}` | Qeydi yeniləyir | Tenant Bearer | `Inventory\PriceTypeController@update` |

## Onlayn mağaza

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/store/v1/{store}/categories` | Məlumatı oxuyur | Açıq / route-a görə | `Store\PublicStoreController@categories` |
| `POST` | `/api/store/v1/{store}/checkout` | Yeni qeyd yaradır | Açıq / route-a görə | `Store\PublicStoreCheckoutController@store` |
| `GET` | `/api/store/v1/{store}/products` | Məlumatı oxuyur | Açıq / route-a görə | `Store\PublicStoreController@products` |
| `GET` | `/api/store/v1/{store}/products/{product}` | Məlumatı oxuyur | Açıq / route-a görə | `Store\PublicStoreController@product` |
| `GET` | `/api/store/v1/{store}/settings` | Məlumatı oxuyur | Açıq / route-a görə | `Store\PublicStoreController@settings` |
| `GET` | `/api/v1/store/configuration` | Bir qeydi oxuyur | Tenant Bearer | `Store\StoreConfigurationController@show` |
| `PUT` | `/api/v1/store/configuration` | Qeydi yeniləyir | Tenant Bearer | `Store\StoreConfigurationController@update` |
| `GET` | `/api/v1/store/products` | Siyahı oxuyur | Tenant Bearer | `Store\StoreProductPublicationController@index` |
| `PATCH` | `/api/v1/store/products/{product}` | Qeydi yeniləyir | Tenant Bearer | `Store\StoreProductPublicationController@update` |

