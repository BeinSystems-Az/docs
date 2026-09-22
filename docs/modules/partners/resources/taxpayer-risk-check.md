---
sidebar_position: 7
title: Vergi risk yoxlaması
---

# Vergi risk yoxlaması

Vergi risk yoxlaması resursu tərəfdaşlar modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `partners`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Vergi risk yoxlaması resursu tərəfdaşlar modulunda aid olduğu məlumat və əməliyyatları idarə edir. Tərəfdaş master məlumatdır; özü satış, alış, borc və jurnal yaratmır.

**İlkin şərtlər.** Tenant konteksti və lazım olduqda ölkə, valyuta və qrup məlumatı mövcud olmalıdır.

**İş axını.** Qrup və tərəfdaşı yaradın, rekvizit və bank hesablarını tamamlayın, sonra biznes sənədlərində istifadə edin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Dəyişiklik gələcək sənədlərdə seçimi və rekvizitləri dəyişir; post edilmiş sənəd snapshot-larını dəyişmir.

**Əlaqəli resurslar.** CRM, satış, satınalma, ödənişlər və borclar.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Qeydin unikal identifikatorudur. |

## Endpointlər

### Vergi risk yoxlaması: əməliyyatı icra et

**Endpoint** · `POST /api/v1/partners/taxpayer-risk-check`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `partners.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "tin": "1234567890"
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "tin": "1234567890"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Vergi risk yoxlaması konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

