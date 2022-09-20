// allways wrie it inside the components or function
// components name must be pascalCase (first letter should be upper case)
// we can directly import or we can directly write it using React.hookname
// do not call hook inside loops condition or nested function
// only call hooks on top of the levels

import React from "react";

const RulesHooks = () => {
  const [myname, setMyname] = React.useState("kashif");
  return (
    <div>
      <h1>{myname}</h1>
      <button onClick={() => setMyname("asif")}>change name</button>
    </div>
  );
};

export default RulesHooks;
