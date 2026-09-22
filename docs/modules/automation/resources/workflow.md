---
sidebar_position: 4
title: Workflow-lar
---

# Workflow-lar

Workflow-lar resursu workflow və avtomatlaşdırma modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Workflow-lar resursu workflow və avtomatlaşdırma modulunda aid olduğu məlumat və əməliyyatları idarə edir. Definition özü nəticə yaratmır; run və bulk action seçilən resursda dəyişiklik edə bilər.

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
| `id` | UUID | Qeydin unikal identifikatorudur. |

## Endpointlər

### Workflow-lar siyahısını al

**Endpoint** · `GET /api/v1/workflows`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `workflows.view` global permission

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
      "id": "22222222-2222-4222-8222-222222222222"
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Workflow-lar qeydi yarat

**Endpoint** · `POST /api/v1/workflows`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `workflows.manage` global permission

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
    "description": "Sintetik nümunə məlumatı",
    "resource_type": "sale_order",
    "trigger_event": "created",
    "conditions": {},
    "actions": [
      {
        "type": "standard",
        "config": {},
        "continue_on_failure": true
      }
    ],
    "delay_seconds": 1,
    "active": true
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Workflow yaradıldı.",
  "data": {
    "name": "Nümunə qeyd",
    "description": "Sintetik nümunə məlumatı",
    "resource_type": "sale_order",
    "trigger_event": "created",
    "conditions": {},
    "actions": [
      {
        "type": "standard",
        "config": {},
        "continue_on_failure": true
      }
    ],
    "delay_seconds": 1,
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Workflow-lar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Workflow-lar qeydini sil

**Endpoint** · `DELETE /api/v1/workflows/{workflow}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `workflows.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "workflow": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Workflow arxivləşdirildi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Workflow-lar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Workflow-lar qeydini oxu

**Endpoint** · `GET /api/v1/workflows/{workflow}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `workflows.view` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "workflow": "22222222-2222-4222-8222-222222222222"
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
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Workflow-lar qeydini yenilə

**Endpoint** · `PUT /api/v1/workflows/{workflow}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `workflows.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "workflow": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "description": "Sintetik nümunə məlumatı",
    "resource_type": "sale_order",
    "trigger_event": "created",
    "conditions": {},
    "actions": [
      {
        "type": "standard",
        "config": {},
        "continue_on_failure": true
      }
    ],
    "delay_seconds": 1,
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Workflow yeniləndi.",
  "data": {
    "name": "Nümunə qeyd",
    "description": "Sintetik nümunə məlumatı",
    "resource_type": "sale_order",
    "trigger_event": "created",
    "conditions": {},
    "actions": [
      {
        "type": "standard",
        "config": {},
        "continue_on_failure": true
      }
    ],
    "delay_seconds": 1,
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Workflow-lar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

