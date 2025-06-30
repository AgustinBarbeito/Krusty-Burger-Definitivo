"use client"

import React from 'react';
import styles from './ingredient-selector.module.css';

export default function IngredientSelector({ ingredients = [], selectedIngredients = [], onToggleIngredient }) {
  return (
    <div className={styles.selector}>
      <h3 className={styles.title}>Ingredientes Adicionales</h3>
      <div className={styles.list}>
        {ingredients.map((ingredient) => (
          <label key={ingredient.id} className={styles.item}>
            <input
              type="checkbox"
              checked={selectedIngredients.includes(ingredient.id)}
              onChange={() => onToggleIngredient && onToggleIngredient(ingredient.id)}
              className={styles.checkbox}
            />
            <span className={styles.name}>{ingredient.name}</span>
            {ingredient.price > 0 && (
              <span className={styles.price}>(+${ingredient.price})</span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
} 