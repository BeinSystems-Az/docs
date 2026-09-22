---
sidebar_position: 10
title: Sistem sağlamlığı
---

# Sistem sağlamlığı

Sistem sağlamlığı resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir.

:::info Kontekst
Public endpointlər token tələb etmir; rate-limit və endpointə aid validation qaydaları tətbiq edilir.
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** Sistem sağlamlığı resursu platforma və sistem modulunda aid olduğu məlumat və əməliyyatları idarə edir. Bu resurslar UI və platform davranışını idarə edir; biznes sənədinin domain kontraktını əvəz etmir.

**İlkin şərtlər.** Endpointdən asılı olaraq tenant autentifikasiyası, istifadəçi və platform metadata-sı tələb olunur.

**İş axını.** Schema və metadata-nı oxuyun, istifadəçi seçimlərini saxlayın, audit və sistem vəziyyətini izləyin.

**State-lər və biznes təsiri.** Bu resurs ayrıca lifecycle state saxlamır. Əsasən platform konfiqurasiyası və görünüş dəyişir; reset kimi inzibati əməliyyatlar ayrıca ciddi məhdudiyyət daşıyır.

**Əlaqəli resurslar.** Autentifikasiya, bütün biznes modulları və audit.

**Əsas məhdudiyyətlər.** Cari tenant və permission scope-u həmişə tətbiq edilir. Path identifikatorları həmin scope daxilində mövcud olmalıdır.

## Həyat dövrü

Bu master/oxu resursunda ayrıca lifecycle state yoxdur; create, update və delete əməliyyatları cari qeydin özünü dəyişir.

## Field-lər

Bu cədvəl request kontraktını əvəz etmir; resursda istifadə olunan field-lərin biznes mənasını bir dəfə göstərir.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `id` | UUID | Qeydin unikal identifikatorudur. |

## Endpointlər

### Sistem sağlamlığı: sağlamlıq vəziyyətini yoxla

**Endpoint** · `GET /api/health`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · Ayrıca resource permission tələb etmir.

**Request JSON**

```json
{
  "headers": {},
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

**Xətalar** · `403` — əməliyyat üçün icazə yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Sistem sağlamlığı: servisin canlılığını yoxla

**Endpoint** · `GET /api/health/live`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · Ayrıca resource permission tələb etmir.

**Request JSON**

```json
{
  "headers": {},
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
    "status": "active"
  }
}
```

**Xətalar** · `403` — əməliyyat üçün icazə yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

### Sistem sağlamlığı: hazırlığı yoxla

**Endpoint** · `GET /api/health/ready`

Cari istifadəçi və scope daxilində məlumatı dəyişiklik etmədən qaytarır.

**İcazə** · Ayrıca resource permission tələb etmir.

**Request JSON**

```json
{
  "headers": {},
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

**Xətalar** · `403` — əməliyyat üçün icazə yoxdur.

**Biznes təsiri** · Yoxdur; yalnız məlumat oxunur.

