import React, { useState, useEffect } from 'react';
import './Product.css';

const Product = ({ name, price, imageURL, quantity }) => {
  const [timer, setTimer] = useState(Math.floor(Math.random() * 1000) + 100);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer > 0 ? prevTimer - 1 : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="product">
      <img src={imageURL} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">{price} €</p>
      <p className="product-quantity">noch {quantity} Stücke verfügbar</p>
      <p style={{color: 'green'}}> sofort lieferbar</p>
      <p className="product-timer">Time left: {timer} seconds</p>
    </div>
  );
};

export default Product;
