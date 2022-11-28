import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import addCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
    const [cart, setCart] = useState([]);
    
    const handleClick = () => {
        setCart([]);
    }
    return (
        <div className="ProductItem">
             <img src={product.images?.[0]} alt={product.title} ></img>
                   <div className="product-info">
                       <div>
                         <p>{product.title} </p>
                         <p>${product.price}</p>
                       </div>
                       <figure onClick={handleClick} >
                        <img src={addCart} alt="" />
                       </figure>      
                   </div> 
                </div>
    );
}

export default ProductItem;