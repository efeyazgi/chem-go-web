import React from 'react';
import { Camera, Beaker, Car, Trophy, Shield } from 'lucide-react';

const Gallery = () => {
  // Yedek görsel
  const FALLBACK =
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800';

  // Üniversite örnek projeleri (Chem-E-Car takımlarından)
  const galleryImages = [
    {
      id: 1,
      // Auburn – 2023 şampiyonlar (AIChE ASC, Orlando)
      url: 'https://eng.auburn.edu/images/news/cheme1.jpg',
      title: 'Auburn University – 2023 Chem-E-Car Şampiyonu',
      category: 'university',
      icon: Trophy
    },
    {
      id: 2,
      // University of Toledo – 2022 şampiyonlar (AIChE ASC, Phoenix)
      url: 'https://news.utoledo.edu/wp-content/uploads/2022/11/UToledo-Chem-E-Car-Team-2nd-Championship-MAIN.jpg',
      title: 'University of Toledo – 2022 Chem-E-Car Şampiyonu',
      category: 'university',
      icon: Trophy
    },
    {
      id: 3,
      // KAIST – 2016 birincisi (AIChE Chem-E-Car)
      url: 'https://c2.staticflickr.com/6/5539/22789715108_dcfb296740_z.jpg',
      title: 'KAIST – 2016 Chem-E-Car Birincisi',
      category: 'university',
      icon: Beaker
    },
    {
      id: 4,
      // Purdue – takım galerisi (resmi ekip sitesi)
      url: 'https://engineering.purdue.edu/ChemECar/images/ZinkMink_Horizontal.png',
      title: 'Purdue University – Chem-E-Car Takımı',
      category: 'university',
      icon: Car
    },
    {
      id: 5,
      // Cornell – takım görseli (resmi ekip sitesi)
      url: 'https://news.cornell.edu/sites/chronicle.cornell/files/car1_0.jpg',
      title: 'Cornell University – Chem-E-Car Projesi',
      category: 'university',
      icon: Beaker
    },
    {
      id: 6,
      // 2022 AIChE finalinden pist sahnesi (takımların yarış ortamı) — albümden bir kare
      url: 'https://live.staticflickr.com/65535/52538368533_a113f4a16f_h.jpg',
      title: 'AIChE Chem-E-Car Finalleri – Yarış Pisti (2022)',
      category: 'university',
      icon: Shield
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary font-poppins mb-6">
            <span className="text-primary">Galeri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chem-E-Car’a katılan üniversitelerin gerçek proje ve takım kareleri
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="aspect-[4/3]">
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    if (el.src !== FALLBACK) el.src = FALLBACK;
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-2">
                    <image.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium opacity-90">Üniversite Projesi</span>
                  </div>
                  <h3 className="text-lg font-bold">{image.title}</h3>
                </div>
              </div>

              {/* Fotoğraf rozeti */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="h-5 w-5 text-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Vitrin (istenirse duruyor) */}
        <div
          className="bg-gradient-to-r from-gray-100 to-white rounded-3xl p-8 lg:p-12 animate-fadeInUp"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-secondary mb-4 font-poppins">
              Proje Vitrinimiz
            </h3>
            <p className="text-gray-600">Gerçek takımlardan ilham alın, kendi aracınızı planlayın.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Beaker className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Hidrojen / Asit-Baz Batarya</h4>
              <p className="text-gray-600 text-sm">Takımlarda sık görülen güç çözümleri.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">Şasi & Entegrasyon</h4>
              <p className="text-gray-600 text-sm">3B baskı, freze ve modüler tasarım.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-secondary mb-3">İyot Saati Durdurma</h4>
              <p className="text-gray-600 text-sm">Klasik kinetik durdurma mekanizması.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
