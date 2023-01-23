import React, { useEffect } from "react";
import "../App.css";

const UseEffect = () => {
  useEffect(() => {
    console.log("komponen telah di render");
  });

  return (
    <div className="App">
      <header className="App-header">
        <p>nilai dari state counter</p>
      </header>
    </div>
  );
};

export default UseEffect;
