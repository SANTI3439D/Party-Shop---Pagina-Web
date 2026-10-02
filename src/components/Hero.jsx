import React from 'react';
import { COMPANY_INFO } from '../data/companyInfo';

export const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-content">
        <span className="hero-badge">Atención Directa y Personalizada</span>
        <h1 className="hero-title">{COMPANY_INFO.tagline}</h1>
        <p className="hero-subtitle">
          Explora nuestro catálogo y realiza tu pedido al instante directamente por WhatsApp sin intermediarios ni trámites complicados.
        </p>
        <div className="hero-actions">
          <a href="#catalogo" className="btn btn-primary">Ver Catálogo</a>
          <a href="#nosotros" className="btn btn-secondary">Saber más</a>
        </div>
      </div>
    </section>
  );
};