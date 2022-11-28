import React from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';

const MyOrder = () => {
    return (
      <aside className="MyOrder">
        <div className="MyOrder-container">
          <h1 className="title">My order</h1>
          <div className="MyOrder-content">

            <OrderItem />
            <div className="order">
              <p>
                <span>Total</span>
                <span>6 articles</span>
              </p>
              <p>$560.00</p>
            </div>
            <button className="primary-button">
              Checkout
            </button>
          </div>
        </div>
      </aside>
    );
}

export default MyOrder;