import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyInfo.js';
import logoEmpresa from '../assets/logo.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Leemos si el usuario ya tenía guardado el modo oscuro
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Cada vez que cambie, actualizamos el atributo HTML y guardamos en memoria
  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <header className="navbar">
      <div className="container nav-content">
        <a href="#inicio" className="nav-logo" aria-label="Ir al inicio">
          <img 
            src={logoEmpresa} 
            alt="Logo" 
            className="nav-logo-img" 
          />
          <span className="nav-logo-text">{COMPANY_INFO.name}</span>
        </a>

        {/* Zona derecha: Enlaces + Switch de Tema */}
        <div className="nav-actions">
          <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
            <a href="#inicio" onClick={() => setIsOpen(false)}>Inicio</a>
            <a href="#catalogo" onClick={() => setIsOpen(false)}>Catálogo</a>
            <a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a>
            <a href="#nosotros" onClick={() => setIsOpen(false)}>Nosotros</a>
          </nav>

          {/* Slider Modo Claro / Modo Oscuro */}
          <label className="theme-switch" title="Cambiar tema">
            <input 
              type="checkbox" 
              checked={isDark} 
              onChange={() => setIsDark(!isDark)} 
            />
            <span className="slider">
              <span className="slider-icon sun">☀️</span>
              <span className="slider-icon moon">🌙</span>
              <span className="slider-thumb"></span>
            </span>
          </label>

          {/* Botón menú móvil */}
          <button 
            className="nav-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};