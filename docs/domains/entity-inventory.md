---
sidebar_position: 2
---

# Entity/model inventarı

> Bu səhifə backend-də `Model`, `BaseModel`, `Authenticatable` və tenancy/permission model bazalarından törəyən konkret Eloquent siniflərindən avtomatik yaradılır. Modelin mövcudluğu, sahib domeni və kodda aşkar edilən relation-ları üçün tam siyahıdır; biznes mənası üçün [Entity xəritəsi](./entity-map) istifadə edin.

Snapshot: backend commit `93e08efa` + commit olunmamış işçi-ağacı dəyişiklikləri; **180 model**.

## Accounting

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `Account` | Əsas məlumat və ya domen qeydi | parent: belongsTo self; children: hasMany self; items: hasMany JournalItem | `app/Domains/Accounting/Models/Account.php` |
| `AccountingReportDefinition` | Sazlama / qayda | items: hasMany AccountingReportItem | `app/Domains/Accounting/Models/AccountingReportDefinition.php` |
| `AccountingReportItem` | Sətir / köməkçi qeyd | definition: belongsTo AccountingReportDefinition; rules: hasMany AccountingReportItemRule | `app/Domains/Accounting/Models/AccountingReportItem.php` |
| `AccountingReportItemRule` | Sətir / köməkçi qeyd | item: belongsTo AccountingReportItem | `app/Domains/Accounting/Models/AccountingReportItemRule.php` |
| `AccountProperty` | Əsas məlumat və ya domen qeydi | account: belongsTo Account | `app/Domains/Accounting/Models/AccountProperty.php` |
| `AdvanceApplication` | Sətir / köməkçi qeyd | payment: belongsTo Payment; journalEntry: belongsTo JournalEntry | `app/Domains/Accounting/Models/AdvanceApplication.php` |
| `Currency` | Əsas məlumat və ya domen qeydi | rates: hasMany CurrencyRate | `app/Domains/Accounting/Models/Currency.php` |
| `CurrencyRate` | Əsas məlumat və ya domen qeydi | currency: belongsTo Currency | `app/Domains/Accounting/Models/CurrencyRate.php` |
| `DirectExpense` | Biznes sənədi | wallet: belongsTo Wallet; currency: belongsTo Currency; project: belongsTo Project; items: hasMany DirectExpenseItem; journalEntry: morphOne JournalEntry | `app/Domains/Accounting/Models/DirectExpense.php` |
| `DirectExpenseItem` | Sətir / köməkçi qeyd | expense: belongsTo DirectExpense; category: belongsTo ExpenseCategory; landedCosts: morphMany StockLandedCost | `app/Domains/Accounting/Models/DirectExpenseItem.php` |
| `DocumentLineTax` | Əsas məlumat və ya domen qeydi | documentItem: morphTo; taxDefinition: belongsTo Tax; postingAccount: belongsTo Account | `app/Domains/Accounting/Models/DocumentLineTax.php` |
| `ExpenseCategory` | Əsas məlumat və ya domen qeydi | parent: belongsTo self; children: hasMany self; expenseAccount: belongsTo Account | `app/Domains/Accounting/Models/ExpenseCategory.php` |
| `FixedAsset` | Əsas məlumat və ya domen qeydi | depreciations: hasMany FixedAssetDepreciation; category: belongsTo FixedAssetCategory; product: belongsTo Product; stock: belongsTo Stock; stockDocument: belongsTo StockDocument; responsibleUser: belongsTo User; location: belongsTo StockLocation; transferItems: hasMany FixedAssetTransferItem; saleItems: hasMany FixedAssetSaleItem; scrapItems: hasMany FixedAssetScrapItem; assetAccount: belongsTo Account; accumulatedDepreciationAccount: belongsTo Account; depreciationExpenseAccount: belongsTo Account | `app/Domains/Accounting/Models/FixedAsset.php` |
| `FixedAssetCategory` | Əsas məlumat və ya domen qeydi | assets: hasMany FixedAsset; assetAccount: belongsTo Account; capitalizationAccount: belongsTo Account; accumulatedDepreciationAccount: belongsTo Account; depreciationExpenseAccount: belongsTo Account | `app/Domains/Accounting/Models/FixedAssetCategory.php` |
| `FixedAssetDepreciation` | Biznes sənədi | asset: belongsTo FixedAsset; journalEntry: belongsTo JournalEntry | `app/Domains/Accounting/Models/FixedAssetDepreciation.php` |
| `FixedAssetSale` | Biznes sənədi | items: hasMany FixedAssetSaleItem; customer: belongsTo Partner; createdBy: belongsTo User | `app/Domains/Accounting/Models/FixedAssetSale.php` |
| `FixedAssetSaleItem` | Sətir / köməkçi qeyd | sale: belongsTo FixedAssetSale; asset: belongsTo FixedAsset | `app/Domains/Accounting/Models/FixedAssetSaleItem.php` |
| `FixedAssetScrap` | Biznes sənədi | items: hasMany FixedAssetScrapItem; createdBy: belongsTo User | `app/Domains/Accounting/Models/FixedAssetScrap.php` |
| `FixedAssetScrapItem` | Sətir / köməkçi qeyd | scrap: belongsTo FixedAssetScrap; asset: belongsTo FixedAsset | `app/Domains/Accounting/Models/FixedAssetScrapItem.php` |
| `FixedAssetTransfer` | Biznes sənədi | items: hasMany FixedAssetTransferItem; responsibleUser: belongsTo User; location: belongsTo StockLocation; createdBy: belongsTo User | `app/Domains/Accounting/Models/FixedAssetTransfer.php` |
| `FixedAssetTransferItem` | Sətir / köməkçi qeyd | transfer: belongsTo FixedAssetTransfer; asset: belongsTo FixedAsset; fromResponsibleUser: belongsTo User; toResponsibleUser: belongsTo User; fromLocation: belongsTo StockLocation; toLocation: belongsTo StockLocation | `app/Domains/Accounting/Models/FixedAssetTransferItem.php` |
| `InputVatRecognition` | Əsas məlumat və ya domen qeydi | invoice: belongsTo PurchaseInvoice; application: belongsTo DocumentLineTax; events: hasMany InputVatRecognitionEvent | `app/Domains/Accounting/Models/InputVatRecognition.php` |
| `InputVatRecognitionEvent` | Sətir / köməkçi qeyd | recognition: belongsTo InputVatRecognition | `app/Domains/Accounting/Models/InputVatRecognitionEvent.php` |
| `JournalEntry` | Biznes sənədi | currency: belongsTo Currency; partner: belongsTo Partner; items: hasMany JournalItem; reversedEntry: belongsTo JournalEntry; reversalEntry: belongsTo JournalEntry | `app/Domains/Accounting/Models/JournalEntry.php` |
| `JournalItem` | Sətir / köməkçi qeyd | entry: belongsTo JournalEntry; account: belongsTo Account; partner: belongsTo Partner; commercialPartner: belongsTo Partner; product: belongsTo Product; currency: belongsTo Currency; taxItem: belongsTo Tax | `app/Domains/Accounting/Models/JournalItem.php` |
| `OutputVatRecognition` | Əsas məlumat və ya domen qeydi | events: hasMany OutputVatRecognitionEvent | `app/Domains/Accounting/Models/OutputVatRecognition.php` |
| `OutputVatRecognitionEvent` | Sətir / köməkçi qeyd | recognition: belongsTo OutputVatRecognition | `app/Domains/Accounting/Models/OutputVatRecognitionEvent.php` |
| `Payment` | Sətir / köməkçi qeyd | partner: belongsTo Partner; account: belongsTo Account; counterpartAccount: belongsTo Account; tax: belongsTo Tax; currency: belongsTo Currency; wallet: belongsTo Wallet; posRegister: belongsTo PosRegister; posPaymentType: belongsTo PosPaymentType; posShift: belongsTo PosShift; allocations: hasMany PaymentAllocation; journalEntry: morphOne JournalEntry | `app/Domains/Accounting/Models/Payment.php` |
| `PaymentAllocation` | Sətir / köməkçi qeyd | payment: belongsTo Payment | `app/Domains/Accounting/Models/PaymentAllocation.php` |
| `PurchaseInvoice` | Biznes sənədi | partner: belongsTo Partner; project: belongsTo Project; stock: belongsTo Stock; currency: belongsTo Currency; items: hasMany PurchaseInvoiceItem; user: belongsTo User | `app/Domains/Accounting/Models/PurchaseInvoice.php` |
| `PurchaseInvoiceItem` | Sətir / köməkçi qeyd | purchaseInvoice: belongsTo PurchaseInvoice; receiptMatches: hasMany PurchaseInvoiceReceiptMatch; product: belongsTo Product; unit: belongsTo Unit; account: belongsTo Account; currency: belongsTo Currency | `app/Domains/Accounting/Models/PurchaseInvoiceItem.php` |
| `PurchaseReturn` | Biznes sənədi | partner: belongsTo Partner; project: belongsTo Project; currency: belongsTo Currency; items: hasMany PurchaseReturnItem; journalEntry: morphOne JournalEntry; stock: belongsTo Stock; sourceReceipt: belongsTo PurchaseReceipt; moves: morphMany StockMove; valuationLayers: morphMany StockValuationLayer | `app/Domains/Accounting/Models/PurchaseReturn.php` |
| `PurchaseReturnItem` | Sətir / köməkçi qeyd | purchaseReturn: belongsTo PurchaseReturn; product: belongsTo Product; unit: belongsTo Unit | `app/Domains/Accounting/Models/PurchaseReturnItem.php` |
| `SaleInvoice` | Biznes sənədi | partner: belongsTo Partner; project: belongsTo Project; currency: belongsTo Currency; items: hasMany SaleInvoiceItem; user: belongsTo User | `app/Domains/Accounting/Models/SaleInvoice.php` |
| `SaleInvoiceItem` | Sətir / köməkçi qeyd | saleInvoice: belongsTo SaleInvoice; product: belongsTo Product; priceType: belongsTo PriceType; unit: belongsTo Unit; account: belongsTo Account | `app/Domains/Accounting/Models/SaleInvoiceItem.php` |
| `SaleReturn` | Biznes sənədi | partner: belongsTo Partner; project: belongsTo Project; stock: belongsTo Stock; currency: belongsTo Currency; items: hasMany SaleReturnItem; journalEntry: morphOne JournalEntry; sourceReceipt: belongsTo SaleReceipt; moves: morphMany StockMove; valuationLayers: morphMany StockValuationLayer | `app/Domains/Accounting/Models/SaleReturn.php` |
| `SaleReturnItem` | Sətir / köməkçi qeyd | saleReturn: belongsTo SaleReturn; product: belongsTo Product; unit: belongsTo Unit; priceType: belongsTo PriceType | `app/Domains/Accounting/Models/SaleReturnItem.php` |
| `Tax` | Əsas məlumat və ya domen qeydi | postingAccount: belongsTo Account; registrations: hasMany TaxDefinitionRegistration | `app/Domains/Accounting/Models/Tax.php` |
| `TaxDefinitionRegistration` | Əsas məlumat və ya domen qeydi | tax: belongsTo Tax | `app/Domains/Accounting/Models/TaxDefinitionRegistration.php` |
| `Wallet` | Əsas məlumat və ya domen qeydi | currency: belongsTo Currency; account: belongsTo Account | `app/Domains/Accounting/Models/Wallet.php` |
| `WalletTransfer` | Biznes sənədi | sourceWallet: belongsTo Wallet; destinationWallet: belongsTo Wallet; currency: belongsTo Currency; journalEntry: morphOne JournalEntry | `app/Domains/Accounting/Models/WalletTransfer.php` |

## Authorization

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `AuthorizationPolicy` | Sazlama / qayda | subjects: hasMany AuthorizationPolicySubject | `app/Models/AuthorizationPolicy.php` |
| `AuthorizationPolicySubject` | Əsas məlumat və ya domen qeydi | policy: belongsTo AuthorizationPolicy | `app/Models/AuthorizationPolicySubject.php` |
| `PermissionAuditLog` | Proses / audit qeydi | — | `app/Models/PermissionAuditLog.php` |
| `PermissionRule` | Sətir / köməkçi qeyd | — | `app/Models/PermissionRule.php` |

## BusinessNetwork

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `NetworkConnection` | Əsas məlumat və ya domen qeydi | lowProfile: belongsTo NetworkProfile; highProfile: belongsTo NetworkProfile; exchanges: hasMany NetworkExchange | `app/Domains/BusinessNetwork/Models/NetworkConnection.php` |
| `NetworkDocumentLink` | Əsas məlumat və ya domen qeydi | — | `app/Domains/BusinessNetwork/Models/NetworkDocumentLink.php` |
| `NetworkEvent` | Sətir / köməkçi qeyd | — | `app/Domains/BusinessNetwork/Models/NetworkEvent.php` |
| `NetworkExchange` | Əsas məlumat və ya domen qeydi | connection: belongsTo NetworkConnection; versions: hasMany NetworkVersion | `app/Domains/BusinessNetwork/Models/NetworkExchange.php` |
| `NetworkMapping` | Sazlama / qayda | — | `app/Domains/BusinessNetwork/Models/NetworkMapping.php` |
| `NetworkPreference` | Sazlama / qayda | — | `app/Domains/BusinessNetwork/Models/NetworkPreference.php` |
| `NetworkProfile` | Sazlama / qayda | tenant: belongsTo Tenant | `app/Domains/BusinessNetwork/Models/NetworkProfile.php` |
| `NetworkVersion` | Əsas məlumat və ya domen qeydi | exchange: belongsTo NetworkExchange | `app/Domains/BusinessNetwork/Models/NetworkVersion.php` |

## Core / audit

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `AuditLog` | Proses / audit qeydi | actor: belongsTo User | `app/Core/Models/AuditLog.php` |
| `SecurityAuditLog` | Proses / audit qeydi | — | `app/Core/Models/SecurityAuditLog.php` |

## Crm

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `Lead` | Əsas məlumat və ya domen qeydi | pipeline: belongsTo Pipeline; stage: belongsTo Stage; partner: belongsTo Partner; owner: belongsTo User; source: belongsTo Source; currency: belongsTo Currency; lostReason: belongsTo LostReason; tasks: hasMany Task; saleOrders: hasMany SaleOrder | `app/Domains/Crm/Models/Lead.php` |
| `LostReason` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Crm/Models/LostReason.php` |
| `Pipeline` | Əsas məlumat və ya domen qeydi | stages: hasMany Stage | `app/Domains/Crm/Models/Pipeline.php` |
| `Source` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Crm/Models/Source.php` |
| `Stage` | Əsas məlumat və ya domen qeydi | pipeline: belongsTo Pipeline; leads: hasMany Lead | `app/Domains/Crm/Models/Stage.php` |
| `Task` | Əsas məlumat və ya domen qeydi | lead: belongsTo Lead; assignee: belongsTo User; creator: belongsTo User | `app/Domains/Crm/Models/Task.php` |

## Hr

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `Department` | Əsas məlumat və ya domen qeydi | parent: belongsTo self; children: hasMany self | `app/Domains/Hr/Models/Department.php` |

## Integrations

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `IntegrationConnection` | Əsas məlumat və ya domen qeydi | subscriptions: hasMany IntegrationWebhookSubscription | `app/Domains/Integrations/Models/IntegrationConnection.php` |
| `IntegrationIdempotencyKey` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Integrations/Models/IntegrationIdempotencyKey.php` |
| `IntegrationOutboxEvent` | Sətir / köməkçi qeyd | deliveries: hasMany IntegrationWebhookDelivery | `app/Domains/Integrations/Models/IntegrationOutboxEvent.php` |
| `IntegrationWebhookDelivery` | Proses / audit qeydi | event: belongsTo IntegrationOutboxEvent; subscription: belongsTo IntegrationWebhookSubscription | `app/Domains/Integrations/Models/IntegrationWebhookDelivery.php` |
| `IntegrationWebhookSubscription` | Əsas məlumat və ya domen qeydi | webhookConnection: belongsTo IntegrationConnection | `app/Domains/Integrations/Models/IntegrationWebhookSubscription.php` |

## Inventory

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `PriceType` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Inventory/Models/PriceType.php` |

## Localization

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `LocalizationInstallation` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Localization/Models/LocalizationInstallation.php` |
| `LocalizationInstallRun` | Proses / audit qeydi | — | `app/Domains/Localization/Models/LocalizationInstallRun.php` |
| `TaxProfile` | Sazlama / qayda | — | `app/Domains/Localization/Models/TaxProfile.php` |
| `TaxRegistration` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Localization/Models/TaxRegistration.php` |

## Manufacturing

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `Bom` | Əsas məlumat və ya domen qeydi | routing: belongsTo Routing; components: hasMany BomComponent; outputs: hasMany BomOutput | `app/Domains/Manufacturing/Models/Bom.php` |
| `BomComponent` | Sətir / köməkçi qeyd | bom: belongsTo Bom; product: belongsTo Product; routingOperation: belongsTo RoutingOperation | `app/Domains/Manufacturing/Models/BomComponent.php` |
| `BomOutput` | Sətir / köməkçi qeyd | bom: belongsTo Bom; product: belongsTo Product; routingOperation: belongsTo RoutingOperation | `app/Domains/Manufacturing/Models/BomOutput.php` |
| `MaterialConsumption` | Biznes sənədi | document: belongsTo StockDocument; operation: belongsTo ProductionOperation | `app/Domains/Manufacturing/Models/MaterialConsumption.php` |
| `ProductionMaterial` | Əsas məlumat və ya domen qeydi | order: belongsTo ProductionOrder; product: belongsTo Product; operation: belongsTo ProductionOperation | `app/Domains/Manufacturing/Models/ProductionMaterial.php` |
| `ProductionOperation` | Sətir / köməkçi qeyd | order: belongsTo ProductionOrder; workCenter: belongsTo WorkCenter | `app/Domains/Manufacturing/Models/ProductionOperation.php` |
| `ProductionOrder` | Biznes sənədi | bom: belongsTo Bom; materials: hasMany ProductionMaterial; operations: hasMany ProductionOperation; consumptions: hasMany MaterialConsumption; outputs: hasMany ProductionOutput | `app/Domains/Manufacturing/Models/ProductionOrder.php` |
| `ProductionOutput` | Sətir / köməkçi qeyd | product: belongsTo Product; document: belongsTo StockDocument; operation: belongsTo ProductionOperation | `app/Domains/Manufacturing/Models/ProductionOutput.php` |
| `Routing` | Əsas məlumat və ya domen qeydi | operations: hasMany RoutingOperation | `app/Domains/Manufacturing/Models/Routing.php` |
| `RoutingOperation` | Sətir / köməkçi qeyd | routing: belongsTo Routing; workCenter: belongsTo WorkCenter | `app/Domains/Manufacturing/Models/RoutingOperation.php` |
| `WorkCenter` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Manufacturing/Models/WorkCenter.php` |

## Metadata

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `NavigationMenu` | Əsas məlumat və ya domen qeydi | dataset: belongsTo Dataset; views: hasMany View; userMenuSettings: hasMany UserMenuSetting | `app/Domains/Metadata/Entities/NavigationMenu.php` |

## Output

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `OutputTemplate` | Sazlama / qayda | revisions: hasMany OutputTemplateRevision; publishedRevision: belongsTo OutputTemplateRevision; assignments: hasMany OutputTemplateAssignment | `app/Domains/Output/Models/OutputTemplate.php` |
| `OutputTemplateAssignment` | Əsas məlumat və ya domen qeydi | template: belongsTo OutputTemplate | `app/Domains/Output/Models/OutputTemplateAssignment.php` |
| `OutputTemplateRevision` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Output/Models/OutputTemplateRevision.php` |

## Partner

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `Partner` | Əsas məlumat və ya domen qeydi | parent: belongsTo Partner; commercialPartner: belongsTo Partner; commercialChildren: hasMany Partner; children: hasMany Partner; group: belongsTo PartnerGroup; priceType: belongsTo PriceType; branches: belongsToMany Branch; bankAccounts: hasMany PartnerBankAccount | `app/Domains/Partner/Models/Partner.php` |
| `PartnerBankAccount` | Əsas məlumat və ya domen qeydi | partner: belongsTo Partner | `app/Domains/Partner/Models/PartnerBankAccount.php` |
| `PartnerGroup` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Partner/Models/PartnerGroup.php` |

## Platform / persistence

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `ChangelogEntry` | Biznes sənədi | items: hasMany ChangelogItem | `app/Infrastructure/Persistence/Eloquent/ChangelogEntry.php` |
| `ChangelogItem` | Sətir / köməkçi qeyd | entry: belongsTo ChangelogEntry | `app/Infrastructure/Persistence/Eloquent/ChangelogItem.php` |
| `Dashboard` | Əsas məlumat və ya domen qeydi | owner: belongsTo User; source: belongsTo self; widgets: hasMany DashboardWidget; roles: belongsToMany Role | `app/Infrastructure/Persistence/Eloquent/Dashboard.php` |
| `DashboardWidget` | Əsas məlumat və ya domen qeydi | dashboard: belongsTo Dashboard | `app/Infrastructure/Persistence/Eloquent/DashboardWidget.php` |
| `Dataset` | Əsas məlumat və ya domen qeydi | views: hasMany View; fields: hasMany Field | `app/Infrastructure/Persistence/Eloquent/Dataset.php` |
| `Domain` | Əsas məlumat və ya domen qeydi | — | `app/Infrastructure/Persistence/Eloquent/Domain.php` |
| `Field` | Əsas məlumat və ya domen qeydi | dataset: belongsTo Dataset | `app/Infrastructure/Persistence/Eloquent/Field.php` |
| `FilterTemplate` | Sazlama / qayda | — | `app/Infrastructure/Persistence/Eloquent/FilterTemplate.php` |
| `IntegrationClient` | Əsas məlumat və ya domen qeydi | — | `app/Infrastructure/Persistence/Eloquent/IntegrationClient.php` |
| `Permission` | Əsas məlumat və ya domen qeydi | — | `app/Infrastructure/Persistence/Eloquent/Permission.php` |
| `Region` | Əsas məlumat və ya domen qeydi | — | `app/Infrastructure/Persistence/Eloquent/Region.php` |
| `Role` | Əsas məlumat və ya domen qeydi | — | `app/Infrastructure/Persistence/Eloquent/Role.php` |
| `Setting` | Sazlama / qayda | — | `app/Infrastructure/Persistence/Eloquent/Setting.php` |
| `Tenant` | Əsas məlumat və ya domen qeydi | — | `app/Infrastructure/Persistence/Eloquent/Tenant.php` |
| `User` | Əsas məlumat və ya domen qeydi | defaultBranch: belongsTo Branch; branches: belongsToMany Branch; department: belongsTo Department | `app/Infrastructure/Persistence/Eloquent/User.php` |
| `UserMenuGroup` | Əsas məlumat və ya domen qeydi | — | `app/Infrastructure/Persistence/Eloquent/UserMenuGroup.php` |
| `UserMenuSetting` | Sazlama / qayda | navigationMenu: belongsTo NavigationMenu | `app/Infrastructure/Persistence/Eloquent/UserMenuSetting.php` |
| `View` | Əsas məlumat və ya domen qeydi | dataset: belongsTo Dataset | `app/Infrastructure/Persistence/Eloquent/View.php` |
| `ViewPreference` | Sazlama / qayda | — | `app/Infrastructure/Persistence/Eloquent/ViewPreference.php` |

## Pos

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `PosCashMovement` | Əsas məlumat və ya domen qeydi | register: belongsTo PosRegister; reason: belongsTo PosCashReason; shift: belongsTo PosShift | `app/Domains/Pos/Models/PosCashMovement.php` |
| `PosCashReason` | Əsas məlumat və ya domen qeydi | counterpartAccount: belongsTo Account | `app/Domains/Pos/Models/PosCashReason.php` |
| `PosInstallation` | Əsas məlumat və ya domen qeydi | register: belongsTo PosRegister | `app/Domains/Pos/Models/PosInstallation.php` |
| `PosPaymentType` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Pos/Models/PosPaymentType.php` |
| `PosQuickKeyLayout` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Pos/Models/PosQuickKeyLayout.php` |
| `PosRegister` | Əsas məlumat və ya domen qeydi | activationCodes: hasMany PosRegisterActivationCode; shifts: hasMany PosShift; paymentMethods: hasMany PosRegisterPaymentType; stock: belongsTo Stock; cashWallet: belongsTo Wallet | `app/Domains/Pos/Models/PosRegister.php` |
| `PosRegisterActivationCode` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Pos/Models/PosRegisterActivationCode.php` |
| `PosRegisterPaymentType` | Əsas məlumat və ya domen qeydi | register: belongsTo PosRegister; paymentType: belongsTo PosPaymentType; wallet: belongsTo Wallet | `app/Domains/Pos/Models/PosRegisterPaymentType.php` |
| `PosSale` | Biznes sənədi | items: hasMany PosSaleItem; payments: hasMany PosSalePayment; register: belongsTo PosRegister; shift: belongsTo PosShift; partner: belongsTo Partner; stock: belongsTo Stock; currency: belongsTo Currency; priceType: belongsTo PriceType; moves: morphMany StockMove; valuationLayers: morphMany StockValuationLayer | `app/Domains/Pos/Models/PosSale.php` |
| `PosSaleItem` | Sətir / köməkçi qeyd | sale: belongsTo PosSale; product: belongsTo Product; unit: belongsTo Unit; priceType: belongsTo PriceType; tax: belongsTo Tax; moves: morphMany StockMove | `app/Domains/Pos/Models/PosSaleItem.php` |
| `PosSalePayment` | Sətir / köməkçi qeyd | sale: belongsTo PosSale; paymentType: belongsTo PosPaymentType | `app/Domains/Pos/Models/PosSalePayment.php` |
| `PosSaleReturn` | Biznes sənədi | items: hasMany PosSaleReturnItem; payments: hasMany PosSaleReturnPayment; register: belongsTo PosRegister; sale: belongsTo PosSale; stock: belongsTo Stock; currency: belongsTo Currency; moves: morphMany StockMove; valuationLayers: morphMany StockValuationLayer | `app/Domains/Pos/Models/PosSaleReturn.php` |
| `PosSaleReturnItem` | Sətir / köməkçi qeyd | product: belongsTo Product; return: belongsTo PosSaleReturn; unit: belongsTo Unit; priceType: belongsTo PriceType; saleItem: belongsTo PosSaleItem | `app/Domains/Pos/Models/PosSaleReturnItem.php` |
| `PosSaleReturnPayment` | Sətir / köməkçi qeyd | paymentType: belongsTo PosPaymentType; wallet: belongsTo Wallet | `app/Domains/Pos/Models/PosSaleReturnPayment.php` |
| `PosShift` | Əsas məlumat və ya domen qeydi | register: belongsTo PosRegister; user: belongsTo User; sales: hasMany PosSale; returns: hasMany PosSaleReturn; cashMovements: hasMany PosCashMovement; posPayments: hasMany Payment | `app/Domains/Pos/Models/PosShift.php` |
| `PosSyncInbox` | Proses / audit qeydi | register: belongsTo PosRegister | `app/Domains/Pos/Models/PosSyncInbox.php` |
| `PosSyncIssue` | Proses / audit qeydi | register: belongsTo PosRegister; shift: belongsTo PosShift | `app/Domains/Pos/Models/PosSyncIssue.php` |

## Product

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `BranchProductSetting` | Sazlama / qayda | branch: belongsTo Branch; product: belongsTo Product | `app/Domains/Product/Models/BranchProductSetting.php` |
| `Category` | Əsas məlumat və ya domen qeydi | parent: belongsTo self | `app/Domains/Product/Models/Category.php` |
| `Product` | Əsas məlumat və ya domen qeydi | category: belongsTo Category; department: belongsTo Department; unit: belongsTo Unit; tax: belongsTo Tax; expenseCategory: belongsTo ExpenseCategory; packagings: hasMany ProductPackaging; prices: hasMany ProductPrice; suppliers: hasMany ProductSupplier; reorderRules: hasMany StockReorderRule; branchSettings: hasMany BranchProductSetting; template: belongsTo ProductTemplate; attributeValues: belongsToMany ProductAttributeValue; variants: hasMany self | `app/Domains/Product/Models/Product.php` |
| `ProductAttribute` | Əsas məlumat və ya domen qeydi | values: hasMany ProductAttributeValue | `app/Domains/Product/Models/ProductAttribute.php` |
| `ProductAttributeValue` | Əsas məlumat və ya domen qeydi | attribute: belongsTo ProductAttribute; variants: belongsToMany Product | `app/Domains/Product/Models/ProductAttributeValue.php` |
| `ProductPackaging` | Əsas məlumat və ya domen qeydi | product: belongsTo Product; unit: belongsTo Unit | `app/Domains/Product/Models/ProductPackaging.php` |
| `ProductPrice` | Əsas məlumat və ya domen qeydi | product: belongsTo Product; priceType: belongsTo PriceType | `app/Domains/Product/Models/ProductPrice.php` |
| `ProductTemplate` | Sazlama / qayda | variants: hasMany Product; category: belongsTo Category; unit: belongsTo Unit | `app/Domains/Product/Models/ProductTemplate.php` |

## Purchase

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `ProductSupplier` | Əsas məlumat və ya domen qeydi | product: belongsTo Product; supplier: belongsTo Partner; unit: belongsTo Unit; currency: belongsTo Currency | `app/Domains/Purchase/Models/ProductSupplier.php` |
| `PurchaseInvoiceReceiptMatch` | Əsas məlumat və ya domen qeydi | invoiceItem: belongsTo PurchaseInvoiceItem; receiptItem: belongsTo PurchaseReceiptItem | `app/Domains/Purchase/Models/PurchaseInvoiceReceiptMatch.php` |
| `PurchaseOrder` | Biznes sənədi | items: hasMany PurchaseOrderItem; invoices: hasMany PurchaseInvoice; receipts: morphMany PurchaseReceipt; user: belongsTo User; owner: belongsTo User; supplier: belongsTo Partner; project: belongsTo Project; currency: belongsTo Currency; stock: belongsTo Stock; replenishmentRun: belongsTo StockReplenishmentRun | `app/Domains/Purchase/Models/PurchaseOrder.php` |
| `PurchaseOrderItem` | Sətir / köməkçi qeyd | purchase: belongsTo PurchaseOrder; purchaseOrder: belongsTo PurchaseOrder; product: belongsTo Product; unit: belongsTo Unit | `app/Domains/Purchase/Models/PurchaseOrderItem.php` |
| `PurchaseReceipt` | Biznes sənədi | currency: belongsTo Currency; project: belongsTo Project; purchaseOrder: belongsTo PurchaseOrder; supplier: belongsTo Partner; partner: belongsTo Partner; stock: belongsTo Stock; sourceLocation: belongsTo StockLocation; destinationLocation: belongsTo StockLocation; items: hasMany PurchaseReceiptItem; moves: morphMany StockMove; valuationLayers: morphMany StockValuationLayer; landedCosts: hasMany StockLandedCost | `app/Domains/Purchase/Models/PurchaseReceipt.php` |
| `PurchaseReceiptItem` | Sətir / köməkçi qeyd | receipt: belongsTo PurchaseReceipt; purchaseReceipt: belongsTo PurchaseReceipt; landedCost: hasOne StockLandedCost; landedCosts: morphMany StockLandedCost; product: belongsTo Product; unit: belongsTo Unit; sourceLocation: belongsTo StockLocation; destinationLocation: belongsTo StockLocation; invoiceMatches: hasMany PurchaseInvoiceReceiptMatch; moves: morphMany StockMove | `app/Domains/Purchase/Models/PurchaseReceiptItem.php` |

## Sales

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `SaleOrder` | Biznes sənədi | items: hasMany SaleOrderItem; project: belongsTo Project; crmLead: belongsTo Lead; user: belongsTo User; customer: belongsTo Partner; partner: belongsTo Partner; stock: belongsTo Stock; currency: belongsTo Currency | `app/Domains/Sales/Models/SaleOrder.php` |
| `SaleOrderItem` | Sətir / köməkçi qeyd | saleOrder: belongsTo SaleOrder; product: belongsTo Product; priceType: belongsTo PriceType; unit: belongsTo Unit | `app/Domains/Sales/Models/SaleOrderItem.php` |
| `SaleReceipt` | Biznes sənədi | items: hasMany SaleReceiptItem; partner: belongsTo Partner; project: belongsTo Project; customer: belongsTo Partner; stock: belongsTo Stock; currency: belongsTo Currency; moves: morphMany StockMove; valuationLayers: morphMany StockValuationLayer | `app/Domains/Sales/Models/SaleReceipt.php` |
| `SaleReceiptItem` | Sətir / köməkçi qeyd | receipt: belongsTo SaleReceipt; product: belongsTo Product; priceType: belongsTo PriceType; unit: belongsTo Unit; lot: belongsTo StockLot; moves: morphMany StockMove | `app/Domains/Sales/Models/SaleReceiptItem.php` |

## Shared

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `Branch` | Əsas məlumat və ya domen qeydi | manager: belongsTo User; users: belongsToMany User; stocks: hasMany Stock; wallets: hasMany Wallet; products: belongsToMany Product | `app/Domains/Shared/Models/Branch.php` |
| `Country` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Shared/Models/Country.php` |
| `DocumentNameAssignment` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Shared/Models/DocumentNameAssignment.php` |
| `DocumentNumberConfiguration` | Sazlama / qayda | — | `app/Domains/Shared/Models/DocumentNumberConfiguration.php` |
| `DocumentNumberSequence` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Shared/Models/DocumentNumberSequence.php` |
| `Project` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Shared/Models/Project.php` |

## Stock

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `InventoryCostMethodChange` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Stock/Models/InventoryCostMethodChange.php` |
| `Stock` | Əsas məlumat və ya domen qeydi | locations: hasMany StockLocation; defaultSourceLocation: belongsTo StockLocation; defaultDestinationLocation: belongsTo StockLocation | `app/Domains/Stock/Models/Stock.php` |
| `StockDocument` | Biznes sənədi | stock: belongsTo Stock; destinationStock: belongsTo Stock; destinationBranch: belongsTo Branch; partner: belongsTo Partner; sourceLocation: belongsTo StockLocation; destinationLocation: belongsTo StockLocation; items: hasMany StockDocumentItem; moves: morphMany StockMove; valuationLayers: morphMany StockValuationLayer | `app/Domains/Stock/Models/StockDocument.php` |
| `StockDocumentItem` | Sətir / köməkçi qeyd | document: belongsTo StockDocument; product: belongsTo Product; unit: belongsTo Unit; sourceLocation: belongsTo StockLocation; destinationLocation: belongsTo StockLocation; lot: belongsTo StockLot | `app/Domains/Stock/Models/StockDocumentItem.php` |
| `StockLandedCost` | Əsas məlumat və ya domen qeydi | items: hasMany StockLandedCostItem; purchaseReceipt: belongsTo PurchaseReceipt; purchaseReceiptItem: belongsTo PurchaseReceiptItem; expenseCategory: belongsTo ExpenseCategory | `app/Domains/Stock/Models/StockLandedCost.php` |
| `StockLandedCostItem` | Sətir / köməkçi qeyd | landedCost: belongsTo StockLandedCost; inboundMoveItem: belongsTo StockMoveItem | `app/Domains/Stock/Models/StockLandedCostItem.php` |
| `StockLocation` | Əsas məlumat və ya domen qeydi | stock: belongsTo Stock; parent: belongsTo self; children: hasMany self | `app/Domains/Stock/Models/StockLocation.php` |
| `StockLot` | Əsas məlumat və ya domen qeydi | product: belongsTo Product | `app/Domains/Stock/Models/StockLot.php` |
| `StockMove` | Əsas məlumat və ya domen qeydi | sourceItem: morphTo; stock: belongsTo Stock; product: belongsTo Product; unit: belongsTo Unit; sourceUnit: belongsTo Unit; sourceLocation: belongsTo StockLocation; destinationLocation: belongsTo StockLocation; items: hasMany StockMoveItem; valuationLayers: hasMany StockValuationLayer; reversalMoves: hasMany self | `app/Domains/Stock/Models/StockMove.php` |
| `StockMoveItem` | Sətir / köməkçi qeyd | move: belongsTo StockMove; product: belongsTo Product; unit: belongsTo Unit; lot: belongsTo StockLot | `app/Domains/Stock/Models/StockMoveItem.php` |
| `StockQuant` | Əsas məlumat və ya domen qeydi | product: belongsTo Product; location: belongsTo StockLocation; lot: belongsTo StockLot; packaging: belongsTo ProductPackaging | `app/Domains/Stock/Models/StockQuant.php` |
| `StockQuantApplication` | Sətir / köməkçi qeyd | — | `app/Domains/Stock/Models/StockQuantApplication.php` |
| `StockReorderRule` | Sətir / köməkçi qeyd | stock: belongsTo Stock; product: belongsTo Product; productSupplier: belongsTo ProductSupplier | `app/Domains/Stock/Models/StockReorderRule.php` |
| `StockReplenishmentRun` | Proses / audit qeydi | purchaseOrders: hasMany PurchaseOrder | `app/Domains/Stock/Models/StockReplenishmentRun.php` |
| `StockReservation` | Əsas məlumat və ya domen qeydi | stock: belongsTo Stock; product: belongsTo Product; packaging: belongsTo ProductPackaging; saleOrder: belongsTo SaleOrder; saleOrderItem: belongsTo SaleOrderItem; stockDocument: belongsTo StockDocument; allocations: hasMany StockReservationAllocation | `app/Domains/Stock/Models/StockReservation.php` |
| `StockReservationAllocation` | Sətir / köməkçi qeyd | reservation: belongsTo StockReservation; quant: belongsTo StockQuant | `app/Domains/Stock/Models/StockReservationAllocation.php` |
| `StockReservationEvent` | Sətir / köməkçi qeyd | product: belongsTo Product; location: belongsTo StockLocation; lot: belongsTo StockLot | `app/Domains/Stock/Models/StockReservationEvent.php` |
| `StockReservationHistoryCoverage` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Stock/Models/StockReservationHistoryCoverage.php` |
| `StockRevaluation` | Biznes sənədi | product: belongsTo Product | `app/Domains/Stock/Models/StockRevaluation.php` |
| `StockValuationAdjustment` | Sətir / köməkçi qeyd | product: belongsTo Product; affectedMoveItem: belongsTo StockMoveItem | `app/Domains/Stock/Models/StockValuationAdjustment.php` |
| `StockValuationConsumption` | Biznes sənədi | — | `app/Domains/Stock/Models/StockValuationConsumption.php` |
| `StockValuationLayer` | Əsas məlumat və ya domen qeydi | product: belongsTo Product; stock: belongsTo Stock; move: belongsTo StockMove; reversalLayers: hasMany self; run: belongsTo StockValuationRun; moveItem: belongsTo StockMoveItem; location: belongsTo StockLocation; lot: belongsTo StockLot | `app/Domains/Stock/Models/StockValuationLayer.php` |
| `StockValuationRun` | Proses / audit qeydi | — | `app/Domains/Stock/Models/StockValuationRun.php` |

## Store

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `Storefront` | Əsas məlumat və ya domen qeydi | — | `app/Domains/Store/Models/Storefront.php` |
| `StoreProductPublication` | Əsas məlumat və ya domen qeydi | product: belongsTo Product | `app/Domains/Store/Models/StoreProductPublication.php` |

## Unit

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `Unit` | Əsas məlumat və ya domen qeydi | relativeUnit: belongsTo self; relatedUnits: hasMany self | `app/Domains/Unit/Models/Unit.php` |

## Workflows

| Entity | Təsnifat | Kod əlaqələri | Mənbə |
| --- | --- | --- | --- |
| `WorkflowDefinition` | Sazlama / qayda | runs: hasMany WorkflowRun | `app/Domains/Workflows/Models/WorkflowDefinition.php` |
| `WorkflowEvent` | Sətir / köməkçi qeyd | — | `app/Domains/Workflows/Models/WorkflowEvent.php` |
| `WorkflowRun` | Proses / audit qeydi | definition: belongsTo WorkflowDefinition; event: belongsTo WorkflowEvent; steps: hasMany WorkflowStepRun | `app/Domains/Workflows/Models/WorkflowRun.php` |
| `WorkflowStepRun` | Proses / audit qeydi | run: belongsTo WorkflowRun | `app/Domains/Workflows/Models/WorkflowStepRun.php` |

