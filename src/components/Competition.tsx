import React from 'react';
import { Users, Calendar, MapPin, FileText, Beaker, Zap, Shield, Target } from 'lucide-react';

const Competition = () => {
  const details = [
    {
      icon: Users,
      title: 'Katılım Kuralları',
      description:
        '3–5 kişilik öğrenci takımları ve bir akademik danışman ile başvuru yapılır.',
      features: [
        'Lisans / lisansüstü öğrenci şartı',
        'Takım: 3–5 öğrenci + 1 danışman',
        'Ücret yok; laboratuvar onayı gerekli'
      ]
    },
    {
      icon: Calendar,
      title: 'Önemli Tarihler',
      description:
        '2026 baharında düzenlenecek. Ayrıntılı takvim başvuru esnasında yayınlanır.',
      features: ['Başvuru: Aralık 2025', 'Ön Eleme: Şubat 2026', 'Yarış Günü: Nisan 2026']
    },
    {
      icon: MapPin,
      title: 'Konum & Mekan',
      description: 'Eskişehir Osmangazi Üniversitesi, kapalı alanda düz pist.',
      features: ['ESOGÜ Meşelik Kampüsü', 'Laboratuvar erişimi', 'İç mekân test pisti']
    },
    {
      icon: FileText,
      title: 'Başvuru Süreci',
      description:
        'Çevrim içi form, güvenlik evrakları ve teknik özet ile tamamlanır.',
      features: ['Takım bilgileri', 'MSDS ve risk analizi', 'Proje/araç teknik özeti (≤2 sayfa)']
    }
  ];

  return (
    <section id="competition" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary font-poppins mb-6">
            Yarışma <span className="text-primary">Detayları</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hedef mesafeye kimyasal enerji ile en doğru şekilde ulaşmayı amaçlayan öğrenci araçları
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {details.map((detail, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-light to-white p-8 rounded-2xl border border-gray-200 hover:border-primary/30 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <detail.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-secondary mb-3 font-poppins">
                    {detail.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{detail.description}</p>
                  <ul className="space-y-2">
                    {detail.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-secondary font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Yarışma Formatı & Kurallar */}
        <div
          className="mt-12 bg-gradient-to-r from-secondary to-secondary-light text-white rounded-3xl p-8 lg:p-12 animate-fadeInUp"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sol sütun: Format */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 font-poppins flex items-center gap-3">
                <Target className="w-7 h-7" /> Yarışma Formatı
              </h3>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold text-lg text-primary mb-2">Hedef Mesafe</h4>
                  <p className="text-sm opacity-90">
                    Yarış günü açıklanan <b>rastgele hedef mesafeye</b> (ör. 10–30 m) en yakın
                    noktada durmak esastır. Takımlar iki deneme yapar; toplam mutlak hata
                    sıralamayı belirler.
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold text-lg text-primary mb-2">Yük / Taşıma</h4>
                  <p className="text-sm opacity-90">
                    Araçlar yarış günü açıklanan miktarda <b>su yükü</b> (ör. 0,25–0,50 L)
                    taşıyabilir. Yük kapalı ve sızdırmaz olmalıdır.
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-bold text-lg text-primary mb-2">Pist ve Başlangıç</h4>
                  <p className="text-sm opacity-90">
                    Düz ve pürüzsüz iç mekân pisti. Başlangıç sinyalinden sonra araca temas
                    yasaktır; <b>tümüyle araç üzerinde</b> bulunan sistemler çalışmalıdır.
                  </p>
                </div>
              </div>
            </div>

            {/* Sağ sütun: Kurallar */}
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold mb-6 font-poppins">Teknik Kurallar</h3>

              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-lg text-primary mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" /> Enerji & Durdurma
                </h4>
                <ul className="text-sm opacity-90 space-y-2">
                  <li>Güç kaynağı <b>kimyasal kökenli</b> olmalıdır (yakıt hücresi, Zn/Al-hava vb.).</li>
                  <li>Yanma, dış güç beslemesi ve kablosuz kontrol yasaktır.</li>
                  <li>
                    Durdurma <b>kimyasal zamanlayıcı</b> (ör. saat reaksiyonu) veya araç üzerinde
                    çalışan kapalı çevrim kontrolü ile sağlanabilir.
                  </li>
                  <li>
                    Elektronik sadece kontrol/ölçüm amaçlı; ticari tahrik bataryasıyla doğrudan
                    sürüş yasaktır. Küçük kontrol pilleri ≤ <b>12 Wh</b>.
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-lg text-primary mb-2 flex items-center gap-2">
                  <Beaker className="w-5 h-5" /> Boyut, Ağırlık & Yapı
                </h4>
                <ul className="text-sm opacity-90 space-y-2">
                  <li>Araç <b>40×30×20 cm</b> hacmi içine sığmalı, kütle ≤ <b>5 kg</b>.</li>
                  <li>İkincil sızıntı kabı, damlama önleyici ped ve kilitli reaktif kapları zorunlu.</li>
                  <li>Acil durum <b>fiziksel durdurma/kill switch</b> şarttır.</li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-lg text-primary mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" /> Güvenlik & Uyum
                </h4>
                <ul className="text-sm opacity-90 space-y-2">
                  <li>Takım üyeleri için gözlük, önlük, eldiven gibi <b>PPE</b> zorunlu.</li>
                  <li>
                    Kullanılan tüm kimyasallar için <b>MSDS</b>, risk analizi ve atık bertaraf planı
                    teslim edilir.
                  </li>
                  <li>Basınçlı kaplar regülatörlü ve güvenlik valfli; açık alev yasak.</li>
                  <li>Yarış günü güvenlik denetimini geçemeyen araçlar piste çıkamaz.</li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-bold text-lg text-primary mb-2">Değerlendirme</h4>
                <p className="text-sm opacity-90">
                  Puanlama: <b>Hedef mesafe doğruluğu</b> (70%), <b>teknik tasarım sunumu</b> (20%),
                  <b> güvenlik ve sürdürülebilirlik</b> (10%).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competition;
