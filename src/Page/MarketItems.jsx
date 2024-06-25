import React from 'react';
import './MarketItem.css';

const MarketItem = ({ name, price, imageURL }) => {
  return (
    <div className='market-item'>
      <div className='item-image'>
        <img src={imageURL} alt={name} />
      </div>
      <div className='item-details'>
        <h3>{name}</h3>
        <p>{price} $</p>
        {/* Add more details as needed */}
      </div>
      <button className='buy-button'>Buy Now</button>
    </div>
  );
};

export default MarketItem;
