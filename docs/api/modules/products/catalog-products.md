---
sidebar_position: 2
---

# Products API

## Ümumi kontekst

Bütün Products endpointləri aşağıdakı konteksti tələb edir:

```http
Authorization: Bearer <token>
X-Branch-Id: <branch-uuid>
```

`X-Branch-Id` boş olduqda istifadəçinin default filialı tətbiq edilir. `all` yalnız oxu sorğusunda və istifadəçinin bütün filiallara icazəsi olduqda istifadə edilə bilər. İstifadəçidə uyğun `products` permission-u (`read`, `create`, `update`, `delete`) yoxdursa API `403` qaytarır.

| Kod | Səbəb |
| --- | --- |
| `401` | JWT yoxdur, etibarsızdır və ya tenant istifadəçisi müəyyən edilmir. |
| `403` | Products permission-u və ya filial icazəsi yoxdur. |
| `404` | `product` UUID-si tenant daxilində tapılmır. |
| `422` | Field validation, unikal `name`, foreign key və ya filial konteksti qaydası pozulub. |
| `503` | Tenant provisioning hələ hazır deyil. |

## Məhsulları siyahılamaq

### `GET /api/v1/products`

Məhsulları pagination ilə qaytarır. Bu operation stok qalıqlarını dəyişmir.

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `query` | query | string | Xeyr | Məhsul axtarış mətni. |
| `page` | query | integer | Xeyr | Səhifə nömrəsi, minimum `1`. |
| `per_page` | query | integer | Xeyr | Səhifədə element sayı; backend pagination limiti tətbiq edilir. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Filial oxu konteksti. |

```json
{
  "status": "success",
  "message": "Products listed successfully.",
  "data": [{
    "id": "11111111-1111-1111-1111-111111111111",
    "name": "Arabica qəhvə 1 kq",
    "category_id": "22222222-2222-2222-2222-222222222222",
    "category_name": "Qəhvə",
    "unit_id": "33333333-3333-3333-3333-333333333333",
    "unit_name": "Ədəd",
    "price": "25.5000",
    "resolved_price": "24.9000",
    "active": true
  }],
  "links": {},
  "meta": {"current_page": 1, "per_page": 25, "total": 1}
}
```

Hər `data[]` elementinin tam sahələri aşağıdakı response kontraktı ilə eynidir.

## Məhsul yaratmaq

### `POST /api/v1/products`

Yeni məhsul kartı yaradır. Məhsul adı tenant daxilində unikal olmalıdır. Bu əməliyyat yalnız master məlumatı yazır; stok, rezerv və jurnal yazılışı yaratmır.

### Request body

| Sahə | Tip | Tələb | Qayda və məna |
| --- | --- | --- | --- |
| `name` | string | Bəli | Maksimum 100 simvol, aktiv/silinməmiş məhsullarda unikal. |
| `category_id`, `department_id`, `unit_id` | UUID / null | Xeyr | Mövcud category, department və unit. |
| `description`, `color`, `plu` | string / null | Xeyr | Məhsulun təsviri və UI/POS identifikatoru. |
| `price`, `buy_price`, `min_price`, `min_stock` | numeric / null | Xeyr | Satış, alış, minimum qiymət və minimum stok hədləri. |
| `standard_cost` | numeric / null | Xeyr | Mənfi ola bilməz. |
| `type` | integer / null | Xeyr | Yalnız `1`, `2` və ya `3`. |
| `active`, `is_complimentary`, `is_weight` | boolean | Xeyr | Aktivlik, hədiyyə və çəki ilə satılma bayraqları. |
| `tax_id` | UUID / null | Xeyr | `account_taxes` içində mövcud vergi. |
| `product_template_id` | UUID / null | Xeyr | Məhsul şablonu. |
| `default_code` | string / null | Xeyr | Maksimum 100 simvol. |
| `barcode` | string / null | Xeyr | Maksimum 50 simvol. |
| `weight`, `volume` | numeric / null | Xeyr | Məhsulun fiziki ölçüləri. |
| `income_account_id`, `expense_account_id` | UUID / null | Xeyr | Məhsula bağlı gəlir və xərc hesabları. |
| `variant_ids` | array | Xeyr | Variant üçün `id`, `barcode`, `default_code`, `sale_price`, `cost_price`. Mövcud variant `id`-si UUID olmalıdır. |
| `suppliers` | array | Xeyr | Hər sətirdə `supplier_id`, `unit_id`, `currency_id` tələb olunur; qiymət `> 0` olduqda qəbul edilir. |
| `packagings` | array | Xeyr | Hər sətirdə `unit_id`, `quantity_in_inventory_unit > 0`, `purchase_price >= 0`, `sale_price >= 0`. |
| `reorder_rules` | array | Xeyr | Hər sətirdə `stock_id`, `target_quantity > 0`; `minimum_quantity >= 0`. |
| `customFields` | object | Xeyr | Tenant-in məhsul custom-field konfiqurasiyasına uyğun əlavə sahələr. |
| `cost_method` | — | Xeyr | Qəbul edilmir; göndərilərsə `422` qaytarılır. |

```json
{
  "name": "Arabica qəhvə 1 kq",
  "category_id": "22222222-2222-2222-2222-222222222222",
  "unit_id": "33333333-3333-3333-3333-333333333333",
  "price": "25.50",
  "buy_price": "18.00",
  "tax_id": "44444444-4444-4444-4444-444444444444",
  "active": true,
  "barcode": "8690000000012",
  "packagings": [{
    "unit_id": "33333333-3333-3333-3333-333333333333",
    "quantity_in_inventory_unit": 1,
    "purchase_price": 18,
    "sale_price": 25.5,
    "active": true
  }]
}
```

### Uğurlu response — `200`

| Sahə | Tip | İzah |
| --- | --- | --- |
| `id` | UUID | Məhsul identifikatoru. |
| `category_id`, `category`, `category_name` | UUID/string/null | Kateqoriya əlaqəsi. |
| `department_id`, `department`, `department_name` | UUID/string/null | Şöbə əlaqəsi. |
| `unit_id`, `unit`, `unit_name` | UUID/string/null | İnventar vahidi əlaqəsi. |
| `name`, `description`, `color`, `plu`, `barcode`, `default_code`, `image` | string/null | Məhsul kartının mətn və identifikator sahələri. |
| `price`, `buy_price`, `standard_cost`, `min_price`, `min_stock`, `weight`, `volume` | decimal string/null | Saxlanmış maliyyət və ölçü dəyərləri. |
| `resolved_price`, `resolved_buy_price`, `resolved_min_price`, `branch_pricing` | decimal/object | Filial konteksti ilə həll edilən qiymətlər. |
| `active`, `is_complimentary`, `is_weight` | boolean | Məhsul davranış bayraqları. |
| `type` | integer/null | Məhsul tipi. |
| `tax_id`, `tax_name` | UUID/string/null | Vergi əlaqəsi. |
| `income_account_id`, `expense_account_id` | UUID/null | Hesab property-ləri. |
| `packagings`, `suppliers`, `reorder_rules`, `variant_ids` | array | Əlaqəli qablaşdırma, təchizatçı, replenish və variant məlumatları. |
| `created_at`, `updated_at` | ISO-8601/null | Audit tarixləri. |

```json
{
  "status": "success",
  "message": "Product created successfully.",
  "data": {
    "id": "11111111-1111-1111-1111-111111111111",
    "name": "Arabica qəhvə 1 kq",
    "price": "25.5000",
    "resolved_price": "25.5000",
    "active": true,
    "packagings": []
  }
}
```

## Məhsulu oxumaq, yeniləmək və silmək

### `GET /api/v1/products/{product}`

`product` path parametri UUID-dir. `POST` response-indəki bütün `data` sahələrini qaytarır; request body yoxdur. Məhsul tapılmadıqda `404` qaytarır.

### `PUT /api/v1/products/{product}` və `PATCH /api/v1/products/{product}`

`product` UUID path parametridir. Request body `POST /products` ilə eyni sahələri qəbul edir; `name` yenə məcburidir və cari məhsul öz unikallıq yoxlamasından istisnadır. `unit_id` update zamanı yalnız göndərildikdə yoxlanır. Uğurlu cavab `200` və tam Product response-dir. Bu əməliyyat mövcud post edilmiş sənədi yenidən hesablamır; məhsulun gələcək sənədlərdəki davranışını dəyişir.

### `DELETE /api/v1/products/{product}`

`product` UUID path parametridir. Body yoxdur. Uğurlu cavab:

```json
{"status":"success","message":"Product deleted successfully.","data":null}
```

Məhsul silinə bilməzsə bağlı biznes qaydası `422` və ya `409` qaytara bilər; post edilmiş tarixi sənəd dəyişdirilmir.

## Filial məhsul sazlaması

### `PUT /api/v1/branches/{branch}/products/{product}/settings`

və

### `DELETE /api/v1/branches/{branch}/products/{product}/settings`

| Parametr | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `branch` | path | UUID | Bəli | Sazlamanın tətbiq ediləcəyi filial. |
| `product` | path | UUID | Bəli | Məhsul kartı. |
| `X-Branch-Id` | header | UUID | Xeyr | Sorğu konteksti; payload branch ilə uyğun olmalıdır. |

`PUT` body-si aşağıdakı sahələri qəbul edir:

| Sahə | Tip | Tələb | Qayda |
| --- | --- | --- | --- |
| `is_available` | boolean | Xeyr | Filialda məhsulun istifadə oluna bilməsi. |
| `sale_price`, `min_price`, `purchase_price` | numeric/null | Xeyr | Göndərilərsə `>= 0`. |

```json
{"is_available":true,"sale_price":24.90,"min_price":22,"purchase_price":18}
```

`PUT` yalnız həmin filialın qiymət/məhsul sazlamasını yazır, əsas Product kartını dəyişmir. `DELETE` həmin override-ı silir və məhsulun standart qiymət/sazlamasına qayıdır. Hər iki endpoint `200` success zərfi qaytarır; `data` içində `branch_id`, `is_available`, `sale_price`, `min_price`, `purchase_price` və hər qiymət üçün `overrides:{sale_price,min_price,purchase_price}` boolean-ları var. Filial kontekstinə zidd məlumat `422`, əlçatmaz branch isə `403` qaytarır.
