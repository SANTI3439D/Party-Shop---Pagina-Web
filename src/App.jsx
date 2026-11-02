import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { GalleryShowcase } from './components/GalleryShowcase';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <GalleryShowcase />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

export default App;