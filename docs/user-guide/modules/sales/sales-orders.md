---
title: Satış sifarişi hazırlamaq
sidebar_label: Sifarişlər
---

# Satış sifarişi hazırlamaq

Satış sifarişi müştəriyə veriləcək məhsul və xidmətlərin şərtlərini qeyd edir. Təsdiqlənmiş sifariş faktiki satış sənədi deyil; müştəriyə təhvil və stok çıxışı üçün satış sənədi yaradılır. Sifarişi yaradarkən müştəri, təminat anbarı, valyuta, məhsullar, miqdarlar və razılaşdırılmış qiymətlər lazım olacaq.

## İstifadə qaydası

### Sifarişi yaradın və müştəri məlumatlarını daxil edin

1. Sol menyudan **Satış → Sifarişlər** bölməsini açın.

   > **Şəkil əlavə ediləcək —** `media/user-guide/sales/sales-orders/images/screen-01.png`: Sol menyuda “Satış” açıq, “Sifarişlər” seçilmiş və sifariş siyahısı görünən ekran.

2. Sifariş siyahısının yuxarı hissəsindəki **Yeni** düyməsini seçin. Açılan kartda müştərini, məhsulun təmin ediləcəyi anbarı və valyutanı seçin. Tarix, filial və layihə məlumatlarını əməliyyata uyğun daxil edin; sifariş CRM lidindən yaranıbsa, əlaqəni də yoxlayın.

   Müştəri sifarişin kimə aid olduğunu, anbar isə məhsulun haradan təmin edilməsinin planlaşdırıldığını bildirir. [Lüğətdə](../../../glossary) bu anlayışların izahına baxın.

   > **Şəkil əlavə ediləcək —** `media/user-guide/sales/sales-orders/images/screen-02.png`: Sifariş formasının başlıq hissəsində müştəri, anbar, valyuta və tarix sahələri.

### Məhsulları və sifariş şərtlərini daxil edin

3. **Məhsullar** səkməsində yeni sətir əlavə edin və satılacaq məhsulu seçin. Qiymət növünü göstərin. Məhsul kartından ölçü vahidi və standart satış qiyməti təklif olunarsa, sifarişə uyğunluğunu yoxlayın.

4. Miqdarı və satış qiymətini daxil edin. Endirim tətbiq ediləcəksə, onu məhsul sətrində və ya sifarişin ümumi hissəsində göstərin. Mühasibatlıq və vergi sazlamaları aktivdirsə, görünən vergi sahəsində uyğun vergini seçin. Sistem sətir məbləğini və sifariş yekunlarını hesablayır.

   > **Şəkil əlavə ediləcək —** `media/user-guide/sales/sales-orders/images/screen-03.png`: Məhsul və qiymət növü seçilmiş, miqdar və qiymət daxil edilmiş sətir; hesablanmış məbləğ və yekunların göründüyü forma.

5. Başqa məhsullar varsa onları da əlavə edin. Sifarişin ümumi miqdarını, endirimini və yekun məbləğini yoxlayın. Düzəliş lazımdırsa, məhsul sətrindəki məlumatı dəyişin.

### Sifarişi yadda saxlayın və təsdiqləyin

6. Sifarişi yadda saxlayın. Qaralama sifarişdə məlumatları nəzərdən keçirib düzəldə bilərsiniz.

7. Müştərini, anbarı, məhsul sətirlərini və yekun məbləği yoxladıqdan sonra **Təsdiq** əməliyyatını seçin. Sifariş təsdiqlənəndə rezerv davranışı tenant sazlamalarından asılı ola bilər; faktiki satış və anbar çıxışı isə satış sənədi post ediləndə qeydə alınır.

   > **Şəkil əlavə ediləcək —** `media/user-guide/sales/sales-orders/images/screen-04.png`: Sifariş kartında “Təsdiq” əməliyyatı və təsdiqdən sonra görünən status.

8. Məhsul müştəriyə təhvil veriləndə sifariş kartında **Sənəd yarat → Satış sənədi** seçin. Yeni sənəddə faktiki təhvil verilən məhsul və miqdarları yoxlayın, sonra satış sənədini tamamlayıb post edin.

   > **Video əlavə ediləcək —** `media/user-guide/sales/sales-orders/videos/walkthrough-01.mp4`: Sifarişin yaradılması və təsdiqi, sonra sifarişdən satış sənədinin açılması və tamamlanması.

## Lüğət

| Termin | Bu səhifədəki mənası |
| --- | --- |
| Satış sifarişi | Müştəri ilə razılaşdırılan məhsul və xidmətlərin şərtlərini saxlayan sənəddir. Təkbaşına faktiki təhvil və stok çıxışı yaratmır. |
| Müştəri | Məhsulu və ya xidməti alan tərəfdaşdır. Ümumi tərəfdaş anlayışı [lüğətdə](../../../glossary) izah olunur. |
| Qiymət növü | Satış sətrində istifadə olunacaq qiymətin siyahısını və ya qaydasını seçir. |
| Satış sənədi | Müştəriyə faktiki təhvil verilən məhsulları qeydə alır; post ediləndə stok çıxışı və əlaqəli maliyyə təsirləri yaranır. |

## FAQ

### Təsdiqlənmiş satış sifarişi faktiki satış sayılırmı?

Sifariş müştəri ilə razılaşdırılmış öhdəliyi göstərir. Faktiki təhvil və stok çıxışı üçün sifarişdən **Satış sənədi** yaradılıb post edilməlidir.

### Məhsul seçildikdən sonra qiyməti dəyişə bilərəm?

Bəli. Təklif olunan qiyməti və qiymət növünü yoxlayın, sonra bu sifariş üçün razılaşdırılmış qiyməti daxil edin.

### Sifarişi təsdiqləməzdən əvvəl nəyi yoxlamalıyam?

Müştərini, təminat anbarını, məhsulları, qiymət növünü, miqdarları, endirim və vergi seçimlərini, yekun məbləği yoxlayın.
