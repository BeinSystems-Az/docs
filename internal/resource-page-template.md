# API resurs səhifəsi şablonu

Bu fayl contributor/agent üçündür, Docusaurus portalında publish edilmir. Kvadrat mötərizədəki hissələri real backend kontraktı ilə əvəz edin.

```md
---
sidebar_position: [N]
slug: /api/[module]/[resource]
---

# [Resursun istifadəçi adı]

[2–3 cümlə: resurs nədir, nə vaxt istifadə olunur, özü hansı nəticəni yaratmır.]

:::info Kontekst
`Bearer` JWT və ya integration token · `[resource.action permission]` · `[tenant/branch scope]`
:::

## Resursun işləmə qaydası

**Məqsəd və sərhəd.** [...]

**İlkin şərtlər.** [...]

**İş axını.** [...]

**State-lər və biznes təsiri.** [...]

**Əlaqəli resurslar.** [...]

**Əsas məhdudiyyətlər.** [...]

## Həyat dövrü

| State | Mənası | Sistem təsiri |
| --- | --- | --- |
| `[state]` | [...] | [...] |

## Field-lər

Bu, operation kontraktı deyil; resursun field lüğətidir. Hər field-in biznes mənasını və niyə istifadə olunduğunu bir dəfə izah edin.

| Field | Tip | Məna və istifadə |
| --- | --- | --- |
| `[field]` | `[type]` | [...] |

## Endpointlər

### [İstifadəçi niyyəti]

**Endpoint** · `[METHOD] /api/v1/[path]`

[Bir cümləlik məqsəd.]

**Request JSON**

[Hər endpoint üçün ayrıca yazın. Body olmasa belə `headers`, `path` və `query` obyektlərini göstərən valid JSON istifadə edin.]

```json
{
  "headers": {
    "Authorization": "Bearer <token>"
  },
  "path": {},
  "query": {},
  "body": {}
}
```

**Response JSON · `[status]`**

```json
{
  "status": "success",
  "message": "[...]",
  "data": {}
}
```

**Xətalar** · `[status]` — [səbəb]; `[status]` — [səbəb].

**Biznes təsiri** · [stok, rezerv, jurnal, vergi, audit/state təsiri; yoxdursa “Yoxdur”.]
```

## Yazı qaydası

- Bir resurs bir səhifədir; CRUD və domain action-ları həmin səhifədə `###` başlıqlarıdır.
- Endpoint sətri həmişə `**Endpoint** · METHOD /api/v1/...` formatındadır.
- Səhifədə yalnız bir `#` başlıq, əsas bölmələrdə `##`, operation-larda `###` istifadə edilir.
- Səhifədə bir dənə `## Field-lər` cədvəli olur. Orada field-in required statusunu deyil, biznes mənasını və nə üçün istifadə olunduğunu yazın.
- Hər field ayrıca cədvəl sətrində olur; bir sətirdə bir neçə field-i cəmləməyin. Nested field-ləri `items[].product_id` kimi ayrıca göstərin.
- Ortaq request və ortaq response bölməsi yaratmayın. Hər operation öz tam request və response JSON nümunəsini daşıyır.
- Body olmayan request-də belə `headers`, `path`, `query`, `body` quruluşunu göstərin; istifadə olunmayan hissə boş obyekt olsun.
- Nümunələr sintetik, qısa və valid JSON olmalıdır; `...` və ya real məlumat istifadə etməyin.
- Integration token nümunəsidirsə mutation request-in header-lərinə 8–200 simvolluq `Idempotency-Key` əlavə edin; JWT nümunəsində tələb olunmur.
- Field, enum, status və biznes təsirini backend controller, DTO/request, presenter və testdən təsdiqləyin.
- Sistem təsiri yoxdursa `Biznes təsiri · Yoxdur` yazın.
