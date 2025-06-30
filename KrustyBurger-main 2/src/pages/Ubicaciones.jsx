import React from 'react';

// Este es un componente falso para el mapa. En una app real, aquí iría una librería como Google Maps o Leaflet.
const FakeMap = () => (
  <div className="map-container" style={{ 
    backgroundImage: 'url("/img/mapa-springfield.png")', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center' 
  }}>
    {/* Aquí se renderizarían los marcadores del mapa */}
  </div>
);

const LocationCard = ({ name, address, phone }) => (
  <div className="location-card">
    <h3>{name}</h3>
    <p>{address}</p>
    <p>Tel: {phone}</p>
  </div>
);

export default function Ubicaciones() {
  const locations = [
    { name: 'Krusty Burger - Centro de Springfield', address: 'Av. Siempreviva 742', phone: '555-0113' },
    { name: 'Krusty Burger - Springfield Este', address: 'Calle Falsa 123', phone: '555-0224' },
    { name: 'Krusty Burger - Autopista Matlock', address: 'Salida 23, Autopista 95', phone: '555-0335' },
    { name: 'Krusty Burger - Shelbyville', address: 'Plaza Mayor (frente a la estatua de Jebediah)', phone: '555-0446' }
  ];

  return (
    <div className="ubicaciones-page">
      <header className="ubicaciones-header">
        <h1>Encuentra tu Krusty Burger más cercano</h1>
      </header>
      
      <FakeMap />

      <div className="locations-grid">
        {locations.map((loc, index) => (
          <LocationCard key={index} {...loc} />
        ))}
      </div>
    </div>
  );
} 