---
sidebar_position: 5
title: Dataset-lər
---

# Dataset-lər

Dataset-lər resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Dataset-lər resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu resurslar UI və platform davranışını idarə edir; biznes sənədinin domain kontraktını əvəz etmir.

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
| `table_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `title` | string/null | Resursun “title” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `reference_api` | string/null | Resursun “reference api” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `inherits_from` | string/null | Resursun “inherits from” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `views` | array/object | Resursun “views” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `views[].view_type` | enum/string | Massiv elementində “view type” dəyərini saxlayır. |
| `views[].name` | array field | İstifadəçiyə görünən addır. |
| `views[].data_ref` | array field | Massiv elementində “data ref” dəyərini saxlayır. |
| `views[].parent_view_id` | UUID | Qeydi əlaqəli “parent view” resursuna bağlayır. |
| `views[].region_id` | UUID | Qeydi əlaqəli “region” resursuna bağlayır. |

## Endpointlər

### Dataset-lər siyahısını al

**Endpoint** · `GET /api/v1/datasets`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `metadata.manage` global permission

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
  "message": "Datasetlər uğurla gətirildi.",
  "data": [
    {
      "name": "Nümunə qeyd",
      "table_name": "Nümunə dəyər",
      "title": "Nümunə başlıq",
      "reference_api": "Nümunə dəyər",
      "inherits_from": "Nümunə dəyər"
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Dataset-lər qeydi yarat

**Endpoint** · `POST /api/v1/datasets`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `metadata.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "views": [
      {
        "view_type": "kanban",
        "name": "Nümunə qeyd",
        "data_ref": "Nümunə dəyər",
        "parent_view_id": "33333333-3333-4333-8333-333333333333",
        "region_id": "33333333-3333-4333-8333-333333333333"
      }
    ]
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Dataset uğurla yaradıldı.",
  "data": {
    "name": "Nümunə qeyd",
    "table_name": "Nümunə dəyər",
    "title": "Nümunə başlıq",
    "reference_api": "Nümunə dəyər",
    "inherits_from": "Nümunə dəyər",
    "views": [
      {
        "view_type": "kanban",
        "name": "Nümunə qeyd",
        "data_ref": "Nümunə dəyər",
        "parent_view_id": "33333333-3333-4333-8333-333333333333",
        "region_id": "33333333-3333-4333-8333-333333333333"
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Dataset-lər konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Dataset-lər qeydini sil

**Endpoint** · `DELETE /api/v1/datasets/{dataset}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `metadata.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "dataset": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Dataset uğurla silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Dataset-lər konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Dataset-lər qeydini oxu

**Endpoint** · `GET /api/v1/datasets/{dataset}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `metadata.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "dataset": "22222222-2222-4222-8222-222222222222"
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
    "table_name": "Nümunə dəyər",
    "title": "Nümunə başlıq",
    "reference_api": "Nümunə dəyər",
    "inherits_from": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

