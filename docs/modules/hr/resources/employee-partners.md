---
title: Əməkdaş üçün şəxslər
---

# Əməkdaş üçün şəxslər

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · uyğun resurs permission-ı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Əməkdaş qeydinə bağlana bilən, hələ bağlanmamış fiziki şəxsləri göstərir; yeni şəxs yaratmır.

**İlkin şərtlər.** Tenant daxilində aktiv fiziki şəxs olmalıdır.

**İş axını.** Siyahıda axtarın, şəxs ID-sini yoxlayın, sonra Employee yaradarkən partner_id verin.

**State-lər və biznes təsiri.** Ayrıca state keçidi yoxdur; yalnız aktiv və bağlanmamış şəxslər siyahıdadır.

**Əlaqəli resurslar.** Partner və Employee master qeydləri.

**Əsas məhdudiyyətlər.** Şirkətlər və artıq Employee-ə bağlı şəxslər siyahıya düşmür.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Partner şəxs ID-si. |
| `name` | dəyər | Şəxsin görünən adı. |
| `phone` | dəyər | Şəxsin telefonu. |

## Endpointlər

### Uyğun şəxsləri siyahıla

**Endpoint** · `GET /api/v1/hr/employee-partners`

Əməkdaş qeydinə bağlana bilən, hələ bağlanmamış fiziki şəxsləri göstərir; yeni şəxs yaratmır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {},
  "query": {
    "q": "Aysel"
  },
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": [],
  "links": {
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "per_page": 20,
    "total": 0
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Yoxdur; məlumat oxunur.

### Şəxsi oxu

**Endpoint** · `GET /api/v1/hr/employee-partners/{partner}`

Əməkdaş qeydinə bağlana bilən, hələ bağlanmamış fiziki şəxsləri göstərir; yeni şəxs yaratmır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {
    "partner": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Aysel Əliyeva",
    "phone": "+994501234567"
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Yoxdur; məlumat oxunur.
