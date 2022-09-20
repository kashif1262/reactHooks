import React from "react";
import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      console.log("add");
      return state + 1;

    case "subtract":
      console.log("sub");
      return state - 1;

    case "clear":
      console.log("clear");
      return 0;

    default:
      throw new Error("unexpected action");
  }
};
const UseReducers = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch("add")}>add</button>
      <button onClick={() => dispatch("subtract")}>subtract</button>
      <button onClick={() => dispatch("clear")}>clear</button>
    </div>
  );
};

export default UseReducers;
