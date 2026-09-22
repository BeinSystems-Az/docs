---
sidebar_position: 3
title: Tərəfdaşlar
---

# Tərəfdaşlar

Tərəfdaşlar resursu tərəfdaşlar modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `partners`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Tərəfdaşlar resursu tərəfdaşlar modulunda aid olduğu məlumat və əməliyyatları idarə edir. Tərəfdaş master məlumatdır; özü satış, alış, borc və jurnal yaratmır.

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
| `parent_id` | UUID | Qeydi əlaqəli “parent” resursuna bağlayır. |
| `commercial_partner_id` | UUID | Qeydi əlaqəli “commercial partner” resursuna bağlayır. |
| `is_company` | boolean | Resursun “is company” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `vat_payer` | boolean | Resursun “vat payer” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `is_customer` | boolean | Resursun “is customer” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `is_supplier` | boolean | Resursun “is supplier” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `group_id` | UUID | Qeydi əlaqəli “group” resursuna bağlayır. |
| `price_type_id` | UUID | Qeydi əlaqəli “price type” resursuna bağlayır. |
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `surname` | string/null | Resursun “surname” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `gender` | string/null | Resursun “gender” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `fin` | string/null | Resursun “fin” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `phone` | string/null | Resursun “phone” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `email` | string/null | Resursun “email” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `card` | string/null | Resursun “card” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `bonus` | number | Resursun “bonus” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `tin` | string/null | Resursun “tin” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `legal_address` | string/null | Resursun “legal address” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `physical_address` | string/null | Resursun “physical address” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `description` | string/null | Qeyd haqqında əlavə izahdır. |
| `type` | number | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |
| `branch_visibility` | enum/string | Resursun “branch visibility” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `commercial_partner_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `group` | string/null | Resursun “group” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `group_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `price_type` | number | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `price_type_name` | number | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `bank_accounts` | array/object | Resursun “bank accounts” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `partner_id` | UUID | Əməliyyatın aid olduğu müştəri və ya təchizatçını göstərir. |
| `bank_identifier_code` | string/null | Əlaqəli qeydin response-da göstərilən kodudur. |
| `bank` | string/null | Resursun “bank” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `address` | string/null | Resursun “address” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `correspondent_account` | string/null | Resursun “correspondent account” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `bank_account` | string/null | Resursun “bank account” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `created_at` | datetime/null | Qeydin yaradılma vaxtıdır. |
| `updated_at` | datetime/null | Qeydin son dəyişdirilmə vaxtıdır. |
| `receivable_account_id` | UUID | Qeydi əlaqəli “receivable account” resursuna bağlayır. |
| `payable_account_id` | UUID | Qeydi əlaqəli “payable account” resursuna bağlayır. |
| `branch_ids` | array/object | Resursun “branch ids” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `deleted_at` | datetime/null | Soft-delete və ya arxivlənmə vaxtıdır. |
| `bank_accounts[].id` | UUID | Qeydin unikal identifikatorudur. |
| `bank_accounts[].bank_identifier_code` | array field | Massiv elementində “bank identifier code” dəyərini saxlayır. |
| `bank_accounts[].bank` | array field | Massiv elementində “bank” dəyərini saxlayır. |
| `bank_accounts[].address` | array field | Massiv elementində “address” dəyərini saxlayır. |
| `bank_accounts[].correspondent_account` | array field | Massiv elementində “correspondent account” dəyərini saxlayır. |
| `bank_accounts[].bank_account` | array field | Massiv elementində “bank account” dəyərini saxlayır. |
| `branch_ids[]` | UUID | Massiv elementində “branch ids” dəyərini saxlayır. |

## Endpointlər

### Tərəfdaşlar siyahısını al

**Endpoint** · `GET /api/v1/partners`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `partners.read`

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
      "partner_id": "33333333-3333-4333-8333-333333333333",
      "parent_id": "33333333-3333-4333-8333-333333333333",
      "commercial_partner_id": "33333333-3333-4333-8333-333333333333",
      "is_company": true,
      "vat_payer": true,
      "is_customer": true,
      "is_supplier": true
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

### Tərəfdaşlar qeydi yarat

**Endpoint** · `POST /api/v1/partners`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `partners.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "is_company": true,
    "vat_payer": true,
    "is_customer": true,
    "is_supplier": true,
    "group_id": "33333333-3333-4333-8333-333333333333",
    "price_type_id": "33333333-3333-4333-8333-333333333333",
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "surname": "Məmmədov",
    "gender": "male",
    "fin": "7ABC123",
    "phone": "+994501234567",
    "email": "demo@example.test",
    "card": "Nümunə dəyər",
    "bonus": 1,
    "tin": "1234567890",
    "legal_address": "Nümunə dəyər",
    "physical_address": "Nümunə dəyər",
    "bank_accounts": [
      {
        "id": "33333333-3333-4333-8333-333333333333",
        "bank_identifier_code": "Nümunə dəyər",
        "bank": "Nümunə dəyər",
        "address": "Bakı şəhəri, Nümunə küçəsi 1",
        "correspondent_account": "Nümunə dəyər",
        "bank_account": "Nümunə dəyər"
      }
    ],
    "description": "Sintetik nümunə məlumatı",
    "type": 1,
    "active": true,
    "receivable_account_id": "33333333-3333-4333-8333-333333333333",
    "payable_account_id": "33333333-3333-4333-8333-333333333333",
    "branch_visibility": "all",
    "branch_ids": [
      "33333333-3333-4333-8333-333333333333"
    ]
  }
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
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "commercial_partner_id": "33333333-3333-4333-8333-333333333333",
    "is_company": true,
    "vat_payer": true,
    "is_customer": true,
    "is_supplier": true,
    "group_id": "33333333-3333-4333-8333-333333333333",
    "price_type_id": "33333333-3333-4333-8333-333333333333",
    "surname": "Məmmədov",
    "gender": "male",
    "fin": "7ABC123",
    "phone": "+994501234567",
    "email": "demo@example.test",
    "card": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Tərəfdaşlar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Tərəfdaşlar qeydini sil

**Endpoint** · `DELETE /api/v1/partners/{partner}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `partners.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "partner": "22222222-2222-4222-8222-222222222222"
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
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Tərəfdaşlar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Tərəfdaşlar qeydini oxu

**Endpoint** · `GET /api/v1/partners/{partner}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `partners.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "partner": "22222222-2222-4222-8222-222222222222"
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
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "commercial_partner_id": "33333333-3333-4333-8333-333333333333",
    "is_company": true,
    "vat_payer": true,
    "is_customer": true,
    "is_supplier": true,
    "group_id": "33333333-3333-4333-8333-333333333333",
    "price_type_id": "33333333-3333-4333-8333-333333333333",
    "surname": "Məmmədov",
    "gender": "male",
    "fin": "7ABC123",
    "phone": "+994501234567",
    "email": "demo@example.test",
    "card": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Tərəfdaşlar qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/partners/{partner}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `partners.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "partner": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "is_company": true,
    "vat_payer": true,
    "is_customer": true,
    "is_supplier": true,
    "group_id": "33333333-3333-4333-8333-333333333333",
    "price_type_id": "33333333-3333-4333-8333-333333333333",
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "surname": "Məmmədov",
    "gender": "male",
    "fin": "7ABC123",
    "phone": "+994501234567",
    "email": "demo@example.test",
    "card": "Nümunə dəyər",
    "bonus": 1,
    "tin": "1234567890",
    "legal_address": "Nümunə dəyər",
    "physical_address": "Nümunə dəyər",
    "bank_accounts": [
      {
        "id": "33333333-3333-4333-8333-333333333333",
        "bank_identifier_code": "Nümunə dəyər",
        "bank": "Nümunə dəyər",
        "address": "Bakı şəhəri, Nümunə küçəsi 1",
        "correspondent_account": "Nümunə dəyər",
        "bank_account": "Nümunə dəyər"
      }
    ],
    "description": "Sintetik nümunə məlumatı",
    "type": 1,
    "active": true,
    "receivable_account_id": "33333333-3333-4333-8333-333333333333",
    "payable_account_id": "33333333-3333-4333-8333-333333333333",
    "branch_visibility": "all",
    "branch_ids": [
      "33333333-3333-4333-8333-333333333333"
    ]
  }
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
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "commercial_partner_id": "33333333-3333-4333-8333-333333333333",
    "is_company": true,
    "vat_payer": true,
    "is_customer": true,
    "is_supplier": true,
    "group_id": "33333333-3333-4333-8333-333333333333",
    "price_type_id": "33333333-3333-4333-8333-333333333333",
    "surname": "Məmmədov",
    "gender": "male",
    "fin": "7ABC123",
    "phone": "+994501234567",
    "email": "demo@example.test",
    "card": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Tərəfdaşlar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

