---
sidebar_position: 3
title: Hesab xüsusiyyətləri
---

# Hesab xüsusiyyətləri

Hesab xüsusiyyətləri tərəfdaş, məhsul və vergi kimi resurslar üçün istifadə olunacaq mühasibat hesabını property adı ilə xəritələyir.

:::info Kontekst
`Authorization: Bearer <token>` · tenant konteksti · `account_properties.read/create/update/delete`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Property qeydi `res_model` və istəyə bağlı `res_id` üçün gəlir, xərc, stok valuation, debitor və digər uçot rolunu konkret `account_id` ilə bağlayır. Qeyd yaratmaq jurnal yazılışı yaratmır; sonrakı posting zamanı hesab seçiminə təsir edir.

**İlkin şərtlər.** `account_id` hesab planında mövcud olmalıdır. `res_model` yalnız `partner`, `product` və `account_tax`; `property_name` isə backend `PostingProperty` kataloqundakı dəyərlərdən biri ola bilər.

**İş axını.** Əvvəl hesabı yaradın, sonra ümumi model səviyyəsində və ya konkret `res_id` üçün property saxlayın. Sənəd post edilərkən accounting resolver uyğun property-ni tapıb jurnal hesabını seçir.

**State-lər və biznes təsiri.** Lifecycle state yoxdur. Dəyişiklik əvvəlki jurnal sətirlərini yenidən hesablamır, yalnız sonrakı posting əməliyyatlarında hesab seçimini dəyişir.

**Əlaqəli resurslar.** Hesab planı, məhsullar, tərəfdaşlar, vergilər, stok valuation və satış/alış posting xidmətləri.

**Əsas məhdudiyyətlər.** `res_model`, `res_id`, `property_name` və `account_id` birlikdə tenant daxilində uçot xəritəsini müəyyən edir. Response-da `res_id` sadə UUID yox, `value` və `label` obyektinə çevrilə bilər.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Property qeydinin identifikatorudur. |
| `res_model` | enum | Xəritənin aid olduğu modeldir: `partner`, `product` və ya `account_tax`. |
| `res_id` | UUID/null və ya object | Konkret resursu seçir; response-da `{value, label}` formasında təqdim oluna bilər. |
| `res_name` | string/null | Konkret resursun oxunaqlı adıdır; yalnız response üçündür. |
| `property_name` | enum | Məsələn gəlir, xərc, stok valuation və ya receivable hesab roludur. |
| `account_id` | UUID | Həmin rol üçün istifadə ediləcək hesab planı qeydidir. |
| `account_name` | string/null | Seçilmiş hesabın response-da göstərilən adıdır. |

## Endpointlər

### Hesab xüsusiyyətləri siyahısını al

**Endpoint** · `GET /api/v1/account-properties`

Property xəritələrini səhifələnmiş qaytarır.

**İcazə** · `account_properties.read`

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
  "message": "Qeydlər uğurla siyahılandı.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "res_model": "partner",
      "res_id": "33333333-3333-4333-8333-333333333333",
      "property_name": "property_account_receivable",
      "account_id": "44444444-4444-4444-8444-444444444444",
      "account_name": "Alıcılarla hesablaşmalar"
    }
  ],
  "links": {
    "first": "https://erp.example.test/api/v1/account-properties?page=1",
    "last": "https://erp.example.test/api/v1/account-properties?page=1",
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

**Xətalar** · `401` — token etibarsızdır; `403` — `account_properties.read` icazəsi yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Hesab xüsusiyyətləri qeydi yarat

**Endpoint** · `POST /api/v1/account-properties`

Model və property rolunu hesab planındakı konkret hesabla bağlayır.

**İcazə** · `account_properties.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "res_model": "partner",
    "res_id": "33333333-3333-4333-8333-333333333333",
    "property_name": "property_account_receivable",
    "account_id": "44444444-4444-4444-8444-444444444444"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Qeyd uğurla yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "res_model": "partner",
    "res_id": {
      "value": "33333333-3333-4333-8333-333333333333",
      "label": "Nümunə müştəri"
    },
    "res_name": "Nümunə müştəri",
    "property_name": "property_account_receivable",
    "account_id": "44444444-4444-4444-8444-444444444444",
    "account_name": "Alıcılarla hesablaşmalar"
  }
}
```

**Xətalar** · `401` — token etibarsızdır; `403` — `account_properties.create` icazəsi yoxdur; `422` — model, property enum-u və ya hesab identifikatoru yanlışdır.

**Biznes təsiri** · Sonrakı sənəd posting-lərində həmin resurs üçün seçiləcək hesab dəyişir; dərhal jurnal yaranmır.

### Hesab xüsusiyyətləri qeydini sil

**Endpoint** · `DELETE /api/v1/account-properties/{account_property}`

Property xəritəsini silir.

**İcazə** · `account_properties.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "account_property": "22222222-2222-4222-8222-222222222222"
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

**Biznes təsiri** · Sonrakı posting zamanı resolver daha ümumi property-yə və ya sistem default-una keçə bilər; əvvəlki jurnal dəyişmir.

### Hesab xüsusiyyətləri qeydini oxu

**Endpoint** · `GET /api/v1/account-properties/{account_property}`

Bir property xəritəsini əlaqəli resurs və hesab adları ilə qaytarır.

**İcazə** · `account_properties.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "account_property": "22222222-2222-4222-8222-222222222222"
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
    "res_model": "partner",
    "res_id": {
      "value": "33333333-3333-4333-8333-333333333333",
      "label": "Nümunə müştəri"
    },
    "res_name": "Nümunə müştəri",
    "property_name": "property_account_receivable",
    "account_id": "44444444-4444-4444-8444-444444444444",
    "account_name": "Alıcılarla hesablaşmalar"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Hesab xüsusiyyətləri qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/account-properties/{account_property}`

Mövcud property xəritəsinin model, resurs, property rolu və ya hesabını dəyişir.

**İcazə** · `account_properties.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "account_property": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "res_model": "partner",
    "res_id": "33333333-3333-4333-8333-333333333333",
    "property_name": "property_account_receivable",
    "account_id": "44444444-4444-4444-8444-444444444444"
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
    "res_model": "partner",
    "res_id": {
      "value": "33333333-3333-4333-8333-333333333333",
      "label": "Nümunə müştəri"
    },
    "res_name": "Nümunə müştəri",
    "property_name": "property_account_receivable",
    "account_id": "44444444-4444-4444-8444-444444444444",
    "account_name": "Alıcılarla hesablaşmalar"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Dəyişiklik yalnız sonrakı posting-lərin hesab seçiminə təsir edir; əvvəlki jurnal sətirləri dəyişmir.
