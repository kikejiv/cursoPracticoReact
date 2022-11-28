import React from 'react';
import '@styles/OrderItem.scss';
import close from '@icons/icon_close.png';

const OrderItem = () => {
    return (
      <div className="OrderItem">
        <figure>
          <img
            src="https://img.europapress.es/fotoweb/fotonoticia_20200612133741-1310519_640.jpg"
            alt="Play5"
          />
        </figure>
        <p>Play 5</p>
        <p>$750.00</p>
        <img src={close} alt="close" />
      </div>
    );
}

export default OrderItem;