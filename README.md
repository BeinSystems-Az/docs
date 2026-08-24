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

`openapi/openapi.yaml` kanonik kontraktdır. İlkin fayl platforma endpointlərini və ümumi komponentləri qurur. Qalan `/api/v1` operation-ları backend-in real request/response davranışına uyğun domenlər üzrə əlavə edilməlidir; endpoint davranışını dəyişən hər backend işi eyni zamanda docs PR-ı tələb edir.
