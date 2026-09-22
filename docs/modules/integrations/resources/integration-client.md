---
sidebar_position: 3
title: Integration client-ləri
---

# Integration client-ləri

Integration client-ləri resursu inteqrasiyalar modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Integration client-ləri resursu inteqrasiyalar modulunda aid olduğu məlumat və əməliyyatları idarə edir. Client və connection konfiqurasiyadır; faktiki biznes təsiri connector-un icra etdiyi əməliyyatdan yaranır.

**İlkin şərtlər.** Connector kataloqu, credential və uyğun resource permission-ları mövcud olmalıdır.

**İş axını.** Client və ya connection yaradın, credential-i təhlükəsiz saxlayın, monitor və delivery nəticələrini izləyin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Konfiqurasiya özü stok/jurnal yaratmır; inteqrasiya çağırışı hədəf endpointin təsirini daşıyır.

**Əlaqəli resurslar.** Autentifikasiya, workflow, audit və bütün API resursları.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `tenant_id` | UUID | Qeydi əlaqəli “tenant” resursuna bağlayır. |
| `user_id` | UUID | Əməliyyatla əlaqəli istifadəçini göstərir. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `public_id` | UUID | Qeydi əlaqəli “public” resursuna bağlayır. |
| `secret_hash` | string/null | Resursun “secret hash” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `rate_limit_per_minute` | number | Resursun “rate limit per minute” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `last_used_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `expires_at` | date/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `revoked_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `created_by` | string/null | Resursun “created by” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Integration client-ləri siyahısını al

**Endpoint** · `GET /api/v1/integration-clients`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `integrations.view` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
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
      "name": "Nümunə qeyd",
      "tenant_id": "33333333-3333-4333-8333-333333333333",
      "user_id": "33333333-3333-4333-8333-333333333333",
      "public_id": "33333333-3333-4333-8333-333333333333",
      "secret_hash": "synthetic-secret-value",
      "rate_limit_per_minute": 1,
      "last_used_at": "2026-09-22T10:30:00+04:00",
      "expires_at": "2026-09-22",
      "revoked_at": "2026-09-22T10:30:00+04:00",
      "created_by": "Nümunə dəyər"
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Integration client-ləri qeydi yarat

**Endpoint** · `POST /api/v1/integration-clients`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `integrations.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "user_id": "33333333-3333-4333-8333-333333333333",
    "expires_at": "2026-09-22",
    "rate_limit_per_minute": 1
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Integration token created. Copy it now; it will not be shown again.",
  "data": {
    "name": "Nümunə qeyd",
    "tenant_id": "33333333-3333-4333-8333-333333333333",
    "user_id": "33333333-3333-4333-8333-333333333333",
    "public_id": "33333333-3333-4333-8333-333333333333",
    "secret_hash": "synthetic-secret-value",
    "rate_limit_per_minute": 1,
    "last_used_at": "2026-09-22T10:30:00+04:00",
    "expires_at": "2026-09-22",
    "revoked_at": "2026-09-22T10:30:00+04:00",
    "created_by": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Integration client-ləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Integration client-ləri qeydini yenilə

**Endpoint** · `PATCH /api/v1/integration-clients/{client}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `integrations.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "client": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "user_id": "33333333-3333-4333-8333-333333333333",
    "expires_at": "2026-09-22",
    "rate_limit_per_minute": 1
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Integration client updated.",
  "data": {
    "name": "Nümunə qeyd",
    "tenant_id": "33333333-3333-4333-8333-333333333333",
    "user_id": "33333333-3333-4333-8333-333333333333",
    "public_id": "33333333-3333-4333-8333-333333333333",
    "secret_hash": "synthetic-secret-value",
    "rate_limit_per_minute": 1,
    "last_used_at": "2026-09-22T10:30:00+04:00",
    "expires_at": "2026-09-22",
    "revoked_at": "2026-09-22T10:30:00+04:00",
    "created_by": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Integration client-ləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Integration client-ləri: ləğv et

**Endpoint** · `POST /api/v1/integration-clients/{client}/revoke`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `integrations.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "client": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Integration token revoked.",
  "data": {
    "name": "Nümunə qeyd",
    "tenant_id": "33333333-3333-4333-8333-333333333333",
    "user_id": "33333333-3333-4333-8333-333333333333",
    "public_id": "33333333-3333-4333-8333-333333333333",
    "secret_hash": "synthetic-secret-value",
    "rate_limit_per_minute": 1,
    "last_used_at": "2026-09-22T10:30:00+04:00",
    "expires_at": "2026-09-22",
    "revoked_at": "2026-09-22T10:30:00+04:00",
    "created_by": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Integration client-ləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Integration client-ləri: credential-i rotasiya et

**Endpoint** · `POST /api/v1/integration-clients/{client}/rotate`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `integrations.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "client": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Integration token rotated. Copy it now; the old token is invalid.",
  "data": {
    "name": "Nümunə qeyd",
    "tenant_id": "33333333-3333-4333-8333-333333333333",
    "user_id": "33333333-3333-4333-8333-333333333333",
    "public_id": "33333333-3333-4333-8333-333333333333",
    "secret_hash": "synthetic-secret-value",
    "rate_limit_per_minute": 1,
    "last_used_at": "2026-09-22T10:30:00+04:00",
    "expires_at": "2026-09-22",
    "revoked_at": "2026-09-22T10:30:00+04:00",
    "created_by": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Integration client-ləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Integration client-ləri: istifadəçiləri al

**Endpoint** · `GET /api/v1/integration-clients/users`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `integrations.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
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
  "data": {
    "name": "Nümunə qeyd",
    "tenant_id": "33333333-3333-4333-8333-333333333333",
    "user_id": "33333333-3333-4333-8333-333333333333",
    "public_id": "33333333-3333-4333-8333-333333333333",
    "secret_hash": "synthetic-secret-value",
    "rate_limit_per_minute": 1,
    "last_used_at": "2026-09-22T10:30:00+04:00",
    "expires_at": "2026-09-22",
    "revoked_at": "2026-09-22T10:30:00+04:00",
    "created_by": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

