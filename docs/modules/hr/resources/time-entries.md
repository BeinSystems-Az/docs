---
title: İş vaxtı qeydləri
---

# İş vaxtı qeydləri

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · uyğun resurs permission-ı
:::

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `employee_id` | UUID | Vaxt qeydinin Employee-si. |
| `clock_in_at` | dəyər | Giriş vaxtı. |
| `clock_out_at` | dəyər | Çıxış vaxtı. |
| `replaces_id` | UUID | Əvəz olunan əvvəlki qeyd. |
| `reason` | dəyər | Düzəliş səbəbi. |

## Endpointlər

### Ayın vaxt qeydlərini al

**Endpoint** · `GET /api/v1/hr/time-entries`

Əməkdaşın giriş və çıxış saatlarını qeydə alır; əməkhaqqı təsdiqi yaratmır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {},
  "query": {
    "month": "2026-08"
  },
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": []
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Yoxdur; məlumat oxunur.

### Vaxt qeydi yaz

**Endpoint** · `POST /api/v1/hr/time-entries`

Əməkdaşın giriş və çıxış saatlarını qeydə alır; əməkhaqqı təsdiqi yaratmır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {},
  "query": {},
  "body": {
    "employee_id": "33333333-3333-4333-8333-333333333333",
    "clock_in_at": "2026-08-12T09:00:00+04:00",
    "clock_out_at": "2026-08-12T18:00:00+04:00"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "employee_id": "33333333-3333-4333-8333-333333333333",
    "clock_in_at": "2026-08-12T09:00:00Z",
    "clock_out_at": "2026-08-12T18:00:00Z",
    "source": "manual",
    "replaces_id": null
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Aktiv qeyd düzəliş zamanı əvəz olunur; bağlı ayda yazı bloklanır.
