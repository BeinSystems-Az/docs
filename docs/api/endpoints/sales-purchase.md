---
title: Satış və alış
---

# Satış və alış

Bu səhifə aktiv ERP API route-larının statik referansıdır. İdentifikatorlar ayrıca qeyd edilmədikdə UUID-dir.

## `/api/v1/invoices-in`

### `GET` — Invoices In: Siyahı

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `invoices-in.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `q` | query | Xeyr | Mətn üzrə axtarış. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Invoices In: Yarat

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `invoices-in.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `purchaseInvoice` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `origin_type` | string | purchase_order |
| `origin_id` | string | — |
| `currency_id` | string | — |
| `user_id` | string | — |
| `items` | array | — |
| `stock_id` | string | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/invoices-in/{id}/state`

### `PATCH` — Invoices In: Vəziyyəti dəyiş

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `invoices-in.change-state`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `state` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/invoices-in/{invoices_in}`

### `GET` — Invoices In: Detalı göstər

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `invoices-in.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `invoices_in` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Invoices In: Yenilə

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `invoices-in.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `invoices_in` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `purchaseInvoice` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `origin_type` | string | purchase_order |
| `origin_id` | string | — |
| `currency_id` | string | — |
| `user_id` | string | — |
| `items` | array | — |
| `stock_id` | string | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Invoices In: Yenilə

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `invoices-in.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `invoices_in` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `purchaseInvoice` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `origin_type` | string | purchase_order |
| `origin_id` | string | — |
| `currency_id` | string | — |
| `user_id` | string | — |
| `items` | array | — |
| `stock_id` | string | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Invoices In: Sil

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `invoices-in.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `invoices_in` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/purchase-invoices`

### `GET` — Purchase Invoices: Siyahı

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-invoices.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `q` | query | Xeyr | Mətn üzrə axtarış. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Purchase Invoices: Yarat

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-invoices.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `purchaseInvoice` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `origin_type` | string | purchase_order |
| `origin_id` | string | — |
| `currency_id` | string | — |
| `user_id` | string | — |
| `items` | array | — |
| `stock_id` | string | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/purchase-invoices/{id}/state`

### `PATCH` — Purchase Invoices: Vəziyyəti dəyiş

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-invoices.change-state`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `id` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `state` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/purchase-invoices/{purchase_invoice}`

### `GET` — Purchase Invoices: Detalı göstər

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-invoices.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_invoice` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Purchase Invoices: Yenilə

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-invoices.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_invoice` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `purchaseInvoice` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `origin_type` | string | purchase_order |
| `origin_id` | string | — |
| `currency_id` | string | — |
| `user_id` | string | — |
| `items` | array | — |
| `stock_id` | string | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Purchase Invoices: Yenilə

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-invoices.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_invoice` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `purchaseInvoice` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `origin_type` | string | purchase_order |
| `origin_id` | string | — |
| `currency_id` | string | — |
| `user_id` | string | — |
| `items` | array | — |
| `stock_id` | string | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Purchase Invoices: Sil

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-invoices.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_invoice` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/purchase-orders`

### `GET` — Purchase Orders: Siyahı

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-orders.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `q` | query | Xeyr | Mətn üzrə axtarış. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Purchase Orders: Yarat

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-orders.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `user_id` | string | — |
| `currency_id` | string | — |
| `supplier_id` | string | — |
| `stock_id` | string | — |
| `global_discount_type` | string | — |
| `global_discount_value` | string | — |
| `description` | string | — |
| `state` | string | — |
| `date` | string | — |
| `owner_id` | string | — |
| `items` | array | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/purchase-orders/{purchaseOrderId}/state`

### `PATCH` — Purchase Orders: Vəziyyəti dəyiş

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-orders.change-state`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchaseOrderId` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `state` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/purchase-orders/{purchase_order}`

### `GET` — Purchase Orders: Detalı göstər

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-orders.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Purchase Orders: Yenilə

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-orders.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `user_id` | string | — |
| `currency_id` | string | — |
| `supplier_id` | string | — |
| `stock_id` | string | — |
| `global_discount_type` | string | — |
| `global_discount_value` | string | — |
| `description` | string | — |
| `state` | string | — |
| `date` | string | — |
| `owner_id` | string | — |
| `items` | array | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Purchase Orders: Yenilə

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-orders.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `user_id` | string | — |
| `currency_id` | string | — |
| `supplier_id` | string | — |
| `stock_id` | string | — |
| `global_discount_type` | string | — |
| `global_discount_value` | string | — |
| `description` | string | — |
| `state` | string | — |
| `date` | string | — |
| `owner_id` | string | — |
| `items` | array | — |
| `customFields` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Purchase Orders: Sil

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-orders.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/purchase-receipts`

### `GET` — Purchase Receipts: Siyahı

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-receipts.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Purchase Receipts: Yarat

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-receipts.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `currency_id` | string | — |
| `origin_type` | string | — |
| `origin_id` | string | — |
| `supplier_id` | string | — |
| `stock_id` | string | — |
| `date` | string | — |
| `note` | string | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |
| `expenses` | array | — |
| `items` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır. `data` sahələri: `id`, `sequence`, `origin_type`, `origin_id`, `product_id`, `product_name`, `unit_id`, `unit_name`, `packaging_id`, `packaging_quantity`, `quantity`, `unit_cost`, `discount`, `discount_amount`, `subtotal`, `global_discount_amount`, `taxes`, `taxes_names`, `applications`, `net_amount`, `tax_amount`, `gross_amount`.

## `/api/v1/purchase-receipts/{purchaseReceipt}/state`

### `PATCH` — Purchase Receipts: Vəziyyəti dəyiş

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-receipts.change-state`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchaseReceipt` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `state` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır. `data` sahələri: `id`, `sequence`, `origin_type`, `origin_id`, `product_id`, `product_name`, `unit_id`, `unit_name`, `packaging_id`, `packaging_quantity`, `quantity`, `unit_cost`, `discount`, `discount_amount`, `subtotal`, `global_discount_amount`, `taxes`, `taxes_names`, `applications`, `net_amount`, `tax_amount`, `gross_amount`.

## `/api/v1/purchase-receipts/{purchase_receipt}`

### `GET` — Purchase Receipts: Detalı göstər

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-receipts.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_receipt` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır. `data` sahələri: `id`, `sequence`, `origin_type`, `origin_id`, `product_id`, `product_name`, `unit_id`, `unit_name`, `packaging_id`, `packaging_quantity`, `quantity`, `unit_cost`, `discount`, `discount_amount`, `subtotal`, `global_discount_amount`, `taxes`, `taxes_names`, `applications`, `net_amount`, `tax_amount`, `gross_amount`.

### `PUT` — Purchase Receipts: Yenilə

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-receipts.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_receipt` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `currency_id` | string | — |
| `origin_type` | string | — |
| `origin_id` | string | — |
| `supplier_id` | string | — |
| `stock_id` | string | — |
| `date` | string | — |
| `note` | string | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |
| `expenses` | array | — |
| `items` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır. `data` sahələri: `id`, `sequence`, `origin_type`, `origin_id`, `product_id`, `product_name`, `unit_id`, `unit_name`, `packaging_id`, `packaging_quantity`, `quantity`, `unit_cost`, `discount`, `discount_amount`, `subtotal`, `global_discount_amount`, `taxes`, `taxes_names`, `applications`, `net_amount`, `tax_amount`, `gross_amount`.

### `PATCH` — Purchase Receipts: Yenilə

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-receipts.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_receipt` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `currency_id` | string | — |
| `origin_type` | string | — |
| `origin_id` | string | — |
| `supplier_id` | string | — |
| `stock_id` | string | — |
| `date` | string | — |
| `note` | string | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |
| `expenses` | array | — |
| `items` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır. `data` sahələri: `id`, `sequence`, `origin_type`, `origin_id`, `product_id`, `product_name`, `unit_id`, `unit_name`, `packaging_id`, `packaging_quantity`, `quantity`, `unit_cost`, `discount`, `discount_amount`, `subtotal`, `global_discount_amount`, `taxes`, `taxes_names`, `applications`, `net_amount`, `tax_amount`, `gross_amount`.

### `DELETE` — Purchase Receipts: Sil

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-receipts.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_receipt` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır. `data` sahələri: `id`, `sequence`, `origin_type`, `origin_id`, `product_id`, `product_name`, `unit_id`, `unit_name`, `packaging_id`, `packaging_quantity`, `quantity`, `unit_cost`, `discount`, `discount_amount`, `subtotal`, `global_discount_amount`, `taxes`, `taxes_names`, `applications`, `net_amount`, `tax_amount`, `gross_amount`.

## `/api/v1/purchase-returns`

### `GET` — Purchase Returns: Siyahı

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-returns.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Purchase Returns: Yarat

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-returns.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `purchaseReturn` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `note` | string | — |
| `currency_id` | string | — |
| `stock_id` | string | — |
| `origin_type` | string | purchase_receipt |
| `origin_id` | string | — |
| `items` | array | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/purchase-returns/{entry}/state`

### `PATCH` — Purchase Returns: Vəziyyəti dəyiş

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-returns.change-state`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

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

## `/api/v1/purchase-returns/{purchase_return}`

### `GET` — Purchase Returns: Detalı göstər

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-returns.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_return` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Purchase Returns: Yenilə

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-returns.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_return` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `purchaseReturn` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `note` | string | — |
| `currency_id` | string | — |
| `stock_id` | string | — |
| `origin_type` | string | purchase_receipt |
| `origin_id` | string | — |
| `items` | array | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Purchase Returns: Yenilə

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-returns.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_return` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `purchaseReturn` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `note` | string | — |
| `currency_id` | string | — |
| `stock_id` | string | — |
| `origin_type` | string | purchase_receipt |
| `origin_id` | string | — |
| `items` | array | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Purchase Returns: Sil

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `purchase-returns.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `purchase_return` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/refunds-in`

### `GET` — Refunds In: Siyahı

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `refunds-in.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Refunds In: Yarat

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `refunds-in.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `purchaseReturn` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `note` | string | — |
| `currency_id` | string | — |
| `stock_id` | string | — |
| `origin_type` | string | purchase_receipt |
| `origin_id` | string | — |
| `items` | array | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/refunds-in/{entry}/state`

### `PATCH` — Refunds In: Vəziyyəti dəyiş

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `refunds-in.change-state`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

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

## `/api/v1/refunds-in/{refunds_in}`

### `GET` — Refunds In: Detalı göstər

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `refunds-in.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `refunds_in` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Refunds In: Yenilə

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `refunds-in.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `refunds_in` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `purchaseReturn` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `note` | string | — |
| `currency_id` | string | — |
| `stock_id` | string | — |
| `origin_type` | string | purchase_receipt |
| `origin_id` | string | — |
| `items` | array | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Refunds In: Yenilə

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `refunds-in.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `refunds_in` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `purchaseReturn` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `note` | string | — |
| `currency_id` | string | — |
| `stock_id` | string | — |
| `origin_type` | string | purchase_receipt |
| `origin_id` | string | — |
| `items` | array | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Refunds In: Sil

Alış sənədi və tədarük prosesinin əməliyyatı. Backend route adı: `refunds-in.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `refunds_in` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/sale-invoices`

### `GET` — Sale Invoices: Siyahı

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-invoices.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Sale Invoices: Yarat

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-invoices.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `saleInvoice` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `currency_id` | string | — |
| `user_id` | string | — |
| `origin_type` | string | purchase_receipt, sale_order |
| `origin_id` | string | — |
| `note` | string | — |
| `items` | array | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/sale-invoices/{entry}/state`

### `PATCH` — Sale Invoices: Vəziyyəti dəyiş

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-invoices.change-state`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

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

## `/api/v1/sale-invoices/{sale_invoice}`

### `GET` — Sale Invoices: Detalı göstər

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-invoices.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_invoice` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Sale Invoices: Yenilə

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-invoices.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_invoice` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `saleInvoice` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `currency_id` | string | — |
| `user_id` | string | — |
| `origin_type` | string | purchase_receipt, sale_order |
| `origin_id` | string | — |
| `note` | string | — |
| `items` | array | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Sale Invoices: Yenilə

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-invoices.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_invoice` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `saleInvoice` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `currency_id` | string | — |
| `user_id` | string | — |
| `origin_type` | string | purchase_receipt, sale_order |
| `origin_id` | string | — |
| `note` | string | — |
| `items` | array | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Sale Invoices: Sil

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-invoices.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_invoice` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/sale-orders`

### `GET` — Sale Orders: Siyahı

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-orders.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `q` | query | Xeyr | Mətn üzrə axtarış. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Sale Orders: Yarat

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-orders.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `user_id` | string | — |
| `customer_id` | string | — |
| `stock_id` | string | — |
| `currency_id` | string | — |
| `date` | string | — |
| `expiration_date` | string | — |
| `description` | string | — |
| `state` | string | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |
| `items` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır. `data` sahələri: `id`, `name`, `user_id`, `user`, `user_name`, `customer_id`, `customer`, `customer_name`, `stock_id`, `stock`, `stock_name`, `currency_id`, `currency`, `currency_name`, `currency_code`, `currency_symbol`, `currency_decimal_places`, `date`, `expiration_date`, `description`, `state`, `state_color`, `state_color_hex`, `states`, `total_quantity`, `total_net`, `total_tax`, `total_gross`, `global_discount_type`, `global_discount_value`, `global_discount_amount`, `version`, `created_at`, `updated_at`, `items`.

## `/api/v1/sale-orders/{sale_order}`

### `GET` — Sale Orders: Detalı göstər

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-orders.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır. `data` sahələri: `id`, `name`, `user_id`, `user`, `user_name`, `customer_id`, `customer`, `customer_name`, `stock_id`, `stock`, `stock_name`, `currency_id`, `currency`, `currency_name`, `currency_code`, `currency_symbol`, `currency_decimal_places`, `date`, `expiration_date`, `description`, `state`, `state_color`, `state_color_hex`, `states`, `total_quantity`, `total_net`, `total_tax`, `total_gross`, `global_discount_type`, `global_discount_value`, `global_discount_amount`, `version`, `created_at`, `updated_at`, `items`.

### `PUT` — Sale Orders: Yenilə

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-orders.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `user_id` | string | — |
| `customer_id` | string | — |
| `stock_id` | string | — |
| `currency_id` | string | — |
| `date` | string | — |
| `expiration_date` | string | — |
| `description` | string | — |
| `state` | string | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |
| `items` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır. `data` sahələri: `id`, `name`, `user_id`, `user`, `user_name`, `customer_id`, `customer`, `customer_name`, `stock_id`, `stock`, `stock_name`, `currency_id`, `currency`, `currency_name`, `currency_code`, `currency_symbol`, `currency_decimal_places`, `date`, `expiration_date`, `description`, `state`, `state_color`, `state_color_hex`, `states`, `total_quantity`, `total_net`, `total_tax`, `total_gross`, `global_discount_type`, `global_discount_value`, `global_discount_amount`, `version`, `created_at`, `updated_at`, `items`.

### `PATCH` — Sale Orders: Yenilə

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-orders.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `name` | string | — |
| `user_id` | string | — |
| `customer_id` | string | — |
| `stock_id` | string | — |
| `currency_id` | string | — |
| `date` | string | — |
| `expiration_date` | string | — |
| `description` | string | — |
| `state` | string | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |
| `items` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır. `data` sahələri: `id`, `name`, `user_id`, `user`, `user_name`, `customer_id`, `customer`, `customer_name`, `stock_id`, `stock`, `stock_name`, `currency_id`, `currency`, `currency_name`, `currency_code`, `currency_symbol`, `currency_decimal_places`, `date`, `expiration_date`, `description`, `state`, `state_color`, `state_color_hex`, `states`, `total_quantity`, `total_net`, `total_tax`, `total_gross`, `global_discount_type`, `global_discount_value`, `global_discount_amount`, `version`, `created_at`, `updated_at`, `items`.

### `DELETE` — Sale Orders: Sil

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-orders.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır. `data` sahələri: `id`, `name`, `user_id`, `user`, `user_name`, `customer_id`, `customer`, `customer_name`, `stock_id`, `stock`, `stock_name`, `currency_id`, `currency`, `currency_name`, `currency_code`, `currency_symbol`, `currency_decimal_places`, `date`, `expiration_date`, `description`, `state`, `state_color`, `state_color_hex`, `states`, `total_quantity`, `total_net`, `total_tax`, `total_gross`, `global_discount_type`, `global_discount_value`, `global_discount_amount`, `version`, `created_at`, `updated_at`, `items`.

## `/api/v1/sale-orders/{sale_order}/state`

### `PATCH` — Sale Orders: Vəziyyəti dəyiş

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-orders.change-state`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_order` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `state` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır. `data` sahələri: `id`, `name`, `user_id`, `user`, `user_name`, `customer_id`, `customer`, `customer_name`, `stock_id`, `stock`, `stock_name`, `currency_id`, `currency`, `currency_name`, `currency_code`, `currency_symbol`, `currency_decimal_places`, `date`, `expiration_date`, `description`, `state`, `state_color`, `state_color_hex`, `states`, `total_quantity`, `total_net`, `total_tax`, `total_gross`, `global_discount_type`, `global_discount_value`, `global_discount_amount`, `version`, `created_at`, `updated_at`, `items`.

## `/api/v1/sale-receipts`

### `GET` — Sale Receipts: Siyahı

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-receipts.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Sale Receipts: Yarat

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-receipts.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `currency_id` | string | — |
| `customer_id` | string | — |
| `stock_id` | string | — |
| `date` | string | — |
| `note` | string | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |
| `origin_type` | string | sale_order, purchase_receipt, sale_invoice |
| `origin_id` | string | — |
| `expenses` | array | — |
| `items` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/sale-receipts/{sale_receipt}`

### `GET` — Sale Receipts: Detalı göstər

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-receipts.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_receipt` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Sale Receipts: Yenilə

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-receipts.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_receipt` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `currency_id` | string | — |
| `customer_id` | string | — |
| `stock_id` | string | — |
| `date` | string | — |
| `note` | string | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |
| `origin_type` | string | sale_order, purchase_receipt, sale_invoice |
| `origin_id` | string | — |
| `expenses` | array | — |
| `items` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Sale Receipts: Yenilə

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-receipts.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_receipt` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `currency_id` | string | — |
| `customer_id` | string | — |
| `stock_id` | string | — |
| `date` | string | — |
| `note` | string | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |
| `origin_type` | string | sale_order, purchase_receipt, sale_invoice |
| `origin_id` | string | — |
| `expenses` | array | — |
| `items` | array | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Sale Receipts: Sil

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-receipts.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_receipt` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/sale-receipts/{sale_receipt}/state`

### `PATCH` — Sale Receipts: Vəziyyəti dəyiş

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-receipts.change-state`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_receipt` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `state` | string | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/sale-returns`

### `GET` — Sale Returns: Siyahı

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-returns.index`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |
| `page` | query | Xeyr | Səhifə nömrəsi. |
| `per_page` | query | Xeyr | Səhifədə element sayı. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `POST` — Sale Returns: Yarat

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-returns.store`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `saleReturn` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `stock_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `note` | string | — |
| `currency_id` | string | — |
| `origin_type` | string | sale_receipt |
| `origin_id` | string | — |
| `items` | array | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

## `/api/v1/sale-returns/{entry}/state`

### `PATCH` — Sale Returns: Vəziyyəti dəyiş

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-returns.change-state`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

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

## `/api/v1/sale-returns/{sale_return}`

### `GET` — Sale Returns: Detalı göstər

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-returns.show`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_return` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PUT` — Sale Returns: Yenilə

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-returns.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_return` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `saleReturn` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `stock_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `note` | string | — |
| `currency_id` | string | — |
| `origin_type` | string | sale_receipt |
| `origin_id` | string | — |
| `items` | array | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `PATCH` — Sale Returns: Yenilə

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-returns.update`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_return` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Request body**

| Sahə | Tip | Dəyərlər |
| --- | --- | --- |
| `saleReturn` | string | — |
| `name` | string | — |
| `partner_id` | string | — |
| `stock_id` | string | — |
| `date` | string | — |
| `invoice_date` | string | — |
| `due_date` | string | — |
| `ref` | string | — |
| `note` | string | — |
| `currency_id` | string | — |
| `origin_type` | string | sale_receipt |
| `origin_id` | string | — |
| `items` | array | — |
| `global_discount_type` | string | percent, fixed |
| `global_discount_value` | number | — |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

### `DELETE` — Sale Returns: Sil

Satış sənədi və satış prosesinin əməliyyatı. Backend route adı: `sale-returns.destroy`. Kontrakt controller və validation DTO mənbəyindən çıxarılıb.

**Autentifikasiya:** Bearer JWT

**Parametrlər**

| Ad | Yer | Məcburi | İzah |
| --- | --- | --- | --- |
| `sale_return` | path | Bəli | Resursun UUID identifikatoru. |
| `X-Branch-Id` | header | Xeyr | Filial konteksti. JWT sorğularında boş olduqda istifadəçinin default filialı tətbiq edilir. |

**Response:** uğurlu cavab `status`, `message`, `data` zərfində qaytarılır.

