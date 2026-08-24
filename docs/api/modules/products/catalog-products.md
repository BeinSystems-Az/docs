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

Sol menyuda hər əməliyyat ayrıca səhifədir. Bütün endpointlər Bearer JWT və uyğun `products` icazəsi tələb edir; `X-Branch-Id` filial kontekstini müəyyən edir.
