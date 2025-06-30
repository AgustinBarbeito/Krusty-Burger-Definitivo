import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default function KrustyFooter() {
  return (
    <footer className="krusty-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Krusty Burger</h3>
          <p>"No es solo una hamburguesa, es una Krusty Burger"</p>
        </div>
        
        <div className="footer-links">
          <h4>Menú</h4>
          <ul>
            <li><Link to="/menu#hamburguesas">Hamburguesas</Link></li>
            <li><Link to="/menu#acompañamientos">Acompañamientos</Link></li>
            <li><Link to="/menu#bebidas-sin-alcohol">Bebidas</Link></li>
            <li><Link to="/menu#postres">Postres</Link></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Horarios</h4>
          <ul>
            <li>Lunes a Viernes: 10:00 - 22:00</li>
            <li>Sábados y Domingos: 11:00 - 23:00</li>
            <li>Feriados: 12:00 - 21:00</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>Teléfono: 555-KRUSTY</p>
          <p>Email: info@krustyburger.com</p>
          <div className="footer-socials">
            <SocialIcon href="/#"><img src="https://icongr.am/devicon/facebook-original.svg?size=24&color=ffffff" alt="Facebook" /></SocialIcon>
            <SocialIcon href="/#"><img src="https://icongr.am/devicon/instagram-original.svg?size=24&color=ffffff" alt="Instagram" /></SocialIcon>
            <SocialIcon href="/#"><img src="https://icongr.am/devicon/twitter-original.svg?size=24&color=ffffff" alt="Twitter" /></SocialIcon>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Krusty Burger. Todos los derechos reservados.</p>
        <p>"Los ingredientes pueden contener pedazos de payaso" - Advertencia legal</p>
      </div>
    </footer>
  );
} 