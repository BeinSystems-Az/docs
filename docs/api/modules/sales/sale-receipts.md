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

Sol menyuda hər endpoint ayrıca sənədləşdirilib.
