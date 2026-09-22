---
sidebar_position: 2
title: CRM icmalı
---

# CRM icmalı

CRM icmalı resursu crm modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `crm_leads`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** CRM icmalı resursu crm modulunda aid olduğu məlumat və əməliyyatları idarə edir. CRM satış imkanının kommersiya tarixçəsini saxlayır; özü stok və mühasibat yazılışı yaratmır.

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
| `owner_user_id` | UUID | Qeydi əlaqəli “owner user” resursuna bağlayır. |
| `source_dashboard_id` | UUID | Qeydi əlaqəli “source dashboard” resursuna bağlayır. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `description` | string/null | Qeyd haqqında əlavə izahdır. |
| `kind` | string/null | Resursun “kind” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `visibility` | string/null | Resursun “visibility” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `default_filters` | string/null | Resursun “default filters” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `is_default` | boolean | Resursun “is default” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `revision` | string/null | Resursun “revision” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `pipeline_id` | UUID | Qeydi əlaqəli “pipeline” resursuna bağlayır. |
| `stage_id` | UUID | Qeydi əlaqəli “stage” resursuna bağlayır. |
| `partner_id` | UUID | Əməliyyatın aid olduğu müştəri və ya təchizatçını göstərir. |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `source_id` | UUID | Qeydi əlaqəli “source” resursuna bağlayır. |
| `currency_id` | UUID | Sənədin məbləğlərinin hesablandığı valyutanı seçir. |
| `expected_revenue` | number | Lead uğurla bağlanarsa gözlənən gəlir məbləğidir. |
| `probability` | number | Lead-in uğur ehtimalını 0–100 aralığında göstərir. |
| `expected_close_date` | date/null | Lead üçün planlaşdırılan bağlanma tarixidir. |
| `lost_reason_id` | UUID | Qeydi əlaqəli “lost reason” resursuna bağlayır. |
| `lost_note` | string/null | Lead-in itirilmə səbəbi haqqında əlavə izahdır. |
| `won_at` | datetime/null | Lead-in uğurlu bağlandığı vaxtdır. |
| `lost_at` | datetime/null | Lead-in itirilmiş kimi bağlandığı vaxtdır. |
| `closed_at` | datetime/null | Resursun bağlandığı vaxtdır. |
| `version` | number | Optimistic locking zamanı paralel dəyişikliyi aşkarlamaq üçün istifadə olunur. |
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `category` | string/null | Resursun “category” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `default_probability` | number | Resursun “default probability” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `color` | string/null | Resursun “color” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `sequence` | number | Siyahıda emal və görünmə ardıcıllığını müəyyən edir. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |
| `lead_id` | UUID | Qeydi əlaqəli “lead” resursuna bağlayır. |
| `assigned_user_id` | UUID | Qeydi əlaqəli “assigned user” resursuna bağlayır. |
| `created_by` | string/null | Resursun “created by” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `type` | string/null | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `subject` | string/null | Resursun “subject” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `priority` | number | Resursun “priority” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `scheduled_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `due_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `remind_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `completed_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `result` | string/null | Resursun “result” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `summary` | string/null | Resursun “summary” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `open_count` | number | Əlaqəli qeydlərin hesablanmış sayıdır. |
| `open_expected_revenue` | number | Resursun “open expected revenue” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `won_this_month` | string/null | Resursun “won this month” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `lost_this_month` | string/null | Resursun “lost this month” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `overdue_tasks` | string/null | Resursun “overdue tasks” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `today_tasks` | string/null | Resursun “today tasks” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `closing_next_7_days` | number | Resursun “closing next 7 days” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `leads_without_next_task` | string/null | Resursun “leads without next task” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `stages` | string/null | Resursun “stages” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `lead_count` | number | Əlaqəli qeydlərin hesablanmış sayıdır. |

## Endpointlər

### CRM icmalı: əməliyyatı icra et

**Endpoint** · `GET /api/v1/crm/dashboard`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `crm_leads.read`

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
    "id": "22222222-2222-4222-8222-222222222222",
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "status": "active",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "source_dashboard_id": "33333333-3333-4333-8333-333333333333",
    "description": "Sintetik nümunə məlumatı",
    "kind": "Nümunə dəyər",
    "visibility": "Nümunə dəyər",
    "default_filters": "Nümunə dəyər",
    "is_default": true,
    "revision": "Nümunə dəyər",
    "pipeline_id": "33333333-3333-4333-8333-333333333333",
    "stage_id": "33333333-3333-4333-8333-333333333333",
    "source_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

