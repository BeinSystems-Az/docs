---
sidebar_position: 1
---

# ERP modulları

Modullar biznes məsuliyyətinə görə bölünüb. Hər modulun giriş səhifəsi onun sərhədini, tipik iş axınını, sistem təsirini və daxilindəki resursları izah edir; hər resurs səhifəsi isə bütün endpointlərini ayrıca request/response JSON nümunələri ilə bir yerdə saxlayır.

## Ticarət və müştəri

| Modul | Məsuliyyəti |
| --- | --- |
| [Məhsul və kataloq](./catalog/) | Məhsul, şablon, kateqoriya, vahid, qablaşdırma, atribut, filial qiyməti və qiymət tipi kimi əsas kataloq məlumatını idarə edir. |
| [Satış](./sales/) | Müştəri sifarişini və faktiki satış qəbzini idarə edir. |
| [Satınalma](./purchase/) | Təchizat sifarişini və fiziki mal qəbulunu idarə edir. |
| [CRM](./crm/) | Lead, pipeline, mərhələ, mənbə, itirmə səbəbi və CRM tapşırıqları ilə satış imkanlarını izləyir. |
| [Tərəfdaşlar](./partners/) | Müştəri, təchizatçı, tərəfdaş qrupu, bank hesabı və vergi ödəyicisi yoxlamalarını idarə edir. |
| [Onlayn mağaza](./store/) | Storefront konfiqurasiyasını, dərc olunan məhsulları və public kataloq oxusunu idarə edir. |

## Əməliyyat

| Modul | Məsuliyyəti |
| --- | --- |
| [Anbar və stok](./stock/) | Anbarlar, lokasiyalar, lotlar, stok sənədləri, rezervlər, replenishment və valuation düzəlişlərini idarə edir. |
| [İstehsal](./manufacturing/) | BOM, routing, iş mərkəzi və istehsal sifarişinin materialdan hazır məhsula axınını idarə edir. |
| [POS](./pos/) | Kassa registri, aktivasiya, növbə, satış, qaytarış, ödəniş və offline sinxronizasiyanı idarə edir. |

## Maliyyə və analiz

| Modul | Məsuliyyəti |
| --- | --- |
| [Mühasibatlıq və maliyyə](./accounting/) | Hesab planı, jurnal yazılışları, satış və alış fakturaları, ödənişlər, borclar, vergi, pul hesabları və əsas vəsait uçotunu idarə edir. |
| [Hesabatlar](./reports/) | ERP üzrə mövcud hesabat kataloqunu və filter-lənmiş hesabat nəticələrini təqdim edir. |
| [Çıxış və çap](./output/) | Sənəd output-u, HTML/çap görünüşü və output template-lərini idarə edir. |

## Təşkilat və əməkdaşlıq

| Modul | Məsuliyyəti |
| --- | --- |
| [İnsan resursları](./hr/) | Şöbə və təşkilati aidiyyət master məlumatını idarə edir. |
| [Biznes şəbəkəsi](./network/) | Tenant-lərarası əlaqə, mapping və sənəd mübadiləsini idarə edir. |

## Platforma

| Modul | Məsuliyyəti |
| --- | --- |
| [Workflow və avtomatlaşdırma](./automation/) | Workflow tərifləri, run tarixçəsi və toplu əməliyyatları idarə edir. |
| [İnteqrasiyalar](./integrations/) | Integration client, connector connection, monitor və webhook çatdırılmasını idarə edir. |
| [İstifadəçi və giriş](./access/) | Tenant, filial, istifadəçi, rol, permission və authorization policy-lərini idarə edir. |
| [Platforma və sistem](./platform/) | Dashboard, schema, layout, settings, audit, bildiriş, siyahı və əməliyyat metadata-sını təqdim edir. |
