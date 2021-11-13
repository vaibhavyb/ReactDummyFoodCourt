import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import "./OrderItem.css";

function OrderItem(props) {
  return (
    <div>
      <div className="item">
        <div className="det">
          <label className="lab1">{props.food}</label>

          <label className="lab2">X</label>
          <label className="lab3">{props.quantity}</label>
        </div>
        <div className="amount">
          <label>
            {props.quantity * 50}
            <FaDollarSign />{" "}
          </label>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default OrderItem;
