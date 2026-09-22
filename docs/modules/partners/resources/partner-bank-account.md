---
sidebar_position: 2
title: Tərəfdaş bank hesabları
---

# Tərəfdaş bank hesabları

Tərəfdaş bank hesabları resursu tərəfdaşlar modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `partner_bank_accounts`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Tərəfdaş bank hesabları resursu tərəfdaşlar modulunda aid olduğu məlumat və əməliyyatları idarə edir. Tərəfdaş master məlumatdır; özü satış, alış, borc və jurnal yaratmır.

**İlkin şərtlər.** Tenant konteksti və lazım olduqda ölkə, valyuta və qrup məlumatı mövcud olmalıdır.

**İş axını.** Qrup və tərəfdaşı yaradın, rekvizit və bank hesablarını tamamlayın, sonra biznes sənədlərində istifadə edin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Dəyişiklik gələcək sənədlərdə seçimi və rekvizitləri dəyişir; post edilmiş sənəd snapshot-larını dəyişmir.

**Əlaqəli resurslar.** CRM, satış, satınalma, ödənişlər və borclar.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `partner_id` | UUID | Əməliyyatın aid olduğu müştəri və ya təchizatçını göstərir. |
| `bank_identifier_code` | string/null | Əlaqəli qeydin response-da göstərilən kodudur. |
| `bank` | string/null | Resursun “bank” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `address` | string/null | Resursun “address” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `correspondent_account` | string/null | Resursun “correspondent account” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `bank_account` | string/null | Resursun “bank account” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `partner_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `created_at` | datetime/null | Qeydin yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Qeydin son dəyişdirilmə vaxtıdır. |

## Endpointlər

### Tərəfdaş bank hesabları siyahısını al

**Endpoint** · `GET /api/v1/partner-bank-accounts`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `partner_bank_accounts.read`

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
  "message": "Bank hesabları uğurla siyahılandı.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "partner_id": "33333333-3333-4333-8333-333333333333",
      "bank_identifier_code": "Nümunə dəyər",
      "bank": "Nümunə dəyər",
      "address": "Bakı şəhəri, Nümunə küçəsi 1",
      "correspondent_account": "Nümunə dəyər",
      "bank_account": "Nümunə dəyər",
      "partner_name": "Nümunə dəyər"
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

### Tərəfdaş bank hesabları qeydi yarat

**Endpoint** · `POST /api/v1/partner-bank-accounts`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `partner_bank_accounts.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "bank_identifier_code": "Nümunə dəyər",
    "bank": "Nümunə dəyər",
    "address": "Bakı şəhəri, Nümunə küçəsi 1",
    "correspondent_account": "Nümunə dəyər",
    "bank_account": "Nümunə dəyər"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Bank hesabı uğurla yaradıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "bank_identifier_code": "Nümunə dəyər",
    "bank": "Nümunə dəyər",
    "address": "Bakı şəhəri, Nümunə küçəsi 1",
    "correspondent_account": "Nümunə dəyər",
    "bank_account": "Nümunə dəyər",
    "partner_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Tərəfdaş bank hesabları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Tərəfdaş bank hesabları qeydini sil

**Endpoint** · `DELETE /api/v1/partner-bank-accounts/{partner_bank_account}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `partner_bank_accounts.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "partner_bank_account": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Bank hesabı uğurla silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Tərəfdaş bank hesabları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Tərəfdaş bank hesabları qeydini oxu

**Endpoint** · `GET /api/v1/partner-bank-accounts/{partner_bank_account}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `partner_bank_accounts.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "partner_bank_account": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Bank hesabı uğurla gətirildi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "bank_identifier_code": "Nümunə dəyər",
    "bank": "Nümunə dəyər",
    "address": "Bakı şəhəri, Nümunə küçəsi 1",
    "correspondent_account": "Nümunə dəyər",
    "bank_account": "Nümunə dəyər",
    "partner_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Tərəfdaş bank hesabları qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/partner-bank-accounts/{partner_bank_account}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `partner_bank_accounts.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "partner_bank_account": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "bank_identifier_code": "Nümunə dəyər",
    "bank": "Nümunə dəyər",
    "address": "Bakı şəhəri, Nümunə küçəsi 1",
    "correspondent_account": "Nümunə dəyər",
    "bank_account": "Nümunə dəyər"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Bank hesabı uğurla yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "bank_identifier_code": "Nümunə dəyər",
    "bank": "Nümunə dəyər",
    "address": "Bakı şəhəri, Nümunə küçəsi 1",
    "correspondent_account": "Nümunə dəyər",
    "bank_account": "Nümunə dəyər",
    "partner_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Tərəfdaş bank hesabları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

