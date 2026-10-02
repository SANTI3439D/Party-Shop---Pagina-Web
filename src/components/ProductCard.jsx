import React from 'react';
import { COMPANY_INFO } from '../data/companyInfo';

export const ProductCard = ({ product }) => {
  // Formato de moneda amigable
  const formattedPrice = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(product.price);

  // Mensaje que recibirá el negocio
  const message = `Hola ${COMPANY_INFO.name}, estoy interesado(a) en el producto "${product.name}" (${formattedPrice}). ¿Tienen disponibilidad?`;
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image" 
          loading="lazy" 
        />
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{formattedPrice}</span>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp"
          >
            Comprar por WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
};