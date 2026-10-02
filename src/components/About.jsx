import React from 'react';
import { COMPANY_INFO } from '../data/companyInfo';

export const About = () => {
  return (
    <section id="nosotros" className="about-section">
      <div className="container about-grid">
        <div className="about-text">
          <h2 className="section-title">Sobre Nosotros</h2>
          <p className="about-description">
            En <strong>{COMPANY_INFO.name}</strong>, {COMPANY_INFO.description}
          </p>
          <div className="about-features">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Atención Inmediata</h4>
                <p>Respondemos tus dudas en tiempo real por WhatsApp.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Calidad Garantizada</h4>
                <p>Cuidamos cada detalle de los productos que entregamos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};