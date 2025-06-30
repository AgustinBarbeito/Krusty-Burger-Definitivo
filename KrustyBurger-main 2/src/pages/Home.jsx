import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="hero-text-content">
          <h1 className="hero-main-title">KRUSTY BURGER</h1>
          <p className="hero-tagline">Las mejores hamburguesas de Springfield, ahora en tu ciudad.</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">VER MENÚ</Link>
            <Link to="/nosotros" className="btn btn-secondary">CONÓCENOS</Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <img src="/krusty-burger-logo.png" alt="Krusty Burger Logo" className="hero-main-image"/>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="home-specialties-section">
        <h2 className="section-title-box">NUESTRAS ESPECIALIDADES</h2>
        <div className="specialties-cards-container">
          <div className="specialty-card-large">
            <img src="/krusty-menu-board.png" alt="Descubre nuestro menú" className="specialty-image-large"/>
            <div className="specialty-content-large">
              <h3>DESCUBRE NUESTRO MENÚ COMPLETO</h3>
              <p>Disfruta de nuestras Krusty Burgers, Papas Krusty, Nuggets Tomy y Daly y Buzz Cola. Como dice Krusty: "Si no te da un ataque al corazón, ¡te devolvemos tu dinero!" (Oferta no válida en Springfield ni alrededores).</p>
              <Link to="/menu" className="btn-text-link">VER MENÚ COMPLETO →</Link>
            </div>
          </div>
          <div className="specialty-card-small">
            <div className="new-tag">NUEVO</div>
            <img src="/costiburger.png" alt="Costiburger" className="specialty-image-small"/>
            <h3>COSTIBURGER</h3>
            <p>Nuestra promoción estrella inspirada en la McRib. Deliciosas costillitas de cerdo, salsa BBQ, cebolla y pepinillos. ¡Una experiencia gastronómica que Homero Simpson aprobaría!</p>
            <div className="price-section">
              <p className="special-price-label">PRECIO ESPECIAL</p>
              <p className="special-price-value">$8500</p>
            </div>
            <Link to="/pedido" className="btn btn-accent">ORDENAR AHORA</Link>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="home-history-section">
        <h2 className="section-title-large">NUESTRA HISTORIA</h2>
        <p className="history-subtitle">Desde 1989, Krusty Burger ha sido parte de la vida de Springfield. Descubre nuestra historia, nuestros éxitos y algunos fracasos memorables como la legendaria "Burger²".</p>
        <Link to="/nosotros" className="btn btn-accent">CONOCE MÁS</Link>
        <div className="history-gallery">
          <img src="/krusty-fila.png" alt="Clientes en Krusty Burger" />
          <img src="/krusty-exterior.png" alt="Exterior de Krusty Burger" />
          <img src="/krusty-familia.png" alt="La familia Simpson en Krusty Burger" />
        </div>
      </section>
    </div>
  );
};

export default Home; 