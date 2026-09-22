---
sidebar_position: 4
title: İstehsal marşrutları
---

# İstehsal marşrutları

İstehsal marşrutları resursu istehsal modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `manufacturing_routings`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** İstehsal marşrutları resursu istehsal modulunda aid olduğu məlumat və əməliyyatları idarə edir. Master məlumatlar stok yaratmır; istehsal sifarişinin lifecycle action-ları material sərfi və hazır məhsul qəbuluna səbəb olur.

**İlkin şərtlər.** Komponent və hazır məhsullar, BOM, anbar/lokasiya və lazım olduqda routing və iş mərkəzləri mövcud olmalıdır.

**İş axını.** BOM və routing qurun, production order yaradın, təsdiqləyin, başladın, istehlakı qeyd edin və tamamlayın.

**State-lər və biznes təsiri.** İstehsalın icrası material stokunu azaldır, hazır məhsulu artırır və valuation nəticəsi yarada bilər.

**Əlaqəli resurslar.** Məhsullar, stok, iş mərkəzləri və mühasibatlıq.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.


| State | Mənası | Sistem təsiri |
| --- | --- | --- |
| `draft` | Qaralama | Redaktə edilə bilər; post edilmiş əməliyyat nəticəsi yoxdur. |
| `active` | Aktiv | Resurs istifadəyə açıqdır və yeni əməliyyatlarda seçilə bilər. |
| `archived` | Arxivlənib | Aktiv istifadədən çıxarılıb, tarixçə kimi saxlanılır. |

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `version` | number | Optimistic locking zamanı paralel dəyişikliyi aşkarlamaq üçün istifadə olunur. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |
| `effective_from` | datetime/null | Resursun “effective from” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `effective_to` | datetime/null | Resursun “effective to” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `lock_version` | number | Resursun “lock version” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### İstehsal marşrutları siyahısını al

**Endpoint** · `GET /api/v1/manufacturing/routings`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `manufacturing_routings.read`

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
      "code": "DEMO",
      "name": "Nümunə qeyd",
      "state": "draft",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "version": 1,
      "effective_from": "Nümunə dəyər",
      "effective_to": "Nümunə dəyər",
      "lock_version": 1
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

### İstehsal marşrutları qeydi yarat

**Endpoint** · `POST /api/v1/manufacturing/routings`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_routings.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "version": 1,
    "effective_from": "2026-09-22",
    "effective_to": "2026-09-22",
    "lock_version": 1,
    "operations": [
      {
        "work_center_id": "33333333-3333-4333-8333-333333333333",
        "sequence": 1,
        "code": "DEMO",
        "name": "Nümunə qeyd",
        "setup_minutes": 1,
        "run_minutes": 1,
        "queue_minutes": 1,
        "move_minutes": 1,
        "wait_minutes": 1,
        "labor_count": 1,
        "machine_count": 1,
        "planned_scrap_percent": 1,
        "required": true,
        "quality_check_required": true,
        "instructions": "Nümunə dəyər",
        "quality_instructions": "Nümunə dəyər",
        "document_name": "Nümunə dəyər",
        "document_url": "https://example.test/webhook"
      }
    ]
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "version": 1,
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "lock_version": 1,
    "operations": [
      {
        "labor_count": 1,
        "machine_count": 1,
        "planned_scrap_percent": 1,
        "required": true,
        "quality_check_required": true,
        "instructions": "Nümunə dəyər",
        "quality_instructions": "Nümunə dəyər",
        "document_name": "Nümunə dəyər",
        "document_url": "https://example.test/webhook",
        "work_center_id": "33333333-3333-4333-8333-333333333333",
        "sequence": 1,
        "code": "DEMO",
        "name": "Nümunə qeyd",
        "setup_minutes": 1,
        "run_minutes": 1,
        "queue_minutes": 1,
        "move_minutes": 1,
        "wait_minutes": 1
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İstehsal marşrutları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### İstehsal marşrutları qeydini sil

**Endpoint** · `DELETE /api/v1/manufacturing/routings/{routing}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `manufacturing_routings.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "routing": "22222222-2222-4222-8222-222222222222"
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

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · İstehsal marşrutları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### İstehsal marşrutları qeydini oxu

**Endpoint** · `GET /api/v1/manufacturing/routings/{routing}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `manufacturing_routings.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "routing": "22222222-2222-4222-8222-222222222222"
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
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "version": 1,
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "lock_version": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### İstehsal marşrutları qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/manufacturing/routings/{routing}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `manufacturing_routings.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "routing": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "version": 1,
    "effective_from": "2026-09-22",
    "effective_to": "2026-09-22",
    "lock_version": 1,
    "operations": [
      {
        "work_center_id": "33333333-3333-4333-8333-333333333333",
        "sequence": 1,
        "code": "DEMO",
        "name": "Nümunə qeyd",
        "setup_minutes": 1,
        "run_minutes": 1,
        "queue_minutes": 1,
        "move_minutes": 1,
        "wait_minutes": 1,
        "labor_count": 1,
        "machine_count": 1,
        "planned_scrap_percent": 1,
        "required": true,
        "quality_check_required": true,
        "instructions": "Nümunə dəyər",
        "quality_instructions": "Nümunə dəyər",
        "document_name": "Nümunə dəyər",
        "document_url": "https://example.test/webhook"
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
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "version": 1,
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "lock_version": 1,
    "operations": [
      {
        "labor_count": 1,
        "machine_count": 1,
        "planned_scrap_percent": 1,
        "required": true,
        "quality_check_required": true,
        "instructions": "Nümunə dəyər",
        "quality_instructions": "Nümunə dəyər",
        "document_name": "Nümunə dəyər",
        "document_url": "https://example.test/webhook",
        "work_center_id": "33333333-3333-4333-8333-333333333333",
        "sequence": 1,
        "code": "DEMO",
        "name": "Nümunə qeyd",
        "setup_minutes": 1,
        "run_minutes": 1,
        "queue_minutes": 1,
        "move_minutes": 1,
        "wait_minutes": 1
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İstehsal marşrutları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### İstehsal marşrutları: aktivləşdir

**Endpoint** · `POST /api/v1/manufacturing/routings/{routing}/activate`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_routings.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "routing": "22222222-2222-4222-8222-222222222222"
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
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "version": 1,
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "lock_version": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · İstehsal marşrutları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### İstehsal marşrutları: arxivləşdir

**Endpoint** · `POST /api/v1/manufacturing/routings/{routing}/archive`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_routings.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "routing": "22222222-2222-4222-8222-222222222222"
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
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "version": 1,
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "lock_version": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · İstehsal marşrutları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### İstehsal marşrutları: yeni versiya yarat

**Endpoint** · `POST /api/v1/manufacturing/routings/{routing}/new-version`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_routings.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "routing": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "version": 1,
    "effective_from": "Nümunə dəyər",
    "effective_to": "Nümunə dəyər",
    "lock_version": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · İstehsal marşrutları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

