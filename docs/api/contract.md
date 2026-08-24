---
sidebar_position: 2
---

# API kontraktı

Əsas URL:

```text
https://<api-host>/api/v1
```

Faktiki production host-u inteqrasiya mühiti sizə təqdim ediləcək. Nümunələrdə heç vaxt real token və ya müştəri məlumatı istifadə etməyin.

## Sorğu konteksti

Əksər operation JWT ilə qorunur. Filial-scope route-larında `X-Branch-Id` header-i tətbiq edilir; JWT istifadəçisinin default filialı olmadıqda və ya uyğun deyilsə sorğu rədd edilir. `X-Branch-Id: all` yalnız səlahiyyətli `GET`/`HEAD` sorğuları üçün oxu kontekstidir.

İnteqrasiya action-ları JWT deyil, Bearer service token, `X-Tenant-Account` və məcburi `X-Branch-Id` tələb edir. POS sync endpointləri `Authorization: Device <tenant-uuid>.<device-secret>` formatından istifadə edir. Hər operation-in konkret security sxemi API referansında göstərilir.

## Uğurlu cavab

```json
{
  "status": "success",
  "message": null,
  "data": {}
}
```

Paginated siyahılar əlavə olaraq `links` və `meta` qaytarır.

## Səhv cavabı

```json
{
  "status": "error",
  "message": "Human-readable error message",
  "errors": {
    "field": ["Validation message"]
  }
}
```

HTTP status kodu həmişə cavabın nəticəsini müəyyən edir. `401` autentifikasiya, `403` icazə və ya filial scope-u, `422` validation/biznes qaydası, `404` resursun tapılmaması, `409` biznes konfliktləri üçün istifadə olunur. Tenant provisioning davam etdikdə qorunan route `503` qaytara bilər.
