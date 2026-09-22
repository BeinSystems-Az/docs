---
sidebar_position: 9
---

# Hesabatlar və çıxışlar

> Cari backend snapshotından yaranıb: **13 HTTP operation**. Bu texniki indeks path və handler üçündür; field və JSON nümunələri resursun öz səhifəsində saxlanılır.

## Hesabatlar

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `GET` | `/api/v1/reports` | Siyahı oxuyur | Tenant Bearer + filial | `Reports\UnifiedReportController@index` |
| `GET` | `/api/v1/reports/{reportKey}` | Bir qeydi oxuyur | Tenant Bearer + filial | `Reports\UnifiedReportController@show` |

## Çıxışlar

| Metod | Path | Məqsəd | Giriş konteksti | Handler |
| --- | --- | --- | --- | --- |
| `POST` | `/api/v1/document-outputs/{type}/{record}/html` | Əməliyyatı başladır | Tenant Bearer + filial | `DocumentOutputController@html` |
| `GET` | `/api/v1/document-outputs/{type}/{record}/templates` | Məlumatı oxuyur | Tenant Bearer + filial | `DocumentOutputController@templates` |
| `GET` | `/api/v1/output-templates` | Siyahı oxuyur | Tenant Bearer + filial | `OutputTemplateController@index` |
| `POST` | `/api/v1/output-templates` | Yeni qeyd yaradır | Tenant Bearer + filial | `OutputTemplateController@store` |
| `DELETE` | `/api/v1/output-templates/{outputTemplate}` | Qeydi silir | Tenant Bearer + filial | `OutputTemplateController@destroy` |
| `GET` | `/api/v1/output-templates/{outputTemplate}` | Bir qeydi oxuyur | Tenant Bearer + filial | `OutputTemplateController@show` |
| `PUT` | `/api/v1/output-templates/{outputTemplate}/assignments` | Qeydi dəyişir | Tenant Bearer + filial | `OutputTemplateController@assignments` |
| `POST` | `/api/v1/output-templates/{outputTemplate}/clone` | Əməliyyatı başladır | Tenant Bearer + filial | `OutputTemplateController@clone` |
| `PATCH` | `/api/v1/output-templates/{outputTemplate}/draft` | Qeydi dəyişir | Tenant Bearer + filial | `OutputTemplateController@updateDraft` |
| `POST` | `/api/v1/output-templates/{outputTemplate}/preview` | Əməliyyatı başladır | Tenant Bearer + filial | `OutputTemplateController@preview` |
| `POST` | `/api/v1/output-templates/{outputTemplate}/publish` | Əməliyyatı başladır | Tenant Bearer + filial | `OutputTemplateController@publish` |

