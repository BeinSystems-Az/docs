---
sidebar_position: 2
title: Toplu əməliyyatlar
---

# Toplu əməliyyatlar

Toplu əməliyyatlar resursu workflow və avtomatlaşdırma modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · `{documentType}`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Toplu əməliyyatlar resursu workflow və avtomatlaşdırma modulunda aid olduğu məlumat və əməliyyatları idarə edir. Definition özü nəticə yaratmır; run və bulk action seçilən resursda dəyişiklik edə bilər.

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
| `document_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `actions` | string/null | Resursun “actions” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `ids` | array/object | Resursun “ids” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `ids[]` | UUID | Massiv elementində “ids” dəyərini saxlayır. |
| `action` | string/null | Resursun “action” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `params` | array/object | Resursun “params” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `success_count` | number | Əlaqəli qeydlərin hesablanmış sayıdır. |
| `failed_count` | number | Əlaqəli qeydlərin hesablanmış sayıdır. |
| `total` | number | Resursun “total” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `fields` | array/object | Resursun “fields” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Toplu əməliyyatlar: mümkün action-ları al

**Endpoint** · `GET /api/v1/bulk/{documentType}/actions`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `{documentType}.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "documentType": "22222222-2222-4222-8222-222222222222"
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
    "document_type": "sale_receipt",
    "actions": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Toplu əməliyyatlar: toplu action icra et

**Endpoint** · `POST /api/v1/bulk/{documentType}/actions`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `{documentType}.__bulk_operation__`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "documentType": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "ids": [
      "33333333-3333-4333-8333-333333333333"
    ],
    "action": "read",
    "params": {}
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "success_count": "Nümunə dəyər",
    "failed_count": "Nümunə dəyər",
    "total": 100,
    "message": "Nümunə dəyər",
    "ids": [
      "33333333-3333-4333-8333-333333333333"
    ],
    "action": "read",
    "params": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Toplu əməliyyatlar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Toplu əməliyyatlar: toplu redaktə et

**Endpoint** · `POST /api/v1/bulk/{documentType}/edit`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `{documentType}.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "documentType": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "ids": [
      "33333333-3333-4333-8333-333333333333"
    ],
    "fields": {}
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "success_count": "Nümunə dəyər",
    "failed_count": "Nümunə dəyər",
    "total": 100,
    "message": "Nümunə dəyər",
    "ids": [
      "33333333-3333-4333-8333-333333333333"
    ],
    "fields": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Toplu əməliyyatlar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

