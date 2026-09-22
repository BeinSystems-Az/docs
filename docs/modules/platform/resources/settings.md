---
sidebar_position: 18
title: Sistem parametrləri
---

# Sistem parametrləri

Sistem parametrləri resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant scope-u · route üzrə authorization qərarı
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Sistem parametrləri resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu resurslar UI və platform davranışını idarə edir; biznes sənədinin domain kontraktını əvəz etmir.

**İlkin şərtlər.** Endpointdən asılı olaraq tenant autentifikasiyası, istifadəçi və platform metadata-sı tələb olunur.

**İş axını.** Schema və metadata-nı oxuyun, istifadəçi seçimlərini saxlayın, audit və sistem vəziyyətini izləyin.

**State-lər və biznes təsiri.** Əsasən platform konfiqurasiyası və görünüş dəyişir; reset kimi inzibati əməliyyatlar ayrıca ciddi məhdudiyyət daşıyır.

**Əlaqəli resurslar.** Autentifikasiya, bütün biznes modulları və audit.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Mövcud state və icazəli keçidlər operation request-ində və backend domain qaydalarında yoxlanılır; keçidin stok və jurnal təsiri aşağıdakı endpoint blokunda ayrıca göstərilir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Qeydin unikal identifikatorudur. |

## Endpointlər

### Sistem parametrləri siyahısını al

**Endpoint** · `GET /api/v1/settings`

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
      "id": "22222222-2222-4222-8222-222222222222"
    }
  ]
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Sistem parametrləri qeydi yarat

**Endpoint** · `POST /api/v1/settings`

Sorğudakı məlumatla yeni qeyd və ya resursa aid domain əməliyyatı yaradır.

**İcazə** · `settings.edit` global permission

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {},
  "query": {},
  "body": {
    "organization": {
      "name": "Nümunə şirkət",
      "currency_id": "33333333-3333-4333-8333-333333333333",
      "country_id": "22222222-2222-4222-8222-222222222222",
      "timezone": "Asia/Baku"
    },
    "accounting": {
      "allow_negative_balance": false,
      "income_expense_recognition_method": "accrual"
    },
    "inventory": {
      "auto_reserve_stock": true,
      "allow_negative_stock": false,
      "low_stock_threshold": 10,
      "cost_method": "avco"
    }
  }
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": "Ayarlar uğurla yeniləndi.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `422` — request field və ya domain validation-u keçmir.

**Biznes təsiri** · Sistem parametrləri konfiqurasiyası və ya qeydi dəyişir; bu əməliyyat üçün ayrıca stok və jurnal təsiri controller kontraktında göstərilmir.

### Sistem parametrləri: post hazırlığını yoxla

**Endpoint** · `GET /api/v1/settings/posting-readiness`

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
  "message": "Müxabirləşmə hazırlığı yoxlanıldı.",
  "data": {
    "id": "22222222-2222-4222-8222-222222222222"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `409/422` — cari state və ya bağlı əməliyyat keçidi bloklayır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

