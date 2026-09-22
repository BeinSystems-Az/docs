---
sidebar_position: 7
title: Sənəd nömrələnməsi
---

# Sənəd nömrələnməsi

Sənəd nömrələnməsi resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Sənəd nömrələnməsi resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu resurslar UI və platform davranışını idarə edir; biznes sənədinin domain kontraktını əvəz etmir.

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
| `document_type` | enum/string | Əməliyyat və ya resurs variantını müəyyən edən tip dəyəridir. |
| `prefix` | string/null | Resursun “prefix” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Sənəd nömrələnməsi siyahısını al

**Endpoint** · `GET /api/v1/document-numbering/configurations`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `settings.edit` global permission

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
      "document_type": "sale_receipt",
      "prefix": "INV"
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Sənəd nömrələnməsi qeydini yenilə

**Endpoint** · `PUT /api/v1/document-numbering/configurations/{document_type}`

Mövcud qeydin göndərilən sahələrini validation və domain qaydalarına uyğun yeniləyir.

**İcazə** · `settings.edit` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "document_type": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "prefix": "INV"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "document_type": "sale_receipt",
    "prefix": "INV"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Sənəd nömrələnməsi konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

