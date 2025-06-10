import React, { useRef } from 'react';
import KrustyHeader from '../components/krusty-header';
import KrustyFooter from '../components/krusty-footer';

const ICONS = {
  veggie: <img src="/icon-vegetarian.png" alt="Veggie" className="inline h-6 align-text-bottom" />, // o usa emoji
  spicy: <img src="/icon-spicy.png" alt="Spicy" className="inline h-6 align-text-bottom" />, // o usa emoji
  gluten: <img src="/icon-gluten-free.png" alt="Sin TACC" className="inline h-6 align-text-bottom" />, // o usa emoji
};

const sections = [
  {
    id: 'hamburguesas',
    title: 'HAMBURGUESAS',
    color: '#3E5F8A',
    items: [
      {
        name: 'KRUSTY BURGER DELUXE',
        emoji: '🍔',
        image: '/krusty-burger-deluxe.png',
        desc: 'Triple carne, queso cheddar, panceta crocante, cebolla caramelizada y salsa secreta Krusty.',
        phrase: '"¡Tan buena que olvidás la carne contaminada!"',
        variants: [
          { label: 'SIMPLE', price: 10500 },
          { label: 'DOBLE', price: 13000 },
        ],
      },
      {
        name: 'LA LISA VEGGIE',
        emoji: '🌱',
        image: '/lisa-veggie.png',
        desc: 'Hamburguesa de garbanzos y espinaca, con tomate, palta y alioli vegano.',
        phrase: '"Sin sufrimiento animal, ni sufrimiento del paladar."',
        variants: [
          { label: 'VEGGIE', price: 9500 },
        ],
        icons: ['veggie'],
      },
      {
        name: 'MOE MACABRA',
        emoji: '🔥',
        image: '/moe-macabra.png',
        desc: 'Medallón de carne picante, queso azul, pepinos encurtidos y jalapeños.',
        phrase: '"Oscura como el alma de Moe."',
        variants: [
          { label: 'SIMPLE', price: 9800 },
          { label: 'DOBLE', price: 12000 },
        ],
        icons: ['spicy'],
      },
      {
        name: 'LA BARTMAN',
        emoji: '🐔',
        image: '/bartman-burger.png',
        desc: 'Medallón empanizado y frito, cheddar, nachos triturados, barbacoa dulce y cebolla crujiente.',
        phrase: '"¡Ay caramba!"',
        variants: [
          { label: 'SIMPLE', price: 9000 },
          { label: 'DELUXE', price: 12000 },
        ],
      },
      {
        name: 'LA EXCELENTE',
        emoji: '💰',
        image: '/la excelente.png',
        desc: 'Carne de wagyu (o eso dice el menú), queso brie, rúcula y cebolla morada.',
        phrase: '"Excelente."',
        variants: [
          { label: 'SIMPLE', price: 11500 },
          { label: 'DOBLE', price: 14500 },
        ],
      },
      {
        name: 'LA RADIACTIVA REAL',
        emoji: '👑',
        image: '/radiactiva-burger.png',
        desc: 'Una bomba de cheddar, jalapeños y cebolla crocante, digna del trono nuclear de Springfield.',
        phrase: '"¡Brilla en la oscuridad!"',
        variants: [
          { label: 'SIMPLE', price: 10000 },
          { label: 'DOBLE', price: 13000 },
        ],
      },
    ],
  },
  {
    id: 'entrantes',
    title: 'ENTRANTES',
    color: '#D4173F',
    items: [
      {
        name: 'CROQUETAS DE PATTY Y SELMA',
        emoji: '🚬',
        image: '/croquetas-patty-selma.png',
        desc: 'Ahumadas, intensas y con sabor fuerte... como las tías.',
        phrase: '"Con un toque de tabaco."',
        variants: [
          { label: '', price: 5500 },
        ],
      },
      {
        name: 'DEDOS DE OTTO',
        emoji: '🎸',
        image: '/dedos-otto.png',
        desc: 'Bastones de mozzarella rebozados, con salsa picante.',
        phrase: '"Muy, muy chill..."',
        variants: [
          { label: '', price: 5800 },
        ],
        icons: ['spicy'],
      },
      {
        name: 'MINI PANCHOS DE AYUDANTE DE SANTA',
        emoji: '🌭',
        image: '/mini-panchos.png',
        desc: 'Mini hot dogs con ketchup, mostaza y cebolla frita.',
        phrase: '"¡Guau, guau!"',
        variants: [
          { label: '', price: 6200 },
        ],
      },
    ],
  },
  {
    id: 'acompañamientos',
    title: 'ACOMPAÑAMIENTOS',
    color: '#3E5F8A',
    items: [
      {
        name: 'PAPAS KRUSTY',
        emoji: '🍟',
        image: '/papas-fritas.png',
        desc: 'Papas fritas con sal y pimienta. Crujientes por fuera, suaves por dentro.',
        phrase: '"¡Las favoritas de Springfield!"',
        variants: [
          { label: '', price: 4500 },
        ],
      },
      {
        name: 'AROS DE CEBOLLA',
        emoji: '🧅',
        image: '/onion-rings.png',
        desc: 'Aros de cebolla fritos y crujientes. Con rebozado especial Krusty.',
        phrase: '"Redondos como las donas de Homero."',
        variants: [
          { label: '', price: 5000 },
        ],
      },
      {
        name: 'NUGGETS TOMY Y DALY',
        emoji: '🐭',
        image: '/nuggets-tomy-daly.png',
        desc: '6 unidades con salsa a elección. Forma de ratón o gato según disponibilidad.',
        phrase: '"¡Violentamente deliciosos!"',
        variants: [
          { label: '', price: 6000 },
        ],
      },
    ],
  },
  {
    id: 'ensaladas',
    title: 'ENSALADAS',
    color: '#3E5F8A',
    items: [
      {
        name: 'ENSALADA LISA LA VEGETARIANA',
        emoji: '🥗',
        image: '/ensalada-lisa.png',
        desc: 'Orgánica, fresca, con tofu marinado, zanahoria rallada, rúcula y semillas.',
        phrase: '"Aprobada por activistas."',
        variants: [
          { label: '', price: 7500 },
        ],
        icons: ['veggie'],
      },
      {
        name: 'CÉSAR FLANDERS',
        emoji: '🙏',
        image: '/cesar-flanders.png',
        desc: 'Tradicional ensalada César, con crutones bendecidos.',
        phrase: '"¡Hola-Hola vecino saludable!"',
        variants: [
          { label: '', price: 7000 },
        ],
      },
      {
        name: 'SPRINGFIELD MIXTA',
        emoji: '🥚',
        image: '/springfield-mixta.png',
        desc: 'Lechuga, tomate, cebolla morada, huevo duro y aderezo duff-mostaza.',
        phrase: '"Simple pero efectiva."',
        variants: [
          { label: '', price: 6500 },
        ],
      },
    ],
  },
  {
    id: 'pastas',
    title: 'PASTAS',
    color: '#3E5F8A',
    items: [
      {
        name: 'SPAGHETTI A LO LUIGI',
        emoji: '🍝',
        image: '/spaghetti-luigi.png',
        desc: 'Con albóndigas gigantes y salsa pomodoro estilo Springfield.',
        phrase: '"¡Mamma mia, qué delicia!"',
        variants: [
          { label: '', price: 8500 },
        ],
      },
      {
        name: 'RAVIOLES DEL ABUELO SIMPSON',
        emoji: '🥟',
        image: '/ravioles-abuelo.png',
        desc: 'Rellenos de carne, con salsa de crema y queso... ',
        phrase: '"Con historias incluidas."',
        variants: [
          { label: '', price: 9000 },
        ],
      },
      {
        name: 'FIDEOS DE BART AL PESTO',
        emoji: '😈',
        image: '/fideos-bart.png',
        desc: 'Traviesos, verdes y deliciosos. Con albahaca fresca y piñones.',
        phrase: '"¡Cómete mis shorts!"',
        variants: [
          { label: '', price: 8000 },
        ],
      },
    ],
  },
  {
    id: 'bebidas-alcoholicas',
    title: 'BEBIDAS ALCOHÓLICAS',
    color: '#3E5F8A',
    items: [
      {
        name: 'CERVEZA DUFF CLÁSICA',
        emoji: '🍺',
        image: '/duff clasica.png',
        desc: 'El alma de Springfield. Fría y espumosa.',
        phrase: '"La cerveza oficial de Homero Simpson."',
        variants: [
          { label: '', price: 5000 },
        ],
      },
      {
        name: 'DUFF NEGRA LENNY & CARL',
        emoji: '🖤',
        image: '/duff-negra.png',
        desc: 'Más intensa. Para hablar de la vida en la barra.',
        phrase: '"Para momentos filosóficos."',
        variants: [
          { label: '', price: 5500 },
        ],
      },
      {
        name: 'LLAMARADA MOE',
        emoji: '🔥',
        image: '/llamarada-moe.png',
        desc: '¡Arde al servirlo! Mezcla secreta de licores.',
        phrase: '"Versión sin fuego disponible."',
        variants: [
          { label: '', price: 7000 },
        ],
      },
    ],
  },
  {
    id: 'bebidas-sin-alcohol',
    title: 'BEBIDAS SIN ALCOHOL',
    color: '#3E5F8A',
    items: [
      {
        name: 'BUZZ COLA',
        emoji: '🥤',
        image: '/buzz cola.png',
        desc: 'La bebida oficial de Springfield. Con cafeína extra.',
        phrase: '"¡El secreto está en el jarabe!"',
        variants: [
          { label: '', price: 3500 },
        ],
      },
      {
        name: 'MALTEADA DE CHOCOLATE RAFITA',
        emoji: '🍫',
        image: '/malteada-rafita.png',
        desc: 'Muy dulce, con extra crema y chispas de chocolate.',
        phrase: '"¡Sabe a arcoíris!"',
        variants: [
          { label: '', price: 4800 },
        ],
      },
      {
        name: 'AGUA DE FLANDERS',
        emoji: '💧',
        image: '/agua-flanders.png',
        desc: 'Filtrada. Bendecida. Sospechosamente buena.',
        phrase: '"Hidratación divina."',
        variants: [
          { label: '', price: 3000 },
        ],
      },
    ],
  },
  {
    id: 'postres',
    title: 'POSTRES',
    color: '#3E5F8A',
    items: [
      {
        name: 'DONA EXPLOSIVA HOMERO',
        emoji: '🍩',
        image: '/dona.png',
        desc: 'Donas XL con glaseado rosa y chispas multicolor.',
        phrase: '"Mmm... donas."',
        variants: [
          { label: '', price: 4000 },
        ],
      },
      {
        name: 'TARTA DE MANZANA DE LA ABUELA BOUVIER',
        emoji: '🥧',
        image: '/tarta-abuela.png',
        desc: 'Clásica, tibia y con aroma a nostalgia.',
        phrase: '"Receta de cinco generaciones."',
        variants: [
          { label: '', price: 4500 },
        ],
      },
      {
        name: 'HELADO KRUSTY CREAM',
        emoji: '🍦',
        image: '/helado-krusty.png',
        desc: 'Tres sabores, galletitas rotas y una risa grabada.',
        phrase: '"¡Jajaja! (risa de payaso)"',
        variants: [
          { label: '', price: 5000 },
        ],
      },
    ],
  },
];

export default function Menu() {
  // refs para cada sección
  const sectionRefs = useRef(sections.reduce((acc, s) => { acc[s.id] = React.createRef(); return acc; }, {}));

  // scroll suave al hacer click
  const scrollToSection = (id) => {
    const ref = sectionRefs.current[id];
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fff] font-sans">
      <KrustyHeader />
      <main className="flex-1 w-full bg-[#fff]">
        {/* ICONOS OPCIONES */}
        <div className="container mx-auto px-4 pt-8 pb-2 flex flex-wrap gap-8 justify-center items-center text-[#3E5F8A] text-lg font-bold">
          <span className="flex items-center gap-2">{ICONS.veggie} Opción vegetariana</span>
          <span className="flex items-center gap-2">{ICONS.spicy} Picante intenso</span>
          <span className="flex items-center gap-2">{ICONS.gluten} Opción sin TACC</span>
        </div>

        {/* FILTRO HORIZONTAL SIMPLE */}
        <nav className="w-full sticky top-[64px] z-40 bg-white border-b border-gray-100 overflow-x-auto">
          <div className="container mx-auto px-4 py-2 flex gap-2 justify-center whitespace-nowrap">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className="px-4 py-2 rounded-full font-semibold uppercase tracking-wide text-base bg-gray-100 text-[#3E5F8A] hover:bg-[#FED90F]/60 transition-all duration-200 border border-gray-200"
                style={{fontFamily:'Arial Rounded MT Bold, Arial, sans-serif'}}
              >
                {s.title}
              </button>
            ))}
          </div>
        </nav>

        {/* BANNER COSTIBURGER */}
        <section className="w-full py-12 bg-[#FED90F] text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-[#D4173F] text-white font-bold px-6 py-2 rounded-full mb-4 text-sm tracking-widest">PROMOCIÓN ESPECIAL</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#D4173F] mb-2 uppercase tracking-tight" style={{fontFamily:'Arial Rounded MT Bold, Arial, sans-serif'}}>¡NUEVA COSTIBURGER! 🐷</h2>
            <div className="text-lg font-bold text-[#3E5F8A] mb-2">Por tiempo limitado</div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-8">
              <img src="/costiburger 2.png" alt="Costiburger" className="rounded-lg object-cover w-80 h-56 border-2 border-[#2D4A6D] bg-white" />
              <div className="bg-white rounded-2xl shadow-xl p-6 text-left max-w-md mx-auto border-t-8 border-[#D4173F] border-b-4 border-[#FED90F]">
                <h3 className="text-2xl font-extrabold text-[#D4173F] mb-2">COSTIBURGER 🐷</h3>
                <p className="text-[#2D4A6D] mb-2">Nuestra promoción estrella inspirada en la McRib. Deliciosas costillitas de cerdo, salsa BBQ, cebolla y pepinillos.</p>
                <p className="italic text-[#2D4A6D] mb-4">"Mmm... costillitas!"</p>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between font-bold text-[#3E5F8A]"><span>SIMPLE</span><span>$10500</span></div>
                  <div className="flex justify-between font-bold text-[#3E5F8A]"><span>DOBLE</span><span>$13000</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIONES DEL MENÚ */}
        <div className="container mx-auto px-4 pb-16">
          {sections.map((section, idx) => (
            <div key={section.title} className="mb-16" ref={sectionRefs.current[section.id]} id={section.id}>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 flex items-center gap-3 uppercase tracking-tight" style={{color: section.color, fontFamily:'Arial Rounded MT Bold, Arial, sans-serif'}}>
                <span className="border-l-8" style={{borderColor: section.color, borderLeftWidth: '8px', paddingLeft: '12px'}}></span>
                {section.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {section.items.map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center border border-gray-200">
                    <img src={item.image} alt={item.name} className="rounded-lg mb-4 object-contain w-36 h-36 bg-white" />
                    <h3 className="text-xl font-extrabold mb-1 text-[#D4173F] text-center uppercase tracking-wide">
                      {item.name} {item.emoji} {item.icons && item.icons.map(icon => ICONS[icon])}
                    </h3>
                    <p className="text-[#2D4A6D] text-center mb-2 text-sm font-semibold">{item.desc}</p>
                    <p className="italic text-[#2D4A6D] text-center mb-3 text-sm">{item.phrase}</p>
                    <div className="w-full flex flex-col gap-1">
                      {item.variants.map((v, j) => (
                        <div key={j} className="flex justify-between items-center bg-[#F7FAFD] rounded-lg px-4 py-2 font-bold text-[#3E5F8A] text-base mb-1">
                          <span>{v.label}</span>
                          <span>{`$${v.price}`}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* AVISO LEGAL AMARILLO */}
          <div className="w-full bg-[#FED90F] text-[#222] font-bold text-xl rounded-xl shadow-lg px-8 py-6 text-center border-4 border-black mb-8" style={{transform:'rotate(-2deg)'}}>
            "Si encuentras un dedo en tu comida, ¡felicidades! ¡Has ganado un cupón de descuento!"<br />
            <span className="text-xs font-normal">*Krusty Burger no se hace responsable por dedos, uñas, dientes u otros apéndices encontrados en sus productos.</span>
          </div>
        </div>
      </main>
      <KrustyFooter />
    </div>
  );
} 