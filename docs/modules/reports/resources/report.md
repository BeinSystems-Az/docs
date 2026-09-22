---
sidebar_position: 4
title: Maliyyə hesabatları
---

# Maliyyə hesabatları

Maliyyə hesabatları resursu hesabatlar modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `reports`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Maliyyə hesabatları resursu hesabatlar modulunda aid olduğu məlumat və əməliyyatları idarə edir. Hesabat endpointləri mənbə əməliyyat məlumatını oxuyur; biznes sənədini və ya jurnal nəticəsini dəyişmir.

**İlkin şərtlər.** İstifadəçinin hesabat icazəsi və hesabatın tələb etdiyi tarix, filial və digər filter konteksti olmalıdır.

**İş axını.** Əvvəl kataloqdan report key və filter kontraktını alın, sonra həmin key ilə hesabatı icra edin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Yoxdur; yalnız hesablanmış oxu nəticəsi qaytarılır.

**Əlaqəli resurslar.** Mühasibatlıq, satış, satınalma, stok, POS və istehsal.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Qeydin unikal identifikatorudur. |

## Endpointlər

### Maliyyə hesabatları: hesab kartını al

**Endpoint** · `GET /api/v1/reports/account-card`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `reports.read`

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

### Maliyyə hesabatları: balans hesabatını al

**Endpoint** · `GET /api/v1/reports/balance-sheet`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `reports.read`

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

### Maliyyə hesabatları: mənfəət və zərər hesabatını al

**Endpoint** · `GET /api/v1/reports/profit-loss`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `reports.read`

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

### Maliyyə hesabatları: dövriyyə-saldo hesabatını al

**Endpoint** · `GET /api/v1/reports/trial-balance`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `reports.read`

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

