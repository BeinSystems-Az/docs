---
sidebar_position: 2
slug: /api/sales/orders
---

# Satış sifarişləri

## Məqsəd və sərhəd

Satış sifarişi müştəriyə qarşı kommersiya öhdəliyidir. Qaralama və göndərilmiş sifariş stok hərəkəti yaratmır. `sale_order` state-i açıq rezerv yarada və qaralama delivery stok sənədini sinxronlaşdıra bilər, lakin özü mühasibat jurnalına yazmır.

## İlkin şərtlər

Sifariş üçün müştəri kimi istifadə edilə bilən `Partner`, seçilmiş `Stock`, ən azı bir `Product` sətri və satış sifarişləri üzrə uyğun permission lazımdır. Məhsul sətirlərində göndərilən vahid, qablaşdırma, valyuta və vergi identifikatorları tenant daxilində mövcud olmalıdır. Sorğu `X-Branch-Id` ilə seçilən filialın kontekstində işləyir.

## İş axını

1. Müştəri, anbar və məhsul sətirləri ilə sifarişi yaradın.
2. Sifarişi lazım olduqda `sent` edin.
3. Rezervasiya üçün state-i `sale_order` edin.
4. Delivery/satış prosesi bitdikdə faktiki maliyyə və stok nəticəsi Satış qəbzində yaranır.

## State-lər və biznes təsiri

`draft` redaktə üçün ilkin vəziyyətdir, `sent` sifarişin göndərildiyini göstərir, `sale_order` isə satış öhdəliyini təsdiqləyir. Avtomatik rezervasiya siyasəti aktivdirsə, `sale_order` state-i stokda izlənən məhsullar üçün rezervasiya və qaralama çatdırılma sənədi yaradır. `cancelled` sifarişi ləğv edir. Sifarişin özü stok çıxışı, vergi tanınması və jurnal yazılışı yaratmır; bu nəticələr post edilmiş satış qəbzindən yaranır.

## Əlaqəli resurslar

Sifariş `Product`, müştəri və `Stock` məlumatlarını birləşdirir. `sale_order` state-i seçildikdə və avtomatik rezervasiya aktiv olduqda stokda izlənən sətirlər üçün `StockReservation` və qaralama çatdırılma `StockDocument`i yaranır. Faktiki satış üçün [Satış qəbzi](/docs/api/sales/receipts) istifadə olunur; post edilmiş bağlı qəbz və ya çatdırılma olduqda sifarişin həmin state-dən çıxarılması məhdudlaşdırılır.

Ümumi əlaqə xəritəsi: [Resurslar və əlaqələr](/docs/architecture/resources).

## Əsas məhdudiyyətlər

Bütün əməliyyatlar Bearer JWT, tenant və filial konteksti, həmçinin `sale_orders` resursunda uyğun permission tələb edir. Post edilmiş bağlı çatdırılma, satış qəbzi və ya aktiv törəmə sənəd olduqda sifarişi `sale_order` state-indən çıxarmaq və ya ləğv etmək rədd edilir. State dəyəri yalnız resurs üçün göstərilən `draft`, `sent`, `sale_order` və `cancelled` enum-larından biri ola bilər.
