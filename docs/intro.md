---
sidebar_position: 1
---

# BEIN ERP sənədləşdirməsi

Bu portal BEIN ERP backend-i ilə işləyən developer və inteqratorlar üçün kanonik texniki mənbədir.

## Başlamaq üçün

1. [Autentifikasiya](./api/authentication.md) qaydasını oxuyun.
2. [API kontraktı](./api/contract.md) ilə ümumi response və səhv formatlarını nəzərdən keçirin.
3. İstifadə edəcəyiniz resursu seçin və onun rolunu həmin biznes modulunun giriş səhifəsində müəyyən edin.
4. İstifadə etdiyiniz biznes modulunu seçin və həmin modulun resurs səhifəsində endpoint request/response nümunəsinə baxın.
5. Tenant və filial kontekstini [API kontraktı](./api/contract.md) və sorğu nümunələrindəki kontekst sahələri ilə yoxlayın.

## Versiya qaydası

Tenant biznes API-sinin əsas hissəsi `/api/v1` prefix-i altındadır. Aktivasiya və public store kimi bəzi xüsusi route-lar `/api` altında ayrıca təqdim edilir; konkret path və JSON nümunəsi uyğun biznes resursunun səhifəsində göstərilir. Geriyə uyğun olmayan dəyişiklik yeni API versiyası və ya əvvəlcədən elan edilmiş deprecation mərhələsi tələb edir.

Bu repository-də API davranışı dəyişən hər dəyişiklik uyğun endpoint və izah səhifəsini də yeniləməlidir.
