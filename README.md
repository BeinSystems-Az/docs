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

`main` branch-ına PR merge `Deploy` workflow-unu işə salır. Docker build daxilində `npm audit --audit-level=high` və tam `npm run check` işləyir; sonra container marşrutları, asset-lər, redirect və revision yoxlanır. Yoxlanmış eyni image registry-yə immutable digest/build etiketi ilə yazılır.

GitHub `image-publish` environment yalnız `REGISTRY_USERNAME` və `REGISTRY_PASSWORD` saxlayır. CI klasterə deploy etmir. Kargo-da `docs` ayrıca layihədir; `prod` mərhələsi release seçir, Argo CD `platform-deploy` manifestini tətbiq edir. Mövcud runtime `erp-dev/docs` bu delivery keçidində saxlanılır; namespace adının production mühitinə uyğunlaşdırılması ayrıca inventar məsələsidir. Dev/beta mühiti yaradılmır.

Production promotion qəbul yoxlamaları tamamlanana qədər manual qalır. Köhnə `master` branch və credential-lər bütün consumer-lər yoxlanmadan silinmir. TLS/ingress və image-pull credential-ləri serverdə idarə olunur. `release.json` mənbə commit-ini göstərir və cache edilmir.

Docusaurus build asılılıqları üçün `tinypool` və `serialize-javascript` təhlükəsizlik override-ları Node 22 və tam sənəd build-i ilə yoxlanır. Lockfile yüksək/kritik audit gate-dən keçməlidir.

## API əhatəsi

Backend route snapshot-ı `src/generated/api-routes.json` faylında saxlanılır və yalnız avtomatik yoxlamalarda istifadə olunur. İstifadəçi üçün request/response JSON-ları və biznes izahı modul resurs səhifələrində əl ilə, backend controller/DTO/presenter kontraktına əsasən saxlanılır.
