---
sidebar_position: 3
title: Çıxış şablonları
---

# Çıxış şablonları

Çıxış şablonları resursu çıxış və çap modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `output_templates`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Çıxış şablonları resursu çıxış və çap modulunda aid olduğu məlumat və əməliyyatları idarə edir. Çıxış mövcud sənədi render edir; biznes sənədinin state və məbləğini dəyişmir.

**İlkin şərtlər.** Mənbə sənəd və lazım olduqda uyğun output template mövcud olmalıdır.

**İş axını.** Template-i qurun, sənəd üçün output preview/render tələb edin və nəticəni çap və ya ixrac edin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Yoxdur; yalnız təqdimat nəticəsi yaradır.

**Əlaqəli resurslar.** Satış, satınalma, mühasibatlıq və stok sənədləri.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `document_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `format` | string/null | Resursun “format” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |
| `is_system` | boolean | Resursun “is system” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `is_system_default` | boolean | Resursun “is system default” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `published_revision_id` | UUID | Qeydi əlaqəli “published revision” resursuna bağlayır. |
| `archived_at` | datetime/null | Əməliyyatın baş verdiyi server vaxtıdır. |

## Endpointlər

### Çıxış şablonları siyahısını al

**Endpoint** · `GET /api/v1/output-templates`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `output_templates.read`

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
      "document_type": "sale_receipt",
      "format": "html",
      "active": true,
      "is_system": true,
      "is_system_default": true,
      "published_revision_id": "33333333-3333-4333-8333-333333333333",
      "archived_at": "2026-09-22T10:30:00+04:00"
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Çıxış şablonları qeydi yarat

**Endpoint** · `POST /api/v1/output-templates`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `output_templates.create`

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
    "document_type": "sale_receipt",
    "format": "html",
    "active": true,
    "payload": {
      "html": "Nümunə dəyər",
      "css": "Nümunə dəyər"
    },
    "configuration": {
      "paper": {
        "preset": "Nümunə dəyər",
        "width_mm": 1,
        "height_mm": 1
      },
      "margins_mm": [
        1
      ]
    }
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Çap şablonu yaradıldı.",
  "data": {
    "name": "Nümunə qeyd",
    "document_type": "sale_receipt",
    "format": "html",
    "active": true,
    "is_system": true,
    "is_system_default": true,
    "published_revision_id": "33333333-3333-4333-8333-333333333333",
    "archived_at": "2026-09-22T10:30:00+04:00",
    "payload": {
      "html": "Nümunə dəyər",
      "css": "Nümunə dəyər"
    },
    "configuration": {
      "paper": {
        "preset": "Nümunə dəyər",
        "width_mm": 1,
        "height_mm": 1
      },
      "margins_mm": [
        1
      ]
    }
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Çıxış şablonları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Çıxış şablonları qeydini sil

**Endpoint** · `DELETE /api/v1/output-templates/{outputTemplate}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `output_templates.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "outputTemplate": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Şablon arxivləndi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Çıxış şablonları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Çıxış şablonları qeydini oxu

**Endpoint** · `GET /api/v1/output-templates/{outputTemplate}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `output_templates.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "outputTemplate": "22222222-2222-4222-8222-222222222222"
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
    "document_type": "sale_receipt",
    "format": "html",
    "active": true,
    "is_system": true,
    "is_system_default": true,
    "published_revision_id": "33333333-3333-4333-8333-333333333333",
    "archived_at": "2026-09-22T10:30:00+04:00"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Çıxış şablonları: təyinatları al

**Endpoint** · `PUT /api/v1/output-templates/{outputTemplate}/assignments`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `output_templates.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "outputTemplate": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "assignments": [
      {
        "branch_id": "44444444-4444-4444-8444-444444444444",
        "pos_register_id": "33333333-3333-4333-8333-333333333333"
      }
    ]
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Təyinatlar yeniləndi.",
  "data": {
    "name": "Nümunə qeyd",
    "document_type": "sale_receipt",
    "format": "html",
    "active": true,
    "is_system": true,
    "is_system_default": true,
    "published_revision_id": "33333333-3333-4333-8333-333333333333",
    "archived_at": "2026-09-22T10:30:00+04:00",
    "assignments": [
      {
        "branch_id": "44444444-4444-4444-8444-444444444444",
        "pos_register_id": "33333333-3333-4333-8333-333333333333"
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Çıxış şablonları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Çıxış şablonları: surətini yarat

**Endpoint** · `POST /api/v1/output-templates/{outputTemplate}/clone`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `output_templates.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "outputTemplate": "22222222-2222-4222-8222-222222222222"
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
  "message": "Şablon klonlandı.",
  "data": {
    "name": "Nümunə qeyd",
    "document_type": "sale_receipt",
    "format": "html",
    "active": true,
    "is_system": true,
    "is_system_default": true,
    "published_revision_id": "33333333-3333-4333-8333-333333333333",
    "archived_at": "2026-09-22T10:30:00+04:00"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Çıxış şablonları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Çıxış şablonları: qaralamanı yenilə

**Endpoint** · `PATCH /api/v1/output-templates/{outputTemplate}/draft`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `output_templates.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "outputTemplate": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd",
    "active": true,
    "payload": {
      "html": "Nümunə dəyər",
      "css": "Nümunə dəyər"
    },
    "configuration": {
      "paper": {
        "preset": "Nümunə dəyər",
        "width_mm": 1,
        "height_mm": 1
      },
      "margins_mm": [
        1
      ]
    }
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qaralama saxlanıldı.",
  "data": {
    "name": "Nümunə qeyd",
    "document_type": "sale_receipt",
    "format": "html",
    "active": true,
    "is_system": true,
    "is_system_default": true,
    "published_revision_id": "33333333-3333-4333-8333-333333333333",
    "archived_at": "2026-09-22T10:30:00+04:00",
    "payload": {
      "html": "Nümunə dəyər",
      "css": "Nümunə dəyər"
    },
    "configuration": {
      "paper": {
        "preset": "Nümunə dəyər",
        "width_mm": 1,
        "height_mm": 1
      },
      "margins_mm": [
        1
      ]
    }
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Çıxış şablonları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Çıxış şablonları: önizləmə yarat

**Endpoint** · `POST /api/v1/output-templates/{outputTemplate}/preview`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `output_templates.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "outputTemplate": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "record_id": "33333333-3333-4333-8333-333333333333",
    "sample": true,
    "payload": {
      "html": "Nümunə dəyər",
      "css": "Nümunə dəyər"
    },
    "configuration": {}
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
    "document_type": "sale_receipt",
    "format": "html",
    "active": true,
    "is_system": true,
    "is_system_default": true,
    "published_revision_id": "33333333-3333-4333-8333-333333333333",
    "archived_at": "2026-09-22T10:30:00+04:00",
    "record_id": "33333333-3333-4333-8333-333333333333",
    "sample": true,
    "payload": {
      "html": "Nümunə dəyər",
      "css": "Nümunə dəyər"
    },
    "configuration": {}
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Çıxış şablonları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Çıxış şablonları: dərc et

**Endpoint** · `POST /api/v1/output-templates/{outputTemplate}/publish`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `output_templates.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "outputTemplate": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Şablon publish edildi.",
  "data": {
    "name": "Nümunə qeyd",
    "document_type": "sale_receipt",
    "format": "html",
    "active": true,
    "is_system": true,
    "is_system_default": true,
    "published_revision_id": "33333333-3333-4333-8333-333333333333",
    "archived_at": "2026-09-22T10:30:00+04:00"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Çıxış şablonları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

