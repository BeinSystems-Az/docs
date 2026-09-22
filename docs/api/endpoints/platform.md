---
sidebar_position: 2
---

# Platforma və idarəetmə

> Cari backend snapshotından yaranıb: **109 HTTP operation**. Bu texniki indeks path və handler üçündür; field və JSON nümunələri resursun öz səhifəsində saxlanılır.

## Platform və giriş

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/authorization/audit` | Siyahı oxuyur | Tenant Bearer | `Auth\PermissionAuditController@index` |
| `GET` | `/api/v1/authorization/catalog` | Məlumatı oxuyur | Tenant Bearer | `Auth\AuthorizationController@catalog` |
| `GET` | `/api/v1/authorization/policies` | Siyahı oxuyur | Tenant Bearer | `Auth\AuthorizationPolicyController@index` |
| `POST` | `/api/v1/authorization/policies` | Yeni qeyd yaradır | Tenant Bearer | `Auth\AuthorizationPolicyController@store` |
| `GET` | `/api/v1/authorization/policies/{policy}` | Bir qeydi oxuyur | Tenant Bearer | `Auth\AuthorizationPolicyController@show` |
| `PUT` | `/api/v1/authorization/policies/{policy}` | Qeydi yeniləyir | Tenant Bearer | `Auth\AuthorizationPolicyController@update` |
| `POST` | `/api/v1/authorization/policies/{policy}/archive` | Əməliyyatı başladır | Tenant Bearer | `Auth\AuthorizationPolicyController@archive` |
| `POST` | `/api/v1/authorization/policies/{policy}/publish` | Əməliyyatı başladır | Tenant Bearer | `Auth\AuthorizationPolicyController@publish` |
| `GET` | `/api/v1/authorization/policies/catalog` | Məlumatı oxuyur | Tenant Bearer | `Auth\AuthorizationPolicyController@catalog` |
| `GET` | `/api/v1/authorization/policies/subjects` | Məlumatı oxuyur | Tenant Bearer | `Auth\AuthorizationPolicyController@subjects` |
| `GET` | `/api/v1/permissions` | Siyahı oxuyur | Tenant Bearer | `Auth\PermissionController@index` |
| `GET` | `/api/v1/permissions/{permission}` | Bir qeydi oxuyur | Tenant Bearer | `Auth\PermissionController@show` |
| `GET` | `/api/v1/roles` | Siyahı oxuyur | Tenant Bearer | `Auth\RoleController@index` |
| `POST` | `/api/v1/roles` | Yeni qeyd yaradır | Tenant Bearer | `Auth\RoleController@store` |
| `DELETE` | `/api/v1/roles/{role}` | Qeydi silir | Tenant Bearer | `Auth\RoleController@destroy` |
| `GET` | `/api/v1/roles/{role}` | Bir qeydi oxuyur | Tenant Bearer | `Auth\RoleController@show` |
| `PATCH` | `/api/v1/roles/{role}` | Qeydi yeniləyir | Tenant Bearer | `Auth\RoleController@update` |
| `PUT` | `/api/v1/roles/{role}` | Qeydi yeniləyir | Tenant Bearer | `Auth\RoleController@update` |
| `GET` | `/api/v1/users/{user}/authorization` | Bir qeydi oxuyur | Tenant Bearer | `Auth\UserAuthorizationController@show` |
| `PUT` | `/api/v1/users/{user}/authorization` | Qeydi yeniləyir | Tenant Bearer | `Auth\UserAuthorizationController@update` |

## Platform və sistem

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/health` | Məlumatı oxuyur | Açıq / route-a görə | `HealthController@health` |
| `GET` | `/api/health/live` | Məlumatı oxuyur | Açıq / route-a görə | `HealthController@live` |
| `GET` | `/api/health/ready` | Məlumatı oxuyur | Açıq / route-a görə | `HealthController@ready` |
| `GET` | `/api/v1/audit-logs` | Siyahı oxuyur | Tenant Bearer | `AuditLogController@index` |
| `GET` | `/api/v1/audit-logs/{auditLog}` | Bir qeydi oxuyur | Tenant Bearer | `AuditLogController@show` |
| `GET` | `/api/v1/audit-logs/export` | Məlumatı oxuyur | Tenant Bearer | `AuditLogController@export` |
| `GET` | `/api/v1/audit-logs/options` | Məlumatı oxuyur | Tenant Bearer | `AuditLogController@options` |
| `POST` | `/api/v1/audit/client-events` | Əməliyyatı başladır | Tenant Bearer | `AuditLogController@clientEvents` |
| `GET` | `/api/v1/branches` | Siyahı oxuyur | Tenant Bearer | `BranchController@index` |
| `POST` | `/api/v1/branches` | Yeni qeyd yaradır | Tenant Bearer | `BranchController@store` |
| `DELETE` | `/api/v1/branches/{branch}` | Qeydi silir | Tenant Bearer | `BranchController@destroy` |
| `GET` | `/api/v1/branches/{branch}` | Bir qeydi oxuyur | Tenant Bearer | `BranchController@show` |
| `PATCH` | `/api/v1/branches/{branch}` | Qeydi yeniləyir | Tenant Bearer | `BranchController@update` |
| `PUT` | `/api/v1/branches/{branch}` | Qeydi yeniləyir | Tenant Bearer | `BranchController@update` |
| `GET` | `/api/v1/changelog` | Siyahı oxuyur | Açıq / route-a görə | `ChangelogController@index` |
| `GET` | `/api/v1/dashboard/report-catalog` | Məlumatı oxuyur | Tenant Bearer | `DashboardController@catalog` |
| `GET` | `/api/v1/dashboards` | Siyahı oxuyur | Tenant Bearer | `DashboardController@index` |
| `POST` | `/api/v1/dashboards` | Yeni qeyd yaradır | Tenant Bearer | `DashboardController@store` |
| `DELETE` | `/api/v1/dashboards/{dashboard}` | Qeydi silir | Tenant Bearer | `DashboardController@destroy` |
| `GET` | `/api/v1/dashboards/{dashboard}` | Bir qeydi oxuyur | Tenant Bearer | `DashboardController@show` |
| `PATCH` | `/api/v1/dashboards/{dashboard}` | Qeydi yeniləyir | Tenant Bearer | `DashboardController@update` |
| `POST` | `/api/v1/dashboards/{dashboard}/clone` | Əməliyyatı başladır | Tenant Bearer | `DashboardController@clone` |
| `POST` | `/api/v1/dashboards/{dashboard}/data` | Əməliyyatı başladır | Tenant Bearer + filial | `DashboardController@data` |
| `PUT` | `/api/v1/dashboards/{dashboard}/layout` | Qeydi dəyişir | Tenant Bearer | `DashboardController@saveLayout` |
| `POST` | `/api/v1/dashboards/{dashboard}/set-default` | Əməliyyatı başladır | Tenant Bearer | `DashboardController@setDefault` |
| `POST` | `/api/v1/dashboards/{dashboard}/widgets` | Əməliyyatı başladır | Tenant Bearer | `DashboardController@addWidget` |
| `DELETE` | `/api/v1/dashboards/{dashboard}/widgets/{widget}` | Qeydi silir | Tenant Bearer | `DashboardController@deleteWidget` |
| `PATCH` | `/api/v1/dashboards/{dashboard}/widgets/{widget}` | Qeydi dəyişir | Tenant Bearer | `DashboardController@updateWidget` |
| `GET` | `/api/v1/datasets` | Siyahı oxuyur | Tenant Bearer | `DatasetController@index` |
| `POST` | `/api/v1/datasets` | Yeni qeyd yaradır | Tenant Bearer | `DatasetController@store` |
| `DELETE` | `/api/v1/datasets/{dataset}` | Qeydi silir | Tenant Bearer | `DatasetController@destroy` |
| `GET` | `/api/v1/datasets/{dataset}` | Bir qeydi oxuyur | Tenant Bearer | `DatasetController@show` |
| `GET` | `/api/v1/document-numbering/configurations` | Siyahı oxuyur | Tenant Bearer | `DocumentNumberConfigurationController@index` |
| `PUT` | `/api/v1/document-numbering/configurations/{document_type}` | Qeydi yeniləyir | Tenant Bearer | `DocumentNumberConfigurationController@update` |
| `PATCH` | `/api/v1/documents/{document_type}/{id}/name` | Qeydi yeniləyir | Tenant Bearer | `DocumentNameController@update` |
| `GET` | `/api/v1/documents/{resource}/{id}/related-documents` | Siyahı oxuyur | Tenant Bearer + filial | `RelatedDocumentController@index` |
| `POST` | `/api/v1/fields` | Yeni qeyd yaradır | Tenant Bearer | `FieldController@store` |
| `DELETE` | `/api/v1/fields/{field}` | Qeydi silir | Tenant Bearer | `FieldController@destroy` |
| `PUT` | `/api/v1/fields/{field}` | Qeydi yeniləyir | Tenant Bearer | `FieldController@update` |
| `POST` | `/api/v1/forms/{resource}/onchange` | Əməliyyatı başladır | Tenant Bearer | `FormOnchangeController` |
| `GET` | `/api/v1/layout/menu` | Məlumatı oxuyur | Tenant Bearer | `LayoutController@getMenu` |
| `PATCH` | `/api/v1/layout/menu/{navigation_menu_id}` | Qeydi dəyişir | Tenant Bearer | `LayoutController@updateMenuSettings` |
| `GET` | `/api/v1/layout/menu/config` | Məlumatı oxuyur | Tenant Bearer | `LayoutController@getMenuConfiguration` |
| `PUT` | `/api/v1/layout/menu/config` | Qeydi dəyişir | Tenant Bearer | `LayoutController@saveMenuConfiguration` |
| `POST` | `/api/v1/layout/menu/groups` | Əməliyyatı başladır | Tenant Bearer | `LayoutController@createMenuGroup` |
| `DELETE` | `/api/v1/layout/menu/groups/{group_id}` | Qeydi silir | Tenant Bearer | `LayoutController@deleteMenuGroup` |
| `PATCH` | `/api/v1/layout/menu/groups/{group_id}` | Qeydi dəyişir | Tenant Bearer | `LayoutController@updateMenuGroup` |
| `POST` | `/api/v1/lists` | Yeni qeyd yaradır | Tenant Bearer | `ListController@store` |
| `PUT` | `/api/v1/lists` | Qeydi dəyişir | Tenant Bearer | `ListController@sync` |
| `GET` | `/api/v1/lists/{field_id}` | Siyahı oxuyur | Tenant Bearer | `ListController@index` |
| `DELETE` | `/api/v1/lists/{id}` | Qeydi silir | Tenant Bearer | `ListController@destroy` |
| `PATCH` | `/api/v1/lists/{id}` | Qeydi yeniləyir | Tenant Bearer | `ListController@update` |
| `GET` | `/api/v1/lists/item/{id}` | Bir qeydi oxuyur | Tenant Bearer | `ListController@show` |
| `GET` | `/api/v1/me/branches` | Məlumatı oxuyur | Tenant Bearer | `BranchController@mine` |
| `GET` | `/api/v1/me/notifications` | Siyahı oxuyur | Tenant Bearer | `UserNotificationController@index` |
| `POST` | `/api/v1/me/notifications/{notification}/read` | Əməliyyatı başladır | Tenant Bearer | `UserNotificationController@markRead` |
| `POST` | `/api/v1/me/notifications/read-all` | Əməliyyatı başladır | Tenant Bearer | `UserNotificationController@markAllRead` |
| `GET` | `/api/v1/me/permissions` | Məlumatı oxuyur | Tenant Bearer | `UserController@permissions` |
| `GET` | `/api/v1/page-schema/{pageKey}` | Bir qeydi oxuyur | Tenant Bearer | `PageSchemaController@show` |
| `GET` | `/api/v1/projects` | Siyahı oxuyur | Tenant Bearer | `ProjectController@index` |
| `POST` | `/api/v1/projects` | Yeni qeyd yaradır | Tenant Bearer | `ProjectController@store` |
| `DELETE` | `/api/v1/projects/{project}` | Qeydi silir | Tenant Bearer | `ProjectController@destroy` |
| `GET` | `/api/v1/projects/{project}` | Bir qeydi oxuyur | Tenant Bearer | `ProjectController@show` |
| `PATCH` | `/api/v1/projects/{project}` | Qeydi yeniləyir | Tenant Bearer | `ProjectController@update` |
| `PUT` | `/api/v1/projects/{project}` | Qeydi yeniləyir | Tenant Bearer | `ProjectController@update` |
| `POST` | `/api/v1/regions` | Yeni qeyd yaradır | Tenant Bearer | `RegionController@store` |
| `DELETE` | `/api/v1/regions/{region}` | Qeydi silir | Tenant Bearer | `RegionController@destroy` |
| `PUT` | `/api/v1/regions/{region}` | Qeydi yeniləyir | Tenant Bearer | `RegionController@update` |
| `GET` | `/api/v1/settings` | Siyahı oxuyur | Tenant Bearer | `SettingsController@index` |
| `POST` | `/api/v1/settings` | Yeni qeyd yaradır | Tenant Bearer | `SettingsController@store` |
| `GET` | `/api/v1/settings/posting-readiness` | Məlumatı oxuyur | Tenant Bearer | `SettingsController@postingReadiness` |
| `POST` | `/api/v1/settings/reset-operational-data` | Əməliyyatı başladır | Tenant Bearer | `OperationalDataResetController` |
| `DELETE` | `/api/v1/tenant/{id}` | Qeydi silir | Tenant Bearer | `TenantController@delete` |
| `POST` | `/api/v1/tenant/register` | Əməliyyatı başladır | Açıq / route-a görə | `TenantController@register` |
| `GET` | `/api/v1/trash` | Siyahı oxuyur | Tenant Bearer | `TrashController@index` |
| `GET` | `/api/v1/trash/{type}/{id}` | Bir qeydi oxuyur | Tenant Bearer | `TrashController@show` |
| `POST` | `/api/v1/trash/{type}/{id}/restore` | Əməliyyatı başladır | Tenant Bearer | `TrashController@restore` |
| `GET` | `/api/v1/users` | Siyahı oxuyur | Tenant Bearer | `UserController@index` |
| `POST` | `/api/v1/users` | Yeni qeyd yaradır | Tenant Bearer | `UserController@store` |
| `DELETE` | `/api/v1/users/{user}` | Qeydi silir | Tenant Bearer | `UserController@destroy` |
| `GET` | `/api/v1/users/{user}` | Bir qeydi oxuyur | Tenant Bearer | `UserController@show` |
| `PATCH` | `/api/v1/users/{user}` | Qeydi yeniləyir | Tenant Bearer | `UserController@update` |
| `PUT` | `/api/v1/users/{user}` | Qeydi yeniləyir | Tenant Bearer | `UserController@update` |
| `GET` | `/api/v1/view-schema/{viewName}` | Bir qeydi oxuyur | Tenant Bearer | `ViewSchemaController@show` |
| `PUT` | `/api/v1/view-schema/{viewName}` | Qeydi yeniləyir | Tenant Bearer | `ViewSchemaController@update` |
| `POST` | `/api/v1/view-schema/{viewName}/reset` | Əməliyyatı başladır | Tenant Bearer | `ViewSchemaController@resetViewSettings` |
| `POST` | `/api/v1/view-schema/filter-templates` | Əməliyyatı başladır | Tenant Bearer | `ViewSchemaController@addFilterTemplate` |
| `DELETE` | `/api/v1/view-schema/filter-templates/{id}` | Qeydi silir | Tenant Bearer | `ViewSchemaController@deleteFilterTemplate` |
| `PUT` | `/api/v1/view-schema/filter-templates/{id}` | Qeydi dəyişir | Tenant Bearer | `ViewSchemaController@editFilterTemplate` |

