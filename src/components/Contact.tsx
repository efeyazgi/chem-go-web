import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Users } from 'lucide-react';
import universityData from '../data/universities.json';

const sortedUniversities = [...universityData].sort((a, b) => 
  (a.name || '').localeCompare(b.name || '', 'tr')
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    message: '',
    type: 'participant'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xqalwgbn", {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          university: '',
          message: '',
          type: 'participant'
        });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert('Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      alert('Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary font-poppins mb-6">
            <span className="text-primary">İletişim</span> & Başvuru
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sorularınız için bizimle iletişime geçin veya yarışmaya hemen başvurun
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-6 font-poppins">
                İletişim Bilgileri
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-secondary">E-posta</h4>
                    <p className="text-gray-600">chemgotech@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-secondary">Telefon</h4>
                    <p className="text-gray-600">+90 552 450 5960</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-secondary">Adres</h4>
                    <p className="text-gray-600">
                      Eskişehir Osmangazi Üniversitesi<br />
                      Kimya Mühendisliği Bölümü<br />
                      Meşelik Kampüsü, Eskişehir
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-secondary">Çalışma Saatleri</h4>
                    <p className="text-gray-600">Pazartesi - Cuma: 09:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4 font-poppins">Hızlı Bilgiler</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5" />
                  <span>3-5 kişilik takımlar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5" />
                  <span>Başvuru: Ocak 2026</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5" />
                  <span>ESOGÜ Kampüsü</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg animate-slideInRight">
            <h3 className="text-2xl font-bold text-secondary mb-6 font-poppins">
              Başvuru Formu
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="type" className="block text-sm font-semibold text-secondary mb-2">
                  Başvuru Türü
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 min-h-[48px] text-base"
                >
                  <option value="participant">Yarışmacı Başvurusu</option>
                  <option value="sponsor">Sponsor Olmak İstiyorum</option>
                  <option value="question">Genel Soru</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-secondary mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 min-h-[48px] text-base"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 min-h-[48px] text-base"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="university" className="block text-sm font-semibold text-secondary mb-2">
                  {formData.type === 'participant' ? 'Üniversite' : 'Üniversite / Kurum'}
                </label>
                {formData.type === 'participant' ? (
                  <select
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 min-h-[48px] text-base"
                  >
                    <option value="" disabled>Üniversite seçin...</option>
                    {sortedUniversities.map((uni, index) => (
                      <option key={index} value={uni.name}>{uni.name}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 min-h-[48px] text-base"
                    placeholder="Üniversiteniz veya kurumunuz"
                  />
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">
                  Mesaj *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 resize-none text-base"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 min-h-[48px] ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-primary hover:bg-primary-dark text-white'
                }`}
              >
                {isSubmitted ? (
                  'Mesajınız Gönderildi!'
                ) : (
                  <>
                    Gönder
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-16 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-secondary text-center mb-8 font-poppins">
            Konum
          </h3>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12270.344377294872!2d30.471667964240318!3d39.74894744487288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc16503d2bcd7b%3A0xb088b88c934bc2e6!2sEsog%C3%BC%20Stadyumu!5e0!3m2!1str!2str!4v1754853412445!5m2!1str!2str"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
