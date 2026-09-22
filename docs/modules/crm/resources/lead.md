---
sidebar_position: 3
title: Lead-lər
---

# Lead-lər

Potensial satış imkanını, gözlənən gəliri, ehtimalı, məsul şəxsi və pipeline mərhələsini saxlayır.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `crm_leads`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Potensial satış imkanını, gözlənən gəliri, ehtimalı, məsul şəxsi və pipeline mərhələsini saxlayır. CRM satış imkanının kommersiya tarixçəsini saxlayır; özü stok və mühasibat yazılışı yaratmır.

**İlkin şərtlər.** Pipeline və mərhələlər, məsul istifadəçi, filial və müştəri/tərəfdaş məlumatı hazırlanmalıdır.

**İş axını.** Pipeline və mərhələləri qurun, lead yaradın, tapşırıqlarla izləyin və uyğun olduqda satış sifarişinə keçirin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Lead və task dəyişiklikləri CRM vəziyyətini yeniləyir; stok və jurnal təsiri yoxdur.

**Əlaqəli resurslar.** Tərəfdaşlar, istifadəçilər, filiallar və satış sifarişləri.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `pipeline_id` | UUID | Qeydi əlaqəli “pipeline” resursuna bağlayır. |
| `stage_id` | UUID | Qeydi əlaqəli “stage” resursuna bağlayır. |
| `partner_id` | UUID | Əməliyyatın aid olduğu müştəri və ya təchizatçını göstərir. |
| `owner_user_id` | UUID | Qeydi əlaqəli “owner user” resursuna bağlayır. |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `source_id` | UUID | Qeydi əlaqəli “source” resursuna bağlayır. |
| `currency_id` | UUID | Sənədin məbləğlərinin hesablandığı valyutanı seçir. |
| `expected_revenue` | number | Lead uğurla bağlanarsa gözlənən gəlir məbləğidir. |
| `probability` | number | Lead-in uğur ehtimalını 0–100 aralığında göstərir. |
| `expected_close_date` | date/null | Lead üçün planlaşdırılan bağlanma tarixidir. |
| `description` | string/null | Qeyd haqqında əlavə izahdır. |
| `lost_reason_id` | UUID | Qeydi əlaqəli “lost reason” resursuna bağlayır. |
| `lost_note` | string/null | Lead-in itirilmə səbəbi haqqında əlavə izahdır. |
| `won_at` | datetime/null | Lead-in uğurlu bağlandığı vaxtdır. |
| `lost_at` | datetime/null | Lead-in itirilmiş kimi bağlandığı vaxtdır. |
| `closed_at` | datetime/null | Resursun bağlandığı vaxtdır. |
| `version` | number | Optimistic locking zamanı paralel dəyişikliyi aşkarlamaq üçün istifadə olunur. |
| `pipeline_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `stage_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `stage_category` | string/null | Resursun “stage category” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `stage_color` | string/null | Resursun “stage color” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `partner_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `commercial_partner_id` | UUID | Qeydi əlaqəli “commercial partner” resursuna bağlayır. |
| `commercial_partner_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `owner_user_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `branch_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `source_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `currency_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `currency_code` | string/null | Əlaqəli qeydin response-da göstərilən kodudur. |
| `lost_reason_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `tasks_count` | number | Əlaqəli qeydlərin hesablanmış sayıdır. |
| `sale_orders_count` | number | Əlaqəli qeydlərin hesablanmış sayıdır. |
| `created_at` | datetime/null | Qeydin yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Qeydin son dəyişdirilmə vaxtıdır. |
| `id` | UUID | Qeydin unikal identifikatorudur. |

## Endpointlər

### Lead-lər siyahısını al

**Endpoint** · `GET /api/v1/crm/leads`

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
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "Nümunə qeyd",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "partner_id": "33333333-3333-4333-8333-333333333333",
      "currency_id": "33333333-3333-4333-8333-333333333333",
      "pipeline_id": "33333333-3333-4333-8333-333333333333",
      "stage_id": "33333333-3333-4333-8333-333333333333",
      "owner_user_id": "33333333-3333-4333-8333-333333333333",
      "source_id": "33333333-3333-4333-8333-333333333333",
      "expected_revenue": 1
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

### Lead-lər qeydi yarat

**Endpoint** · `POST /api/v1/crm/leads`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `crm_leads.create`

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
    "pipeline_id": "33333333-3333-4333-8333-333333333333",
    "stage_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "expected_revenue": 1,
    "probability": 1,
    "expected_close_date": "2026-09-22",
    "description": "Sintetik nümunə məlumatı",
    "lost_reason_id": "33333333-3333-4333-8333-333333333333",
    "lost_note": "Nümunə dəyər",
    "version": 1
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Lid yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "pipeline_id": "33333333-3333-4333-8333-333333333333",
    "stage_id": "33333333-3333-4333-8333-333333333333",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "expected_revenue": 1,
    "probability": 1,
    "expected_close_date": "2026-09-22",
    "description": "Sintetik nümunə məlumatı",
    "lost_reason_id": "33333333-3333-4333-8333-333333333333",
    "lost_note": "Nümunə dəyər",
    "won_at": "2026-09-22T10:30:00+04:00",
    "lost_at": "2026-09-22T10:30:00+04:00",
    "closed_at": "2026-09-22T10:30:00+04:00"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · CRM qeydi və əlaqəli fəaliyyət tarixçəsi dəyişir; stok və jurnal nəticəsi yaranmır.

### Lead-lər qeydini sil

**Endpoint** · `DELETE /api/v1/crm/leads/{lead}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `crm_leads.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "lead": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Lid arxivləşdirildi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · CRM qeydi və əlaqəli fəaliyyət tarixçəsi dəyişir; stok və jurnal nəticəsi yaranmır.

### Lead-lər qeydini oxu

**Endpoint** · `GET /api/v1/crm/leads/{lead}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `crm_leads.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "lead": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "pipeline_id": "33333333-3333-4333-8333-333333333333",
    "stage_id": "33333333-3333-4333-8333-333333333333",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "expected_revenue": 1,
    "probability": 1,
    "expected_close_date": "2026-09-22",
    "description": "Sintetik nümunə məlumatı",
    "lost_reason_id": "33333333-3333-4333-8333-333333333333",
    "lost_note": "Nümunə dəyər",
    "won_at": "2026-09-22T10:30:00+04:00",
    "lost_at": "2026-09-22T10:30:00+04:00",
    "closed_at": "2026-09-22T10:30:00+04:00"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Lead-lər qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/crm/leads/{lead}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `crm_leads.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "lead": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "pipeline_id": "33333333-3333-4333-8333-333333333333",
    "stage_id": "33333333-3333-4333-8333-333333333333",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "expected_revenue": 1,
    "probability": 1,
    "expected_close_date": "2026-09-22",
    "description": "Sintetik nümunə məlumatı",
    "lost_reason_id": "33333333-3333-4333-8333-333333333333",
    "lost_note": "Nümunə dəyər",
    "version": 1
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Lid yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "pipeline_id": "33333333-3333-4333-8333-333333333333",
    "stage_id": "33333333-3333-4333-8333-333333333333",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "expected_revenue": 1,
    "probability": 1,
    "expected_close_date": "2026-09-22",
    "description": "Sintetik nümunə məlumatı",
    "lost_reason_id": "33333333-3333-4333-8333-333333333333",
    "lost_note": "Nümunə dəyər",
    "won_at": "2026-09-22T10:30:00+04:00",
    "lost_at": "2026-09-22T10:30:00+04:00",
    "closed_at": "2026-09-22T10:30:00+04:00"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · CRM qeydi və əlaqəli fəaliyyət tarixçəsi dəyişir; stok və jurnal nəticəsi yaranmır.

