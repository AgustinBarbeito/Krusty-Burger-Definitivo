"use client"

import React from 'react';
import styles from './quantity-selector.module.css';

export default function QuantitySelector({ quantity, onIncrement, onDecrement }) {
  // Aseguramos que onIncrement y onDecrement sean funciones para evitar errores
  const handleDecrement = () => onDecrement && onDecrement();
  const handleIncrement = () => onIncrement && onIncrement();

  return (
    <div className={styles.selector}>
      <button
        onClick={handleDecrement}
        className={styles.button}
        aria-label="Disminuir cantidad"
      >
        -
      </button>
      <span className={styles.quantity} aria-live="polite">{quantity}</span>
      <button
        onClick={handleIncrement}
        className={styles.button}
        aria-label="Aumentar cantidad"
      >
        +
      </button>
    </div>
  );
} 