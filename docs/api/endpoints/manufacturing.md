---
sidebar_position: 7
---

# İstehsal

> Cari backend snapshotından yaranıb: **44 HTTP operation**. Bu texniki indeks path və handler üçündür; field və JSON nümunələri resursun öz səhifəsində saxlanılır.

## İstehsal

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/manufacturing/boms` | Siyahı oxuyur | Tenant Bearer + filial | `Manufacturing\BomController@index` |
| `POST` | `/api/v1/manufacturing/boms` | Yeni qeyd yaradır | Tenant Bearer + filial | `Manufacturing\BomController@store` |
| `DELETE` | `/api/v1/manufacturing/boms/{bom}` | Qeydi silir | Tenant Bearer + filial | `Manufacturing\BomController@destroy` |
| `GET` | `/api/v1/manufacturing/boms/{bom}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Manufacturing\BomController@show` |
| `PATCH` | `/api/v1/manufacturing/boms/{bom}` | Qeydi yeniləyir | Tenant Bearer + filial | `Manufacturing\BomController@update` |
| `PUT` | `/api/v1/manufacturing/boms/{bom}` | Qeydi yeniləyir | Tenant Bearer + filial | `Manufacturing\BomController@update` |
| `GET` | `/api/v1/manufacturing/orders` | Siyahı oxuyur | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@index` |
| `POST` | `/api/v1/manufacturing/orders` | Yeni qeyd yaradır | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@store` |
| `DELETE` | `/api/v1/manufacturing/orders/{order}` | Qeydi silir | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@destroy` |
| `GET` | `/api/v1/manufacturing/orders/{order}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@show` |
| `PATCH` | `/api/v1/manufacturing/orders/{order}` | Qeydi yeniləyir | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@update` |
| `PUT` | `/api/v1/manufacturing/orders/{order}` | Qeydi yeniləyir | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@update` |
| `POST` | `/api/v1/manufacturing/orders/{order}/cancel` | Əməliyyatı başladır | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@transition` |
| `POST` | `/api/v1/manufacturing/orders/{order}/close` | Əməliyyatı başladır | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@transition` |
| `POST` | `/api/v1/manufacturing/orders/{order}/complete` | Əməliyyatı başladır | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@transition` |
| `POST` | `/api/v1/manufacturing/orders/{order}/confirm` | Əməliyyatı başladır | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@transition` |
| `POST` | `/api/v1/manufacturing/orders/{order}/consume` | Əməliyyatı başladır | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@consume` |
| `POST` | `/api/v1/manufacturing/orders/{order}/operations/{operation}/complete` | Əməliyyatı başladır | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@operate` |
| `POST` | `/api/v1/manufacturing/orders/{order}/operations/{operation}/pause` | Əməliyyatı başladır | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@operate` |
| `POST` | `/api/v1/manufacturing/orders/{order}/operations/{operation}/start` | Əməliyyatı başladır | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@operate` |
| `POST` | `/api/v1/manufacturing/orders/{order}/produce` | Əməliyyatı başladır | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@produce` |
| `POST` | `/api/v1/manufacturing/orders/{order}/start` | Əməliyyatı başladır | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@transition` |
| `GET` | `/api/v1/manufacturing/reports/order-cost` | Məlumatı oxuyur | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@costQuery` |
| `GET` | `/api/v1/manufacturing/reports/order-cost/{order}` | Məlumatı oxuyur | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@cost` |
| `GET` | `/api/v1/manufacturing/reports/production-progress` | Məlumatı oxuyur | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@progress` |
| `GET` | `/api/v1/manufacturing/reports/traceability` | Məlumatı oxuyur | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@traceabilityQuery` |
| `GET` | `/api/v1/manufacturing/reports/traceability/{order}` | Məlumatı oxuyur | Tenant Bearer + filial | `Manufacturing\ProductionOrderController@traceability` |
| `GET` | `/api/v1/manufacturing/routing-operations` | Siyahı oxuyur | Tenant Bearer + filial | `Manufacturing\RoutingOperationController@index` |
| `GET` | `/api/v1/manufacturing/routing-operations/{routing_operation}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Manufacturing\RoutingOperationController@show` |
| `GET` | `/api/v1/manufacturing/routings` | Siyahı oxuyur | Tenant Bearer + filial | `Manufacturing\RoutingController@index` |
| `POST` | `/api/v1/manufacturing/routings` | Yeni qeyd yaradır | Tenant Bearer + filial | `Manufacturing\RoutingController@store` |
| `DELETE` | `/api/v1/manufacturing/routings/{routing}` | Qeydi silir | Tenant Bearer + filial | `Manufacturing\RoutingController@destroy` |
| `GET` | `/api/v1/manufacturing/routings/{routing}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Manufacturing\RoutingController@show` |
| `PATCH` | `/api/v1/manufacturing/routings/{routing}` | Qeydi yeniləyir | Tenant Bearer + filial | `Manufacturing\RoutingController@update` |
| `PUT` | `/api/v1/manufacturing/routings/{routing}` | Qeydi yeniləyir | Tenant Bearer + filial | `Manufacturing\RoutingController@update` |
| `POST` | `/api/v1/manufacturing/routings/{routing}/activate` | Əməliyyatı başladır | Tenant Bearer + filial | `Manufacturing\RoutingController@activate` |
| `POST` | `/api/v1/manufacturing/routings/{routing}/archive` | Əməliyyatı başladır | Tenant Bearer + filial | `Manufacturing\RoutingController@archive` |
| `POST` | `/api/v1/manufacturing/routings/{routing}/new-version` | Əməliyyatı başladır | Tenant Bearer + filial | `Manufacturing\RoutingController@newVersion` |
| `GET` | `/api/v1/manufacturing/work-centers` | Siyahı oxuyur | Tenant Bearer + filial | `Manufacturing\WorkCenterController@index` |
| `POST` | `/api/v1/manufacturing/work-centers` | Yeni qeyd yaradır | Tenant Bearer + filial | `Manufacturing\WorkCenterController@store` |
| `DELETE` | `/api/v1/manufacturing/work-centers/{workCenter}` | Qeydi silir | Tenant Bearer + filial | `Manufacturing\WorkCenterController@destroy` |
| `GET` | `/api/v1/manufacturing/work-centers/{workCenter}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Manufacturing\WorkCenterController@show` |
| `PATCH` | `/api/v1/manufacturing/work-centers/{workCenter}` | Qeydi yeniləyir | Tenant Bearer + filial | `Manufacturing\WorkCenterController@update` |
| `PUT` | `/api/v1/manufacturing/work-centers/{workCenter}` | Qeydi yeniləyir | Tenant Bearer + filial | `Manufacturing\WorkCenterController@update` |

