---
sidebar_position: 5
title: CRM pipeline-ları
---

# CRM pipeline-ları

Lead-lərin keçdiyi satış prosesinin pipeline təriflərini saxlayır.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `crm_pipelines`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Lead-lərin keçdiyi satış prosesinin pipeline təriflərini saxlayır. CRM satış imkanının kommersiya tarixçəsini saxlayır; özü stok və mühasibat yazılışı yaratmır.

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
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `sequence` | number | Siyahıda emal və görünmə ardıcıllığını müəyyən edir. |
| `is_default` | boolean | Resursun “is default” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |
| `stages_count` | number | Əlaqəli qeydlərin hesablanmış sayıdır. |
| `created_at` | datetime/null | Qeydin yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Qeydin son dəyişdirilmə vaxtıdır. |
| `id` | UUID | Qeydin unikal identifikatorudur. |

## Endpointlər

### CRM pipeline-ları siyahısını al

**Endpoint** · `GET /api/v1/crm/pipelines`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `crm_pipelines.read`

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
      "code": "DEMO",
      "name": "Nümunə qeyd",
      "sequence": 1,
      "is_default": true,
      "active": true,
      "stages_count": "Nümunə dəyər"
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

### CRM pipeline-ları qeydi yarat

**Endpoint** · `POST /api/v1/crm/pipelines`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `crm_pipelines.create`

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
    "sequence": 1,
    "is_default": true,
    "active": true
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Satış prosesi yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "sequence": 1,
    "is_default": true,
    "active": true,
    "stages_count": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · CRM qeydi və əlaqəli fəaliyyət tarixçəsi dəyişir; stok və jurnal nəticəsi yaranmır.

### CRM pipeline-ları qeydini sil

**Endpoint** · `DELETE /api/v1/crm/pipelines/{pipeline}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `crm_pipelines.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "pipeline": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Satış prosesi arxivləşdirildi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · CRM qeydi və əlaqəli fəaliyyət tarixçəsi dəyişir; stok və jurnal nəticəsi yaranmır.

### CRM pipeline-ları qeydini oxu

**Endpoint** · `GET /api/v1/crm/pipelines/{pipeline}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `crm_pipelines.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "pipeline": "22222222-2222-4222-8222-222222222222"
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
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "sequence": 1,
    "is_default": true,
    "active": true,
    "stages_count": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### CRM pipeline-ları qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/crm/pipelines/{pipeline}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `crm_pipelines.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "pipeline": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "code": "DEMO",
    "sequence": 1,
    "is_default": true,
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Satış prosesi yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "sequence": 1,
    "is_default": true,
    "active": true,
    "stages_count": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · CRM qeydi və əlaqəli fəaliyyət tarixçəsi dəyişir; stok və jurnal nəticəsi yaranmır.

