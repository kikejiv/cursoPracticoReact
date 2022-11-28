import React from 'react';
import '@styles/ShoppingCartItem.scss';

const ShoppingCartItem = () => {
    return (
    <div classname="ShoppingCartItem" >
        <figure>
            <img src="https://i.blogs.es/634b13/ps5-lado/1366_2000.jpeg" alt="Play5" />
        </figure>
            <p>Play 5</p>
            <p>$750.00</p>
    </div>
  );
} 
export default ShoppingCartItem;