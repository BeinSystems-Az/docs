---
title: Əməkhaqqı tarifləri
---

# Əməkhaqqı tarifləri

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · uyğun resurs permission-ı
:::

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `employee_id` | UUID | Tarifin Employee-si. |
| `effective_from` | dəyər | Qüvvəyə minmə günü. |
| `basis` | dəyər | monthly və ya hourly. |
| `amount` | dəyər | Müsbət tarif məbləği. |

## Endpointlər

### Tarifləri siyahıla

**Endpoint** · `GET /api/v1/hr/pay-rates`

Əməkdaşın qüvvəyə minən aylıq və ya saatlıq tariflərini saxlayır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {},
  "query": {
    "employee_id": "33333333-3333-4333-8333-333333333333"
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

### Tarif əlavə et

**Endpoint** · `POST /api/v1/hr/pay-rates`

Əməkdaşın qüvvəyə minən aylıq və ya saatlıq tariflərini saxlayır.

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
    "effective_from": "2026-08-01",
    "basis": "monthly",
    "amount": "1200.00"
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
    "effective_from": "2026-08-01",
    "basis": "monthly",
    "amount": "1200.00"
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Tarif versiyaları tarix üzrə qüvvədədir; keçmiş bağlı dövr dəyişdirilmir.
