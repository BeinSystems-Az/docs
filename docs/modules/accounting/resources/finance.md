---
sidebar_position: 11
title: Maliyyə uzlaşdırması
---

# Maliyyə uzlaşdırması

Maliyyə uzlaşdırması resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `finance`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Maliyyə uzlaşdırması resursu mühasibatlıq və maliyyə modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu modul maliyyə nəticəsini və baş kitabı idarə edir; fiziki stok hərəkətinin mənbəyi satış, alış və stok sənədləridir.

**İlkin şərtlər.** Tenant, uyğun filial, valyuta, hesab planı və sənədin tələb etdiyi tərəfdaş və ya maliyyə hesabı əvvəlcədən mövcud olmalıdır.

**İş axını.** Əvvəl master məlumatları qurun, sənədi draft yaradın, sətirləri yoxlayın, sonra uyğun state action ilə post edin və hesabatlardan nəticəni izləyin.

**State-lər və biznes təsiri.** Master məlumat dəyişiklikləri jurnal yaratmır. Maliyyə sənədinin `posted` vəziyyəti baş kitab və borc nəticəsi yarada, `cancelled` isə həmin nəticəni revers edə bilər.

**Əlaqəli resurslar.** Satış, satınalma, tərəfdaşlar, stok, layihələr və hesabatlar.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `debit_item_id` | UUID | Qeydi əlaqəli “debit item” resursuna bağlayır. |
| `credit_item_id` | UUID | Qeydi əlaqəli “credit item” resursuna bağlayır. |
| `amount` | number | Əməliyyatın pul məbləğidir. |

## Endpointlər

### Maliyyə uzlaşdırması: açıq sətirləri al

**Endpoint** · `GET /api/v1/finance/open-items`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `finance.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "debt_type": "all"
  },
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Açıq qalıqlar uğurla siyahılandı.",
  "data": {
    "partner_id": "33333333-3333-4333-8333-333333333333",
    "account_id": "33333333-3333-4333-8333-333333333333",
    "debt_type": "all"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Maliyyə uzlaşdırması: tərəfdaş qalıqlarını al

**Endpoint** · `GET /api/v1/finance/partner-balances`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `finance.read`

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
  "message": "Tərəfdaş qalıqları uğurla siyahılandı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Maliyyə uzlaşdırması: uzlaşdır

**Endpoint** · `POST /api/v1/finance/reconciliations`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `finance.update`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "debit_item_id": "33333333-3333-4333-8333-333333333333",
    "credit_item_id": "33333333-3333-4333-8333-333333333333",
    "amount": 1
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Qalıqlar uğurla üzləşdirildi.",
  "data": {
    "debit_item_id": "33333333-3333-4333-8333-333333333333",
    "credit_item_id": "33333333-3333-4333-8333-333333333333",
    "amount": 1
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Maliyyə uzlaşdırması konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Maliyyə uzlaşdırması: uzlaşdırmanı geri al

**Endpoint** · `DELETE /api/v1/finance/reconciliations/{id}`

Qeydi backend-in silmə və bağlı məlumat məhdudiyyətlərinə uyğun arxivləşdirir və ya silir.

**İcazə** · `finance.delete`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "id": "22222222-2222-4222-8222-222222222222"
  },
  "query": {},
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Üzləşdirmə uğurla geri alındı.",
  "data": null
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Maliyyə uzlaşdırması konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

