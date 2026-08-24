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

Sol menyuda hər endpoint ayrıca səhifədir.
