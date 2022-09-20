import React from "react";
import { useMemo } from "react";
import { useState } from "react";
function squarenumber(number) {
  console.log("squareing will be done!");
  return Math.pow(number, 2);
}
const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const squaredNumber = useMemo(() => {
    return squarenumber(number);
  }, [number]);
  const [counter, setCounter] = useState(0);

  const numberChanged = (e) => {
    setNumber(e.target.value);
  };
  const counterChanged = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <input
        type="number"
        placeholder="enter a number "
        value={number}
        onChange={numberChanged}
      />
      <div>OUTPUT: {squaredNumber}</div>
      <button onClick={counterChanged}>counter ++</button>
      <div>counter: {counter}</div>
      hello use mamo
    </div>
  );
};

export default UseMemo;
