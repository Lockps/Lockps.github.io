import React, { useState, useEffect } from 'react';
import './Products.css';
import Item from './Item';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8080/')
      .then(response => response.json())
      .then(data => {
        setProducts(data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div className='Pro-Container'>
        <h1 className='Pro-Text'>Our Products</h1>
        <div className='Pro-item-Container'>
            {products.slice(0, 5).map((product, index) => (
              <Item
                key={index}
                name={product.Name} 
                Price={product.Price} 
                URL={product.URL}
              />
            ))}
        </div>
    </div>
  );
};

export default Products