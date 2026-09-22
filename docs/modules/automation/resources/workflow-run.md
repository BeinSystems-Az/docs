---
sidebar_position: 5
title: Workflow icra tarixçəsi
---

# Workflow icra tarixçəsi

Workflow icra tarixçəsi resursu workflow və avtomatlaşdırma modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Workflow icra tarixçəsi resursu workflow və avtomatlaşdırma modulunda aid olduğu məlumat və əməliyyatları idarə edir. Definition özü nəticə yaratmır; run və bulk action seçilən resursda dəyişiklik edə bilər.

**İlkin şərtlər.** Trigger, action kataloqu, icazələr və hədəf resurslar mövcud olmalıdır.

**İş axını.** Kataloqdan trigger/action seçin, workflow yaradın, run nəticələrini izləyin və uğursuz run-u retry edin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Seçilən action-dan asılıdır; hər run status və nəticə tarixçəsi saxlayır.

**Əlaqəli resurslar.** Bütün biznes modulları, audit və inteqrasiyalar.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `workflow_id` | UUID | Qeydi əlaqəli “workflow” resursuna bağlayır. |
| `event_id` | UUID | Qeydi əlaqəli “event” resursuna bağlayır. |
| `workflow_version` | number | Resursun “workflow version” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `definition_snapshot` | string/null | Resursun “definition snapshot” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `resource_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `resource_id` | UUID | Qeydi əlaqəli “resource” resursuna bağlayır. |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `correlation_id` | UUID | Qeydi əlaqəli “correlation” resursuna bağlayır. |
| `depth` | string/null | Resursun “depth” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `attempts` | string/null | Resursun “attempts” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `scheduled_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `started_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `completed_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `error_code` | string/null | Əlaqəli qeydin response-da göstərilən kodudur. |
| `last_error` | string/null | Resursun “last error” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Workflow icra tarixçəsi siyahısını al

**Endpoint** · `GET /api/v1/workflow-runs`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `workflows.view` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "workflow_id": "33333333-3333-4333-8333-333333333333",
    "status": "active",
    "per_page": 1
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
      "status": "active",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "workflow_id": "33333333-3333-4333-8333-333333333333",
      "event_id": "33333333-3333-4333-8333-333333333333",
      "workflow_version": 1,
      "definition_snapshot": "Nümunə dəyər",
      "resource_type": "sale_order",
      "resource_id": "33333333-3333-4333-8333-333333333333",
      "correlation_id": "33333333-3333-4333-8333-333333333333",
      "depth": "Nümunə dəyər"
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Workflow icra tarixçəsi qeydini oxu

**Endpoint** · `GET /api/v1/workflow-runs/{run}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `workflows.view` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "run": "22222222-2222-4222-8222-222222222222"
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
    "status": "active",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "workflow_id": "33333333-3333-4333-8333-333333333333",
    "event_id": "33333333-3333-4333-8333-333333333333",
    "workflow_version": 1,
    "definition_snapshot": "Nümunə dəyər",
    "resource_type": "sale_order",
    "resource_id": "33333333-3333-4333-8333-333333333333",
    "correlation_id": "33333333-3333-4333-8333-333333333333",
    "depth": "Nümunə dəyər",
    "attempts": "Nümunə dəyər",
    "scheduled_at": "2026-09-22T10:30:00+04:00",
    "started_at": "2026-09-22T10:30:00+04:00",
    "completed_at": "2026-09-22T10:30:00+04:00",
    "error_code": "Nümunə dəyər",
    "last_error": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Workflow icra tarixçəsi icrasını təkrarla

**Endpoint** · `POST /api/v1/workflow-runs/{run}/retry`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `workflows.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "run": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Workflow yenidən növbəyə əlavə edildi.",
  "data": {
    "status": "active",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "workflow_id": "33333333-3333-4333-8333-333333333333",
    "event_id": "33333333-3333-4333-8333-333333333333",
    "workflow_version": 1,
    "definition_snapshot": "Nümunə dəyər",
    "resource_type": "sale_order",
    "resource_id": "33333333-3333-4333-8333-333333333333",
    "correlation_id": "33333333-3333-4333-8333-333333333333",
    "depth": "Nümunə dəyər",
    "attempts": "Nümunə dəyər",
    "scheduled_at": "2026-09-22T10:30:00+04:00",
    "started_at": "2026-09-22T10:30:00+04:00",
    "completed_at": "2026-09-22T10:30:00+04:00",
    "error_code": "Nümunə dəyər",
    "last_error": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Workflow icra tarixçəsi konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

