---
sidebar_position: 15
title: Layihələr
---

# Layihələr

Layihələr resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · `projects`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Layihələr resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu resurslar UI və platform davranışını idarə edir; biznes sənədinin domain kontraktını əvəz etmir.

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
| `name` | string/null | İstifadəçiyə görünən addır. |
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `description` | string/null | Qeyd haqqında əlavə izahdır. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |

## Endpointlər

### Layihələr siyahısını al

**Endpoint** · `GET /api/v1/projects`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `projects.read`

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
      "description": "Sintetik nümunə məlumatı",
      "active": true
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

### Layihələr qeydi yarat

**Endpoint** · `POST /api/v1/projects`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `projects.create`

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
    "code": "DEMO",
    "description": "Sintetik nümunə məlumatı",
    "active": true
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Layihə yaradıldı.",
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "description": "Sintetik nümunə məlumatı",
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Layihələr konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Layihələr qeydini sil

**Endpoint** · `DELETE /api/v1/projects/{project}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `projects.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "project": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Layihə arxivləşdirildi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Layihələr konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Layihələr qeydini oxu

**Endpoint** · `GET /api/v1/projects/{project}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `projects.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "project": "22222222-2222-4222-8222-222222222222"
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
    "description": "Sintetik nümunə məlumatı",
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Layihələr qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/projects/{project}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `projects.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "project": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "code": "DEMO",
    "description": "Sintetik nümunə məlumatı",
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Layihə yeniləndi.",
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "description": "Sintetik nümunə məlumatı",
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Layihələr konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

