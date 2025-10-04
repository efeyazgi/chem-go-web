import React from 'react';
import { Crown, Award, Medal, Star, CheckCircle } from 'lucide-react';

const Sponsorship = () => {
  const packages = [
    {
      name: 'Altın Sponsor',
      icon: Crown,
      price: '10.000₺',
      color: 'from-yellow-400 to-yellow-600',
      textColor: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      features: [
        'Ana sponsor olarak logo gösterimi',
        'Açılış konuşmasında teşekkür',
        'Sosyal medyada özel paylaşım',
        'Ödül töreninde özel yer',
        'Yarışma alanında stand hakkı',
        'Basın açıklamalarında yer alma',
        'Gelecek yıl öncelikli sponsorluk'
      ]
    },
    {
      name: 'Gümüş Sponsor',
      icon: Award,
      price: '7.500₺',
      color: 'from-gray-400 to-gray-600',
      textColor: 'text-gray-600',
      bgColor: 'bg-gray-50',
      features: [
        'Logo gösterimi (orta boy)',
        'Sosyal medyada paylaşım',
        'Ödül töreninde teşekkür',
        'Yarışma alanında pankart',
        'Basın bülteninde yer alma',
        'Katalogda özel sayfa'
      ]
    },
    {
      name: 'Bronz Sponsor',
      icon: Medal,
      price: '5.000₺',
      color: 'from-orange-400 to-orange-600',
      textColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      features: [
        'Logo gösterimi (küçük boy)',
        'Sosyal medyada teşekkür',
        'Katalogda yer alma',
        'Basın bülteninde isim',
        'Etkinlik fotoğraflarında logo'
      ]
    }
  ];

  const sponsorshipBenefits = [
    'Genç mühendislerle direct erişim',
    'Kurumsal sosyal sorumluluk',
    'Marka bilinirliği artışı',
    'Akademik işbirliği fırsatları',
    'Medyada pozitif görünürlük',
    'Yetenek havuzuna erişim'
  ];

  return (
    <section id="sponsorship" className="py-20 bg-gradient-to-br from-gray-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary font-poppins mb-6">
            Sponsorluk <span className="text-primary">Paketleri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Türkiye'nin ilk kimya enerjisiyle hareket eden araba yarışmasının parçası olun ve genç mühendislere destek verin
          </p>
        </div>

        {/* Sponsorship Benefits */}
        <div className="mb-16 bg-white rounded-3xl p-8 shadow-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-2xl font-bold text-secondary text-center mb-8 font-poppins">
            Neden Sponsor Olmalısınız?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorshipBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Star className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Packages */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${pkg.color} p-8 text-white text-center`}>
                <pkg.icon className="h-16 w-16 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold font-poppins mb-2">{pkg.name}</h3>
                <div className="text-3xl font-black">{pkg.price}</div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className={`h-5 w-5 ${pkg.textColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full mt-8 bg-gradient-to-r ${pkg.color} text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  İletişime Geç
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Sponsorship */}
        <div className="bg-gradient-to-r from-secondary to-secondary-light text-white rounded-3xl p-8 lg:p-12 text-center animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <h3 className="text-3xl font-bold mb-4 font-poppins">
            Özel Sponsorluk Paketi
          </h3>
          <p className="text-xl mb-8 opacity-90">
            İhtiyaçlarınıza özel sponsorluk paketi oluşturalım
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-bold text-primary mb-2">Esnek Bütçe</h4>
              <p className="text-sm opacity-80">İmkanlarınıza uygun paket</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-bold text-primary mb-2">Özel Görünürlük</h4>
              <p className="text-sm opacity-80">İhtiyacınıza göre düzenleme</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-bold text-primary mb-2">Uzun Vadeli</h4>
              <p className="text-sm opacity-80">Gelecek yıllarda da birliktelik</p>
            </div>
          </div>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Özel Teklif İsteyin
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sponsorship;