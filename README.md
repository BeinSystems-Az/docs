# BEIN ERP Docs

Bu portal iki auditoriya üçün ayrılıb: inteqrasiya quran komandalar üçün **API** bölməsi və sahibkarlar/ERP istifadəçiləri üçün **Təlimat**. Ümumi terminlər [Lüğət](docs/glossary.md), sistem üzrə suallar isə [FAQ](docs/faq.md) bölməsində toplanır.

## Canlı backend referansını yeniləmək

Route və model siyahısı backend kodundan avtomatik çıxarılır; generated səhifələri əl ilə dəyişməyin.

```bash
npm run generate:reference
npm run format:payloads
npm run check
```

Skript standart olaraq qonşu `../erp-backend` repository-sini oxuyur. Başqa checkout istifadə etmək üçün `node scripts/generate-reference.mjs --backend=/tam/yol/erp-backend` işlədin.

API oxu ardıcıllığı: [API-yə giriş](docs/api/index.md) → [autentifikasiya](docs/api/authentication.md) və [kontrakt](docs/api/contract.md) → istifadə olunan resursun endpoint səhifəsi. İstifadə qaydaları üçün [Təlimat](docs/user-guide/index.md) bölməsindən modul və əməliyyatı seçin.

`docs.beinsystems.az` üçün ayrıca Docusaurus repository-si.

## Lokal işə salma

```bash
npm install
npm run start
```

Production yoxlaması:

```bash
npm run check
docker build -t erp-docs:local .
docker run --rm -p 8080:8080 erp-docs:local
```

## Yayım

`master` branch-ına merge GitHub Actions workflow-unu işə salır. Workflow Docusaurus saytını build edir, image-i DigitalOcean Container Registry-yə göndərir və `erp-dev` namespace-dəki `docs` Deployment-ini yeniləyir.

Deploy üçün GitHub `prod` environment-də bu secret-lər olmalıdır:

- `DO_ACCESS_TOKEN`
- `DO_KUBERNETES_CLUSTER_ID`

`docs.beinsystems.az` Cloudflare üzərindən mövcud ingress controller-ə yönəlir. Cluster-də TLS issuer olmadığı üçün HTTPS Cloudflare edge tərəfindən təmin edilir; Ingress mövcud ERP deployment-ləri kimi HTTP backend istifadə edir.

## API əhatəsi

Backend route snapshot-ı `src/generated/api-routes.json` faylında saxlanılır və yalnız avtomatik yoxlamalarda istifadə olunur. İstifadəçi üçün request/response JSON-ları və biznes izahı modul resurs səhifələrində əl ilə, backend controller/DTO/presenter kontraktına əsasən saxlanılır.
