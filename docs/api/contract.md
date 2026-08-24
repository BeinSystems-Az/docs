---
sidebar_position: 2
---

# API kontraktı

Əsas URL:

```text
https://<api-host>/api/v1
```

Faktiki production host-u inteqrasiya mühiti sizə təqdim ediləcək. Nümunələrdə heç vaxt real token və ya müştəri məlumatı istifadə etməyin.

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

HTTP status kodu həmişə cavabın nəticəsini müəyyən edir. `401` autentifikasiya, `403` icazə, `422` validation, `404` resursun tapılmaması, `409` biznes konfliktləri üçün istifadə olunur.
