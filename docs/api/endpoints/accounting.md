---
sidebar_position: 6
---

# Mühasibat və maliyyə

> Cari backend snapshotından yaranıb: **191 HTTP operation**. Bu texniki indeks path və handler üçündür; field və JSON nümunələri resursun öz səhifəsində saxlanılır.

## Mühasibat və maliyyə

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/account-properties` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\AccountPropertyController@index` |
| `POST` | `/api/v1/account-properties` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\AccountPropertyController@store` |
| `DELETE` | `/api/v1/account-properties/{account_property}` | Qeydi silir | Tenant Bearer + filial | `Accounting\AccountPropertyController@destroy` |
| `GET` | `/api/v1/account-properties/{account_property}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\AccountPropertyController@show` |
| `PATCH` | `/api/v1/account-properties/{account_property}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\AccountPropertyController@update` |
| `PUT` | `/api/v1/account-properties/{account_property}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\AccountPropertyController@update` |
| `GET` | `/api/v1/accounting-entries` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\JournalEntryController@index` |
| `POST` | `/api/v1/accounting-entries` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\JournalEntryController@store` |
| `DELETE` | `/api/v1/accounting-entries/{accounting_entry}` | Qeydi silir | Tenant Bearer + filial | `Accounting\JournalEntryController@destroy` |
| `GET` | `/api/v1/accounting-entries/{accounting_entry}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\JournalEntryController@show` |
| `PATCH` | `/api/v1/accounting-entries/{accounting_entry}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\JournalEntryController@update` |
| `PUT` | `/api/v1/accounting-entries/{accounting_entry}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\JournalEntryController@update` |
| `PATCH` | `/api/v1/accounting-entries/{entry}/state` | Qeydi dəyişir | Tenant Bearer + filial | `Accounting\JournalEntryController@changeState` |
| `GET` | `/api/v1/accounting-entry-items` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\JournalItemController@index` |
| `GET` | `/api/v1/accounting-entry-items/{accounting_entry_item}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\JournalItemController@show` |
| `GET` | `/api/v1/accounting-report-definitions` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\AccountingReportDefinitionController@index` |
| `POST` | `/api/v1/accounting-report-definitions` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\AccountingReportDefinitionController@store` |
| `DELETE` | `/api/v1/accounting-report-definitions/{id}` | Qeydi silir | Tenant Bearer + filial | `Accounting\AccountingReportDefinitionController@destroy` |
| `PUT` | `/api/v1/accounting-report-definitions/{id}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\AccountingReportDefinitionController@update` |
| `POST` | `/api/v1/accounting-report-definitions/{id}/items` | Əməliyyatı başladır | Tenant Bearer + filial | `Accounting\AccountingReportDefinitionController@storeItem` |
| `GET` | `/api/v1/accounting-report-definitions/{key}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\AccountingReportDefinitionController@show` |
| `DELETE` | `/api/v1/accounting-report-item-rules/{id}` | Qeydi silir | Tenant Bearer + filial | `Accounting\AccountingReportDefinitionController@destroyRule` |
| `PUT` | `/api/v1/accounting-report-item-rules/{id}` | Qeydi dəyişir | Tenant Bearer + filial | `Accounting\AccountingReportDefinitionController@updateRule` |
| `DELETE` | `/api/v1/accounting-report-items/{id}` | Qeydi silir | Tenant Bearer + filial | `Accounting\AccountingReportDefinitionController@destroyItem` |
| `PUT` | `/api/v1/accounting-report-items/{id}` | Qeydi dəyişir | Tenant Bearer + filial | `Accounting\AccountingReportDefinitionController@updateItem` |
| `POST` | `/api/v1/accounting-report-items/{id}/rules` | Əməliyyatı başladır | Tenant Bearer + filial | `Accounting\AccountingReportDefinitionController@storeRule` |
| `GET` | `/api/v1/accounts` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\AccountController@index` |
| `POST` | `/api/v1/accounts` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\AccountController@store` |
| `DELETE` | `/api/v1/accounts/{account}` | Qeydi silir | Tenant Bearer + filial | `Accounting\AccountController@destroy` |
| `GET` | `/api/v1/accounts/{account}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\AccountController@show` |
| `PATCH` | `/api/v1/accounts/{account}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\AccountController@update` |
| `PUT` | `/api/v1/accounts/{account}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\AccountController@update` |
| `GET` | `/api/v1/countries` | Siyahı oxuyur | Tenant Bearer | `Accounting\CountryController@index` |
| `POST` | `/api/v1/countries` | Yeni qeyd yaradır | Tenant Bearer | `Accounting\CountryController@store` |
| `DELETE` | `/api/v1/countries/{country}` | Qeydi silir | Tenant Bearer | `Accounting\CountryController@destroy` |
| `GET` | `/api/v1/countries/{country}` | Bir qeydi oxuyur | Tenant Bearer | `Accounting\CountryController@show` |
| `PATCH` | `/api/v1/countries/{country}` | Qeydi yeniləyir | Tenant Bearer | `Accounting\CountryController@update` |
| `PUT` | `/api/v1/countries/{country}` | Qeydi yeniləyir | Tenant Bearer | `Accounting\CountryController@update` |
| `GET` | `/api/v1/currencies` | Siyahı oxuyur | Tenant Bearer | `Accounting\CurrencyController@index` |
| `POST` | `/api/v1/currencies` | Yeni qeyd yaradır | Tenant Bearer | `Accounting\CurrencyController@store` |
| `DELETE` | `/api/v1/currencies/{currency}` | Qeydi silir | Tenant Bearer | `Accounting\CurrencyController@destroy` |
| `GET` | `/api/v1/currencies/{currency}` | Bir qeydi oxuyur | Tenant Bearer | `Accounting\CurrencyController@show` |
| `PATCH` | `/api/v1/currencies/{currency}` | Qeydi yeniləyir | Tenant Bearer | `Accounting\CurrencyController@update` |
| `PUT` | `/api/v1/currencies/{currency}` | Qeydi yeniləyir | Tenant Bearer | `Accounting\CurrencyController@update` |
| `GET` | `/api/v1/currency-rates` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\CurrencyRateController@index` |
| `POST` | `/api/v1/currency-rates` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\CurrencyRateController@store` |
| `DELETE` | `/api/v1/currency-rates/{currency_rate}` | Qeydi silir | Tenant Bearer + filial | `Accounting\CurrencyRateController@destroy` |
| `GET` | `/api/v1/currency-rates/{currency_rate}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\CurrencyRateController@show` |
| `PATCH` | `/api/v1/currency-rates/{currency_rate}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\CurrencyRateController@update` |
| `PUT` | `/api/v1/currency-rates/{currency_rate}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\CurrencyRateController@update` |
| `GET` | `/api/v1/debts` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\DebtController@index` |
| `GET` | `/api/v1/debts/{id}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\DebtController@show` |
| `GET` | `/api/v1/direct-expenses` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\DirectExpenseController@index` |
| `POST` | `/api/v1/direct-expenses` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\DirectExpenseController@store` |
| `DELETE` | `/api/v1/direct-expenses/{direct_expense}` | Qeydi silir | Tenant Bearer + filial | `Accounting\DirectExpenseController@destroy` |
| `GET` | `/api/v1/direct-expenses/{direct_expense}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\DirectExpenseController@show` |
| `PATCH` | `/api/v1/direct-expenses/{direct_expense}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\DirectExpenseController@update` |
| `PUT` | `/api/v1/direct-expenses/{direct_expense}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\DirectExpenseController@update` |
| `PATCH` | `/api/v1/direct-expenses/{expense}/state` | Qeydi dəyişir | Tenant Bearer + filial | `Accounting\DirectExpenseController@changeState` |
| `PATCH` | `/api/v1/document-ledger-items/{item}/account` | Qeydi dəyişir | Tenant Bearer + filial | `Accounting\DocumentLedgerItemController@updateAccount` |
| `GET` | `/api/v1/expense-categories` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\ExpenseCategoryController@index` |
| `POST` | `/api/v1/expense-categories` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\ExpenseCategoryController@store` |
| `DELETE` | `/api/v1/expense-categories/{expense_category}` | Qeydi silir | Tenant Bearer + filial | `Accounting\ExpenseCategoryController@destroy` |
| `GET` | `/api/v1/expense-categories/{expense_category}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\ExpenseCategoryController@show` |
| `PATCH` | `/api/v1/expense-categories/{expense_category}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\ExpenseCategoryController@update` |
| `PUT` | `/api/v1/expense-categories/{expense_category}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\ExpenseCategoryController@update` |
| `GET` | `/api/v1/finance/open-items` | Məlumatı oxuyur | Tenant Bearer + filial | `Accounting\FinanceController@openItems` |
| `GET` | `/api/v1/finance/partner-balances` | Məlumatı oxuyur | Tenant Bearer + filial | `Accounting\FinanceController@partnerBalances` |
| `POST` | `/api/v1/finance/reconciliations` | Əməliyyatı başladır | Tenant Bearer + filial | `Accounting\FinanceController@reconcile` |
| `DELETE` | `/api/v1/finance/reconciliations/{id}` | Qeydi silir | Tenant Bearer + filial | `Accounting\FinanceController@unreconcile` |
| `GET` | `/api/v1/fixed-asset-categories` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\FixedAssetCategoryController@index` |
| `POST` | `/api/v1/fixed-asset-categories` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\FixedAssetCategoryController@store` |
| `DELETE` | `/api/v1/fixed-asset-categories/{fixedAssetCategory}` | Qeydi silir | Tenant Bearer + filial | `Accounting\FixedAssetCategoryController@destroy` |
| `GET` | `/api/v1/fixed-asset-categories/{fixedAssetCategory}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\FixedAssetCategoryController@show` |
| `PATCH` | `/api/v1/fixed-asset-categories/{fixedAssetCategory}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\FixedAssetCategoryController@update` |
| `PUT` | `/api/v1/fixed-asset-categories/{fixedAssetCategory}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\FixedAssetCategoryController@update` |
| `GET` | `/api/v1/fixed-asset-sales` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\FixedAssetSaleController@index` |
| `POST` | `/api/v1/fixed-asset-sales` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\FixedAssetSaleController@store` |
| `DELETE` | `/api/v1/fixed-asset-sales/{fixedAssetSale}` | Qeydi silir | Tenant Bearer + filial | `Accounting\FixedAssetSaleController@destroy` |
| `GET` | `/api/v1/fixed-asset-sales/{fixedAssetSale}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\FixedAssetSaleController@show` |
| `PATCH` | `/api/v1/fixed-asset-sales/{fixedAssetSale}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\FixedAssetSaleController@update` |
| `PUT` | `/api/v1/fixed-asset-sales/{fixedAssetSale}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\FixedAssetSaleController@update` |
| `POST` | `/api/v1/fixed-asset-sales/{fixedAssetSale}/cancel` | Əməliyyatı başladır | Tenant Bearer + filial | `Accounting\FixedAssetSaleController@cancel` |
| `POST` | `/api/v1/fixed-asset-sales/{fixedAssetSale}/post` | Əməliyyatı başladır | Tenant Bearer + filial | `Accounting\FixedAssetSaleController@post` |
| `GET` | `/api/v1/fixed-asset-scraps` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\FixedAssetScrapController@index` |
| `POST` | `/api/v1/fixed-asset-scraps` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\FixedAssetScrapController@store` |
| `DELETE` | `/api/v1/fixed-asset-scraps/{fixedAssetScrap}` | Qeydi silir | Tenant Bearer + filial | `Accounting\FixedAssetScrapController@destroy` |
| `GET` | `/api/v1/fixed-asset-scraps/{fixedAssetScrap}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\FixedAssetScrapController@show` |
| `PATCH` | `/api/v1/fixed-asset-scraps/{fixedAssetScrap}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\FixedAssetScrapController@update` |
| `PUT` | `/api/v1/fixed-asset-scraps/{fixedAssetScrap}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\FixedAssetScrapController@update` |
| `POST` | `/api/v1/fixed-asset-scraps/{fixedAssetScrap}/cancel` | Əməliyyatı başladır | Tenant Bearer + filial | `Accounting\FixedAssetScrapController@cancel` |
| `POST` | `/api/v1/fixed-asset-scraps/{fixedAssetScrap}/post` | Əməliyyatı başladır | Tenant Bearer + filial | `Accounting\FixedAssetScrapController@post` |
| `GET` | `/api/v1/fixed-asset-transfers` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\FixedAssetTransferController@index` |
| `POST` | `/api/v1/fixed-asset-transfers` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\FixedAssetTransferController@store` |
| `DELETE` | `/api/v1/fixed-asset-transfers/{fixedAssetTransfer}` | Qeydi silir | Tenant Bearer + filial | `Accounting\FixedAssetTransferController@destroy` |
| `GET` | `/api/v1/fixed-asset-transfers/{fixedAssetTransfer}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\FixedAssetTransferController@show` |
| `PATCH` | `/api/v1/fixed-asset-transfers/{fixedAssetTransfer}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\FixedAssetTransferController@update` |
| `PUT` | `/api/v1/fixed-asset-transfers/{fixedAssetTransfer}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\FixedAssetTransferController@update` |
| `POST` | `/api/v1/fixed-asset-transfers/{fixedAssetTransfer}/cancel` | Əməliyyatı başladır | Tenant Bearer + filial | `Accounting\FixedAssetTransferController@cancel` |
| `POST` | `/api/v1/fixed-asset-transfers/{fixedAssetTransfer}/post` | Əməliyyatı başladır | Tenant Bearer + filial | `Accounting\FixedAssetTransferController@post` |
| `GET` | `/api/v1/fixed-assets` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\FixedAssetController@index` |
| `POST` | `/api/v1/fixed-assets` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\FixedAssetController@store` |
| `DELETE` | `/api/v1/fixed-assets/{asset}` | Qeydi silir | Tenant Bearer + filial | `Accounting\FixedAssetController@destroy` |
| `GET` | `/api/v1/fixed-assets/{asset}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\FixedAssetController@show` |
| `PATCH` | `/api/v1/fixed-assets/{asset}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\FixedAssetController@update` |
| `PUT` | `/api/v1/fixed-assets/{asset}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\FixedAssetController@update` |
| `POST` | `/api/v1/fixed-assets/{asset}/confirm` | Əməliyyatı başladır | Tenant Bearer + filial | `Accounting\FixedAssetController@confirm` |
| `GET` | `/api/v1/fixed-assets/reports/depreciation-schedule` | Məlumatı oxuyur | Tenant Bearer + filial | `Accounting\FixedAssetReportController@depreciationSchedule` |
| `GET` | `/api/v1/fixed-assets/reports/register` | Məlumatı oxuyur | Tenant Bearer + filial | `Accounting\FixedAssetReportController@register` |
| `GET` | `/api/v1/invoices-in` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\PurchaseInvoiceController@index` |
| `POST` | `/api/v1/invoices-in` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\PurchaseInvoiceController@store` |
| `PATCH` | `/api/v1/invoices-in/{id}/state` | Qeydi dəyişir | Tenant Bearer + filial | `Accounting\PurchaseInvoiceController@changeState` |
| `DELETE` | `/api/v1/invoices-in/{invoices_in}` | Qeydi silir | Tenant Bearer + filial | `Accounting\PurchaseInvoiceController@destroy` |
| `GET` | `/api/v1/invoices-in/{invoices_in}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\PurchaseInvoiceController@show` |
| `PATCH` | `/api/v1/invoices-in/{invoices_in}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\PurchaseInvoiceController@update` |
| `PUT` | `/api/v1/invoices-in/{invoices_in}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\PurchaseInvoiceController@update` |
| `GET` | `/api/v1/manual-accounting-entries` | Məlumatı oxuyur | Tenant Bearer + filial | `Accounting\JournalEntryController@legacyManualIndex` |
| `POST` | `/api/v1/manual-accounting-entries` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\JournalEntryController@store` |
| `PATCH` | `/api/v1/manual-accounting-entries/{entry}/state` | Qeydi dəyişir | Tenant Bearer + filial | `Accounting\JournalEntryController@changeState` |
| `DELETE` | `/api/v1/manual-accounting-entries/{manual_accounting_entry}` | Qeydi silir | Tenant Bearer + filial | `Accounting\JournalEntryController@destroy` |
| `GET` | `/api/v1/manual-accounting-entries/{manual_accounting_entry}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\JournalEntryController@show` |
| `PATCH` | `/api/v1/manual-accounting-entries/{manual_accounting_entry}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\JournalEntryController@update` |
| `PUT` | `/api/v1/manual-accounting-entries/{manual_accounting_entry}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\JournalEntryController@update` |
| `GET` | `/api/v1/payments` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\PaymentController@index` |
| `POST` | `/api/v1/payments` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\PaymentController@store` |
| `DELETE` | `/api/v1/payments/{payment}` | Qeydi silir | Tenant Bearer + filial | `Accounting\PaymentController@destroy` |
| `GET` | `/api/v1/payments/{payment}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\PaymentController@show` |
| `PATCH` | `/api/v1/payments/{payment}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\PaymentController@update` |
| `PUT` | `/api/v1/payments/{payment}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\PaymentController@update` |
| `PATCH` | `/api/v1/payments/{payment}/state` | Qeydi dəyişir | Tenant Bearer + filial | `Accounting\PaymentController@changeState` |
| `POST` | `/api/v1/payments/inbound` | Əməliyyatı başladır | Tenant Bearer + filial | `Accounting\PaymentController@storeInbound` |
| `POST` | `/api/v1/payments/outbound` | Əməliyyatı başladır | Tenant Bearer + filial | `Accounting\PaymentController@storeOutbound` |
| `GET` | `/api/v1/payments/settlement-options` | Məlumatı oxuyur | Tenant Bearer + filial | `Accounting\PaymentController@settlementOptions` |
| `GET` | `/api/v1/purchase-invoices` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\PurchaseInvoiceController@index` |
| `POST` | `/api/v1/purchase-invoices` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\PurchaseInvoiceController@store` |
| `PATCH` | `/api/v1/purchase-invoices/{id}/state` | Qeydi dəyişir | Tenant Bearer + filial | `Accounting\PurchaseInvoiceController@changeState` |
| `DELETE` | `/api/v1/purchase-invoices/{purchase_invoice}` | Qeydi silir | Tenant Bearer + filial | `Accounting\PurchaseInvoiceController@destroy` |
| `GET` | `/api/v1/purchase-invoices/{purchase_invoice}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\PurchaseInvoiceController@show` |
| `PATCH` | `/api/v1/purchase-invoices/{purchase_invoice}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\PurchaseInvoiceController@update` |
| `PUT` | `/api/v1/purchase-invoices/{purchase_invoice}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\PurchaseInvoiceController@update` |
| `GET` | `/api/v1/purchase-returns` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\PurchaseReturnController@index` |
| `POST` | `/api/v1/purchase-returns` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\PurchaseReturnController@store` |
| `PATCH` | `/api/v1/purchase-returns/{entry}/state` | Qeydi dəyişir | Tenant Bearer + filial | `Accounting\PurchaseReturnController@changeState` |
| `DELETE` | `/api/v1/purchase-returns/{purchase_return}` | Qeydi silir | Tenant Bearer + filial | `Accounting\PurchaseReturnController@destroy` |
| `GET` | `/api/v1/purchase-returns/{purchase_return}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\PurchaseReturnController@show` |
| `PATCH` | `/api/v1/purchase-returns/{purchase_return}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\PurchaseReturnController@update` |
| `PUT` | `/api/v1/purchase-returns/{purchase_return}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\PurchaseReturnController@update` |
| `GET` | `/api/v1/refunds-in` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\PurchaseReturnController@index` |
| `POST` | `/api/v1/refunds-in` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\PurchaseReturnController@store` |
| `PATCH` | `/api/v1/refunds-in/{entry}/state` | Qeydi dəyişir | Tenant Bearer + filial | `Accounting\PurchaseReturnController@changeState` |
| `DELETE` | `/api/v1/refunds-in/{refunds_in}` | Qeydi silir | Tenant Bearer + filial | `Accounting\PurchaseReturnController@destroy` |
| `GET` | `/api/v1/refunds-in/{refunds_in}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\PurchaseReturnController@show` |
| `PATCH` | `/api/v1/refunds-in/{refunds_in}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\PurchaseReturnController@update` |
| `PUT` | `/api/v1/refunds-in/{refunds_in}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\PurchaseReturnController@update` |
| `GET` | `/api/v1/reports/account-card` | Məlumatı oxuyur | Tenant Bearer + filial | `Accounting\ReportController@accountCard` |
| `GET` | `/api/v1/reports/balance-sheet` | Məlumatı oxuyur | Tenant Bearer + filial | `Accounting\ReportController@balanceSheet` |
| `GET` | `/api/v1/reports/profit-loss` | Məlumatı oxuyur | Tenant Bearer + filial | `Accounting\ReportController@profitLoss` |
| `GET` | `/api/v1/reports/trial-balance` | Məlumatı oxuyur | Tenant Bearer + filial | `Accounting\ReportController@trialBalance` |
| `GET` | `/api/v1/sale-invoices` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\SaleInvoiceController@index` |
| `POST` | `/api/v1/sale-invoices` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\SaleInvoiceController@store` |
| `PATCH` | `/api/v1/sale-invoices/{entry}/state` | Qeydi dəyişir | Tenant Bearer + filial | `Accounting\SaleInvoiceController@changeState` |
| `DELETE` | `/api/v1/sale-invoices/{sale_invoice}` | Qeydi silir | Tenant Bearer + filial | `Accounting\SaleInvoiceController@destroy` |
| `GET` | `/api/v1/sale-invoices/{sale_invoice}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\SaleInvoiceController@show` |
| `PATCH` | `/api/v1/sale-invoices/{sale_invoice}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\SaleInvoiceController@update` |
| `PUT` | `/api/v1/sale-invoices/{sale_invoice}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\SaleInvoiceController@update` |
| `GET` | `/api/v1/sale-returns` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\SaleReturnController@index` |
| `POST` | `/api/v1/sale-returns` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\SaleReturnController@store` |
| `PATCH` | `/api/v1/sale-returns/{entry}/state` | Qeydi dəyişir | Tenant Bearer + filial | `Accounting\SaleReturnController@changeState` |
| `DELETE` | `/api/v1/sale-returns/{sale_return}` | Qeydi silir | Tenant Bearer + filial | `Accounting\SaleReturnController@destroy` |
| `GET` | `/api/v1/sale-returns/{sale_return}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\SaleReturnController@show` |
| `PATCH` | `/api/v1/sale-returns/{sale_return}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\SaleReturnController@update` |
| `PUT` | `/api/v1/sale-returns/{sale_return}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\SaleReturnController@update` |
| `GET` | `/api/v1/tax-profile` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\TaxProfileController@show` |
| `PUT` | `/api/v1/tax-profile` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\TaxProfileController@update` |
| `GET` | `/api/v1/tax-profile/readiness` | Məlumatı oxuyur | Tenant Bearer + filial | `Accounting\TaxProfileController@readiness` |
| `GET` | `/api/v1/tax-profile/schema` | Məlumatı oxuyur | Tenant Bearer + filial | `Accounting\TaxProfileController@schema` |
| `GET` | `/api/v1/taxes` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\TaxController@index` |
| `GET` | `/api/v1/taxes/{tax}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\TaxController@show` |
| `GET` | `/api/v1/wallet-transfers` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\WalletTransferController@index` |
| `POST` | `/api/v1/wallet-transfers` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\WalletTransferController@store` |
| `PATCH` | `/api/v1/wallet-transfers/{entry}/state` | Qeydi dəyişir | Tenant Bearer + filial | `Accounting\WalletTransferController@changeState` |
| `DELETE` | `/api/v1/wallet-transfers/{wallet_transfer}` | Qeydi silir | Tenant Bearer + filial | `Accounting\WalletTransferController@destroy` |
| `GET` | `/api/v1/wallet-transfers/{wallet_transfer}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\WalletTransferController@show` |
| `PATCH` | `/api/v1/wallet-transfers/{wallet_transfer}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\WalletTransferController@update` |
| `PUT` | `/api/v1/wallet-transfers/{wallet_transfer}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\WalletTransferController@update` |
| `GET` | `/api/v1/wallets` | Siyahı oxuyur | Tenant Bearer + filial | `Accounting\WalletController@index` |
| `POST` | `/api/v1/wallets` | Yeni qeyd yaradır | Tenant Bearer + filial | `Accounting\WalletController@store` |
| `DELETE` | `/api/v1/wallets/{wallet}` | Qeydi silir | Tenant Bearer + filial | `Accounting\WalletController@destroy` |
| `GET` | `/api/v1/wallets/{wallet}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Accounting\WalletController@show` |
| `PATCH` | `/api/v1/wallets/{wallet}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\WalletController@update` |
| `PUT` | `/api/v1/wallets/{wallet}` | Qeydi yeniləyir | Tenant Bearer + filial | `Accounting\WalletController@update` |

