---
sidebar_position: 1
title: Mühasibatlıq və maliyyə
---

# Mühasibatlıq və maliyyə

Hesab planı, jurnal yazılışları, satış və alış fakturaları, ödənişlər, borclar, vergi, pul hesabları və əsas vəsait uçotunu idarə edir.

## Modulun sərhədi

Bu modul maliyyə nəticəsini və baş kitabı idarə edir; fiziki stok hərəkətinin mənbəyi satış, alış və stok sənədləridir.

## Tipik iş axını

Əvvəl master məlumatları qurun, sənədi draft yaradın, sətirləri yoxlayın, sonra uyğun state action ilə post edin və hesabatlardan nəticəni izləyin.

## Sistem təsiri

Master məlumat dəyişiklikləri jurnal yaratmır. Maliyyə sənədinin `posted` vəziyyəti baş kitab və borc nəticəsi yarada, `cancelled` isə həmin nəticəni revers edə bilər.

## Resurslar

### Uçot quruluşu və master məlumatlar

| Resurs | Nə üçün istifadə olunur |
| --- | --- |
| [Hesab planı](./resources/account) | Baş kitab sətirlərində istifadə olunan hesab iyerarxiyası və uçot rolları. |
| [Hesab xüsusiyyətləri](./resources/account-property) | Məhsul, tərəfdaş və vergi kimi resursları posting hesabları ilə xəritələyir. |
| [Xərc kateqoriyaları](./resources/expense-category) | Birbaşa xərc sətirlərini xərc hesabı və vergi davranışı ilə bağlayır. |
| [Pul hesabları](./resources/wallet) | Kassa və bank wallet-lərini valyuta və liquidity hesabı ilə bağlayır. |
| [Valyutalar](./resources/currency) | ISO valyuta kodlarını, göstərilmə dəqiqliyini və bağlı məzənnələri saxlayır. |
| [Valyuta məzənnələri](./resources/currency-rate) | Xarici valyutanın əsas valyutaya tarix üzrə çevrilmə əmsalıdır. |
| [Vergilər](./resources/tax) | Lokalizasiya paketinin təqdim etdiyi vergi təriflərini oxumaq üçündür. |
| [Vergi profili](./resources/tax-profile) | Tenantın vergi ödəyicisi tipi, rejimi və lokalizasiya hazırlığını saxlayır. |
| [Ölkələr](./resources/country) | Ünvan və lokalizasiya formalarında istifadə olunan ölkə kataloqudur. |

### Gündəlik maliyyə sənədləri

| Resurs | Nə üçün istifadə olunur |
| --- | --- |
| [Jurnal yazılışları](./resources/journal-entry) | Balanslı debet və kredit sətirlərindən ibarət manual baş kitab sənədidir. |
| [Birbaşa xərclər](./resources/direct-expense) | Fakturasız xərci kateqoriya, wallet və məbləğ sətirləri ilə uçota alır. |
| [Ödənişlər](./resources/payment) | Daxil olan və çıxan ödənişi wallet və açıq borc allocation-ları ilə idarə edir. |
| [Pul hesabı transferləri](./resources/wallet-transfer) | İki wallet arasında daxili pul köçürməsini və qarşı jurnal nəticəsini idarə edir. |
| [Satış fakturaları](./resources/sale-invoice) | Müştəri debitor borcunu və satış vergisi nəticəsini yaradır. |
| [Satış qaytarışları](./resources/sale-return) | Satışın qaytarılması üzrə debitor, vergi və gəlir nəticəsini revers edir. |
| [Alış fakturaları](./resources/purchase-invoice) | Təchizatçı kreditor borcunu və alış vergisi nəticəsini yaradır. |
| [Alış qaytarışları](./resources/purchase-return) | Alışın qaytarılması üzrə kreditor və vergi nəticəsini revers edir. |

### Borc və uzlaşdırma

| Resurs | Nə üçün istifadə olunur |
| --- | --- |
| [Borclar](./resources/debt) | Tərəfdaş üzrə debitor və kreditor qalığını oxumaq üçündür. |
| [Maliyyə uzlaşdırması](./resources/finance) | Açıq jurnal sətirlərini uyğunlaşdırır, tərəfdaş qalıqlarını və open item-ləri göstərir. |

### Əsas vəsaitlər

| Resurs | Nə üçün istifadə olunur |
| --- | --- |
| [Əsas vəsait kateqoriyaları](./resources/fixed-asset-category) | Aktiv, amortizasiya və xərc hesabları ilə faydalı istifadə qaydasını saxlayır. |
| [Əsas vəsaitlər](./resources/fixed-asset) | Aktivin ilkin dəyərini, amortizasiyasını, məsul şəxsi və yerləşməsini saxlayır. |
| [Əsas vəsait transferləri](./resources/fixed-asset-transfer) | Aktivi məsul şəxs və ya lokasiya arasında keçirir. |
| [Əsas vəsait satışları](./resources/fixed-asset-sale) | Aktiv satışını post edir və uçotdan çıxarma nəticəsini yaradır. |
| [Əsas vəsait silinmələri](./resources/fixed-asset-scrap) | Aktiv scrap/silinmə əməliyyatını və mühasibat nəticəsini yaradır. |

## Əlaqələr

Satış, satınalma, tərəfdaşlar, stok, layihələr və hesabatlar.
