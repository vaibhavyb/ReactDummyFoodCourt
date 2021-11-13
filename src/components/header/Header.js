import React from "react";
import Title from "./Title";
import Cart from "./Cart";
import "./Header.css";

function Header(props) {
  return (
    <div className="header-panel">
      <div>
        <Title />
      </div>
      <div>
        <Cart className='cart' cartitems={props.count} />
      </div>
    </div>
  );
}

export default Header;
