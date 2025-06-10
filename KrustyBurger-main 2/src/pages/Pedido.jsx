import React from 'react';
import { useCart } from '../context/cart-context';
import KrustyHeader from '../components/krusty-header';
import KrustyFooter from '../components/krusty-footer';
import QuantitySelector from '../components/quantity-selector';

export default function Pedido() {
  const { cart, removeFromCart, updateQuantity, clearCart, getTotal } = useCart();

  return (
    <div>
      <KrustyHeader />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Mi Pedido</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Tu carrito está vacío</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={`${item.id}-${item.type}`} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <QuantitySelector
                      quantity={item.quantity}
                      onIncrement={() => updateQuantity(item.id, item.type, item.quantity + 1)}
                      onDecrement={() => updateQuantity(item.id, item.type, item.quantity - 1)}
                    />
                    <button
                      onClick={() => removeFromCart(item.id, item.type)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <button
                onClick={clearCart}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Vaciar Carrito
              </button>
              <div className="text-right">
                <p className="text-lg font-semibold">Total: ${getTotal()}</p>
                <button className="mt-2 bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600">
                  Realizar Pedido
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      <KrustyFooter />
    </div>
  );
} 