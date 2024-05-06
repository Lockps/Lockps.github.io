import React, { useState } from 'react';
import './Item.css';

const Item = ({ name, Price, URL }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className='Item-Container'>
      <div className='Item-Pic'>
        <img src={URL} alt={name} />
      </div>
      <div className='Item-Text'>
        <div className='Item-Title'>{name}</div>
        <div className='Item-Price'>{Price + " $"}</div>
      </div>
      <div className='Item-Add' onClick={handleClick}>Buy Now</div>
    </div>
  );
};

export default Item;
