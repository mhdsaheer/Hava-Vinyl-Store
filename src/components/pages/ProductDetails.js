import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import { useCart } from '../contexts/CartContext'; 
import products from './Products.js'; 

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    if (foundProduct) {
      setMainImage(foundProduct.image);
      const randomRelatedProducts = getRandomProducts(4);
      setRelatedProducts(randomRelatedProducts);
    }
  }, [id]);

  const getRandomProducts = (count) => {
    let randomProducts = [];
    let availableProducts = products.filter(p => p.id !== parseInt(id)); 
    while (randomProducts.length < count) {
      let randomIndex = Math.floor(Math.random() * availableProducts.length);
      let randomProduct = availableProducts[randomIndex];
      if (!randomProducts.includes(randomProduct)) {
        randomProducts.push(randomProduct);
      }
    }
    return randomProducts;
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: quantity
    });
    navigate('/cart');
  };

  if (!product) {
    return <div className="product-not-found">Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <Link to="/shop">Shop</Link> &gt; {product.name}
      </div>
      
      <div className="product-main">
        <div className="product-images">
          <div className="thumbnail-images">
            <img 
              src={product.image} 
              alt="Main" 
              onClick={() => setMainImage(product.image)}
              className={mainImage === product.image ? 'active' : ''}
            />
            {product.hoverImage && (
              <img 
                src={product.hoverImage} 
                alt="Alternate" 
                onClick={() => setMainImage(product.hoverImage)}
                className={mainImage === product.hoverImage ? 'active' : ''}
              />
            )}
          </div>
          <div className="main-image">
            <img src={mainImage} alt={product.name} />
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="price">${product.price}</div>
          <p className="description">{product.description}</p>
          
          <div className="product-meta">
            <div><strong>Artist:</strong> {product.details.artist}</div>
            <div><strong>Genre:</strong> {product.details.genre}</div>
            <div><strong>Release Year:</strong> {product.details.releaseYear}</div>
            <div><strong>Weight:</strong> {product.details.weight}</div>
            <div><strong>Color:</strong> {product.details.color}</div>
          </div>

          <div className="quantity-controls">
            <button 
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              className="quantity-btn"
            >
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button 
              onClick={() => setQuantity(q => q + 1)}
              className="quantity-btn"
            >
              +
            </button>
          </div>

          <div className="product-actions">
            <button 
              className="btn-add-to-cart" 
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button className="btn-wishlist"> <Link to={'/Shop'} className='content-link'>Back to Products</Link></button>
          </div>
        </div>
      </div>

      <div className="related-products">
        <h2>You May Also Like</h2>
        <div className="related-products-grid">
          {relatedProducts.map(related => (
            <div className="related-product" key={related.id}>
              <Link to={`/product/${related.id}`} className='product-link'>
                <img src={related.image} alt={related.name} />
                <h3>{related.name}</h3>
                <p>${related.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
