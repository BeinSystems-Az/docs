---
sidebar_position: 2
slug: /api/catalog/products
---

# Məhsullar

Məhsul kartı master məlumatdır. Kartın yaradılması və dəyişdirilməsi stok qalıqlarını, rezervasiyanı, mühasibat jurnalını və artıq post edilmiş sənədləri dəyişmir. Sahələr məhsul növbəti satış, alış və anbar sənədlərinə əlavə ediləndə istifadə olunur.

## Ortak sorğu konteksti

| Header | Tip | Tələb | İzah |
| --- | --- | --- | --- |
| `Authorization` | `Bearer <JWT>` | Bəli | Tenant istifadəçisini müəyyən edir. |
| `X-Branch-Id` | UUID | Xeyr | Filial konteksti. Göndərilmədikdə istifadəçinin default filialı seçilir. `all` yalnız uyğun icazəsi olan oxu sorğularında istifadə edilə bilər. |

Uyğun `products.read`, `products.create`, `products.update` və ya `products.delete` icazəsi olmadıqda cavab `403`-dür. Tenant hazır deyilsə `503`, doğrulama və əlaqə xətalarında `422` qaytarılır.

## `GET /api/v1/products`

Məhsulları səhifələnmiş siyahı kimi qaytarır. Request body yoxdur.

### Parametrlər

| Ad | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `query` | query | string | Xeyr | Ad və backend-in dəstəklədiyi məhsul axtarışı üçün mətn. |
| `page` | query | integer | Xeyr | Səhifə nömrəsi; minimum `1`. |
| `per_page` | query | integer | Xeyr | Bir səhifədə element sayı; server pagination limitini tətbiq edir. |
| `Authorization` | header | Bearer token | Bəli | JWT giriş tokeni. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Qiymətlərin resolve ediləcəyi filial konteksti. |

### Uğurlu cavab — `200`

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
  "links": {"first": "…?page=1", "last": "…?page=1", "prev": null, "next": null},
  "meta": {"current_page": 1, "per_page": 25, "total": 1}
}
```

`data[]` elementinin tam kontraktı [Product response](#product-response)-dadır. Bu əməliyyat yalnız oxuyur.

## `POST /api/v1/products`

Yeni məhsul kartı yaradır. `name` tenant daxilində unikal olmalıdır.

### Parametrlər

| Ad | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `Authorization` | header | Bearer token | Bəli | JWT giriş tokeni. |
| `X-Branch-Id` | header | UUID | Xeyr | Yazma əməliyyatının filial konteksti. |

### Request body

| Sahə | Tip | Tələb | Qayda və biznes mənası |
| --- | --- | --- | --- |
| `name` | string | Bəli | Maksimum 100 simvol; silinməmiş məhsullar arasında unikaldır. |
| `category_id` | UUID / `null` | Xeyr | Mövcud məhsul kateqoriyası. |
| `department_id` | UUID / `null` | Xeyr | Mövcud şöbə. |
| `unit_id` | UUID / `null` | Xeyr | Məhsulun inventar ölçü vahidi. |
| `description` | string / `null` | Xeyr | Məhsul təsviri. |
| `color` | string / `null` | Xeyr | UI üçün rəng dəyəri. |
| `price` | numeric / `null` | Xeyr | Standart satış qiyməti. |
| `buy_price` | numeric / `null` | Xeyr | Standart alış qiyməti. |
| `min_price` | numeric / `null` | Xeyr | İcazə verilən minimum satış qiyməti. |
| `min_stock` | numeric / `null` | Xeyr | Minimum stok həddi. |
| `standard_cost` | numeric / `null` | Xeyr | Standart maya dəyəri; mənfi ola bilməz. |
| `type` | integer / `null` | Xeyr | Yalnız `1`, `2` və ya `3`. |
| `active` | boolean | Xeyr | Məhsulun seçilə bilməsini idarə edir. |
| `is_complimentary` | boolean | Xeyr | Məhsulun hədiyyə/ödənişsiz olması bayrağı. |
| `is_weight` | boolean | Xeyr | Məhsulun çəki ilə satılması bayrağı. |
| `plu` | string / `null` | Xeyr | POS PLU identifikatoru. |
| `tax_id` | UUID / `null` | Xeyr | `account_taxes` cədvəlində mövcud vergi. |
| `product_template_id` | UUID / `null` | Xeyr | Variantlı məhsul üçün şablon. |
| `default_code` | string / `null` | Xeyr | Maksimum 100 simvol daxili kod. |
| `barcode` | string / `null` | Xeyr | Maksimum 50 simvol barkod. |
| `weight` | numeric / `null` | Xeyr | Fiziki çəki. |
| `volume` | numeric / `null` | Xeyr | Fiziki həcm. |
| `income_account_id` | UUID / `null` | Xeyr | Məhsul üzrə gəlir hesabı. |
| `expense_account_id` | UUID / `null` | Xeyr | Məhsul üzrə xərc hesabı. |
| `variant_ids` | array | Xeyr | Variant dəyişiklikləri massivi. |
| `variant_ids[].id` | UUID | Xeyr | Mövcud variantı dəyişmək üçün variant ID-si. |
| `variant_ids[].barcode` | string / `null` | Xeyr | Variant barkodu. |
| `variant_ids[].default_code` | string / `null` | Xeyr | Variant daxili kodu. |
| `variant_ids[].sale_price` | numeric / `null` | Xeyr | Variant satış qiyməti. |
| `variant_ids[].cost_price` | numeric / `null` | Xeyr | Variant maya dəyəri. |
| `suppliers` | array | Xeyr | Təchizatçı sazlamaları massivi. |
| `suppliers[].supplier_id` | UUID | Bəli* | Təchizatçı ID-si. |
| `suppliers[].unit_id` | UUID | Bəli* | Təchizatçının istifadə etdiyi vahid. |
| `suppliers[].currency_id` | UUID | Bəli* | Təchizatçı qiymətinin valyutası. |
| `suppliers[].price` | numeric | Bəli* | `> 0` alış qiyməti. |
| `packagings` | array | Xeyr | Qablaşdırma sazlamaları massivi. |
| `packagings[].unit_id` | UUID | Bəli* | Qablaşdırma vahidi. |
| `packagings[].quantity_in_inventory_unit` | numeric | Bəli* | `> 0`; bir qablaşdırmada inventar vahidi miqdarı. |
| `packagings[].purchase_price` | numeric | Bəli* | `>= 0` qablaşdırma üzrə alış qiyməti. |
| `packagings[].sale_price` | numeric | Bəli* | `>= 0` qablaşdırma üzrə satış qiyməti. |
| `reorder_rules` | array | Xeyr | Yenidən-sifariş qaydaları massivi. |
| `reorder_rules[].stock_id` | UUID | Bəli* | Stok/anbar ID-si. |
| `reorder_rules[].minimum_quantity` | numeric | Xeyr | `>= 0` sifariş həddi. |
| `reorder_rules[].target_quantity` | numeric | Bəli* | `> 0` hədəf miqdar. |
| `customFields` | object | Xeyr | Tenant-in məhsul custom-field konfiqurasiyasına uyğun sahələr. |
| `cost_method` | — | Qadağandır | Göndərildikdə `422` qaytarılır. |

`*` yalnız massivdə element göndərildikdə tələb olunur.

```json
{
  "name": "Arabica qəhvə 1 kq",
  "category_id": "22222222-2222-2222-2222-222222222222",
  "department_id": "55555555-5555-5555-5555-555555555555",
  "unit_id": "33333333-3333-3333-3333-333333333333",
  "price": 25.5,
  "buy_price": 18,
  "tax_id": "44444444-4444-4444-4444-444444444444",
  "active": true,
  "barcode": "8690000000012",
  "packagings": [{"unit_id": "33333333-3333-3333-3333-333333333333", "quantity_in_inventory_unit": 1, "purchase_price": 18, "sale_price": 25.5}]
}
```

### Uğurlu cavab — `200`

```json
{"status":"success","message":"Product created successfully.","data":{"id":"11111111-1111-1111-1111-111111111111","name":"Arabica qəhvə 1 kq","price":"25.5000","resolved_price":"25.5000","active":true,"packagings":[]}}
```

Tam `data` kontraktı [Product response](#product-response)-dadır. Bu əməliyyat yalnız məhsul kartını yazır; mühasibat və stok hərəkəti yaratmır.

## `GET /api/v1/products/{product}`

Bir məhsul kartını qaytarır. Request body yoxdur.

### Parametrlər

| Ad | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product` | path | UUID | Bəli | Tenant daxilindəki məhsul identifikatoru. |
| `Authorization` | header | Bearer token | Bəli | JWT giriş tokeni. |
| `X-Branch-Id` | header | UUID / `all` | Xeyr | Qiymətlərin resolve ediləcəyi filial. |

### Uğurlu cavab — `200`

```json
{"status":"success","message":"Product retrieved successfully.","data":{"id":"11111111-1111-1111-1111-111111111111","name":"Arabica qəhvə 1 kq","resolved_price":"24.9000","branch_pricing":{"sale_price":"24.9000"}}}
```

Tam `data` kontraktı [Product response](#product-response)-dadır. `product` tapılmadıqda `404` qaytarılır.

## `PUT /api/v1/products/{product}`

Məhsul kartını tam yeniləyir. Request body `POST /api/v1/products` üçün göstərilən bütün sahələri qəbul edir; `name` yenə tələb olunur.

### Parametrlər

| Ad | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product` | path | UUID | Bəli | Yenilənəcək məhsul. |
| `Authorization` | header | Bearer token | Bəli | JWT giriş tokeni. |
| `X-Branch-Id` | header | UUID | Xeyr | Filial konteksti. |

### Request body

Bu endpointin body-si [POST request body](#request-body)-dəki hər bir sahəni ayrıca və eyni qaydalarla qəbul edir. `name` məcburidir; öz məhsulunun unikal ad yoxlamasından istisnadır. `unit_id` yalnız body-də göndərildikdə yoxlanır.

### Uğurlu cavab — `200`

```json
{"status":"success","message":"Product updated successfully.","data":{"id":"11111111-1111-1111-1111-111111111111","name":"Arabica qəhvə 1 kq","active":true}}
```

Tam `data` kontraktı [Product response](#product-response)-dadır. Əvvəl post edilmiş biznes sənədləri və onların jurnal yazılışları yenidən hesablanmır; dəyişiklik yalnız gələcək sənədlərə təsir edir.

## `PATCH /api/v1/products/{product}`

Məhsul kartını yeniləyir. Bu route eyni controller və doğrulama ilə `PUT`-la eyni kontrakta malikdir.

### Parametrlər

| Ad | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product` | path | UUID | Bəli | Yenilənəcək məhsul. |
| `Authorization` | header | Bearer token | Bəli | JWT giriş tokeni. |
| `X-Branch-Id` | header | UUID | Xeyr | Filial konteksti. |

### Request body

Body-də [POST request body](#request-body)-də göstərilən bütün sahələr qəbul edilir; `name` tələb olunur və cari məhsul həmin adın unikallıq yoxlamasından çıxarılır. `unit_id` yalnız göndərilərsə yoxlanır.

### Uğurlu cavab — `200`

```json
{"status":"success","message":"Product updated successfully.","data":{"id":"11111111-1111-1111-1111-111111111111","name":"Arabica qəhvə 1 kq","active":true}}
```

Tam `data` kontraktı [Product response](#product-response)-dadır. Post edilmiş sənədlər yenidən hesablanmır.

## `DELETE /api/v1/products/{product}`

Məhsul kartını silir. Request body yoxdur.

### Parametrlər

| Ad | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `product` | path | UUID | Bəli | Silinəcək məhsul. |
| `Authorization` | header | Bearer token | Bəli | JWT giriş tokeni. |
| `X-Branch-Id` | header | UUID | Xeyr | Filial konteksti. |

### Uğurlu cavab — `200`

```json
{"status":"success","message":"Product deleted successfully.","data":null}
```

Tarixi post edilmiş sənədlər dəyişmir. Əlaqəli biznes qaydası silməyə mane olarsa `422` və ya `409`, məhsul tapılmadıqda `404` qaytarıla bilər.

## `PUT /api/v1/branches/{branch}/products/{product}/settings`

Məhsulun yalnız seçilmiş filial üçün əlçatanlıq və qiymət override-larını yazır; əsas məhsul kartını dəyişmir.

### Parametrlər

| Ad | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `branch` | path | UUID | Bəli | Override-ın aid olduğu filial. |
| `product` | path | UUID | Bəli | Məhsul kartı. |
| `Authorization` | header | Bearer token | Bəli | JWT giriş tokeni. |
| `X-Branch-Id` | header | UUID | Xeyr | Sorğu filial konteksti; payload-dakı filialla uyğun olmalıdır. |

### Request body

| Sahə | Tip | Tələb | Qayda və biznes mənası |
| --- | --- | --- | --- |
| `is_available` | boolean | Xeyr | Məhsulun həmin filialda seçilə bilməsi. |
| `sale_price` | numeric / `null` | Xeyr | Göndərilərsə `>= 0`; standart satış qiymətini override edir. |
| `min_price` | numeric / `null` | Xeyr | Göndərilərsə `>= 0`; standart minimum qiyməti override edir. |
| `purchase_price` | numeric / `null` | Xeyr | Göndərilərsə `>= 0`; standart alış qiymətini override edir. |

```json
{"is_available":true,"sale_price":24.9,"min_price":22,"purchase_price":18}
```

### Uğurlu cavab — `200`

```json
{"status":"success","message":"Branch product settings saved successfully.","data":{"branch_id":"aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa","is_available":true,"sale_price":"24.9000","min_price":"22.0000","purchase_price":"18.0000","overrides":{"sale_price":true,"min_price":true,"purchase_price":true}}}
```

## `DELETE /api/v1/branches/{branch}/products/{product}/settings`

Seçilmiş filialın məhsul override-larını silir və məhsulu standart kart sazlamalarına qaytarır. Request body yoxdur.

### Parametrlər

| Ad | Yer | Tip | Tələb | İzah |
| --- | --- | --- | --- | --- |
| `branch` | path | UUID | Bəli | Override-ı silinəcək filial. |
| `product` | path | UUID | Bəli | Məhsul kartı. |
| `Authorization` | header | Bearer token | Bəli | JWT giriş tokeni. |
| `X-Branch-Id` | header | UUID | Xeyr | Sorğu filial konteksti. |

### Uğurlu cavab — `200`

```json
{"status":"success","message":"Branch product settings deleted successfully.","data":null}
```

Filial kontekstinə zidd sorğu `422`, əlçatmaz filial `403`, tapılmayan məhsul və ya filial isə `404` qaytara bilər.

## Product response

Məhsul yaradan, oxuyan və yeniləyən endpointlərin `data` obyekti aşağıdakı sahələri qaytarır.

| Sahə | Tip | İzah |
| --- | --- | --- |
| `id` | UUID | Məhsul identifikatoru. |
| `category_id` | UUID / `null` | Kateqoriya ID-si. |
| `category` | object / `null` | Kateqoriya obyekti. |
| `category_name` | string / `null` | Kateqoriya adı. |
| `department_id` | UUID / `null` | Şöbə ID-si. |
| `department` | object / `null` | Şöbə obyekti. |
| `department_name` | string / `null` | Şöbə adı. |
| `unit_id` | UUID / `null` | İnventar vahidi ID-si. |
| `unit` | object / `null` | İnventar vahidi obyekti. |
| `unit_name` | string / `null` | İnventar vahidinin adı. |
| `name` | string | Məhsul adı. |
| `description` | string / `null` | Təsvir. |
| `color` | string / `null` | UI rəngi. |
| `price` | decimal string / `null` | Standart satış qiyməti. |
| `resolved_price` | decimal string / `null` | Filial override-ı nəzərə alınmış satış qiyməti. |
| `buy_price` | decimal string / `null` | Standart alış qiyməti. |
| `resolved_buy_price` | decimal string / `null` | Filial override-ı nəzərə alınmış alış qiyməti. |
| `standard_cost` | decimal string / `null` | Standart maya dəyəri. |
| `min_price` | decimal string / `null` | Standart minimum qiymət. |
| `resolved_min_price` | decimal string / `null` | Filial override-ı nəzərə alınmış minimum qiymət. |
| `branch_pricing` | object | Aktiv filial üçün qiymət sazlamaları. |
| `active` | boolean | Aktivlik. |
| `type` | integer / `null` | Məhsul tipi. |
| `is_complimentary` | boolean | Hədiyyə məhsul bayrağı. |
| `is_weight` | boolean | Çəki ilə satış bayrağı. |
| `plu` | string / `null` | POS PLU kodu. |
| `barcode` | string / `null` | Barkod. |
| `tax_id` | UUID / `null` | Vergi ID-si. |
| `tax_name` | string / `null` | Vergi adı. |
| `image` | string / `null` | Şəkil ünvanı/dəyəri. |
| `product_template_id` | UUID / `null` | Şablon ID-si. |
| `default_code` | string / `null` | Daxili kod. |
| `weight` | decimal string / `null` | Çəki. |
| `volume` | decimal string / `null` | Həcm. |
| `income_account_id` | UUID / `null` | Gəlir hesabı. |
| `expense_account_id` | UUID / `null` | Xərc hesabı. |
| `min_stock` | decimal string / `null` | Minimum stok həddi. |
| `packagings` | array | Qablaşdırma obyektləri. |
| `suppliers` | array | Təchizatçı sazlamaları. |
| `reorder_rules` | array | Yenidən-sifariş qaydaları. |
| `variant_ids` | array | Variant məlumatları. |
| `created_at` | ISO-8601 / `null` | Yaradılma tarixi. |
| `updated_at` | ISO-8601 / `null` | Son yenilənmə tarixi. |
