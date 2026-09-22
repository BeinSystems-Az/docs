---
sidebar_position: 1
---

# Autentifikasiya və kontekst

Qorunan `v1` endpointləri Bearer credential tələb edir:

```http
Authorization: Bearer <token>
```

Backend credential-dan tenant və istifadəçini müəyyən edir, sonra PostgreSQL tenant schema-sını aktivləşdirir. İki Bearer credential növü dəstəklənir:

- JWT — xarici autentifikasiya sistemindən gələn istifadəçi tokenidir.
- Integration token — `bei_int_<public-id>.<secret>` formatında opaque tokendir. Integration client yaradılarkən və ya rotate edilərkən verilir, bağlı istifadəçinin permission-larını daşıyır, öz rate limit-i və expiry/revoke qaydası var.

Integration token üçün əlavə `X-Tenant-Account` header-i lazım deyil; tenant tokenin bağlı olduğu integration client-dan müəyyən edilir.

Integration token ilə edilən hər `POST`, `PUT`, `PATCH` və `DELETE` sorğusu 8–200 simvolluq `Idempotency-Key` (və ya uyğunluq üçün `X-Idempotency-Key`) tələb edir. Eyni açar və eyni sorğu təkrar göndərilərsə saxlanmış nəticə `X-Idempotent-Replay: true` ilə qaytarılır; açarın başqa payload-la təkrar istifadəsi `409` verir. JWT sorğularında bu məcburiyyət yoxdur.

## Filial konteksti

Filial seçimi header ilə edilmir. Oxu və yazma sorğuları fərqli qayda istifadə edir.

- `GET` və `HEAD`: konkret filial üçün `?filter[branch_id]=<branch-uuid>` göndərin. Metadata/filter UI formatı olan `?filter[branch_id][value]=<branch-uuid>` də qəbul edilir. Filter verilməzsə sorğu istifadəçinin icazəli olduğu bütün aktiv filialları əhatə edir.
- `POST`, `PUT`, `PATCH` və `DELETE`: konkret filialı request body-də `branch_id` ilə göndərin. Verilməzsə istifadəçinin aktiv `default_branch_id` filialı, o da yoxdursa ilk əlçatan aktiv filial seçilir.

Seçilmiş filial aktiv və istifadəçi üçün əlçatan olmalıdır. Admin və `branches.all` permission-ı olan istifadəçi bütün aktiv filiallara çıxış əldə edir; digər istifadəçilər yalnız özlərinə bağlanmış filialları görə bilər.

`X-Branch-Id`, `X-Branch-Id: all` və `X-Company-Id` cari filial-seçim kontraktının hissəsi deyil. `X-Branch-Id` köhnə uyğunluq izi kimi CORS allow-list və integration idempotency request hash-ində qalsa da filial scope-u yaratmır; yeni client onu göndərməməlidir.

## Dil seçimi

Response mesajının dilini `X-Locale: az|en|ru` və ya `Accept-Language` ilə seçmək olar; `X-Locale` üstünlük daşıyır. Uyğun dəyər göndərilməzsə default `az` istifadə olunur. Response `Content-Language` header-i ilə faktiki dili bildirir.

## Public endpointlər

Health endpointləri token tələb etmir. POS aktivasiya və cihaz tokeninin yenilənməsi ayrıca public protokoldur; sonrakı POS sync sorğuları `Authorization: Device <tenant-uuid>.<device-secret>` credential-ından istifadə edir.
