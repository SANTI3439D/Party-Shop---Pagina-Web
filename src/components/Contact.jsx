import React from 'react';
import { COMPANY_INFO } from '../data/companyInfo';

export const Contact = () => {
  const generalMessage = `Hola ${COMPANY_INFO.name}, quisiera más información sobre sus servicios.`;
  const generalWhatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(generalMessage)}`;

  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <h2 className="section-title text-center">Contacto</h2>
        <div className="contact-cards-grid">
          <div className="contact-card">
            <h3>WhatsApp</h3>
            <p>Atención rápida para pedidos y dudas.</p>
            <a href={generalWhatsappUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
              Escríbenos directamente →
            </a>
          </div>

          <div className="contact-card">
            <h3>Correo Electrónico</h3>
            <p>{COMPANY_INFO.email}</p>
            <a href={`mailto:${COMPANY_INFO.email}`} className="contact-link">
              Enviar correo →
            </a>
          </div>

          <div className="contact-card">
            <h3>Ubicación y Horarios</h3>
            <p>{COMPANY_INFO.address}</p>
            <small>{COMPANY_INFO.schedule}</small>
          </div>
        </div>
      </div>
    </section>
  );
};