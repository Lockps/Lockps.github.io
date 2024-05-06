import React, { useEffect, useState } from 'react'
import './Market.css'
import Item from '../Components/Item';
import Navbar from '../Components/Navbar';



const Market = () => {
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
    <div className='Market'>
        <Navbar/>

    <div className='Market-Container'>
        <h1 className='Mar-Text'>All Product</h1>
        <div className='Mar-item-Grid'>
            {products.map((product, index)=>(
            <Item
                key={index}
                name={product.Name}
                Price={product.Price}
                URL={product.URL}
            />
            ))}
        </div>
    </div>
    </div>
  )
}

export default Market
