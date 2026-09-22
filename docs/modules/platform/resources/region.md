---
sidebar_position: 16
title: Regionlar
---

# Regionlar

Regionlar resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Regionlar resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu resurslar UI və platform davranışını idarə edir; biznes sənədinin domain kontraktını əvəz etmir.

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
| `title` | string/null | Resursun “title” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `view_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `dataset_id` | UUID | Qeydi əlaqəli “dataset” resursuna bağlayır. |
| `dataset` | string/null | Resursun “dataset” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `dataset_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `parent_id` | UUID | Qeydi əlaqəli “parent” resursuna bağlayır. |
| `is_system` | boolean | Resursun “is system” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Regionlar qeydi yarat

**Endpoint** · `POST /api/v1/regions`

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
    "title": "Nümunə başlıq",
    "name": "Nümunə qeyd",
    "type": "card",
    "view_name": "list",
    "dataset_id": "33333333-3333-4333-8333-333333333333",
    "dataset": "Nümunə dəyər",
    "dataset_name": "products"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Region uğurla yaradıldı.",
  "data": {
    "name": "Nümunə qeyd",
    "view_name": "list",
    "title": "Nümunə başlıq",
    "type": "card",
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "is_system": true,
    "dataset_id": "33333333-3333-4333-8333-333333333333",
    "dataset": "Nümunə dəyər",
    "dataset_name": "products"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Regionlar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Regionlar qeydini sil

**Endpoint** · `DELETE /api/v1/regions/{region}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `metadata.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "region": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Region uğurla silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Regionlar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Regionlar qeydini yenilə

**Endpoint** · `PUT /api/v1/regions/{region}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `metadata.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "region": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "title": "Nümunə başlıq",
    "name": "Nümunə qeyd",
    "type": "card",
    "view_name": "list",
    "dataset_id": "33333333-3333-4333-8333-333333333333",
    "dataset": "Nümunə dəyər",
    "dataset_name": "products"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Region uğurla yeniləndi.",
  "data": {
    "name": "Nümunə qeyd",
    "view_name": "list",
    "title": "Nümunə başlıq",
    "type": "card",
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "is_system": true,
    "dataset_id": "33333333-3333-4333-8333-333333333333",
    "dataset": "Nümunə dəyər",
    "dataset_name": "products"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Regionlar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

