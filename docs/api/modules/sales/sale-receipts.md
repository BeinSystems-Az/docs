---
sidebar_position: 3
slug: /api/sales/receipts
---

# Satış qəbzləri

## Məqsəd və sərhəd

Satış qəbzi faktiki satış sənədidir. Qaralama sərbəst redaktə olunur. `posted` state-i stok çıxışını, vergiləri, jurnal entry/debit-credit sətirlərini və qəbz xərclərini bir transaction-da yaradır. `cancelled` həmin nəticələri revers edir və audit izini saxlayır.

## İlkin şərtlər

Qəbz birbaşa və ya uyğun mənşə sənədindən yaradıla bilər. Birbaşa yaradılan qəbz üçün müştəri, anbar və məhsul sətirləri tələb olunur; mənşə `SaleOrder`, `PurchaseReceipt` və ya `SaleInvoice` olduqda backend bu məlumatların bir hissəsini mənşədən qura bilər. Məhsul, anbar, valyuta, vergi və xərc ID-ləri göndərilirsə mövcud olmalı, istifadəçi isə `sale_receipts` resursunda uyğun icazəyə sahib olmalıdır.

## İş axını

1. Qaralama qəbzi birbaşa və ya mənşə sifarişdən yaradın.
2. Sətir, vergi və xərcləri yoxlayın.
3. `posted` state keçidi ilə faktiki satış nəticəsini yaradın.
4. Zərurət olduqda `cancelled` ilə revers edin.

## State-lər və biznes təsiri

`draft` mərhələsində sətirlər və xərclər düzəldilə bilər. `posted` keçidi məhsul sətirlərindən stok çıxışı yaradır, vergiləri dondurur, qəbzə bağlı jurnal yazılışını post edir və qəbz xərclərini emal edir. `cancelled` yalnız post edilmiş qəbzin nəticələrini geri çevirir: stok hərəkətləri revers olunur, açıq rezerv bərpa edilir və bağlı jurnal yazılışı revers edilir. Bu səbəbdən qəbz adi master-data resursu deyil, audit izi olan biznes sənədidir.

## Əlaqəli resurslar

Qəbz `SaleOrder`-dan mənşə ala və məhsul sətirlərindən `StockMove` nəticələri yarada bilər. `posted` keçidində qəbzin mənbə olduğu `JournalEntry` və `JournalItem` sətirləri yaradılır; cancellation stok nəticəsini geri çevirir və bağlı jurnal yazılışını revers edir. Açıq rezervlər satış qəbzinin postunda istifadə oluna, cancellation zamanı isə bərpa oluna bilər.

Ümumi əlaqə xəritəsi: [Resurslar və əlaqələr](/docs/architecture/resources).

## Əsas məhdudiyyətlər

Bütün əməliyyatlar Bearer JWT, seçilmiş filial konteksti və `sale_receipts` permission-ını tələb edir. `X-Branch-Id: all` yazma üçün istifadə edilmir. State endpointi yalnız `draft`, `posted` və `cancelled` dəyərlərini qəbul edir; post yalnız qaralama qəbz üçün, cancel isə yalnız post edilmiş qəbz üçün biznes qaydalarını keçdikdə icra edilir.
