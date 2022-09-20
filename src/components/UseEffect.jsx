import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEffect = () => {
  const [number, setNumber] = useState(0);

  const [state, setState] = useState(10);

  useEffect(() => {
    document.title = `title is ${number} `;
    console.log("title is changed");
  }, [number]);

  return (
    <div>
      <h1>number: {number}</h1>
      <h2>state: {state}</h2>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        click me
      </button>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        state change
      </button>
    </div>
  );
};

export default UseEffect;
