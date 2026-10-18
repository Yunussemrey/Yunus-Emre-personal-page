# Yunus Emre | Kişisel Portfolyo Sitesi

Saf HTML, CSS ve JavaScript. Kurulum, derleme veya Node.js gerekmez.

## VS Code'da çalıştırma
1. Klasörü VS Code ile aç (`File > Open Folder`).
2. **Live Server** eklentisini kur (öneri olarak otomatik çıkar).
3. `index.html` üzerinde sağ tık, **Open with Live Server**.
Tarayıcıda `http://127.0.0.1:5500` açılır; kaydettikçe sayfa yenilenir.

## Klasör yapısı
```
portfolio/
├─ index.html            Sayfanın iskeleti ve metinler (hakkımda, deneyim, yetenekler)
├─ assets/
│  ├─ css/
│  │  ├─ tokens.css      Renkler, fontlar (açık ve koyu tema)
│  │  ├─ base.css        Sıfırlama, tipografi, butonlar
│  │  └─ sections.css    Her bölümün stili
│  ├─ js/
│  │  ├─ config.js       GitHub kullanıcı adı, öne çıkan projeler (EN ÇOK BURAYI DÜZENLERSİN)
│  │  ├─ theme.js        Açık/koyu tema
│  │  ├─ hero.js         Plaka okutma animasyonu
│  │  ├─ projects.js     GitHub API'den proje listesi ve filtre
│  │  └─ main.js         Menü, aktif bölüm, CV kontrolü
│  ├─ img/favicon.svg
│  └─ cv/                CV PDF'ini buraya koy: Yunus-Emre-CV.pdf
├─ robots.txt, sitemap.xml   Google için
└─ .vscode/              Live Server ayarları
```

## Düzenlenecekler
- `index.html`: Parkjet bölümündeki maddeleri, başlığını ve tarihleri kendi gerçeğine göre düzelt. Önceki deneyimlerini ekle.
- `assets/js/config.js`: öne çıkan projeler ve açıklamaları.
- `assets/cv/Yunus-Emre-CV.pdf`: CV'ni ekle.
- `index.html`, `sitemap.xml`, `robots.txt` içindeki `yunussemrey.github.io` adresini kendi alan adınla değiştir.
- E-posta eklemek istersen İletişim bölümüne bir `<li>` ekle.

## Google'da yayınlama (ücretsiz)
1. GitHub'da `yunussemrey.github.io` adında yeni bir **public** depo aç.
2. Bu klasörün içindekileri depoya yükle (`git init`, `git add .`, `git commit`, `git push`).
3. Depoda **Settings > Pages > Deploy from a branch > main / (root)** seç. Birkaç dakika sonra site `https://yunussemrey.github.io` adresinde yayında olur.
4. **Google Search Console**'a gir, adresi ekle, `sitemap.xml` dosyasını gönder. Google birkaç gün içinde indekslemeye başlar.
5. İsteğe bağlı: kendi alan adını (örn. yunusemre.dev) Pages ayarlarından bağlayabilirsin.
