import React, { useState } from 'react';
import BurgerCard from '../components/burger-card';
import KrustyHeader from '../components/krusty-header';
import KrustyFooter from '../components/krusty-footer';

// --- Data del Menú ---
const menuData = {
    burgers: [
        { id: 1, name: "Krusty Burger Clásica", description: "La original. Carne de res, queso americano, lechuga, tomate y la salsa secreta de Krusty.", image: "/krusty-burger.png", prices: [{ size: 'Simple', price: 8.50 }] },
        { id: 2, name: "La Costi-Burger", description: "La legendaria hamburguesa de costillas de cerdo desmenuzadas con salsa BBQ.", image: "/costiburger.png", prices: [{ size: 'Doble', price: 12.00 }] },
        { id: 3, name: "Hamburguesa Veggie de Lisa", description: "Hecha con lentejas y champiñones, servida con brotes y mayonesa vegana.", image: "/lisa-veggie.png", prices: [{ size: 'Simple', price: 9.00 }] },
        { id: 4, name: "La Ex de Krusty", description: "Doble carne, doble queso, doble tocino. ¡Doble todo!", image: "/krusty-burger-deluxe.png", prices: [{ size: 'Doble', price: 11.50 }] },
    ],
    sides: [
        { id: 5, name: "Aros de Cebolla de Gabbo", description: "Crujientes aros de cebolla, fritos a la perfección.", image: "/onion-rings.png", prices: [{ size: 'Normal', price: 4.00 }] },
        { id: 6, name: "Papas Fritas de la Risa", description: "Papas cortadas a mano. Garantizado que no están hechas de papa.", image: "/papas-fritas.png", prices: [{ size: 'Normal', price: 3.50 }, { size: 'Grande', price: 5.00 }] },
        { id: 7, name: "Nuggets de Tomy y Daly", description: "Pollo (supuestamente) con formas divertidas. Incluye salsa.", image: "/nuggets.png", prices: [{ size: '6 piezas', price: 5.50 }] },
    ],
    drinks: [
        { id: 8, name: "Buzz Cola", description: "La bebida con el doble de azúcar y cafeína.", image: "/buzz-cola.png", prices: [{ size: 'Mediana', price: 2.50 }] },
        { id: 9, name: "Llamarada Moe", description: "Una bebida no alcohólica con un ingrediente secreto (es jarabe para la tos).", image: "/llamarada-moe.png", prices: [{ size: 'Único', price: 4.50 }] },
        { id: 10, name: "Malteada Súper empalagosa", description: "Hecha con helado y sirope de fresa.", image: "/malteada-rafita.png", prices: [{ size: 'Grande', price: 5.00 }] },
    ],
    desserts: [
        { id: 11, name: "Pastelito de la Abuela Simpson", description: "Un trozo de tarta de manzana con un toque de nostalgia.", image: "/tarta-abuela.png", prices: [{ size: 'Porción', price: 3.75 }] },
        { id: 12, name: "Sundae de Krusty", description: "Helado de vainilla con sirope de chocolate y una cereza de plástico.", image: "/helado-krusty.png", prices: [{ size: 'Normal', price: 3.00 }] },
    ],
    kids: [
        { id: 13, name: "Cajita Feliz de Krusty", description: "Una mini hamburguesa, papas pequeñas y un juguete peligroso.", image: "/family-combo.png", prices: [{ size: 'Único', price: 6.00 }] },
    ]
};

const FilterButton = ({ label, filter, activeFilter, setFilter }) => (
    <button
        className={`menu-filter-button ${activeFilter === filter ? 'active' : ''}`}
        onClick={() => setFilter(filter)}
    >
        {label}
    </button>
);

export default function Menu() {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleAddToCart = (item) => {
        console.log('Item added to cart:', item);
        // Aquí iría la lógica para actualizar el estado global del carrito
    };

    const sections = [
        { id: 'hamburguesas', title: 'Hamburguesas', filter: 'burgers' },
        { id: 'acompañamientos', title: 'Acompañamientos', filter: 'sides' },
        { id: 'bebidas-sin-alcohol', title: 'Bebidas', filter: 'drinks' },
        { id: 'postres', title: 'Postres', filter: 'desserts' },
        { id: 'para-niños', title: 'Menú para Niños', filter: 'kids' },
    ];

    const filteredSections = sections.filter(section => 
        activeFilter === 'all' || activeFilter === section.filter
    );

    return (
        <div className="menu-page">
            <KrustyHeader />
            <main>
                <div className="menu-filters-bar">
                    <FilterButton label="TODO" filter="all" activeFilter={activeFilter} setFilter={setActiveFilter} />
                    {sections.map(s => (
                        <FilterButton key={s.filter} label={s.title.toUpperCase()} filter={s.filter} activeFilter={activeFilter} setFilter={setActiveFilter} />
                    ))}
                </div>

                <div className="menu-promo-banner">
                    <h2>¡PROMO KRUSTY!</h2>
                    <p>¡Con la compra de cualquier hamburguesa, llevate una Buzz-Cola GRATIS!</p>
                </div>

                <div className="menu-content">
                    {filteredSections.map(section => (
                        <section key={section.id} id={section.id} className="menu-section">
                            <h2 className="menu-section-title">{section.title}</h2>
                            <div className="menu-grid">
                                {menuData[section.filter]?.map(item => (
                                    <BurgerCard key={item.id} burger={item} onAddToCart={handleAddToCart} />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>
            <KrustyFooter />
        </div>
    );
} 