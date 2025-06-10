import React from 'react';
import KrustyHeader from '../components/krusty-header';
import KrustyFooter from '../components/krusty-footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fff] font-sans">
      <KrustyHeader />
      <main className="flex-1 w-full">
        {/* HERO */}
        <section className="container mx-auto flex flex-col md:flex-row items-center justify-between py-24 px-4">
          <div className="md:w-1/2 mb-12 md:mb-0 text-left">
            <h1 className="text-7xl font-extrabold text-[#D4173F] mb-6 tracking-tight leading-none" style={{fontFamily:'Arial Rounded MT Bold, Arial, sans-serif'}}>KRUSTY BURGER</h1>
            <p className="text-2xl text-[#2D4A6D] mb-10 font-semibold">Las mejores hamburguesas de Springfield, ahora en tu ciudad.</p>
            <div className="flex flex-row gap-6">
              <Link to="/menu">
                <button className="bg-[#FED90F] text-[#2D4A6D] font-bold py-3 px-10 rounded-full text-lg shadow-md border-2 border-[#FED90F] hover:bg-[#ffe01b]/90 hover:border-[#D4173F] transition-all duration-300" style={{boxShadow:'0 4px 16px 0 #ffe01b55'}}>VER MENÚ</button>
              </Link>
              <Link to="/nosotros">
                <button className="bg-white text-[#2D4A6D] font-bold py-3 px-10 rounded-full text-lg shadow-md border-2 border-[#2D4A6D] hover:bg-[#2D4A6D] hover:text-white transition-all duration-300">CONÓCENOS</button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="rounded-full shadow-xl bg-white p-2">
              <img src="/krusty-burger-logo.png" alt="Krusty Burger Logo" width={380} height={380} className="rounded-full" style={{objectFit:'contain', width:'340px', height:'340px'}} />
            </div>
          </div>
        </section>

        {/* ESPECIALIDADES */}
        <section className="w-full py-20 bg-gradient-to-b from-[#fffbe6] to-[#fff] border-t-4 border-[#FED90F]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-5xl font-extrabold text-[#D4173F] inline-block bg-white px-12 py-3 rounded-lg border-4 border-[#2D4A6D] shadow-lg relative uppercase tracking-tight" style={{fontFamily:'Arial Rounded MT Bold, Arial, sans-serif', textShadow:'2px 2px 0 #fffbe6'}}>NUESTRAS ESPECIALIDADES</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Card Menú */}
              <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between border-t-8 border-[#D4173F] border-b-4 border-[#FED90F]" style={{minHeight:'420px'}}>
                <img src="/krusty-menu-board.png" alt="Menú Krusty Burger" className="rounded-lg mb-6 object-cover w-full h-52 border-2 border-[#2D4A6D]" />
                <h3 className="text-2xl font-bold text-[#2D4A6D] mb-2 uppercase tracking-wide">DESCUBRE NUESTRO MENÚ COMPLETO</h3>
                <p className="text-[#2D4A6D] mb-6">Disfruta de nuestras Krusty Burgers, Papas Krusty, Nuggets Tomy y Daly y Buzz Cola. Como dice Krusty: "Si no te da un ataque al corazón, ¡te devolvemos tu dinero!" (Oferta no válida en Springfield ni alrededores).</p>
                <Link to="/menu">
                  <button className="bg-[#2D4A6D] text-white font-bold py-3 px-8 rounded-full text-lg flex items-center gap-2 hover:bg-[#D4173F] transition-all duration-300 shadow-md">VER MENÚ COMPLETO <span className="text-xl">→</span></button>
                </Link>
              </div>
              {/* Card Costiburger */}
              <div className="bg-[#FED90F] rounded-2xl shadow-xl p-8 flex flex-col justify-between border-t-8 border-[#D4173F] border-b-4 border-[#fff] relative" style={{minHeight:'420px'}}>
                <div className="absolute top-0 right-0 bg-[#D4173F] text-white font-bold px-5 py-1 rounded-bl-2xl rounded-tr-2xl text-xs tracking-widest" style={{letterSpacing:'1px'}}>NUEVO</div>
                <h3 className="text-2xl font-bold text-[#D4173F] mb-2 flex items-center gap-2 uppercase tracking-wide"><span role="img" aria-label="costiburger">🐷</span>COSTIBURGER</h3>
                <img src="/homer-hamburguesa.png" alt="Costiburger" className="rounded-lg mb-6 object-cover w-full h-52 border-2 border-[#2D4A6D]" />
                <p className="text-[#2D4A6D] mb-6">Nuestra promoción estrella inspirada en la McRib. Deliciosas costillitas de cerdo, salsa BBQ, cebolla y pepinillos. ¡Una experiencia gastronómica que Homero Simpson aprobaría!</p>
                <div className="flex justify-between items-center mt-auto bg-white rounded-lg p-4 border-2 border-[#FED90F]">
                  <div>
                    <span className="text-sm text-[#2D4A6D] block font-bold">PRECIO ESPECIAL</span>
                    <span className="font-bold text-2xl text-[#D4173F]">$8500</span>
                  </div>
                  <Link to="/menu">
                    <button className="bg-[#D4173F] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#2D4A6D] transition-all duration-300 shadow-md">ORDENAR AHORA</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NUESTRA HISTORIA (mini) */}
        <section className="w-full py-20 bg-[#f7fafd] border-t-4 border-[#fffbe6]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-extrabold text-[#2D4A6D] mb-4 uppercase tracking-tight" style={{fontFamily:'Arial Rounded MT Bold, Arial, sans-serif'}}>NUESTRA HISTORIA</h2>
              <p className="text-lg max-w-3xl mx-auto mb-8 text-[#2D4A6D]">Desde 1989, Krusty Burger ha sido parte de la vida de Springfield. Descubre nuestra historia, nuestros éxitos y algunos fracasos memorables como la legendaria "Burger²".</p>
              <Link to="/nosotros">
                <button className="bg-[#D4173F] text-white font-bold py-3 px-12 rounded-full text-xl shadow-md hover:bg-[#2D4A6D] transition-all duration-300">CONOCE MÁS</button>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <img src="/homer-bart-milhouse.png" alt="Clientes disfrutando en Krusty Burger" className="rounded-lg object-cover w-full h-56 shadow-lg border-2 border-[#2D4A6D]" />
              <img src="/krusty-exterior.png" alt="Krusty Burger Original" className="rounded-lg object-cover w-full h-56 shadow-lg border-2 border-[#2D4A6D]" />
              <img src="/krusty-familia.png" alt="Experiencia familiar" className="rounded-lg object-cover w-full h-56 shadow-lg border-2 border-[#2D4A6D]" />
            </div>
          </div>
        </section>
      </main>
      <KrustyFooter />
    </div>
  );
} 