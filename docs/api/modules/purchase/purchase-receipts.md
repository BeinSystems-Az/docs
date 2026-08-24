---
sidebar_position: 3
slug: /api/purchasing/receipts
---

# Alış qəbzləri

## Məqsəd və sərhəd

Alış qəbzi fiziki mal qəbuludur. Qaralama redaktə oluna bilir. `posted` state-i stok qəbulunu, vergini, jurnal/debit-credit sətirlərini və receipt xərclərini bir transaction-da yaradır. `cancelled` nəticələri revers edir.

## İlkin şərtlər

Qəbz birbaşa yaradıla və ya Alış sifarişini mənşə kimi götürə bilər. Birbaşa qəbz üçün təchizatçı, anbar və məhsul sətirləri tələb olunur; mənşə sifariş olduqda həmin məlumatların bir hissəsi mənşədən qurulur. Məhsul, anbar, valyuta, vergi və xərc ID-ləri mövcud olmalı, sorğunu göndərən istifadəçi `purchase_receipts` resursunda uyğun icazəyə sahib olmalıdır.

## İş axını

1. Qəbzi birbaşa və ya alış sifarişindən yaradın.
2. Təchizatçı, anbar, sətirlər və xərcləri yoxlayın.
3. `posted` ilə fiziki qəbul və maliyyə nəticəsini yaradın.
4. Zəruri revers üçün `cancelled` edin.

## State-lər və biznes təsiri

`draft` qəbzin yoxlanıldığı və redaktə olunduğu mərhələdir. `posted` keçidi fiziki stok qəbulunu yaradır, məhsul sətirlərinin vergilərini dondurur, bağlı jurnal yazılışını post edir və qəbz xərclərini emal edir. `cancelled` keçidi post edilmiş stok və jurnal nəticələrini reversal mexanizmi ilə geri çevirir. Buna görə qəbzə edilən state dəyişikliyi anbar və maliyyə hesabatlarında görünən nəticə yaradır.

## Əlaqəli resurslar

Qəbz [Alış sifarişindən](/docs/api/purchasing/orders) mənşə ala bilər və post ediləndə `StockMove`, `JournalEntry` və jurnal sətirlərinin mənbəyinə çevrilir. Qəbz xərc sətirləri də post və cancel əməliyyatının tərkibində işlənir. Ləğv stok nəticəsini geri çevirir və bağlı jurnal yazılışını revers edir.

Ümumi əlaqə xəritəsi: [Resurslar və əlaqələr](/docs/architecture/resources).

## Əsas məhdudiyyətlər

Alış qəbzi əməliyyatları Bearer JWT, tenant və filial konteksti, həmçinin `purchase_receipts` permission-ını tələb edir. `X-Branch-Id: all` yazma sorğularında keçərli deyil. State endpointi yalnız `draft`, `posted` və `cancelled` dəyərlərini qəbul edir; post və cancel əməliyyatları qəbzin cari state-i və əlaqəli biznes şərtləri uyğun olduqda icra edilir.
