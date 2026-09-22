---
sidebar_position: 1
title: POS
---

# POS

Kassa registri, aktivasiya, növbə, satış, qaytarış və ödəniş sazlamalarını idarə edir.

## Modulun sərhədi

POS operativ satış kanalıdır; konfiqurasiya resursları nəticə yaratmır, post edilmiş satış və qaytarışlar isə stok və maliyyə nəticəsi yaradır.

## Tipik iş axını

Registr və ödəniş tiplərini qurun, cihazı aktivləşdirin, növbə açın, əməliyyatları sync edin və növbəni bağlayın.

## Sistem təsiri

Post edilmiş POS satışı stok çıxışı və maliyyə nəticəsi, qaytarış isə əks hərəkət yaradır; sync inbox idempotent emalı qoruyur.

## Resurslar

| Resurs | Nə üçün istifadə olunur |
| --- | --- |
| [POS kassa hərəkətləri](./resources/pos-cash-movement) | POS kassa hərəkətləri məlumat və əməliyyatlarını idarə edir. |
| [POS kassa səbəbləri](./resources/pos-cash-reason) | POS kassa səbəbləri məlumat və əməliyyatlarını idarə edir. |
| [POS növbələri](./resources/pos-shift) | POS növbələri məlumat və əməliyyatlarını idarə edir. |
| [POS ödəniş tipləri](./resources/pos-payment-type) | POS ödəniş tipləri məlumat və əməliyyatlarını idarə edir. |
| [POS registrləri](./resources/pos-register) | Fiziki və ya virtual satış nöqtəsini anbar, nağd wallet və qəbul etdiyi ödəniş tipləri ilə bağlayır. |
| [POS satış qaytarışları](./resources/pos-sale-return) | POS satış qaytarışları məlumat və əməliyyatlarını idarə edir. |
| [POS satışları](./resources/pos-sale) | POS satışları məlumat və əməliyyatlarını idarə edir. |

## Əlaqələr

Məhsullar, stok, wallet-lər, satış və mühasibatlıq.
