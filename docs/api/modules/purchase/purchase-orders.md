---
sidebar_position: 2
slug: /api/purchasing/orders
---

# Alış sifarişləri

## Məqsəd və sərhəd

Alış sifarişi təchizatçıya qarşı kommersiya öhdəliyidir. `confirmed` state-i tədarük prosesini təsdiqləyir, lakin fiziki stok, valuation və mühasibat jurnal nəticəsi yaratmır. Bu nəticələr Alış qəbzi post ediləndə yaranır.

## İlkin şərtlər

Sifariş yaratmaq üçün təchizatçı kimi qeyd edilən `Partner`, təyinat `Stock`-u və uyğun məhsul sətirləri lazımdır. Göndərilən valyuta, qablaşdırma, vahid və vergi ID-ləri tenant daxilində mövcud olmalıdır. İstifadəçi `purchase_orders` resursunda tələb olunan action permission-ına və seçilən filiala giriş hüququna sahib olmalıdır.

## İş axını

1. Təchizatçı, təyinat anbarı və sətirləri ilə sifariş yaradın.
2. `confirmed` ilə tədarük öhdəliyini təsdiqləyin.
3. Fiziki qəbul üçün mənşə olaraq Alış qəbzini yaradın.
4. Sifariş icra olunmayacaqsa `cancelled` edin.

## State-lər və biznes təsiri

`draft` sifarişin redaktə mərhələsidir. `confirmed` keçidində sətirlərin vergisi dondurulur və tədarük öhdəliyi təsdiqlənir, amma stok qəbulu, valuation və `JournalEntry` yaranmır. `cancelled` sifariş öhdəliyini bağlayır. Faktiki stok və maliyyə təsiri yalnız Alış qəbzinin `posted` keçidində yaranır.

## Əlaqəli resurslar

Sifariş `Product`, təchizatçı `Partner`-i və `Stock` təyinatını birləşdirir. `confirmed` keçidində sətir vergiləri dondurulur, amma bu mərhələdə stok hərəkəti və jurnal yazılışı yaranmır. [Alış qəbzi](/docs/api/purchasing/receipts) sifarişdən yaradıla bilər; aktiv törəmə sənədlər olduqda sifarişin ləğvi məhdudlaşdırılır.

Ümumi əlaqə xəritəsi: [Resurslar və əlaqələr](/docs/architecture/resources).

## Əsas məhdudiyyətlər

Alış sifarişi endpointləri Bearer JWT, tenant/filial konteksti və `purchase_orders` resursunda uyğun permission tələb edir. State yalnız `draft`, `confirmed` və `cancelled` dəyərlərindən biri ola bilər. Aktiv törəmə sənədlər varsa sifarişi ləğv etmək rədd edilir; bu, artıq başlayan qəbul və ya maliyyə prosesinin səssizcə pozulmamasını qoruyur.
