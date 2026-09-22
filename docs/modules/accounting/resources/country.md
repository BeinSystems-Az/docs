---
sidebar_position: 4
title: Ölkələr
---

# Ölkələr

Ölkələr tərəfdaş, vergi profili və təşkilat məlumatlarında istifadə olunan iki hərfli ölkə kataloqudur.

:::info Kontekst
`Authorization: Bearer <token>` · tenant konteksti · `countries.read/create/update/delete`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Hər qeyd iki hərfli ölkə kodunu və adını saxlayır. Ölkə seçimi ünvan və lokalizasiya kontekstidir; jurnal, vergi və stok nəticəsini özü yaratmır.

**İlkin şərtlər.** Oxu üçün `countries.read` icazəsi tələb olunur. Kataloq tenant provisioning zamanı əvvəlcədən doldurulur.

**İş axını.** Siyahını oxuyun və tərəfdaş/vergi formalarında ölkənin `id` dəyərini saxlayın. Cari backend-də write route-ları olsa da controller write field-ləri qəbul etmir.

**State-lər və biznes təsiri.** Lifecycle state yoxdur və oxu əməliyyatlarının biznes təsiri yoxdur.

**Əlaqəli resurslar.** Tərəfdaşlar, tenant/təşkilat məlumatı və vergi profili.

**Əsas məhdudiyyətlər.** `CountryController` `validationRules()` override etmir. Buna görə POST body-si validation-dan sonra boşalır və create hazırda DB məhdudiyyətində uğursuz olur; PUT/PATCH body-si isə tətbiq edilmir. Client cari versiyada kataloqu read-only qəbul etməlidir.

:::warning Cari backend məhdudiyyəti
`POST`, `PUT` və `PATCH` route-ları route kataloqunda mövcuddur, lakin işlək ölkə write kontraktı implement edilməyib. Aşağıdakı bloklar real cari davranışı göstərir; yeni inteqrasiya yalnız GET endpointlərindən istifadə etməlidir.
:::

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

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
