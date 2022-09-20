import React from "react";
import { useState } from "react";

const UseStateArray = () => {
  const bioArray = [
    {
      id: 0,
      name: "kashif",
      age: 30,
    },
    {
      id: 1,
      name: "kashif",
      age: 30,
    },
    {
      id: 2,
      name: "kashif",
      age: 30,
    },
    {
      id: 3,
      name: "kashif",
      age: 30,
    },
    {
      id: 4,
      name: "kashif",
      age: 30,
    },
    {
      id: 5,
      name: "kashif",
      age: 30,
    },
  ];
  const [stateArray, setStateArray] = useState(bioArray);
  return (
    <div>
      {stateArray.map((element) => {
        return (
          <h1 key={element.id}>
            name: {element.name} & age: {element.age}
          </h1>
        );
      })}
      <button onClick={() => setStateArray([])}>clear</button>
    </div>
  );
};

export default UseStateArray;
