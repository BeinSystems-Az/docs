---
sidebar_position: 3
title: Workflow kataloqu
---

# Workflow kataloqu

Workflow kataloqu resursu workflow və avtomatlaşdırma modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Workflow kataloqu resursu workflow və avtomatlaşdırma modulunda aid olduğu məlumat və əməliyyatları idarə edir. Definition özü nəticə yaratmır; run və bulk action seçilən resursda dəyişiklik edə bilər.

**İlkin şərtlər.** Trigger, action kataloqu, icazələr və hədəf resurslar mövcud olmalıdır.

**İş axını.** Kataloqdan trigger/action seçin, workflow yaradın, run nəticələrini izləyin və uğursuz run-u retry edin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Seçilən action-dan asılıdır; hər run status və nəticə tarixçəsi saxlayır.

**Əlaqəli resurslar.** Bütün biznes modulları, audit və inteqrasiyalar.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Qeydin unikal identifikatorudur. |

## Endpointlər

### Workflow kataloqu: əməliyyatı icra et

**Endpoint** · `GET /api/v1/workflows/catalog`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `workflows.view` global permission

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

