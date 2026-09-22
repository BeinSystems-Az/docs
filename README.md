# BEIN ERP Docs

## Canlı backend referansını yeniləmək

Route və model siyahısı backend kodundan avtomatik çıxarılır; generated səhifələri əl ilə dəyişməyin.

```bash
npm run generate:reference
npm run format:payloads
npm run check
```

Skript standart olaraq qonşu `../erp-backend` repository-sini oxuyur. Başqa checkout istifadə etmək üçün `node scripts/generate-reference.mjs --backend=/tam/yol/erp-backend` işlədin.

İnsan və AI üçün oxu ardıcıllığı: [entity xəritəsi](docs/domains/entity-map.md) → [AI sistem xəritəsi](docs/ai/system-map.md) → [tam route kataloqu](docs/api/reference/route-catalog.md) → endpointin controller/DTO/action/presenter kodu.

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

Tam endpoint mövcudluğu `src/generated/api-routes.json`, `docs/api/reference/route-catalog.md` və `docs/api/endpoints/` texniki indekslərində backend route manifestindən yaradılır. Resursa məxsus request/response JSON-ları və biznes izahı modul səhifələrində əl ilə, backend controller/DTO/presenter kontraktına əsasən saxlanılır. Backend kontraktı dəyişəndə generated route snapshotları və təsirlənən resurs səhifəsi birlikdə yenilənməlidir.
