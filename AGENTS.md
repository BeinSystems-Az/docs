# API sənədləşdirmə standardı

Bu daxili qaydalar API bölməsini yaradan və yeniləyən developer-lər üçündür.

## Fakt mənbəyi

- Route, middleware, controller, request validation, DTO, action/service, presenter və testlər API kontraktının mənbəyidir. Backend dəyişmirsə, onu yalnız oxuyun.
- Kodla təsdiqlənməyən path, field, tip, məcburilik, status, permission, xəta və nəticə yazmayın.
- src/generated/api-routes.json avtomatik route snapshot-ıdır; əl ilə redaktə etməyin. Backend route-u dəyişəndə npm run generate:reference işlədin.

## Sabit API quruluşu

Menyu ardıcıllığı: versiya və əsas URL, autentifikasiya və kontekst, ümumi kontrakt, sonra ERP frontend menyusunu izləyən API kateqoriyaları. Eyni menyu ekranında idarə olunan hər API resursu ayrıca səhifədə olmalıdır; fərqli biznes sənəd növləri ortaq endpoint işlətsə belə, hər növ üçün ayrıca API səhifəsi yaradın və uyğun type/filter nümunələrini verin. Ayarların çoxsaylı açarları bir xüsusi API resursundan idarə olunursa, onları bir API səhifəsində saxlayın. API bölməsində istifadəçi interfeysi təlimatı və təkrarlanan biznes workflow-u saxlanmır. API-si olmayan frontend bölməsi üçün saxta endpoint kateqoriyası yaratmayın.

Modul səhifəsi həmin modulun API resurslarına indeks verir. Bir resurs səhifəsi resursun bütün endpointlərini bir yerdə saxlayır. Mövcud public URL-ləri qoruyun; URL dəyişikliyi zəruridirsə, köhnə URL üçün redirect yaradın.

API reference əhatəsindən qəsdən çıxarılan resurs və route-ları internal/api-doc-exclusions.json-da əsaslandırması ilə qeyd edin; route audit-i bu siyahını yoxlamalıdır. Yeni resurs səhifələri internal/resource-page-template.md şablonuna uyğun olmalıdır. Giriş qısa API məqsədini və lazım olduqda auth, permission, tenant və filial kontekstini bildirir. Təkrarlanan biznes xülasələri məcburi deyil. State keçidini yalnız konkret API davranışını anlamaq üçün lazım olduqda saxlayın.

## Endpoint məzmunu

- Hər operation ayrıca başlıq, HTTP metodu və tam endpoint yolu ilə göstərilir.
- Hər operation üçün ayrıca sintetik request və success response JSON nümunəsi verin. Request headers, path, query və body hissələrini aydın ayırır; istifadə olunmayan hissələr boş obyektdir.
- Permission və həmin operation-a aid, backend-də təsdiqlənmiş əsas xətaları göstərin.
- Field cədvəlini yalnız inteqrasiya üçün vacib field-ləri bir yerdə anlamağa kömək etdikdə saxlayın. Field adı, tipi və qısa texniki məna verin.
- Stok, rezerv, jurnal, vergi və state təsirini yalnız konkret API nəticəsi üçün vacib və backend-də təsdiqlənmiş olduqda yazın.
- İzahlar Azərbaycan dilində, endpoint və JSON field adları ingiliscədir. Nümunələrdə real token və ya müştəri məlumatı işlətməyin.

## Yoxlama

Handoff-dan əvvəl npm run check işlədin. Route audit-i backend snapshot-ı ilə müqayisə etməli, qırıq link və etibarsız JSON saxlanmamalıdır.

Ətraflı qərarlar: internal/decisions/001-api-reference-structure.md, internal/decisions/002-api-docs-follow-frontend-navigation.md


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
