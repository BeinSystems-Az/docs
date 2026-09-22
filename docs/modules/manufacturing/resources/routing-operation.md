---
sidebar_position: 5
title: Marşrut əməliyyatları
---

# Marşrut əməliyyatları

Marşrut əməliyyatları resursu istehsal modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
`Bearer` JWT və ya integration token · tenant və filial scope-u · `manufacturing_routings`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Marşrut əməliyyatları resursu istehsal modulunda aid olduğu məlumat və əməliyyatları idarə edir. Master məlumatlar stok yaratmır; istehsal sifarişinin lifecycle action-ları material sərfi və hazır məhsul qəbuluna səbəb olur.

**İlkin şərtlər.** Komponent və hazır məhsullar, BOM, anbar/lokasiya və lazım olduqda routing və iş mərkəzləri mövcud olmalıdır.

**İş axını.** BOM və routing qurun, production order yaradın, təsdiqləyin, başladın, istehlakı qeyd edin və tamamlayın.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. İstehsalın icrası material stokunu azaldır, hazır məhsulu artırır və valuation nəticəsi yarada bilər.

**Əlaqəli resurslar.** Məhsullar, stok, iş mərkəzləri və mühasibatlıq.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir; filial oxuda `filter[branch_id]`, yazmada body-də `branch_id` ilə seçilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `routing_id` | UUID | Qeydi əlaqəli “routing” resursuna bağlayır. |
| `work_center_id` | UUID | Qeydi əlaqəli “work center” resursuna bağlayır. |
| `sequence` | number | Siyahıda emal və görünmə ardıcıllığını müəyyən edir. |
| `code` | string/null | Axtarış və inteqrasiya üçün sabit qısa koddur. |
| `name` | string/null | İstifadəçiyə görünən addır. |
| `planned_minutes` | number | Resursun “planned minutes” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `setup_minutes` | number | Resursun “setup minutes” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `run_minutes` | number | Resursun “run minutes” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `queue_minutes` | number | Resursun “queue minutes” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `move_minutes` | number | Resursun “move minutes” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `wait_minutes` | number | Resursun “wait minutes” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `labor_count` | number | Əlaqəli qeydlərin hesablanmış sayıdır. |
| `machine_count` | number | Əlaqəli qeydlərin hesablanmış sayıdır. |
| `planned_scrap_percent` | number | Resursun “planned scrap percent” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `required` | boolean | Resursun “required” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `quality_check_required` | boolean | Resursun “quality check required” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `instructions` | string/null | Resursun “instructions” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `quality_instructions` | string/null | Resursun “quality instructions” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |
| `document_name` | string/null | Əlaqəli qeydin response-da göstərilən oxunaqlı adıdır. |
| `document_url` | string/null | Resursun “document url” məlumatını saxlayır və uyğun əməliyyatlarda istifadə olunur. |

## Endpointlər

### Marşrut əməliyyatları siyahısını al

**Endpoint** · `GET /api/v1/manufacturing/routing-operations`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `manufacturing_routings.read`

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
      "code": "DEMO",
      "name": "Nümunə qeyd",
      "routing_id": "33333333-3333-4333-8333-333333333333",
      "work_center_id": "33333333-3333-4333-8333-333333333333",
      "sequence": 1,
      "planned_minutes": 1,
      "setup_minutes": 1,
      "run_minutes": 1,
      "queue_minutes": 1,
      "move_minutes": 1
    }
  ],
  "links": {
    "first": "https://erp.example.test/api/v1/resource?page=1",
    "last": "https://erp.example.test/api/v1/resource?page=1",
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

### Marşrut əməliyyatları qeydini oxu

**Endpoint** · `GET /api/v1/manufacturing/routing-operations/{routing_operation}`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · `manufacturing_routings.read`

**Request JSON**

```json
{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiJ9.synthetic"
  },
  "path": {
    "routing_operation": "22222222-2222-4222-8222-222222222222"
  },
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
    "code": "DEMO",
    "name": "Nümunə qeyd",
    "routing_id": "33333333-3333-4333-8333-333333333333",
    "work_center_id": "33333333-3333-4333-8333-333333333333",
    "sequence": 1,
    "planned_minutes": 1,
    "setup_minutes": 1,
    "run_minutes": 1,
    "queue_minutes": 1,
    "move_minutes": 1,
    "wait_minutes": 1,
    "labor_count": 1,
    "machine_count": 1,
    "planned_scrap_percent": 1,
    "required": true,
    "quality_check_required": true,
    "instructions": "Nümunə dəyər",
    "quality_instructions": "Nümunə dəyər"
  }
}
```

**Xətalar** · `401` — token etibarsızdır və ya yoxdur; `404` — path-dəki qeyd cari tenant/scope daxilində tapılmır.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

