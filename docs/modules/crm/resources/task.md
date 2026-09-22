---
sidebar_position: 8
title: CRM tapşırıqları
---

# CRM tapşırıqları

Lead ilə bağlı zəng, görüş və digər izləmə tapşırıqlarını saxlayır.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `crm_tasks`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Lead ilə bağlı zəng, görüş və digər izləmə tapşırıqlarını saxlayır. CRM satış imkanının kommersiya tarixçəsini saxlayır; özü stok və mühasibat yazılışı yaratmır.

**İlkin şərtlər.** Pipeline və mərhələlər, məsul istifadəçi, filial və müştəri/tərəfdaş məlumatı hazırlanmalıdır.

**İş axını.** Pipeline və mərhələləri qurun, lead yaradın, tapşırıqlarla izləyin və uyğun olduqda satış sifarişinə keçirin.

**State-lər və biznes təsiri.** Lead və task dəyişiklikləri CRM vəziyyətini yeniləyir; stok və jurnal təsiri yoxdur.

**Əlaqəli resurslar.** Tərəfdaşlar, istifadəçilər, filiallar və satış sifarişləri.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.


| State | Mənası | Sistem təsiri |
| --- | --- | --- |
| `planned` | planned | Keçid backend domain qaydaları ilə idarə edilir; təsir uyğun endpoint blokunda göstərilir. |
| `in_progress` | İcradadır | İş başladılıb, lakin hələ tamamlanmayıb. |
| `completed` | Tamamlanıb | İş axınının tələb olunan icrası yekunlaşıb. |
| `cancelled` | Ləğv edilib | Əməliyyat dayandırılıb; əvvəl yaranmış nəticələr domain qaydasına görə revers edilir. |

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `lead_id` | UUID | Qeydi əlaqəli “lead” resursuna bağlayır. |
| `assigned_user_id` | UUID | Qeydi əlaqəli “assigned user” resursuna bağlayır. |
| `created_by` | string/null | Resursun “created by” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `subject` | string/null | Resursun “subject” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `description` | string/null | Qeyd haqqında əlavə izahdır. |
| `priority` | enum/string | Resursun “priority” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `scheduled_at` | date/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `due_at` | date/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `remind_at` | date/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `completed_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `result` | string/null | Resursun “result” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `version` | number | Optimistic locking zamanı paralel dəyişikliyi aşkarlamaq üçün istifadə olunur. |
| `lead_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `partner_id` | UUID | Əməliyyatın aid olduğu müştəri və ya təchizatçını göstərir. |
| `partner_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `assigned_user_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `created_by_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `branch_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `is_overdue` | boolean | Resursun “is overdue” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `created_at` | datetime/null | Qeydin yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Qeydin son dəyişdirilmə vaxtıdır. |
| `id` | UUID | Qeydin unikal identifikatorudur. |

## Endpointlər

### CRM tapşırıqları siyahısını al

**Endpoint** · `GET /api/v1/crm/tasks`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `crm_tasks.read`

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
      "id": "22222222-2222-4222-8222-222222222222",
      "status": "active",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "partner_id": "33333333-3333-4333-8333-333333333333",
      "lead_id": "33333333-3333-4333-8333-333333333333",
      "assigned_user_id": "33333333-3333-4333-8333-333333333333",
      "created_by": "Nümunə dəyər",
      "type": "call",
      "subject": "Müştəri ilə əlaqə",
      "description": "Sintetik nümunə məlumatı"
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

### CRM tapşırıqları qeydi yarat

**Endpoint** · `POST /api/v1/crm/tasks`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `crm_tasks.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "lead_id": "33333333-3333-4333-8333-333333333333",
    "assigned_user_id": "33333333-3333-4333-8333-333333333333",
    "type": "call",
    "subject": "Müştəri ilə əlaqə",
    "description": "Sintetik nümunə məlumatı",
    "priority": "low",
    "status": "active",
    "scheduled_at": "2026-09-22",
    "due_at": "2026-09-22",
    "remind_at": "2026-09-22",
    "result": "Əməliyyat uğurla tamamlandı",
    "version": 1
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Tapşırıq yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "status": "active",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "lead_id": "33333333-3333-4333-8333-333333333333",
    "assigned_user_id": "33333333-3333-4333-8333-333333333333",
    "created_by": "Nümunə dəyər",
    "type": "call",
    "subject": "Müştəri ilə əlaqə",
    "description": "Sintetik nümunə məlumatı",
    "priority": "low",
    "scheduled_at": "2026-09-22",
    "due_at": "2026-09-22",
    "remind_at": "2026-09-22",
    "completed_at": "2026-09-22T10:30:00+04:00",
    "result": "Əməliyyat uğurla tamamlandı",
    "version": 1,
    "lead_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · CRM qeydi və əlaqəli fəaliyyət tarixçəsi dəyişir; stok və jurnal nəticəsi yaranmır.

### CRM tapşırıqları qeydini sil

**Endpoint** · `DELETE /api/v1/crm/tasks/{task}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `crm_tasks.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "task": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Tapşırıq arxivləşdirildi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · CRM qeydi və əlaqəli fəaliyyət tarixçəsi dəyişir; stok və jurnal nəticəsi yaranmır.

### CRM tapşırıqları qeydini oxu

**Endpoint** · `GET /api/v1/crm/tasks/{task}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `crm_tasks.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "task": "22222222-2222-4222-8222-222222222222"
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
    "status": "active",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "lead_id": "33333333-3333-4333-8333-333333333333",
    "assigned_user_id": "33333333-3333-4333-8333-333333333333",
    "created_by": "Nümunə dəyər",
    "type": "call",
    "subject": "Müştəri ilə əlaqə",
    "description": "Sintetik nümunə məlumatı",
    "priority": "low",
    "scheduled_at": "2026-09-22",
    "due_at": "2026-09-22",
    "remind_at": "2026-09-22",
    "completed_at": "2026-09-22T10:30:00+04:00",
    "result": "Əməliyyat uğurla tamamlandı",
    "version": 1,
    "lead_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### CRM tapşırıqları qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/crm/tasks/{task}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `crm_tasks.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "task": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "lead_id": "33333333-3333-4333-8333-333333333333",
    "assigned_user_id": "33333333-3333-4333-8333-333333333333",
    "type": "call",
    "subject": "Müştəri ilə əlaqə",
    "description": "Sintetik nümunə məlumatı",
    "priority": "low",
    "status": "active",
    "scheduled_at": "2026-09-22",
    "due_at": "2026-09-22",
    "remind_at": "2026-09-22",
    "result": "Əməliyyat uğurla tamamlandı",
    "version": 1
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Tapşırıq yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "status": "active",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "lead_id": "33333333-3333-4333-8333-333333333333",
    "assigned_user_id": "33333333-3333-4333-8333-333333333333",
    "created_by": "Nümunə dəyər",
    "type": "call",
    "subject": "Müştəri ilə əlaqə",
    "description": "Sintetik nümunə məlumatı",
    "priority": "low",
    "scheduled_at": "2026-09-22",
    "due_at": "2026-09-22",
    "remind_at": "2026-09-22",
    "completed_at": "2026-09-22T10:30:00+04:00",
    "result": "Əməliyyat uğurla tamamlandı",
    "version": 1,
    "lead_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · CRM qeydi və əlaqəli fəaliyyət tarixçəsi dəyişir; stok və jurnal nəticəsi yaranmır.

