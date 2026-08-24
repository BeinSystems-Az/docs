---
sidebar_position: 6
---

# Sənədlərə töhfə

1. `master`-dan branch yaradın.
2. API dəyişibsə `openapi/openapi.yaml` və uyğun Markdown səhifəsini eyni PR-da yeniləyin.
3. `npm run check` əmri ilə OpenAPI lint və statik build-i yoxlayın.
4. PR açın; merge-dən sonra portal avtomatik deploy olunacaq.

## Qaydalar

- İzahlar Azərbaycan dilində, endpoint və JSON field adları isə ingiliscə yazılır.
- Nümunələr yalnız fiktiv UUID, token və məlumat işlətməlidir.
- Public kontrakta uyğun olmayan daxili endpoint, secret, private host və real customer məlumatı əlavə edilməməlidir.
- Breaking change üçün yeni API versiyası və ya deprecation qeydi tələb olunur.
