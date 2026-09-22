---
sidebar_position: 4
title: Dashboard-lar
---

# Dashboard-lar

Dashboard-lar resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `dashboards`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Dashboard-lar resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu resurslar UI və platform davranışını idarə edir; biznes sənədinin domain kontraktını əvəz etmir.

**İlkin şərtlər.** Endpointdən asılı olaraq tenant autentifikasiyası, istifadəçi və platform metadata-sı tələb olunur.

**İş axını.** Schema və metadata-nı oxuyun, istifadəçi seçimlərini saxlayın, audit və sistem vəziyyətini izləyin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Əsasən platform konfiqurasiyası və görünüş dəyişir; reset kimi inzibati əməliyyatlar ayrıca ciddi məhdudiyyət daşıyır.

**Əlaqəli resurslar.** Autentifikasiya, bütün biznes modulları və audit.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `owner_user_id` | UUID | Qeydi əlaqəli “owner user” resursuna bağlayır. |
| `source_dashboard_id` | UUID | Qeydi əlaqəli “source dashboard” resursuna bağlayır. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `description` | string/null | Qeyd haqqında əlavə izahdır. |
| `kind` | enum/string | Resursun “kind” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `visibility` | enum/string | Resursun “visibility” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `default_filters` | array/object | Resursun “default filters” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `is_default` | boolean | Resursun “is default” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `revision` | number | Resursun “revision” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `items` | array/object | Sənədin məhsul, hesab və ya əməliyyat sətirləridir. |
| `items[].id` | UUID | Qeydin unikal identifikatorudur. |
| `items[].order_index` | number | Massiv elementində “order index” dəyərini saxlayır. |

## Endpointlər

### Dashboard-lar kataloqunu al

**Endpoint** · `GET /api/v1/dashboard/report-catalog`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `dashboards.read`

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
    "name": "Nümunə qeyd",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "source_dashboard_id": "33333333-3333-4333-8333-333333333333",
    "description": "Sintetik nümunə məlumatı",
    "kind": "personal",
    "visibility": "private",
    "default_filters": {},
    "is_default": true,
    "revision": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Dashboard-lar siyahısını al

**Endpoint** · `GET /api/v1/dashboards`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `dashboards.read`

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
      "name": "Nümunə qeyd",
      "owner_user_id": "33333333-3333-4333-8333-333333333333",
      "source_dashboard_id": "33333333-3333-4333-8333-333333333333",
      "description": "Sintetik nümunə məlumatı",
      "kind": "personal",
      "visibility": "private",
      "default_filters": {},
      "is_default": true,
      "revision": 1
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Dashboard-lar qeydi yarat

**Endpoint** · `POST /api/v1/dashboards`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `dashboards.create`

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
    "description": "Sintetik nümunə məlumatı",
    "kind": "personal",
    "visibility": "private",
    "default_filters": {},
    "is_default": true,
    "role_ids": [
      1
    ]
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "source_dashboard_id": "33333333-3333-4333-8333-333333333333",
    "description": "Sintetik nümunə məlumatı",
    "kind": "personal",
    "visibility": "private",
    "default_filters": {},
    "is_default": true,
    "revision": 1,
    "role_ids": [
      1
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Dashboard-lar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Dashboard-lar qeydini sil

**Endpoint** · `DELETE /api/v1/dashboards/{dashboard}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `dashboards.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "dashboard": "22222222-2222-4222-8222-222222222222"
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

**Biznes təsiri** · Dashboard-lar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Dashboard-lar qeydini oxu

**Endpoint** · `GET /api/v1/dashboards/{dashboard}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `dashboards.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "dashboard": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "source_dashboard_id": "33333333-3333-4333-8333-333333333333",
    "description": "Sintetik nümunə məlumatı",
    "kind": "personal",
    "visibility": "private",
    "default_filters": {},
    "is_default": true,
    "revision": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Dashboard-lar qeydini yenilə

**Endpoint** · `PATCH /api/v1/dashboards/{dashboard}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `dashboards.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "dashboard": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "revision": 1,
    "name": "Nümunə qeyd",
    "description": "Sintetik nümunə məlumatı",
    "visibility": "private",
    "default_filters": {},
    "role_ids": [
      1
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
    "name": "Nümunə qeyd",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "source_dashboard_id": "33333333-3333-4333-8333-333333333333",
    "description": "Sintetik nümunə məlumatı",
    "kind": "personal",
    "visibility": "private",
    "default_filters": {},
    "is_default": true,
    "revision": 1,
    "role_ids": [
      1
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Dashboard-lar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Dashboard-lar: surətini yarat

**Endpoint** · `POST /api/v1/dashboards/{dashboard}/clone`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `dashboards.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "dashboard": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "source_dashboard_id": "33333333-3333-4333-8333-333333333333",
    "description": "Sintetik nümunə məlumatı",
    "kind": "personal",
    "visibility": "private",
    "default_filters": {},
    "is_default": true,
    "revision": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Dashboard-lar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Dashboard-lar: hesablanmış məlumatı al

**Endpoint** · `POST /api/v1/dashboards/{dashboard}/data`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `dashboards.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "dashboard": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "filters": {
      "date_from": "2026-09-22",
      "date_to": "2026-09-22",
      "as_of": "2026-09-22",
      "partner_id": "33333333-3333-4333-8333-333333333333",
      "stock_id": "33333333-3333-4333-8333-333333333333",
      "product_id": "33333333-3333-4333-8333-333333333333",
      "category_id": "33333333-3333-4333-8333-333333333333"
    },
    "widget_ids": [
      "33333333-3333-4333-8333-333333333333"
    ],
    "refresh": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "source_dashboard_id": "33333333-3333-4333-8333-333333333333",
    "description": "Sintetik nümunə məlumatı",
    "kind": "personal",
    "visibility": "private",
    "default_filters": {},
    "is_default": true,
    "revision": 1,
    "filters": {
      "date_from": "2026-09-22",
      "date_to": "2026-09-22",
      "as_of": "2026-09-22",
      "partner_id": "33333333-3333-4333-8333-333333333333",
      "stock_id": "33333333-3333-4333-8333-333333333333",
      "product_id": "33333333-3333-4333-8333-333333333333",
      "category_id": "33333333-3333-4333-8333-333333333333"
    },
    "widget_ids": [
      "33333333-3333-4333-8333-333333333333"
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Dashboard-lar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Dashboard-lar: layout-u saxla

**Endpoint** · `PUT /api/v1/dashboards/{dashboard}/layout`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `dashboards.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "dashboard": "22222222-2222-4222-8222-222222222222"
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
    "name": "Nümunə qeyd",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "source_dashboard_id": "33333333-3333-4333-8333-333333333333",
    "description": "Sintetik nümunə məlumatı",
    "kind": "personal",
    "visibility": "private",
    "default_filters": {},
    "is_default": true,
    "revision": 1,
    "items": [
      {
        "id": "33333333-3333-4333-8333-333333333333",
        "order_index": 1
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Dashboard-lar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Dashboard-lar: default et

**Endpoint** · `POST /api/v1/dashboards/{dashboard}/set-default`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `dashboards.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "dashboard": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "revision": 1
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "source_dashboard_id": "33333333-3333-4333-8333-333333333333",
    "description": "Sintetik nümunə məlumatı",
    "kind": "personal",
    "visibility": "private",
    "default_filters": {},
    "is_default": true,
    "revision": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Dashboard-lar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Dashboard-lar: widget əlavə et

**Endpoint** · `POST /api/v1/dashboards/{dashboard}/widgets`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `dashboards.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "dashboard": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "revision": 1,
    "report_key": "h-201",
    "title": "Nümunə başlıq",
    "visual_type": "card",
    "filter_overrides": {},
    "visual_config": {}
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "source_dashboard_id": "33333333-3333-4333-8333-333333333333",
    "description": "Sintetik nümunə məlumatı",
    "kind": "personal",
    "visibility": "private",
    "default_filters": {},
    "is_default": true,
    "revision": 1,
    "report_key": "h-201",
    "title": "Nümunə başlıq",
    "visual_type": "card",
    "filter_overrides": {},
    "visual_config": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Dashboard-lar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Dashboard-lar: widget-i sil

**Endpoint** · `DELETE /api/v1/dashboards/{dashboard}/widgets/{widget}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `dashboards.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "dashboard": "22222222-2222-4222-8222-222222222222",
    "widget": "22222222-2222-4222-8222-222222222222"
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

**Biznes təsiri** · Dashboard-lar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Dashboard-lar: widget-i yenilə

**Endpoint** · `PATCH /api/v1/dashboards/{dashboard}/widgets/{widget}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `dashboards.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "dashboard": "22222222-2222-4222-8222-222222222222",
    "widget": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "revision": 1,
    "report_key": "h-201",
    "title": "Nümunə başlıq",
    "visual_type": "card",
    "filter_overrides": {},
    "visual_config": {}
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "name": "Nümunə qeyd",
    "owner_user_id": "33333333-3333-4333-8333-333333333333",
    "source_dashboard_id": "33333333-3333-4333-8333-333333333333",
    "description": "Sintetik nümunə məlumatı",
    "kind": "personal",
    "visibility": "private",
    "default_filters": {},
    "is_default": true,
    "revision": 1,
    "report_key": "h-201",
    "title": "Nümunə başlıq",
    "visual_type": "card",
    "filter_overrides": {},
    "visual_config": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Dashboard-lar konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

