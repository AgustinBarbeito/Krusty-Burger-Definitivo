"use client"

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function KrustyHeader() {
  const location = useLocation();
  const navItems = [
    { label: 'INICIO', to: '/' },
    { label: 'MENÚ', to: '/menu' },
    { label: 'UBICACIONES', to: '/ubicaciones' },
    { label: 'NOSOTROS', to: '/nosotros' },
    { label: 'PEDIDO', to: '/pedido' },
  ];
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b-4 border-[#FED90F]">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/krusty-burger-logo.png" alt="Krusty Burger Logo" className="h-12 w-12 rounded-full bg-white border-2 border-[#FED90F]" />
        </div>
        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-10 text-lg font-bold tracking-wide">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`uppercase hover:text-[#D4173F] transition-colors ${location.pathname === item.to ? 'text-[#2D4A6D]' : 'text-[#2D4A6D]/80'}`}
                  style={{fontFamily:'Arial Rounded MT Bold, Arial, sans-serif', letterSpacing:'1px'}}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link to="/pedido">
          <button className="bg-[#FED90F] hover:bg-[#D4173F] hover:text-white text-[#2D4A6D] font-bold py-2 px-7 rounded-full text-lg shadow border-2 border-[#FED90F] flex items-center gap-2 transition-all duration-200" style={{boxShadow:'0 2px 8px 0 #ffe01b55', fontFamily:'Arial Rounded MT Bold, Arial, sans-serif'}}>
            <span role="img" aria-label="bag">🛒</span> ORDENAR
          </button>
        </Link>
      </div>
    </header>
  );
} 