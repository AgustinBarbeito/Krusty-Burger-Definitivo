import React, { useState } from 'react';

const SummaryItem = ({ name, price, quantity }) => (
  <li className="summary-item">
    <span>{quantity}x {name}</span>
    <span>${(price * quantity).toFixed(2)}</span>
  </li>
);

export default function Pedido() {
  // Estado de ejemplo para el formulario y el carrito
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: ''
  });
  
  const [cartItems] = useState([
    { id: 1, name: 'Krusty Burger Clásica', price: 8.50, quantity: 2 },
    { id: 6, name: 'Papas Fritas de la Risa', price: 3.50, quantity: 1 },
    { id: 8, name: 'Buzz Cola', price: 2.50, quantity: 1 },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pedido enviado... o tal vez no. ¡Gracias por tu dinero!');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // Impuesto del 10%... para la "seguridad" de Krusty
  const total = subtotal + tax;

  return (
    <div className="pedido-page">
      <div className="order-form-container">
        <h2>Completa tu Pedido</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Dirección de Entrega</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono de Contacto</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
          </div>
          <button type="submit" className="checkout-button">CONFIRMAR PEDIDO</button>
        </form>
      </div>

      <div className="order-summary-container">
        <h2>Resumen de tu Orden</h2>
        <ul className="order-summary-list">
          {cartItems.map(item => <SummaryItem key={item.id} {...item} />)}
        </ul>
        <div className="summary-item">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Impuesto Krusty</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="summary-total">
          <span>TOTAL</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
} 