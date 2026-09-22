---
sidebar_position: 11
title: İnterfeys layout-u
---

# İnterfeys layout-u

İnterfeys layout-u resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** İnterfeys layout-u resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu resurslar UI və platform davranışını idarə edir; biznes sənədinin domain kontraktını əvəz etmir.

**İlkin şərtlər.** Endpointdən asılı olaraq tenant autentifikasiyası, istifadəçi və platform metadata-sı tələb olunur.

**İş axını.** Schema və metadata-nı oxuyun, istifadəçi seçimlərini saxlayın, audit və sistem vəziyyətini izləyin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Əsasən platform konfiqurasiyası və görünüş dəyişir; reset kimi inzibati əməliyyatlar ayrıca ciddi məhdudiyyət daşıyır.

**Əlaqəli resurslar.** Autentifikasiya, bütün biznes modulları və audit.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `show` | string/null | Resursun “show” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `default_view_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `parent_id` | UUID | Qeydi əlaqəli “parent” resursuna bağlayır. |
| `order_index` | number | Resursun “order index” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `title` | string/null | Resursun “title” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `icon` | string/null | Resursun “icon” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `tree` | string/null | Resursun “tree” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `system_items` | string/null | Resursun “system items” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `groups` | string/null | Resursun “groups” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### İnterfeys layout-u: menyunu al

**Endpoint** · `GET /api/v1/layout/menu`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · Ayrıca resource permission tələb etmir.

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
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### İnterfeys layout-u: menyu seçimlərini yenilə

**Endpoint** · `PATCH /api/v1/layout/menu/{navigation_menu_id}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `navigation.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "navigation_menu_id": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "show": "Nümunə dəyər",
    "default_view_type": "standard",
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "order_index": 1,
    "title": "Nümunə başlıq",
    "icon": "Nümunə dəyər"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "show": "Nümunə dəyər",
    "default_view_type": "standard",
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "order_index": 1,
    "title": "Nümunə başlıq",
    "icon": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İnterfeys layout-u konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### İnterfeys layout-u: menyu konfiqurasiyasını al

**Endpoint** · `GET /api/v1/layout/menu/config`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `navigation.manage` global permission

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
    "tree": "Nümunə dəyər",
    "system_items": "Nümunə dəyər",
    "groups": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### İnterfeys layout-u: menyu konfiqurasiyasını saxla

**Endpoint** · `PUT /api/v1/layout/menu/config`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `navigation.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "items": [
      {
        "id": "22222222-2222-4222-8222-222222222222",
        "type": "system",
        "parent_id": "33333333-3333-4333-8333-333333333333",
        "order_index": 1,
        "show": "Nümunə dəyər",
        "title": "Nümunə başlıq",
        "icon": "Nümunə dəyər",
        "default_view_type": "list"
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
    "items": [
      {
        "id": "22222222-2222-4222-8222-222222222222",
        "type": "system",
        "parent_id": "33333333-3333-4333-8333-333333333333",
        "order_index": 1,
        "show": "Nümunə dəyər",
        "title": "Nümunə başlıq",
        "icon": "Nümunə dəyər",
        "default_view_type": "list"
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İnterfeys layout-u konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### İnterfeys layout-u: menyu qrupu yarat

**Endpoint** · `POST /api/v1/layout/menu/groups`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `navigation.manage` global permission

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
    "title": "Nümunə başlıq",
    "icon": "Nümunə dəyər",
    "order_index": 1,
    "show": "Nümunə dəyər"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "title": "Nümunə başlıq",
    "icon": "Nümunə dəyər",
    "order_index": 1,
    "show": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İnterfeys layout-u konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### İnterfeys layout-u: menyu qrupunu sil

**Endpoint** · `DELETE /api/v1/layout/menu/groups/{group_id}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `navigation.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "group_id": "22222222-2222-4222-8222-222222222222"
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

**Biznes təsiri** · İnterfeys layout-u konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### İnterfeys layout-u: menyu qrupunu yenilə

**Endpoint** · `PATCH /api/v1/layout/menu/groups/{group_id}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `navigation.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "group_id": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "title": "Nümunə başlıq",
    "icon": "Nümunə dəyər",
    "order_index": 1,
    "show": "Nümunə dəyər"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "parent_id": "33333333-3333-4333-8333-333333333333",
    "title": "Nümunə başlıq",
    "icon": "Nümunə dəyər",
    "order_index": 1,
    "show": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İnterfeys layout-u konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

