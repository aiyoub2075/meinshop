import React from 'react';
import './App.css';
import Product from './components/Product';
import products from './products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aiyoub Shop</h1>
      </header>
      <div className="product-list">
        {products.map((product, index) => (
          <Product 
            key={index}
            name={product.name}
            price={product.price}
            imageURL={product.imageURL}
            quantity={product.quantity}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
