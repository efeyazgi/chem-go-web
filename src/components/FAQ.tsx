import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: 'Bu yarışma nedir?',
      answer: 'Bu yarışma, kimyasal reaksiyonlar kullanılarak hareket eden arabaların tasarlandığı ve yarıştırıldığı bir mühendislik yarışmasıdır. Katılımcılar teorik kimya bilgilerini pratikte uygulama fırsatı bulur.'
    },
    {
      question: 'Yarışmaya kimler katılabilir?',
      answer: 'Kimya mühendisliği lisans ve lisansüstü öğrencileri katılabilir. Her takım 3-5 kişi arasında olmalıdır. Farklı üniversitelerden öğrenciler aynı takımda yer alabilir.'
    },
    {
      question: 'Katılım ücreti var mı?',
      answer: 'Hayır, yarışmaya katılım tamamen ücretsizdir. Tüm masraflar sponsorlarımız ve üniversite desteği ile karşılanmaktadır.'
    },
    {
      question: 'Hangi malzemeleri kullanabiliriz?',
      answer: 'Güvenlik kuralları dahilinde tüm kimyasal reaktifler ve malzemeler kullanılabilir. Ancak güvenlik protokolleri katı bir şekilde uygulanacak ve tehlikeli maddeler kısıtlanacaktır.'
    },
    {
      question: 'Ödüller nelerdir?',
      answer: 'Para ödülü ve kupa, madalya ödüllerimiz bulunmaktadır. Birinci gruba para ödülü ve kupa, ikinci ve üçüncü gruba madalya ve katılan herkese katılım belgesi verilecektir.'
    },
    {
      question: 'Başvuru nasıl yapılır?',
      answer: 'Başvurular aşağıda bulunan formdan alınacaktır. Katılacak takımların öğrenciliklerini kanıtlayan bir belge, proje özeti yeterli olacaktır.'
    },
    {
      question: 'Yarışma kuralları nelerdir?',
      answer: 'Araçlarda hareketi sağlamak için motor kullanılabilir; ancak motorun çalışması için gerekli enerji yalnızca kimyasal reaksiyonlardan elde edilmelidir. Harici pil, elektrik kaynağı veya önceden depolanmış enerji kullanımı yasaktır.'
    },
    {
      question: 'Konaklama desteği var mı?',
      answer: 'Şehir dışından gelen takımlar için sınırlı konaklama desteği sağlanacaktır. Başvuru sırasında konaklama ihtiyacı belirtilmelidir.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary font-poppins mb-6">
            Sıkça Sorulan <span className="text-primary">Sorular</span>
          </h2>
          <p className="text-xl text-gray-600">
            Merak ettiğiniz tüm sorulara yanıt bulun
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-light rounded-2xl border border-gray-200 transition-all duration-300 hover:border-primary/30 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center space-x-4">
                  <HelpCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-secondary font-poppins">
                    {faq.question}
                  </h3>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-primary flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pl-10">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help Section */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-secondary mb-4 font-poppins">
            Sorunuz yanıtlanmadı mı?
          </h3>
          <p className="text-gray-600 mb-6">
            Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors duration-200 min-h-[48px] text-base sm:text-lg"
          >
            İletişime Geç
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;