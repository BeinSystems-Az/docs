# API sənədləşdirmə standardı

Bu qaydalar Docusaurus portalının oxucuları üçün deyil. Bu repository-də API sənədi yaradan və ya yeniləyən bütün agent və developer-lər üçün məcburi iş təlimatıdır.

## Fakt mənbəyi

- Endpoint faktlarını `../erp-backend` mənbə kodundan yoxlayın: route, middleware, controller, request validation DTO, presenter/response DTO, action/service və uyğun test.
- Kodla təsdiqlənməyən field, status, state keçidi, permission və ya biznes təsiri yazmayın.
- Backend dəyişdirilmirsə, sənədləşdirmə üçün onu yalnız oxuyun.

## Səhifə quruluşu

- Docusaurus-da hər modul kateqoriya, hər resurs ayrıca səhifədir.
- Resurs səhifəsi həmin resursun collection, detail və action endpointlərini birlikdə saxlayır. Məsələn, Products səhifəsinə `GET/POST /products`, `GET/PUT/PATCH/DELETE /products/{product}` və məhsula aid nested action-lar daxildir.
- Portalda bu daxili qaydanı, yazı şablonunu və ya contributor prosesini publish etməyin. İstifadəçi yalnız API kontraktını və biznes izahını görməlidir.

## Resurs icmalı standardı

Hər resursun icmalında aşağıdakı altı bölmə mütləq olmalıdır. Mətn qısa telegraflıqla deyil, inteqratorun resursun rolunu ilk oxunuşda başa düşəcəyi aydın dillə yazılmalıdır:

1. **Məqsəd və sərhəd** — resursun nəyi təmsil etdiyi və hansı nəticəni özlüyündə yaratmadığı.
2. **İlkin şərtlər** — əməliyyatdan əvvəl mövcud olmalı əsas məlumat və kontekst.
3. **İş axını** — tipik istifadə ardıcıllığı.
4. **State-lər və biznes təsiri** — mövcud state-lər, keçidlər və stok, rezerv, vergi, jurnal, audit nəticəsi.
5. **Əlaqəli resurslar** — mənbə, törəmə və nəticə resursları, həmçinin növbəti əməliyyat.
6. **Əsas məhdudiyyətlər** — icazə, filial scope-u, state və bağlı sənədlərdən doğan real məhdudiyyətlər.

Endpointin səhifə və sidebar adı istifadəçi niyyətini ifadə etməlidir: məsələn, `Sifariş yarat`, `Sifarişi yenilə`, `Sifarişi siyahıla`. `GET`, `POST`, `PUT`, `PATCH` və `DELETE` həmin adda yazılmır; HTTP metod və tam URL endpoint bölməsinin əvvəlində göstərilir.

## Hər endpoint üçün məcburi məzmun

Hər HTTP operation aşağıdakı ardıcıllıqla tam sənədləşdirilməlidir:

1. HTTP metod və tam `/api/v1/...` URL, qısa məqsəd.
2. Autentifikasiya, permission, tenant və filial konteksti.
3. Bütün path, query və header parametrləri: ad, tip/format, məcburilik, default, enum və izah.
4. Request body field cədvəli: sahə, tip/format, required və conditional qayda, enum/limit, biznes mənası.
5. Tam, fiktiv request JSON nümunəsi; body olmayan operation üçün bunun açıq qeydi.
6. Uğurlu status kodu, response `data` sahələrinin cədvəli və tam JSON nümunəsi.
7. Əməliyyata real aid olan `401`, `403`, `404`, `409`, `422` və `503` xətaları, hər birinin səbəbi.
8. Biznes təsiri: state keçidi, stok, rezerv, jurnal entry/reversal, vergi, reconciliation və audit nəticəsi. Təsir yoxdursa bunu açıq yazın.
9. Əlaqəli resurslara və növbəti əməliyyatlara keçid.

## Keyfiyyət qadağaları

- `GenericRequest`, naməlum `data`, “və s.”, placeholder və natamam response izahı ilə kifayətlənməyin.
- Request və response nümunələrində real token, tenant, istifadəçi, müştəri və ya secret istifadə etməyin; yalnız sintetik məlumat yazın.
- İzahlar Azərbaycan dilində, endpoint və JSON field adları ingiliscə olmalıdır.
- API davranışı dəyişəndə eyni dəyişiklikdə uyğun resurs səhifəsi də yenilənməlidir.

## Yoxlama

- Yeni və ya dəyişən sənədin bütün məlumatlarını backend kodu ilə tutuşdurun.
- Hər resurs səhifəsində yuxarıdakı bütün endpoint bölmələrinin olmasını yoxlayın.
- Handoff-dan əvvəl `npm run check` işlədin və qırıq Docusaurus linki saxlamayın.
