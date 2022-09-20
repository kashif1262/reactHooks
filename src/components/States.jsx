import React, { useState } from "react";

const States = () => {
  //console.log(useState("kashif iqbal"));
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("black");
  return (
    <div style={{ backgroundColor: `${backgroundColor}` }}>
      <h1 style={{ color: "white" }}>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increament</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decreament
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        clear
      </button>
      <button
        onClick={() => {
          if (backgroundColor === "black") {
            setBackgroundColor("blue");
          } else if (backgroundColor === "blue") {
            setBackgroundColor("orange");
          } else {
            setBackgroundColor("black");
          }
        }}
      >
        change color to blue
      </button>
    </div>
  );
};

export default States;
