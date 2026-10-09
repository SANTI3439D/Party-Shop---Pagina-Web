import React, { useState } from 'react';
import logoEmpresa from '../assets/logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-content">
        {/* Solo el logo de la empresa */}
        <a href="#inicio" className="nav-logo" aria-label="Ir al inicio">
          <img 
            src={logoEmpresa} 
            alt="Logo" 
            className="nav-logo-img" 
          />
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