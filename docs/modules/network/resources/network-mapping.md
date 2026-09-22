---
sidebar_position: 4
title: Şəbəkə mapping-ləri
---

# Şəbəkə mapping-ləri

Şəbəkə mapping-ləri resursu biznes şəbəkəsi modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Şəbəkə mapping-ləri resursu biznes şəbəkəsi modulunda aid olduğu məlumat və əməliyyatları idarə edir. Şəbəkə qəbul və göndəriş qatıdır; yerli biznes sənədi yalnız import/accept əməliyyatında yaranır.

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
| `connection_id` | UUID | Qeydi əlaqəli “connection” resursuna bağlayır. |
| `resource_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `remote_tenant_id` | UUID | Qeydi əlaqəli “remote tenant” resursuna bağlayır. |
| `remote_resource_id` | UUID | Qeydi əlaqəli “remote resource” resursuna bağlayır. |
| `remote_resource` | array/object | Resursun “remote resource” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `local_resource_id` | UUID | Qeydi əlaqəli “local resource” resursuna bağlayır. |

## Endpointlər

### Şəbəkə mapping-ləri: seçimləri al

**Endpoint** · `GET /api/v1/business-network/connections/{connection}/accept-options`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `business_network.accept` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "connection": "22222222-2222-4222-8222-222222222222"
  },
  "query": {
    "type": "product",
    "q": "qəhvə"
  },
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
    "resource_type": "sale_order",
    "remote_tenant_id": "33333333-3333-4333-8333-333333333333",
    "remote_resource_id": "33333333-3333-4333-8333-333333333333",
    "remote_resource": {},
    "local_resource_id": "33333333-3333-4333-8333-333333333333",
    "type": "product",
    "q": "qəhvə"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Şəbəkə mapping-ləri: seçimləri al

**Endpoint** · `GET /api/v1/business-network/connections/{connection}/mapping-options`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

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
  "query": {
    "type": "product",
    "q": "qəhvə"
  },
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
    "resource_type": "sale_order",
    "remote_tenant_id": "33333333-3333-4333-8333-333333333333",
    "remote_resource_id": "33333333-3333-4333-8333-333333333333",
    "remote_resource": {},
    "local_resource_id": "33333333-3333-4333-8333-333333333333",
    "type": "product",
    "q": "qəhvə"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Şəbəkə mapping-ləri siyahısını al

**Endpoint** · `GET /api/v1/business-network/connections/{connection}/mappings`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `business_network.view` global permission

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
  "message": null,
  "data": [
    {
      "connection_id": "33333333-3333-4333-8333-333333333333",
      "resource_type": "sale_order",
      "remote_tenant_id": "33333333-3333-4333-8333-333333333333",
      "remote_resource_id": "33333333-3333-4333-8333-333333333333",
      "remote_resource": {},
      "local_resource_id": "33333333-3333-4333-8333-333333333333"
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Şəbəkə mapping-ləri qeydi yarat

**Endpoint** · `PUT /api/v1/business-network/connections/{connection}/mappings`

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
  "message": null,
  "data": {
    "connection_id": "33333333-3333-4333-8333-333333333333",
    "resource_type": "sale_order",
    "remote_tenant_id": "33333333-3333-4333-8333-333333333333",
    "remote_resource_id": "33333333-3333-4333-8333-333333333333",
    "remote_resource": {},
    "local_resource_id": "33333333-3333-4333-8333-333333333333",
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

**Biznes təsiri** · Şəbəkə mapping-ləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Şəbəkə mapping-ləri qeydini sil

**Endpoint** · `DELETE /api/v1/business-network/connections/{connection}/mappings/{mapping}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `business_network.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "connection": "22222222-2222-4222-8222-222222222222",
    "mapping": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Mapping silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Şəbəkə mapping-ləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

