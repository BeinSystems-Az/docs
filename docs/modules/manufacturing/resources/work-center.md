---
sidebar_position: 6
title: İş mərkəzləri
---

# İş mərkəzləri

İş mərkəzləri resursu istehsal modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `manufacturing_work_centers`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** İş mərkəzləri resursu istehsal modulunda aid olduğu məlumat və əməliyyatları idarə edir. Master məlumatlar stok yaratmır; istehsal sifarişinin lifecycle action-ları material sərfi və hazır məhsul qəbuluna səbəb olur.

**İlkin şərtlər.** Komponent və hazır məhsullar, BOM, anbar/lokasiya və lazım olduqda routing və iş mərkəzləri mövcud olmalıdır.

**İş axını.** BOM və routing qurun, production order yaradın, təsdiqləyin, başladın, istehlakı qeyd edin və tamamlayın.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. İstehsalın icrası material stokunu azaldır, hazır məhsulu artırır və valuation nəticəsi yarada bilər.

**Əlaqəli resurslar.** Məhsullar, stok, iş mərkəzləri və mühasibatlıq.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `branch_id` | UUID | Əməliyyatın aid olduğu filialı müəyyən edir. |
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `capacity_per_hour` | number | Resursun “capacity per hour” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `efficiency_percent` | number | Resursun “efficiency percent” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `active` | boolean | Qeydin seçimlərdə və yeni əməliyyatlarda aktiv olub-olmadığını göstərir. |

## Endpointlər

### İş mərkəzləri siyahısını al

**Endpoint** · `GET /api/v1/manufacturing/work-centers`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `manufacturing_work_centers.read`

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
      "code": "DEMO",
      "name": "Nümunə qeyd",
      "branch_id": "44444444-4444-4444-8444-444444444444",
      "capacity_per_hour": 1,
      "efficiency_percent": 1,
      "active": true
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

### İş mərkəzləri qeydi yarat

**Endpoint** · `POST /api/v1/manufacturing/work-centers`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `manufacturing_work_centers.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "capacity_per_hour": 1,
    "efficiency_percent": 1,
    "active": true
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "capacity_per_hour": 1,
    "efficiency_percent": 1,
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İş mərkəzləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### İş mərkəzləri qeydini sil

**Endpoint** · `DELETE /api/v1/manufacturing/work-centers/{workCenter}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `manufacturing_work_centers.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "workCenter": "22222222-2222-4222-8222-222222222222"
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

**Biznes təsiri** · İş mərkəzləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### İş mərkəzləri qeydini oxu

**Endpoint** · `GET /api/v1/manufacturing/work-centers/{workCenter}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `manufacturing_work_centers.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "workCenter": "22222222-2222-4222-8222-222222222222"
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
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "capacity_per_hour": 1,
    "efficiency_percent": 1,
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### İş mərkəzləri qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/manufacturing/work-centers/{workCenter}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `manufacturing_work_centers.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "workCenter": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "capacity_per_hour": 1,
    "efficiency_percent": 1,
    "active": true
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "capacity_per_hour": 1,
    "efficiency_percent": 1,
    "active": true
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · İş mərkəzləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

