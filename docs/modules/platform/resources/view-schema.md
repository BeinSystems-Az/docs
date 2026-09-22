---
sidebar_position: 21
title: Görünüş sxemləri
---

# Görünüş sxemləri

Görünüş sxemləri resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · `view_schema`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Görünüş sxemləri resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu resurslar UI və platform davranışını idarə edir; biznes sənədinin domain kontraktını əvəz etmir.

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
| `preferences` | array/object | Resursun “preferences” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `preferences[]` | array/object | Massiv elementində “preferences” dəyərini saxlayır. |
| `preferences[].title` | array field | Massiv elementində “title” dəyərini saxlayır. |
| `preferences[].type` | enum/string | Massiv elementində “type” dəyərini saxlayır. |
| `preferences[].fields` | array/object | Massiv elementində “fields” dəyərini saxlayır. |
| `preferences[].fields[]` | array/object | Massiv elementində “fields” dəyərini saxlayır. |
| `preferences[].fields[].show` | number | Massiv elementində “show” dəyərini saxlayır. |
| `preferences[].fields[].title` | array field | Massiv elementində “title” dəyərini saxlayır. |
| `preferences[].fields[].span` | array field | Massiv elementində “span” dəyərini saxlayır. |
| `base` | string/null | Resursun “base” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `preferences[].fields[].position` | number | Massiv elementində “position” dəyərini saxlayır. |
| `preferences[].fields[].width` | number | Massiv elementində “width” dəyərini saxlayır. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `filters` | object | Hesabat və ya siyahı üçün filter tərifi və seçilmiş dəyərlərdir. |
| `view_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |

## Endpointlər

### Görünüş sxemləri qeydini oxu

**Endpoint** · `GET /api/v1/view-schema/{viewName}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `view_schema.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "viewName": "products"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "View sahələri uğurla gətirildi.",
  "data": {
    "data": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Görünüş sxemləri qeydini yenilə

**Endpoint** · `PUT /api/v1/view-schema/{viewName}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `view_schema.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "viewName": "products"
  },
  "query": {},
  "body": {
    "preferences": [
      {
        "title": "Nümunə başlıq",
        "type": "card",
        "fields": [
          {
            "show": "0",
            "title": "Nümunə başlıq",
            "span": "Nümunə dəyər",
            "position": 1,
            "width": 1
          }
        ]
      }
    ],
    "base": "Nümunə dəyər"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Dizayn ayarları uğurla yeniləndi.",
  "data": {
    "preferences": [
      {
        "title": "Nümunə başlıq",
        "type": "card",
        "fields": [
          {
            "show": "0",
            "title": "Nümunə başlıq",
            "span": "Nümunə dəyər",
            "position": 1,
            "width": 1
          }
        ]
      }
    ],
    "base": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Görünüş sxemləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Görünüş sxemləri: görünüş seçimlərini sıfırla

**Endpoint** · `POST /api/v1/view-schema/{viewName}/reset`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `view_schema.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "viewName": "products"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "View ayarları uğurla sıfırlandı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Görünüş sxemləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Görünüş sxemləri: filter şablonu əlavə et

**Endpoint** · `POST /api/v1/view-schema/filter-templates`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `view_schema.system`

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
    "filters": "Nümunə dəyər",
    "view_name": "list"
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Filtr şablonu uğurla yaradıldı.",
  "data": {
    "name": "Nümunə qeyd",
    "filters": "Nümunə dəyər",
    "view_name": "list"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Görünüş sxemləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Görünüş sxemləri: filter şablonunu sil

**Endpoint** · `DELETE /api/v1/view-schema/filter-templates/{id}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `view_schema.system`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "id": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Filtr şablonu uğurla silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Görünüş sxemləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Görünüş sxemləri: filter şablonunu yenilə

**Endpoint** · `PUT /api/v1/view-schema/filter-templates/{id}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `view_schema.system`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "id": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "name": "Nümunə qeyd"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Filtr şablonu uğurla yeniləndi.",
  "data": {
    "name": "Nümunə qeyd"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Görünüş sxemləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

