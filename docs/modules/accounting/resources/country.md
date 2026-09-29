---
sidebar_position: 4
title: Ölkələr
---

# Ölkələr

Ölkələr tərəfdaş, vergi profili və təşkilat məlumatlarında istifadə olunan iki hərfli ölkə kataloqudur.

:::info Kontekst
`Authorization: Bearer <token>` · tenant konteksti · `countries.read/create/update/delete`
:::

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Ölkənin əlaqəli resurslarda istifadə olunan identifikatorudur. |
| `code` | string | İki hərfli ölkə kodudur. |
| `name` | string | Ölkənin istifadəçiyə görünən adıdır. |

## Endpointlər

### Ölkələr siyahısını al

**Endpoint** · `GET /api/v1/countries`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `countries.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "page": 1,
    "per_page": 20
  },
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qeydlər uğurla siyahılandı.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "code": "AZ",
      "name": "Azərbaycan"
    }
  ],
  "links": {
    "first": "https://erp.example.test/api/v1/countries?page=1",
    "last": "https://erp.example.test/api/v1/countries?page=1",
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

### Ölkələr qeydi yarat

**Endpoint** · `POST /api/v1/countries`

Route mövcuddur, lakin cari controller body field-lərini validation nəticəsinə daxil etmir.

**İcazə** · `countries.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "code": "TR",
    "name": "Türkiyə"
  }
}
```

**Response JSON · `500`**

```json
{
  "message": "Server Error"
}
```

**Xətalar** · `401` — token etibarsızdır; `403` — `countries.create` icazəsi yoxdur; `500` — body validation-dan boş keçdiyi üçün `code` və `name` DB məhdudiyyətləri create-i bloklayır.

**Biznes təsiri** · Qeyd yaranmır. İşlək write kontraktı backend-də implement edilənədək bu endpoint istifadə olunmamalıdır.

### Ölkələr qeydini sil

**Endpoint** · `DELETE /api/v1/countries/{country}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `countries.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "country": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qeyd uğurla silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Ölkələr konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Ölkələr qeydini oxu

**Endpoint** · `GET /api/v1/countries/{country}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `countries.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "country": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qeyd uğurla gətirildi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "code": "AZ",
    "name": "Azərbaycan"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Ölkələr qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/countries/{country}`

Route `200` qaytarsa da cari controller body field-lərini atır və mövcud qeydi dəyişmədən geri qaytarır.

**İcazə** · `countries.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "country": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "code": "TR",
    "name": "Türkiyə"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qeyd uğurla yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "code": "AZ",
    "name": "Azərbaycan"
  }
}
```

**Xətalar** · `401` — token etibarsızdır; `403` — `countries.update` icazəsi yoxdur; `404` — ölkə tapılmır.

**Biznes təsiri** · Cari implementasiyada dəyişiklik edilmir; response əvvəlki qeydi qaytarır.
