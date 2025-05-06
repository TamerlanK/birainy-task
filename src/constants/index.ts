import { FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa6"

export const navItems = [
  { name: "Xidmətlərimiz", link: "/services" },
  { name: "Layihələr", link: "/projects" },
  { name: "Analitika", link: "/analytics" },
  { name: "Bloq", link: "/blog" },
  { name: "Biz kimik?", link: "/about" },
]

export const socialMediaLinks = [
  { name: "Instagram", link: "https://www.instagram.com/", icon: FaInstagram },
  { name: "LinkedIn", link: "https://www.linkedin.com/", icon: FaLinkedinIn },
  { name: "TikTok", link: "https://www.tiktok.com/", icon: FaTiktok },
]

export const addresses = [
  {
    country: "Azərbaycan",
    address: "Azure Business Center 8 Noyabr, 15 Bakı, Azərbaycan AZ1010",
  },
  {
    country: "Kanada",
    address: "Edmonton, Alberta",
  },
  {
    country: "Gürcüstan",
    address: "Tbilisi, Gürcüstan",
  },
]

export const contact = [
  {
    type: "phone",
    value: "+994 12 488 66 54",
  },
  {
    type: "phone",
    value: "+994 77 613 13 17",
  },
  {
    type: "email",
    value: "info@birainy.com",
  },
]

type Service = {
  id: number
  title: string
  content?: string
  tabs?: Array<{
    id: number
    name: string
    content: string
  }>
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Proqram Təminatı",
    tabs: [
      {
        id: 1,
        name: "Proqram Təminatı",
        content:
          "BIRainy şirkətlərin istəklərinə uyğun olaraq proqram təminatı hazırlayır. Proqramın son trendlərə və interfeysinin rahat istifadəyə uyğun olması əsas üstünlüyümüzdür. Müxtəlif sistemlər və mobil tətbiqlər, OCR əsaslı Sürətli Axtarış Sistemi, Telegram Bot-lar sayəsində şirkətlər müştəri əlaqələrinin gücləndirilməsinə, şirkət daxilindəki əməkdaşlar arasındakı işlərin idarə edilməsinə, prosesin sürətləndirilə və manuallığın azalıb avtomatlaşdırılmış formada həyata keçirilməsinə nail olurlar.",
      },
      {
        id: 2,
        name: "Sürətli axtarış sistemi",
        content:
          "Şirkətdaxili və xarici proseslərin həyata keçirilməsi, həmçinin əməkdaşların şirkət daxilindəki sənədləri avtomatlaşdırılmış şəkildə axtarış edib, rahatlıqla yerləşdirib, toplaya və göndərə bildikləri OCR alqoritmi ilə hazırlanmış Sürətli Axtarış Sistemi.",
      },
      {
        id: 3,
        name: "CRM və ERP",
        content: "CRM ERP",
      },
      {
        id: 4,
        name: "Mobil tətbiqlər",
        content:
          "Müştərilərin tələblərinə uyğun olaraq son trendlərə əsaslanaraq mobil tətbiq UX/UI dizaynerlər tərəfindən istifadəçi üçün rahat və gözoxşayan şəkildə dizayn edilir. Dizayna əsasən də müxtəlif proqramlaşdırma dilləri və kitabxanası ilə ən yeni texnologiyalardan istifadə edərək kodlaşdırılır. Yazdığımız mobil tətbiqlər həm IoS, həm də Android əməliyyat sistemində dəstəklənə bilir.",
      },
    ],
  },
  {
    id: 2,
    title: "Saytların yaradılması",
    content:
      "Şirkətlərin vizyonuna uyğun olaraq sayt hazırlayırıq. Sayt trendə uyğun olaraq dizaynerlərimiz tərəfindən dizayn edilir. HTML5, CSS, JS (react js., vue js., angular js.) kimi proqramlaşdırma dilləri ilə son texnologiyalardan istifadə edərək piksel dəqiqliyində kodlaşdırılıb müxtəlif ölçülü mobil və digər cihazlara uyğunlaşdırılır. Sonda qurulmuş sayt üçün sistem arxitekturası yaradılır və maksimum sürətli işləməsi təmin edilir.",
  },
  {
    id: 3,
    title: "Oyun təminatı",
    tabs: [
      {
        id: 1,
        name: "Oyun təminatı",
        content:
          "Şirkətin fəaliyyət göstərdiyi istiqamətə, istehsal etdiyi məhsullara uyğun olaraq oyun ssenarisi hazırlanır, son trendlərə əsaslanaraq dizayn olunur və oyun developerləri tərəfindən 2D və 3D formatında oyunlar yazılır. Oyunun növünə uyğun assetlərdən istifadə edilir.",
      },
      {
        id: 2,
        name: "Stend və VR oyunları",
        content:
          "BIRainy şirkəti şirkətlərin istəyinə və istifadə edəcəkləri istiqamətə uyğun olaraq özlərinə məxsus elementlərin, logonun da yer aldığı və müştərilərinin endirimlər qazanaraq əylənə bilmələri üçün stend və VR oyunlar yazır.",
      },
      {
        id: 3,
        name: "Veb oyunlar",
        content:
          "İstifadəçinin uzun müddət veb-saytda qalması və axtarış sistemində biznes veb-saytlarının təbii yollarla artımını təmin etmək üçün veb oyunların yazılması",
      },
      {
        id: 4,
        name: "VR Simulatorlar",
        content:
          "BIRainy tərəfindən şirkətlərin istəklərinə uyğun olaraq VR simulyatorlar yazılır və hololens, ocolus kimi VR eynəklərlə təmin edilir.",
      },
      {
        id: 5,
        name: "Oyun monitoru kirayəsi",
        content:
          "Təqdim etdiyimiz stend oyunlarla birgə monitorları da kirayələmək mümkündür.",
      },
    ],
  },
  {
    id: 4,
    title: "Data Analitikası",
    tabs: [
      {
        id: 1,
        name: "Data analitikası",
        content:
          "BIRainy MMC tərəfindən şirkətin dataları bütün mənbələrdən müxtəlif formatlarda toplandıqdan sonra təmizlənir. Təmizlənmiş datalar qrafiklərlə vizuallaşdırılır və analiz olunduqdan sonra biznes yönümlü analitik həllər şirkətə təklif edilir. Son mərhələdə hazırlanmış dashboard-larda şirkət real vaxt rejimində yeni datalara əsasən məlumatları da görə bilir.",
      },
      {
        id: 2,
        name: "Maliyyə təhlili",
        content:
          "Bu təhlilin məqsədi şirkətin gəlirliliyini, likvidliyini və ödəmə qabiliyyətini qiymətləndirmək, əsaslandırılmış investisiya və ya kredit qərarları qəbul etməkdi",
      },
      {
        id: 3,
        name: "İnsan resurslarının təhlili",
        content:
          "HR təhlilinin son məqsədi işçi qüvvəsinin planlaşdırılması üçün nümunələri, təkmilləşdirilməli sahələri və strateji imkanları müəyyən etməkdir.",
      },
      {
        id: 4,
        name: "Optimizasiya təhlili",
        content:
          "Optimallaşdırma təhlili resursların bölüşdürülməsi və ya seçim edilməsini nəzərdə tutan problemin optimal həllini müəyyən etmək üçün riyazi model və metodlardan istifadə prosesinə aiddir. Optimallaşdırma təhlili maliyyə, mühəndislik, logistika və əməliyyatların idarə edilməsi kimi sahələrdə geniş tətbiq sahəsinə malikdir və səmərəliliyin artırılmasına, xərclərin azaldılmasına, təkmilləşdirilmiş performansa kömək edir.",
      },
      {
        id: 5,
        name: "Satınalma təhlili",
        content:
          "Satınalma təhlili şirkətin satınalma fəaliyyəti haqqında məlumat əldə etmək və xərclərə qənaət, prosesi təkmilləşdirmək imkanlarını aşkar etmək üçün onun satınalma fəaliyyətini nəzərdən keçirməkdir. Bunun üçün tendensiyaları, potensial riskləri və təkmilləşdirmə tələb edən sahələri müəyyən edilib satınalma sifarişləri, təchizatçı performansı və inventar səviyyələri kimi müxtəlif məlumatlar təhlil edilir. Satınalma təhlili şirkətlərə aşağıdakı mövzularda əsaslandırılmış qərarlar qəbul etməkdə kömək edir, bu da daha yüksək səmərəliliyə və gəlirliliyə gətirib çıxarır:",
      },
      {
        id: 6,
        name: "Əsas Performans Göstəriciləri (KPI) təhlili",
        content:
          "KPI təhlili şirkətin fəaliyyətinin onun strateji məqsəd və vəzifələrinə uyğun qiymətləndirilməsini əhatə edir. Bu proses, müştəri saxlamaq dərəcəsi, satış artımı və ya işçilərin məhsuldarlığı kimi şirkətin uğuru üçün vacib olan KPI-lərin seçilməsini və izlənilməsini nəzərdə tutur. Əsas Performans Göstəriciləri təhlili şirkətin fəaliyyətinə dair fikirlər təqdim edən dəyərli vasitədir və biznes nəticələrini yaxşılaşdırmaq üçün məlumatlara uyğun əsaslandırılmış qərarlar qəbul etməyə imkan verir.",
      },
      {
        id: 7,
        name: "1C proqramı ilə inteqrasiya",
        content:
          "1C proqramından verilənlərin Microsoft Power BI-a qoşulması biznes məlumatlarının təhlili və vizuallaşdırılması üçündür. Bu inteqrasiya şirkətlərə real vaxt rejimində məlumat təhlilindən istifadə etməklə yaxşı əsaslandırılmış qərarlar qəbul etmək imkanı verir.",
      },
      {
        id: 8,
        name: "SƏTƏM Təhlili",
        content:
          "Sağlamlıq, Əməyin Təhlükəsizliyi və Ətraf Mühit (SƏTƏM) risklərinin təhlili layihə və ya əməliyyatla bağlı potensial təhlükələrin qiymətləndirilməsini əhatə edir. Məqsədi bu risklərin ehtimalını və nəticələrini müəyyən etmək, təşkilatlara effektiv risklərin idarə edilməsi yanaşmalarını həyata keçirməyə imkan yaratmaqdır. SƏTƏM təhlili iş yerinin təhlükəsizliyinin və tənzimləmə qaydalarına uyğunluğun, xüsusən də, tikinti, istehsal və enerji kimi sənayelərin qorunmasında vacibdir.",
      },
      {
        id: 9,
        name: "Satış / KPI",
        content:
          "BIRainy tərəfindən təqdim olunan Satış və KPI analizi hesabatı, satış prosesinin müxtəlif fazalarını izləməyə imkan verir. Bu hesabat vasitəsilə sahibkarlar, anbarların vəziyyəti, müştəri qruplarının seçimləri, satışlar və əldə edilmiş gəlirlər haqqında detallı məlumatla təchiz olunurlar.",
      },
      {
        id: 10,
        name: "Sosial Media",
        content:
          "BIRainy tərəfindən Sosial Media üzrə vizuallaşdırılmış dashboard idarə olunan platformalarda performans göstəricilərinin hərtərəfli təhlilini təqdim edir. Təhlildə diqqət real vaxt çərçivəsində auditoriya ilə qarşılıqlı əlaqə, məzmunun effektivliyi və platformanın ümumi inkişafı ilə bağlı fikirləri təqdim edən əsas göstəricilərə yönəlib.",
      },
      {
        id: 11,
        name: "Restoranlar",
        content:
          "Restoranlar üzrə təhlil restoranın fəaliyyətinin müxtəlif aspektləri haqqında məlumat verən mühüm vasitədir. O, maliyyə sağlamlığını qiymətləndirməyə, qərar qəbul etməyə, inventarları idarə etməyə, müştərilərin seçimlərini başa düşməyə, işçilərin fəaliyyətini qiymətləndirməyə və qaydalara uyğunluğu təmin etməyə kömək edir.",
      },
    ],
  },
]
