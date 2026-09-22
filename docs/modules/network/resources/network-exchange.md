---
sidebar_position: 3
title: Sənəd mübadiləsi
---

# Sənəd mübadiləsi

Sənəd mübadiləsi resursu biznes şəbəkəsi modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Sənəd mübadiləsi resursu biznes şəbəkəsi modulunda aid olduğu məlumat və əməliyyatları idarə edir. Şəbəkə qəbul və göndəriş qatıdır; yerli biznes sənədi yalnız import/accept əməliyyatında yaranır.

**İlkin şərtlər.** Hər iki tərəfin profili, əlaqəsi və tələb olunan master-data mapping-ləri hazır olmalıdır.

**İş axını.** Profili tapın, əlaqə yaradın, mapping-ləri qurun, exchange göndərin və qarşı tərəfdə qəbul və ya rədd edin.

**State-lər və biznes təsiri.** Qəbul edilən exchange yerli sənəd yarada bilər; rədd yalnız mübadilə state-ni dəyişir.

**Əlaqəli resurslar.** Tərəfdaşlar, satış, satınalma və inteqrasiyalar.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `connection_id` | UUID | Qeydi əlaqəli “connection” resursuna bağlayır. |
| `sender_tenant_id` | UUID | Qeydi əlaqəli “sender tenant” resursuna bağlayır. |
| `recipient_tenant_id` | UUID | Qeydi əlaqəli “recipient tenant” resursuna bağlayır. |
| `source_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `source_id` | UUID | Qeydi əlaqəli “source” resursuna bağlayır. |
| `target_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `target_id` | UUID | Qeydi əlaqəli “target” resursuna bağlayır. |
| `latest_version` | number | Resursun “latest version” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Sənəd mübadiləsi: göndər

**Endpoint** · `POST /api/v1/business-network/connections/{connection}/documents/{sourceType}/{sourceId}/send`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `business_network.send` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "connection": "22222222-2222-4222-8222-222222222222",
    "sourceType": "22222222-2222-4222-8222-222222222222",
    "sourceId": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Sənəd qarşı şirkətə göndərildi.",
  "data": {
    "connection_id": "33333333-3333-4333-8333-333333333333",
    "sender_tenant_id": "33333333-3333-4333-8333-333333333333",
    "recipient_tenant_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "target_type": "standard",
    "target_id": "33333333-3333-4333-8333-333333333333",
    "latest_version": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Sənəd mübadiləsi konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Sənəd mübadiləsi: tarixçəni al

**Endpoint** · `GET /api/v1/business-network/documents/{localType}/{localId}/history`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `business_network.view` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "localType": "22222222-2222-4222-8222-222222222222",
    "localId": "22222222-2222-4222-8222-222222222222"
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
    "connection_id": "33333333-3333-4333-8333-333333333333",
    "sender_tenant_id": "33333333-3333-4333-8333-333333333333",
    "recipient_tenant_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "target_type": "standard",
    "target_id": "33333333-3333-4333-8333-333333333333",
    "latest_version": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Sənəd mübadiləsi siyahısını al

**Endpoint** · `GET /api/v1/business-network/exchanges`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `business_network.view` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "box": "inbox",
    "status": "pending",
    "q": "qəhvə",
    "page": 1,
    "per_page": 1
  },
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
      "status": "pending",
      "connection_id": "33333333-3333-4333-8333-333333333333",
      "sender_tenant_id": "33333333-3333-4333-8333-333333333333",
      "recipient_tenant_id": "33333333-3333-4333-8333-333333333333",
      "source_type": "standard",
      "source_id": "33333333-3333-4333-8333-333333333333",
      "target_type": "standard",
      "target_id": "33333333-3333-4333-8333-333333333333",
      "latest_version": 1,
      "box": "inbox"
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Sənəd mübadiləsi: say göstəricilərini al

**Endpoint** · `GET /api/v1/business-network/exchanges/counts`

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
  "data": {
    "connection_id": "33333333-3333-4333-8333-333333333333",
    "sender_tenant_id": "33333333-3333-4333-8333-333333333333",
    "recipient_tenant_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "target_type": "standard",
    "target_id": "33333333-3333-4333-8333-333333333333",
    "latest_version": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Sənəd mübadiləsi qeydini oxu

**Endpoint** · `GET /api/v1/business-network/versions/{version}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `business_network.view` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "version": "22222222-2222-4222-8222-222222222222"
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
    "connection_id": "33333333-3333-4333-8333-333333333333",
    "sender_tenant_id": "33333333-3333-4333-8333-333333333333",
    "recipient_tenant_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "target_type": "standard",
    "target_id": "33333333-3333-4333-8333-333333333333",
    "latest_version": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Sənəd mübadiləsi: qəbul et

**Endpoint** · `POST /api/v1/business-network/versions/{version}/accept`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `business_network.accept` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "version": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "mappings": [
      {
        "resource_type": "product",
        "remote_resource_id": "33333333-3333-4333-8333-333333333333",
        "local_resource_id": "33333333-3333-4333-8333-333333333333"
      }
    ]
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Gələn sənəd lokal qaralama kimi yaradıldı.",
  "data": {
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "connection_id": "33333333-3333-4333-8333-333333333333",
    "sender_tenant_id": "33333333-3333-4333-8333-333333333333",
    "recipient_tenant_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "target_type": "standard",
    "target_id": "33333333-3333-4333-8333-333333333333",
    "latest_version": 1,
    "stock_id": "33333333-3333-4333-8333-333333333333",
    "wallet_id": "33333333-3333-4333-8333-333333333333",
    "mappings": [
      {
        "resource_type": "product",
        "remote_resource_id": "33333333-3333-4333-8333-333333333333",
        "local_resource_id": "33333333-3333-4333-8333-333333333333"
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Sənəd mübadiləsi konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Sənəd mübadiləsi qeydini ləğv et

**Endpoint** · `POST /api/v1/business-network/versions/{version}/cancel-request`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `business_network.send` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "version": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Ləğv tələbi göndərildi.",
  "data": {
    "connection_id": "33333333-3333-4333-8333-333333333333",
    "sender_tenant_id": "33333333-3333-4333-8333-333333333333",
    "recipient_tenant_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "target_type": "standard",
    "target_id": "33333333-3333-4333-8333-333333333333",
    "latest_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Sənəd mübadiləsi konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Sənəd mübadiləsi: ləğv tələbini həll et

**Endpoint** · `POST /api/v1/business-network/versions/{version}/cancel-resolution`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `business_network.accept` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "version": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "decision": "acknowledge",
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Ləğv tələbi cavablandırıldı.",
  "data": {
    "connection_id": "33333333-3333-4333-8333-333333333333",
    "sender_tenant_id": "33333333-3333-4333-8333-333333333333",
    "recipient_tenant_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "target_type": "standard",
    "target_id": "33333333-3333-4333-8333-333333333333",
    "latest_version": 1,
    "decision": "acknowledge",
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Sənəd mübadiləsi konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Sənəd mübadiləsi: önizləmə yarat

**Endpoint** · `GET /api/v1/business-network/versions/{version}/preview`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `business_network.accept` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "version": "22222222-2222-4222-8222-222222222222"
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
    "connection_id": "33333333-3333-4333-8333-333333333333",
    "sender_tenant_id": "33333333-3333-4333-8333-333333333333",
    "recipient_tenant_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "target_type": "standard",
    "target_id": "33333333-3333-4333-8333-333333333333",
    "latest_version": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Sənəd mübadiləsi: rədd et

**Endpoint** · `POST /api/v1/business-network/versions/{version}/reject`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `business_network.accept` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "version": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Gələn sənəd rədd edildi.",
  "data": {
    "connection_id": "33333333-3333-4333-8333-333333333333",
    "sender_tenant_id": "33333333-3333-4333-8333-333333333333",
    "recipient_tenant_id": "33333333-3333-4333-8333-333333333333",
    "source_type": "standard",
    "source_id": "33333333-3333-4333-8333-333333333333",
    "target_type": "standard",
    "target_id": "33333333-3333-4333-8333-333333333333",
    "latest_version": 1,
    "note": "Sintetik nümunə məlumatı"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Sənəd mübadiləsi konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

