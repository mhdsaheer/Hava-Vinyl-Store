import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';
import products from './Products.js';

const Shop = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('All');

  const genres = ['All', ...new Set(products.map(product => product.details.genre))];
  const filteredProducts = selectedGenre === 'All'
    ? products
    : products.filter(product => product.details.genre === selectedGenre);

  return (
    <div className="shop-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; Shop
      </div>

      <div className="shop-content">
        <div className="genre-sidebar">
          <h3 className="sidebar-title">Categories</h3>
          <ul className="genre-list">
            {genres.map((genre) => (
              <li
                key={genre}
                className={`genre-item ${selectedGenre === genre ? 'active' : ''}`}
                onClick={() => setSelectedGenre(genre)}
              >
                {genre}
              </li>
            ))}
          </ul>
        </div>
        <div className="product-grid-container">
          <div className="filter-tabs">
            <span className="tab active">All</span>
            <span className="tab">New</span>
            <span className="tab">Featured</span>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div
                className="product-card"
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Link to={`/product/${product.id}`} className="product-link">
                  <div className="product-image-container">
                    <img
                      src={hoveredProduct === product.id ? product.hoverImage : product.image}
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price}</p>
                    <button className="view-details-btn">View Details</button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
