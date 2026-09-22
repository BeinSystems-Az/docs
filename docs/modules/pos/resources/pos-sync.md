---
sidebar_position: 9
title: POS cihaz sinxronizasiyası
---

# POS cihaz sinxronizasiyası

Aktivləşdirilmiş POS cihazından növbə, satış, qaytarış və kassa əməliyyatlarını idempotent qəbul edir.

:::info Kontekst
Aktivasiya və device-token refresh açıq protokoldur; sync əməliyyatı `Authorization: Device <tenant-uuid>.<device-secret>` credential-ı tələb edir.
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Aktivləşdirilmiş POS cihazından növbə, satış, qaytarış və kassa əməliyyatlarını idempotent qəbul edir. POS operativ satış kanalıdır; konfiqurasiya resursları nəticə yaratmır, post edilmiş satış və qaytarışlar isə stok və maliyyə nəticəsi yaradır.

**İlkin şərtlər.** Filial, anbar, nağd wallet, ödəniş tipləri və aktivləşdirilmiş POS cihazı mövcud olmalıdır.

**İş axını.** Registr və ödəniş tiplərini qurun, cihazı aktivləşdirin, növbə açın, əməliyyatları sync edin və növbəni bağlayın.

**State-lər və biznes təsiri.** Post edilmiş POS satışı stok çıxışı və maliyyə nəticəsi, qaytarış isə əks hərəkət yaradır; sync inbox idempotent emalı qoruyur.

**Əlaqəli resurslar.** Məhsullar, stok, wallet-lər, satış və mühasibatlıq.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.


| State | Mənası | Sistem təsiri |
| --- | --- | --- |
| `received` | Qəbul edilib | POS operation inbox-a yazılıb və emal növbəsini gözləyir. |
| `processing` | Emal olunur | Server əməliyyatı icra edir. |
| `processed` | Emal edilib | Əməliyyat uğurla yekunlaşıb. |
| `retry_wait` | Təkrar gözləyir | Müvəqqəti xətadan sonra növbəti emal cəhdini gözləyir. |
| `review_required` | Yoxlama tələb edir | Avtomatik emal dayandırılıb və insan yoxlaması tələb olunur. |

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `register_id` | UUID | Qeydi əlaqəli “register” resursuna bağlayır. |
| `installation_id` | UUID | POS tətbiq quraşdırmasının cihaz tərəfindən yaradılmış sabit UUID-sidir. |
| `operation_id` | UUID | Qeydi əlaqəli “operation” resursuna bağlayır. |
| `user_id` | UUID | Əməliyyatla əlaqəli istifadəçini göstərir. |
| `operation_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `payload` | array/object | Resursun “payload” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `payload_hash` | string/null | Resursun “payload hash” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `client_shift_id` | UUID | Qeydi əlaqəli “client shift” resursuna bağlayır. |
| `sequence` | number | Siyahıda emal və görünmə ardıcıllığını müəyyən edir. |
| `attempts` | number | Resursun “attempts” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `next_retry_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `processing_started_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `processed_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `last_error` | string/null | Resursun “last error” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `error_code` | string/null | Əlaqəli qeydin response-da göstərilən kodudur. |
| `result` | array/object | Resursun “result” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `pos_sale_id` | UUID | Qeydi əlaqəli “pos sale” resursuna bağlayır. |
| `result_entity_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `result_entity_id` | UUID | Qeydi əlaqəli “result entity” resursuna bağlayır. |
| `items` | array | Sənədin məhsul, hesab və ya əməliyyat sətirləridir. |
| `has_more` | boolean | Resurs üzrə davam səhifəsinin olub-olmadığını göstərir. |
| `next_after` | string/null | Növbəti sync səhifəsi üçün cursor dəyəridir. |
| `watermark` | string/null | Delta sync nəticəsinin server tərəfindən sabitlənmiş zaman sərhədidir. |
| `backlog` | integer | Hələ tam emal edilməmiş POS operation sayıdır. |
| `review_required` | integer | İnsan yoxlaması tələb edən POS operation sayıdır. |
| `next_expected_sequence` | integer | Serverin həmin registrdən gözlədiyi növbəti ardıcıllıq nömrəsidir. |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `device_access_token` | string/null | POS sync sorğularında `Device` authorization üçün qısamüddətli token-dir. |
| `device_refresh_token` | string/null | Yeni device access token almaq üçün uzunmüddətli refresh credential-dır. |
| `access_token_expires_at` | datetime/null | POS device access token-in bitmə vaxtıdır. |
| `server_time` | string/null | Serverin response-u yaratdığı vaxtdır. |
| `usage_policy` | object | Cihazın offline işləmə müddəti və xəbərdarlıq hədləridir. |
| `device_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `access_token_hash` | string/null | Resursun “access token hash” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `refresh_token_hash` | string/null | Resursun “refresh token hash” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `refresh_token_expires_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `last_seen_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `revoked_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |

## Endpointlər

### POS cihaz sinxronizasiyası: sinxronizasiya et

**Endpoint** · `POST /api/v1/pos/sync`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `pos_device.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Device 11111111-1111-4111-8111-111111111111.synthetic-device-secret"
  },
  "path": {},
  "query": {},
  "body": {
    "operations": [
      {
        "operation_id": "33333333-3333-4333-8333-333333333333",
        "sequence": 11,
        "user_id": "55555555-5555-4555-8555-555555555555",
        "type": "shift.open",
        "payload": {
          "client_shift_id": "66666666-6666-4666-8666-666666666666",
          "opened_at": "2026-09-22T09:00:00+04:00",
          "opening_cash": "100.00"
        }
      }
    ],
    "resources": {
      "products": {
        "mode": "delta",
        "since": "2026-09-22T08:00:00+04:00",
        "watermark": "2026-09-22T10:30:00+04:00",
        "after": null,
        "limit": 100
      }
    }
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "operations": [
      {
        "id": "22222222-2222-4222-8222-222222222222",
        "operation_id": "33333333-3333-4333-8333-333333333333",
        "type": "sale.create",
        "sequence": 11,
        "status": "processed",
        "result_entity_type": "pos_sale",
        "result_entity_id": "55555555-5555-4555-8555-555555555555"
      }
    ],
    "resources": {
      "products": {
        "items": [
          {
            "id": "66666666-6666-4666-8666-666666666666",
            "name": "Arabica qəhvə",
            "price": "25.50",
            "active": true
          }
        ],
        "has_more": false,
        "next_after": null,
        "watermark": "2026-09-22T10:30:00+04:00"
      }
    },
    "status": {
      "backlog": 0,
      "review_required": 0,
      "next_expected_sequence": 12
    },
    "server_time": "2026-09-22T10:30:00+04:00",
    "usage_policy": {
      "server_time": "2026-09-22T10:30:00+04:00",
      "offline": {
        "max_hours": 24,
        "warning_hours": [
          12,
          20,
          23
        ],
        "valid_until": "2026-09-23T10:30:00+04:00"
      }
    }
  }
}
```

**Xətalar** · `401` — device credential etibarsızdır; `409` — sequence və ya idempotency konflikti var; `422` — operation/resource kontraktı keçmir; `429` — push limiti keçilib.

**Biznes təsiri** · POS əməliyyatı satış/qaytarış state-inə uyğun stok və maliyyə nəticəsi yarada bilər; sync idempotency qaydaları tətbiq edilir.

### POS cihaz sinxronizasiyası: aktivləşdir

**Endpoint** · `POST /api/v1/pos/sync/activate`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `pos_device.update`

**Request JSON**

```json
{
  "headers": {},
  "path": {},
  "query": {},
  "body": {
    "tenant_account": "demo-tenant",
    "activation_code": "482731",
    "installation_id": "22222222-2222-4222-8222-222222222222",
    "device_name": "Mağaza kassası 1"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "POS installation activated.",
  "data": {
    "register_id": "33333333-3333-4333-8333-333333333333",
    "installation_id": "22222222-2222-4222-8222-222222222222",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "tenant_account": "demo-tenant",
    "device_access_token": "synthetic-device-access-token",
    "device_refresh_token": "11111111-1111-4111-8111-111111111111.synthetic-refresh-secret",
    "access_token_expires_at": "2026-09-22T11:30:00+04:00",
    "server_time": "2026-09-22T10:30:00+04:00",
    "usage_policy": {
      "server_time": "2026-09-22T10:30:00+04:00",
      "offline": {
        "max_hours": 24,
        "warning_hours": [
          12,
          20,
          23
        ],
        "valid_until": "2026-09-23T10:30:00+04:00"
      }
    }
  }
}
```

**Xətalar** · `422` — tenant adı və ya aktivasiya kodu etibarsızdır; `429` — aktivasiya cəhdi limiti keçilib.

**Biznes təsiri** · Yalnız POS cihaz credential-ı yaradılır və ya rotasiya olunur; stok və jurnal nəticəsi yaranmır.

### POS cihaz sinxronizasiyası: cihaz tokenini yenilə

**Endpoint** · `POST /api/v1/pos/sync/device-token/refresh`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `pos_device.update`

**Request JSON**

```json
{
  "headers": {},
  "path": {},
  "query": {},
  "body": {
    "refresh_token": "11111111-1111-4111-8111-111111111111.synthetic-refresh-secret",
    "installation_id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "device_access_token": "synthetic-device-access-token",
    "device_refresh_token": "11111111-1111-4111-8111-111111111111.synthetic-refresh-secret",
    "access_token_expires_at": "2026-09-22T11:30:00+04:00",
    "server_time": "2026-09-22T10:30:00+04:00",
    "usage_policy": {
      "server_time": "2026-09-22T10:30:00+04:00",
      "offline": {
        "max_hours": 24,
        "warning_hours": [
          12,
          20,
          23
        ],
        "valid_until": "2026-09-23T10:30:00+04:00"
      }
    }
  }
}
```

**Xətalar** · `401` — refresh credential etibarsızdır və ya revoke edilib; `422` — request validation-u keçmir.

**Biznes təsiri** · Yalnız POS cihaz credential-ı yaradılır və ya rotasiya olunur; stok və jurnal nəticəsi yaranmır.

