import React from 'react';
import { COMPANY_INFO } from '../data/companyInfo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <h4>{COMPANY_INFO.name}</h4>
          <p>© {currentYear} Todos los derechos reservados.</p>
        </div>
        <div className="social-links">
          <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={COMPANY_INFO.socials.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </div>
    </footer>
  );
};