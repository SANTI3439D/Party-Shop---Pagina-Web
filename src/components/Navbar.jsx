import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyInfo.js';
import logoEmpresa from '../assets/logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-content">
        <a href="#inicio" className="nav-logo" aria-label="Ir al inicio">
          <img 
            src={logoEmpresa} 
            alt="Logo" 
            className="nav-logo-img" 
          />
          {/* Nombre de la empresa con estilo Sharpie */}
          <span className="nav-logo-text">{COMPANY_INFO.name}</span>
        </a>

        <button 
          className="nav-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#nosotros" onClick={() => setIsOpen(false)}>Nosotros</a>
          <a href="#catalogo" onClick={() => setIsOpen(false)}>Catálogo</a>
          <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
        </nav>
      </div>
    </header>
  );
};