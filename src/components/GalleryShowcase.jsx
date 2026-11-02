import React from 'react';
import { GALLERY_PHOTOS } from '../data/gallery.js';
import { COMPANY_INFO } from '../data/companyInfo.js';

export const GalleryShowcase = () => {
  const getWhatsAppLink = (num) => {
    const text = `¡Hola ${COMPANY_INFO.name}! Vi el diseño #${num} en su página web y me gustaría cotizar algo parecido.`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="galeria" className="gallery-section">
      <div className="container">
        
        {/* Encabezado estilo Perfil de Instagram */}
        <div className="ig-profile-header">
          <div className="ig-profile-badge">
            <span className="ig-icon">📸</span>
            <div>
              <h3>Nuestro Feed en Instagram</h3>
              <p>Inspiración real de nuestros montajes y eventos recientes</p>
            </div>
          </div>
          <a 
            href={COMPANY_INFO.socials.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-instagram"
          >
            Seguir en Instagram
          </a>
        </div>

        {/* Muro Estético de 7 Fotos */}
        <div className="aesthetic-gallery-grid">
          {GALLERY_PHOTOS.map((photo, index) => (
            <article key={photo.id || index} className="gallery-card">
              <div className="gallery-card-media">
                <img src={photo.img} alt={`Diseño ${index + 1}`} loading="lazy" />
                <span className="photo-number">#{index + 1}</span>
              </div>
              <div className="gallery-card-action">
                <a 
                  href={getWhatsAppLink(index + 1)} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp gallery-btn"
                >
                  Cotizar este estilo 💬
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};