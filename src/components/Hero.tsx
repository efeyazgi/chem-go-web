import React from 'react';
import { ArrowRight, Users, Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-secondary via-secondary-light to-primary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-primary rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-slideInLeft">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black font-poppins leading-tight">
              <span className="text-primary">Chem</span> GO!
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed">
              Türkiye'nin <span className="text-primary font-semibold">ilk kimyasal enerjiyle hareket eden araba yarışması!</span> 
              <br />Eskişehir Osmangazi Üniversitesi'nde kimya mühendisliği öğrencileri tarafından düzenleniyor.
            </p>
            
            {/* Key Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-semibold">2026 Bahar</p>
                <p className="text-sm opacity-90">Yarışma Tarihi</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <MapPin className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-semibold">ESOGÜ</p>
                <p className="text-sm opacity-90">Eskişehir</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-semibold">Ücretsiz</p>
                <p className="text-sm opacity-90">Katılım</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl min-h-[48px]"
              >
                Hemen Başvur
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button
                onClick={() => scrollToSection('sponsorship')}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 min-h-[48px]"
              >
                Sponsor Ol
              </button>
            </div>
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="relative animate-slideInRight">
            <div className="bg-gradient-to-br from-primary/20 to-white/20 rounded-3xl p-8 backdrop-blur-sm border border-white/20">
              <div className="aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden">
                <img src="/images/chemgo.png" alt="Chem GO Yarış Arabası" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-full shadow-lg animate-bounce-slow">
              ⚗️
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
