---
sidebar_position: 5
---

# Anbar və stok

> Cari backend snapshotından yaranıb: **58 HTTP operation**. Bu texniki indeks path və handler üçündür; field və JSON nümunələri resursun öz səhifəsində saxlanılır.

## Anbar və stok

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/product-suppliers` | Məlumatı oxuyur | Tenant Bearer + filial | `Stock\StockReplenishmentConfigController@suppliers` |
| `POST` | `/api/v1/product-suppliers` | Əməliyyatı başladır | Tenant Bearer + filial | `Stock\StockReplenishmentConfigController@storeSupplier` |
| `DELETE` | `/api/v1/product-suppliers/{productSupplier}` | Qeydi silir | Tenant Bearer + filial | `Stock\StockReplenishmentConfigController@destroySupplier` |
| `PUT` | `/api/v1/product-suppliers/{productSupplier}` | Qeydi dəyişir | Tenant Bearer + filial | `Stock\StockReplenishmentConfigController@updateSupplier` |
| `POST` | `/api/v1/stock-availability/as-of` | Əməliyyatı başladır | Tenant Bearer + filial | `Stock\HistoricalStockAvailabilityController` |
| `GET` | `/api/v1/stock-documents` | Siyahı oxuyur | Tenant Bearer + filial | `Stock\StockDocumentController@index` |
| `POST` | `/api/v1/stock-documents` | Yeni qeyd yaradır | Tenant Bearer + filial | `Stock\StockDocumentController@store` |
| `DELETE` | `/api/v1/stock-documents/{stock_document}` | Qeydi silir | Tenant Bearer + filial | `Stock\StockDocumentController@destroy` |
| `GET` | `/api/v1/stock-documents/{stock_document}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Stock\StockDocumentController@show` |
| `PATCH` | `/api/v1/stock-documents/{stock_document}` | Qeydi yeniləyir | Tenant Bearer + filial | `Stock\StockDocumentController@update` |
| `PUT` | `/api/v1/stock-documents/{stock_document}` | Qeydi yeniləyir | Tenant Bearer + filial | `Stock\StockDocumentController@update` |
| `POST` | `/api/v1/stock-documents/{stockDocument}/cancel` | Əməliyyatı başladır | Tenant Bearer + filial | `Stock\StockDocumentController@cancel` |
| `POST` | `/api/v1/stock-documents/{stockDocument}/draft` | Əməliyyatı başladır | Tenant Bearer + filial | `Stock\StockDocumentController@draft` |
| `POST` | `/api/v1/stock-documents/{stockDocument}/post` | Əməliyyatı başladır | Tenant Bearer + filial | `Stock\StockDocumentController@post` |
| `GET` | `/api/v1/stock-locations` | Siyahı oxuyur | Tenant Bearer + filial | `Stock\StockLocationController@index` |
| `POST` | `/api/v1/stock-locations` | Yeni qeyd yaradır | Tenant Bearer + filial | `Stock\StockLocationController@store` |
| `DELETE` | `/api/v1/stock-locations/{stock_location}` | Qeydi silir | Tenant Bearer + filial | `Stock\StockLocationController@destroy` |
| `GET` | `/api/v1/stock-locations/{stock_location}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Stock\StockLocationController@show` |
| `PATCH` | `/api/v1/stock-locations/{stock_location}` | Qeydi yeniləyir | Tenant Bearer + filial | `Stock\StockLocationController@update` |
| `PUT` | `/api/v1/stock-locations/{stock_location}` | Qeydi yeniləyir | Tenant Bearer + filial | `Stock\StockLocationController@update` |
| `GET` | `/api/v1/stock-lots` | Siyahı oxuyur | Tenant Bearer + filial | `Stock\StockLotController@index` |
| `POST` | `/api/v1/stock-lots` | Yeni qeyd yaradır | Tenant Bearer + filial | `Stock\StockLotController@store` |
| `GET` | `/api/v1/stock-lots/{stock_lot}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Stock\StockLotController@show` |
| `PATCH` | `/api/v1/stock-lots/{stock_lot}` | Qeydi yeniləyir | Tenant Bearer + filial | `Stock\StockLotController@update` |
| `PUT` | `/api/v1/stock-lots/{stock_lot}` | Qeydi yeniləyir | Tenant Bearer + filial | `Stock\StockLotController@update` |
| `GET` | `/api/v1/stock-reorder-rules` | Məlumatı oxuyur | Tenant Bearer + filial | `Stock\StockReplenishmentConfigController@rules` |
| `POST` | `/api/v1/stock-reorder-rules` | Əməliyyatı başladır | Tenant Bearer + filial | `Stock\StockReplenishmentConfigController@storeRule` |
| `DELETE` | `/api/v1/stock-reorder-rules/{stockReorderRule}` | Qeydi silir | Tenant Bearer + filial | `Stock\StockReplenishmentConfigController@destroyRule` |
| `PUT` | `/api/v1/stock-reorder-rules/{stockReorderRule}` | Qeydi dəyişir | Tenant Bearer + filial | `Stock\StockReplenishmentConfigController@updateRule` |
| `POST` | `/api/v1/stock-replenishments/preview` | Əməliyyatı başladır | Tenant Bearer + filial | `Stock\StockReplenishmentController@preview` |
| `POST` | `/api/v1/stock-replenishments/purchase-orders` | Əməliyyatı başladır | Tenant Bearer + filial | `Stock\StockReplenishmentController@createOrders` |
| `GET` | `/api/v1/stock-reports/low-stock` | Məlumatı oxuyur | Tenant Bearer + filial | `Stock\StockReportController@lowStock` |
| `GET` | `/api/v1/stock-reports/on-hand` | Məlumatı oxuyur | Tenant Bearer + filial | `Stock\StockReportController@onHand` |
| `GET` | `/api/v1/stock-reports/on-hand-by-packaging` | Məlumatı oxuyur | Tenant Bearer + filial | `Stock\StockReportController@onHandByPackaging` |
| `GET` | `/api/v1/stock-reports/on-hand-by-warehouse` | Məlumatı oxuyur | Tenant Bearer + filial | `Stock\StockReportController@onHandByWarehouse` |
| `GET` | `/api/v1/stock-reports/stock-card` | Məlumatı oxuyur | Tenant Bearer + filial | `Stock\StockReportController@stockCard` |
| `GET` | `/api/v1/stock-reports/storage-duration` | Məlumatı oxuyur | Tenant Bearer + filial | `Stock\StockReportController@storageDuration` |
| `GET` | `/api/v1/stock-reports/turnover` | Məlumatı oxuyur | Tenant Bearer + filial | `Stock\StockReportController@turnover` |
| `GET` | `/api/v1/stock-reports/valuation` | Məlumatı oxuyur | Tenant Bearer + filial | `Stock\StockReportController@valuation` |
| `GET` | `/api/v1/stock-reservation-allocations/{allocation}/options` | Məlumatı oxuyur | Tenant Bearer + filial | `Stock\StockReservationController@allocationOptions` |
| `POST` | `/api/v1/stock-reservation-allocations/{allocation}/reallocate` | Əməliyyatı başladır | Tenant Bearer + filial | `Stock\StockReservationController@reallocate` |
| `GET` | `/api/v1/stock-reservations` | Siyahı oxuyur | Tenant Bearer + filial | `Stock\StockReservationController@index` |
| `GET` | `/api/v1/stock-reservations/{stockReservation}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Stock\StockReservationController@show` |
| `GET` | `/api/v1/stock-reservations/{stockReservation}/history` | Məlumatı oxuyur | Tenant Bearer + filial | `Stock\StockReservationController@history` |
| `POST` | `/api/v1/stock-reservations/{stockReservation}/release` | Əməliyyatı başladır | Tenant Bearer + filial | `Stock\StockReservationController@release` |
| `POST` | `/api/v1/stock-reservations/{stockReservation}/retry` | Əməliyyatı başladır | Tenant Bearer + filial | `Stock\StockReservationController@retry` |
| `GET` | `/api/v1/stock-revaluations` | Məlumatı oxuyur | Tenant Bearer + filial | `Stock\StockCostAdjustmentController@revaluations` |
| `POST` | `/api/v1/stock-revaluations` | Əməliyyatı başladır | Tenant Bearer + filial | `Stock\StockCostAdjustmentController@storeRevaluation` |
| `GET` | `/api/v1/stock-revaluations/{revaluation}` | Məlumatı oxuyur | Tenant Bearer + filial | `Stock\StockCostAdjustmentController@showRevaluation` |
| `PUT` | `/api/v1/stock-revaluations/{revaluation}` | Qeydi dəyişir | Tenant Bearer + filial | `Stock\StockCostAdjustmentController@updateRevaluation` |
| `POST` | `/api/v1/stock-revaluations/{revaluation}/cancel` | Əməliyyatı başladır | Tenant Bearer + filial | `Stock\StockCostAdjustmentController@cancelRevaluation` |
| `POST` | `/api/v1/stock-revaluations/{revaluation}/post` | Əməliyyatı başladır | Tenant Bearer + filial | `Stock\StockCostAdjustmentController@postRevaluation` |
| `GET` | `/api/v1/stocks` | Siyahı oxuyur | Tenant Bearer + filial | `Stock\StockController@index` |
| `POST` | `/api/v1/stocks` | Yeni qeyd yaradır | Tenant Bearer + filial | `Stock\StockController@store` |
| `DELETE` | `/api/v1/stocks/{stock}` | Qeydi silir | Tenant Bearer + filial | `Stock\StockController@destroy` |
| `GET` | `/api/v1/stocks/{stock}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Stock\StockController@show` |
| `PATCH` | `/api/v1/stocks/{stock}` | Qeydi yeniləyir | Tenant Bearer + filial | `Stock\StockController@update` |
| `PUT` | `/api/v1/stocks/{stock}` | Qeydi yeniləyir | Tenant Bearer + filial | `Stock\StockController@update` |

