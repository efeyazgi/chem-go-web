import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Competition from './components/Competition';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import Sponsorship from './components/Sponsorship';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <main>
        <Hero />
        <About />
        <Competition />
        <Timeline />
        <FAQ />
        <Sponsorship />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;