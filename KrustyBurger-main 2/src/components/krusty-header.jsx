"use client"

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function KrustyHeader() {
  const getLinkClass = ({ isActive }) =>
    `header-nav-link ${isActive ? 'active' : ''}`;

  return (
    <header className="krusty-header">
      <div className="header-container">
        <Link to="/">
          <img src="/krusty-logo.png" alt="Krusty Burger Logo" className="header-logo" />
        </Link>
        <nav className="header-nav">
          <NavLink to="/" className={getLinkClass} end>INICIO</NavLink>
          <NavLink to="/menu" className={getLinkClass}>MENÚ</NavLink>
          <NavLink to="/ubicaciones" className={getLinkClass}>UBICACIONES</NavLink>
          <NavLink to="/nosotros" className={getLinkClass}>NOSOTROS</NavLink>
          <NavLink to="/pedido" className={getLinkClass}>PEDIDO</NavLink>
        </nav>
        <Link to="/pedido">
          <button className="header-order-button">🛒 ORDENAR</button>
        </Link>
      </div>
    </header>
  );
} 