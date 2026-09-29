# 0001: API reference quruluşu

- Status: superseded by [ADR 0002](./002-api-docs-follow-frontend-navigation.md)
- Date: 2026-09-29

## Context

API resurs səhifələri endpoint məlumatına əlavə olaraq təkrarlanan geniş biznes xülasələri daşıyırdı. Bu mətnlər request, response, permission və route məlumatını tapmağı çətinləşdirirdi.

## Decision

API bölməsi versiya/base URL, autentifikasiya və kontekst, ümumi kontrakt, sonra modul/resurs endpoint reference ardıcıllığını saxlayır. Modul səhifələri resurs indeksidir. Resurs səhifələri endpoint, permission, vacib field, request/response və uyğun xəta məlumatını saxlayır. Lifecycle və biznes təsiri yalnız konkret API davranışı üçün lazım olduqda qalır. Public URL-lər qorunur.

## Consequences

- API reference developer yönümlü və daha qısa olur.
- Endpoint nümunələri, backend fakt yoxlaması və route audit-i məcburi qalır.
- İstifadəçi təlimatı API bölməsindən ayrı qalır.

## References

- AGENTS.md
- internal/resource-page-template.md
- docs/api/
- docs/modules/
- scripts/check-resource-docs.mjs
- sidebars.js
