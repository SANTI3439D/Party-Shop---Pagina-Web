import React from 'react';
import { COMPANY_INFO } from '../data/companyInfo.js';

export const Hero = () => {
  const generalMsg = `Hola ${COMPANY_INFO.name}, quiero cotizar una decoración para un evento.`;
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(generalMsg)}`;

  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-content">
        <div className="hero-badge">
          ✨ Decoraciones y Fiestas Exclusivas
        </div>
        <h1 className="hero-title">{COMPANY_INFO.tagline || COMPANY_INFO.name}</h1>
        <p className="hero-subtitle">
          Creamos experiencias inolvidables para tus celebraciones. Cuéntanos tu idea por WhatsApp y la diseñamos a tu medida.
        </p>
        <div className="hero-actions">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Cotizar por WhatsApp
          </a>
          <a href="#galeria" className="btn btn-secondary">
            Ver Diseños
          </a>
        </div>
      </div>
    </section>
  );
};