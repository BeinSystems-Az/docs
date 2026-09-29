# API resurs səhifəsi şablonu

Bu daxili şablon publish edilmir. Hər nümunəni backend kontraktı ilə yoxlayın.

---
title: [Resurs adı]
---

# [Resurs adı]

[API-də resursun məqsədini bildirən bir-iki cümlə.]

:::info Kontekst
Bearer JWT və ya integration token · permission · tətbiq olunursa tenant/filial scope-u
:::

## Field-lər

Yalnız inteqrasiya üçün vacib field-ləri bir cədvəldə izah edin.

| Field | Tip | Məna |
| --- | --- | --- |
| `id` | UUID | Resurs identifikatoru. |

## Endpointlər

### [Əməliyyat niyyəti]

**Endpoint** · `POST /api/v1/[path]`

[Operation-ın texniki məqsədi.]

**İcazə** · `[permission]`

**Request JSON**

```json
{
  "headers": {"Authorization": "Bearer <token>"},
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
  "data": {}
}
```

**Xətalar** · `[status]` — [backend-də təsdiqlənmiş səbəb].

Qısa qaydalar:

- Bir səhifə həmin resursun bütün endpointlərini əhatə edir.
- Hər operation üçün ayrıca, sintetik və valid request/response nümunəsi verilir.
- Body olmayan sorğuda `body: {}` göstərilir.
- Lifecycle və biznes təsiri yalnız konkret API davranışını müəyyən edəndə daxil edilir.
- Dəyişiklikdən sonra `npm run check` işlədilir.
