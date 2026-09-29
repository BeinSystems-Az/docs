---
title: Vəzifələr
---

# Vəzifələr

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · uyğun resurs permission-ı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** HR iş təyinatında istifadə olunan vəzifə master qeydlərini saxlayır.

**İlkin şərtlər.** HR modulu aktiv olmalıdır.

**İş axını.** Vəzifə yaradın, Employee iş dövrünə seçin, istifadə olunmayan vəzifəni arxivləşdirin.

**State-lər və biznes təsiri.** active görünürlük bayrağıdır; vəzifə özü maaş hesablamır.

**Əlaqəli resurslar.** Əməkdaşların iş təyinatları.

**Əsas məhdudiyyətlər.** İş tarixçəsində istifadə olunan vəzifə silinə bilməz; code unikal olmalıdır.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Vəzifə ID-si. |
| `name` | dəyər | Vəzifə adı. |
| `code` | dəyər | Unikal qısa kod. |
| `active` | dəyər | İstifadə vəziyyəti. |

## Endpointlər

### Vəzifələri siyahıla

**Endpoint** · `GET /api/v1/hr/jobs`

HR iş təyinatında istifadə olunan vəzifə master qeydlərini saxlayır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {},
  "query": {
    "active": true
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

### Vəzifə yarat

**Endpoint** · `POST /api/v1/hr/jobs`

HR iş təyinatında istifadə olunan vəzifə master qeydlərini saxlayır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {},
  "query": {},
  "body": {
    "name": "Mühasib",
    "code": "ACC",
    "active": true
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
    "name": "Mühasib",
    "code": "ACC",
    "active": true
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · active görünürlük bayrağıdır; vəzifə özü maaş hesablamır.

### Vəzifəni oxu

**Endpoint** · `GET /api/v1/hr/jobs/{job}`

HR iş təyinatında istifadə olunan vəzifə master qeydlərini saxlayır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {
    "job": "22222222-2222-4222-8222-222222222222"
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
    "name": "Mühasib",
    "code": "ACC",
    "active": true
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Yoxdur; məlumat oxunur.

### Vəzifəni yenilə

**Endpoint** · `PUT|PATCH /api/v1/hr/jobs/{job}`

HR iş təyinatında istifadə olunan vəzifə master qeydlərini saxlayır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {
    "job": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Baş mühasib",
    "code": "ACC"
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
    "name": "Baş mühasib",
    "code": "ACC",
    "active": true
  }
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · active görünürlük bayrağıdır; vəzifə özü maaş hesablamır.

### Vəzifəni arxivləşdir

**Endpoint** · `DELETE /api/v1/hr/jobs/{job}`

HR iş təyinatında istifadə olunan vəzifə master qeydlərini saxlayır.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer synthetic.jwt.token"
  },
  "path": {
    "job": "22222222-2222-4222-8222-222222222222"
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
  "data": null
}
```

**Xətalar** · `401/403` — giriş və ya icazə yoxdur; `404` — path-dəki qeyd tapılmır; `422` — input və ya domain qaydası pozulur.

**Biznes təsiri** · Qeyd arxivləşdirilir; stok və jurnal dəyişmir.
