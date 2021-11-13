import React, { useState } from "react";
import OrderItem from "./OrderItem";

function Orders(props) {
  return (
    <div>
      {props.data.length!=0 &&(<h3 style={{textAlign:"center"}}>ORDER SUMMARY</h3>)}
      
      {props.data.map(item => (
        item.total>0 && 

        <OrderItem
          
          food={item.food}
          quantity={item.total}
        />
      ))}

      <div>
        {props.data.length != 0 && (
          <span>
            <p style={{textAlign:"center"}}>Have a gr8 day,Eat well...</p>
          </span>
        )}
      </div>
    </div>
  );
}

export default Orders;
