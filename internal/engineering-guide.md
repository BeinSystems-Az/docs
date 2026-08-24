# BEIN ERP engineering bələdçisi

Bu sənəd public Docusaurus portalının hissəsi deyil. API dəyişikliklərini həyata keçirən backend developer-lər üçün işçi arxitektura xəritəsidir.

## Laylar və məsuliyyət

| Lay | Məsuliyyət |
| --- | --- |
| Route və middleware | Endpointin giriş nöqtəsi, autentifikasiya, tenant və filial konteksti. |
| Controller | HTTP cavabı, permission yoxlaması və use-case çağırışı. |
| Request data / validation | Gələn payload-ın tip və biznesə giriş yoxlaması. |
| Use-case / action | State keçidi və use-case transaction-ının orkestrasiya edilməsi. |
| Domain service | Stok postu, rezervasiya, jurnal, vergi və başqa domen qaydaları. |
| Model / repository / query | Tenant kontekstində persistensiya, əlaqələr və oxu sorğuları. |

Controller yeni biznes qaydasının yeri deyil. Yeni davranış use-case və ya domain service-də qurulur; controller yalnız onu HTTP kontraktına bağlayır.

## Dəyişiklik ardıcıllığı

1. Route, middleware və mövcud resource kontraktını müəyyən edin.
2. Request data, presenter və permission təsirini yoxlayın.
3. Dəyişən business invariantı use-case/domain service-də transaction sərhədi daxilində tətbiq edin.
4. State keçidi stok, rezervasiya, vergi, jurnal və reconciliation-a təsir edirsə hər təsiri ayrıca yoxlayın.
5. Feature və ya domain testi ilə uğurlu, icazəsiz, validation və konflikt ssenarisini qoruyun.
6. Eyni dəyişiklikdə public resurs endpoint səhifəsini və biznes izahını yeniləyin.

## Sənəd və state yanaşması

`draft`, `posted`, `cancelled` və sifariş state-ləri resursun kontraktıdır; state dəyişimini birbaşa model update-i ilə kənardan təqlid etməyin. Post və cancel use-case-ləri əlaqəli stok və jurnal nəticələrini eyni transaction-da idarə edir. Yeni sənəd növü bu nəticələrdən hər hansı birini yaradırsa, mənbə əlaqəsi və reversal davranışı açıq dizayn olunmalıdır.

## Test minimumu

- Route və permission: düzgün permission, `403`, tenant/filial scope-u.
- Input: required, enum, format, əlaqəli UUID və branch uyğunsuzluğu.
- Həyat dövrü: icazəli və rədd edilən state keçidləri.
- Təsir: post/cancel sonrası stok, rezervasiya, jurnal, vergi və reconciliation gözləntisi.
- API: presenter response-u, status kodu və geriyə uyğunluq.

## Public sənəd sərhədi

Public portal yalnız istifadəçiyə təsir edən API kontraktını və biznes davranışını saxlayır. Bu bələdçidəki implementation və contributor prosesi `docs/` və Docusaurus sidebar-ı altında dərc edilmir.
