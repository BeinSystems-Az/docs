---
sidebar_position: 3
slug: /api/sales/receipts
---

# Satış qəbzləri

Satış qəbzi faktiki satış sənədidir. Qaralama sərbəst redaktə olunur. `posted` state-i stok çıxışını, vergiləri, jurnal entry/debit-credit sətirlərini və qəbz xərclərini bir transaction-da yaradır. `cancelled` həmin nəticələri revers edir və audit izini saxlayır.

## İş axını

1. Qaralama qəbzi birbaşa və ya mənşə sifarişdən yaradın.
2. Sətir, vergi və xərcləri yoxlayın.
3. `posted` state keçidi ilə faktiki satış nəticəsini yaradın.
4. Zərurət olduqda `cancelled` ilə revers edin.

## Əlaqəli resurslar

Qəbz `SaleOrder`-dan mənşə ala və məhsul sətirlərindən `StockMove` nəticələri yarada bilər. `posted` keçidində qəbzin mənbə olduğu `JournalEntry` və `JournalItem` sətirləri yaradılır; cancellation stok nəticəsini geri çevirir və bağlı jurnal yazılışını revers edir. Açıq rezervlər satış qəbzinin postunda istifadə oluna, cancellation zamanı isə bərpa oluna bilər.

Ümumi əlaqə xəritəsi: [Resurslar və əlaqələr](/docs/architecture/resources).

Sol menyuda hər endpoint ayrıca sənədləşdirilib.
