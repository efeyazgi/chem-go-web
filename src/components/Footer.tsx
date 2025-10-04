import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from 'lucide-react';
import Modal from './Modal';

const Footer = () => {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/chem_go/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/chemgoo', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const quickLinks = [
    { name: 'Hakkında', href: '#about' },
    { name: 'Yarışma', href: '#competition' },
    { name: 'Zaman Çizelgesi', href: '#timeline' },
    { name: 'SSS', href: '#faq' },
    { name: 'Sponsorluk', href: '#sponsorship' },
    { name: 'İletişim', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src="/images/logo.svg" alt="Chem GO! Logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-3xl font-black font-poppins">Chem GO!</h3>
                <p className="text-sm text-gray-300">Enerjimizi Kimyadan Alıyoruz.</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Eskişehir Osmangazi Üniversitesi Kimya Mühendisliği öğrencileri tarafından 
              düzenlenen bu benzersiz yarışma, teorik bilgilerin pratiğe dökülmesini sağlar.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white/10 hover:bg-primary p-3 rounded-full transition-colors duration-200"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-poppins mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-poppins mb-6">İletişim</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>chemgotech@hotmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm">+90 552 450 5960</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm">
                  ESOGÜ Kimya Mühendisliği<br />
                  Meşelik Kampüsü, Eskişehir
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>&copy; {currentYear} Chem GO! Tüm hakları saklıdır.</p>
              <p className="mt-1">
                Eskişehir Osmangazi Üniversitesi Kimya Mühendisliği Bölümü tarafından düzenlenmektedir.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button onClick={() => setModalContent('privacy')} className="text-gray-400 hover:text-primary transition-colors duration-200">
                Gizlilik Politikası
              </button>
              <button onClick={() => setModalContent('terms')} className="text-gray-400 hover:text-primary transition-colors duration-200">
                Kullanım Koşulları
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={modalContent !== null} onClose={() => setModalContent(null)} title={modalContent === 'privacy' ? 'Gizlilik Politikası' : 'Kullanım Koşulları'}>
        {modalContent === 'privacy' ? <PrivacyPolicyContent /> : <TermsOfUseContent />}
      </Modal>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary-dark text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        aria-label="Yukarı çık"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

const PrivacyPolicyContent = () => (
  <div className="space-y-4 text-sm text-gray-700">
    <p><strong>Son Güncelleme: 30 Ağustos 2025</strong></p>
    <p>Chem GO! olarak, gizliliğinize saygı duyuyor ve veri güvenliğinize önem veriyoruz. Bu gizlilik politikası, web sitemiz aracılığıyla hangi kişisel verileri topladığımızı, bu verileri nasıl kullandığımızı ve haklarınızı açıklamaktadır.</p>
    
    <h4 className="font-bold text-md text-secondary pt-2">Topladığımız Bilgiler</h4>
    <p>Başvuru ve iletişim formları aracılığıyla adınız, e-posta adresiniz, üniversite/kurum bilginiz gibi kişisel bilgileri topluyoruz.</p>

    <h4 className="font-bold text-md text-secondary pt-2">Bilgilerin Kullanımı</h4>
    <p>Topladığımız bilgiler, yarışma başvurularını yönetmek, sizinle iletişime geçmek ve yarışma hakkında bilgi vermek amacıyla kullanılır. Bilgileriniz üçüncü partilerle paylaşılmaz.</p>

    <h4 className="font-bold text-md text-secondary pt-2">Çerezler</h4>
    <p>Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanabilir. Çerezleri tarayıcı ayarlarınızdan yönetebilirsiniz.</p>

    <h4 className="font-bold text-md text-secondary pt-2">Haklarınız</h4>
    <p>Kişisel verileriniz üzerinde erişim, düzeltme ve silme hakkına sahipsiniz. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.</p>
  </div>
);

const TermsOfUseContent = () => (
  <div className="space-y-4 text-sm text-gray-700">
    <p><strong>Son Güncelleme: 30 Ağustos 2025</strong></p>
    <p>Chem GO! web sitesini kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız.</p>
    
    <h4 className="font-bold text-md text-secondary pt-2">Kullanım Amacı</h4>
    <p>Bu web sitesi, Chem GO! yarışması hakkında bilgi vermek, duyuruları yayınlamak ve başvuruları toplamak amacıyla oluşturulmuştur. Sitenin yasa dışı veya yetkisiz amaçlarla kullanılması yasaktır.</p>

    <h4 className="font-bold text-md text-secondary pt-2">İçerik</h4>
    <p>Sitede yer alan tüm metin, görsel ve diğer materyallerin telif hakkı Chem GO! organizasyonuna aittir. İzinsiz kullanılamaz.</p>

    <h4 className="font-bold text-md text-secondary pt-2">Sorumluluk Reddi</h4>
    <p>Sitede yer alan bilgilerin doğruluğu için çaba gösterilmekle birlikte, eksik veya hatalı bilgilerden kaynaklanabilecek sorunlardan organizasyonumuz sorumlu tutulamaz.</p>
  </div>
);

export default Footer;
