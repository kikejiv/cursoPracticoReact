import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Orders.scss';

const Orders = () => {
    return (
      <div classname="Orders">
        <div classname="Orders-container">
          <h1 classname="title">Mis ordenes</h1>
          <div classname="Orders-content">
              
              <OrderItem />
          </div>
        </div>
      </div>
    );
}

export default Orders;