# BEIN ERP Docs

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

`master` branch-ına merge GitHub Actions workflow-unu işə salır. Workflow OpenAPI-ni lint edir, Docusaurus saytını və Redoc API referansını build edir, image-i DigitalOcean Container Registry-yə göndərir və `erp-dev` namespace-dəki `docs` Deployment-ini yeniləyir.

Deploy üçün GitHub `prod` environment-də bu secret-lər olmalıdır:

- `DO_ACCESS_TOKEN`
- `DO_KUBERNETES_CLUSTER_ID`

`docs.beinsystems.az` Cloudflare üzərindən mövcud ingress controller-ə yönəlir. Cluster-də TLS issuer olmadığı üçün HTTPS Cloudflare edge tərəfindən təmin edilir; Ingress mövcud ERP deployment-ləri kimi HTTP backend istifadə edir.

## API əhatəsi

`openapi/openapi.yaml` kanonik kontraktdır və Redoc API referansı ondan qurulur. Kontrakt snapshot-ını qonşu `erp-backend` repository-sindən yeniləmək üçün:

```bash
cd ../erp-backend
php artisan route:list --json > /tmp/erp-routes.json
cd ../docs
npm run generate:api:inventory
```

Generator route, middleware, controller request DTO və mümkün response DTO-ları oxuyur. Backend kontraktı dəyişəndə generatoru işə salın, dəyişən operation-ların body/response nümunələrini controller və presenter ilə yoxlayın, sonra `npm run check` işlədin. Backend repository-si bu prosesdə dəyişdirilmir.
