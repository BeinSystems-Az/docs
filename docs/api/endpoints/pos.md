---
sidebar_position: 8
---

# POS

> Cari backend snapshotından yaranıb: **50 HTTP operation**. Bu texniki indeks path və handler üçündür; field və JSON nümunələri resursun öz səhifəsində saxlanılır.

## POS

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/pos-cash-movements` | Siyahı oxuyur | Tenant Bearer + filial | `Pos\PosCashMovementController@index` |
| `GET` | `/api/v1/pos-cash-movements/{id}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Pos\PosCashMovementController@show` |
| `GET` | `/api/v1/pos-cash-reasons` | Siyahı oxuyur | Tenant Bearer + filial | `Pos\PosCashReasonController@index` |
| `POST` | `/api/v1/pos-cash-reasons` | Yeni qeyd yaradır | Tenant Bearer + filial | `Pos\PosCashReasonController@store` |
| `DELETE` | `/api/v1/pos-cash-reasons/{posCashReason}` | Qeydi silir | Tenant Bearer + filial | `Pos\PosCashReasonController@destroy` |
| `GET` | `/api/v1/pos-cash-reasons/{posCashReason}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Pos\PosCashReasonController@show` |
| `PATCH` | `/api/v1/pos-cash-reasons/{posCashReason}` | Qeydi yeniləyir | Tenant Bearer + filial | `Pos\PosCashReasonController@update` |
| `PUT` | `/api/v1/pos-cash-reasons/{posCashReason}` | Qeydi yeniləyir | Tenant Bearer + filial | `Pos\PosCashReasonController@update` |
| `GET` | `/api/v1/pos-deposits` | Məlumatı oxuyur | Tenant Bearer + filial | `Pos\PosCashMovementController@deposits` |
| `GET` | `/api/v1/pos-deposits/{id}` | Məlumatı oxuyur | Tenant Bearer + filial | `Pos\PosCashMovementController@showDeposit` |
| `GET` | `/api/v1/pos-payment-types` | Siyahı oxuyur | Tenant Bearer + filial | `Pos\PosPaymentTypeController@index` |
| `POST` | `/api/v1/pos-payment-types` | Yeni qeyd yaradır | Tenant Bearer + filial | `Pos\PosPaymentTypeController@store` |
| `DELETE` | `/api/v1/pos-payment-types/{posPaymentType}` | Qeydi silir | Tenant Bearer + filial | `Pos\PosPaymentTypeController@destroy` |
| `GET` | `/api/v1/pos-payment-types/{posPaymentType}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Pos\PosPaymentTypeController@show` |
| `PATCH` | `/api/v1/pos-payment-types/{posPaymentType}` | Qeydi yeniləyir | Tenant Bearer + filial | `Pos\PosPaymentTypeController@update` |
| `PUT` | `/api/v1/pos-payment-types/{posPaymentType}` | Qeydi yeniləyir | Tenant Bearer + filial | `Pos\PosPaymentTypeController@update` |
| `GET` | `/api/v1/pos-reasons` | Siyahı oxuyur | Tenant Bearer + filial | `Pos\PosCashReasonController@index` |
| `POST` | `/api/v1/pos-reasons` | Yeni qeyd yaradır | Tenant Bearer + filial | `Pos\PosCashReasonController@store` |
| `DELETE` | `/api/v1/pos-reasons/{posCashReason}` | Qeydi silir | Tenant Bearer + filial | `Pos\PosCashReasonController@destroy` |
| `GET` | `/api/v1/pos-reasons/{posCashReason}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Pos\PosCashReasonController@show` |
| `PATCH` | `/api/v1/pos-reasons/{posCashReason}` | Qeydi yeniləyir | Tenant Bearer + filial | `Pos\PosCashReasonController@update` |
| `PUT` | `/api/v1/pos-reasons/{posCashReason}` | Qeydi yeniləyir | Tenant Bearer + filial | `Pos\PosCashReasonController@update` |
| `GET` | `/api/v1/pos-registers` | Siyahı oxuyur | Tenant Bearer + filial | `Pos\PosRegisterController@index` |
| `POST` | `/api/v1/pos-registers` | Yeni qeyd yaradır | Tenant Bearer + filial | `Pos\PosRegisterController@store` |
| `DELETE` | `/api/v1/pos-registers/{posRegister}` | Qeydi silir | Tenant Bearer + filial | `Pos\PosRegisterController@destroy` |
| `GET` | `/api/v1/pos-registers/{posRegister}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Pos\PosRegisterController@show` |
| `PATCH` | `/api/v1/pos-registers/{posRegister}` | Qeydi yeniləyir | Tenant Bearer + filial | `Pos\PosRegisterController@update` |
| `PUT` | `/api/v1/pos-registers/{posRegister}` | Qeydi yeniləyir | Tenant Bearer + filial | `Pos\PosRegisterController@update` |
| `POST` | `/api/v1/pos-registers/{posRegister}/activation-code` | Əməliyyatı başladır | Tenant Bearer + filial | `Pos\PosRegisterController@activationCode` |
| `POST` | `/api/v1/pos-registers/{posRegister}/reset-installation` | Əməliyyatı başladır | Tenant Bearer + filial | `Pos\PosRegisterController@resetInstallation` |
| `GET` | `/api/v1/pos-returns` | Siyahı oxuyur | Tenant Bearer + filial | `Pos\PosSaleReturnController@index` |
| `GET` | `/api/v1/pos-returns/{id}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Pos\PosSaleReturnController@show` |
| `GET` | `/api/v1/pos-sale-returns` | Siyahı oxuyur | Tenant Bearer + filial | `Pos\PosSaleReturnController@index` |
| `GET` | `/api/v1/pos-sale-returns/{id}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Pos\PosSaleReturnController@show` |
| `GET` | `/api/v1/pos-sales` | Siyahı oxuyur | Tenant Bearer + filial | `Pos\PosSaleController@index` |
| `GET` | `/api/v1/pos-sales/{id}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Pos\PosSaleController@show` |
| `GET` | `/api/v1/pos-shifts` | Siyahı oxuyur | Tenant Bearer + filial | `Pos\PosShiftController@index` |
| `GET` | `/api/v1/pos-shifts/{id}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Pos\PosShiftController@show` |
| `GET` | `/api/v1/pos-shifts/{id}/z-report` | Məlumatı oxuyur | Tenant Bearer + filial | `Pos\PosShiftController@zReport` |
| `GET` | `/api/v1/pos-sync` | Siyahı oxuyur | Tenant Bearer + filial | `Pos\PosSyncMonitorController@index` |
| `GET` | `/api/v1/pos-sync-monitor` | Siyahı oxuyur | Tenant Bearer + filial | `Pos\PosSyncMonitorController@index` |
| `POST` | `/api/v1/pos-sync-monitor/{issue}/retry` | Əməliyyatı başladır | Tenant Bearer + filial | `Pos\PosSyncMonitorController@retry` |
| `GET` | `/api/v1/pos-sync-monitor/status` | Məlumatı oxuyur | Tenant Bearer + filial | `Pos\PosSyncMonitorController@status` |
| `POST` | `/api/v1/pos-sync/{issue}/retry` | Əməliyyatı başladır | Tenant Bearer + filial | `Pos\PosSyncMonitorController@retry` |
| `GET` | `/api/v1/pos-sync/status` | Məlumatı oxuyur | Tenant Bearer + filial | `Pos\PosSyncMonitorController@status` |
| `GET` | `/api/v1/pos-withdrawals` | Məlumatı oxuyur | Tenant Bearer + filial | `Pos\PosCashMovementController@withdrawals` |
| `GET` | `/api/v1/pos-withdrawals/{id}` | Məlumatı oxuyur | Tenant Bearer + filial | `Pos\PosCashMovementController@showWithdrawal` |
| `POST` | `/api/v1/pos/sync` | Əməliyyatı başladır | POS cihaz tokeni | `Pos\PosSyncController@sync` |
| `POST` | `/api/v1/pos/sync/activate` | Əməliyyatı başladır | Açıq / route-a görə | `Pos\PosSyncController@activate` |
| `POST` | `/api/v1/pos/sync/device-token/refresh` | Əməliyyatı başladır | Açıq / route-a görə | `Pos\PosSyncController@refreshDeviceToken` |

