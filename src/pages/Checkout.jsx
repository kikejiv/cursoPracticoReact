import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss';
import arrow from '@icons/flechita.svg';

const Checkout = () => {
    return (
   <div classname="Checkout">
    <div classname="Checkout-container">
      <h1 classname="title">Mi orden</h1>
        <div classname="Checkout-content">
         <div classname="order">
        <p>
          <span>29.06.22</span>
          <span>6 articulos</span>
        </p>
        <p>$5600</p>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
    <OrderItem />
 </div>
</div>

    );
}

export default Checkout;