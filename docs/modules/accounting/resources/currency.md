---
sidebar_position: 5
title: Valyutalar
---

# Valyutalar

Valyutalar sənəd məbləğlərinin hansı pul vahidində saxlandığını, göstərildiyini və təşkilat valyutasına çevrildiyini müəyyən edir.

:::info Kontekst
`Authorization: Bearer <token>` · tenant konteksti · `currencies.read/create/update/delete`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Valyuta ISO kodu, ad, simvol və onluq dəqiqliyi saxlayır. `rates` alt kolleksiyası tarixi məzənnələri eyni create/update sorğusunda sinxronlaşdıra bilər. Valyuta yaratmaq jurnal yazılışı yaratmır.

**İlkin şərtlər.** `code` üç böyük hərfdən ibarət ISO formatında olmalıdır. Məzənnə əlavə edilirsə tarix, sıfırdan böyük `rate` və `official`, `market` və ya `interbank` tipi verilir.

**İş axını.** Valyutanı yaradın, xarici valyuta üçün tarixli məzənnələri saxlayın, sonra sənəd və pul hesablarında `currency_id` istifadə edin. Təşkilatın əsas valyutası settings-də ayrıca seçilir.

**State-lər və biznes təsiri.** Lifecycle state yoxdur. `active=false` valyutanı yeni seçimlər üçün passivləşdirir. Məzənnə dəyişikliyi əvvəl post edilmiş sənədləri yenidən hesablamır.

**Əlaqəli resurslar.** Valyuta məzənnələri, settings-də təşkilat valyutası, wallet-lər, ödənişlər, fakturalar və jurnal sətirləri.

**Əsas məhdudiyyətlər.** Təşkilatın əsas valyutası üçün ayrıca məzənnə saxlanmır: onun dəyəri həmişə `1` sayılır. Əsas valyuta və maliyyə sənədlərində istifadə olunan valyuta silinə bilməz. Eyni tarix və tip üçün yalnız bir məzənnə qəbul edilir.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Valyutanın digər resurslarda istifadə olunan identifikatorudur. |
| `code` | string | Üç hərfli, böyük hərfə normallaşdırılan ISO valyuta kodudur. |
| `name` | string | Valyutanın oxunaqlı adıdır. |
| `symbol` | string | Məbləğ göstərilərkən istifadə olunan simvoldur. |
| `decimal_places` | integer | UI və hesablamada göstəriləcək onluq mərtəbələrin sayıdır. |
| `active` | boolean | Valyutanın yeni əməliyyatlarda seçilə biləcəyini göstərir. |
| `rates` | array | Valyutaya aid tarixli məzənnələrdir; detail response və write payload-da istifadə olunur. |

## Endpointlər

### Valyutalar siyahısını al

**Endpoint** · `GET /api/v1/currencies`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `currencies.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "q": "GBP",
    "page": 1,
    "per_page": 20
  },
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qeydlər uğurla siyahılandı.",
  "data": [
    {
      "id": "11111111-1111-4111-8111-111111111111",
    "code": "GBP",
    "name": "Britaniya funtu",
    "symbol": "£",
    "decimal_places": 2,
      "active": true
    }
  ],
  "links": {
    "first": "https://erp.example.test/api/v1/currencies?page=1",
    "last": "https://erp.example.test/api/v1/currencies?page=1",
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

### Valyutalar qeydi yarat

**Endpoint** · `POST /api/v1/currencies`

Valyutanı və göndərilibsə onun ilkin tarixli məzənnələrini bir transaction daxilində yaradır.

**İcazə** · `currencies.create`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "code": "GBP",
    "name": "Britaniya funtu",
    "symbol": "£",
    "decimal_places": 2,
    "active": true,
    "rates": [
      {
        "date": "2026-09-22",
        "rate": 1.73,
        "rate_type": "official"
      }
    ]
  }
}
```

**Response JSON · `201`**

```json
{
  "status": "success",
  "message": "Qeyd uğurla yaradıldı.",
  "data": {
    "id": "11111111-1111-4111-8111-111111111111",
    "code": "GBP",
    "name": "Britaniya funtu",
    "symbol": "£",
    "decimal_places": 2,
    "active": true,
    "rates": [
      {
        "id": "22222222-2222-4222-8222-222222222222",
        "currency_id": "11111111-1111-4111-8111-111111111111",
        "date": "2026-09-22T00:00:00+04:00",
        "rate": "1.730000",
        "rate_type": "official"
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır; `403` — `currencies.create` icazəsi yoxdur; `422` — ISO kodu, məzənnə və ya eyni tarix/tip unikallığı yanlışdır.

**Biznes təsiri** · Valyuta sənəd və wallet seçimlərinə əlavə olunur; dərhal jurnal və ya məzənnə fərqi yazılışı yaranmır.

### Valyutalar qeydini sil

**Endpoint** · `DELETE /api/v1/currencies/{currency}`

Valyutanı silir; əsas və ya maliyyə sənədlərində istifadə olunan valyuta qorunur.

**İcazə** · `currencies.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "currency": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qeyd uğurla silindi.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır; `403` — `currencies.delete` icazəsi yoxdur; `404` — valyuta tapılmır; `422` — əsas və ya istifadə olunan valyutanı silmək qadağandır (`BASE_CURRENCY_DELETE_FORBIDDEN`, `USED_CURRENCY_DELETE_FORBIDDEN`).

**Biznes təsiri** · İstifadə olunmayan valyuta və ona bağlı məzənnələr kataloqdan çıxarılır; mövcud maliyyə tarixçəsi qoruma qaydaları ilə bloklanır.

### Valyutalar qeydini oxu

**Endpoint** · `GET /api/v1/currencies/{currency}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `currencies.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "currency": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qeyd uğurla gətirildi.",
  "data": {
    "id": "11111111-1111-4111-8111-111111111111",
    "code": "GBP",
    "name": "Britaniya funtu",
    "symbol": "£",
    "decimal_places": 2,
    "active": true,
    "rates": [
      {
        "id": "22222222-2222-4222-8222-222222222222",
        "currency_id": "11111111-1111-4111-8111-111111111111",
        "date": "2026-09-22T00:00:00+04:00",
        "rate": "1.730000",
        "rate_type": "official"
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Valyutalar qeydini yenilə

**Endpoint** · `PATCH|PUT /api/v1/currencies/{currency}`

Valyutanın məlumatını yeniləyir və `rates` massivini tam sinxronlaşdırır; massivdə olmayan əvvəlki məzənnələr silinir.

**İcazə** · `currencies.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "currency": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {
    "code": "GBP",
    "name": "Britaniya funtu",
    "symbol": "£",
    "decimal_places": 2,
    "active": true,
    "rates": [
      {
        "id": "22222222-2222-4222-8222-222222222222",
        "date": "2026-09-22",
        "rate": 1.74,
        "rate_type": "official"
      }
    ]
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qeyd uğurla yeniləndi.",
  "data": {
    "id": "11111111-1111-4111-8111-111111111111",
    "code": "GBP",
    "name": "Britaniya funtu",
    "symbol": "£",
    "decimal_places": 2,
    "active": true,
    "rates": [
      {
        "id": "22222222-2222-4222-8222-222222222222",
        "currency_id": "11111111-1111-4111-8111-111111111111",
        "date": "2026-09-22T00:00:00+04:00",
        "rate": "1.740000",
        "rate_type": "official"
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Gələcək conversion seçimləri dəyişir; əvvəl post edilmiş sənədlərin saxlanmış məzənnəsi yenidən hesablanmır.
