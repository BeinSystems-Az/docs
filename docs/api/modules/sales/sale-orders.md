---
sidebar_position: 2
slug: /api/sales/orders
---

# Satış sifarişləri

Satış sifarişi müştəriyə qarşı kommersiya öhdəliyidir. Qaralama və göndərilmiş sifariş stok hərəkəti yaratmır. `sale_order` state-i açıq rezerv yarada və qaralama delivery stok sənədini sinxronlaşdıra bilər, lakin özü mühasibat jurnalına yazmır.

## İş axını

1. Müştəri, anbar və məhsul sətirləri ilə sifarişi yaradın.
2. Sifarişi lazım olduqda `sent` edin.
3. Rezervasiya üçün state-i `sale_order` edin.
4. Delivery/satış prosesi bitdikdə faktiki maliyyə və stok nəticəsi Satış qəbzində yaranır.

## Əlaqəli resurslar

Sifariş `Product`, müştəri və `Stock` məlumatlarını birləşdirir. `sale_order` state-i seçildikdə və avtomatik rezervasiya aktiv olduqda stokda izlənən sətirlər üçün `StockReservation` və qaralama çatdırılma `StockDocument`i yaranır. Faktiki satış üçün [Satış qəbzi](/docs/api/sales/receipts) istifadə olunur; post edilmiş bağlı qəbz və ya çatdırılma olduqda sifarişin həmin state-dən çıxarılması məhdudlaşdırılır.

Ümumi əlaqə xəritəsi: [Resurslar və əlaqələr](/docs/architecture/resources).

Sol menyuda list, create, detail, update, delete və state keçidi ayrıca operation səhifələridir.
