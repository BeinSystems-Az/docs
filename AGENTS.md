# API sənədləşdirmə standardı

Bu qaydalar Docusaurus portalının oxucuları üçün deyil. Bu repository-də API sənədi yaradan və ya yeniləyən bütün agent və developer-lər üçün məcburi iş təlimatıdır.

## Fakt mənbəyi

- Endpoint faktlarını `../erp-backend` mənbə kodundan yoxlayın: route, middleware, controller, request validation DTO, presenter/response DTO, action/service və uyğun test.
- Kodla təsdiqlənməyən field, status, state keçidi, permission və ya biznes təsiri yazmayın.
- Backend dəyişdirilmirsə, sənədləşdirmə üçün onu yalnız oxuyun.

## Tam inventar və generasiya

- Backend route snapshot-ı `src/generated/api-routes.json` faylında saxlanılır; onu əl ilə redaktə etməyin.
- Backend route dəyişdikdə, sənəd dəyişikliyini handoff etməzdən əvvəl `npm run generate:reference` işlədin. Skript yalnız avtomatik audit üçün route snapshot-ını yeniləyir.
- Endpointin field, enum, response və biznes nəticəsi yalnız controller → request/DTO → action/service → presenter və testlə təsdiq ediləndə istifadəçi resurs sənədinə yazıla bilər.

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

## İstifadəçi təlimatı səhifə standartı

- İstifadəçi təlimatı sahibkar və ERP istifadəçisi üçündür; interfeysdə işi necə görməyi və hansı nəticəni gözləməyi addım-addım izah edir.
- İstifadəçi təlimatı sidebar-ı ERP frontend menyusunun güzgüsü olmalıdır: eyni qruplar, alt qruplar, ardıcıllıq və görünən səhifə adları. Menyu faktı üçün `/home/ali/Projects/erp-backend/database/system-metadata/navigation_menu.php`-ı, faktiki route və səhifə üçün frontend route/component-lərini yoxlayın. Sənədin `sidebar_label`-ı varsa, frontend-dəki menyu etiketi ilə eyni yazılmalıdır.
- Frontend-dəki hər işlək leaf route və biznes sənədi üçün ayrıca user-guide səhifəsi yaradın. Eyni səhifədəki bir sənədin mərhələləri bir sənəddə qala bilər, amma fərqli sənəd növlərini, siyahı səhifələrini və ya menyu bəndlərini bir ümumi təlimata yığmayın. Məsələn, anbar daxilolması, çıxışı, yerdəyişməsi, silinməsi və inventarizasiyası ayrı təlimatlardır.
- Sidebar-da frontend-də olmayan uydurma kateqoriya yaratmayın. Modul icmalı və “bütün əməliyyatlar” kimi redaksiya qrupları frontend menyusunu əvəz etməməlidir. Frontend marşrutu olmayan və ya `route_path`-ı boş olan menyu elementi üçün işlək təlimat uydurmayın; bunu uyğun səhifədə qısa məhdudiyyət kimi qeyd edin.
- Səhifənin H1 və front matter `title`-ı eyni, bir frontend ekranı və ya bir sənəd niyyətini ifadə edən ad olmalıdır. Girişdə həmin səhifənin nə üçün olduğunu və onun yaratdığı/yaratmadığı əsas nəticəni bir-iki aydın cümlə ilə izah edin.
- Səhifə bu ardıcıllıqla qurulur: giriş, `## İstifadə qaydası`, `## Lüğət`, `## FAQ`. Əlaqəli təlimatlara əsas addımın içində, uyğun kontekstdə keçid verin; əlavə bölmə yalnız həqiqətən kömək edirsə yaradın.
- `## İstifadə qaydası` həmin səhifənin əsas, ardıcıl iş axınıdır. İlk addımda dəqiq həmin frontend səhifəsini açdırın; istifadəçiyə bir neçə siyahı arasından “lazım olanı seçməyi” tapşırmayın. Addımları `###` ilə mərhələlərə bölün və konkret sahə, düymə, seçim, yadda saxlama/təsdiq əməliyyatı və nəticəni göstərin.
- Sənəd səhifəsi ən azı bunları cavablandırmalıdır: sənəd nədir və nə vaxt istifadə olunur; yeni sənəd necə yaradılır; başlıq və sətirlər necə doldurulur; hansı yoxlama/təsdiq əməliyyatı nə vaxt edilir; nəticə harada görünür; düzəliş və ləğv üçün hansı məhdudiyyətlər var. Yalnız həmin sənəd növünün sahələrini və nəticəsini izah edin.
- Ayrıca “Başlamazdan əvvəl” bölməsi yaratmayın. Lazım olan hazırlığı girişdə və ya aid olduğu addımın özündə izah edin. Sahənin məqsədini həmin sahədən istifadə edilən addımda yazın.
- Hər təlimat səhifəsində həmin axına aid `## Lüğət` və `## FAQ` olmalıdır. Lüğətdə səhifəyə xas terminləri izah edin; ümumi terminlər üçün ümumi [Lüğət](/docs/glossary) səhifəsinə keçid verin. FAQ yalnız həmin əməliyyatla bağlı real suallara qısa və aydın cavab versin.
- FAQ-da hər sualı `###` başlığı, cavabı isə dərhal altındakı adi mətn kimi yazın. Bu, hər sual üçün başlıq üslubunu və Docusaurus-un birbaşa keçidini verir. Accordion məcburi deyil; yalnız sual sayı və cavabların uzunluğu bunu əsaslandıranda, sayt dizaynına uyğunluğu yoxlanaraq istifadə edin.
- Ekran görüntüsü və video qeydlərini ayrıca qalereyaya yığmayın. Fayllar Docusaurus-a məxsus qovluqda deyil, repository kökündən nisbi və başqa sistemə köçürülə bilən `media/user-guide/` ağacında saxlanmalıdır: `media/user-guide/<module-path>/<page-id>/images/<english-name>.png` və `media/user-guide/<module-path>/<page-id>/videos/<english-name>.mp4`. Modul yolu ERP menyusundakı ingiliscə slug-ları, səhifə ID-si isə təlimat faylının adını izləyir. Markerin yolu dəqiq server hədəfini göstərməli, şəkil və videonun nəyi göstərdiyi eyni sətirdə aydın yazılmalıdır. Adlar kiçik ingilis hərfləri və defislə yazılır; hər səhifədə şəkillər üçün `screen-01`, videolar üçün `walkthrough-01` ardıcıllığı işlədilir. Media faylları hazır deyilsə, yalnız marker yazılır; boş asset faylı yaradılmır.
- Menyu, düymə, tab və sahə adlarını, məcburilik və nəticələri backend metadata-sı və frontend davranışı ilə tutuşdurun. Təsdiqlənməyən addımı fakt kimi yazmayın; modula və icazəyə bağlı sahələri bunu açıq qeyd etməklə izah edin.
- Standart dəyişəndə əvvəlcə bu bölməni yeniləyin, sonra ona uyğun bütün mövcud istifadəçi təlimatı səhifələrini və sidebar quruluşunu eyni tapşırıqda uyğunlaşdırın.
