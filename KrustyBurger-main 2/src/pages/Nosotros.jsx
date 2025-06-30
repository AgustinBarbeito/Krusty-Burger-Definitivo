import React from 'react';

const TimelineEvent = ({ year, title, children, side }) => (
  <div className={`timeline-container ${side}`}>
    <div className="timeline-content">
      <h2>{year}</h2>
      <p>{children}</p>
    </div>
  </div>
);

export default function Nosotros() {
  return (
    <div className="nosotros-page">
      <header className="nosotros-header">
        <h1>Nuestra No-Tan-Ilustre Historia</h1>
        <p>"Donde la calidad es un concepto flexible y la satisfacción del cliente es... opcional."</p>
      </header>

      <div className="timeline">
        <TimelineEvent year="1989" side="left">
          Krusty el Payaso, en un intento desesperado por pagar sus deudas de juego, funda "Krusty Burger". La primera hamburguesa se vende con un 50% de descuento y un 100% de riesgo de intoxicación alimentaria.
        </TimelineEvent>
        <TimelineEvent year="1992" side="right">
          Lanzamiento de la "Burger²", una hamburguesa hecha de otra hamburguesa. Es un fracaso comercial pero un hito en la ingeniería de alimentos cuestionable.
        </TimelineEvent>
        <TimelineEvent year="1997" side="left">
          Krusty Burger es demandada por publicidad engañosa al afirmar que sus "aros de cebolla" contienen cebolla. El caso se resuelve fuera de los tribunales con cupones para más aros.
        </TimelineEvent>
        <TimelineEvent year="2005" side="right">
          Se introduce la "Costi-Burger" por tiempo limitado. Se vuelve tan popular que su inevitable retirada causa disturbios en varios locales.
        </TimelineEvent>
        <TimelineEvent year="2015" side="left">
          Para cumplir con las "nuevas regulaciones de salud", se añade una hoja de lechuga marchita a la Krusty Burger Deluxe. El precio aumenta un 20%.
        </TimelineEvent>
        <TimelineEvent year="Hoy" side="right">
          Krusty Burger sigue en pie, desafiando las leyes de la nutrición, el buen gusto y, a veces, la gravedad. ¡Gracias por ser parte de nuestra grasienta historia!
        </TimelineEvent>
      </div>
    </div>
  );
} 