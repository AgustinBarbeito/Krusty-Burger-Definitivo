import React, { useState } from 'react';

const QuantitySelector = ({ quantity, setQuantity }) => (
  <div className="quantity-selector">
    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
    <span>{quantity}</span>
    <button onClick={() => setQuantity(quantity + 1)}>+</button>
  </div>
);

export default function BurgerCard({ burger, onAddToCart }) {
  // Asegurarse de que burger y burger.prices existan y no estén vacíos.
  const initialSize = burger?.prices?.[0]?.size || 'Normal';
  const initialPrice = burger?.prices?.[0]?.price || 0;

  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [selectedPrice, setSelectedPrice] = useState(initialPrice);
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (size, price) => {
    setSelectedSize(size);
    setSelectedPrice(price);
  };

  const finalPrice = selectedPrice * quantity;
  
  // No renderizar la tarjeta si no hay datos de la hamburguesa.
  if (!burger) {
    return null;
  }

  return (
    <div className="burger-card">
      <img src={burger.image} alt={burger.name} className="burger-card-image" />
      <div className="burger-card-content">
        <h3 className="burger-card-title">{burger.name}</h3>
        <p className="burger-card-description">{burger.description}</p>
        
        {burger.prices && burger.prices.length > 1 && (
          <div className="burger-card-sizes">
            {burger.prices.map(({ size, price }) => (
              <button
                key={size}
                className={`size-button ${selectedSize === size ? 'active' : ''}`}
                onClick={() => handleSizeChange(size, price)}
              >
                {size}
              </button>
            ))}
          </div>
        )}
        
        <div className="burger-card-footer">
          <p className="burger-card-price">${finalPrice.toFixed(2)}</p>
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        </div>
        
        <button 
          className="add-to-cart-button" 
          onClick={() => onAddToCart ? onAddToCart({ ...burger, selectedSize, quantity, finalPrice }) : null}
        >
          AGREGAR
        </button>
      </div>
    </div>
  );
} 