import React, { useState, useEffect } from "react";

const UseEffectEx2 = () => {
  //timer
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return <div>i have rendered {count} times!</div>;
};

export default UseEffectEx2;
