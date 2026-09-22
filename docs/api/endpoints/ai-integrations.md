---
sidebar_position: 10
---

# Avtomatlaşdırma və inteqrasiyalar

> Cari backend snapshotından yaranıb: **52 HTTP operation**. Bu texniki indeks path və handler üçündür; field və JSON nümunələri resursun öz səhifəsində saxlanılır.

## İnteqrasiyalar

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/integration-clients` | Siyahı oxuyur | Tenant Bearer | `Integrations\IntegrationClientController@index` |
| `POST` | `/api/v1/integration-clients` | Yeni qeyd yaradır | Tenant Bearer | `Integrations\IntegrationClientController@store` |
| `PATCH` | `/api/v1/integration-clients/{client}` | Qeydi yeniləyir | Tenant Bearer | `Integrations\IntegrationClientController@update` |
| `POST` | `/api/v1/integration-clients/{client}/revoke` | Əməliyyatı başladır | Tenant Bearer | `Integrations\IntegrationClientController@revoke` |
| `POST` | `/api/v1/integration-clients/{client}/rotate` | Əməliyyatı başladır | Tenant Bearer | `Integrations\IntegrationClientController@rotate` |
| `GET` | `/api/v1/integration-clients/users` | Məlumatı oxuyur | Tenant Bearer | `Integrations\IntegrationClientController@users` |
| `GET` | `/api/v1/integration-connections` | Siyahı oxuyur | Tenant Bearer | `Integrations\IntegrationConnectionController@index` |
| `POST` | `/api/v1/integration-connections` | Yeni qeyd yaradır | Tenant Bearer | `Integrations\IntegrationConnectionController@store` |
| `DELETE` | `/api/v1/integration-connections/{connection}` | Qeydi silir | Tenant Bearer | `Integrations\IntegrationConnectionController@destroy` |
| `PATCH` | `/api/v1/integration-connections/{connection}` | Qeydi yeniləyir | Tenant Bearer | `Integrations\IntegrationConnectionController@update` |
| `POST` | `/api/v1/integration-connections/{connection}/rotate-secret` | Əməliyyatı başladır | Tenant Bearer | `Integrations\IntegrationConnectionController@rotateSecret` |
| `POST` | `/api/v1/integration-connections/{connection}/test` | Əməliyyatı başladır | Tenant Bearer | `Integrations\IntegrationConnectionController@test` |
| `GET` | `/api/v1/integrations/catalog` | Məlumatı oxuyur | Tenant Bearer | `Integrations\IntegrationCatalogController@connectors` |
| `GET` | `/api/v1/integrations/deliveries` | Məlumatı oxuyur | Tenant Bearer | `Integrations\IntegrationMonitorController@deliveries` |
| `POST` | `/api/v1/integrations/deliveries/{delivery}/retry` | Əməliyyatı başladır | Tenant Bearer | `Integrations\IntegrationMonitorController@retry` |
| `GET` | `/api/v1/integrations/events` | Məlumatı oxuyur | Tenant Bearer | `Integrations\IntegrationMonitorController@events` |
| `GET` | `/api/v1/integrations/status` | Məlumatı oxuyur | Tenant Bearer | `Integrations\IntegrationMonitorController@status` |

## Biznes şəbəkəsi

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/business-network/companies/search` | Məlumatı oxuyur | Tenant Bearer | `BusinessNetwork\NetworkProfileController@search` |
| `GET` | `/api/v1/business-network/connections` | Siyahı oxuyur | Tenant Bearer | `BusinessNetwork\NetworkConnectionController@index` |
| `POST` | `/api/v1/business-network/connections` | Yeni qeyd yaradır | Tenant Bearer | `BusinessNetwork\NetworkConnectionController@store` |
| `DELETE` | `/api/v1/business-network/connections/{connection}` | Qeydi silir | Tenant Bearer | `BusinessNetwork\NetworkConnectionController@destroy` |
| `PATCH` | `/api/v1/business-network/connections/{connection}` | Qeydi yeniləyir | Tenant Bearer | `BusinessNetwork\NetworkConnectionController@update` |
| `POST` | `/api/v1/business-network/connections/{connection}/accept` | Əməliyyatı başladır | Tenant Bearer | `BusinessNetwork\NetworkConnectionController@accept` |
| `GET` | `/api/v1/business-network/connections/{connection}/accept-options` | Məlumatı oxuyur | Tenant Bearer | `BusinessNetwork\NetworkMappingController@options` |
| `POST` | `/api/v1/business-network/connections/{connection}/documents/{sourceType}/{sourceId}/send` | Əməliyyatı başladır | Tenant Bearer | `BusinessNetwork\NetworkExchangeController@send` |
| `GET` | `/api/v1/business-network/connections/{connection}/mapping-options` | Məlumatı oxuyur | Tenant Bearer | `BusinessNetwork\NetworkMappingController@options` |
| `GET` | `/api/v1/business-network/connections/{connection}/mappings` | Siyahı oxuyur | Tenant Bearer | `BusinessNetwork\NetworkMappingController@index` |
| `PUT` | `/api/v1/business-network/connections/{connection}/mappings` | Yeni qeyd yaradır | Tenant Bearer | `BusinessNetwork\NetworkMappingController@store` |
| `DELETE` | `/api/v1/business-network/connections/{connection}/mappings/{mapping}` | Qeydi silir | Tenant Bearer | `BusinessNetwork\NetworkMappingController@destroy` |
| `POST` | `/api/v1/business-network/connections/{connection}/reject` | Əməliyyatı başladır | Tenant Bearer | `BusinessNetwork\NetworkConnectionController@reject` |
| `GET` | `/api/v1/business-network/documents/{localType}/{localId}/history` | Məlumatı oxuyur | Tenant Bearer | `BusinessNetwork\NetworkExchangeController@history` |
| `GET` | `/api/v1/business-network/exchanges` | Siyahı oxuyur | Tenant Bearer | `BusinessNetwork\NetworkExchangeController@index` |
| `GET` | `/api/v1/business-network/exchanges/counts` | Məlumatı oxuyur | Tenant Bearer | `BusinessNetwork\NetworkExchangeController@counts` |
| `GET` | `/api/v1/business-network/profile` | Bir qeydi oxuyur | Tenant Bearer | `BusinessNetwork\NetworkProfileController@show` |
| `GET` | `/api/v1/business-network/versions/{version}` | Bir qeydi oxuyur | Tenant Bearer | `BusinessNetwork\NetworkExchangeController@show` |
| `POST` | `/api/v1/business-network/versions/{version}/accept` | Əməliyyatı başladır | Tenant Bearer | `BusinessNetwork\NetworkExchangeController@accept` |
| `POST` | `/api/v1/business-network/versions/{version}/cancel-request` | Əməliyyatı başladır | Tenant Bearer | `BusinessNetwork\NetworkExchangeController@cancel` |
| `POST` | `/api/v1/business-network/versions/{version}/cancel-resolution` | Əməliyyatı başladır | Tenant Bearer | `BusinessNetwork\NetworkExchangeController@resolveCancellation` |
| `GET` | `/api/v1/business-network/versions/{version}/preview` | Məlumatı oxuyur | Tenant Bearer | `BusinessNetwork\NetworkExchangeController@preview` |
| `POST` | `/api/v1/business-network/versions/{version}/reject` | Əməliyyatı başladır | Tenant Bearer | `BusinessNetwork\NetworkExchangeController@reject` |

## Workflow

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/workflow-runs` | Siyahı oxuyur | Tenant Bearer | `Workflows\WorkflowRunController@index` |
| `GET` | `/api/v1/workflow-runs/{run}` | Bir qeydi oxuyur | Tenant Bearer | `Workflows\WorkflowRunController@show` |
| `POST` | `/api/v1/workflow-runs/{run}/retry` | Əməliyyatı başladır | Tenant Bearer | `Workflows\WorkflowRunController@retry` |
| `GET` | `/api/v1/workflows` | Siyahı oxuyur | Tenant Bearer | `Workflows\WorkflowController@index` |
| `POST` | `/api/v1/workflows` | Yeni qeyd yaradır | Tenant Bearer | `Workflows\WorkflowController@store` |
| `DELETE` | `/api/v1/workflows/{workflow}` | Qeydi silir | Tenant Bearer | `Workflows\WorkflowController@destroy` |
| `GET` | `/api/v1/workflows/{workflow}` | Bir qeydi oxuyur | Tenant Bearer | `Workflows\WorkflowController@show` |
| `PUT` | `/api/v1/workflows/{workflow}` | Qeydi yeniləyir | Tenant Bearer | `Workflows\WorkflowController@update` |
| `GET` | `/api/v1/workflows/catalog` | Məlumatı oxuyur | Tenant Bearer | `Workflows\WorkflowCatalogController` |

## Toplu əməliyyatlar

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/bulk/{documentType}/actions` | Məlumatı oxuyur | Tenant Bearer | `BulkOperations\BulkOperationController@availableActions` |
| `POST` | `/api/v1/bulk/{documentType}/actions` | Əməliyyatı başladır | Tenant Bearer | `BulkOperations\BulkOperationController@executeBulkAction` |
| `POST` | `/api/v1/bulk/{documentType}/edit` | Əməliyyatı başladır | Tenant Bearer | `BulkOperations\BulkOperationController@executeBulkEdit` |

