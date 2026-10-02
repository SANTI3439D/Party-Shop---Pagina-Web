import React from 'react';
import { COMPANY_INFO } from '../data/companyInfo';

export const WhatsAppFloating = () => {
  const message = `Hola ${COMPANY_INFO.name}, estoy visitando su página web y me gustaría recibir asesoría.`;
  const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      💬
    </a>
  );
};