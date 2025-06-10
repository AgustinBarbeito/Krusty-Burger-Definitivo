import React from 'react';
import KrustyHeader from '../components/krusty-header';
import KrustyFooter from '../components/krusty-footer';

export default function Nosotros() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7fafd] font-sans">
      <KrustyHeader />
      <main className="flex-1 w-full">
        {/* TÍTULO Y FRASE */}
        <section className="container mx-auto px-4 pt-16 pb-8">
          <div className="text-center mb-6">
            <h1 className="inline-block text-5xl md:text-6xl font-extrabold text-[#D4173F] bg-white px-10 py-2 rounded-lg border-4 border-black shadow-lg uppercase tracking-tight" style={{fontFamily:'Arial Rounded MT Bold, Arial, sans-serif', textShadow:'2px 2px 0 #fffbe6'}}>NUESTRA HISTORIA</h1>
            <p className="mt-6 text-xl md:text-2xl font-semibold text-[#222]">"Donde la comida es tan graciosa como un ataque al corazón" - Krusty el Payaso</p>
          </div>

          {/* HISTORIA PRINCIPAL */}
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#3E5F8A] mb-2">Desde 1989, alimentando a Springfield</h2>
              <p className="text-[#222] text-lg mb-4 font-semibold">Krusty Burger abrió sus puertas en 1989 como parte del imperio comercial de Krusty el Payaso. Lo que comenzó como una pequeña hamburguesería en Springfield se ha convertido en una cadena internacional con más de 300 locales en todo el país.</p>
              <p className="text-[#222] text-lg mb-4 font-semibold">Nuestra receta secreta, desarrollada por el propio Krusty (y varios químicos alimentarios), ha permanecido prácticamente sin cambios durante décadas. ¿Por qué cambiar algo que ya es perfectamente mediocre?</p>
              <div className="bg-[#FED90F] text-[#222] font-bold text-base rounded-md shadow px-4 py-2 border-2 border-black inline-block mt-4">"Los ingredientes pueden contener pedazos de payaso" - Advertencia legal</div>
            </div>
            <div className="flex-1 flex justify-center">
              <img src="/krusty-exterior.png" alt="Krusty Burger Springfield" className="rounded-xl shadow-lg w-full max-w-md object-cover" />
            </div>
          </div>

          {/* BURGER² - ÉXITO Y FRACASO */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3E5F8A] mb-6 text-center uppercase tracking-tight">BURGER² - NUESTRO MAYOR ÉXITO (Y FRACASO)</h2>
            <div className="flex flex-col md:flex-row gap-8 mb-8">
              <div className="flex-1 flex flex-col gap-4">
                <img src="/kent-burger-cuadrado.png" alt="Burger2 Lanzamiento" className="rounded-xl shadow w-full object-cover" />
                <h3 className="text-xl font-bold text-[#D4173F] mt-2">El concepto revolucionario</h3>
                <p className="text-[#222] text-base font-semibold">La Burger² utilizaba un proceso patentado donde la carne de vaca se usaba como alimento para otra vaca, que luego era procesada en hamburguesa. Esto creaba una hamburguesa "al cuadrado" - dos vacas en una.</p>
                <p className="text-[#222] text-base font-semibold">Según los científicos de Krusty Burger, este proceso "duplicaba el sabor a vaca" sin necesidad de usar más carne, ahorrando millones en costos de producción.</p>
                <div className="border-2 border-[#D4173F] bg-white text-[#222] italic rounded-md px-4 py-2 mt-2">"La FDA aún está investigando cómo logramos alimentar vacas con carne de vaca sin violar las leyes de la naturaleza. Nosotros también queremos saberlo." - Departamento Legal de Krusty Burger</div>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <h3 className="text-xl font-bold text-[#D4173F]">El lanzamiento que hizo historia</h3>
                <p className="text-[#222] text-base font-semibold">En 1994, Krusty Burger revolucionó la industria con el lanzamiento de la "Burger²" (Burger al Cuadrado), un concepto innovador que prometía "el doble de sabor con la misma cantidad de carne".</p>
                <p className="text-[#222] text-base font-semibold">El evento fue cubierto por Kent Brockman de Canal 6, quien describió la hamburguesa como "un avance culinario que desafía tanto a la lógica como a las leyes de la física".</p>
                <div className="border-2 border-[#3E5F8A] bg-white text-[#222] italic rounded-md px-4 py-2 mt-2">"Es como comer dos hamburguesas, pero solo pagas por una y media... ¡y solo comes una!" - Krusty el Payaso</div>
                <img src="/burger-cuadrado-explicacion.png" alt="Burger2 Explicación" className="rounded-xl shadow w-full object-cover mt-4" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#D4173F] mt-4">El resultado inesperado</h3>
            <p className="text-[#222] text-base font-semibold mb-2">Aunque inicialmente fue un éxito de ventas, la Burger² tuvo que ser retirada del mercado después de que varios clientes reportaran efectos secundarios como "sabor a déjà vu" y "sensación de estar comiendo la misma hamburguesa dos veces".</p>
            <p className="text-[#222] text-base font-semibold mb-2">A pesar de las controversias, algunos clientes como Homer Simpson se convirtieron en fanáticos leales de la Burger².</p>
            <div className="bg-[#FED90F] text-[#222] font-bold text-base rounded-md shadow px-4 py-2 border-2 border-black inline-block mt-4 mb-4">"Después de 15 demandas y una investigación del Departamento de Salud, decidimos que era mejor volver a nuestras hamburguesas tradicionales, que solo causan problemas cardíacos normales." - Krusty el Payaso</div>
            <img src="/krusty-gone-crazy.gif" alt="Homer Burger" className="rounded-xl shadow w-full object-cover mb-4" />
            <p className="text-center text-[#222] font-semibold mb-4">La reacción de los clientes fue mixta, pero las imágenes de Homer disfrutando la hamburguesa se volvieron virales en Springfield.</p>
            <img src="/krusty-fila.png" alt="Fila Krusty Burger" className="rounded-xl shadow w-full object-cover mb-4" />
            <p className="text-center text-[#222] font-semibold">A pesar de los escándalos, la gente sigue haciendo fila para probar nuestras creaciones.</p>
          </div>

          {/* EXPERIENCIA ÚNICA */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3E5F8A] mb-8 text-center uppercase tracking-tight">UNA EXPERIENCIA ÚNICA</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
                <img src="/krusty-familia.png" alt="Para toda la familia" className="rounded-lg mb-4 object-cover w-full h-48" />
                <h3 className="text-lg font-bold text-[#D4173F] mb-2 uppercase">Para toda la familia</h3>
                <p className="text-[#222] text-center font-semibold">Un lugar donde las familias pueden disfrutar de comidas económicas en un ambiente lleno de colores y personajes divertidos. ¡Incluso Marge aprueba nuestras ensaladas!</p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
                <img src="/krusty-juegos.png" alt="Diversión garantizada" className="rounded-lg mb-4 object-cover w-full h-48" />
                <h3 className="text-lg font-bold text-[#D4173F] mb-2 uppercase">Diversión garantizada</h3>
                <p className="text-[#222] text-center font-semibold">Nuestras áreas de juegos están diseñadas para que los niños se diviertan mientras los adultos disfrutan de un momento de paz. ¡Piscina de pelotas desinfectada mensualmente!</p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
                <img src="/krusty-autoservicio.png" alt="Servicio rápido" className="rounded-lg mb-4 object-cover w-full h-48" />
                <h3 className="text-lg font-bold text-[#D4173F] mb-2 uppercase">Servicio rápido</h3>
                <p className="text-[#222] text-center font-semibold">Nuestro autoservicio te permite disfrutar de tu Krusty Burger sin salir del auto. Ideal para cuando tienes prisa o simplemente no quieres que te vean comiendo aquí.</p>
              </div>
            </div>
          </div>

          {/* SABÍAS QUE... */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#3E5F8A] mb-8 text-center uppercase tracking-tight">¿SABÍAS QUE...?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2"><span className="bg-[#3E5F8A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">1</span><span className="text-lg font-bold text-[#3E5F8A]">Clientes ilustres</span></div>
                <p className="text-[#222] text-center font-semibold mb-2">El ex-presidente Bush visitó nuestro local en 1992, declarando que nuestras hamburguesas eran "tan americanas como el pastel de manzana".</p>
                <img src="/krusty-bush.png" alt="Clientes ilustres" className="rounded-lg object-cover w-full h-36" />
              </div>
              <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-2"><span className="bg-[#D4173F] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">2</span><span className="text-lg font-bold text-[#3E5F8A]">Personal comprometido</span></div>
                <p className="text-[#222] text-center font-semibold mb-2">Nuestros empleados son seleccionados entre los mejores... disponibles. Incluso Moe Szyslak trabajó con nosotros antes de abrir su taberna.</p>
                <img src="/empleados-krusty.png" alt="Personal comprometido" className="rounded-lg object-cover w-full h-36" />
              </div>
            </div>
          </div>

          {/* BANNER FINAL */}
          <div className="w-full bg-[#3E5F8A] text-white font-bold text-2xl rounded-xl shadow-lg px-8 py-6 text-center border-4 border-black mb-8" style={{transform:'rotate(-2deg)'}}>
            "Si no te gusta nuestra comida, tenemos un formulario de quejas que va directo a la trituradora" - Krusty el Payaso
          </div>
        </section>
      </main>
      <KrustyFooter />
    </div>
  );
} 