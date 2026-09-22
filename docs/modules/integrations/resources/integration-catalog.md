---
sidebar_position: 2
title: Connector kataloqu
---

# Connector kataloqu

Connector kataloqu resursu inteqrasiyalar modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Connector kataloqu resursu inteqrasiyalar modulunda aid olduğu məlumat və əməliyyatları idarə edir. Client və connection konfiqurasiyadır; faktiki biznes təsiri connector-un icra etdiyi əməliyyatdan yaranır.

**İlkin şərtlər.** Connector kataloqu, credential və uyğun resource permission-ları mövcud olmalıdır.

**İş axını.** Client və ya connection yaradın, credential-i təhlükəsiz saxlayın, monitor və delivery nəticələrini izləyin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Konfiqurasiya özü stok/jurnal yaratmır; inteqrasiya çağırışı hədəf endpointin təsirini daşıyır.

**Əlaqəli resurslar.** Autentifikasiya, workflow, audit və bütün API resursları.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Qeydin unikal identifikatorudur. |

## Endpointlər

### Connector kataloqu: connector-ları al

**Endpoint** · `GET /api/v1/integrations/catalog`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `integrations.view` global permission

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

