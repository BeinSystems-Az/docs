---
title: Davamiyyət qeydləri
---

# Davamiyyət qeydləri

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · uyğun resurs permission-ı
:::

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `employee_id` | UUID | Davamiyyəti olan Employee ID-si. |
| `work_date` | dəyər | Davamiyyət günü. |
| `status` | dəyər | present, absent və ya leave. |
| `note` | dəyər | Gün üzrə qeyd. |
| `changes` | dəyər | Detail cavabında dəyişiklik tarixçəsi. |

## Endpointlər

### Siyahını al

**Endpoint** · `GET /api/v1/hr/attendance`

Əməkdaşın gün üzrə davamiyyət statusunu saxlayır; əməkhaqqı hesabını özü yaratmır.

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

### Qeyd yarat

**Endpoint** · `POST /api/v1/hr/attendance`

Əməkdaşın gün üzrə davamiyyət statusunu saxlayır; əməkhaqqı hesabını özü yaratmır.

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
    "work_date": "2026-08-12",
    "status": "present"
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
    "work_date": "2026-08-12",
    "status": "present",
    "note": null
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · present, absent və leave statusları var. leave üçün təsdiqlənmiş icazə tələb olunur.

### Qeydi oxu

**Endpoint** · `GET /api/v1/hr/attendance/{attendanceEntry}`

Əməkdaşın gün üzrə davamiyyət statusunu saxlayır; əməkhaqqı hesabını özü yaratmır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {
    "attendanceEntry": "22222222-2222-4222-8222-222222222222"
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
    "employee_id": "33333333-3333-4333-8333-333333333333",
    "work_date": "2026-08-12",
    "status": "present",
    "note": null
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Yoxdur; məlumat oxunur.

### Qeydi yenilə

**Endpoint** · `PUT|PATCH /api/v1/hr/attendance/{attendanceEntry}`

Əməkdaşın gün üzrə davamiyyət statusunu saxlayır; əməkhaqqı hesabını özü yaratmır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {
    "attendanceEntry": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "status": "absent",
    "note": "Təsdiqlənmiş düzəliş"
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
    "work_date": "2026-08-12",
    "status": "absent",
    "note": "Təsdiqlənmiş düzəliş",
    "changes": []
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · present, absent və leave statusları var. leave üçün təsdiqlənmiş icazə tələb olunur.

### Aylıq CSV çıxar

**Endpoint** · `GET /api/v1/hr/attendance/export`

Əməkdaşın gün üzrə davamiyyət statusunu saxlayır; əməkhaqqı hesabını özü yaratmır.

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

**Response CSV · `200`**

```csv
Əməkdaş,Tarix,Status,Qeyd
Aysel Əliyeva,2026-08-12,present,
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Yoxdur; məlumat oxunur.
