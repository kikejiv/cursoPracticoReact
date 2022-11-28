import React from "react";
import '@styles/ProductInfo.scss';
import addtocart from '@icons/bt_add_to_cart.svg'

const ProductInfo = () => {
  return (
   <div>
  <img src="https://img.europapress.es/fotoweb/fotonoticia_20200612133741-1310519_640.jpg" alt="Play 5" />
  <div classname="ProductInfo">
    <div classname="points">
      <li classname="active">
      </li><li>
      </li><li>
      </li></div>
    <p>$760.00</p>
    <p>Play 5</p>
    <p>
      Experimenta una velocidad sorprendente con una SSD de velocidad
      ultrarrápida, una inmersión más profunda con soporte para respuesta
      háptica1, gatillos adaptables1 y audio 3D*, además de una generación
      completamente nueva de juegos de PlayStation.{'{'}" "{'}'}
    </p>
    <button classname="primary-button add-to-cart-button">
    <img src={addtocart} alt="addtocart" />
    </button></div></div>
  );
}

export default ProductInfo;
