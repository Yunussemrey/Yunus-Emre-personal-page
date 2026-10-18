/* Sitenin tek ayar dosyası. Kendi bilgilerini buradan güncelle. */
window.SITE = {
  githubUser: "Yunussemrey",
  // Statik CV dosyası. Yetkili bir servis varsa aynı JSON şemasıyla HTTPS URL kullanılabilir.
  // API anahtarlarını bu dosyaya koyma. "synced" yalnızca gerçek bir senkronizasyon kaynağı için.
  experienceFeed: "assets/data/experience.json",
  experienceFeedMode: "manual",
  // Sitede öne çıkarmak için seçtiğin projeler. GitHub sabitlemeleri API'den alınmaz.
  pinned: [
    "BenimNotumApp",
    "KacmaBendenGameApp",
    "YouTubeMusicCloneUI",
    "BasicKotlinDoc",
    "NetbeansAddForm",
    "Javada-HashMap-metodu-ile-sozluk-"
  ],
  // GitHub'da açıklama yoksa veya API'ye ulaşılamazsa bu metinler kullanılır.
  fallback: {
    "BenimNotumApp":      { lang: "Java",   desc: "Android cihazlar için geliştirdiğim not tutma uygulaması." },
    "KacmaBendenGameApp": { lang: "Java",   desc: "Android için aksiyon oyunu: Kaçma Benden." },
    "YouTubeMusicCloneUI":{ lang: "Java",   desc: "Popüler bir müzik uygulamasının Android arayüz tasarımı." },
    "BasicKotlinDoc":     { lang: "Kotlin", desc: "Kotlin temellerini anlattığım notlar ve örnekler." },
    "NetbeansAddForm":    { lang: "Java",   desc: "NetBeans ile hazırladığım kayıt ekleme formu." },
    "Javada-HashMap-metodu-ile-sozluk-": { lang: "Java", desc: "Java'da HashMap kullanarak yaptığım sözlük uygulaması." }
  },
  visibleCount: 8
};
