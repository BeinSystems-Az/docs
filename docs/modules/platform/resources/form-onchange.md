---
sidebar_position: 9
title: Form onchange
---

# Form onchange

Form onchange resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · `{resource}`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Form onchange resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu resurslar UI və platform davranışını idarə edir; biznes sənədinin domain kontraktını əvəz etmir.

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
| `warnings` | array | Nəticəni şərh edərkən nəzərə alınmalı xəbərdarlıqlardır. |
| `domains` | string/null | Resursun “domains” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Form onchange: əməliyyatı icra et

**Endpoint** · `POST /api/v1/forms/{resource}/onchange`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `{resource}.system`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "resource": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "values": {},
    "fields": [
      "Nümunə dəyər"
    ],
    "trigger": "Nümunə dəyər"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Form onchange resolved successfully.",
  "data": {
    "warnings": "Nümunə dəyər",
    "domains": "Nümunə dəyər",
    "values": {},
    "fields": [
      "Nümunə dəyər"
    ],
    "trigger": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Form onchange konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

