---
title: Tenant modulları
---

# Tenant modulları

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · uyğun resurs permission-ı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Tenant üçün modulların aktivlik vəziyyətini göstərir və dəyişir.

**İlkin şərtlər.** Tenant konteksti və modul idarəetmə icazəsi olmalıdır.

**İş axını.** Kataloqu oxuyun, seçilmiş modulun is_active dəyərini yeniləyin.

**State-lər və biznes təsiri.** is_active modulu iş axınında açır və ya bağlayır; deaktiv etmə workflow-lara təsir edə bilər.

**Əlaqəli resurslar.** Naviqasiya, metadata və workflow modulları.

**Əsas məhdudiyyətlər.** Yalnız kataloqdakı modul açarları qəbul olunur.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `key` | dəyər | Modul açarı. |
| `name` | dəyər | Modul adı. |
| `is_active` | dəyər | Tenant üçün aktivlik bayrağı. |
| `description` | dəyər | Modulun izahı. |

## Endpointlər

### Modulları siyahıla

**Endpoint** · `GET /api/v1/modules`

Tenant üçün modulların aktivlik vəziyyətini göstərir və dəyişir.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {},
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": [
    {
      "key": "hr",
      "name": "İnsan resursları",
      "description": "İnsan resursları əməliyyatları",
      "is_active": true
    }
  ]
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Yoxdur; məlumat oxunur.

### Modul aktivliyini dəyiş

**Endpoint** · `PATCH /api/v1/modules/{module}`

Tenant üçün modulların aktivlik vəziyyətini göstərir və dəyişir.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {
    "module": "hr"
  },
  "query": {},
  "body": {
    "is_active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "key": "hr",
    "name": "İnsan resursları",
    "description": "İnsan resursları əməliyyatları",
    "is_active": true
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · is_active modulu iş axınında açır və ya bağlayır; deaktiv etmə workflow-lara təsir edə bilər.
