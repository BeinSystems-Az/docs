---
sidebar_position: 3
title: İstehsal sifarişləri
---

# İstehsal sifarişləri

İstehsal sifarişləri resursu istehsal modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `manufacturing_orders`, `manufacturing_cancellations`, `manufacturing_material_consumptions`, `manufacturing_outputs`, `manufacturing_reports`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** İstehsal sifarişləri resursu istehsal modulunda aid olduğu məlumat və əməliyyatları idarə edir. Master məlumatlar stok yaratmır; istehsal sifarişinin lifecycle action-ları material sərfi və hazır məhsul qəbuluna səbəb olur.

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
| `confirmed` | Təsdiqlənib | Öhdəlik və ya plan təsdiqlənib; faktiki nəticə növbəti icra/post addımından asılıdır. |
| `in_progress` | İcradadır | İş başladılıb, lakin hələ tamamlanmayıb. |
| `completed` | Tamamlanıb | İş axınının tələb olunan icrası yekunlaşıb. |
| `closed` | Bağlı | Əməliyyat tamamlanıb və yeni hərəkət qəbulu dayandırılıb. |
| `cancelled` | Ləğv edilib | Əməliyyat dayandırılıb; əvvəl yaranmış nəticələr domain qaydasına görə revers edilir. |

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `bom_id` | UUID | Qeydi əlaqəli “bom” resursuna bağlayır. |
| `stock_id` | UUID | Məhsul hərəkətinin aid olduğu anbarı müəyyən edir. |
| `source_location_id` | UUID | Qeydi əlaqəli “source location” resursuna bağlayır. |
| `destination_location_id` | UUID | Qeydi əlaqəli “destination location” resursuna bağlayır. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |
| `planned_quantity` | number | Resursun “planned quantity” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `planned_start_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `planned_end_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `actual_start_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `actual_end_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `actual_material_cost` | number | Resursun “actual material cost” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `closing_journal_entry_id` | UUID | Qeydi əlaqəli “closing journal entry” resursuna bağlayır. |
| `bom_snapshot` | array/object | Resursun “bom snapshot” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `routing_snapshot` | array/object | Resursun “routing snapshot” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `lock_version` | number | Resursun “lock version” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `note` | string/null | Əməliyyatla bağlı daxili qeyddir. |

## Endpointlər

### İstehsal sifarişləri siyahısını al

**Endpoint** · `GET /api/v1/manufacturing/orders`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `manufacturing_orders.read`

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
      "state": "draft",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "bom_id": "33333333-3333-4333-8333-333333333333",
      "stock_id": "33333333-3333-4333-8333-333333333333",
      "source_location_id": "33333333-3333-4333-8333-333333333333",
      "destination_location_id": "33333333-3333-4333-8333-333333333333",
      "planned_quantity": 1,
      "planned_start_at": "2026-09-22T10:30:00+04:00",
      "planned_end_at": "2026-09-22T10:30:00+04:00"
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

### İstehsal sifarişləri qeydi yarat

**Endpoint** · `POST /api/v1/manufacturing/orders`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_orders.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "name": "Nümunə qeyd",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22",
    "planned_end_at": "2026-09-22",
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İstehsal lifecycle-ından asılı olaraq material sərfi, hazır məhsul qəbulu və valuation nəticəsi yarana bilər.

### İstehsal sifarişləri qeydini sil

**Endpoint** · `DELETE /api/v1/manufacturing/orders/{order}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `manufacturing_orders.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "order": "22222222-2222-4222-8222-222222222222"
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

**Biznes təsiri** · İstehsal lifecycle-ından asılı olaraq material sərfi, hazır məhsul qəbulu və valuation nəticəsi yarana bilər.

### İstehsal sifarişləri qeydini oxu

**Endpoint** · `GET /api/v1/manufacturing/orders/{order}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `manufacturing_orders.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "order": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### İstehsal sifarişləri qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/manufacturing/orders/{order}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `manufacturing_orders.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "order": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_start_at": "2026-09-22",
    "planned_end_at": "2026-09-22",
    "note": "Sintetik nümunə məlumatı",
    "lock_version": 1
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İstehsal lifecycle-ından asılı olaraq material sərfi, hazır məhsul qəbulu və valuation nəticəsi yarana bilər.

### İstehsal sifarişləri: state keçidi et

**Endpoint** · `POST /api/v1/manufacturing/orders/{order}/cancel`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_cancellations.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "order": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · İstehsal lifecycle-ından asılı olaraq material sərfi, hazır məhsul qəbulu və valuation nəticəsi yarana bilər.

### İstehsal sifarişləri: state keçidi et

**Endpoint** · `POST /api/v1/manufacturing/orders/{order}/close`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_orders.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "order": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · İstehsal lifecycle-ından asılı olaraq material sərfi, hazır məhsul qəbulu və valuation nəticəsi yarana bilər.

### İstehsal sifarişləri: state keçidi et

**Endpoint** · `POST /api/v1/manufacturing/orders/{order}/complete`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_orders.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "order": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · İstehsal lifecycle-ından asılı olaraq material sərfi, hazır məhsul qəbulu və valuation nəticəsi yarana bilər.

### İstehsal sifarişləri: state keçidi et

**Endpoint** · `POST /api/v1/manufacturing/orders/{order}/confirm`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_orders.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "order": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · İstehsal lifecycle-ından asılı olaraq material sərfi, hazır məhsul qəbulu və valuation nəticəsi yarana bilər.

### İstehsal sifarişləri: material sərf et

**Endpoint** · `POST /api/v1/manufacturing/orders/{order}/consume`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_material_consumptions.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "order": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "material_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "quantity": 1,
    "effective_at": "2026-09-22",
    "allow_overconsumption": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İstehsal lifecycle-ından asılı olaraq material sərfi, hazır məhsul qəbulu və valuation nəticəsi yarana bilər.

### İstehsal sifarişləri: istehsal mərhələsini icra et

**Endpoint** · `POST /api/v1/manufacturing/orders/{order}/operations/{operation}/complete`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_orders.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "order": "22222222-2222-4222-8222-222222222222",
    "operation": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "produced_quantity": 1,
    "scrap_quantity": 1,
    "quality_result": "passed",
    "quality_note": "Nümunə dəyər",
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İstehsal lifecycle-ından asılı olaraq material sərfi, hazır məhsul qəbulu və valuation nəticəsi yarana bilər.

### İstehsal sifarişləri: istehsal mərhələsini icra et

**Endpoint** · `POST /api/v1/manufacturing/orders/{order}/operations/{operation}/pause`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_orders.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "order": "22222222-2222-4222-8222-222222222222",
    "operation": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "produced_quantity": 1,
    "scrap_quantity": 1,
    "quality_result": "passed",
    "quality_note": "Nümunə dəyər",
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İstehsal lifecycle-ından asılı olaraq material sərfi, hazır məhsul qəbulu və valuation nəticəsi yarana bilər.

### İstehsal sifarişləri: istehsal mərhələsini icra et

**Endpoint** · `POST /api/v1/manufacturing/orders/{order}/operations/{operation}/start`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_orders.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "order": "22222222-2222-4222-8222-222222222222",
    "operation": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "produced_quantity": 1,
    "scrap_quantity": 1,
    "quality_result": "passed",
    "quality_note": "Nümunə dəyər",
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İstehsal lifecycle-ından asılı olaraq material sərfi, hazır məhsul qəbulu və valuation nəticəsi yarana bilər.

### İstehsal sifarişləri: hazır məhsul istehsal et

**Endpoint** · `POST /api/v1/manufacturing/orders/{order}/produce`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_outputs.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "order": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "product_id": "33333333-3333-4333-8333-333333333333",
    "location_id": "33333333-3333-4333-8333-333333333333",
    "lot_id": "33333333-3333-4333-8333-333333333333",
    "quantity": 1,
    "effective_at": "2026-09-22"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İstehsal lifecycle-ından asılı olaraq material sərfi, hazır məhsul qəbulu və valuation nəticəsi yarana bilər.

### İstehsal sifarişləri: state keçidi et

**Endpoint** · `POST /api/v1/manufacturing/orders/{order}/start`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_orders.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "order": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · İstehsal lifecycle-ından asılı olaraq material sərfi, hazır məhsul qəbulu və valuation nəticəsi yarana bilər.

### İstehsal sifarişləri: maya dəyəri sorğusunu icra et

**Endpoint** · `GET /api/v1/manufacturing/reports/order-cost`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `manufacturing_reports.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "order_id": "33333333-3333-4333-8333-333333333333"
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
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### İstehsal sifarişləri: maya dəyərini al

**Endpoint** · `GET /api/v1/manufacturing/reports/order-cost/{order}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `manufacturing_reports.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "order": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### İstehsal sifarişləri: icra gedişini al

**Endpoint** · `GET /api/v1/manufacturing/reports/production-progress`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `manufacturing_reports.read`

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
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### İstehsal sifarişləri: izlənəbilənlik sorğusunu icra et

**Endpoint** · `GET /api/v1/manufacturing/reports/traceability`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `manufacturing_reports.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "order_id": "33333333-3333-4333-8333-333333333333"
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
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### İstehsal sifarişləri: izlənəbilənlik məlumatını al

**Endpoint** · `GET /api/v1/manufacturing/reports/traceability/{order}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `manufacturing_reports.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "order": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "bom_id": "33333333-3333-4333-8333-333333333333",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "source_location_id": "33333333-3333-4333-8333-333333333333",
    "destination_location_id": "33333333-3333-4333-8333-333333333333",
    "planned_quantity": 1,
    "planned_start_at": "2026-09-22T10:30:00+04:00",
    "planned_end_at": "2026-09-22T10:30:00+04:00",
    "actual_start_at": "2026-09-22T10:30:00+04:00",
    "actual_end_at": "2026-09-22T10:30:00+04:00",
    "actual_material_cost": 1,
    "closing_journal_entry_id": "33333333-3333-4333-8333-333333333333",
    "bom_snapshot": {},
    "routing_snapshot": {},
    "lock_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

