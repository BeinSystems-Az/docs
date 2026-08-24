---
sidebar_position: 2
slug: /api/catalog/products
---

# Məhsullar

Məhsul kartı ERP-də master məlumatdır. Kartın yaradılması, oxunması və yenilənməsi stok qalıqlarını, rezervasiyanı və mühasibat jurnalını dəyişmir. Qiymət, vergi, vahid, qablaşdırma və hesab sazlamaları məhsul sonradan sənədə daxil ediləndə tətbiq olunur.

## İş axını

1. Məhsulu yaradın və inventar vahidini təyin edin.
2. Lazımdırsa qablaşdırma, təchizatçı və yenidən-sifariş sazlamalarını əlavə edin.
3. Filiala xüsusi qiymət və əlçatanlıq lazımdırsa filial override-ı yazın.
4. Məhsulu satış, alış və anbar sənədlərində istifadə edin.

## Əlaqəli resurslar

`Product` master məlumatdır; `Category`, `Unit`, qablaşdırma, vergi və filial sazlamaları məhsulun sənədlərdə necə istifadə olunacağını müəyyən edir. Məhsul kartı birbaşa qalıq və ya jurnal yaratmır. Stokda izlənən məhsul sətiri [Satış qəbzi](/docs/api/sales/receipts), [Alış qəbzi](/docs/api/purchasing/receipts) və ya `StockDocument` post ediləndə stok emalına daxil olur.

Resurs əlaqələrinin tam xəritəsi üçün [Resurslar və əlaqələr](/docs/architecture/resources) səhifəsinə baxın.

Sol menyuda hər əməliyyat ayrıca səhifədir. Bütün endpointlər Bearer JWT və uyğun `products` icazəsi tələb edir; `X-Branch-Id` filial kontekstini müəyyən edir.
