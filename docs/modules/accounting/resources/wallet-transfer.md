---
sidebar_position: 27
title: Pul hesabı transferləri
---

# Pul hesabı transferləri

Pul hesabı transferləri resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `wallet_transfers`
:::

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.


| State | Mənası | Sistem təsiri |
| --- | --- | --- |
| `user_id` | UUID | Sənədi yaradan User hesabı; sistem tərəfindən təyin olunur və dəyişmir. |
| `owner_id` | UUID/null | Cavabdeh əməkdaşın Employee ID-si; açıq seçilə, dəyişdirilə və təmizlənə bilər. |
| `draft` | Qaralama | Redaktə edilə bilər; post edilmiş əməliyyat nəticəsi yoxdur. |
| `posted` | Post edilib | Əməliyyat yekunlaşıb; moduldan asılı olaraq stok, baş kitab, vergi və ya borc nəticəsi yaranır. |
| `cancelled` | Ləğv edilib | Əməliyyat dayandırılıb; əvvəl yaranmış nəticələr domain qaydasına görə revers edilir. |
| `reversed` | Revers edilib | Əvvəlki post edilmiş nəticə əks jurnal və ya hərəkətlə geri çevrilib. |

## Field-lər

**Sənəd identifikasiyası.** `user_id` dəyişməyən yaradan User hesabıdır; `owner_id` dəyişdirilə və boş saxlanıla bilən cavabdeh Employee qeydidir. İstifadəçi ilə yaradılan sənəddə ilkin cavabdeh həmin istifadəçiyə bağlı aktiv əməkdaş olur. İnteqrasiya və fon əməliyyatında cavabdeh açıq seçilməyibsə boş qalır. İstifadəçi əməkdaş qeydinə bağlı deyilsə əl ilə sənəd yarada bilmir.


Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `source_wallet_id` | UUID | Qeydi əlaqəli “source wallet” resursuna bağlayır. |
| `destination_wallet_id` | UUID | Qeydi əlaqəli “destination wallet” resursuna bağlayır. |
| `currency_id` | UUID | Sənədin məbləğlərinin hesablandığı valyutanı seçir. |
| `date` | date/null | Əməliyyatın biznes tarixidir. |
| `amount` | number | Əməliyyatın pul məbləğidir. |
| `state` | enum/string | Resursun cari lifecycle vəziyyətidir. |
| `ref` | string/null | Xarici və ya daxili sənəd istinad nömrəsidir. |

## Endpointlər

### Pul hesabı transferləri siyahısını al

**Endpoint** · `GET /api/v1/wallet-transfers`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `wallet_transfers.read`

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
  "message": "Hesablararası köçürmələr uğurla siyahılandı.",
  "data": [
    {
      "name": "Nümunə qeyd",
      "state": "draft",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "date": "2026-09-22",
      "currency_id": "33333333-3333-4333-8333-333333333333",
      "source_wallet_id": "33333333-3333-4333-8333-333333333333",
      "destination_wallet_id": "33333333-3333-4333-8333-333333333333",
      "amount": 1,
      "ref": "REF-0001"
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

### Pul hesabı transferləri qeydi yarat

**Endpoint** · `POST /api/v1/wallet-transfers`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `wallet_transfers.create`

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
    "source_wallet_id": "33333333-3333-4333-8333-333333333333",
    "destination_wallet_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "amount": 1,
    "ref": "REF-0001"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Hesablararası köçürmə uğurla yaradıldı.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "source_wallet_id": "33333333-3333-4333-8333-333333333333",
    "destination_wallet_id": "33333333-3333-4333-8333-333333333333",
    "amount": 1,
    "ref": "REF-0001"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Pul hesabı transferləri state-ni dəyiş

**Endpoint** · `PATCH /api/v1/wallet-transfers/{entry}/state`

Resursun lifecycle vəziyyətini backend keçid qaydalarına uyğun dəyişir.

**İcazə** · `wallet_transfers.__document_transition__`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "entry": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "state": "posted",
    "date": "2026-09-22"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Köçürmənin vəziyyəti uğurla yeniləndi.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "source_wallet_id": "33333333-3333-4333-8333-333333333333",
    "destination_wallet_id": "33333333-3333-4333-8333-333333333333",
    "amount": 1,
    "ref": "REF-0001"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Pul hesabı transferləri qeydini sil

**Endpoint** · `DELETE /api/v1/wallet-transfers/{wallet_transfer}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `wallet_transfers.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "wallet_transfer": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Hesablararası köçürmə uğurla silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

### Pul hesabı transferləri qeydini oxu

**Endpoint** · `GET /api/v1/wallet-transfers/{wallet_transfer}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `wallet_transfers.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "wallet_transfer": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Hesablararası köçürmə uğurla gətirildi.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "source_wallet_id": "33333333-3333-4333-8333-333333333333",
    "destination_wallet_id": "33333333-3333-4333-8333-333333333333",
    "amount": 1,
    "ref": "REF-0001"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Pul hesabı transferləri qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/wallet-transfers/{wallet_transfer}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `wallet_transfers.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "wallet_transfer": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "source_wallet_id": "33333333-3333-4333-8333-333333333333",
    "destination_wallet_id": "33333333-3333-4333-8333-333333333333",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "date": "2026-09-22",
    "amount": 1,
    "ref": "REF-0001"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Hesablararası köçürmə uğurla yeniləndi.",
  "data": {
    "name": "Nümunə qeyd",
    "state": "draft",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "date": "2026-09-22",
    "currency_id": "33333333-3333-4333-8333-333333333333",
    "source_wallet_id": "33333333-3333-4333-8333-333333333333",
    "destination_wallet_id": "33333333-3333-4333-8333-333333333333",
    "amount": 1,
    "ref": "REF-0001"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Draft dəyişiklik yalnız sənədi yeniləyir; post/cancel keçidi baş kitab, borc və ya aktiv nəticəsi yarada və revers edə bilər.

