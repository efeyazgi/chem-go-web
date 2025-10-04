import React from 'react';
import { Target, Zap, Award, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Misyonumuz',
      description: 'Kimya mühendisliği öğrencilerinin teorik bilgilerini pratiğe dökmeleri için platform sağlamak'
    },
    {
      icon: Zap,
      title: 'İnovasyon',
      description: 'Yaratıcı çözümler geliştiren, rekabet ruhu yüksek mühendislik öğrencilerine bir etkinlik alanı yaratmak'
    },
    {
      icon: Award,
      title: 'Rekabet',
      description: 'Türkiye\'nin ilk kimyasal enerjiyle hareket eden araba yarışması ile sektöre yeni bir soluk getirmek'
    },
    {
      icon: BookOpen,
      title: 'Eğitim',
      description: 'Öğrencilerin akademik bilgilerini gerçek projelerde kullanmalarını sağlamak'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary font-poppins mb-6">
            Chem GO! <span className="text-primary">Hakkında</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Eskişehir Osmangazi Üniversitesi Kimya Mühendisliği Bölümü öğrencileri tarafından düzenlenen 
            Chem GO!, Türkiye'nin ilk kimyasal enerjiyle hareket eden araba yarışmasıdır. Bu etkinlik, öğrencilerin teorik 
            bilgilerini pratiğe dökebilecekleri, yaratıcılıklarını sergileyebilecekleri ve rekabet 
            ruhuyla birlikte öğrenebilecekleri benzersiz bir platform sunuyor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4 font-poppins">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-2">20+</div>
              <div className="text-secondary font-semibold text-sm sm:text-base">Beklenen Katılımcı</div>
            </div>
            <div className="animate-fadeInUp" style={{ animationDelay: '1s' }}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-2">5+</div>
              <div className="text-secondary font-semibold text-sm sm:text-base">Üniversite</div>
            </div>
            <div className="animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-2">Para ödülleri</div>
              <div className="text-secondary font-semibold text-sm sm:text-base">ve daha fazlası</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;