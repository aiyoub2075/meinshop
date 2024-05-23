import React from 'react';
import './Product.css';

const Product = ({ name, price, imageURL, quantity }) => {
  return (
    <div className="product">
      <img src={imageURL} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">{price} €</p>
      <p className="product-quantity">noch {quantity} Stücke verfügbar</p>
      <p style={{color: 'green'}}> sofort lieferbar</p>
    </div>
  );
};

export default Product;
