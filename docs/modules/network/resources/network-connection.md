---
sidebar_position: 2
title: Şəbəkə əlaqələri
---

# Şəbəkə əlaqələri

Şəbəkə əlaqələri resursu biznes şəbəkəsi modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Şəbəkə əlaqələri resursu biznes şəbəkəsi modulunda aid olduğu məlumat və əməliyyatları idarə edir. Şəbəkə qəbul və göndəriş qatıdır; yerli biznes sənədi yalnız import/accept əməliyyatında yaranır.

**İlkin şərtlər.** Hər iki tərəfin profili, əlaqəsi və tələb olunan master-data mapping-ləri hazır olmalıdır.

**İş axını.** Profili tapın, əlaqə yaradın, mapping-ləri qurun, exchange göndərin və qarşı tərəfdə qəbul və ya rədd edin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Qəbul edilən exchange yerli sənəd yarada bilər; rədd yalnız mübadilə state-ni dəyişir.

**Əlaqəli resurslar.** Tərəfdaşlar, satış, satınalma və inteqrasiyalar.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `tenant_low_id` | UUID | Qeydi əlaqəli “tenant low” resursuna bağlayır. |
| `tenant_high_id` | UUID | Qeydi əlaqəli “tenant high” resursuna bağlayır. |
| `requested_by_tenant_id` | UUID | Qeydi əlaqəli “requested by tenant” resursuna bağlayır. |
| `requested_by_user_id` | UUID | Qeydi əlaqəli “requested by user” resursuna bağlayır. |
| `responded_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `responded_by_user_id` | UUID | Qeydi əlaqəli “responded by user” resursuna bağlayır. |
| `revoked_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |
| `revoked_by_tenant_id` | UUID | Qeydi əlaqəli “revoked by tenant” resursuna bağlayır. |
| `revoked_by_user_id` | UUID | Qeydi əlaqəli “revoked by user” resursuna bağlayır. |

## Endpointlər

### Şəbəkə əlaqələri siyahısını al

**Endpoint** · `GET /api/v1/business-network/connections`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `business_network.view` global permission

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
      "status": "active",
      "tenant_low_id": "33333333-3333-4333-8333-333333333333",
      "tenant_high_id": "33333333-3333-4333-8333-333333333333",
      "requested_by_tenant_id": "33333333-3333-4333-8333-333333333333",
      "requested_by_user_id": "33333333-3333-4333-8333-333333333333",
      "responded_at": "2026-09-22T10:30:00+04:00",
      "responded_by_user_id": "33333333-3333-4333-8333-333333333333",
      "revoked_at": "2026-09-22T10:30:00+04:00",
      "revoked_by_tenant_id": "33333333-3333-4333-8333-333333333333",
      "revoked_by_user_id": "33333333-3333-4333-8333-333333333333"
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Şəbəkə əlaqələri qeydi yarat

**Endpoint** · `POST /api/v1/business-network/connections`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `business_network.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "account": "demo-company"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Əlaqə dəvəti göndərildi.",
  "data": {
    "status": "active",
    "tenant_low_id": "33333333-3333-4333-8333-333333333333",
    "tenant_high_id": "33333333-3333-4333-8333-333333333333",
    "requested_by_tenant_id": "33333333-3333-4333-8333-333333333333",
    "requested_by_user_id": "33333333-3333-4333-8333-333333333333",
    "responded_at": "2026-09-22T10:30:00+04:00",
    "responded_by_user_id": "33333333-3333-4333-8333-333333333333",
    "revoked_at": "2026-09-22T10:30:00+04:00",
    "revoked_by_tenant_id": "33333333-3333-4333-8333-333333333333",
    "revoked_by_user_id": "33333333-3333-4333-8333-333333333333",
    "account": "demo-company"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Şəbəkə əlaqələri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Şəbəkə əlaqələri qeydini sil

**Endpoint** · `DELETE /api/v1/business-network/connections/{connection}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `business_network.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "connection": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Əlaqə dayandırıldı.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Şəbəkə əlaqələri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Şəbəkə əlaqələri qeydini yenilə

**Endpoint** · `PATCH /api/v1/business-network/connections/{connection}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `business_network.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "connection": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "default_branch_id": "33333333-3333-4333-8333-333333333333",
    "default_stock_id": "33333333-3333-4333-8333-333333333333",
    "default_wallet_id": "33333333-3333-4333-8333-333333333333",
    "create_partner": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Əlaqə ayarları yeniləndi.",
  "data": {
    "status": "active",
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "tenant_low_id": "33333333-3333-4333-8333-333333333333",
    "tenant_high_id": "33333333-3333-4333-8333-333333333333",
    "requested_by_tenant_id": "33333333-3333-4333-8333-333333333333",
    "requested_by_user_id": "33333333-3333-4333-8333-333333333333",
    "responded_at": "2026-09-22T10:30:00+04:00",
    "responded_by_user_id": "33333333-3333-4333-8333-333333333333",
    "revoked_at": "2026-09-22T10:30:00+04:00",
    "revoked_by_tenant_id": "33333333-3333-4333-8333-333333333333",
    "revoked_by_user_id": "33333333-3333-4333-8333-333333333333",
    "default_branch_id": "33333333-3333-4333-8333-333333333333",
    "default_stock_id": "33333333-3333-4333-8333-333333333333",
    "default_wallet_id": "33333333-3333-4333-8333-333333333333",
    "create_partner": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Şəbəkə əlaqələri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Şəbəkə əlaqələri: qəbul et

**Endpoint** · `POST /api/v1/business-network/connections/{connection}/accept`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `business_network.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "connection": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Əlaqə qəbul edildi.",
  "data": {
    "status": "active",
    "tenant_low_id": "33333333-3333-4333-8333-333333333333",
    "tenant_high_id": "33333333-3333-4333-8333-333333333333",
    "requested_by_tenant_id": "33333333-3333-4333-8333-333333333333",
    "requested_by_user_id": "33333333-3333-4333-8333-333333333333",
    "responded_at": "2026-09-22T10:30:00+04:00",
    "responded_by_user_id": "33333333-3333-4333-8333-333333333333",
    "revoked_at": "2026-09-22T10:30:00+04:00",
    "revoked_by_tenant_id": "33333333-3333-4333-8333-333333333333",
    "revoked_by_user_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Şəbəkə əlaqələri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Şəbəkə əlaqələri: rədd et

**Endpoint** · `POST /api/v1/business-network/connections/{connection}/reject`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `business_network.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "connection": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Əlaqə rədd edildi.",
  "data": {
    "status": "active",
    "tenant_low_id": "33333333-3333-4333-8333-333333333333",
    "tenant_high_id": "33333333-3333-4333-8333-333333333333",
    "requested_by_tenant_id": "33333333-3333-4333-8333-333333333333",
    "requested_by_user_id": "33333333-3333-4333-8333-333333333333",
    "responded_at": "2026-09-22T10:30:00+04:00",
    "responded_by_user_id": "33333333-3333-4333-8333-333333333333",
    "revoked_at": "2026-09-22T10:30:00+04:00",
    "revoked_by_tenant_id": "33333333-3333-4333-8333-333333333333",
    "revoked_by_user_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Şəbəkə əlaqələri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

