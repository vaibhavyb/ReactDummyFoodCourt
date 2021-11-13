import React from "react";
import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";

function Cart(props) {
  const showcart = () => {
      
  };
  return (
    <div className="cart">
      <label className="cartLabel">MY CART</label>
      <div className="cart-icon" onClick={showcart}>
        <p className="icon">
          <FaShoppingCart />
        </p>
        <button className="badge">
          <span>
            {props.cartitems <= "0" ? "Empty" : props.cartitems.length}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Cart;
