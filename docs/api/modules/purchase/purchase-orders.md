---
sidebar_position: 2
slug: /api/purchasing/orders
---

# Alış sifarişləri

Alış sifarişi təchizatçıya qarşı kommersiya öhdəliyidir. `confirmed` state-i tədarük prosesini təsdiqləyir, lakin fiziki stok, valuation və mühasibat jurnal nəticəsi yaratmır. Bu nəticələr Alış qəbzi post ediləndə yaranır.

## İş axını

1. Təchizatçı, təyinat anbarı və sətirləri ilə sifariş yaradın.
2. `confirmed` ilə tədarük öhdəliyini təsdiqləyin.
3. Fiziki qəbul üçün mənşə olaraq Alış qəbzini yaradın.
4. Sifariş icra olunmayacaqsa `cancelled` edin.

## Əlaqəli resurslar

Sifariş `Product`, təchizatçı `Partner`-i və `Stock` təyinatını birləşdirir. `confirmed` keçidində sətir vergiləri dondurulur, amma bu mərhələdə stok hərəkəti və jurnal yazılışı yaranmır. [Alış qəbzi](/docs/api/purchasing/receipts) sifarişdən yaradıla bilər; aktiv törəmə sənədlər olduqda sifarişin ləğvi məhdudlaşdırılır.

Ümumi əlaqə xəritəsi: [Resurslar və əlaqələr](/docs/architecture/resources).

Sol menyuda hər endpoint ayrıca səhifədir.
