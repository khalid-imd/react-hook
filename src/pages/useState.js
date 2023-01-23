import React, { useState } from "react";
import "../App.css";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const [food, setFood] = useState([]);

  const addCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const addFood = () => {
    setFood([...food, "martabak"]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>nilai dari state counter</p>
        <h1>{counter}</h1>
        <button onClick={addCounter}>add counter</button>
        <button onClick={decreaseCounter}>recude counter</button>
      </header>
      <header className="App-header">
        <p>nilai state food</p>
        {food.map((food) => (
          <h1> {food} </h1>
        ))}
        <button onClick={addFood}>add food</button>
      </header>
    </div>
  );
};

export default UseState;
