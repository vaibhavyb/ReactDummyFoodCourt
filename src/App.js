import "./App.css";
import React, { useState } from "react";
import Header from "./components/header/Header";
import Card from "./components/body/Card";
import Orders from "./components/OrderSummary/Orders";

function App(props) {
  const [dat, setdat] = useState([]);
  const [opacity, setopacity] = useState(1);

  const totaldatahandler = data => {
    setdat(data);
  };

  return (
    <div className="mainBlock">
      <Header count={dat} />
      <div className="mainBody">
        <Card data={totaldatahandler} />
      </div>
      <div className="modal">
        <Orders data={dat} />
      </div>
    </div>
  );
}

export default App;
