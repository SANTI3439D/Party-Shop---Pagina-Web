import React from 'react';
import './App.css'; 
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Catalog } from './components/Catalog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <Contact />
        <About />
      </main>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

export default App;