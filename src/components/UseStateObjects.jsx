import React from "react";
import { useState } from "react";

const UseStateObjects = () => {
  const [myobjects, setMyobjects] = useState({
    id: 0,
    Name: "asif",
    age: 27,
    degree: "mcs",
  });

  const objectUpdate = () => {
    setMyobjects({ ...myobjects, Name: "kashif" });
  };
  const objectClear = () => {
    setMyobjects({});
  };
  const removeElem = (id) => {};
  return (
    <div>
      <h1>
        Name: {myobjects.Name} & age: {myobjects.age} & degree:{" "}
        {myobjects.degree}
        <button onClick={removeElem(myobjects.id)}>clear element</button>
      </h1>
      <button onClick={objectUpdate}>update</button>
      <button onClick={objectClear}>clear</button>
    </div>
  );
};

export default UseStateObjects;
