---
sidebar_position: 5
title: Vahid hesabat kataloqu
---

# Vahid hesabat kataloqu

Mövcud report key-ləri, filter kontraktları və hesablanmış hesabat nəticələrini təqdim edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `reports`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Mövcud report key-ləri, filter kontraktları və hesablanmış hesabat nəticələrini təqdim edir. Hesabat endpointləri mənbə əməliyyat məlumatını oxuyur; biznes sənədini və ya jurnal nəticəsini dəyişmir.

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
| `categories` | array | Resursun “categories” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `categories[].key` | array field | Massiv elementində “key” dəyərini saxlayır. |
| `categories[].tabs` | array | Massiv elementində “tabs” dəyərini saxlayır. |
| `categories[].tabs[].key` | array field | Massiv elementində “key” dəyərini saxlayır. |
| `categories[].tabs[].title` | array field | Massiv elementində “title” dəyərini saxlayır. |
| `categories[].tabs[].description` | array field | Qeyd haqqında əlavə izahdır. |
| `report` | object | İcra edilən hesabatın metadata və identifikasiyasıdır. |
| `filters` | object | Hesabat və ya siyahı üçün filter tərifi və seçilmiş dəyərlərdir. |
| `filters.fields` | string/null | Resursun “fields” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `filters.values` | string/null | Resursun “values” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `columns` | array | Nəticə cədvəlinin sütun kontraktıdır. |
| `rows` | array | Hesablanmış nəticə sətirləridir. |
| `totals` | object | Nəticə üzrə serverin hesabladığı yekunlardır. |
| `summary_cards` | array | Hesabatın əsas göstəricilərini kart şəklində təqdim edir. |
| `pagination` | object | Nəticənin səhifələmə məlumatıdır. |
| `warnings` | array | Nəticəni şərh edərkən nəzərə alınmalı xəbərdarlıqlardır. |
| `currency` | string/null | Resursun “currency” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `presentation` | string/null | Hesabatın table, chart və ya başqa görünüş tipidir. |

## Endpointlər

### Vahid hesabat kataloqu siyahısını al

**Endpoint** · `GET /api/v1/reports`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `reports.system`

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
    "categories": [
      {
        "key": "sales",
        "tabs": [
          {
            "key": "h-201",
            "title": "Satış analizi",
            "description": "Satış nəticələrini seçilmiş dövr üzrə göstərir.",
            "status": "active"
          }
        ]
      }
    ]
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Vahid hesabat kataloqu qeydini oxu

**Endpoint** · `GET /api/v1/reports/{reportKey}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `reports.system`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "reportKey": "h-201"
  },
  "query": {
    "date_from": "2026-09-01",
    "date_to": "2026-09-22",
    "branch_id": "44444444-4444-4444-8444-444444444444",
    "page": 1,
    "per_page": 50
  },
  "body": {}
}
```

**Response JSON · `200`**

```json
{
  "status": "success",
  "message": null,
  "data": {
    "report": {
      "key": "h-201",
      "title": "Satış analizi",
      "status": "active",
      "presentation": "table"
    },
    "filters": {
      "fields": [],
      "values": {
        "date_from": "2026-09-01",
        "date_to": "2026-09-22"
      },
      "apply_mode": "explicit"
    },
    "columns": [
      {
        "key": "document_number",
        "label": "Sənəd"
      },
      {
        "key": "amount_total",
        "label": "Yekun məbləğ"
      }
    ],
    "rows": [
      {
        "document_number": "INV-0001",
        "amount_total": "125.00"
      }
    ],
    "totals": {
      "amount_total": "125.00"
    },
    "summary_cards": [],
    "pagination": {
      "page": 1,
      "per_page": 50,
      "total": 1,
      "last_page": 1
    },
    "status": "active",
    "totals_complete": true,
    "warnings": [],
    "currency": "AZN",
    "presentation": "table",
    "dynamic_columns": []
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

