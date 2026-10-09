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
                <h4>Mision</h4>
                <p>Party Shop tiene como misión ofrecer productos y detalles 
                  creativos para celebrar y acompañar momentos especiales, brindando 
                  a sus clientes una experiencia de compra virtual cercana, personalizada 
                  y confiable. A través de regalos, anchetas, decoración, piñatas y diferentes 
                  alternativas para celebraciones, busca convertir cada ocasión en un momento 
                  memorable, atendiendo las necesidades de sus clientes de manera oportuna y con 
                  propuestas adaptadas a cada  celebración.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Vision</h4>
                <p>Para el año 2030, Party Shop será reconocida en Lenguazaque, Ubaté y municipios cercanos 
                como una tienda virtual referente en regalos, detalles y soluciones para celebraciones, destacándose por la creatividad 
                de sus productos, la calidad de sus servicios, y la confianza de sus clientes, fortaleciendo progresivamente su presencia 
                digital y ampliando su oferta de productos y servicios .</p>
                </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h4>Objetivo Principal</h4>
                <p>Fortalecer el posicionamento de Party Shop como negocio virtual 
                  dedicado a la comercialización de regalos, detalles decoración y productos 
                  para celebraciones, mediante una comunicación digital efectiva, una forma atractiva y un servicio 
                  al cliente cercano y confiable.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};