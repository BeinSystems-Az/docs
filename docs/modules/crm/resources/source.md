---
sidebar_position: 6
title: CRM mənbələri
---

# CRM mənbələri

CRM mənbələri resursu crm modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `crm_sources`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** CRM mənbələri resursu crm modulunda aid olduğu məlumat və əməliyyatları idarə edir. CRM satış imkanının kommersiya tarixçəsini saxlayır; özü stok və mühasibat yazılışı yaratmır.

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
| `description` | string/null | Qeyd haqqında əlavə izahdır. |
| `sequence` | number | Siyahıda emal və görünmə ardıcıllığını müəyyən edir. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |
| `created_at` | datetime/null | Qeydin yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Qeydin son dəyişdirilmə vaxtıdır. |
| `id` | UUID | Qeydin unikal identifikatorudur. |

## Endpointlər

### CRM mənbələri siyahısını al

**Endpoint** · `GET /api/v1/crm/sources`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `crm_sources.read`

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
      "description": "Sintetik nümunə məlumatı",
      "sequence": 1,
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

### CRM mənbələri qeydi yarat

**Endpoint** · `POST /api/v1/crm/sources`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `crm_sources.create`

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
    "sequence": 1,
    "active": true
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Mənbə yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "description": "Sintetik nümunə məlumatı",
    "sequence": 1,
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · CRM qeydi və əlaqəli fəaliyyət tarixçəsi dəyişir; stok və jurnal nəticəsi yaranmır.

### CRM mənbələri qeydini sil

**Endpoint** · `DELETE /api/v1/crm/sources/{source}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `crm_sources.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "source": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Mənbə arxivləşdirildi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · CRM qeydi və əlaqəli fəaliyyət tarixçəsi dəyişir; stok və jurnal nəticəsi yaranmır.

### CRM mənbələri qeydini oxu

**Endpoint** · `GET /api/v1/crm/sources/{source}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `crm_sources.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "source": "22222222-2222-4222-8222-222222222222"
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
    "description": "Sintetik nümunə məlumatı",
    "sequence": 1,
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### CRM mənbələri qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/crm/sources/{source}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `crm_sources.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "source": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "code": "DEMO",
    "description": "Sintetik nümunə məlumatı",
    "sequence": 1,
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Mənbə yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "description": "Sintetik nümunə məlumatı",
    "sequence": 1,
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · CRM qeydi və əlaqəli fəaliyyət tarixçəsi dəyişir; stok və jurnal nəticəsi yaranmır.

