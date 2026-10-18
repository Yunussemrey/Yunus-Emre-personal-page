# Yunus Emre | Yazılım & Bilgi İşlem

Kişisel web CV ve portfolyo. Saf HTML, CSS ve JavaScript; paket kurulumu, derleme, veritabanı veya Node.js gerekmez.

## Çalıştırma

Depo klasöründe:

```sh
python3 -m http.server 5500 --bind 127.0.0.1
```

VS Code Live Server da kullanılabilir. Dosyayı doğrudan `file://` ile açmak yerine HTTP sunucusu kullan; CV verileri JSON üzerinden yüklenir.

## İçerik ve tasarım

- `index.html`: ana sayfa, hakkımda, yetenekler, iletişim ve veri alınamadığında temel deneyim içeriği.
- `assets/img/portrait.png`: sağlanan fotoğraftan hazırlanan şeffaf arka planlı portre.
- `assets/css/tokens.css`: açık/koyu tema renkleri ve yazı tipleri.
- `assets/js/config.js`: GitHub kullanıcı adı, öne çıkarılan projeler ve deneyim kaynağı.
- `assets/data/experience.json`: şirket, unvan, dönem ve açıklamalar. Tarih ve iş yerlerini doğrulanmış bilgilerle güncelle. Eğitim ayrı olarak HTML içinde tutulur.
- `assets/cv/Yunus-Emre-CV.pdf`: isteğe bağlı indirilebilir CV. Dosya yoksa düğme gizlenir.

Portre masaüstünde fareyi hafifçe takip eder. Azaltılmış hareket tercihi açıkken hareket kapalıdır. Mobil menü ve tema düğmesi klavyeyle kullanılabilir.

## GitHub canlı verileri

Profilin açık depo/takipçi sayıları ve herkese açık, fork olmayan projeler doğrudan `api.github.com` üzerinden yüklenir. Token gerekmez. İstekler 8 saniyede zaman aşımına uğrar. API erişimi yoksa profil bağlantısı ve yapılandırmadaki altı proje gösterilir; bu durumda arayüz yedek veriyi açıkça belirtir. GitHub sabitlemeleri API'den okunmaz; `pinned` sitedeki editoryal seçimdir.

## LinkedIn deneyim verisi

LinkedIn profil bağlantısı, iş geçmişini okumaya yetki vermez. Normal LinkedIn giriş/OpenID erişimi de tam iş geçmişini sağlamaz. Bu statik site LinkedIn'i kazımaz, oturum çerezi istemez ve iş geçmişini canlı alıyormuş gibi göstermez.

Varsayılan deneyim kaynağı `assets/data/experience.json` dosyasıdır. LinkedIn deneyim metnini veya profil dışa aktarımındaki ilgili bilgileri bu dosyaya aktarabilirsin. Mevcut Parkjet kaydı önceki site içeriğinden korunmuştur; başlangıç/bitiş tarihleri ve başka iş yerleri uydurulmamıştır.

Otomatik senkronizasyon için LinkedIn tarafından yetkilendirilmiş ve iş deneyimine erişebilen bir sunucu entegrasyonu gerekir. Böyle bir servis sağlandığında, aşağıdaki şemada herkese açık CV verisi döndüren adresini `experienceFeed` olarak ayarla; `experienceFeedMode` değerini `synced` yap. Kaynak her sayfa açılışında istenir. Servisin LinkedIn'den veri yenilemesi servisin sorumluluğundadır; yalnızca bu ayarı değiştirmek LinkedIn bağlantısı oluşturmaz. Farklı alan adı için CORS izni gerekir. Gizli anahtarlar ve erişim tokenları tarayıcı koduna veya depoya konulmamalıdır.

```json
{
  "positions": [
    {
      "company": "Şirket adı",
      "role": "Unvan",
      "period": "Başlangıç – bitiş / devam ediyor",
      "details": ["İş ve sorumluluk açıklaması"]
    }
  ]
}
```

Veri kaynağı yüklenmezse veya geçersizse HTML içindeki temel deneyim kaydı korunur. Birden fazla deneyim kaynağın verdiği sırayla gösterilir. Ekranda gösterilen içerik metin olarak işlenir.

## Doğrulama

Tarayıcıda masaüstü/mobil düzeni, tema değişimi, mobil menü, fotoğraf, deneyim listesi, GitHub proje filtreleri ve CV dosyası yokken düğmenin gizlenmesini kontrol et. GitHub erişimini engelleyerek yedek veri durumunu da doğrula.

## Yayınlama

Depo şu anda özeldir (Private). GitHub Free ile Pages kullanmak için depoyu **Settings → General → Danger Zone → Change repository visibility → Public** üzerinden herkese açık yapman gerekir; bu işlem kaynak kodunu ve Git geçmişini de herkese açar. Özel depolar için Pages desteği olan bir GitHub planın varsa depoyu özel tutarak Pages'i etkinleştirebilirsin.

1. Bu çalışma alanındaki değişiklikleri GitHub deposuna aktar: Codex arayüzünde PR oluşturma seçeneği varsa bir PR oluştur ve GitHub'da `master` dalına birleştir. Dosyaları elle yüklüyorsan yalnızca `index.html` değil, `assets/` klasöründeki yeni ve değişen dosyaları da aktar.
2. GitHub'da `Yunussemrey/Yunus-Emre-personal-page` deposunu aç. **Settings → Pages** bölümüne git.
3. **Build and deployment → Source** altında **Deploy from a branch** seç.
4. Dal olarak **master**, klasör olarak **/ (root)** seç ve **Save** düğmesine bas.
5. Pages dağıtımı tamamlandığında GitHub'ın gösterdiği site adresini aç. Özel alan adı yoksa proje adresi `https://yunussemrey.github.io/Yunus-Emre-personal-page/` olur. Sonraki değişiklikler `master` dalına gönderildiğinde yeniden yayımlanır.

`index.html`, `sitemap.xml`, `robots.txt` içindeki adresler `https://yunussemrey.github.io/Yunus-Emre-personal-page/` için ayarlanmıştır. Özel alan adına geçersen bunları da güncelle. Bulut geliştirme ortamını yayımlamak GitHub Pages sitesini yayımlamaz; bunun için değişikliklerin GitHub'a aktarılması gerekir.

## E-posta iletişimi

İletişim bölümünde `yunussemrey1@gmail.com` adresi ve bir `mailto:` düğmesi bulunur. Düğme ziyaretçinin e-posta uygulamasında alıcı ve konu alanı hazır bir ileti açar; ziyaretçi iletiyi kendisi gönderir. Adres ayrıca kopyalanabilir metin olarak gösterilir. Site üzerinden doğrudan gönderim yapan bir form için ayrı bir form/e-posta servisi gerekir; şu an böyle bir servis bağlı değildir.

Dış kaynaklar: `api.github.com`, `fonts.googleapis.com`, `fonts.gstatic.com`. Dış fontlar yüklenmese de sistem yazı tipleriyle site kullanılabilir.


## Google arama sonuçlarına ekleme

Önce GitHub Pages üzerinden sitenin herkese açık adresinin çalıştığını doğrula. Ardından Google Search Console'a Google hesabınla gir:

1. **URL prefix / URL öneki** mülkü olarak `https://yunussemrey.github.io/Yunus-Emre-personal-page/` adresini ekle.
2. **HTML file / HTML dosyası** doğrulama yöntemini seç. Google'ın verdiği dosyayı değiştirmeden deponun köküne ekleyip `master` dalına gönder. Yayımlanmasını bekleyip Search Console'da doğrula. Alternatif olarak Google'ın verdiği HTML meta etiketini `index.html` içindeki `<head>` alanına ekleyebilirsin.
3. **Sitemaps / Site Haritaları** bölümünde `https://yunussemrey.github.io/Yunus-Emre-personal-page/sitemap.xml` adresini gönder.
4. **URL inspection / URL denetimi** bölümünde ana sayfa adresini denetleyip **Request indexing / Dizine eklenmesini iste** seçeneğini kullan.

Search Console doğrulaması site sahibinin Google hesabıyla yapılmalıdır. GitHub Pages yayını ve Google dizinine alınma ayrı işlemlerdir; dizine alınma zamanı ve sıralama Google tarafından belirlenir. Sonraki geliştirmeleri `master` dalına gönderdiğinde site yeniden yayımlanır.
