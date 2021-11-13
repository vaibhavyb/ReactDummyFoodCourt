import React, { useState } from "react";
import "./Card.css";
import MealItem from "./MealItem";

function Card(props) {
  const [list, setlist] = useState([]);

  const countall = (atotal, afood) => {
    var newarray = list.filter(item => item.food !== afood);
    setlist([...newarray, { food: afood, total: atotal }]);
  };

  const data = [
    {
      id: 1,
      food: "Masala Dosa",
      Amount: 50,
      Rating: 5
    },
    {
      id: 2,
      food: "Veg Biriyani",
      Amount: 50,
      Rating: 5
    },
    {
      id: 3,
      food: "Gobi Manchurian",
      Amount: 50,
      Rating: 5
    },
    {
      id: 4,
      food: "Idli and Vada",
      Amount: 50,
      Rating: 5
    },
    {
      id: 5,
      food: "Veg Panner Biriyani",
      Amount: 50,
      Rating: 5
    },
    {
      id: 6,
      food: "Aloo Manchurian",
      Amount: 50,
      Rating: 5
    },
    {
      id: 7,
      food: "Maggie",
      Amount: 50,
      Rating: 5
    },
    {
      id: 8,
      food: "Kaju Biriyani",
      Amount: 50,
      Rating: 5
    },
    {
      id: 9,
      food: "BabyCorn Manchurian",
      Amount: 50,
      Rating: 5
    },
    {
      id: 10,
      food: "Hyderbadi Biriyani",
      Amount: 50,
      Rating: 5
    }
  ];
  return (
    <div className="card">
      {props.data(list)}

      {data.map(item => (
        <MealItem
          counter={countall}
          key={item.id}
          food={item.food}
          amount={item.Amount}
          rate={item.Rating}
        />
      ))}
    </div>
  );
}

export default Card;
