import React from 'react';
import KrustyHeader from '../components/krusty-header';
import KrustyFooter from '../components/krusty-footer';

const locations = [
  {
    name: 'Krusty Burger Centro',
    address: 'Av. Siempreviva 742',
    city: 'Springfield',
    phone: '555-KRUSTY',
    hours: [
      'Lunes a Viernes: 10:00 - 22:00',
      'Sábados y Domingos: 11:00 - 23:00',
      'Feriados: 12:00 - 21:00',
    ],
    map: '#',
    order: '#',
    icon: '📍',
  },
  {
    name: 'Krusty Burger Mall',
    address: 'Springfield Mall',
    city: 'Local 42',
    phone: '555-BURGER',
    hours: [
      'Lunes a Viernes: 10:00 - 22:00',
      'Sábados y Domingos: 10:00 - 22:00',
      'Feriados: 11:00 - 21:00',
    ],
    map: '#',
    order: '#',
    icon: '🏬',
  },
  {
    name: 'Krusty Burger Shelby',
    address: 'Shelbyville Plaza 123',
    city: 'Shelbyville',
    phone: '555-KRUST',
    hours: [
      'Lunes a Jueves: 11:00 - 21:00',
      'Viernes a Domingo: 11:00 - 23:00',
      'Feriados: 12:00 - 20:00',
    ],
    map: '#',
    order: '#',
    icon: '🏢',
  },
];

export default function Ubicaciones() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7fafd] font-sans">
      <KrustyHeader />
      <main className="flex-1 w-full">
        <section className="container mx-auto px-4 pt-16 pb-8">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#D4173F] mb-2 uppercase tracking-tight" style={{fontFamily:'Arial Rounded MT Bold, Arial, sans-serif'}}>NUESTRAS UBICACIONES</h1>
            <p className="text-lg text-[#3E5F8A] italic font-semibold mb-8">"Estamos en todas partes, como la culpa" - Krusty el Payaso</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {locations.map((loc, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-xl flex flex-col h-full border-t-8 border-[#D4173F] border-b-4 border-[#FED90F]">
                <div className="px-6 py-4 border-b border-gray-100 text-xl font-bold text-[#3E5F8A] flex items-center gap-2">
                  <span className="text-2xl">{loc.icon}</span> {loc.name}
                </div>
                <div className="flex-1 px-6 py-4 flex flex-col gap-2">
                  <p className="font-bold text-[#D4173F] flex items-center gap-2"><span role="img" aria-label="geo">📍</span> {loc.address}</p>
                  <p className="text-[#3E5F8A] text-sm">{loc.city}</p>
                  <p className="flex items-center gap-2"><span role="img" aria-label="phone">📞</span> {loc.phone}</p>
                  <div className="mt-2">
                    <span className="font-bold text-[#3E5F8A]">Horarios:</span>
                    <ul className="text-sm text-[#222] ml-2 mt-1">
                      {loc.hours.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="px-6 py-4 border-t border-gray-100 flex flex-col gap-2">
                  <a href={loc.map} className="w-full bg-white border-2 border-[#3E5F8A] text-[#3E5F8A] font-bold py-2 rounded-full flex items-center justify-center gap-2 hover:bg-[#3E5F8A] hover:text-white transition-all duration-200">CÓMO LLEGAR <span role="img" aria-label="map">🗺️</span></a>
                  <a href={loc.order} className="w-full bg-[#FED90F] border-2 border-[#FED90F] text-[#D4173F] font-bold py-2 rounded-full flex items-center justify-center gap-2 hover:bg-[#D4173F] hover:text-white transition-all duration-200"><span role="img" aria-label="bag">🛍️</span> ORDENAR AQUÍ</a>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full bg-[#3E5F8A] text-white font-bold text-lg rounded-xl shadow-lg px-8 py-4 text-center border-4 border-black mb-8 max-w-xl mx-auto">
            ¡Visítanos en cualquiera de nuestras ubicaciones!
          </div>
        </section>
      </main>
      <KrustyFooter />
    </div>
  );
} 