---
title: İş qrafikləri
---

# İş qrafikləri

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · uyğun resurs permission-ı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Əməkdaşın tarixdən qüvvədə olan həftəlik saat planını saxlayır.

**İlkin şərtlər.** Employee və HR moduluna tam icazə tələb olunur.

**İş axını.** Mövcud versiyaları oxuyun, gün və saatları göstərən yeni versiya yazın.

**State-lər və biznes təsiri.** Qrafiklər effective_from tarixindən tətbiq olunur; bağlanmış aylara təsir edən versiya rədd edilir.

**Əlaqəli resurslar.** Əməkdaşlar, vaxt qeydləri və dövr hesablaması.

**Əsas məhdudiyyətlər.** Günlər 1–7 olmalı, saatlar HH:mm formatında və artan qaydada olmalıdır.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `employee_id` | UUID | Qrafikin Employee-si. |
| `effective_from` | dəyər | Qrafikin qüvvəyə minmə tarixi. |
| `days` | dəyər | Həftə günü üzrə iş və fasilə saatları. |

## Endpointlər

### Qrafikləri siyahıla

**Endpoint** · `GET /api/v1/hr/schedules`

Əməkdaşın tarixdən qüvvədə olan həftəlik saat planını saxlayır.

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

### Qrafik versiyası əlavə et

**Endpoint** · `POST /api/v1/hr/schedules`

Əməkdaşın tarixdən qüvvədə olan həftəlik saat planını saxlayır.

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
    "days": {
      "1": {
        "start": "09:00",
        "end": "18:00",
        "break_start": "13:00",
        "break_end": "14:00"
      }
    }
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
    "days": {
      "1": {
        "start": "09:00",
        "end": "18:00",
        "break_start": "13:00",
        "break_end": "14:00"
      }
    }
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Qrafiklər effective_from tarixindən tətbiq olunur; bağlanmış aylara təsir edən versiya rədd edilir.
