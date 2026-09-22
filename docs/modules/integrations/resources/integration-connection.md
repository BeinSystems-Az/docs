---
sidebar_position: 4
title: Integration connection-ları
---

# Integration connection-ları

Integration connection-ları resursu inteqrasiyalar modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Integration connection-ları resursu inteqrasiyalar modulunda aid olduğu məlumat və əməliyyatları idarə edir. Client və connection konfiqurasiyadır; faktiki biznes təsiri connector-un icra etdiyi əməliyyatdan yaranır.

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
| `name` | string/null | İstifadəçiyə görünən addır. |
| `driver` | string/null | Resursun “driver” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `endpoint_url` | string/null | Resursun “endpoint url” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `signing_secret` | string/null | Resursun “signing secret” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |
| `connect_timeout_seconds` | number | Resursun “connect timeout seconds” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `timeout_seconds` | number | Resursun “timeout seconds” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `max_attempts` | number | Resursun “max attempts” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `created_by` | string/null | Resursun “created by” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Integration connection-ları siyahısını al

**Endpoint** · `GET /api/v1/integration-connections`

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
      "driver": "webhook",
      "endpoint_url": "https://example.test/webhook",
      "signing_secret": "synthetic-secret-value",
      "active": true,
      "connect_timeout_seconds": 1,
      "timeout_seconds": 1,
      "max_attempts": 1,
      "created_by": "Nümunə dəyər"
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Integration connection-ları qeydi yarat

**Endpoint** · `POST /api/v1/integration-connections`

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
    "endpoint_url": "https://example.test/webhook",
    "signing_secret": "synthetic-secret-value",
    "active": true,
    "connect_timeout_seconds": 1,
    "timeout_seconds": 1,
    "max_attempts": 1,
    "event_patterns": [
      "Nümunə dəyər"
    ]
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Webhook connection created. Copy the signing secret now.",
  "data": {
    "name": "Nümunə qeyd",
    "driver": "webhook",
    "endpoint_url": "https://example.test/webhook",
    "signing_secret": "synthetic-secret-value",
    "active": true,
    "connect_timeout_seconds": 1,
    "timeout_seconds": 1,
    "max_attempts": 1,
    "created_by": "Nümunə dəyər",
    "event_patterns": [
      "Nümunə dəyər"
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Integration connection-ları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Integration connection-ları qeydini sil

**Endpoint** · `DELETE /api/v1/integration-connections/{connection}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `integrations.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "connection": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Webhook connection archived.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Integration connection-ları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Integration connection-ları qeydini yenilə

**Endpoint** · `PATCH /api/v1/integration-connections/{connection}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `integrations.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "connection": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "endpoint_url": "https://example.test/webhook",
    "signing_secret": "synthetic-secret-value",
    "active": true,
    "connect_timeout_seconds": 1,
    "timeout_seconds": 1,
    "max_attempts": 1,
    "event_patterns": [
      "Nümunə dəyər"
    ]
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Webhook connection updated.",
  "data": {
    "name": "Nümunə qeyd",
    "driver": "webhook",
    "endpoint_url": "https://example.test/webhook",
    "signing_secret": "synthetic-secret-value",
    "active": true,
    "connect_timeout_seconds": 1,
    "timeout_seconds": 1,
    "max_attempts": 1,
    "created_by": "Nümunə dəyər",
    "event_patterns": [
      "Nümunə dəyər"
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Integration connection-ları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Integration connection-ları: secret-i rotasiya et

**Endpoint** · `POST /api/v1/integration-connections/{connection}/rotate-secret`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `integrations.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "connection": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Webhook signing secret rotated.",
  "data": {
    "name": "Nümunə qeyd",
    "driver": "webhook",
    "endpoint_url": "https://example.test/webhook",
    "signing_secret": "synthetic-secret-value",
    "active": true,
    "connect_timeout_seconds": 1,
    "timeout_seconds": 1,
    "max_attempts": 1,
    "created_by": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Integration connection-ları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Integration connection-ları: bağlantını test et

**Endpoint** · `POST /api/v1/integration-connections/{connection}/test`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `integrations.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "connection": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Test webhook queued.",
  "data": {
    "name": "Nümunə qeyd",
    "driver": "webhook",
    "endpoint_url": "https://example.test/webhook",
    "signing_secret": "synthetic-secret-value",
    "active": true,
    "connect_timeout_seconds": 1,
    "timeout_seconds": 1,
    "max_attempts": 1,
    "created_by": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Integration connection-ları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

