---
sidebar_position: 2
title: Audit jurnalı
---

# Audit jurnalı

Audit jurnalı resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Audit jurnalı resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu resurslar UI və platform davranışını idarə edir; biznes sənədinin domain kontraktını əvəz etmir.

**İlkin şərtlər.** Endpointdən asılı olaraq tenant autentifikasiyası, istifadəçi və platform metadata-sı tələb olunur.

**İş axını.** Schema və metadata-nı oxuyun, istifadəçi seçimlərini saxlayın, audit və sistem vəziyyətini izləyin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Əsasən platform konfiqurasiyası və görünüş dəyişir; reset kimi inzibati əməliyyatlar ayrıca ciddi məhdudiyyət daşıyır.

**Əlaqəli resurslar.** Autentifikasiya, bütün biznes modulları və audit.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `auditable_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `auditable_id` | UUID | Qeydi əlaqəli “auditable” resursuna bağlayır. |
| `event` | string/null | Resursun “event” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `old_values` | array/object | Resursun “old values” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `new_values` | array/object | Resursun “new values” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `user_id` | UUID | Əməliyyatla əlaqəli istifadəçini göstərir. |
| `comment` | string/null | Resursun “comment” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `version` | number | Optimistic locking zamanı paralel dəyişikliyi aşkarlamaq üçün istifadə olunur. |
| `category` | enum/string | Resursun “category” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `action` | string/null | Resursun “action” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `outcome` | enum/string | Resursun “outcome” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `severity` | enum/string | Resursun “severity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `actor_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `actor_snapshot` | array/object | Resursun “actor snapshot” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `target_label` | string/null | Resursun “target label” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `message_key` | string/null | Resursun “message key” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `message_text` | string/null | Resursun “message text” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `message_parameters` | array/object | Resursun “message parameters” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `request_id` | UUID | Qeydi əlaqəli “request” resursuna bağlayır. |
| `session_trace_id` | UUID | Qeydi əlaqəli “session trace” resursuna bağlayır. |
| `client_step_id` | number | Qeydi əlaqəli “client step” resursuna bağlayır. |
| `client_event_id` | UUID | Qeydi əlaqəli “client event” resursuna bağlayır. |
| `route_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `http_method` | string/null | Resursun “http method” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `http_status` | number | Resursun “http status” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `error_id` | UUID | Qeydi əlaqəli “error” resursuna bağlayır. |
| `error_code` | string/null | Əlaqəli qeydin response-da göstərilən kodudur. |
| `failed_stage` | string/null | Resursun “failed stage” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `request_snapshot` | array/object | Resursun “request snapshot” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `response_snapshot` | array/object | Resursun “response snapshot” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `diagnostic_context` | array/object | Resursun “diagnostic context” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `duration_ms` | number | Resursun “duration ms” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `created_at` | datetime/null | Qeydin yaradılma vaxtıdır. |
| `accepted` | string/null | Resursun “accepted” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Audit jurnalı siyahısını al

**Endpoint** · `GET /api/v1/audit-logs`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `audit.view` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "auditable_type": "standard",
    "auditable_id": "33333333-3333-4333-8333-333333333333",
    "event": "Nümunə dəyər",
    "action": "read",
    "user_id": "33333333-3333-4333-8333-333333333333",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "request_id": "33333333-3333-4333-8333-333333333333",
    "session_trace_id": "33333333-3333-4333-8333-333333333333",
    "error_id": "33333333-3333-4333-8333-333333333333",
    "category": "data",
    "outcome": "success",
    "severity": "info",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "q": 1
  },
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
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "auditable_type": "standard",
      "auditable_id": "33333333-3333-4333-8333-333333333333",
      "event": "Nümunə dəyər",
      "old_values": {},
      "new_values": {},
      "user_id": "33333333-3333-4333-8333-333333333333",
      "comment": "Sintetik yoxlama qeydi",
      "version": 1,
      "category": "data"
    }
  ],
  "links": {
    "first": "https://erp.example.test/api/v1/resource?page=1",
    "last": "https://erp.example.test/api/v1/resource?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "per_page": 20,
    "to": 1,
    "total": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Audit jurnalı qeydini oxu

**Endpoint** · `GET /api/v1/audit-logs/{auditLog}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `audit.view` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "auditLog": "22222222-2222-4222-8222-222222222222"
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
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "auditable_type": "standard",
    "auditable_id": "33333333-3333-4333-8333-333333333333",
    "event": "Nümunə dəyər",
    "old_values": {},
    "new_values": {},
    "user_id": "33333333-3333-4333-8333-333333333333",
    "comment": "Sintetik yoxlama qeydi",
    "version": 1,
    "category": "data",
    "action": "read",
    "outcome": "success",
    "severity": "info",
    "actor_type": "standard",
    "actor_snapshot": {},
    "target_label": "Nümunə dəyər",
    "message_key": "Nümunə dəyər",
    "message_text": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Audit jurnalı məlumatını ixrac et

**Endpoint** · `GET /api/v1/audit-logs/export`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `audit.export` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "auditable_type": "standard",
    "auditable_id": "33333333-3333-4333-8333-333333333333",
    "event": "Nümunə dəyər",
    "action": "read",
    "user_id": "33333333-3333-4333-8333-333333333333",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "request_id": "33333333-3333-4333-8333-333333333333",
    "session_trace_id": "33333333-3333-4333-8333-333333333333",
    "error_id": "33333333-3333-4333-8333-333333333333",
    "category": "data",
    "outcome": "success",
    "severity": "info",
    "date_from": "2026-09-22",
    "date_to": "2026-09-22",
    "q": 1
  },
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "auditable_type": "standard",
    "auditable_id": "33333333-3333-4333-8333-333333333333",
    "event": "Nümunə dəyər",
    "old_values": {},
    "new_values": {},
    "user_id": "33333333-3333-4333-8333-333333333333",
    "comment": "Sintetik yoxlama qeydi",
    "version": 1,
    "category": "data",
    "action": "read",
    "outcome": "success",
    "severity": "info",
    "actor_type": "standard",
    "actor_snapshot": {},
    "target_label": "Nümunə dəyər",
    "message_key": "Nümunə dəyər",
    "message_text": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Audit jurnalı: seçimləri al

**Endpoint** · `GET /api/v1/audit-logs/options`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `audit.view` global permission

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
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "auditable_type": "standard",
    "auditable_id": "33333333-3333-4333-8333-333333333333",
    "event": "Nümunə dəyər",
    "old_values": {},
    "new_values": {},
    "user_id": "33333333-3333-4333-8333-333333333333",
    "comment": "Sintetik yoxlama qeydi",
    "version": 1,
    "category": "data",
    "action": "read",
    "outcome": "success",
    "severity": "info",
    "actor_type": "standard",
    "actor_snapshot": {},
    "target_label": "Nümunə dəyər",
    "message_key": "Nümunə dəyər",
    "message_text": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Audit jurnalı: client hadisələrini yaz

**Endpoint** · `POST /api/v1/audit/client-events`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · Ayrıca resource permission tələb etmir.

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "events": [
      {
        "id": "33333333-3333-4333-8333-333333333333",
        "type": "page_view",
        "session_trace_id": "33333333-3333-4333-8333-333333333333",
        "step_id": 1,
        "route": "Nümunə dəyər",
        "label": "Nümunə etiket",
        "component": "Nümunə dəyər",
        "build_version": 1,
        "error_code": "Nümunə dəyər",
        "error_fingerprint": "Nümunə dəyər",
        "fields": {}
      }
    ]
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "auditable_type": "standard",
    "auditable_id": "33333333-3333-4333-8333-333333333333",
    "event": "Nümunə dəyər",
    "old_values": {},
    "new_values": {},
    "user_id": "33333333-3333-4333-8333-333333333333",
    "comment": "Sintetik yoxlama qeydi",
    "version": 1,
    "category": "data",
    "action": "read",
    "outcome": "success",
    "severity": "info",
    "actor_type": "standard",
    "actor_snapshot": {},
    "target_label": "Nümunə dəyər",
    "message_key": "Nümunə dəyər",
    "message_text": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Audit jurnalı konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

