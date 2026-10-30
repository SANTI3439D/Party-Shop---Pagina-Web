import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/gallery.js';
import { COMPANY_INFO } from '../data/companyInfo.js';

export const InteractiveShowcase = () => {
  const [active, setActive] = useState(0);
  const total = GALLERY_PHOTOS.length;

  const prev = () => setActive((prev) => (prev === 0 ? total - 1 : prev - 1));
  const next = () => setActive((prev) => (prev === total - 1 ? 0 : prev + 1));

  // Enlace dinámico con el número de la foto seleccionada
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
    `¡Hola ${COMPANY_INFO.name}! Vi la foto #${active + 1} en su página web y me encantó esa idea. ¿Me pueden dar informes para una fiesta?`
  )}`;

  return (
    <section id="galeria" className="interactive-showcase-section">
      <div className="container">
        <div className="showcase-header">
          <span className="hero-badge">Directo de Instagram ✨</span>
          <h2 className="section-title">Nuestras Creaciones</h2>
          <p className="section-subtitle">
            Toca o desliza las fotos para explorar. Si ves algo que te encante, pídelo directo a WhatsApp.
          </p>
        </div>

        {/* Escenario 3D interactivo */}
        <div className="stage-wrapper">
          <button className="stage-nav-btn prev-btn" onClick={prev} aria-label="Foto anterior">
            ‹
          </button>

          <div className="stage-viewport">
            {GALLERY_PHOTOS.map((photo, index) => {
              // Calcular posición relativa al elemento activo
              let posClass = 'stage-hidden';
              if (index === active) {
                posClass = 'stage-active';
              } else if (index === (active - 1 + total) % total) {
                posClass = 'stage-prev';
              } else if (index === (active + 1) % total) {
                posClass = 'stage-next';
              }

              return (
                <div
                  key={photo.id}
                  className={`stage-card ${posClass}`}
                  onClick={() => setActive(index)}
                >
                  <img src={photo.img} alt={`Idea ${index + 1}`} loading="lazy" />
                  <span className="card-pill">Idea #{index + 1}</span>

                  {index === active && (
                    <div className="active-card-cta">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-whatsapp"
                        onClick={(e) => e.stopPropagation()}
                      >
                        ¡Quiero algo como esto! 💬
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button className="stage-nav-btn next-btn" onClick={next} aria-label="Siguiente foto">
            ›
          </button>
        </div>

        {/* Barra interactiva de miniaturas (Toca cualquiera para ir a esa foto) */}
        <div className="stage-dots-bar">
          {GALLERY_PHOTOS.map((photo, i) => (
            <button
              key={photo.id}
              className={`stage-thumb-dot ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Ver foto ${i + 1}`}
            >
              <img src={photo.img} alt={`Miniatura ${i + 1}`} />
            </button>
          ))}
        </div>

        {/* Invitación a Instagram */}
        <div className="showcase-ig-invite">
          <span>📸 ¿Quieres ver videos, reels y montajes reales del día a día?</span>
          <a
            href={COMPANY_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-instagram"
          >
            Ver más en Instagram
          </a>
        </div>
      </div>
    </section>
  );
};