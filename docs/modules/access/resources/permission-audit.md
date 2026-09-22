---
sidebar_position: 4
title: İcazə auditı
---

# İcazə auditı

İcazə auditı resursu istifadəçi və giriş modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** İcazə auditı resursu istifadəçi və giriş modulunda aid olduğu məlumat və əməliyyatları idarə edir. Giriş idarəetməsi hansı əməliyyatın görülə biləcəyini müəyyən edir; özü biznes sənədi yaratmır.

**İlkin şərtlər.** Tenant və idarəetmə səlahiyyətinə malik autentifikasiya konteksti olmalıdır.

**İş axını.** Tenant və filialı qurun, istifadəçi və rolları yaradın, permission və policy-ləri təyin edin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. İcazə və görünürlük dəyişir; stok və jurnal təsiri yoxdur, təhlükəsizlik audit izi yarana bilər.

**Əlaqəli resurslar.** Bütün modullar, audit və inteqrasiya client-ləri.

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
| `category` | string/null | Resursun “category” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `action` | string/null | Resursun “action” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `outcome` | string/null | Resursun “outcome” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `severity` | string/null | Resursun “severity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
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
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `actor_id` | UUID | Qeydi əlaqəli “actor” resursuna bağlayır. |

## Endpointlər

### İcazə auditı siyahısını al

**Endpoint** · `GET /api/v1/authorization/audit`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `authorization.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "subject_type": "role",
    "subject_id": "33333333-3333-4333-8333-333333333333",
    "per_page": 1,
    "include_snapshots": true
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
      "id": "22222222-2222-4222-8222-222222222222",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "auditable_type": "standard",
      "auditable_id": "33333333-3333-4333-8333-333333333333",
      "event": "Nümunə dəyər",
      "old_values": {},
      "new_values": {},
      "user_id": "33333333-3333-4333-8333-333333333333",
      "comment": "Sintetik yoxlama qeydi",
      "version": 1
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

