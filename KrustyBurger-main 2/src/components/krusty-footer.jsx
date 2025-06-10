import React from 'react';

export default function KrustyFooter() {
  return (
    <footer className="bg-[#fff] text-[#2D4A6D] pt-12 pb-6 border-t-4 border-[#FED90F] mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <img src="/krusty-burger-logo.png" alt="Krusty Burger Logo" className="h-14 w-14 rounded-full bg-white border-2 border-[#FED90F] mb-2" />
          <h3 className="text-xl font-bold mb-1 text-[#D4173F]">Krusty Burger</h3>
          <p className="text-[#2D4A6D]/80 text-sm font-semibold">"No es solo una hamburguesa, es una Krusty Burger"</p>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-[#2D4A6D] uppercase">Menú</h4>
          <ul className="space-y-1">
            <li>Hamburguesas</li>
            <li>Acompañamientos</li>
            <li>Bebidas</li>
            <li>Postres</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-[#2D4A6D] uppercase">Horarios</h4>
          <p>Lunes a Viernes: 10:00 - 22:00</p>
          <p>Sábados y Domingos: 11:00 - 23:00</p>
          <p>Feriados: 12:00 - 21:00</p>
        </div>
        <div>
          <h4 className="font-bold mb-2 text-[#2D4A6D] uppercase">Contacto</h4>
          <p>Teléfono: 555-KRUSTY</p>
          <p>Email: info@krustyburger.com</p>
          <div className="flex gap-3 justify-center md:justify-start mt-2">
            <a href="#" className="hover:text-[#D4173F]" aria-label="Facebook"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24H12.82v-9.294H9.692V11.01h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
            <a href="#" className="hover:text-[#D4173F]" aria-label="Instagram"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.013 7.052.072 5.77.13 4.8.312 4.05.55c-.77.25-1.42.58-2.07 1.23-.65.65-.98 1.3-1.23 2.07-.238.75-.42 1.72-.478 3C.013 8.332 0 8.736 0 12c0 3.264.013 3.668.072 4.948.058 1.28.24 2.25.478 3 .25.77.58 1.42 1.23 2.07.65.65 1.3.98 2.07 1.23.75.238 1.72.42 3 .478C8.332 23.987 8.736 24 12 24c3.264 0 3.668-.013 4.948-.072 1.28-.058 2.25-.24 3-.478.77-.25 1.42-.58 2.07-1.23.65-.65.98-1.3 1.23-2.07.238-.75.42-1.72.478-3C23.987 15.668 24 15.264 24 12c0-3.264-.013-3.668-.072-4.948-.058-1.28-.24-2.25-.478-3-.25-.77-.58-1.42-1.23-2.07-.65-.65-1.3-.98-2.07-1.23-.75-.238-1.72-.42-3-.478C15.668.013 15.264 0 12 0z"/><path d="M12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 1 0 12 5.838zm0 10.162A4 4 0 1 1 12 7.838a4 4 0 0 1 0 8.162zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg></a>
            <a href="#" className="hover:text-[#D4173F]" aria-label="Twitter"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg></a>
          </div>
        </div>
      </div>
      <div className="text-[#2D4A6D]/60 text-xs text-center mt-8 font-semibold">
        © 2025 Krusty Burger. Todos los derechos reservados.<br />
        <span className="italic">*Los ingredientes pueden contener pedazos de payaso* - Advertencia legal</span>
      </div>
    </footer>
  );
} 