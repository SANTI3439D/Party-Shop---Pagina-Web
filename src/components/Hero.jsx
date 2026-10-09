import React from 'react';
import { COMPANY_INFO } from '../data/companyInfo.js';

export const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="glow-ambient hero-glow-1"></div>
      <div className="container hero-content">
        <div className="hero-badge">
          Catálogo Oficial
        </div>
        <h1 className="hero-title">{COMPANY_INFO.tagline || COMPANY_INFO.name}</h1>
        <p className="hero-subtitle">
          {COMPANY_INFO.description}
        </p>
        <div className="hero-actions">
          <a href="#catalogo" className="btn btn-primary">Explorar Catálogo</a>
          <a href="#nosotros" className="btn btn-secondary">Conócenos</a>
        </div>
      </div>
    </section>
  );
};