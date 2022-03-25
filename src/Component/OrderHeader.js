import React from 'react';
import './OrderHeader.css';

export default function OrderHeader(props) {
    return (
      <header className="block row center">
        <div className="left-text">
          <a href="#/">
            <h1>Want to Order Something</h1>
          </a>
          </div>
          <div className="right-text" >
        <div>
          <a href="#/cart">
            Cart{' '}
            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ''
            )}
          </a>{' '}
          </div>
        </div>
      </header>
    );
  }
  
//   export default OrderHeader;