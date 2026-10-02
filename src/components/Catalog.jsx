import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

export const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  // Obtener categorías únicas dinámicamente
  const categories = ['Todos', ...new Set(PRODUCTS.map((p) => p.category))];

  const filteredProducts = selectedCategory === 'Todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="catalogo" className="catalog-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Catálogo de Productos</h2>
          <p className="section-subtitle">
            Selecciona el producto que deseas y coordina tu pedido directo con nosotros.
          </p>
        </div>

        {/* Filtro por categorías */}
        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cuadrícula de productos */}
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};