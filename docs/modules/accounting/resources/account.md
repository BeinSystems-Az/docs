---
sidebar_position: 2
title: Hesab planı
---

# Hesab planı

Hesab planı baş kitab yazılışlarında istifadə edilən mühasibat hesablarının iyerarxiyasını və uçot rolunu saxlayır.

:::info Kontekst
`Authorization: Bearer <token>` · tenant konteksti · `accounts.read/create/update/delete`
:::

## Həyat dövrü

Hesab yaradılır, lazım olduqda adı və uçot davranışı yenilənir, passivləşdirilir və ya silinir. Bu resursda post/cancel keçidi yoxdur.

## Field-lər

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Hesabın sənəd və jurnal sətirlərində istifadə olunan identifikatorudur. |
| `parent_id` | UUID/null | Kod iyerarxiyasına əsasən serverin təyin etdiyi yuxarı hesabdır. |
| `parent_name` | string/null | Yuxarı hesabın response-da göstərilən adıdır. |
| `code` | string | Unikal hesab kodudur; axtarış və iyerarxiya üçün istifadə olunur. |
| `name` | string | İstifadəçiyə görünən hesab adıdır. |
| `internal_group` | enum | `asset`, `liability`, `equity`, `income` və ya `expense` iqtisadi qrupudur. |
| `user_type_id` | enum | Hesabın receivable, payable, liquidity və digər əməliyyat roludur. |
| `reconcile` | boolean | Açıq debet/kredit sətirlərinin uzlaşdırıla biləcəyini göstərir. |
| `active` | boolean | Hesabın yeni əməliyyatlarda seçilə biləcəyini göstərir. |
| `package_code` | string/null | Hesabı gətirən lokalizasiya paketinin kodudur; yalnız response üçündür. |
| `package_version` | integer/null | Lokalizasiya paketinin versiyasıdır; yalnız response üçündür. |
| `template_key` | string/null | Lokalizasiya yeniləmələrində hesabı sabit tanıdan açardır. |
| `effective_from` | datetime/null | Hesabın qüvvəyə minmə vaxtıdır. |
| `effective_to` | datetime/null | Hesabın qüvvədən düşmə vaxtıdır. |
| `is_statutory` | boolean | Hesabın rəsmi hesab planından gəldiyini göstərir. |

## Endpointlər

### Hesabları siyahıla

**Endpoint** · `GET /api/v1/accounts`

Hesabları səhifələnmiş qaytarır; `q` kod və ad, `ids` isə vergüllə ayrılmış UUID-lər üzrə seçim üçündür.

**İcazə** · `accounts.read`

**Request JSON**

```json
{
  "headers": {"Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"},
  "path": {},
  "query": {"q": "998", "ids": "11111111-1111-4111-8111-111111111111", "page": 1, "per_page": 20},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qeydlər uğurla siyahılandı.",
  "data": [{"id": "11111111-1111-4111-8111-111111111111", "parent_id": null, "code": "998", "name": "Kassa", "internal_group": "asset", "user_type_id": "liquidity", "reconcile": true, "active": true, "is_statutory": false}],
  "links": {"first": "https://erp.example.test/api/v1/accounts?page=1", "last": "https://erp.example.test/api/v1/accounts?page=1", "prev": null, "next": null},
  "meta": {"current_page": 1, "from": 1, "last_page": 1, "per_page": 20, "to": 1, "total": 1}
}
```

**Xətalar** · `401` — token yoxdur və ya etibarsızdır; `403` — `accounts.read` icazəsi yoxdur.

**Biznes təsiri** · Yoxdur; yalnız hesab planı oxunur.

### Hesab yarat

**Endpoint** · `POST /api/v1/accounts`

Yeni hesab yaradır; `parent_id` göndərilmir, server onu `code` iyerarxiyasından çıxarır.

**İcazə** · `accounts.create`

**Request JSON**

```json
{
  "headers": {"Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"},
  "path": {},
  "query": {},
  "body": {"code": "998", "name": "Kassa", "internal_group": "asset", "user_type_id": "liquidity", "reconcile": true, "active": true}
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Qeyd uğurla yaradıldı.",
  "data": {"id": "11111111-1111-4111-8111-111111111111", "parent_id": null, "code": "998", "name": "Kassa", "internal_group": "asset", "user_type_id": "liquidity", "reconcile": true, "active": true, "package_code": null, "package_version": null, "template_key": null, "effective_from": null, "effective_to": null, "is_statutory": false}
}
```

**Xətalar** · `401` — token etibarsızdır; `403` — `accounts.create` icazəsi yoxdur; `422` — kod formatı/unikallığı və ya enum dəyəri yanlışdır.

**Biznes təsiri** · Hesab planına seçim üçün yeni hesab əlavə olunur; jurnal və balans məbləği yaranmır.

### Hesabı oxu

**Endpoint** · `GET /api/v1/accounts/{account}`

Bir hesabın tam məlumatını qaytarır.

**İcazə** · `accounts.read`

**Request JSON**

```json
{
  "headers": {"Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"},
  "path": {"account": "11111111-1111-4111-8111-111111111111"},
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qeyd uğurla gətirildi.",
  "data": {"id": "11111111-1111-4111-8111-111111111111", "parent_id": null, "parent_name": null, "code": "998", "name": "Kassa", "internal_group": "asset", "user_type_id": "liquidity", "reconcile": true, "active": true, "is_statutory": false}
}
```

**Xətalar** · `401` — token etibarsızdır; `403` — `accounts.read` icazəsi yoxdur; `404` — hesab tapılmır.

**Biznes təsiri** · Yoxdur; yalnız hesab oxunur.

### Hesabı yenilə

**Endpoint** · `PATCH|PUT /api/v1/accounts/{account}`

Hesabın qəbul edilən sahələrini yeniləyir və kod dəyişərsə parent hesabını yenidən çıxarır.

**İcazə** · `accounts.update`

**Request JSON**

```json
{
  "headers": {"Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"},
  "path": {"account": "11111111-1111-4111-8111-111111111111"},
  "query": {},
  "body": {"code": "998", "name": "Əsas kassa", "internal_group": "asset", "user_type_id": "liquidity", "reconcile": true, "active": true}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qeyd uğurla yeniləndi.",
  "data": {"id": "11111111-1111-4111-8111-111111111111", "parent_id": null, "code": "998", "name": "Əsas kassa", "internal_group": "asset", "user_type_id": "liquidity", "reconcile": true, "active": true, "is_statutory": false}
}
```

**Xətalar** · `401` — token etibarsızdır; `403` — `accounts.update` icazəsi yoxdur; `404` — hesab tapılmır; `422` — kod formatı/unikallığı və ya enum dəyəri yanlışdır.

**Biznes təsiri** · Hesabın gələcək seçim və uzlaşdırma davranışı dəyişir; mövcud jurnal sətirlərinin məbləği dəyişmir.

### Hesabı sil

**Endpoint** · `DELETE /api/v1/accounts/{account}`

Hesabı soft-delete edir.

**İcazə** · `accounts.delete`

**Request JSON**

```json
{
  "headers": {"Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"},
  "path": {"account": "11111111-1111-4111-8111-111111111111"},
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

**Xətalar** · `401` — token etibarsızdır; `403` — `accounts.delete` icazəsi yoxdur; `404` — hesab tapılmır.

**Biznes təsiri** · Hesab yeni seçimlərdən çıxarılır; əvvəlki jurnal sətirləri və audit tarixçəsi saxlanılır.
