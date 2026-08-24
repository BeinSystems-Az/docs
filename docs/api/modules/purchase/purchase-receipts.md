---
sidebar_position: 3
slug: /api/purchasing/receipts
---

# Alış qəbzləri

Alış qəbzi fiziki mal qəbuludur. Qaralama redaktə oluna bilir. `posted` state-i stok qəbulunu, vergini, jurnal/debit-credit sətirlərini və receipt xərclərini bir transaction-da yaradır. `cancelled` nəticələri revers edir.

## İş axını

1. Qəbzi birbaşa və ya alış sifarişindən yaradın.
2. Təchizatçı, anbar, sətirlər və xərcləri yoxlayın.
3. `posted` ilə fiziki qəbul və maliyyə nəticəsini yaradın.
4. Zəruri revers üçün `cancelled` edin.

## Əlaqəli resurslar

Qəbz [Alış sifarişindən](/docs/api/purchasing/orders) mənşə ala bilər və post ediləndə `StockMove`, `JournalEntry` və jurnal sətirlərinin mənbəyinə çevrilir. Qəbz xərc sətirləri də post və cancel əməliyyatının tərkibində işlənir. Ləğv stok nəticəsini geri çevirir və bağlı jurnal yazılışını revers edir.

Ümumi əlaqə xəritəsi: [Resurslar və əlaqələr](/docs/architecture/resources).

Sol menyuda hər endpoint ayrıca səhifədir.
