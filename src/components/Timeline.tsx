import React from 'react';
import { CheckCircle, Circle, Calendar, Users, Trophy, Flag } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      icon: Calendar,
      title: 'Başvuruların Açılması',
      date: 'Aralık 2025',
      description: 'Formlar kabul edilmeye başlanacak',
      status: 'upcoming',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Takım Kayıtları',
      date: 'Ocak 2026',
      description: 'Takımlar kayıt olacak ve proje özetlerini sunacak',
      status: 'upcoming',
      color: 'bg-green-500'
    },
    {
      icon: CheckCircle,
      title: 'Ön Değerlendirme',
      date: 'Şubat 2026',
      description: 'Proje özetleri değerlendirilecek ve finalist takımlar belirlenecek',
      status: 'upcoming',
      color: 'bg-yellow-500'
    },
    {
      icon: Trophy,
      title: 'Yarışma Günü',
      date: 'Mart 2026',
      description: 'Final yarışması ESOGÜ kampüsünde gerçekleştirilecek',
      status: 'upcoming',
      color: 'bg-primary'
    },
    {
      icon: Flag,
      title: 'Ödül Töreni',
      date: 'Mart 2026',
      description: 'Kazanan takımlar final günü ödüllerini alacak',
      status: 'upcoming',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-gray-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary font-poppins mb-6">
            Zaman <span className="text-primary">Çizelgesi</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yarışma sürecinin adım adım takip edilebileceği detaylı zaman çizelgesi
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-primary-dark h-full rounded-full"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}>
                    <event.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        event.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {event.date}
                      </span>
                      {event.status === 'completed' && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                      {event.status === 'upcoming' && (
                        <Circle className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-3 font-poppins">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fadeInUp" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-r from-primary to-primary-dark text-white rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4 font-poppins">Hazır mısınız?</h3>
            <p className="mb-6">Türkiye'nin ilk kimya arabası yarışmasında yerinizi alın!</p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Hemen Başvur
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;