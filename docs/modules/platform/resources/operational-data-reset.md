---
sidebar_position: 13
title: Əməliyyat məlumatı sıfırlaması
---

# Əməliyyat məlumatı sıfırlaması

Əməliyyat məlumatı sıfırlaması resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Əməliyyat məlumatı sıfırlaması resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu resurslar UI və platform davranışını idarə edir; biznes sənədinin domain kontraktını əvəz etmir.

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
| `confirmation.in` | string/null | Resursun “in” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Əməliyyat məlumatı sıfırlaması: əməliyyatı icra et

**Endpoint** · `POST /api/v1/settings/reset-operational-data`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `system.reset_data` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "confirmation": "SIFIRLA"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Əməliyyat məlumatları silindi. Məhsullar, partnyorlar, istifadəçilər və sazlamalar qorunub.",
  "data": {
    "confirmation": {
      "in": "Nümunə dəyər"
    }
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Əməliyyat məlumatı sıfırlaması konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

