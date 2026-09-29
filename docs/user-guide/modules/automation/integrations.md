---
title: İnteqrasiyanı qoşmaq və izləmək
sidebar_label: İnteqrasiyalar
---

# İnteqrasiyanı qoşmaq və izləmək

İnteqrasiyalar səhifəsində REST API müştərisi üçün açar yaratmaq və sistem hadisələrini webhook ünvanına göndərmək mümkündür. Açar və imza sirri yaradıldıqda yalnız bir dəfə göstərilir.

## İstifadə qaydası

### REST API açarı yaradın

1. **Şirkətim → İnteqrasiyalar** bölməsini açın və kataloqdan REST API bağlantısını seçin.
2. Müştəri adını, ona bağlanacaq istifadəçini, lazım olduqda bitmə tarixini və dəqiqədə sorğu limitini daxil edin.
3. Açarı yaradın. Açılan pəncərədə tokeni dərhal kopyalayıb səlahiyyətli yerdə saxlayın; səhifəni bağladıqdan sonra gizli dəyər yenidən göstərilmir.

### Webhook bağlantısı yaradın

4. Kataloqdan webhook bağlantısını seçin.
5. Ad, HTTPS endpoint ünvanı və göndəriləcək hadisə nümunələrini daxil edin. İmza sirrini təyin edin, bağlantını aktiv saxlayın və yadda saxlayın.
6. Test göndərişi ilə endpoint-in cavab verdiyini yoxlayın.

   > **Şəkil əlavə ediləcək —** `media/user-guide/automation/integrations/images/screen-01.png`: Webhook adı, endpoint, hadisə filtri və aktivlik seçimi.

### Hadisə və çatdırılmaları izləyin

7. Hadisə siyahısında inteqrasiya hadisəsinin yaradıldığını yoxlayın.
8. Çatdırılma statusu filtrindən **Gözləyir**, **Göndərilib**, **Təkrar gözləyir** və ya **Yoxlama tələb edir** vəziyyətini seçin.
9. Xəta olduqda endpoint jurnalını yoxlayıb bağlantının ünvanını və qəbul qaydasını düzəldin; sonra mövcud təkrar göndərmə imkanından istifadə edin.

   > **Video əlavə ediləcək —** `media/user-guide/automation/integrations/videos/walkthrough-01.mp4`: Bağlantı yaratmaq, test göndərişi və çatdırılma statusunu yoxlamaq.

## Lüğət

| Termin | Bu səhifədəki mənası |
| --- | --- |
| Müştəri/API client | ERP API-sinə verilmiş istifadəçi və limitlə bağlanan inteqrasiya identifikatorudur. |
| Token | API çağırışında istifadə edilən gizli açardır. |
| Endpoint | Webhook məlumatını qəbul edən xarici URL-dir. |
| Hadisə nümunəsi | Webhook-a hansı tip dəyişikliklərin göndəriləcəyini müəyyən edən filtrdir. |
| Çatdırılma | Hadisə payload-ının endpoint-ə göndərilməsi cəhdidir. |

## FAQ

### Tokeni sonradan yenidən görə bilərəm?

Xeyr. Token yaradıldıqdan sonra bir dəfə göstərilir. İtirilərsə yeni açar yaradın və xarici tətbiqin sazlamasını yeniləyin.

### Webhook hadisəsi niyə gəlmir?

Bağlantının aktiv olduğunu, endpoint-in əlçatanlığını və hadisə filtrinin lazım olan resursu əhatə etdiyini yoxlayın. Çatdırılma monitorunda nəticəni araşdırın.
