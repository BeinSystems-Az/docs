---
title: İcazə sorğuları
---

# İcazə sorğuları

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · uyğun resurs permission-ı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Employee üçün tarix aralığı üzrə icazə qərarını sənədləşdirir.

**İlkin şərtlər.** Employee mövcud olmalı, əl ilə sənəd yaradan User aktiv Employee-ə bağlanmalıdır.

**İş axını.** Sorğunu yaradın, pending vaxtı redaktə edin, səlahiyyətlə approved və ya rejected qərarı verin.

**State-lər və biznes təsiri.** pending, approved, rejected; approved günləri davamiyyətə leave kimi yazılır.

**Əlaqəli resurslar.** Əməkdaşlar və davamiyyət qeydləri.

**Əsas məhdudiyyətlər.** Eyni əməkdaş üçün rədd edilməmiş icazə tarixləri üst-üstə düşməz; qərardan sonra redaktə bloklanır.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Sorğu ID-si. |
| `employee_id` | UUID | İcazə alan Employee. |
| `user_id` | UUID | Dəyişməyən yaradan User. |
| `owner_id` | UUID | Cavabdeh Employee. |
| `type` | dəyər | leave, personal və ya sick. |
| `starts_on` | dəyər | Başlama günü. |
| `ends_on` | dəyər | Bitmə günü. |
| `status` | dəyər | Qərar statusu. |

## Endpointlər

### İcazələri siyahıla

**Endpoint** · `GET /api/v1/hr/leaves`

Employee üçün tarix aralığı üzrə icazə qərarını sənədləşdirir.

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

### İcazə sorğusu yarat

**Endpoint** · `POST /api/v1/hr/leaves`

Employee üçün tarix aralığı üzrə icazə qərarını sənədləşdirir.

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
    "type": "leave",
    "starts_on": "2026-11-01",
    "ends_on": "2026-11-03",
    "owner_id": "33333333-3333-4333-8333-333333333333"
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
    "user_id": "88888888-8888-4888-8888-888888888888",
    "owner_id": "33333333-3333-4333-8333-333333333333",
    "type": "leave",
    "starts_on": "2026-11-01",
    "ends_on": "2026-11-03",
    "status": "pending"
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · pending, approved, rejected; approved günləri davamiyyətə leave kimi yazılır.

### İcazəni oxu

**Endpoint** · `GET /api/v1/hr/leaves/{leaveRequest}`

Employee üçün tarix aralığı üzrə icazə qərarını sənədləşdirir.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {
    "leaveRequest": "22222222-2222-4222-8222-222222222222"
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
    "user_id": "88888888-8888-4888-8888-888888888888",
    "owner_id": "33333333-3333-4333-8333-333333333333",
    "type": "leave",
    "starts_on": "2026-11-01",
    "ends_on": "2026-11-03",
    "status": "pending"
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Yoxdur; məlumat oxunur.

### İcazəni yenilə və qərar ver

**Endpoint** · `PUT|PATCH /api/v1/hr/leaves/{leaveRequest}`

Employee üçün tarix aralığı üzrə icazə qərarını sənədləşdirir.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {
    "leaveRequest": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "status": "approved"
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
    "user_id": "88888888-8888-4888-8888-888888888888",
    "owner_id": "33333333-3333-4333-8333-333333333333",
    "type": "leave",
    "starts_on": "2026-11-01",
    "ends_on": "2026-11-03",
    "status": "approved"
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · pending, approved, rejected; approved günləri davamiyyətə leave kimi yazılır.
