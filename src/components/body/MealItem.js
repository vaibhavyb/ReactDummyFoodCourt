import React, { useState } from "react";
import "./MealItem.css";
import { FaDollarSign, FaPlus, FaMinus } from "react-icons/fa";
import Rating from "./Rating";

function MealItem(props) {
  const [clicked, setclicked] = useState(false);
  const [total, settotal] = useState(0);

  const Addhandler = () => {
    setclicked(true);
    settotal(total + 1);
    props.counter(total+1,props.food);
  };
  const addall = () => {
    settotal(total + 1);
    props.counter(total+1,props.food);
  };
  const deleteall = () => {
    settotal(total - 1);
    {
      total === 0 && settotal(0);
    }
    props.counter(total-1,props.food);
  };

  return (
    <div className="Meal-Item">
      <div className="foodname">
        <h4>{props.food}</h4>
        <Rating></Rating>
        <Rating></Rating>
        <Rating></Rating>
        <Rating></Rating>
        <Rating></Rating>
      </div>
      <div className="Detail">
        <p>
          Amount: <FaDollarSign />
          {props.amount}
        </p>

        {clicked === false && (
          <button className="add" onClick={Addhandler}>
            Add <FaPlus />
          </button>
        )}
        {clicked === true && (
          <div className="newpattern1">
            <button className="newpattern" onClick={deleteall}>
              <FaMinus />
            </button>
            <label className="data">{total}</label>
            
            <button className="newpattern" onClick={addall}>
              <FaPlus />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MealItem;
