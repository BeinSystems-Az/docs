---
sidebar_position: 1
---

# Autentifikasiya və kontekst

Əksər `v1` endpointləri Bearer JWT tələb edir:

```http
Authorization: Bearer <token>
```

Backend token-dən tenant hesabını və istifadəçini müəyyən edir, sonra PostgreSQL tenant schema-sını aktivləşdirir. API token yaratmır; token xarici autentifikasiya sistemindən verilir.

## Filial konteksti

Filial-scope endpointlərinə sorğu göndərərkən aşağıdakı header istifadə oluna bilər:

```http
X-Branch-Id: <branch-uuid>
```

Header olmadıqda istifadəçinin default filialı tətbiq edilir. Səlahiyyətli istifadəçilər yalnız `GET` və `HEAD` sorğularında `X-Branch-Id: all` göndərə bilər.

`X-Company-Id` və filial müxtəlif hüquqi şəxslərə aid olarsa sorğu rədd edilir.

## Public endpointlər

Health endpointləri token tələb etmir. Tenant qeydiyyatı və provisioning endpointlərinin tələbləri [API Reference](./reference.mdx)-da ayrıca göstərilir.
