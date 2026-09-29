# 0002: API sənədləri ERP frontend menyusunu izləyir

- Status: accepted
- Date: 2026-09-29

## Context

API menyusu backend texniki modullarına görə qruplaşdırıldığı üçün frontend-dəki biznes sənədlərini tanıyan developer-lər uyğun endpoint-i tapmaqda çətinlik çəkirdi. Bir neçə ayrı frontend sənədi eyni endpoint ailəsindən istifadə edə bilər. Bəzi ayarlar isə çoxlu UI sahələrini idarə edən tək API resursuna malikdir.

## Decision

API sidebar-ı mümkün olduqda ERP frontend menyusunun qruplarını, alt qruplarını və ardıcıllığını izləyir. Hər fərqli frontend resursu və biznes sənəd növü öz API səhifəsini alır. Ortaq endpoint-lərdən istifadə edən sənəd növlərinin səhifələri növü/filter-i və uyğun nümunə payload-ı açıq göstərir. Eyni xüsusi endpoint vasitəsilə idarə olunan ayar açarları bir səhifədə qruplaşdırılır. API-si olmayan frontend menyu bölməsinə saxta endpoint əlavə edilmir. Məhsul qərarı ilə API sənədləşdirməsindən çıxarılan endpoint-lər internal/api-doc-exclusions.json-da dəqiq route-larla qeyd edilir və checker onların backend snapshot-ında mövcudluğunu yoxlayır. 2026-09-29 tarixli məhsul qərarına əsasən Tərəf-müqabillər API səhifələri yayımlanan reference-dən çıxarılıb.

## Consequences

- API istifadəçisi ERP-də tanıdığı menyu və sənəd adları ilə endpoint-i tapa bilir.
- Ortaq endpoint kontraktı bir neçə sənəd növü üçün təkrarlana bilər; request/response nümunələri hər növə uyğun qalmalıdır.
- API olmayan frontend bölmələri API menyusunda görünməyə bilər.
- Mövcud endpoint və URL-lər backend kontraktını dəyişmədən qorunur.
- Sənədləşdirmə əhatəsindən çıxarılan Tərəf-müqabillər API səhifələri backend route-larına təsir etmir.

## References

- AGENTS.md
- sidebars.js
- internal/api-doc-exclusions.json
- docs/modules/stock/resources/
- docs/modules/stock/index.md
- internal/decisions/001-api-reference-structure.md
