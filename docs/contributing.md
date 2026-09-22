---
sidebar_position: 6
---

# Sənədlərə töhfə

1. `master`-dan branch yaradın.
2. Route və ya model dəyişibsə `npm run generate:reference` işlədin; yalnız texniki route/model indekslərini generated saxlayın.
3. Request, response və biznes davranışı dəyişibsə uyğun modulun resurs səhifəsini controller, DTO, presenter və testlərə əsasən əl ilə yeniləyin.
4. `npm run format:payloads` və `npm run check` ilə JSON formatını, naviqasiyanı, endpoint faktlarını və production build-i yoxlayın.
5. PR açın; merge-dən sonra portal avtomatik deploy olunacaq.

## Qaydalar

- İzahlar Azərbaycan dilində, endpoint və JSON field adları isə ingiliscə yazılır.
- Nümunələr yalnız fiktiv UUID, token və məlumat işlətməlidir.
- Public kontrakta uyğun olmayan daxili endpoint, secret, private host və real customer məlumatı əlavə edilməməlidir.
- Breaking change üçün yeni API versiyası və ya deprecation qeydi tələb olunur.
