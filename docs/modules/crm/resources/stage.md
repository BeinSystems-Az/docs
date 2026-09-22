---
sidebar_position: 7
title: CRM mərhələləri
---

# CRM mərhələləri

Pipeline daxilində lead-in cari mərhələsini və ardıcıllığını müəyyən edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `crm_stages`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Pipeline daxilində lead-in cari mərhələsini və ardıcıllığını müəyyən edir. CRM satış imkanının kommersiya tarixçəsini saxlayır; özü stok və mühasibat yazılışı yaratmır.

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
| `pipeline_id` | UUID | Qeydi əlaqəli “pipeline” resursuna bağlayır. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `category` | string/null | Resursun “category” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `default_probability` | number | Resursun “default probability” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `color` | string/null | Resursun “color” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `sequence` | number | Siyahıda emal və görünmə ardıcıllığını müəyyən edir. |
| `is_default` | boolean | Resursun “is default” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |
| `pipeline_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `created_at` | datetime/null | Qeydin yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Qeydin son dəyişdirilmə vaxtıdır. |
| `id` | UUID | Qeydin unikal identifikatorudur. |

## Endpointlər

### CRM mərhələləri siyahısını al

**Endpoint** · `GET /api/v1/crm/stages`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `crm_stages.read`

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
      "pipeline_id": "33333333-3333-4333-8333-333333333333",
      "category": "general",
      "default_probability": 1,
      "color": "#2563EB",
      "sequence": 1,
      "is_default": true,
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

### CRM mərhələləri qeydi yarat

**Endpoint** · `POST /api/v1/crm/stages`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `crm_stages.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "pipeline_id": "33333333-3333-4333-8333-333333333333",
    "name": "Nümunə qeyd",
    "code": "DEMO",
    "category": "general",
    "default_probability": 1,
    "color": "#2563EB",
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
  "message": "Mərhələ yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "pipeline_id": "33333333-3333-4333-8333-333333333333",
    "category": "general",
    "default_probability": 1,
    "color": "#2563EB",
    "sequence": 1,
    "is_default": true,
    "active": true,
    "pipeline_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · CRM qeydi və əlaqəli fəaliyyət tarixçəsi dəyişir; stok və jurnal nəticəsi yaranmır.

### CRM mərhələləri qeydini sil

**Endpoint** · `DELETE /api/v1/crm/stages/{stage}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `crm_stages.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stage": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Mərhələ arxivləşdirildi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · CRM qeydi və əlaqəli fəaliyyət tarixçəsi dəyişir; stok və jurnal nəticəsi yaranmır.

### CRM mərhələləri qeydini oxu

**Endpoint** · `GET /api/v1/crm/stages/{stage}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `crm_stages.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stage": "22222222-2222-4222-8222-222222222222"
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
    "pipeline_id": "33333333-3333-4333-8333-333333333333",
    "category": "general",
    "default_probability": 1,
    "color": "#2563EB",
    "sequence": 1,
    "is_default": true,
    "active": true,
    "pipeline_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### CRM mərhələləri qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/crm/stages/{stage}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `crm_stages.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "stage": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "pipeline_id": "33333333-3333-4333-8333-333333333333",
    "name": "Nümunə qeyd",
    "code": "DEMO",
    "category": "general",
    "default_probability": 1,
    "color": "#2563EB",
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
  "message": "Mərhələ yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "pipeline_id": "33333333-3333-4333-8333-333333333333",
    "category": "general",
    "default_probability": 1,
    "color": "#2563EB",
    "sequence": 1,
    "is_default": true,
    "active": true,
    "pipeline_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · CRM qeydi və əlaqəli fəaliyyət tarixçəsi dəyişir; stok və jurnal nəticəsi yaranmır.

