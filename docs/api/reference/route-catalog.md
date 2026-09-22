---
sidebar_position: 2
---

# Tam API route kataloqu

> Bu səhifə `erp-backend`-in işlək Laravel route manifestindən avtomatik yaradılır. Buradakı hər sətir real route-dur; əl ilə dəyişməyin.

Snapshot: backend commit `93e08efa` + commit olunmamış işçi-ağacı dəyişiklikləri; **662 HTTP operation** və **380 unikal API URI**.

Bu kataloq endpointin mövcudluğu, HTTP metodu, handler-i və konteksti üçün tam indekstir. Body field-ləri və biznes təsiri üçün uyğun resurs səhifəsini, sonra backend-də controller → request/DTO → action/service → presenter zəncirini istifadə edin. Bu ayrım qeyri-dəqiq, avtomatik uydurulmuş kontraktların qarşısını alır.

## Kontekst açarı

| Dəyər | Mənası |
| --- | --- |
| `Tenant Bearer` | JWT və ya `bei_int_...` integration token tenant kontekstini açır. |
| `Tenant Bearer + filial` | Bearer credential-dan sonra branch middleware işləyir: oxuda `filter.branch_id`, yazmada body `branch_id`; field olmadıqda cari istifadəçi scope-u tətbiq edilir. |
| `POS cihaz tokeni` | POS sinxronizasiya protokolunun ayrıca cihaz credential-ı. |
| `Açıq / route-a görə` | Health, giriş və ya middleware-i route manifestində görünməyən endpoint; uyğun controller-i yoxlayın. |

## Anbar və stok

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/product-suppliers` | Məlumatı oxuyur | Tenant Bearer + filial | `—` | `Stock\StockReplenishmentConfigController@suppliers` |
| `POST` | `/api/v1/product-suppliers` | Əməliyyatı başladır | Tenant Bearer + filial | `—` | `Stock\StockReplenishmentConfigController@storeSupplier` |
| `DELETE` | `/api/v1/product-suppliers/{productSupplier}` | Qeydi silir | Tenant Bearer + filial | `—` | `Stock\StockReplenishmentConfigController@destroySupplier` |
| `PUT` | `/api/v1/product-suppliers/{productSupplier}` | Qeydi dəyişir | Tenant Bearer + filial | `—` | `Stock\StockReplenishmentConfigController@updateSupplier` |
| `POST` | `/api/v1/stock-availability/as-of` | Əməliyyatı başladır | Tenant Bearer + filial | `stock-availability.as-of` | `Stock\HistoricalStockAvailabilityController` |
| `GET` | `/api/v1/stock-documents` | Siyahı oxuyur | Tenant Bearer + filial | `stock-documents.index` | `Stock\StockDocumentController@index` |
| `POST` | `/api/v1/stock-documents` | Yeni qeyd yaradır | Tenant Bearer + filial | `stock-documents.store` | `Stock\StockDocumentController@store` |
| `DELETE` | `/api/v1/stock-documents/{stock_document}` | Qeydi silir | Tenant Bearer + filial | `stock-documents.destroy` | `Stock\StockDocumentController@destroy` |
| `GET` | `/api/v1/stock-documents/{stock_document}` | Bir qeydi oxuyur | Tenant Bearer + filial | `stock-documents.show` | `Stock\StockDocumentController@show` |
| `PATCH` | `/api/v1/stock-documents/{stock_document}` | Qeydi yeniləyir | Tenant Bearer + filial | `stock-documents.update` | `Stock\StockDocumentController@update` |
| `PUT` | `/api/v1/stock-documents/{stock_document}` | Qeydi yeniləyir | Tenant Bearer + filial | `stock-documents.update` | `Stock\StockDocumentController@update` |
| `POST` | `/api/v1/stock-documents/{stockDocument}/cancel` | Əməliyyatı başladır | Tenant Bearer + filial | `stock-documents.cancel` | `Stock\StockDocumentController@cancel` |
| `POST` | `/api/v1/stock-documents/{stockDocument}/draft` | Əməliyyatı başladır | Tenant Bearer + filial | `stock-documents.draft` | `Stock\StockDocumentController@draft` |
| `POST` | `/api/v1/stock-documents/{stockDocument}/post` | Əməliyyatı başladır | Tenant Bearer + filial | `stock-documents.post` | `Stock\StockDocumentController@post` |
| `GET` | `/api/v1/stock-locations` | Siyahı oxuyur | Tenant Bearer + filial | `stock-locations.index` | `Stock\StockLocationController@index` |
| `POST` | `/api/v1/stock-locations` | Yeni qeyd yaradır | Tenant Bearer + filial | `stock-locations.store` | `Stock\StockLocationController@store` |
| `DELETE` | `/api/v1/stock-locations/{stock_location}` | Qeydi silir | Tenant Bearer + filial | `stock-locations.destroy` | `Stock\StockLocationController@destroy` |
| `GET` | `/api/v1/stock-locations/{stock_location}` | Bir qeydi oxuyur | Tenant Bearer + filial | `stock-locations.show` | `Stock\StockLocationController@show` |
| `PATCH` | `/api/v1/stock-locations/{stock_location}` | Qeydi yeniləyir | Tenant Bearer + filial | `stock-locations.update` | `Stock\StockLocationController@update` |
| `PUT` | `/api/v1/stock-locations/{stock_location}` | Qeydi yeniləyir | Tenant Bearer + filial | `stock-locations.update` | `Stock\StockLocationController@update` |
| `GET` | `/api/v1/stock-lots` | Siyahı oxuyur | Tenant Bearer + filial | `stock-lots.index` | `Stock\StockLotController@index` |
| `POST` | `/api/v1/stock-lots` | Yeni qeyd yaradır | Tenant Bearer + filial | `stock-lots.store` | `Stock\StockLotController@store` |
| `GET` | `/api/v1/stock-lots/{stock_lot}` | Bir qeydi oxuyur | Tenant Bearer + filial | `stock-lots.show` | `Stock\StockLotController@show` |
| `PATCH` | `/api/v1/stock-lots/{stock_lot}` | Qeydi yeniləyir | Tenant Bearer + filial | `stock-lots.update` | `Stock\StockLotController@update` |
| `PUT` | `/api/v1/stock-lots/{stock_lot}` | Qeydi yeniləyir | Tenant Bearer + filial | `stock-lots.update` | `Stock\StockLotController@update` |
| `GET` | `/api/v1/stock-reorder-rules` | Məlumatı oxuyur | Tenant Bearer + filial | `—` | `Stock\StockReplenishmentConfigController@rules` |
| `POST` | `/api/v1/stock-reorder-rules` | Əməliyyatı başladır | Tenant Bearer + filial | `—` | `Stock\StockReplenishmentConfigController@storeRule` |
| `DELETE` | `/api/v1/stock-reorder-rules/{stockReorderRule}` | Qeydi silir | Tenant Bearer + filial | `—` | `Stock\StockReplenishmentConfigController@destroyRule` |
| `PUT` | `/api/v1/stock-reorder-rules/{stockReorderRule}` | Qeydi dəyişir | Tenant Bearer + filial | `—` | `Stock\StockReplenishmentConfigController@updateRule` |
| `POST` | `/api/v1/stock-replenishments/preview` | Əməliyyatı başladır | Tenant Bearer + filial | `stock-replenishments.preview` | `Stock\StockReplenishmentController@preview` |
| `POST` | `/api/v1/stock-replenishments/purchase-orders` | Əməliyyatı başladır | Tenant Bearer + filial | `stock-replenishments.purchase-orders` | `Stock\StockReplenishmentController@createOrders` |
| `GET` | `/api/v1/stock-reports/low-stock` | Məlumatı oxuyur | Tenant Bearer + filial | `stock-reports.low-stock` | `Stock\StockReportController@lowStock` |
| `GET` | `/api/v1/stock-reports/on-hand` | Məlumatı oxuyur | Tenant Bearer + filial | `stock-reports.on-hand` | `Stock\StockReportController@onHand` |
| `GET` | `/api/v1/stock-reports/on-hand-by-packaging` | Məlumatı oxuyur | Tenant Bearer + filial | `stock-reports.on-hand-by-packaging` | `Stock\StockReportController@onHandByPackaging` |
| `GET` | `/api/v1/stock-reports/on-hand-by-warehouse` | Məlumatı oxuyur | Tenant Bearer + filial | `stock-reports.on-hand-by-warehouse` | `Stock\StockReportController@onHandByWarehouse` |
| `GET` | `/api/v1/stock-reports/stock-card` | Məlumatı oxuyur | Tenant Bearer + filial | `stock-reports.stock-card` | `Stock\StockReportController@stockCard` |
| `GET` | `/api/v1/stock-reports/storage-duration` | Məlumatı oxuyur | Tenant Bearer + filial | `stock-reports.storage-duration` | `Stock\StockReportController@storageDuration` |
| `GET` | `/api/v1/stock-reports/turnover` | Məlumatı oxuyur | Tenant Bearer + filial | `stock-reports.turnover` | `Stock\StockReportController@turnover` |
| `GET` | `/api/v1/stock-reports/valuation` | Məlumatı oxuyur | Tenant Bearer + filial | `stock-reports.valuation` | `Stock\StockReportController@valuation` |
| `GET` | `/api/v1/stock-reservation-allocations/{allocation}/options` | Məlumatı oxuyur | Tenant Bearer + filial | `—` | `Stock\StockReservationController@allocationOptions` |
| `POST` | `/api/v1/stock-reservation-allocations/{allocation}/reallocate` | Əməliyyatı başladır | Tenant Bearer + filial | `—` | `Stock\StockReservationController@reallocate` |
| `GET` | `/api/v1/stock-reservations` | Siyahı oxuyur | Tenant Bearer + filial | `—` | `Stock\StockReservationController@index` |
| `GET` | `/api/v1/stock-reservations/{stockReservation}` | Bir qeydi oxuyur | Tenant Bearer + filial | `—` | `Stock\StockReservationController@show` |
| `GET` | `/api/v1/stock-reservations/{stockReservation}/history` | Məlumatı oxuyur | Tenant Bearer + filial | `—` | `Stock\StockReservationController@history` |
| `POST` | `/api/v1/stock-reservations/{stockReservation}/release` | Əməliyyatı başladır | Tenant Bearer + filial | `—` | `Stock\StockReservationController@release` |
| `POST` | `/api/v1/stock-reservations/{stockReservation}/retry` | Əməliyyatı başladır | Tenant Bearer + filial | `—` | `Stock\StockReservationController@retry` |
| `GET` | `/api/v1/stock-revaluations` | Məlumatı oxuyur | Tenant Bearer + filial | `—` | `Stock\StockCostAdjustmentController@revaluations` |
| `POST` | `/api/v1/stock-revaluations` | Əməliyyatı başladır | Tenant Bearer + filial | `—` | `Stock\StockCostAdjustmentController@storeRevaluation` |
| `GET` | `/api/v1/stock-revaluations/{revaluation}` | Məlumatı oxuyur | Tenant Bearer + filial | `—` | `Stock\StockCostAdjustmentController@showRevaluation` |
| `PUT` | `/api/v1/stock-revaluations/{revaluation}` | Qeydi dəyişir | Tenant Bearer + filial | `—` | `Stock\StockCostAdjustmentController@updateRevaluation` |
| `POST` | `/api/v1/stock-revaluations/{revaluation}/cancel` | Əməliyyatı başladır | Tenant Bearer + filial | `—` | `Stock\StockCostAdjustmentController@cancelRevaluation` |
| `POST` | `/api/v1/stock-revaluations/{revaluation}/post` | Əməliyyatı başladır | Tenant Bearer + filial | `—` | `Stock\StockCostAdjustmentController@postRevaluation` |
| `GET` | `/api/v1/stocks` | Siyahı oxuyur | Tenant Bearer + filial | `stock.index` | `Stock\StockController@index` |
| `POST` | `/api/v1/stocks` | Yeni qeyd yaradır | Tenant Bearer + filial | `stock.store` | `Stock\StockController@store` |
| `DELETE` | `/api/v1/stocks/{stock}` | Qeydi silir | Tenant Bearer + filial | `stock.destroy` | `Stock\StockController@destroy` |
| `GET` | `/api/v1/stocks/{stock}` | Bir qeydi oxuyur | Tenant Bearer + filial | `stock.show` | `Stock\StockController@show` |
| `PATCH` | `/api/v1/stocks/{stock}` | Qeydi yeniləyir | Tenant Bearer + filial | `stock.update` | `Stock\StockController@update` |
| `PUT` | `/api/v1/stocks/{stock}` | Qeydi yeniləyir | Tenant Bearer + filial | `stock.update` | `Stock\StockController@update` |

## Biznes şəbəkəsi

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/business-network/companies/search` | Məlumatı oxuyur | Tenant Bearer | `business-network.companies.search` | `BusinessNetwork\NetworkProfileController@search` |
| `GET` | `/api/v1/business-network/connections` | Siyahı oxuyur | Tenant Bearer | `business-network.connections.index` | `BusinessNetwork\NetworkConnectionController@index` |
| `POST` | `/api/v1/business-network/connections` | Yeni qeyd yaradır | Tenant Bearer | `business-network.connections.store` | `BusinessNetwork\NetworkConnectionController@store` |
| `DELETE` | `/api/v1/business-network/connections/{connection}` | Qeydi silir | Tenant Bearer | `business-network.connections.destroy` | `BusinessNetwork\NetworkConnectionController@destroy` |
| `PATCH` | `/api/v1/business-network/connections/{connection}` | Qeydi yeniləyir | Tenant Bearer | `business-network.connections.update` | `BusinessNetwork\NetworkConnectionController@update` |
| `POST` | `/api/v1/business-network/connections/{connection}/accept` | Əməliyyatı başladır | Tenant Bearer | `business-network.connections.accept` | `BusinessNetwork\NetworkConnectionController@accept` |
| `GET` | `/api/v1/business-network/connections/{connection}/accept-options` | Məlumatı oxuyur | Tenant Bearer | `business-network.mappings.accept-options` | `BusinessNetwork\NetworkMappingController@options` |
| `POST` | `/api/v1/business-network/connections/{connection}/documents/{sourceType}/{sourceId}/send` | Əməliyyatı başladır | Tenant Bearer | `business-network.documents.send` | `BusinessNetwork\NetworkExchangeController@send` |
| `GET` | `/api/v1/business-network/connections/{connection}/mapping-options` | Məlumatı oxuyur | Tenant Bearer | `business-network.mappings.options` | `BusinessNetwork\NetworkMappingController@options` |
| `GET` | `/api/v1/business-network/connections/{connection}/mappings` | Siyahı oxuyur | Tenant Bearer | `business-network.mappings.index` | `BusinessNetwork\NetworkMappingController@index` |
| `PUT` | `/api/v1/business-network/connections/{connection}/mappings` | Yeni qeyd yaradır | Tenant Bearer | `business-network.mappings.store` | `BusinessNetwork\NetworkMappingController@store` |
| `DELETE` | `/api/v1/business-network/connections/{connection}/mappings/{mapping}` | Qeydi silir | Tenant Bearer | `business-network.mappings.destroy` | `BusinessNetwork\NetworkMappingController@destroy` |
| `POST` | `/api/v1/business-network/connections/{connection}/reject` | Əməliyyatı başladır | Tenant Bearer | `business-network.connections.reject` | `BusinessNetwork\NetworkConnectionController@reject` |
| `GET` | `/api/v1/business-network/documents/{localType}/{localId}/history` | Məlumatı oxuyur | Tenant Bearer | `business-network.documents.history` | `BusinessNetwork\NetworkExchangeController@history` |
| `GET` | `/api/v1/business-network/exchanges` | Siyahı oxuyur | Tenant Bearer | `business-network.exchanges.index` | `BusinessNetwork\NetworkExchangeController@index` |
| `GET` | `/api/v1/business-network/exchanges/counts` | Məlumatı oxuyur | Tenant Bearer | `business-network.exchanges.counts` | `BusinessNetwork\NetworkExchangeController@counts` |
| `GET` | `/api/v1/business-network/profile` | Bir qeydi oxuyur | Tenant Bearer | `business-network.profile.show` | `BusinessNetwork\NetworkProfileController@show` |
| `GET` | `/api/v1/business-network/versions/{version}` | Bir qeydi oxuyur | Tenant Bearer | `business-network.versions.show` | `BusinessNetwork\NetworkExchangeController@show` |
| `POST` | `/api/v1/business-network/versions/{version}/accept` | Əməliyyatı başladır | Tenant Bearer | `business-network.versions.accept` | `BusinessNetwork\NetworkExchangeController@accept` |
| `POST` | `/api/v1/business-network/versions/{version}/cancel-request` | Əməliyyatı başladır | Tenant Bearer | `business-network.versions.cancel` | `BusinessNetwork\NetworkExchangeController@cancel` |
| `POST` | `/api/v1/business-network/versions/{version}/cancel-resolution` | Əməliyyatı başladır | Tenant Bearer | `business-network.versions.cancel-resolution` | `BusinessNetwork\NetworkExchangeController@resolveCancellation` |
| `GET` | `/api/v1/business-network/versions/{version}/preview` | Məlumatı oxuyur | Tenant Bearer | `business-network.versions.preview` | `BusinessNetwork\NetworkExchangeController@preview` |
| `POST` | `/api/v1/business-network/versions/{version}/reject` | Əməliyyatı başladır | Tenant Bearer | `business-network.versions.reject` | `BusinessNetwork\NetworkExchangeController@reject` |

## CRM

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/crm/dashboard` | Məlumatı oxuyur | Tenant Bearer + filial | `crm.dashboard` | `Crm\DashboardController` |
| `GET` | `/api/v1/crm/leads` | Siyahı oxuyur | Tenant Bearer + filial | `crm.leads.index` | `Crm\LeadController@index` |
| `POST` | `/api/v1/crm/leads` | Yeni qeyd yaradır | Tenant Bearer + filial | `crm.leads.store` | `Crm\LeadController@store` |
| `DELETE` | `/api/v1/crm/leads/{lead}` | Qeydi silir | Tenant Bearer + filial | `crm.leads.destroy` | `Crm\LeadController@destroy` |
| `GET` | `/api/v1/crm/leads/{lead}` | Bir qeydi oxuyur | Tenant Bearer + filial | `crm.leads.show` | `Crm\LeadController@show` |
| `PATCH` | `/api/v1/crm/leads/{lead}` | Qeydi yeniləyir | Tenant Bearer + filial | `crm.leads.update` | `Crm\LeadController@update` |
| `PUT` | `/api/v1/crm/leads/{lead}` | Qeydi yeniləyir | Tenant Bearer + filial | `crm.leads.update` | `Crm\LeadController@update` |
| `GET` | `/api/v1/crm/lost-reasons` | Siyahı oxuyur | Tenant Bearer + filial | `crm.lost-reasons.index` | `Crm\LostReasonController@index` |
| `POST` | `/api/v1/crm/lost-reasons` | Yeni qeyd yaradır | Tenant Bearer + filial | `crm.lost-reasons.store` | `Crm\LostReasonController@store` |
| `DELETE` | `/api/v1/crm/lost-reasons/{lostReason}` | Qeydi silir | Tenant Bearer + filial | `crm.lost-reasons.destroy` | `Crm\LostReasonController@destroy` |
| `GET` | `/api/v1/crm/lost-reasons/{lostReason}` | Bir qeydi oxuyur | Tenant Bearer + filial | `crm.lost-reasons.show` | `Crm\LostReasonController@show` |
| `PATCH` | `/api/v1/crm/lost-reasons/{lostReason}` | Qeydi yeniləyir | Tenant Bearer + filial | `crm.lost-reasons.update` | `Crm\LostReasonController@update` |
| `PUT` | `/api/v1/crm/lost-reasons/{lostReason}` | Qeydi yeniləyir | Tenant Bearer + filial | `crm.lost-reasons.update` | `Crm\LostReasonController@update` |
| `GET` | `/api/v1/crm/pipelines` | Siyahı oxuyur | Tenant Bearer + filial | `crm.pipelines.index` | `Crm\PipelineController@index` |
| `POST` | `/api/v1/crm/pipelines` | Yeni qeyd yaradır | Tenant Bearer + filial | `crm.pipelines.store` | `Crm\PipelineController@store` |
| `DELETE` | `/api/v1/crm/pipelines/{pipeline}` | Qeydi silir | Tenant Bearer + filial | `crm.pipelines.destroy` | `Crm\PipelineController@destroy` |
| `GET` | `/api/v1/crm/pipelines/{pipeline}` | Bir qeydi oxuyur | Tenant Bearer + filial | `crm.pipelines.show` | `Crm\PipelineController@show` |
| `PATCH` | `/api/v1/crm/pipelines/{pipeline}` | Qeydi yeniləyir | Tenant Bearer + filial | `crm.pipelines.update` | `Crm\PipelineController@update` |
| `PUT` | `/api/v1/crm/pipelines/{pipeline}` | Qeydi yeniləyir | Tenant Bearer + filial | `crm.pipelines.update` | `Crm\PipelineController@update` |
| `GET` | `/api/v1/crm/sources` | Siyahı oxuyur | Tenant Bearer + filial | `crm.sources.index` | `Crm\SourceController@index` |
| `POST` | `/api/v1/crm/sources` | Yeni qeyd yaradır | Tenant Bearer + filial | `crm.sources.store` | `Crm\SourceController@store` |
| `DELETE` | `/api/v1/crm/sources/{source}` | Qeydi silir | Tenant Bearer + filial | `crm.sources.destroy` | `Crm\SourceController@destroy` |
| `GET` | `/api/v1/crm/sources/{source}` | Bir qeydi oxuyur | Tenant Bearer + filial | `crm.sources.show` | `Crm\SourceController@show` |
| `PATCH` | `/api/v1/crm/sources/{source}` | Qeydi yeniləyir | Tenant Bearer + filial | `crm.sources.update` | `Crm\SourceController@update` |
| `PUT` | `/api/v1/crm/sources/{source}` | Qeydi yeniləyir | Tenant Bearer + filial | `crm.sources.update` | `Crm\SourceController@update` |
| `GET` | `/api/v1/crm/stages` | Siyahı oxuyur | Tenant Bearer + filial | `crm.stages.index` | `Crm\StageController@index` |
| `POST` | `/api/v1/crm/stages` | Yeni qeyd yaradır | Tenant Bearer + filial | `crm.stages.store` | `Crm\StageController@store` |
| `DELETE` | `/api/v1/crm/stages/{stage}` | Qeydi silir | Tenant Bearer + filial | `crm.stages.destroy` | `Crm\StageController@destroy` |
| `GET` | `/api/v1/crm/stages/{stage}` | Bir qeydi oxuyur | Tenant Bearer + filial | `crm.stages.show` | `Crm\StageController@show` |
| `PATCH` | `/api/v1/crm/stages/{stage}` | Qeydi yeniləyir | Tenant Bearer + filial | `crm.stages.update` | `Crm\StageController@update` |
| `PUT` | `/api/v1/crm/stages/{stage}` | Qeydi yeniləyir | Tenant Bearer + filial | `crm.stages.update` | `Crm\StageController@update` |
| `GET` | `/api/v1/crm/tasks` | Siyahı oxuyur | Tenant Bearer + filial | `crm.tasks.index` | `Crm\TaskController@index` |
| `POST` | `/api/v1/crm/tasks` | Yeni qeyd yaradır | Tenant Bearer + filial | `crm.tasks.store` | `Crm\TaskController@store` |
| `DELETE` | `/api/v1/crm/tasks/{task}` | Qeydi silir | Tenant Bearer + filial | `crm.tasks.destroy` | `Crm\TaskController@destroy` |
| `GET` | `/api/v1/crm/tasks/{task}` | Bir qeydi oxuyur | Tenant Bearer + filial | `crm.tasks.show` | `Crm\TaskController@show` |
| `PATCH` | `/api/v1/crm/tasks/{task}` | Qeydi yeniləyir | Tenant Bearer + filial | `crm.tasks.update` | `Crm\TaskController@update` |
| `PUT` | `/api/v1/crm/tasks/{task}` | Qeydi yeniləyir | Tenant Bearer + filial | `crm.tasks.update` | `Crm\TaskController@update` |

## Çıxışlar

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `POST` | `/api/v1/document-outputs/{type}/{record}/html` | Əməliyyatı başladır | Tenant Bearer + filial | `document-outputs.html` | `DocumentOutputController@html` |
| `GET` | `/api/v1/document-outputs/{type}/{record}/templates` | Məlumatı oxuyur | Tenant Bearer + filial | `document-outputs.templates` | `DocumentOutputController@templates` |
| `GET` | `/api/v1/output-templates` | Siyahı oxuyur | Tenant Bearer + filial | `output-templates.index` | `OutputTemplateController@index` |
| `POST` | `/api/v1/output-templates` | Yeni qeyd yaradır | Tenant Bearer + filial | `output-templates.store` | `OutputTemplateController@store` |
| `DELETE` | `/api/v1/output-templates/{outputTemplate}` | Qeydi silir | Tenant Bearer + filial | `output-templates.destroy` | `OutputTemplateController@destroy` |
| `GET` | `/api/v1/output-templates/{outputTemplate}` | Bir qeydi oxuyur | Tenant Bearer + filial | `output-templates.show` | `OutputTemplateController@show` |
| `PUT` | `/api/v1/output-templates/{outputTemplate}/assignments` | Qeydi dəyişir | Tenant Bearer + filial | `output-templates.assignments` | `OutputTemplateController@assignments` |
| `POST` | `/api/v1/output-templates/{outputTemplate}/clone` | Əməliyyatı başladır | Tenant Bearer + filial | `output-templates.clone` | `OutputTemplateController@clone` |
| `PATCH` | `/api/v1/output-templates/{outputTemplate}/draft` | Qeydi dəyişir | Tenant Bearer + filial | `output-templates.draft` | `OutputTemplateController@updateDraft` |
| `POST` | `/api/v1/output-templates/{outputTemplate}/preview` | Əməliyyatı başladır | Tenant Bearer + filial | `output-templates.preview` | `OutputTemplateController@preview` |
| `POST` | `/api/v1/output-templates/{outputTemplate}/publish` | Əməliyyatı başladır | Tenant Bearer + filial | `output-templates.publish` | `OutputTemplateController@publish` |

## Hesabatlar

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/reports` | Siyahı oxuyur | Tenant Bearer + filial | `reports.catalog` | `Reports\UnifiedReportController@index` |
| `GET` | `/api/v1/reports/{reportKey}` | Bir qeydi oxuyur | Tenant Bearer + filial | `reports.unified.show` | `Reports\UnifiedReportController@show` |

## İnsan resursları

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/departments` | Siyahı oxuyur | Tenant Bearer | `department.index` | `Hr\DepartmentController@index` |
| `POST` | `/api/v1/departments` | Yeni qeyd yaradır | Tenant Bearer | `department.store` | `Hr\DepartmentController@store` |
| `DELETE` | `/api/v1/departments/{department}` | Qeydi silir | Tenant Bearer | `department.destroy` | `Hr\DepartmentController@destroy` |
| `GET` | `/api/v1/departments/{department}` | Bir qeydi oxuyur | Tenant Bearer | `department.show` | `Hr\DepartmentController@show` |
| `PATCH` | `/api/v1/departments/{department}` | Qeydi yeniləyir | Tenant Bearer | `department.update` | `Hr\DepartmentController@update` |
| `PUT` | `/api/v1/departments/{department}` | Qeydi yeniləyir | Tenant Bearer | `department.update` | `Hr\DepartmentController@update` |

## İnteqrasiyalar

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/integration-clients` | Siyahı oxuyur | Tenant Bearer | `integrations.clients.index` | `Integrations\IntegrationClientController@index` |
| `POST` | `/api/v1/integration-clients` | Yeni qeyd yaradır | Tenant Bearer | `integrations.clients.store` | `Integrations\IntegrationClientController@store` |
| `PATCH` | `/api/v1/integration-clients/{client}` | Qeydi yeniləyir | Tenant Bearer | `integrations.clients.update` | `Integrations\IntegrationClientController@update` |
| `POST` | `/api/v1/integration-clients/{client}/revoke` | Əməliyyatı başladır | Tenant Bearer | `integrations.clients.revoke` | `Integrations\IntegrationClientController@revoke` |
| `POST` | `/api/v1/integration-clients/{client}/rotate` | Əməliyyatı başladır | Tenant Bearer | `integrations.clients.rotate` | `Integrations\IntegrationClientController@rotate` |
| `GET` | `/api/v1/integration-clients/users` | Məlumatı oxuyur | Tenant Bearer | `integrations.clients.users` | `Integrations\IntegrationClientController@users` |
| `GET` | `/api/v1/integration-connections` | Siyahı oxuyur | Tenant Bearer | `integrations.connections.index` | `Integrations\IntegrationConnectionController@index` |
| `POST` | `/api/v1/integration-connections` | Yeni qeyd yaradır | Tenant Bearer | `integrations.connections.store` | `Integrations\IntegrationConnectionController@store` |
| `DELETE` | `/api/v1/integration-connections/{connection}` | Qeydi silir | Tenant Bearer | `integrations.connections.destroy` | `Integrations\IntegrationConnectionController@destroy` |
| `PATCH` | `/api/v1/integration-connections/{connection}` | Qeydi yeniləyir | Tenant Bearer | `integrations.connections.update` | `Integrations\IntegrationConnectionController@update` |
| `POST` | `/api/v1/integration-connections/{connection}/rotate-secret` | Əməliyyatı başladır | Tenant Bearer | `integrations.connections.rotate-secret` | `Integrations\IntegrationConnectionController@rotateSecret` |
| `POST` | `/api/v1/integration-connections/{connection}/test` | Əməliyyatı başladır | Tenant Bearer | `integrations.connections.test` | `Integrations\IntegrationConnectionController@test` |
| `GET` | `/api/v1/integrations/catalog` | Məlumatı oxuyur | Tenant Bearer | `integrations.catalog.index` | `Integrations\IntegrationCatalogController@connectors` |
| `GET` | `/api/v1/integrations/deliveries` | Məlumatı oxuyur | Tenant Bearer | `integrations.monitor.deliveries` | `Integrations\IntegrationMonitorController@deliveries` |
| `POST` | `/api/v1/integrations/deliveries/{delivery}/retry` | Əməliyyatı başladır | Tenant Bearer | `integrations.monitor.retry` | `Integrations\IntegrationMonitorController@retry` |
| `GET` | `/api/v1/integrations/events` | Məlumatı oxuyur | Tenant Bearer | `integrations.monitor.events` | `Integrations\IntegrationMonitorController@events` |
| `GET` | `/api/v1/integrations/status` | Məlumatı oxuyur | Tenant Bearer | `integrations.monitor.status` | `Integrations\IntegrationMonitorController@status` |

## İnventar

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/price-types` | Siyahı oxuyur | Tenant Bearer | `price-type.index` | `Inventory\PriceTypeController@index` |
| `POST` | `/api/v1/price-types` | Yeni qeyd yaradır | Tenant Bearer | `price-type.store` | `Inventory\PriceTypeController@store` |
| `DELETE` | `/api/v1/price-types/{price_type}` | Qeydi silir | Tenant Bearer | `price-type.destroy` | `Inventory\PriceTypeController@destroy` |
| `GET` | `/api/v1/price-types/{price_type}` | Bir qeydi oxuyur | Tenant Bearer | `price-type.show` | `Inventory\PriceTypeController@show` |
| `PATCH` | `/api/v1/price-types/{price_type}` | Qeydi yeniləyir | Tenant Bearer | `price-type.update` | `Inventory\PriceTypeController@update` |
| `PUT` | `/api/v1/price-types/{price_type}` | Qeydi yeniləyir | Tenant Bearer | `price-type.update` | `Inventory\PriceTypeController@update` |

## İstehsal

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/manufacturing/boms` | Siyahı oxuyur | Tenant Bearer + filial | `manufacturing.boms.index` | `Manufacturing\BomController@index` |
| `POST` | `/api/v1/manufacturing/boms` | Yeni qeyd yaradır | Tenant Bearer + filial | `manufacturing.boms.store` | `Manufacturing\BomController@store` |
| `DELETE` | `/api/v1/manufacturing/boms/{bom}` | Qeydi silir | Tenant Bearer + filial | `manufacturing.boms.destroy` | `Manufacturing\BomController@destroy` |
| `GET` | `/api/v1/manufacturing/boms/{bom}` | Bir qeydi oxuyur | Tenant Bearer + filial | `manufacturing.boms.show` | `Manufacturing\BomController@show` |
| `PATCH` | `/api/v1/manufacturing/boms/{bom}` | Qeydi yeniləyir | Tenant Bearer + filial | `manufacturing.boms.update` | `Manufacturing\BomController@update` |
| `PUT` | `/api/v1/manufacturing/boms/{bom}` | Qeydi yeniləyir | Tenant Bearer + filial | `manufacturing.boms.update` | `Manufacturing\BomController@update` |
| `GET` | `/api/v1/manufacturing/orders` | Siyahı oxuyur | Tenant Bearer + filial | `manufacturing.orders.index` | `Manufacturing\ProductionOrderController@index` |
| `POST` | `/api/v1/manufacturing/orders` | Yeni qeyd yaradır | Tenant Bearer + filial | `manufacturing.orders.store` | `Manufacturing\ProductionOrderController@store` |
| `DELETE` | `/api/v1/manufacturing/orders/{order}` | Qeydi silir | Tenant Bearer + filial | `manufacturing.orders.destroy` | `Manufacturing\ProductionOrderController@destroy` |
| `GET` | `/api/v1/manufacturing/orders/{order}` | Bir qeydi oxuyur | Tenant Bearer + filial | `manufacturing.orders.show` | `Manufacturing\ProductionOrderController@show` |
| `PATCH` | `/api/v1/manufacturing/orders/{order}` | Qeydi yeniləyir | Tenant Bearer + filial | `manufacturing.orders.update` | `Manufacturing\ProductionOrderController@update` |
| `PUT` | `/api/v1/manufacturing/orders/{order}` | Qeydi yeniləyir | Tenant Bearer + filial | `manufacturing.orders.update` | `Manufacturing\ProductionOrderController@update` |
| `POST` | `/api/v1/manufacturing/orders/{order}/cancel` | Əməliyyatı başladır | Tenant Bearer + filial | `manufacturing.orders.cancel` | `Manufacturing\ProductionOrderController@transition` |
| `POST` | `/api/v1/manufacturing/orders/{order}/close` | Əməliyyatı başladır | Tenant Bearer + filial | `manufacturing.orders.close` | `Manufacturing\ProductionOrderController@transition` |
| `POST` | `/api/v1/manufacturing/orders/{order}/complete` | Əməliyyatı başladır | Tenant Bearer + filial | `manufacturing.orders.complete` | `Manufacturing\ProductionOrderController@transition` |
| `POST` | `/api/v1/manufacturing/orders/{order}/confirm` | Əməliyyatı başladır | Tenant Bearer + filial | `manufacturing.orders.confirm` | `Manufacturing\ProductionOrderController@transition` |
| `POST` | `/api/v1/manufacturing/orders/{order}/consume` | Əməliyyatı başladır | Tenant Bearer + filial | `manufacturing.orders.consume` | `Manufacturing\ProductionOrderController@consume` |
| `POST` | `/api/v1/manufacturing/orders/{order}/operations/{operation}/complete` | Əməliyyatı başladır | Tenant Bearer + filial | `manufacturing.orders.operations.complete` | `Manufacturing\ProductionOrderController@operate` |
| `POST` | `/api/v1/manufacturing/orders/{order}/operations/{operation}/pause` | Əməliyyatı başladır | Tenant Bearer + filial | `manufacturing.orders.operations.pause` | `Manufacturing\ProductionOrderController@operate` |
| `POST` | `/api/v1/manufacturing/orders/{order}/operations/{operation}/start` | Əməliyyatı başladır | Tenant Bearer + filial | `manufacturing.orders.operations.start` | `Manufacturing\ProductionOrderController@operate` |
| `POST` | `/api/v1/manufacturing/orders/{order}/produce` | Əməliyyatı başladır | Tenant Bearer + filial | `manufacturing.orders.produce` | `Manufacturing\ProductionOrderController@produce` |
| `POST` | `/api/v1/manufacturing/orders/{order}/start` | Əməliyyatı başladır | Tenant Bearer + filial | `manufacturing.orders.start` | `Manufacturing\ProductionOrderController@transition` |
| `GET` | `/api/v1/manufacturing/reports/order-cost` | Məlumatı oxuyur | Tenant Bearer + filial | `manufacturing.reports.order-cost.query` | `Manufacturing\ProductionOrderController@costQuery` |
| `GET` | `/api/v1/manufacturing/reports/order-cost/{order}` | Məlumatı oxuyur | Tenant Bearer + filial | `manufacturing.reports.order-cost` | `Manufacturing\ProductionOrderController@cost` |
| `GET` | `/api/v1/manufacturing/reports/production-progress` | Məlumatı oxuyur | Tenant Bearer + filial | `manufacturing.reports.production-progress` | `Manufacturing\ProductionOrderController@progress` |
| `GET` | `/api/v1/manufacturing/reports/traceability` | Məlumatı oxuyur | Tenant Bearer + filial | `manufacturing.reports.traceability.query` | `Manufacturing\ProductionOrderController@traceabilityQuery` |
| `GET` | `/api/v1/manufacturing/reports/traceability/{order}` | Məlumatı oxuyur | Tenant Bearer + filial | `manufacturing.reports.traceability` | `Manufacturing\ProductionOrderController@traceability` |
| `GET` | `/api/v1/manufacturing/routing-operations` | Siyahı oxuyur | Tenant Bearer + filial | `manufacturing.routing-operations.index` | `Manufacturing\RoutingOperationController@index` |
| `GET` | `/api/v1/manufacturing/routing-operations/{routing_operation}` | Bir qeydi oxuyur | Tenant Bearer + filial | `manufacturing.routing-operations.show` | `Manufacturing\RoutingOperationController@show` |
| `GET` | `/api/v1/manufacturing/routings` | Siyahı oxuyur | Tenant Bearer + filial | `manufacturing.routings.index` | `Manufacturing\RoutingController@index` |
| `POST` | `/api/v1/manufacturing/routings` | Yeni qeyd yaradır | Tenant Bearer + filial | `manufacturing.routings.store` | `Manufacturing\RoutingController@store` |
| `DELETE` | `/api/v1/manufacturing/routings/{routing}` | Qeydi silir | Tenant Bearer + filial | `manufacturing.routings.destroy` | `Manufacturing\RoutingController@destroy` |
| `GET` | `/api/v1/manufacturing/routings/{routing}` | Bir qeydi oxuyur | Tenant Bearer + filial | `manufacturing.routings.show` | `Manufacturing\RoutingController@show` |
| `PATCH` | `/api/v1/manufacturing/routings/{routing}` | Qeydi yeniləyir | Tenant Bearer + filial | `manufacturing.routings.update` | `Manufacturing\RoutingController@update` |
| `PUT` | `/api/v1/manufacturing/routings/{routing}` | Qeydi yeniləyir | Tenant Bearer + filial | `manufacturing.routings.update` | `Manufacturing\RoutingController@update` |
| `POST` | `/api/v1/manufacturing/routings/{routing}/activate` | Əməliyyatı başladır | Tenant Bearer + filial | `manufacturing.routings.activate` | `Manufacturing\RoutingController@activate` |
| `POST` | `/api/v1/manufacturing/routings/{routing}/archive` | Əməliyyatı başladır | Tenant Bearer + filial | `manufacturing.routings.archive` | `Manufacturing\RoutingController@archive` |
| `POST` | `/api/v1/manufacturing/routings/{routing}/new-version` | Əməliyyatı başladır | Tenant Bearer + filial | `manufacturing.routings.new-version` | `Manufacturing\RoutingController@newVersion` |
| `GET` | `/api/v1/manufacturing/work-centers` | Siyahı oxuyur | Tenant Bearer + filial | `manufacturing.work-centers.index` | `Manufacturing\WorkCenterController@index` |
| `POST` | `/api/v1/manufacturing/work-centers` | Yeni qeyd yaradır | Tenant Bearer + filial | `manufacturing.work-centers.store` | `Manufacturing\WorkCenterController@store` |
| `DELETE` | `/api/v1/manufacturing/work-centers/{workCenter}` | Qeydi silir | Tenant Bearer + filial | `manufacturing.work-centers.destroy` | `Manufacturing\WorkCenterController@destroy` |
| `GET` | `/api/v1/manufacturing/work-centers/{workCenter}` | Bir qeydi oxuyur | Tenant Bearer + filial | `manufacturing.work-centers.show` | `Manufacturing\WorkCenterController@show` |
| `PATCH` | `/api/v1/manufacturing/work-centers/{workCenter}` | Qeydi yeniləyir | Tenant Bearer + filial | `manufacturing.work-centers.update` | `Manufacturing\WorkCenterController@update` |
| `PUT` | `/api/v1/manufacturing/work-centers/{workCenter}` | Qeydi yeniləyir | Tenant Bearer + filial | `manufacturing.work-centers.update` | `Manufacturing\WorkCenterController@update` |

## Məhsul kataloqu

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `DELETE` | `/api/v1/branches/{branch}/products/{product}/settings` | Qeydi silir | Tenant Bearer + filial | `—` | `Product\BranchProductSettingController@destroy` |
| `PUT` | `/api/v1/branches/{branch}/products/{product}/settings` | Qeydi yeniləyir | Tenant Bearer + filial | `—` | `Product\BranchProductSettingController@update` |
| `GET` | `/api/v1/categories` | Siyahı oxuyur | Tenant Bearer + filial | `category.index` | `Product\CategoryController@index` |
| `POST` | `/api/v1/categories` | Yeni qeyd yaradır | Tenant Bearer + filial | `category.store` | `Product\CategoryController@store` |
| `DELETE` | `/api/v1/categories/{category}` | Qeydi silir | Tenant Bearer + filial | `category.destroy` | `Product\CategoryController@destroy` |
| `GET` | `/api/v1/categories/{category}` | Bir qeydi oxuyur | Tenant Bearer + filial | `category.show` | `Product\CategoryController@show` |
| `PATCH` | `/api/v1/categories/{category}` | Qeydi yeniləyir | Tenant Bearer + filial | `category.update` | `Product\CategoryController@update` |
| `PUT` | `/api/v1/categories/{category}` | Qeydi yeniləyir | Tenant Bearer + filial | `category.update` | `Product\CategoryController@update` |
| `GET` | `/api/v1/product-attributes` | Siyahı oxuyur | Tenant Bearer + filial | `product-attributes.index` | `Product\ProductAttributeController@index` |
| `POST` | `/api/v1/product-attributes` | Yeni qeyd yaradır | Tenant Bearer + filial | `product-attributes.store` | `Product\ProductAttributeController@store` |
| `DELETE` | `/api/v1/product-attributes/{product_attribute}` | Qeydi silir | Tenant Bearer + filial | `product-attributes.destroy` | `Product\ProductAttributeController@destroy` |
| `GET` | `/api/v1/product-attributes/{product_attribute}` | Bir qeydi oxuyur | Tenant Bearer + filial | `product-attributes.show` | `Product\ProductAttributeController@show` |
| `PATCH` | `/api/v1/product-attributes/{product_attribute}` | Qeydi yeniləyir | Tenant Bearer + filial | `product-attributes.update` | `Product\ProductAttributeController@update` |
| `PUT` | `/api/v1/product-attributes/{product_attribute}` | Qeydi yeniləyir | Tenant Bearer + filial | `product-attributes.update` | `Product\ProductAttributeController@update` |
| `GET` | `/api/v1/product-packagings` | Siyahı oxuyur | Tenant Bearer + filial | `product-packaging.index` | `Product\ProductPackagingController@index` |
| `POST` | `/api/v1/product-packagings` | Yeni qeyd yaradır | Tenant Bearer + filial | `product-packaging.store` | `Product\ProductPackagingController@store` |
| `DELETE` | `/api/v1/product-packagings/{product_packaging}` | Qeydi silir | Tenant Bearer + filial | `product-packaging.destroy` | `Product\ProductPackagingController@destroy` |
| `GET` | `/api/v1/product-packagings/{product_packaging}` | Bir qeydi oxuyur | Tenant Bearer + filial | `product-packaging.show` | `Product\ProductPackagingController@show` |
| `PATCH` | `/api/v1/product-packagings/{product_packaging}` | Qeydi yeniləyir | Tenant Bearer + filial | `product-packaging.update` | `Product\ProductPackagingController@update` |
| `PUT` | `/api/v1/product-packagings/{product_packaging}` | Qeydi yeniləyir | Tenant Bearer + filial | `product-packaging.update` | `Product\ProductPackagingController@update` |
| `GET` | `/api/v1/product-templates` | Siyahı oxuyur | Tenant Bearer + filial | `product-template.index` | `Product\ProductTemplateController@index` |
| `POST` | `/api/v1/product-templates` | Yeni qeyd yaradır | Tenant Bearer + filial | `product-template.store` | `Product\ProductTemplateController@store` |
| `DELETE` | `/api/v1/product-templates/{product_template}` | Qeydi silir | Tenant Bearer + filial | `product-template.destroy` | `Product\ProductTemplateController@destroy` |
| `GET` | `/api/v1/product-templates/{product_template}` | Bir qeydi oxuyur | Tenant Bearer + filial | `product-template.show` | `Product\ProductTemplateController@show` |
| `PATCH` | `/api/v1/product-templates/{product_template}` | Qeydi yeniləyir | Tenant Bearer + filial | `product-template.update` | `Product\ProductTemplateController@update` |
| `PUT` | `/api/v1/product-templates/{product_template}` | Qeydi yeniləyir | Tenant Bearer + filial | `product-template.update` | `Product\ProductTemplateController@update` |
| `GET` | `/api/v1/products` | Siyahı oxuyur | Tenant Bearer + filial | `product.index` | `Product\ProductController@index` |
| `POST` | `/api/v1/products` | Yeni qeyd yaradır | Tenant Bearer + filial | `product.store` | `Product\ProductController@store` |
| `DELETE` | `/api/v1/products/{product}` | Qeydi silir | Tenant Bearer + filial | `product.destroy` | `Product\ProductController@destroy` |
| `GET` | `/api/v1/products/{product}` | Bir qeydi oxuyur | Tenant Bearer + filial | `product.show` | `Product\ProductController@show` |
| `PATCH` | `/api/v1/products/{product}` | Qeydi yeniləyir | Tenant Bearer + filial | `product.update` | `Product\ProductController@update` |
| `PUT` | `/api/v1/products/{product}` | Qeydi yeniləyir | Tenant Bearer + filial | `product.update` | `Product\ProductController@update` |
| `GET` | `/api/v1/units` | Siyahı oxuyur | Tenant Bearer + filial | `unit.index` | `Product\UnitController@index` |
| `POST` | `/api/v1/units` | Yeni qeyd yaradır | Tenant Bearer + filial | `unit.store` | `Product\UnitController@store` |
| `DELETE` | `/api/v1/units/{unit}` | Qeydi silir | Tenant Bearer + filial | `unit.destroy` | `Product\UnitController@destroy` |
| `GET` | `/api/v1/units/{unit}` | Bir qeydi oxuyur | Tenant Bearer + filial | `unit.show` | `Product\UnitController@show` |
| `PATCH` | `/api/v1/units/{unit}` | Qeydi yeniləyir | Tenant Bearer + filial | `unit.update` | `Product\UnitController@update` |
| `PUT` | `/api/v1/units/{unit}` | Qeydi yeniləyir | Tenant Bearer + filial | `unit.update` | `Product\UnitController@update` |

## Mühasibat və maliyyə

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/account-properties` | Siyahı oxuyur | Tenant Bearer + filial | `account-properties.index` | `Accounting\AccountPropertyController@index` |
| `POST` | `/api/v1/account-properties` | Yeni qeyd yaradır | Tenant Bearer + filial | `account-properties.store` | `Accounting\AccountPropertyController@store` |
| `DELETE` | `/api/v1/account-properties/{account_property}` | Qeydi silir | Tenant Bearer + filial | `account-properties.destroy` | `Accounting\AccountPropertyController@destroy` |
| `GET` | `/api/v1/account-properties/{account_property}` | Bir qeydi oxuyur | Tenant Bearer + filial | `account-properties.show` | `Accounting\AccountPropertyController@show` |
| `PATCH` | `/api/v1/account-properties/{account_property}` | Qeydi yeniləyir | Tenant Bearer + filial | `account-properties.update` | `Accounting\AccountPropertyController@update` |
| `PUT` | `/api/v1/account-properties/{account_property}` | Qeydi yeniləyir | Tenant Bearer + filial | `account-properties.update` | `Accounting\AccountPropertyController@update` |
| `GET` | `/api/v1/accounting-entries` | Siyahı oxuyur | Tenant Bearer + filial | `accounting-entries.index` | `Accounting\JournalEntryController@index` |
| `POST` | `/api/v1/accounting-entries` | Yeni qeyd yaradır | Tenant Bearer + filial | `accounting-entries.store` | `Accounting\JournalEntryController@store` |
| `DELETE` | `/api/v1/accounting-entries/{accounting_entry}` | Qeydi silir | Tenant Bearer + filial | `accounting-entries.destroy` | `Accounting\JournalEntryController@destroy` |
| `GET` | `/api/v1/accounting-entries/{accounting_entry}` | Bir qeydi oxuyur | Tenant Bearer + filial | `accounting-entries.show` | `Accounting\JournalEntryController@show` |
| `PATCH` | `/api/v1/accounting-entries/{accounting_entry}` | Qeydi yeniləyir | Tenant Bearer + filial | `accounting-entries.update` | `Accounting\JournalEntryController@update` |
| `PUT` | `/api/v1/accounting-entries/{accounting_entry}` | Qeydi yeniləyir | Tenant Bearer + filial | `accounting-entries.update` | `Accounting\JournalEntryController@update` |
| `PATCH` | `/api/v1/accounting-entries/{entry}/state` | Qeydi dəyişir | Tenant Bearer + filial | `accounting-entries.change-state` | `Accounting\JournalEntryController@changeState` |
| `GET` | `/api/v1/accounting-entry-items` | Siyahı oxuyur | Tenant Bearer + filial | `accounting-entry-items.index` | `Accounting\JournalItemController@index` |
| `GET` | `/api/v1/accounting-entry-items/{accounting_entry_item}` | Bir qeydi oxuyur | Tenant Bearer + filial | `accounting-entry-items.show` | `Accounting\JournalItemController@show` |
| `GET` | `/api/v1/accounting-report-definitions` | Siyahı oxuyur | Tenant Bearer + filial | `accounting-report-definitions.index` | `Accounting\AccountingReportDefinitionController@index` |
| `POST` | `/api/v1/accounting-report-definitions` | Yeni qeyd yaradır | Tenant Bearer + filial | `accounting-report-definitions.store` | `Accounting\AccountingReportDefinitionController@store` |
| `DELETE` | `/api/v1/accounting-report-definitions/{id}` | Qeydi silir | Tenant Bearer + filial | `accounting-report-definitions.destroy` | `Accounting\AccountingReportDefinitionController@destroy` |
| `PUT` | `/api/v1/accounting-report-definitions/{id}` | Qeydi yeniləyir | Tenant Bearer + filial | `accounting-report-definitions.update` | `Accounting\AccountingReportDefinitionController@update` |
| `POST` | `/api/v1/accounting-report-definitions/{id}/items` | Əməliyyatı başladır | Tenant Bearer + filial | `accounting-report-definitions.items.store` | `Accounting\AccountingReportDefinitionController@storeItem` |
| `GET` | `/api/v1/accounting-report-definitions/{key}` | Bir qeydi oxuyur | Tenant Bearer + filial | `accounting-report-definitions.show` | `Accounting\AccountingReportDefinitionController@show` |
| `DELETE` | `/api/v1/accounting-report-item-rules/{id}` | Qeydi silir | Tenant Bearer + filial | `accounting-report-item-rules.destroy` | `Accounting\AccountingReportDefinitionController@destroyRule` |
| `PUT` | `/api/v1/accounting-report-item-rules/{id}` | Qeydi dəyişir | Tenant Bearer + filial | `accounting-report-item-rules.update` | `Accounting\AccountingReportDefinitionController@updateRule` |
| `DELETE` | `/api/v1/accounting-report-items/{id}` | Qeydi silir | Tenant Bearer + filial | `accounting-report-items.destroy` | `Accounting\AccountingReportDefinitionController@destroyItem` |
| `PUT` | `/api/v1/accounting-report-items/{id}` | Qeydi dəyişir | Tenant Bearer + filial | `accounting-report-items.update` | `Accounting\AccountingReportDefinitionController@updateItem` |
| `POST` | `/api/v1/accounting-report-items/{id}/rules` | Əməliyyatı başladır | Tenant Bearer + filial | `accounting-report-items.rules.store` | `Accounting\AccountingReportDefinitionController@storeRule` |
| `GET` | `/api/v1/accounts` | Siyahı oxuyur | Tenant Bearer + filial | `accounts.index` | `Accounting\AccountController@index` |
| `POST` | `/api/v1/accounts` | Yeni qeyd yaradır | Tenant Bearer + filial | `accounts.store` | `Accounting\AccountController@store` |
| `DELETE` | `/api/v1/accounts/{account}` | Qeydi silir | Tenant Bearer + filial | `accounts.destroy` | `Accounting\AccountController@destroy` |
| `GET` | `/api/v1/accounts/{account}` | Bir qeydi oxuyur | Tenant Bearer + filial | `accounts.show` | `Accounting\AccountController@show` |
| `PATCH` | `/api/v1/accounts/{account}` | Qeydi yeniləyir | Tenant Bearer + filial | `accounts.update` | `Accounting\AccountController@update` |
| `PUT` | `/api/v1/accounts/{account}` | Qeydi yeniləyir | Tenant Bearer + filial | `accounts.update` | `Accounting\AccountController@update` |
| `GET` | `/api/v1/countries` | Siyahı oxuyur | Tenant Bearer | `countries.index` | `Accounting\CountryController@index` |
| `POST` | `/api/v1/countries` | Yeni qeyd yaradır | Tenant Bearer | `countries.store` | `Accounting\CountryController@store` |
| `DELETE` | `/api/v1/countries/{country}` | Qeydi silir | Tenant Bearer | `countries.destroy` | `Accounting\CountryController@destroy` |
| `GET` | `/api/v1/countries/{country}` | Bir qeydi oxuyur | Tenant Bearer | `countries.show` | `Accounting\CountryController@show` |
| `PATCH` | `/api/v1/countries/{country}` | Qeydi yeniləyir | Tenant Bearer | `countries.update` | `Accounting\CountryController@update` |
| `PUT` | `/api/v1/countries/{country}` | Qeydi yeniləyir | Tenant Bearer | `countries.update` | `Accounting\CountryController@update` |
| `GET` | `/api/v1/currencies` | Siyahı oxuyur | Tenant Bearer | `currencies.index` | `Accounting\CurrencyController@index` |
| `POST` | `/api/v1/currencies` | Yeni qeyd yaradır | Tenant Bearer | `currencies.store` | `Accounting\CurrencyController@store` |
| `DELETE` | `/api/v1/currencies/{currency}` | Qeydi silir | Tenant Bearer | `currencies.destroy` | `Accounting\CurrencyController@destroy` |
| `GET` | `/api/v1/currencies/{currency}` | Bir qeydi oxuyur | Tenant Bearer | `currencies.show` | `Accounting\CurrencyController@show` |
| `PATCH` | `/api/v1/currencies/{currency}` | Qeydi yeniləyir | Tenant Bearer | `currencies.update` | `Accounting\CurrencyController@update` |
| `PUT` | `/api/v1/currencies/{currency}` | Qeydi yeniləyir | Tenant Bearer | `currencies.update` | `Accounting\CurrencyController@update` |
| `GET` | `/api/v1/currency-rates` | Siyahı oxuyur | Tenant Bearer + filial | `currency-rates.index` | `Accounting\CurrencyRateController@index` |
| `POST` | `/api/v1/currency-rates` | Yeni qeyd yaradır | Tenant Bearer + filial | `currency-rates.store` | `Accounting\CurrencyRateController@store` |
| `DELETE` | `/api/v1/currency-rates/{currency_rate}` | Qeydi silir | Tenant Bearer + filial | `currency-rates.destroy` | `Accounting\CurrencyRateController@destroy` |
| `GET` | `/api/v1/currency-rates/{currency_rate}` | Bir qeydi oxuyur | Tenant Bearer + filial | `currency-rates.show` | `Accounting\CurrencyRateController@show` |
| `PATCH` | `/api/v1/currency-rates/{currency_rate}` | Qeydi yeniləyir | Tenant Bearer + filial | `currency-rates.update` | `Accounting\CurrencyRateController@update` |
| `PUT` | `/api/v1/currency-rates/{currency_rate}` | Qeydi yeniləyir | Tenant Bearer + filial | `currency-rates.update` | `Accounting\CurrencyRateController@update` |
| `GET` | `/api/v1/debts` | Siyahı oxuyur | Tenant Bearer + filial | `debts.index` | `Accounting\DebtController@index` |
| `GET` | `/api/v1/debts/{id}` | Bir qeydi oxuyur | Tenant Bearer + filial | `debts.show` | `Accounting\DebtController@show` |
| `GET` | `/api/v1/direct-expenses` | Siyahı oxuyur | Tenant Bearer + filial | `direct-expenses.index` | `Accounting\DirectExpenseController@index` |
| `POST` | `/api/v1/direct-expenses` | Yeni qeyd yaradır | Tenant Bearer + filial | `direct-expenses.store` | `Accounting\DirectExpenseController@store` |
| `DELETE` | `/api/v1/direct-expenses/{direct_expense}` | Qeydi silir | Tenant Bearer + filial | `direct-expenses.destroy` | `Accounting\DirectExpenseController@destroy` |
| `GET` | `/api/v1/direct-expenses/{direct_expense}` | Bir qeydi oxuyur | Tenant Bearer + filial | `direct-expenses.show` | `Accounting\DirectExpenseController@show` |
| `PATCH` | `/api/v1/direct-expenses/{direct_expense}` | Qeydi yeniləyir | Tenant Bearer + filial | `direct-expenses.update` | `Accounting\DirectExpenseController@update` |
| `PUT` | `/api/v1/direct-expenses/{direct_expense}` | Qeydi yeniləyir | Tenant Bearer + filial | `direct-expenses.update` | `Accounting\DirectExpenseController@update` |
| `PATCH` | `/api/v1/direct-expenses/{expense}/state` | Qeydi dəyişir | Tenant Bearer + filial | `direct-expenses.change-state` | `Accounting\DirectExpenseController@changeState` |
| `PATCH` | `/api/v1/document-ledger-items/{item}/account` | Qeydi dəyişir | Tenant Bearer + filial | `document-ledger-items.account.update` | `Accounting\DocumentLedgerItemController@updateAccount` |
| `GET` | `/api/v1/expense-categories` | Siyahı oxuyur | Tenant Bearer + filial | `expense-categories.index` | `Accounting\ExpenseCategoryController@index` |
| `POST` | `/api/v1/expense-categories` | Yeni qeyd yaradır | Tenant Bearer + filial | `expense-categories.store` | `Accounting\ExpenseCategoryController@store` |
| `DELETE` | `/api/v1/expense-categories/{expense_category}` | Qeydi silir | Tenant Bearer + filial | `expense-categories.destroy` | `Accounting\ExpenseCategoryController@destroy` |
| `GET` | `/api/v1/expense-categories/{expense_category}` | Bir qeydi oxuyur | Tenant Bearer + filial | `expense-categories.show` | `Accounting\ExpenseCategoryController@show` |
| `PATCH` | `/api/v1/expense-categories/{expense_category}` | Qeydi yeniləyir | Tenant Bearer + filial | `expense-categories.update` | `Accounting\ExpenseCategoryController@update` |
| `PUT` | `/api/v1/expense-categories/{expense_category}` | Qeydi yeniləyir | Tenant Bearer + filial | `expense-categories.update` | `Accounting\ExpenseCategoryController@update` |
| `GET` | `/api/v1/finance/open-items` | Məlumatı oxuyur | Tenant Bearer + filial | `finance.open-items` | `Accounting\FinanceController@openItems` |
| `GET` | `/api/v1/finance/partner-balances` | Məlumatı oxuyur | Tenant Bearer + filial | `finance.partner-balances` | `Accounting\FinanceController@partnerBalances` |
| `POST` | `/api/v1/finance/reconciliations` | Əməliyyatı başladır | Tenant Bearer + filial | `finance.reconciliations.store` | `Accounting\FinanceController@reconcile` |
| `DELETE` | `/api/v1/finance/reconciliations/{id}` | Qeydi silir | Tenant Bearer + filial | `finance.reconciliations.destroy` | `Accounting\FinanceController@unreconcile` |
| `GET` | `/api/v1/fixed-asset-categories` | Siyahı oxuyur | Tenant Bearer + filial | `fixed-asset-categories.index` | `Accounting\FixedAssetCategoryController@index` |
| `POST` | `/api/v1/fixed-asset-categories` | Yeni qeyd yaradır | Tenant Bearer + filial | `fixed-asset-categories.store` | `Accounting\FixedAssetCategoryController@store` |
| `DELETE` | `/api/v1/fixed-asset-categories/{fixedAssetCategory}` | Qeydi silir | Tenant Bearer + filial | `fixed-asset-categories.destroy` | `Accounting\FixedAssetCategoryController@destroy` |
| `GET` | `/api/v1/fixed-asset-categories/{fixedAssetCategory}` | Bir qeydi oxuyur | Tenant Bearer + filial | `fixed-asset-categories.show` | `Accounting\FixedAssetCategoryController@show` |
| `PATCH` | `/api/v1/fixed-asset-categories/{fixedAssetCategory}` | Qeydi yeniləyir | Tenant Bearer + filial | `fixed-asset-categories.update` | `Accounting\FixedAssetCategoryController@update` |
| `PUT` | `/api/v1/fixed-asset-categories/{fixedAssetCategory}` | Qeydi yeniləyir | Tenant Bearer + filial | `fixed-asset-categories.update` | `Accounting\FixedAssetCategoryController@update` |
| `GET` | `/api/v1/fixed-asset-sales` | Siyahı oxuyur | Tenant Bearer + filial | `fixed-asset-sales.index` | `Accounting\FixedAssetSaleController@index` |
| `POST` | `/api/v1/fixed-asset-sales` | Yeni qeyd yaradır | Tenant Bearer + filial | `fixed-asset-sales.store` | `Accounting\FixedAssetSaleController@store` |
| `DELETE` | `/api/v1/fixed-asset-sales/{fixedAssetSale}` | Qeydi silir | Tenant Bearer + filial | `fixed-asset-sales.destroy` | `Accounting\FixedAssetSaleController@destroy` |
| `GET` | `/api/v1/fixed-asset-sales/{fixedAssetSale}` | Bir qeydi oxuyur | Tenant Bearer + filial | `fixed-asset-sales.show` | `Accounting\FixedAssetSaleController@show` |
| `PATCH` | `/api/v1/fixed-asset-sales/{fixedAssetSale}` | Qeydi yeniləyir | Tenant Bearer + filial | `fixed-asset-sales.update` | `Accounting\FixedAssetSaleController@update` |
| `PUT` | `/api/v1/fixed-asset-sales/{fixedAssetSale}` | Qeydi yeniləyir | Tenant Bearer + filial | `fixed-asset-sales.update` | `Accounting\FixedAssetSaleController@update` |
| `POST` | `/api/v1/fixed-asset-sales/{fixedAssetSale}/cancel` | Əməliyyatı başladır | Tenant Bearer + filial | `fixed-asset-sales.cancel` | `Accounting\FixedAssetSaleController@cancel` |
| `POST` | `/api/v1/fixed-asset-sales/{fixedAssetSale}/post` | Əməliyyatı başladır | Tenant Bearer + filial | `fixed-asset-sales.post` | `Accounting\FixedAssetSaleController@post` |
| `GET` | `/api/v1/fixed-asset-scraps` | Siyahı oxuyur | Tenant Bearer + filial | `fixed-asset-scraps.index` | `Accounting\FixedAssetScrapController@index` |
| `POST` | `/api/v1/fixed-asset-scraps` | Yeni qeyd yaradır | Tenant Bearer + filial | `fixed-asset-scraps.store` | `Accounting\FixedAssetScrapController@store` |
| `DELETE` | `/api/v1/fixed-asset-scraps/{fixedAssetScrap}` | Qeydi silir | Tenant Bearer + filial | `fixed-asset-scraps.destroy` | `Accounting\FixedAssetScrapController@destroy` |
| `GET` | `/api/v1/fixed-asset-scraps/{fixedAssetScrap}` | Bir qeydi oxuyur | Tenant Bearer + filial | `fixed-asset-scraps.show` | `Accounting\FixedAssetScrapController@show` |
| `PATCH` | `/api/v1/fixed-asset-scraps/{fixedAssetScrap}` | Qeydi yeniləyir | Tenant Bearer + filial | `fixed-asset-scraps.update` | `Accounting\FixedAssetScrapController@update` |
| `PUT` | `/api/v1/fixed-asset-scraps/{fixedAssetScrap}` | Qeydi yeniləyir | Tenant Bearer + filial | `fixed-asset-scraps.update` | `Accounting\FixedAssetScrapController@update` |
| `POST` | `/api/v1/fixed-asset-scraps/{fixedAssetScrap}/cancel` | Əməliyyatı başladır | Tenant Bearer + filial | `fixed-asset-scraps.cancel` | `Accounting\FixedAssetScrapController@cancel` |
| `POST` | `/api/v1/fixed-asset-scraps/{fixedAssetScrap}/post` | Əməliyyatı başladır | Tenant Bearer + filial | `fixed-asset-scraps.post` | `Accounting\FixedAssetScrapController@post` |
| `GET` | `/api/v1/fixed-asset-transfers` | Siyahı oxuyur | Tenant Bearer + filial | `fixed-asset-transfers.index` | `Accounting\FixedAssetTransferController@index` |
| `POST` | `/api/v1/fixed-asset-transfers` | Yeni qeyd yaradır | Tenant Bearer + filial | `fixed-asset-transfers.store` | `Accounting\FixedAssetTransferController@store` |
| `DELETE` | `/api/v1/fixed-asset-transfers/{fixedAssetTransfer}` | Qeydi silir | Tenant Bearer + filial | `fixed-asset-transfers.destroy` | `Accounting\FixedAssetTransferController@destroy` |
| `GET` | `/api/v1/fixed-asset-transfers/{fixedAssetTransfer}` | Bir qeydi oxuyur | Tenant Bearer + filial | `fixed-asset-transfers.show` | `Accounting\FixedAssetTransferController@show` |
| `PATCH` | `/api/v1/fixed-asset-transfers/{fixedAssetTransfer}` | Qeydi yeniləyir | Tenant Bearer + filial | `fixed-asset-transfers.update` | `Accounting\FixedAssetTransferController@update` |
| `PUT` | `/api/v1/fixed-asset-transfers/{fixedAssetTransfer}` | Qeydi yeniləyir | Tenant Bearer + filial | `fixed-asset-transfers.update` | `Accounting\FixedAssetTransferController@update` |
| `POST` | `/api/v1/fixed-asset-transfers/{fixedAssetTransfer}/cancel` | Əməliyyatı başladır | Tenant Bearer + filial | `fixed-asset-transfers.cancel` | `Accounting\FixedAssetTransferController@cancel` |
| `POST` | `/api/v1/fixed-asset-transfers/{fixedAssetTransfer}/post` | Əməliyyatı başladır | Tenant Bearer + filial | `fixed-asset-transfers.post` | `Accounting\FixedAssetTransferController@post` |
| `GET` | `/api/v1/fixed-assets` | Siyahı oxuyur | Tenant Bearer + filial | `fixed-assets.index` | `Accounting\FixedAssetController@index` |
| `POST` | `/api/v1/fixed-assets` | Yeni qeyd yaradır | Tenant Bearer + filial | `fixed-assets.store` | `Accounting\FixedAssetController@store` |
| `DELETE` | `/api/v1/fixed-assets/{asset}` | Qeydi silir | Tenant Bearer + filial | `fixed-assets.destroy` | `Accounting\FixedAssetController@destroy` |
| `GET` | `/api/v1/fixed-assets/{asset}` | Bir qeydi oxuyur | Tenant Bearer + filial | `fixed-assets.show` | `Accounting\FixedAssetController@show` |
| `PATCH` | `/api/v1/fixed-assets/{asset}` | Qeydi yeniləyir | Tenant Bearer + filial | `fixed-assets.update` | `Accounting\FixedAssetController@update` |
| `PUT` | `/api/v1/fixed-assets/{asset}` | Qeydi yeniləyir | Tenant Bearer + filial | `fixed-assets.update` | `Accounting\FixedAssetController@update` |
| `POST` | `/api/v1/fixed-assets/{asset}/confirm` | Əməliyyatı başladır | Tenant Bearer + filial | `fixed-assets.confirm` | `Accounting\FixedAssetController@confirm` |
| `GET` | `/api/v1/fixed-assets/reports/depreciation-schedule` | Məlumatı oxuyur | Tenant Bearer + filial | `fixed-assets.reports.depreciation-schedule` | `Accounting\FixedAssetReportController@depreciationSchedule` |
| `GET` | `/api/v1/fixed-assets/reports/register` | Məlumatı oxuyur | Tenant Bearer + filial | `fixed-assets.reports.register` | `Accounting\FixedAssetReportController@register` |
| `GET` | `/api/v1/invoices-in` | Siyahı oxuyur | Tenant Bearer + filial | `invoices-in.index` | `Accounting\PurchaseInvoiceController@index` |
| `POST` | `/api/v1/invoices-in` | Yeni qeyd yaradır | Tenant Bearer + filial | `invoices-in.store` | `Accounting\PurchaseInvoiceController@store` |
| `PATCH` | `/api/v1/invoices-in/{id}/state` | Qeydi dəyişir | Tenant Bearer + filial | `invoices-in.change-state` | `Accounting\PurchaseInvoiceController@changeState` |
| `DELETE` | `/api/v1/invoices-in/{invoices_in}` | Qeydi silir | Tenant Bearer + filial | `invoices-in.destroy` | `Accounting\PurchaseInvoiceController@destroy` |
| `GET` | `/api/v1/invoices-in/{invoices_in}` | Bir qeydi oxuyur | Tenant Bearer + filial | `invoices-in.show` | `Accounting\PurchaseInvoiceController@show` |
| `PATCH` | `/api/v1/invoices-in/{invoices_in}` | Qeydi yeniləyir | Tenant Bearer + filial | `invoices-in.update` | `Accounting\PurchaseInvoiceController@update` |
| `PUT` | `/api/v1/invoices-in/{invoices_in}` | Qeydi yeniləyir | Tenant Bearer + filial | `invoices-in.update` | `Accounting\PurchaseInvoiceController@update` |
| `GET` | `/api/v1/manual-accounting-entries` | Məlumatı oxuyur | Tenant Bearer + filial | `manual-accounting-entries.index` | `Accounting\JournalEntryController@legacyManualIndex` |
| `POST` | `/api/v1/manual-accounting-entries` | Yeni qeyd yaradır | Tenant Bearer + filial | `manual-accounting-entries.store` | `Accounting\JournalEntryController@store` |
| `PATCH` | `/api/v1/manual-accounting-entries/{entry}/state` | Qeydi dəyişir | Tenant Bearer + filial | `manual-accounting-entries.change-state` | `Accounting\JournalEntryController@changeState` |
| `DELETE` | `/api/v1/manual-accounting-entries/{manual_accounting_entry}` | Qeydi silir | Tenant Bearer + filial | `manual-accounting-entries.destroy` | `Accounting\JournalEntryController@destroy` |
| `GET` | `/api/v1/manual-accounting-entries/{manual_accounting_entry}` | Bir qeydi oxuyur | Tenant Bearer + filial | `manual-accounting-entries.show` | `Accounting\JournalEntryController@show` |
| `PATCH` | `/api/v1/manual-accounting-entries/{manual_accounting_entry}` | Qeydi yeniləyir | Tenant Bearer + filial | `manual-accounting-entries.update` | `Accounting\JournalEntryController@update` |
| `PUT` | `/api/v1/manual-accounting-entries/{manual_accounting_entry}` | Qeydi yeniləyir | Tenant Bearer + filial | `manual-accounting-entries.update` | `Accounting\JournalEntryController@update` |
| `GET` | `/api/v1/payments` | Siyahı oxuyur | Tenant Bearer + filial | `payments.index` | `Accounting\PaymentController@index` |
| `POST` | `/api/v1/payments` | Yeni qeyd yaradır | Tenant Bearer + filial | `payments.store` | `Accounting\PaymentController@store` |
| `DELETE` | `/api/v1/payments/{payment}` | Qeydi silir | Tenant Bearer + filial | `payments.destroy` | `Accounting\PaymentController@destroy` |
| `GET` | `/api/v1/payments/{payment}` | Bir qeydi oxuyur | Tenant Bearer + filial | `payments.show` | `Accounting\PaymentController@show` |
| `PATCH` | `/api/v1/payments/{payment}` | Qeydi yeniləyir | Tenant Bearer + filial | `payments.update` | `Accounting\PaymentController@update` |
| `PUT` | `/api/v1/payments/{payment}` | Qeydi yeniləyir | Tenant Bearer + filial | `payments.update` | `Accounting\PaymentController@update` |
| `PATCH` | `/api/v1/payments/{payment}/state` | Qeydi dəyişir | Tenant Bearer + filial | `payments.change-state` | `Accounting\PaymentController@changeState` |
| `POST` | `/api/v1/payments/inbound` | Əməliyyatı başladır | Tenant Bearer + filial | `payments.inbound.store` | `Accounting\PaymentController@storeInbound` |
| `POST` | `/api/v1/payments/outbound` | Əməliyyatı başladır | Tenant Bearer + filial | `payments.outbound.store` | `Accounting\PaymentController@storeOutbound` |
| `GET` | `/api/v1/payments/settlement-options` | Məlumatı oxuyur | Tenant Bearer + filial | `payments.settlement-options` | `Accounting\PaymentController@settlementOptions` |
| `GET` | `/api/v1/purchase-invoices` | Siyahı oxuyur | Tenant Bearer + filial | `purchase-invoices.index` | `Accounting\PurchaseInvoiceController@index` |
| `POST` | `/api/v1/purchase-invoices` | Yeni qeyd yaradır | Tenant Bearer + filial | `purchase-invoices.store` | `Accounting\PurchaseInvoiceController@store` |
| `PATCH` | `/api/v1/purchase-invoices/{id}/state` | Qeydi dəyişir | Tenant Bearer + filial | `purchase-invoices.change-state` | `Accounting\PurchaseInvoiceController@changeState` |
| `DELETE` | `/api/v1/purchase-invoices/{purchase_invoice}` | Qeydi silir | Tenant Bearer + filial | `purchase-invoices.destroy` | `Accounting\PurchaseInvoiceController@destroy` |
| `GET` | `/api/v1/purchase-invoices/{purchase_invoice}` | Bir qeydi oxuyur | Tenant Bearer + filial | `purchase-invoices.show` | `Accounting\PurchaseInvoiceController@show` |
| `PATCH` | `/api/v1/purchase-invoices/{purchase_invoice}` | Qeydi yeniləyir | Tenant Bearer + filial | `purchase-invoices.update` | `Accounting\PurchaseInvoiceController@update` |
| `PUT` | `/api/v1/purchase-invoices/{purchase_invoice}` | Qeydi yeniləyir | Tenant Bearer + filial | `purchase-invoices.update` | `Accounting\PurchaseInvoiceController@update` |
| `GET` | `/api/v1/purchase-returns` | Siyahı oxuyur | Tenant Bearer + filial | `purchase-returns.index` | `Accounting\PurchaseReturnController@index` |
| `POST` | `/api/v1/purchase-returns` | Yeni qeyd yaradır | Tenant Bearer + filial | `purchase-returns.store` | `Accounting\PurchaseReturnController@store` |
| `PATCH` | `/api/v1/purchase-returns/{entry}/state` | Qeydi dəyişir | Tenant Bearer + filial | `purchase-returns.change-state` | `Accounting\PurchaseReturnController@changeState` |
| `DELETE` | `/api/v1/purchase-returns/{purchase_return}` | Qeydi silir | Tenant Bearer + filial | `purchase-returns.destroy` | `Accounting\PurchaseReturnController@destroy` |
| `GET` | `/api/v1/purchase-returns/{purchase_return}` | Bir qeydi oxuyur | Tenant Bearer + filial | `purchase-returns.show` | `Accounting\PurchaseReturnController@show` |
| `PATCH` | `/api/v1/purchase-returns/{purchase_return}` | Qeydi yeniləyir | Tenant Bearer + filial | `purchase-returns.update` | `Accounting\PurchaseReturnController@update` |
| `PUT` | `/api/v1/purchase-returns/{purchase_return}` | Qeydi yeniləyir | Tenant Bearer + filial | `purchase-returns.update` | `Accounting\PurchaseReturnController@update` |
| `GET` | `/api/v1/refunds-in` | Siyahı oxuyur | Tenant Bearer + filial | `refunds-in.index` | `Accounting\PurchaseReturnController@index` |
| `POST` | `/api/v1/refunds-in` | Yeni qeyd yaradır | Tenant Bearer + filial | `refunds-in.store` | `Accounting\PurchaseReturnController@store` |
| `PATCH` | `/api/v1/refunds-in/{entry}/state` | Qeydi dəyişir | Tenant Bearer + filial | `refunds-in.change-state` | `Accounting\PurchaseReturnController@changeState` |
| `DELETE` | `/api/v1/refunds-in/{refunds_in}` | Qeydi silir | Tenant Bearer + filial | `refunds-in.destroy` | `Accounting\PurchaseReturnController@destroy` |
| `GET` | `/api/v1/refunds-in/{refunds_in}` | Bir qeydi oxuyur | Tenant Bearer + filial | `refunds-in.show` | `Accounting\PurchaseReturnController@show` |
| `PATCH` | `/api/v1/refunds-in/{refunds_in}` | Qeydi yeniləyir | Tenant Bearer + filial | `refunds-in.update` | `Accounting\PurchaseReturnController@update` |
| `PUT` | `/api/v1/refunds-in/{refunds_in}` | Qeydi yeniləyir | Tenant Bearer + filial | `refunds-in.update` | `Accounting\PurchaseReturnController@update` |
| `GET` | `/api/v1/reports/account-card` | Məlumatı oxuyur | Tenant Bearer + filial | `reports.account-card` | `Accounting\ReportController@accountCard` |
| `GET` | `/api/v1/reports/balance-sheet` | Məlumatı oxuyur | Tenant Bearer + filial | `reports.balance-sheet` | `Accounting\ReportController@balanceSheet` |
| `GET` | `/api/v1/reports/profit-loss` | Məlumatı oxuyur | Tenant Bearer + filial | `reports.profit-loss` | `Accounting\ReportController@profitLoss` |
| `GET` | `/api/v1/reports/trial-balance` | Məlumatı oxuyur | Tenant Bearer + filial | `reports.trial-balance` | `Accounting\ReportController@trialBalance` |
| `GET` | `/api/v1/sale-invoices` | Siyahı oxuyur | Tenant Bearer + filial | `sale-invoices.index` | `Accounting\SaleInvoiceController@index` |
| `POST` | `/api/v1/sale-invoices` | Yeni qeyd yaradır | Tenant Bearer + filial | `sale-invoices.store` | `Accounting\SaleInvoiceController@store` |
| `PATCH` | `/api/v1/sale-invoices/{entry}/state` | Qeydi dəyişir | Tenant Bearer + filial | `sale-invoices.change-state` | `Accounting\SaleInvoiceController@changeState` |
| `DELETE` | `/api/v1/sale-invoices/{sale_invoice}` | Qeydi silir | Tenant Bearer + filial | `sale-invoices.destroy` | `Accounting\SaleInvoiceController@destroy` |
| `GET` | `/api/v1/sale-invoices/{sale_invoice}` | Bir qeydi oxuyur | Tenant Bearer + filial | `sale-invoices.show` | `Accounting\SaleInvoiceController@show` |
| `PATCH` | `/api/v1/sale-invoices/{sale_invoice}` | Qeydi yeniləyir | Tenant Bearer + filial | `sale-invoices.update` | `Accounting\SaleInvoiceController@update` |
| `PUT` | `/api/v1/sale-invoices/{sale_invoice}` | Qeydi yeniləyir | Tenant Bearer + filial | `sale-invoices.update` | `Accounting\SaleInvoiceController@update` |
| `GET` | `/api/v1/sale-returns` | Siyahı oxuyur | Tenant Bearer + filial | `sale-returns.index` | `Accounting\SaleReturnController@index` |
| `POST` | `/api/v1/sale-returns` | Yeni qeyd yaradır | Tenant Bearer + filial | `sale-returns.store` | `Accounting\SaleReturnController@store` |
| `PATCH` | `/api/v1/sale-returns/{entry}/state` | Qeydi dəyişir | Tenant Bearer + filial | `sale-returns.change-state` | `Accounting\SaleReturnController@changeState` |
| `DELETE` | `/api/v1/sale-returns/{sale_return}` | Qeydi silir | Tenant Bearer + filial | `sale-returns.destroy` | `Accounting\SaleReturnController@destroy` |
| `GET` | `/api/v1/sale-returns/{sale_return}` | Bir qeydi oxuyur | Tenant Bearer + filial | `sale-returns.show` | `Accounting\SaleReturnController@show` |
| `PATCH` | `/api/v1/sale-returns/{sale_return}` | Qeydi yeniləyir | Tenant Bearer + filial | `sale-returns.update` | `Accounting\SaleReturnController@update` |
| `PUT` | `/api/v1/sale-returns/{sale_return}` | Qeydi yeniləyir | Tenant Bearer + filial | `sale-returns.update` | `Accounting\SaleReturnController@update` |
| `GET` | `/api/v1/tax-profile` | Bir qeydi oxuyur | Tenant Bearer + filial | `tax-profile.show` | `Accounting\TaxProfileController@show` |
| `PUT` | `/api/v1/tax-profile` | Qeydi yeniləyir | Tenant Bearer + filial | `tax-profile.update` | `Accounting\TaxProfileController@update` |
| `GET` | `/api/v1/tax-profile/readiness` | Məlumatı oxuyur | Tenant Bearer + filial | `tax-profile.readiness` | `Accounting\TaxProfileController@readiness` |
| `GET` | `/api/v1/tax-profile/schema` | Məlumatı oxuyur | Tenant Bearer + filial | `tax-profile.schema` | `Accounting\TaxProfileController@schema` |
| `GET` | `/api/v1/taxes` | Siyahı oxuyur | Tenant Bearer + filial | `taxes.index` | `Accounting\TaxController@index` |
| `GET` | `/api/v1/taxes/{tax}` | Bir qeydi oxuyur | Tenant Bearer + filial | `taxes.show` | `Accounting\TaxController@show` |
| `GET` | `/api/v1/wallet-transfers` | Siyahı oxuyur | Tenant Bearer + filial | `wallet-transfers.index` | `Accounting\WalletTransferController@index` |
| `POST` | `/api/v1/wallet-transfers` | Yeni qeyd yaradır | Tenant Bearer + filial | `wallet-transfers.store` | `Accounting\WalletTransferController@store` |
| `PATCH` | `/api/v1/wallet-transfers/{entry}/state` | Qeydi dəyişir | Tenant Bearer + filial | `wallet-transfers.change-state` | `Accounting\WalletTransferController@changeState` |
| `DELETE` | `/api/v1/wallet-transfers/{wallet_transfer}` | Qeydi silir | Tenant Bearer + filial | `wallet-transfers.destroy` | `Accounting\WalletTransferController@destroy` |
| `GET` | `/api/v1/wallet-transfers/{wallet_transfer}` | Bir qeydi oxuyur | Tenant Bearer + filial | `wallet-transfers.show` | `Accounting\WalletTransferController@show` |
| `PATCH` | `/api/v1/wallet-transfers/{wallet_transfer}` | Qeydi yeniləyir | Tenant Bearer + filial | `wallet-transfers.update` | `Accounting\WalletTransferController@update` |
| `PUT` | `/api/v1/wallet-transfers/{wallet_transfer}` | Qeydi yeniləyir | Tenant Bearer + filial | `wallet-transfers.update` | `Accounting\WalletTransferController@update` |
| `GET` | `/api/v1/wallets` | Siyahı oxuyur | Tenant Bearer + filial | `wallets.index` | `Accounting\WalletController@index` |
| `POST` | `/api/v1/wallets` | Yeni qeyd yaradır | Tenant Bearer + filial | `wallets.store` | `Accounting\WalletController@store` |
| `DELETE` | `/api/v1/wallets/{wallet}` | Qeydi silir | Tenant Bearer + filial | `wallets.destroy` | `Accounting\WalletController@destroy` |
| `GET` | `/api/v1/wallets/{wallet}` | Bir qeydi oxuyur | Tenant Bearer + filial | `wallets.show` | `Accounting\WalletController@show` |
| `PATCH` | `/api/v1/wallets/{wallet}` | Qeydi yeniləyir | Tenant Bearer + filial | `wallets.update` | `Accounting\WalletController@update` |
| `PUT` | `/api/v1/wallets/{wallet}` | Qeydi yeniləyir | Tenant Bearer + filial | `wallets.update` | `Accounting\WalletController@update` |

## Onlayn mağaza

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/store/v1/{store}/categories` | Məlumatı oxuyur | Açıq / route-a görə | `public-store.categories` | `Store\PublicStoreController@categories` |
| `POST` | `/api/store/v1/{store}/checkout` | Yeni qeyd yaradır | Açıq / route-a görə | `public-store.checkout` | `Store\PublicStoreCheckoutController@store` |
| `GET` | `/api/store/v1/{store}/products` | Məlumatı oxuyur | Açıq / route-a görə | `public-store.products` | `Store\PublicStoreController@products` |
| `GET` | `/api/store/v1/{store}/products/{product}` | Məlumatı oxuyur | Açıq / route-a görə | `public-store.products.show` | `Store\PublicStoreController@product` |
| `GET` | `/api/store/v1/{store}/settings` | Məlumatı oxuyur | Açıq / route-a görə | `public-store.settings` | `Store\PublicStoreController@settings` |
| `GET` | `/api/v1/store/configuration` | Bir qeydi oxuyur | Tenant Bearer | `store.configuration.show` | `Store\StoreConfigurationController@show` |
| `PUT` | `/api/v1/store/configuration` | Qeydi yeniləyir | Tenant Bearer | `store.configuration.update` | `Store\StoreConfigurationController@update` |
| `GET` | `/api/v1/store/products` | Siyahı oxuyur | Tenant Bearer | `store.products.index` | `Store\StoreProductPublicationController@index` |
| `PATCH` | `/api/v1/store/products/{product}` | Qeydi yeniləyir | Tenant Bearer | `store.products.update` | `Store\StoreProductPublicationController@update` |

## Platform və giriş

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/authorization/audit` | Siyahı oxuyur | Tenant Bearer | `authorization.audit` | `Auth\PermissionAuditController@index` |
| `GET` | `/api/v1/authorization/catalog` | Məlumatı oxuyur | Tenant Bearer | `authorization.catalog` | `Auth\AuthorizationController@catalog` |
| `GET` | `/api/v1/authorization/policies` | Siyahı oxuyur | Tenant Bearer | `authorization.policies.index` | `Auth\AuthorizationPolicyController@index` |
| `POST` | `/api/v1/authorization/policies` | Yeni qeyd yaradır | Tenant Bearer | `authorization.policies.store` | `Auth\AuthorizationPolicyController@store` |
| `GET` | `/api/v1/authorization/policies/{policy}` | Bir qeydi oxuyur | Tenant Bearer | `authorization.policies.show` | `Auth\AuthorizationPolicyController@show` |
| `PUT` | `/api/v1/authorization/policies/{policy}` | Qeydi yeniləyir | Tenant Bearer | `authorization.policies.update` | `Auth\AuthorizationPolicyController@update` |
| `POST` | `/api/v1/authorization/policies/{policy}/archive` | Əməliyyatı başladır | Tenant Bearer | `authorization.policies.archive` | `Auth\AuthorizationPolicyController@archive` |
| `POST` | `/api/v1/authorization/policies/{policy}/publish` | Əməliyyatı başladır | Tenant Bearer | `authorization.policies.publish` | `Auth\AuthorizationPolicyController@publish` |
| `GET` | `/api/v1/authorization/policies/catalog` | Məlumatı oxuyur | Tenant Bearer | `authorization.policies.catalog` | `Auth\AuthorizationPolicyController@catalog` |
| `GET` | `/api/v1/authorization/policies/subjects` | Məlumatı oxuyur | Tenant Bearer | `authorization.policies.subjects` | `Auth\AuthorizationPolicyController@subjects` |
| `GET` | `/api/v1/permissions` | Siyahı oxuyur | Tenant Bearer | `permissions.index` | `Auth\PermissionController@index` |
| `GET` | `/api/v1/permissions/{permission}` | Bir qeydi oxuyur | Tenant Bearer | `permissions.show` | `Auth\PermissionController@show` |
| `GET` | `/api/v1/roles` | Siyahı oxuyur | Tenant Bearer | `roles.index` | `Auth\RoleController@index` |
| `POST` | `/api/v1/roles` | Yeni qeyd yaradır | Tenant Bearer | `roles.store` | `Auth\RoleController@store` |
| `DELETE` | `/api/v1/roles/{role}` | Qeydi silir | Tenant Bearer | `roles.destroy` | `Auth\RoleController@destroy` |
| `GET` | `/api/v1/roles/{role}` | Bir qeydi oxuyur | Tenant Bearer | `roles.show` | `Auth\RoleController@show` |
| `PATCH` | `/api/v1/roles/{role}` | Qeydi yeniləyir | Tenant Bearer | `roles.update` | `Auth\RoleController@update` |
| `PUT` | `/api/v1/roles/{role}` | Qeydi yeniləyir | Tenant Bearer | `roles.update` | `Auth\RoleController@update` |
| `GET` | `/api/v1/users/{user}/authorization` | Bir qeydi oxuyur | Tenant Bearer | `users.authorization.show` | `Auth\UserAuthorizationController@show` |
| `PUT` | `/api/v1/users/{user}/authorization` | Qeydi yeniləyir | Tenant Bearer | `users.authorization.update` | `Auth\UserAuthorizationController@update` |

## Platform və sistem

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/health` | Məlumatı oxuyur | Açıq / route-a görə | `health` | `HealthController@health` |
| `GET` | `/api/health/live` | Məlumatı oxuyur | Açıq / route-a görə | `health.live` | `HealthController@live` |
| `GET` | `/api/health/ready` | Məlumatı oxuyur | Açıq / route-a görə | `health.ready` | `HealthController@ready` |
| `GET` | `/api/v1/audit-logs` | Siyahı oxuyur | Tenant Bearer | `audit-logs.index` | `AuditLogController@index` |
| `GET` | `/api/v1/audit-logs/{auditLog}` | Bir qeydi oxuyur | Tenant Bearer | `audit-logs.show` | `AuditLogController@show` |
| `GET` | `/api/v1/audit-logs/export` | Məlumatı oxuyur | Tenant Bearer | `audit-logs.export` | `AuditLogController@export` |
| `GET` | `/api/v1/audit-logs/options` | Məlumatı oxuyur | Tenant Bearer | `audit-logs.options` | `AuditLogController@options` |
| `POST` | `/api/v1/audit/client-events` | Əməliyyatı başladır | Tenant Bearer | `audit.client-events` | `AuditLogController@clientEvents` |
| `GET` | `/api/v1/branches` | Siyahı oxuyur | Tenant Bearer | `branches.index` | `BranchController@index` |
| `POST` | `/api/v1/branches` | Yeni qeyd yaradır | Tenant Bearer | `branches.store` | `BranchController@store` |
| `DELETE` | `/api/v1/branches/{branch}` | Qeydi silir | Tenant Bearer | `branches.destroy` | `BranchController@destroy` |
| `GET` | `/api/v1/branches/{branch}` | Bir qeydi oxuyur | Tenant Bearer | `branches.show` | `BranchController@show` |
| `PATCH` | `/api/v1/branches/{branch}` | Qeydi yeniləyir | Tenant Bearer | `branches.update` | `BranchController@update` |
| `PUT` | `/api/v1/branches/{branch}` | Qeydi yeniləyir | Tenant Bearer | `branches.update` | `BranchController@update` |
| `GET` | `/api/v1/changelog` | Siyahı oxuyur | Açıq / route-a görə | `changelog.index` | `ChangelogController@index` |
| `GET` | `/api/v1/dashboard/report-catalog` | Məlumatı oxuyur | Tenant Bearer | `dashboard.report-catalog` | `DashboardController@catalog` |
| `GET` | `/api/v1/dashboards` | Siyahı oxuyur | Tenant Bearer | `dashboards.index` | `DashboardController@index` |
| `POST` | `/api/v1/dashboards` | Yeni qeyd yaradır | Tenant Bearer | `dashboards.store` | `DashboardController@store` |
| `DELETE` | `/api/v1/dashboards/{dashboard}` | Qeydi silir | Tenant Bearer | `dashboards.destroy` | `DashboardController@destroy` |
| `GET` | `/api/v1/dashboards/{dashboard}` | Bir qeydi oxuyur | Tenant Bearer | `dashboards.show` | `DashboardController@show` |
| `PATCH` | `/api/v1/dashboards/{dashboard}` | Qeydi yeniləyir | Tenant Bearer | `dashboards.update` | `DashboardController@update` |
| `POST` | `/api/v1/dashboards/{dashboard}/clone` | Əməliyyatı başladır | Tenant Bearer | `dashboards.clone` | `DashboardController@clone` |
| `POST` | `/api/v1/dashboards/{dashboard}/data` | Əməliyyatı başladır | Tenant Bearer + filial | `dashboards.data` | `DashboardController@data` |
| `PUT` | `/api/v1/dashboards/{dashboard}/layout` | Qeydi dəyişir | Tenant Bearer | `dashboards.layout` | `DashboardController@saveLayout` |
| `POST` | `/api/v1/dashboards/{dashboard}/set-default` | Əməliyyatı başladır | Tenant Bearer | `dashboards.set-default` | `DashboardController@setDefault` |
| `POST` | `/api/v1/dashboards/{dashboard}/widgets` | Əməliyyatı başladır | Tenant Bearer | `dashboards.widgets.store` | `DashboardController@addWidget` |
| `DELETE` | `/api/v1/dashboards/{dashboard}/widgets/{widget}` | Qeydi silir | Tenant Bearer | `dashboards.widgets.destroy` | `DashboardController@deleteWidget` |
| `PATCH` | `/api/v1/dashboards/{dashboard}/widgets/{widget}` | Qeydi dəyişir | Tenant Bearer | `dashboards.widgets.update` | `DashboardController@updateWidget` |
| `GET` | `/api/v1/datasets` | Siyahı oxuyur | Tenant Bearer | `datasets.index` | `DatasetController@index` |
| `POST` | `/api/v1/datasets` | Yeni qeyd yaradır | Tenant Bearer | `datasets.store` | `DatasetController@store` |
| `DELETE` | `/api/v1/datasets/{dataset}` | Qeydi silir | Tenant Bearer | `datasets.destroy` | `DatasetController@destroy` |
| `GET` | `/api/v1/datasets/{dataset}` | Bir qeydi oxuyur | Tenant Bearer | `datasets.show` | `DatasetController@show` |
| `GET` | `/api/v1/document-numbering/configurations` | Siyahı oxuyur | Tenant Bearer | `document-numbering.configurations.index` | `DocumentNumberConfigurationController@index` |
| `PUT` | `/api/v1/document-numbering/configurations/{document_type}` | Qeydi yeniləyir | Tenant Bearer | `document-numbering.configurations.update` | `DocumentNumberConfigurationController@update` |
| `PATCH` | `/api/v1/documents/{document_type}/{id}/name` | Qeydi yeniləyir | Tenant Bearer | `documents.name.update` | `DocumentNameController@update` |
| `GET` | `/api/v1/documents/{resource}/{id}/related-documents` | Siyahı oxuyur | Tenant Bearer + filial | `documents.related.index` | `RelatedDocumentController@index` |
| `POST` | `/api/v1/fields` | Yeni qeyd yaradır | Tenant Bearer | `fields.store` | `FieldController@store` |
| `DELETE` | `/api/v1/fields/{field}` | Qeydi silir | Tenant Bearer | `fields.destroy` | `FieldController@destroy` |
| `PUT` | `/api/v1/fields/{field}` | Qeydi yeniləyir | Tenant Bearer | `fields.update` | `FieldController@update` |
| `POST` | `/api/v1/forms/{resource}/onchange` | Əməliyyatı başladır | Tenant Bearer | `forms.onchange` | `FormOnchangeController` |
| `GET` | `/api/v1/layout/menu` | Məlumatı oxuyur | Tenant Bearer | `layout.menu` | `LayoutController@getMenu` |
| `PATCH` | `/api/v1/layout/menu/{navigation_menu_id}` | Qeydi dəyişir | Tenant Bearer | `layout.menu.update` | `LayoutController@updateMenuSettings` |
| `GET` | `/api/v1/layout/menu/config` | Məlumatı oxuyur | Tenant Bearer | `layout.menu.config` | `LayoutController@getMenuConfiguration` |
| `PUT` | `/api/v1/layout/menu/config` | Qeydi dəyişir | Tenant Bearer | `layout.menu.config.save` | `LayoutController@saveMenuConfiguration` |
| `POST` | `/api/v1/layout/menu/groups` | Əməliyyatı başladır | Tenant Bearer | `layout.menu.groups.create` | `LayoutController@createMenuGroup` |
| `DELETE` | `/api/v1/layout/menu/groups/{group_id}` | Qeydi silir | Tenant Bearer | `layout.menu.groups.delete` | `LayoutController@deleteMenuGroup` |
| `PATCH` | `/api/v1/layout/menu/groups/{group_id}` | Qeydi dəyişir | Tenant Bearer | `layout.menu.groups.update` | `LayoutController@updateMenuGroup` |
| `POST` | `/api/v1/lists` | Yeni qeyd yaradır | Tenant Bearer | `lists.store` | `ListController@store` |
| `PUT` | `/api/v1/lists` | Qeydi dəyişir | Tenant Bearer | `lists.sync` | `ListController@sync` |
| `GET` | `/api/v1/lists/{field_id}` | Siyahı oxuyur | Tenant Bearer | `lists.index` | `ListController@index` |
| `DELETE` | `/api/v1/lists/{id}` | Qeydi silir | Tenant Bearer | `lists.destroy` | `ListController@destroy` |
| `PATCH` | `/api/v1/lists/{id}` | Qeydi yeniləyir | Tenant Bearer | `lists.update` | `ListController@update` |
| `GET` | `/api/v1/lists/item/{id}` | Bir qeydi oxuyur | Tenant Bearer | `lists.show` | `ListController@show` |
| `GET` | `/api/v1/me/branches` | Məlumatı oxuyur | Tenant Bearer | `me.branches` | `BranchController@mine` |
| `GET` | `/api/v1/me/notifications` | Siyahı oxuyur | Tenant Bearer | `me.notifications.index` | `UserNotificationController@index` |
| `POST` | `/api/v1/me/notifications/{notification}/read` | Əməliyyatı başladır | Tenant Bearer | `me.notifications.read` | `UserNotificationController@markRead` |
| `POST` | `/api/v1/me/notifications/read-all` | Əməliyyatı başladır | Tenant Bearer | `me.notifications.read-all` | `UserNotificationController@markAllRead` |
| `GET` | `/api/v1/me/permissions` | Məlumatı oxuyur | Tenant Bearer | `me.permissions` | `UserController@permissions` |
| `GET` | `/api/v1/page-schema/{pageKey}` | Bir qeydi oxuyur | Tenant Bearer | `page-schema.show` | `PageSchemaController@show` |
| `GET` | `/api/v1/projects` | Siyahı oxuyur | Tenant Bearer | `projects.index` | `ProjectController@index` |
| `POST` | `/api/v1/projects` | Yeni qeyd yaradır | Tenant Bearer | `projects.store` | `ProjectController@store` |
| `DELETE` | `/api/v1/projects/{project}` | Qeydi silir | Tenant Bearer | `projects.destroy` | `ProjectController@destroy` |
| `GET` | `/api/v1/projects/{project}` | Bir qeydi oxuyur | Tenant Bearer | `projects.show` | `ProjectController@show` |
| `PATCH` | `/api/v1/projects/{project}` | Qeydi yeniləyir | Tenant Bearer | `projects.update` | `ProjectController@update` |
| `PUT` | `/api/v1/projects/{project}` | Qeydi yeniləyir | Tenant Bearer | `projects.update` | `ProjectController@update` |
| `POST` | `/api/v1/regions` | Yeni qeyd yaradır | Tenant Bearer | `regions.store` | `RegionController@store` |
| `DELETE` | `/api/v1/regions/{region}` | Qeydi silir | Tenant Bearer | `regions.destroy` | `RegionController@destroy` |
| `PUT` | `/api/v1/regions/{region}` | Qeydi yeniləyir | Tenant Bearer | `regions.update` | `RegionController@update` |
| `GET` | `/api/v1/settings` | Siyahı oxuyur | Tenant Bearer | `settings.index` | `SettingsController@index` |
| `POST` | `/api/v1/settings` | Yeni qeyd yaradır | Tenant Bearer | `settings.store` | `SettingsController@store` |
| `GET` | `/api/v1/settings/posting-readiness` | Məlumatı oxuyur | Tenant Bearer | `settings.posting-readiness` | `SettingsController@postingReadiness` |
| `POST` | `/api/v1/settings/reset-operational-data` | Əməliyyatı başladır | Tenant Bearer | `settings.reset-operational-data` | `OperationalDataResetController` |
| `DELETE` | `/api/v1/tenant/{id}` | Qeydi silir | Tenant Bearer | `tenant.delete` | `TenantController@delete` |
| `POST` | `/api/v1/tenant/register` | Əməliyyatı başladır | Açıq / route-a görə | `tenant.register` | `TenantController@register` |
| `GET` | `/api/v1/trash` | Siyahı oxuyur | Tenant Bearer | `trash.index` | `TrashController@index` |
| `GET` | `/api/v1/trash/{type}/{id}` | Bir qeydi oxuyur | Tenant Bearer | `trash.show` | `TrashController@show` |
| `POST` | `/api/v1/trash/{type}/{id}/restore` | Əməliyyatı başladır | Tenant Bearer | `trash.restore` | `TrashController@restore` |
| `GET` | `/api/v1/users` | Siyahı oxuyur | Tenant Bearer | `users.index` | `UserController@index` |
| `POST` | `/api/v1/users` | Yeni qeyd yaradır | Tenant Bearer | `users.store` | `UserController@store` |
| `DELETE` | `/api/v1/users/{user}` | Qeydi silir | Tenant Bearer | `users.destroy` | `UserController@destroy` |
| `GET` | `/api/v1/users/{user}` | Bir qeydi oxuyur | Tenant Bearer | `users.show` | `UserController@show` |
| `PATCH` | `/api/v1/users/{user}` | Qeydi yeniləyir | Tenant Bearer | `users.update` | `UserController@update` |
| `PUT` | `/api/v1/users/{user}` | Qeydi yeniləyir | Tenant Bearer | `users.update` | `UserController@update` |
| `GET` | `/api/v1/view-schema/{viewName}` | Bir qeydi oxuyur | Tenant Bearer | `view-schema.show` | `ViewSchemaController@show` |
| `PUT` | `/api/v1/view-schema/{viewName}` | Qeydi yeniləyir | Tenant Bearer | `view-schema.update` | `ViewSchemaController@update` |
| `POST` | `/api/v1/view-schema/{viewName}/reset` | Əməliyyatı başladır | Tenant Bearer | `view-schema.reset` | `ViewSchemaController@resetViewSettings` |
| `POST` | `/api/v1/view-schema/filter-templates` | Əməliyyatı başladır | Tenant Bearer | `filter-templates.add` | `ViewSchemaController@addFilterTemplate` |
| `DELETE` | `/api/v1/view-schema/filter-templates/{id}` | Qeydi silir | Tenant Bearer | `filter-templates.delete` | `ViewSchemaController@deleteFilterTemplate` |
| `PUT` | `/api/v1/view-schema/filter-templates/{id}` | Qeydi dəyişir | Tenant Bearer | `filter-templates.edit` | `ViewSchemaController@editFilterTemplate` |

## POS

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/pos-cash-movements` | Siyahı oxuyur | Tenant Bearer + filial | `pos-cash-movements.index` | `Pos\PosCashMovementController@index` |
| `GET` | `/api/v1/pos-cash-movements/{id}` | Bir qeydi oxuyur | Tenant Bearer + filial | `pos-cash-movements.show` | `Pos\PosCashMovementController@show` |
| `GET` | `/api/v1/pos-cash-reasons` | Siyahı oxuyur | Tenant Bearer + filial | `pos-cash-reasons.index` | `Pos\PosCashReasonController@index` |
| `POST` | `/api/v1/pos-cash-reasons` | Yeni qeyd yaradır | Tenant Bearer + filial | `pos-cash-reasons.store` | `Pos\PosCashReasonController@store` |
| `DELETE` | `/api/v1/pos-cash-reasons/{posCashReason}` | Qeydi silir | Tenant Bearer + filial | `pos-cash-reasons.destroy` | `Pos\PosCashReasonController@destroy` |
| `GET` | `/api/v1/pos-cash-reasons/{posCashReason}` | Bir qeydi oxuyur | Tenant Bearer + filial | `pos-cash-reasons.show` | `Pos\PosCashReasonController@show` |
| `PATCH` | `/api/v1/pos-cash-reasons/{posCashReason}` | Qeydi yeniləyir | Tenant Bearer + filial | `pos-cash-reasons.update` | `Pos\PosCashReasonController@update` |
| `PUT` | `/api/v1/pos-cash-reasons/{posCashReason}` | Qeydi yeniləyir | Tenant Bearer + filial | `pos-cash-reasons.update` | `Pos\PosCashReasonController@update` |
| `GET` | `/api/v1/pos-deposits` | Məlumatı oxuyur | Tenant Bearer + filial | `pos-deposits.index` | `Pos\PosCashMovementController@deposits` |
| `GET` | `/api/v1/pos-deposits/{id}` | Məlumatı oxuyur | Tenant Bearer + filial | `pos-deposits.show` | `Pos\PosCashMovementController@showDeposit` |
| `GET` | `/api/v1/pos-payment-types` | Siyahı oxuyur | Tenant Bearer + filial | `pos-payment-types.index` | `Pos\PosPaymentTypeController@index` |
| `POST` | `/api/v1/pos-payment-types` | Yeni qeyd yaradır | Tenant Bearer + filial | `pos-payment-types.store` | `Pos\PosPaymentTypeController@store` |
| `DELETE` | `/api/v1/pos-payment-types/{posPaymentType}` | Qeydi silir | Tenant Bearer + filial | `pos-payment-types.destroy` | `Pos\PosPaymentTypeController@destroy` |
| `GET` | `/api/v1/pos-payment-types/{posPaymentType}` | Bir qeydi oxuyur | Tenant Bearer + filial | `pos-payment-types.show` | `Pos\PosPaymentTypeController@show` |
| `PATCH` | `/api/v1/pos-payment-types/{posPaymentType}` | Qeydi yeniləyir | Tenant Bearer + filial | `pos-payment-types.update` | `Pos\PosPaymentTypeController@update` |
| `PUT` | `/api/v1/pos-payment-types/{posPaymentType}` | Qeydi yeniləyir | Tenant Bearer + filial | `pos-payment-types.update` | `Pos\PosPaymentTypeController@update` |
| `GET` | `/api/v1/pos-reasons` | Siyahı oxuyur | Tenant Bearer + filial | `pos-reasons.index` | `Pos\PosCashReasonController@index` |
| `POST` | `/api/v1/pos-reasons` | Yeni qeyd yaradır | Tenant Bearer + filial | `pos-reasons.store` | `Pos\PosCashReasonController@store` |
| `DELETE` | `/api/v1/pos-reasons/{posCashReason}` | Qeydi silir | Tenant Bearer + filial | `pos-reasons.destroy` | `Pos\PosCashReasonController@destroy` |
| `GET` | `/api/v1/pos-reasons/{posCashReason}` | Bir qeydi oxuyur | Tenant Bearer + filial | `pos-reasons.show` | `Pos\PosCashReasonController@show` |
| `PATCH` | `/api/v1/pos-reasons/{posCashReason}` | Qeydi yeniləyir | Tenant Bearer + filial | `pos-reasons.update` | `Pos\PosCashReasonController@update` |
| `PUT` | `/api/v1/pos-reasons/{posCashReason}` | Qeydi yeniləyir | Tenant Bearer + filial | `pos-reasons.update` | `Pos\PosCashReasonController@update` |
| `GET` | `/api/v1/pos-registers` | Siyahı oxuyur | Tenant Bearer + filial | `pos-registers.index` | `Pos\PosRegisterController@index` |
| `POST` | `/api/v1/pos-registers` | Yeni qeyd yaradır | Tenant Bearer + filial | `pos-registers.store` | `Pos\PosRegisterController@store` |
| `DELETE` | `/api/v1/pos-registers/{posRegister}` | Qeydi silir | Tenant Bearer + filial | `pos-registers.destroy` | `Pos\PosRegisterController@destroy` |
| `GET` | `/api/v1/pos-registers/{posRegister}` | Bir qeydi oxuyur | Tenant Bearer + filial | `pos-registers.show` | `Pos\PosRegisterController@show` |
| `PATCH` | `/api/v1/pos-registers/{posRegister}` | Qeydi yeniləyir | Tenant Bearer + filial | `pos-registers.update` | `Pos\PosRegisterController@update` |
| `PUT` | `/api/v1/pos-registers/{posRegister}` | Qeydi yeniləyir | Tenant Bearer + filial | `pos-registers.update` | `Pos\PosRegisterController@update` |
| `POST` | `/api/v1/pos-registers/{posRegister}/activation-code` | Əməliyyatı başladır | Tenant Bearer + filial | `pos-registers.activation-code` | `Pos\PosRegisterController@activationCode` |
| `POST` | `/api/v1/pos-registers/{posRegister}/reset-installation` | Əməliyyatı başladır | Tenant Bearer + filial | `pos-registers.reset-installation` | `Pos\PosRegisterController@resetInstallation` |
| `GET` | `/api/v1/pos-returns` | Siyahı oxuyur | Tenant Bearer + filial | `pos-returns.index` | `Pos\PosSaleReturnController@index` |
| `GET` | `/api/v1/pos-returns/{id}` | Bir qeydi oxuyur | Tenant Bearer + filial | `pos-returns.show` | `Pos\PosSaleReturnController@show` |
| `GET` | `/api/v1/pos-sale-returns` | Siyahı oxuyur | Tenant Bearer + filial | `pos-sale-returns.index` | `Pos\PosSaleReturnController@index` |
| `GET` | `/api/v1/pos-sale-returns/{id}` | Bir qeydi oxuyur | Tenant Bearer + filial | `pos-sale-returns.show` | `Pos\PosSaleReturnController@show` |
| `GET` | `/api/v1/pos-sales` | Siyahı oxuyur | Tenant Bearer + filial | `pos-sales.index` | `Pos\PosSaleController@index` |
| `GET` | `/api/v1/pos-sales/{id}` | Bir qeydi oxuyur | Tenant Bearer + filial | `pos-sales.show` | `Pos\PosSaleController@show` |
| `GET` | `/api/v1/pos-shifts` | Siyahı oxuyur | Tenant Bearer + filial | `pos-shifts.index` | `Pos\PosShiftController@index` |
| `GET` | `/api/v1/pos-shifts/{id}` | Bir qeydi oxuyur | Tenant Bearer + filial | `pos-shifts.show` | `Pos\PosShiftController@show` |
| `GET` | `/api/v1/pos-shifts/{id}/z-report` | Məlumatı oxuyur | Tenant Bearer + filial | `pos-shifts.z-report` | `Pos\PosShiftController@zReport` |
| `GET` | `/api/v1/pos-sync` | Siyahı oxuyur | Tenant Bearer + filial | `pos-sync.index` | `Pos\PosSyncMonitorController@index` |
| `GET` | `/api/v1/pos-sync-monitor` | Siyahı oxuyur | Tenant Bearer + filial | `pos-sync-monitor.index` | `Pos\PosSyncMonitorController@index` |
| `POST` | `/api/v1/pos-sync-monitor/{issue}/retry` | Əməliyyatı başladır | Tenant Bearer + filial | `pos-sync-monitor.retry` | `Pos\PosSyncMonitorController@retry` |
| `GET` | `/api/v1/pos-sync-monitor/status` | Məlumatı oxuyur | Tenant Bearer + filial | `pos-sync-monitor.status` | `Pos\PosSyncMonitorController@status` |
| `POST` | `/api/v1/pos-sync/{issue}/retry` | Əməliyyatı başladır | Tenant Bearer + filial | `pos-sync.retry` | `Pos\PosSyncMonitorController@retry` |
| `GET` | `/api/v1/pos-sync/status` | Məlumatı oxuyur | Tenant Bearer + filial | `pos-sync.status` | `Pos\PosSyncMonitorController@status` |
| `GET` | `/api/v1/pos-withdrawals` | Məlumatı oxuyur | Tenant Bearer + filial | `pos-withdrawals.index` | `Pos\PosCashMovementController@withdrawals` |
| `GET` | `/api/v1/pos-withdrawals/{id}` | Məlumatı oxuyur | Tenant Bearer + filial | `pos-withdrawals.show` | `Pos\PosCashMovementController@showWithdrawal` |
| `POST` | `/api/v1/pos/sync` | Əməliyyatı başladır | POS cihaz tokeni | `pos.sync` | `Pos\PosSyncController@sync` |
| `POST` | `/api/v1/pos/sync/activate` | Əməliyyatı başladır | Açıq / route-a görə | `pos.sync.activate` | `Pos\PosSyncController@activate` |
| `POST` | `/api/v1/pos/sync/device-token/refresh` | Əməliyyatı başladır | Açıq / route-a görə | `pos.sync.device-token.refresh` | `Pos\PosSyncController@refreshDeviceToken` |

## Satınalma

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/purchase-orders` | Siyahı oxuyur | Tenant Bearer + filial | `purchase-orders.index` | `Purchase\PurchaseOrderController@index` |
| `POST` | `/api/v1/purchase-orders` | Yeni qeyd yaradır | Tenant Bearer + filial | `purchase-orders.store` | `Purchase\PurchaseOrderController@store` |
| `DELETE` | `/api/v1/purchase-orders/{purchase_order}` | Qeydi silir | Tenant Bearer + filial | `purchase-orders.destroy` | `Purchase\PurchaseOrderController@destroy` |
| `GET` | `/api/v1/purchase-orders/{purchase_order}` | Bir qeydi oxuyur | Tenant Bearer + filial | `purchase-orders.show` | `Purchase\PurchaseOrderController@show` |
| `PATCH` | `/api/v1/purchase-orders/{purchase_order}` | Qeydi yeniləyir | Tenant Bearer + filial | `purchase-orders.update` | `Purchase\PurchaseOrderController@update` |
| `PUT` | `/api/v1/purchase-orders/{purchase_order}` | Qeydi yeniləyir | Tenant Bearer + filial | `purchase-orders.update` | `Purchase\PurchaseOrderController@update` |
| `PATCH` | `/api/v1/purchase-orders/{purchaseOrderId}/state` | Qeydi dəyişir | Tenant Bearer + filial | `purchase-orders.change-state` | `Purchase\PurchaseOrderController@changeState` |
| `GET` | `/api/v1/purchase-receipts` | Siyahı oxuyur | Tenant Bearer + filial | `purchase-receipts.index` | `Purchase\PurchaseReceiptController@index` |
| `POST` | `/api/v1/purchase-receipts` | Yeni qeyd yaradır | Tenant Bearer + filial | `purchase-receipts.store` | `Purchase\PurchaseReceiptController@store` |
| `DELETE` | `/api/v1/purchase-receipts/{purchase_receipt}` | Qeydi silir | Tenant Bearer + filial | `purchase-receipts.destroy` | `Purchase\PurchaseReceiptController@destroy` |
| `GET` | `/api/v1/purchase-receipts/{purchase_receipt}` | Bir qeydi oxuyur | Tenant Bearer + filial | `purchase-receipts.show` | `Purchase\PurchaseReceiptController@show` |
| `PATCH` | `/api/v1/purchase-receipts/{purchase_receipt}` | Qeydi yeniləyir | Tenant Bearer + filial | `purchase-receipts.update` | `Purchase\PurchaseReceiptController@update` |
| `PUT` | `/api/v1/purchase-receipts/{purchase_receipt}` | Qeydi yeniləyir | Tenant Bearer + filial | `purchase-receipts.update` | `Purchase\PurchaseReceiptController@update` |
| `PATCH` | `/api/v1/purchase-receipts/{purchaseReceipt}/state` | Qeydi dəyişir | Tenant Bearer + filial | `purchase-receipts.change-state` | `Purchase\PurchaseReceiptController@changeState` |

## Satış

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/sale-orders` | Siyahı oxuyur | Tenant Bearer + filial | `sale-orders.index` | `Sales\SaleOrderController@index` |
| `POST` | `/api/v1/sale-orders` | Yeni qeyd yaradır | Tenant Bearer + filial | `sale-orders.store` | `Sales\SaleOrderController@store` |
| `DELETE` | `/api/v1/sale-orders/{sale_order}` | Qeydi silir | Tenant Bearer + filial | `sale-orders.destroy` | `Sales\SaleOrderController@destroy` |
| `GET` | `/api/v1/sale-orders/{sale_order}` | Bir qeydi oxuyur | Tenant Bearer + filial | `sale-orders.show` | `Sales\SaleOrderController@show` |
| `PATCH` | `/api/v1/sale-orders/{sale_order}` | Qeydi yeniləyir | Tenant Bearer + filial | `sale-orders.update` | `Sales\SaleOrderController@update` |
| `PUT` | `/api/v1/sale-orders/{sale_order}` | Qeydi yeniləyir | Tenant Bearer + filial | `sale-orders.update` | `Sales\SaleOrderController@update` |
| `PATCH` | `/api/v1/sale-orders/{sale_order}/state` | Qeydi dəyişir | Tenant Bearer + filial | `sale-orders.change-state` | `Sales\SaleOrderController@changeState` |
| `GET` | `/api/v1/sale-receipts` | Siyahı oxuyur | Tenant Bearer + filial | `sale-receipts.index` | `Sales\SaleReceiptController@index` |
| `POST` | `/api/v1/sale-receipts` | Yeni qeyd yaradır | Tenant Bearer + filial | `sale-receipts.store` | `Sales\SaleReceiptController@store` |
| `DELETE` | `/api/v1/sale-receipts/{sale_receipt}` | Qeydi silir | Tenant Bearer + filial | `sale-receipts.destroy` | `Sales\SaleReceiptController@destroy` |
| `GET` | `/api/v1/sale-receipts/{sale_receipt}` | Bir qeydi oxuyur | Tenant Bearer + filial | `sale-receipts.show` | `Sales\SaleReceiptController@show` |
| `PATCH` | `/api/v1/sale-receipts/{sale_receipt}` | Qeydi yeniləyir | Tenant Bearer + filial | `sale-receipts.update` | `Sales\SaleReceiptController@update` |
| `PUT` | `/api/v1/sale-receipts/{sale_receipt}` | Qeydi yeniləyir | Tenant Bearer + filial | `sale-receipts.update` | `Sales\SaleReceiptController@update` |
| `PATCH` | `/api/v1/sale-receipts/{sale_receipt}/state` | Qeydi dəyişir | Tenant Bearer + filial | `sale-receipts.change-state` | `Sales\SaleReceiptController@changeState` |

## Tərəfdaşlar

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/partner-bank-accounts` | Siyahı oxuyur | Tenant Bearer + filial | `partner-bank-account.index` | `Partner\PartnerBankAccountController@index` |
| `POST` | `/api/v1/partner-bank-accounts` | Yeni qeyd yaradır | Tenant Bearer + filial | `partner-bank-account.store` | `Partner\PartnerBankAccountController@store` |
| `DELETE` | `/api/v1/partner-bank-accounts/{partner_bank_account}` | Qeydi silir | Tenant Bearer + filial | `partner-bank-account.destroy` | `Partner\PartnerBankAccountController@destroy` |
| `GET` | `/api/v1/partner-bank-accounts/{partner_bank_account}` | Bir qeydi oxuyur | Tenant Bearer + filial | `partner-bank-account.show` | `Partner\PartnerBankAccountController@show` |
| `PATCH` | `/api/v1/partner-bank-accounts/{partner_bank_account}` | Qeydi yeniləyir | Tenant Bearer + filial | `partner-bank-account.update` | `Partner\PartnerBankAccountController@update` |
| `PUT` | `/api/v1/partner-bank-accounts/{partner_bank_account}` | Qeydi yeniləyir | Tenant Bearer + filial | `partner-bank-account.update` | `Partner\PartnerBankAccountController@update` |
| `GET` | `/api/v1/partner-groups` | Siyahı oxuyur | Tenant Bearer + filial | `partner-group.index` | `Partner\PartnerGroupController@index` |
| `POST` | `/api/v1/partner-groups` | Yeni qeyd yaradır | Tenant Bearer + filial | `partner-group.store` | `Partner\PartnerGroupController@store` |
| `DELETE` | `/api/v1/partner-groups/{partner_group}` | Qeydi silir | Tenant Bearer + filial | `partner-group.destroy` | `Partner\PartnerGroupController@destroy` |
| `GET` | `/api/v1/partner-groups/{partner_group}` | Bir qeydi oxuyur | Tenant Bearer + filial | `partner-group.show` | `Partner\PartnerGroupController@show` |
| `PATCH` | `/api/v1/partner-groups/{partner_group}` | Qeydi yeniləyir | Tenant Bearer + filial | `partner-group.update` | `Partner\PartnerGroupController@update` |
| `PUT` | `/api/v1/partner-groups/{partner_group}` | Qeydi yeniləyir | Tenant Bearer + filial | `partner-group.update` | `Partner\PartnerGroupController@update` |
| `GET` | `/api/v1/partners` | Siyahı oxuyur | Tenant Bearer + filial | `partner.index` | `Partner\PartnerController@index` |
| `POST` | `/api/v1/partners` | Yeni qeyd yaradır | Tenant Bearer + filial | `partner.store` | `Partner\PartnerController@store` |
| `DELETE` | `/api/v1/partners/{partner}` | Qeydi silir | Tenant Bearer + filial | `partner.destroy` | `Partner\PartnerController@destroy` |
| `GET` | `/api/v1/partners/{partner}` | Bir qeydi oxuyur | Tenant Bearer + filial | `partner.show` | `Partner\PartnerController@show` |
| `PATCH` | `/api/v1/partners/{partner}` | Qeydi yeniləyir | Tenant Bearer + filial | `partner.update` | `Partner\PartnerController@update` |
| `PUT` | `/api/v1/partners/{partner}` | Qeydi yeniləyir | Tenant Bearer + filial | `partner.update` | `Partner\PartnerController@update` |
| `POST` | `/api/v1/partners/taxpayer-lookup` | Əməliyyatı başladır | Tenant Bearer + filial | `partners.taxpayer-lookup` | `Partner\TaxpayerLookupController` |
| `POST` | `/api/v1/partners/taxpayer-risk-check` | Əməliyyatı başladır | Tenant Bearer + filial | `partners.taxpayer-risk-check` | `Partner\TaxpayerRiskCheckController` |
| `POST` | `/api/v1/partners/taxpayer-risk-check-all` | Əməliyyatı başladır | Tenant Bearer + filial | `partners.taxpayer-risk-check-all` | `Partner\TaxpayerRiskCheckAllController` |

## Toplu əməliyyatlar

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/bulk/{documentType}/actions` | Məlumatı oxuyur | Tenant Bearer | `bulk.actions.list` | `BulkOperations\BulkOperationController@availableActions` |
| `POST` | `/api/v1/bulk/{documentType}/actions` | Əməliyyatı başladır | Tenant Bearer | `bulk.actions.execute` | `BulkOperations\BulkOperationController@executeBulkAction` |
| `POST` | `/api/v1/bulk/{documentType}/edit` | Əməliyyatı başladır | Tenant Bearer | `bulk.edit.execute` | `BulkOperations\BulkOperationController@executeBulkEdit` |

## Workflow

| Metod | Path | Məqsəd | Giriş konteksti | Route adı | Handler |
| --- | --- | --- | --- | --- | --- |
| `GET` | `/api/v1/workflow-runs` | Siyahı oxuyur | Tenant Bearer | `workflow-runs.index` | `Workflows\WorkflowRunController@index` |
| `GET` | `/api/v1/workflow-runs/{run}` | Bir qeydi oxuyur | Tenant Bearer | `workflow-runs.show` | `Workflows\WorkflowRunController@show` |
| `POST` | `/api/v1/workflow-runs/{run}/retry` | Əməliyyatı başladır | Tenant Bearer | `workflow-runs.retry` | `Workflows\WorkflowRunController@retry` |
| `GET` | `/api/v1/workflows` | Siyahı oxuyur | Tenant Bearer | `workflows.index` | `Workflows\WorkflowController@index` |
| `POST` | `/api/v1/workflows` | Yeni qeyd yaradır | Tenant Bearer | `workflows.store` | `Workflows\WorkflowController@store` |
| `DELETE` | `/api/v1/workflows/{workflow}` | Qeydi silir | Tenant Bearer | `workflows.destroy` | `Workflows\WorkflowController@destroy` |
| `GET` | `/api/v1/workflows/{workflow}` | Bir qeydi oxuyur | Tenant Bearer | `workflows.show` | `Workflows\WorkflowController@show` |
| `PUT` | `/api/v1/workflows/{workflow}` | Qeydi yeniləyir | Tenant Bearer | `workflows.update` | `Workflows\WorkflowController@update` |
| `GET` | `/api/v1/workflows/catalog` | Məlumatı oxuyur | Tenant Bearer | `workflows.catalog` | `Workflows\WorkflowCatalogController` |

