# BEIN ERP Docs

## Canlı backend referansını yeniləmək

Route və model siyahısı backend kodundan avtomatik çıxarılır; generated səhifələri əl ilə dəyişməyin.

```bash
npm run generate:reference
npm run format:payloads
npm run check
```

Skript standart olaraq qonşu `../erp-backend` repository-sini oxuyur. Başqa checkout istifadə etmək üçün `node scripts/generate-reference.mjs --backend=/tam/yol/erp-backend` işlədin.

İnsan və AI üçün oxu ardıcıllığı: [başlanğıc](docs/intro.md) → istifadə olunan biznes modulunun resurs səhifəsi → endpointin controller/DTO/action/presenter kodu.

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
