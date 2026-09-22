---
sidebar_position: 5
title: İcazələr
---

# İcazələr

İcazələr resursu istifadəçi və giriş modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** İcazələr resursu istifadəçi və giriş modulunda aid olduğu məlumat və əməliyyatları idarə edir. Giriş idarəetməsi hansı əməliyyatın görülə biləcəyini müəyyən edir; özü biznes sənədi yaratmır.

**İlkin şərtlər.** Tenant və idarəetmə səlahiyyətinə malik autentifikasiya konteksti olmalıdır.

**İş axını.** Tenant və filialı qurun, istifadəçi və rolları yaradın, permission və policy-ləri təyin edin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. İcazə və görünürlük dəyişir; stok və jurnal təsiri yoxdur, təhlükəsizlik audit izi yarana bilər.

**Əlaqəli resurslar.** Bütün modullar, audit və inteqrasiya client-ləri.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Qeydin unikal identifikatorudur. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `guard_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |

## Endpointlər

### İcazələr siyahısını al

**Endpoint** · `GET /api/v1/permissions`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `authorization.manage` global permission

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
  "message": "Permissions listed successfully.",
  "data": [
    {
      "id": "22222222-2222-4222-8222-222222222222",
      "name": "Nümunə qeyd",
      "guard_name": "Nümunə dəyər"
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### İcazələr qeydini oxu

**Endpoint** · `GET /api/v1/permissions/{permission}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `authorization.manage` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "permission": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Permission retrieved successfully.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222",
    "name": "Nümunə qeyd",
    "guard_name": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

