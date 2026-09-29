---
title: HR dövrləri
---

# HR dövrləri

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · uyğun resurs permission-ı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Davamiyyət ayının açıq və bağlı vəziyyətini, reviziyasını saxlayır.

**İlkin şərtlər.** HR modulu və tam dövr icazəsi olmalıdır.

**İş axını.** Ayı yoxlayın, bitmiş ayı bağlayın, düzəliş üçün səbəblə yenidən açın.

**State-lər və biznes təsiri.** open və closed; close snapshot yaradır, reopen reviziyanı artırır və draft maaş hesabını silir.

**Əlaqəli resurslar.** Davamiyyət, vaxt qeydləri və maaş hesabı.

**Əsas məhdudiyyətlər.** Cari ay bağlanmır; təsdiqlənmiş maaş hesabı olan dövr yenidən açılmır.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `month` | dəyər | Y-m formatlı dövr. |
| `status` | dəyər | open və ya closed. |
| `revision` | dəyər | Dövr versiyası. |
| `snapshot` | dəyər | Bağlanmış davamiyyət xülasəsi. |
| `reason` | dəyər | Yenidən açma səbəbi. |

## Endpointlər

### Dövrü oxu

**Endpoint** · `GET /api/v1/hr/periods/{month}`

Davamiyyət ayının açıq və bağlı vəziyyətini, reviziyasını saxlayır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {
    "month": "2026-08"
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
    "period": {
      "month": "2026-08",
      "status": "open",
      "revision": 0,
      "snapshot": null,
      "changes": []
    },
    "current": {
      "month": "2026-08",
      "employees": [],
      "errors": []
    },
    "timezone": "Asia/Baku"
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Yoxdur; məlumat oxunur.

### Ayı bağla

**Endpoint** · `POST /api/v1/hr/periods/{month}/close`

Davamiyyət ayının açıq və bağlı vəziyyətini, reviziyasını saxlayır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {
    "month": "2026-08"
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
    "month": "2026-08",
    "status": "closed",
    "revision": 1,
    "snapshot": null,
    "changes": [
      {
        "action": "close",
        "reason": null
      }
    ]
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · open və closed; close snapshot yaradır, reopen reviziyanı artırır və draft maaş hesabını silir.

### Ayı yenidən aç

**Endpoint** · `POST /api/v1/hr/periods/{month}/reopen`

Davamiyyət ayının açıq və bağlı vəziyyətini, reviziyasını saxlayır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {
    "month": "2026-08"
  },
  "query": {},
  "body": {
    "reason": "Davamiyyət düzəlişi"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "month": "2026-08",
    "status": "open",
    "revision": 2,
    "snapshot": null,
    "changes": [
      {
        "action": "close",
        "reason": null
      },
      {
        "action": "reopen",
        "reason": "Davamiyyət düzəlişi"
      }
    ]
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · open və closed; close snapshot yaradır, reopen reviziyanı artırır və draft maaş hesabını silir.
