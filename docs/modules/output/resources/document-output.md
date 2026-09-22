---
sidebar_position: 2
title: Sənəd çıxışları
---

# Sənəd çıxışları

Sənəd çıxışları resursu çıxış və çap modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `document_outputs`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Sənəd çıxışları resursu çıxış və çap modulunda aid olduğu məlumat və əməliyyatları idarə edir. Çıxış mövcud sənədi render edir; biznes sənədinin state və məbləğini dəyişmir.

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
| `id` | UUID | Qeydin unikal identifikatorudur. |

## Endpointlər

### Sənəd çıxışları: HTML çıxış yarat

**Endpoint** · `POST /api/v1/document-outputs/{type}/{record}/html`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `document_outputs.system`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "type": "products",
    "record": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "template_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "template_id": "33333333-3333-4333-8333-333333333333"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Sənəd çıxışları konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Sənəd çıxışları: şablonları al

**Endpoint** · `GET /api/v1/document-outputs/{type}/{record}/templates`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `document_outputs.system`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "type": "products",
    "record": "22222222-2222-4222-8222-222222222222"
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
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

