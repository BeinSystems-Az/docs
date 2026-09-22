---
sidebar_position: 2
---

# API kontraktı

Əsas URL:

```text
https://<api-host>/api/v1
```

Faktiki production host-u inteqrasiya mühiti sizə təqdim ediləcək. Nümunələrdə heç vaxt real token və ya müştəri məlumatı istifadə etməyin.

Bu əsas tenant API bazasıdır. Public mağaza oxuları `/api/store/v1/{store}/...`, health və aktivasiya kimi xüsusi protokollar isə route kataloqunda göstərilən ayrıca path-lərdən istifadə edir.

## Sorğu konteksti

Əksər operation Bearer JWT və ya `bei_int_...` formatlı integration token ilə qorunur. Integration token bağlı istifadəçinin permission-larını miras alır və ayrıca rate limit, expiry və revoke qaydalarına tabedir. Onun bütün mutation sorğularında 8–200 simvolluq `Idempotency-Key` tələb olunur. Filial-scope route-larında `GET`/`HEAD` sorğuları konkret filialı `?filter[branch_id]=<uuid>` və ya `?filter[branch_id][value]=<uuid>` ilə seçir; filter olmadıqda istifadəçinin bütün icazəli filialları scope-a daxil edilir. Yazma sorğuları filialı body-də `branch_id` ilə seçir və field olmadıqda aktiv default/əlçatan filial istifadə olunur.

POS aktivasiya və device-token refresh public protokoldur. Aktivləşdirilmiş POS cihazının sync endpointi `Authorization: Device <tenant-uuid>.<device-secret>` formatından istifadə edir və filialı cihazın bağlı olduğu registrdən müəyyən edir. `X-Tenant-Account`, `X-Branch-Id` və `X-Company-Id` cari filial-seçim kontraktının hissəsi deyil; yeni client filial üçün onları göndərməməlidir.

`X-Locale: az|en|ru` header-i response mesajlarının dilini seçir və `Accept-Language`-dən üstündür. Response-da faktiki dil `Content-Language`, sorğu audit identifikatoru isə `X-Request-Id` header-i ilə qaytarılır.

## Uğurlu cavab

```json
{
  "status": "success",
  "message": null,
  "data": {}
}
```

Paginated siyahılar əlavə olaraq `links` və `meta` qaytarır.

## Səhv cavabları

Biznes, permission və tenant/context xətaları `status`, `message` və stabil `code` daşıya bilər:

```json
{
  "status": "error",
  "message": "Human-readable error message",
  "code": "PERMISSION_DENIED",
  "request_id": "11111111-1111-4111-8111-111111111111",
  "error_id": "22222222-2222-4222-8222-222222222222"
}
```

Laravel input validation cavabı ayrıca formadadır və `status`/`code` məcburi deyil:

```json
{
  "message": "The given data was invalid.",
  "errors": {
    "field": ["Validation message"]
  },
  "request_id": "11111111-1111-4111-8111-111111111111",
  "error_id": "22222222-2222-4222-8222-222222222222"
}
```

HTTP status kodu həmişə cavabın nəticəsini müəyyən edir. `401` autentifikasiya, `403` icazə və ya filial scope-u, `422` validation/biznes qaydası, `404` resursun tapılmaması, `409` biznes və idempotency konfliktləri, `429` integration-token rate limit-i üçün istifadə olunur. Tenant provisioning davam etdikdə qorunan route `503` qaytara bilər. Support və audit araşdırması üçün `request_id` və `error_id` dəyərlərini saxlayın.

## Idempotency davranışı

Integration token ilə mutation sorğusunu təkrar etmək üçün eyni `Idempotency-Key` və tam eyni method/path/query/body istifadə olunmalıdır. Tamamlanmış cavab replay ediləndə `X-Idempotent-Replay: true` qaytarılır. Eyni açar fərqli sorğu üçün istifadə edilərsə `IDEMPOTENCY_KEY_REUSED`, əvvəlki sorğu hələ işləyirsə `IDEMPOTENCY_REQUEST_PROCESSING` kodlu `409` alınır.
