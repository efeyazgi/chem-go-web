# Chem GO — Admin Panel Setup (Decap CMS + Netlify Identity)

## 🎯 Amaç
Chem GO sitesine bir admin panel ekleniyor. Bu panel sayesinde içerikler (ör. duyurular) kod yazmadan eklenip düzenlenebilecek. Kullanılan sistem: **Decap CMS + Netlify Identity + Git Gateway**.

Panel `/admin/` altında çalışacak ve içerikler repo’ya commit olarak düşecek.

---

## ⚙️ Proje Yapısı

- **Framework:** Vite + React + Tailwind
- **Hosting:** Netlify (GitHub repo’dan otomatik build)
- **vite.config.ts:**  
  ```ts
  export default defineConfig({
    base: '/',   // Netlify kökten yayın yapıyor
    plugins: [react()],
  })

    Repo: efeyazgi/chem-go-web

    Build: npm run build

    Publish directory: dist

📂 Eklenen Dosyalar (Admin Panel)

public/admin/index.html       # Decap CMS + Netlify Identity
public/admin/config.yml       # Decap CMS ayarları
public/content/duyurular.json # İçeriklerin tutulacağı JSON dosyası

public/admin/config.yml

backend:
  name: git-gateway
  branch: main

media_folder: "public/uploads"
public_folder: "/uploads"

collections:
  - name: site
    label: Site İçeriği
    files:
      - name: duyurular
        label: Duyurular
        file: "public/content/duyurular.json"
        format: json
        fields:
          - { label: "Duyurular", name: "items", widget: "list",
              fields: [
                {label: "Başlık", name: "title", widget: "string"},
                {label: "Tarih",  name: "date",  widget: "datetime"},
                {label: "Açıklama", name: "description", widget: "text", required: false},
                {label: "Link",   name: "href", widget: "string", required: false},
                {label: "Görsel", name: "image", widget: "image", required: false}
              ]
          }

public/content/duyurular.json

{ "items": [] }

🔑 Netlify Ayarları

    Identity → Enabled

    Registration: Invite only

    Services → Git Gateway: Enabled

        GitHub Personal Access Token (PAT) eklendi

        Repo: efeyazgi/chem-go-web

        Permission: Contents → Read/Write

    Domain: Netlify subdomain (örn. chemgo.netlify.app), custom domain bağlanabilir.

🔐 Login Akışı

index.html dosyasında <body> bitmeden önce:

<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on('init', (user) => {
      if (!user) {
        window.netlifyIdentity.on('login', () => { location.href = '/admin/'; });
      }
    });
  }
</script>

✅ Şu Anki Durum

    /admin/ açılıyor, “Giriş Yap” düğmesi geliyor.

    Sorun: Şifre sıfırlama veya davet e-postaları çalışmıyor / mail gelmiyor.

    Son yaptığımız değişiklik: index.html’e Identity script’i eklendi. Ama e-posta akışı tam oturmadı.

📋 Görevler (AI’dan Beklenen)

    E-posta akışını düzelt.

        Davet ve şifre reset maillerinin gelmesini sağla.

        Gerekirse Netlify Identity “Email templates” veya SMTP ayarlarını kontrol et.

    Admin panelini aç.

        /admin/ → login → Decap CMS arayüzü gelmeli.

        Yeni duyuru eklenince public/content/duyurular.json güncellenmeli.

        Repo’ya commit düşmeli, Netlify yeniden deploy etmeli.

    Kimlik penceresi.

        Davet/reset linki tıklandığında ana sayfada kimlik penceresi otomatik açılsın.

    Roller (opsiyonel).

        Identity → Users → Role ekleme (örn. admin).

        config.yml içinde role tabanlı erişim örneği.

✅ Kabul Kriterleri

    /admin/ → Login with Netlify Identity → panel açılıyor.

    Yeni “Duyuru” eklendiğinde repo’daki JSON dosyası güncelleniyor.

    Site yeniden deploy ediliyor ve frontend JSON’dan yeni içeriği gösteriyor.

    Şifre sıfırlama/davet maili başarıyla çalışıyor.

🔍 Kontrol Listesi

Netlify Identity → Enabled

Identity → Users → Confirmed user var

Identity → Services → Git Gateway + PAT kayıtlı

public/admin/index.html → Identity + Decap script’leri defer ile var

public/admin/config.yml doğru

public/content/duyurular.json mevcut

index.html → Identity script + login sonrası /admin/ yönlendirme

Netlify Deploy log → admin dosyaları ve content dosyası yayınlanıyor