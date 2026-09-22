---
sidebar_position: 4
---

# Satış və alış

> Cari backend snapshotından yaranıb: **28 HTTP operation**. Bu texniki indeks path və handler üçündür; field və JSON nümunələri resursun öz səhifəsində saxlanılır.

## Satış

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/sale-orders` | Siyahı oxuyur | Tenant Bearer + filial | `Sales\SaleOrderController@index` |
| `POST` | `/api/v1/sale-orders` | Yeni qeyd yaradır | Tenant Bearer + filial | `Sales\SaleOrderController@store` |
| `DELETE` | `/api/v1/sale-orders/{sale_order}` | Qeydi silir | Tenant Bearer + filial | `Sales\SaleOrderController@destroy` |
| `GET` | `/api/v1/sale-orders/{sale_order}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Sales\SaleOrderController@show` |
| `PATCH` | `/api/v1/sale-orders/{sale_order}` | Qeydi yeniləyir | Tenant Bearer + filial | `Sales\SaleOrderController@update` |
| `PUT` | `/api/v1/sale-orders/{sale_order}` | Qeydi yeniləyir | Tenant Bearer + filial | `Sales\SaleOrderController@update` |
| `PATCH` | `/api/v1/sale-orders/{sale_order}/state` | Qeydi dəyişir | Tenant Bearer + filial | `Sales\SaleOrderController@changeState` |
| `GET` | `/api/v1/sale-receipts` | Siyahı oxuyur | Tenant Bearer + filial | `Sales\SaleReceiptController@index` |
| `POST` | `/api/v1/sale-receipts` | Yeni qeyd yaradır | Tenant Bearer + filial | `Sales\SaleReceiptController@store` |
| `DELETE` | `/api/v1/sale-receipts/{sale_receipt}` | Qeydi silir | Tenant Bearer + filial | `Sales\SaleReceiptController@destroy` |
| `GET` | `/api/v1/sale-receipts/{sale_receipt}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Sales\SaleReceiptController@show` |
| `PATCH` | `/api/v1/sale-receipts/{sale_receipt}` | Qeydi yeniləyir | Tenant Bearer + filial | `Sales\SaleReceiptController@update` |
| `PUT` | `/api/v1/sale-receipts/{sale_receipt}` | Qeydi yeniləyir | Tenant Bearer + filial | `Sales\SaleReceiptController@update` |
| `PATCH` | `/api/v1/sale-receipts/{sale_receipt}/state` | Qeydi dəyişir | Tenant Bearer + filial | `Sales\SaleReceiptController@changeState` |

## Satınalma

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/purchase-orders` | Siyahı oxuyur | Tenant Bearer + filial | `Purchase\PurchaseOrderController@index` |
| `POST` | `/api/v1/purchase-orders` | Yeni qeyd yaradır | Tenant Bearer + filial | `Purchase\PurchaseOrderController@store` |
| `DELETE` | `/api/v1/purchase-orders/{purchase_order}` | Qeydi silir | Tenant Bearer + filial | `Purchase\PurchaseOrderController@destroy` |
| `GET` | `/api/v1/purchase-orders/{purchase_order}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Purchase\PurchaseOrderController@show` |
| `PATCH` | `/api/v1/purchase-orders/{purchase_order}` | Qeydi yeniləyir | Tenant Bearer + filial | `Purchase\PurchaseOrderController@update` |
| `PUT` | `/api/v1/purchase-orders/{purchase_order}` | Qeydi yeniləyir | Tenant Bearer + filial | `Purchase\PurchaseOrderController@update` |
| `PATCH` | `/api/v1/purchase-orders/{purchaseOrderId}/state` | Qeydi dəyişir | Tenant Bearer + filial | `Purchase\PurchaseOrderController@changeState` |
| `GET` | `/api/v1/purchase-receipts` | Siyahı oxuyur | Tenant Bearer + filial | `Purchase\PurchaseReceiptController@index` |
| `POST` | `/api/v1/purchase-receipts` | Yeni qeyd yaradır | Tenant Bearer + filial | `Purchase\PurchaseReceiptController@store` |
| `DELETE` | `/api/v1/purchase-receipts/{purchase_receipt}` | Qeydi silir | Tenant Bearer + filial | `Purchase\PurchaseReceiptController@destroy` |
| `GET` | `/api/v1/purchase-receipts/{purchase_receipt}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Purchase\PurchaseReceiptController@show` |
| `PATCH` | `/api/v1/purchase-receipts/{purchase_receipt}` | Qeydi yeniləyir | Tenant Bearer + filial | `Purchase\PurchaseReceiptController@update` |
| `PUT` | `/api/v1/purchase-receipts/{purchase_receipt}` | Qeydi yeniləyir | Tenant Bearer + filial | `Purchase\PurchaseReceiptController@update` |
| `PATCH` | `/api/v1/purchase-receipts/{purchaseReceipt}/state` | Qeydi dəyişir | Tenant Bearer + filial | `Purchase\PurchaseReceiptController@changeState` |

