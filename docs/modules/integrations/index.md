---
sidebar_position: 1
title: İnteqrasiyalar
---

# İnteqrasiyalar

Integration client, connector connection və connector kataloqunu idarə edir.

## Modulun sərhədi

Client və connection konfiqurasiyadır; faktiki biznes təsiri connector-un icra etdiyi əməliyyatdan yaranır.

## Tipik iş axını

Client və ya connection yaradın, credential-i təhlükəsiz saxlayın və connector-un statusunu idarə edin.

## Sistem təsiri

Konfiqurasiya özü stok/jurnal yaratmır; inteqrasiya çağırışı hədəf endpointin təsirini daşıyır.

## Resurslar

| Resurs | Nə üçün istifadə olunur |
| --- | --- |
| [Connector kataloqu](./resources/integration-catalog) | Connector kataloqu məlumat və əməliyyatlarını idarə edir. |
| [Integration client-ləri](./resources/integration-client) | Integration client-ləri məlumat və əməliyyatlarını idarə edir. |
| [Integration connection-ları](./resources/integration-connection) | Integration connection-ları məlumat və əməliyyatlarını idarə edir. |

## Əlaqələr

Autentifikasiya, workflow, audit və bütün API resursları.
