import React from 'react';
import '@styles/Order.scss';
import arrow from '@icons/flechita.svg'

const Order = () => {
    return (
      <div>
        div class="Order"&gt;
        <p>
          <span>29.06.22</span>
          <span>6 articulos</span>
        </p>
        <p>$5600</p>
        <img src={arrow} alt="arrow" />
      </div>
    );
}

export default Order;