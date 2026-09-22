# API sənədləşdirmə standardı

Bu qaydalar Docusaurus portalının oxucuları üçün deyil. Bu repository-də API sənədi yaradan və ya yeniləyən bütün agent və developer-lər üçün məcburi iş təlimatıdır.

## Fakt mənbəyi

- Endpoint faktlarını `../erp-backend` mənbə kodundan yoxlayın: route, middleware, controller, request validation DTO, presenter/response DTO, action/service və uyğun test.
- Kodla təsdiqlənməyən field, status, state keçidi, permission və ya biznes təsiri yazmayın.
- Backend dəyişdirilmirsə, sənədləşdirmə üçün onu yalnız oxuyun.

## Tam inventar və generasiya

- `docs/api/reference/route-catalog.md` və `docs/domains/entity-inventory.md` generated fayllardır. Onları əl ilə redaktə etməyin.
- Backend route və ya model dəyişdikdə, sənəd dəyişikliyini handoff etməzdən əvvəl `npm run generate:reference` işlədin. Skript route manifestini və `app/**/Models` siyahısını qonşu `../erp-backend` repository-sindən oxuyur.
- Tam kataloq endpointin path, method, handler və middleware konteksti üçün avtoritet indeksdir. Field, enum, response və biznes nəticəsi yalnız controller → request/DTO → action/service → presenter və testlə təsdiq ediləndə ayrıca resurs sənədinə yazıla bilər.

## Səhifə quruluşu

- Docusaurus-da hər modul kateqoriya, hər resurs **bir səhifədir**. CRUD və resursla əlaqəli domain action-ları ayrıca səhifələrə bölünmür; həmin resurs səhifəsində `###` operation başlıqları kimi saxlanılır.
- Resurs səhifəsi həmin resursun collection, detail və action endpointlərini birlikdə saxlayır. Məsələn, Products səhifəsinə `GET/POST /products`, `GET/PUT/PATCH/DELETE /products/{product}` və məhsula aid nested action-lar daxildir.
- Yeni və yenilənən resurs səhifələri `internal/resource-page-template.md` strukturunu istifadə etməlidir.
- Portalda bu daxili qaydanı, yazı şablonunu və ya contributor prosesini publish etməyin. İstifadəçi yalnız API kontraktını və biznes izahını görməlidir.

## Resurs icmalı standardı

Hər resursun icmalında aşağıdakı altı bölmə mütləq olmalıdır. Mətn qısa telegraflıqla deyil, inteqratorun resursun rolunu ilk oxunuşda başa düşəcəyi aydın dillə yazılmalıdır:

1. **Məqsəd və sərhəd** — resursun nəyi təmsil etdiyi və hansı nəticəni özlüyündə yaratmadığı.
2. **İlkin şərtlər** — əməliyyatdan əvvəl mövcud olmalı əsas məlumat və kontekst.
3. **İş axını** — tipik istifadə ardıcıllığı.
4. **State-lər və biznes təsiri** — mövcud state-lər, keçidlər və stok, rezerv, vergi, jurnal, audit nəticəsi.
5. **Əlaqəli resurslar** — mənbə, törəmə və nəticə resursları, həmçinin növbəti əməliyyat.
6. **Əsas məhdudiyyətlər** — icazə, filial scope-u, state və bağlı sənədlərdən doğan real məhdudiyyətlər.

Operation başlığı istifadəçi niyyətini ifadə etməlidir: məsələn, `### Sifariş yarat`. HTTP metod və tam URL növbəti sətirdə `**Endpoint** · POST /api/v1/...` formatında göstərilir. Sidebar-da yalnız resurs adı görünür.

## Hər endpoint üçün məcburi məzmun

Resurs səhifəsində auth/context və bir dənə `Field-lər` cədvəli saxlanılır. Cədvəl hər field-in biznes mənasını və niyə istifadə olunduğunu izah edir; request kontraktını əvəz etmir. Ortaq request və ortaq response bölməsi yaradılmır. Hər HTTP operation `###` altında bu ardıcıllığı saxlayır:

1. `**Endpoint** · METHOD /api/v1/...` və bir cümləlik məqsəd.
2. `Request JSON`: `headers`, `path`, `query`, `body` hissələri ilə operation-a aid ayrıca, sintetik və valid JSON nümunəsi. Body yoxdursa `body: {}` göstərilir.
3. `Response JSON · status`: həmin operation-ın real response zərfini göstərən ayrıca, sintetik və valid JSON nümunəsi.
4. Yalnız həmin operation-a real aid xətalar və səbəbləri.
5. State, stok, rezerv, jurnal, vergi və audit təsirini bir sətirdə bildirin; təsir yoxdursa açıq yazın.

Field mənalarını endpoint bloklarında cədvəl kimi təkrarlamayın; lakin request və response JSON-u hər endpointdə ayrıca və açıq göstərin. Başqa operation-a və ya ortaq payload-a istinad response nümunəsini əvəz etmir.

## Keyfiyyət qadağaları

- `GenericRequest`, naməlum `data`, “və s.”, placeholder və natamam response izahı ilə kifayətlənməyin.
- Request və response nümunələrində real token, tenant, istifadəçi, müştəri və ya secret istifadə etməyin; yalnız sintetik məlumat yazın.
- İzahlar Azərbaycan dilində, endpoint və JSON field adları ingiliscə olmalıdır.
- API davranışı dəyişəndə eyni dəyişiklikdə uyğun resurs səhifəsi də yenilənməlidir.

## Yoxlama

- Yeni və ya dəyişən sənədin bütün məlumatlarını backend kodu ilə tutuşdurun.
- Hər resurs səhifəsində yuxarıdakı bütün endpoint bölmələrinin olmasını yoxlayın.
- Handoff-dan əvvəl `npm run check` işlədin və qırıq Docusaurus linki saxlamayın.
