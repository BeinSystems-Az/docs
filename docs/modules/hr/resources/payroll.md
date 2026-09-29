---
title: Əməkhaqqı hesabı
---

# Əməkhaqqı hesabı

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · uyğun resurs permission-ı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Bağlanmış dövrün əməkdaşlar üzrə hesabını və düzəlişlərini saxlayır.

**İlkin şərtlər.** Bağlanmış HR dövrü və əməkhaqqı məlumatına tam icazə tələb olunur.

**İş axını.** Dövrü bağlayın, draft hesab yaradın, düzəliş edin, sonra təsdiqləyin.

**State-lər və biznes təsiri.** none, draft, approved; təsdiqdən sonra draft düzəlişi mümkün deyil.

**Əlaqəli resurslar.** HR dövrləri, əməkdaş tarifləri və vaxt qeydləri.

**Əsas məhdudiyyətlər.** Yalnız cari bağlı reviziyanın draft hesabı düzəldilə və təsdiqlənə bilər.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `month` | dəyər | Hesab ayı. |
| `status` | dəyər | none, draft və ya approved. |
| `lines` | dəyər | Əməkdaş üzrə hesab sətirləri. |
| `amount` | dəyər | Düzəliş məbləği. |
| `reason` | dəyər | Düzəliş səbəbi. |

## Endpointlər

### Maaş hesabını oxu

**Endpoint** · `GET /api/v1/hr/payroll/{month}`

Bağlanmış dövrün əməkdaşlar üzrə hesabını və düzəlişlərini saxlayır.

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
    "status": "draft",
    "approved_at": null,
    "lines": []
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Yoxdur; məlumat oxunur.

### Maaş hesabı yarat

**Endpoint** · `POST /api/v1/hr/payroll/{month}`

Bağlanmış dövrün əməkdaşlar üzrə hesabını və düzəlişlərini saxlayır.

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
    "status": "draft",
    "approved_at": null,
    "lines": []
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · none, draft, approved; təsdiqdən sonra draft düzəlişi mümkün deyil.

### Əməkdaş sətirini düzəlt

**Endpoint** · `POST /api/v1/hr/payroll/{month}/adjust`

Bağlanmış dövrün əməkdaşlar üzrə hesabını və düzəlişlərini saxlayır.

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
    "employee_id": "33333333-3333-4333-8333-333333333333",
    "amount": "50.00",
    "reason": "Təsdiqlənmiş əlavə"
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
    "status": "draft",
    "approved_at": null,
    "lines": []
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · none, draft, approved; təsdiqdən sonra draft düzəlişi mümkün deyil.

### Maaş hesabını təsdiqlə

**Endpoint** · `POST /api/v1/hr/payroll/{month}/approve`

Bağlanmış dövrün əməkdaşlar üzrə hesabını və düzəlişlərini saxlayır.

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
    "status": "approved",
    "approved_at": "2026-09-01T10:00:00+04:00",
    "lines": []
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · none, draft, approved; təsdiqdən sonra draft düzəlişi mümkün deyil.
