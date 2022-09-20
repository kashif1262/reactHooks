import React, { useState } from "react";

const ProblemInReact = () => {
  //  =================problem one====================
  //   const [number, setNumber] = useState(0);
  //   const increase = () => {
  //     setNumber(number + 1);
  //   };
  //   const increaseAsync = () => {
  //     //in async use arrow function not update state directly
  //     setTimeout(() => {
  //       setNumber((crunumber) => crunumber + 1);
  //     }, 2000);
  //   };
  //   return (
  //     <div>
  //       <button onClick={increase}> increase </button>
  //       <button onClick={increaseAsync}> increase </button>
  //       <h1>{number}</h1>
  //     </div>
  //   );
  //=========================problem 2========================
  //   const [user, setUser] = useState();
  // if user is empty
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifycontent: "center",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         gap: "1rem",
  //       }}
  //     >
  //       <h1>user: </h1>
  //       <input type="text" onChange={(e) => e.target.value} />
  //       <button>change user name</button>
  //       <span>username is: {user && user.name}</span>
  //     </div>
  //   );
  //============================problem 3===========================
  // use of spread operator
  //   const [user, setUser] = useState({
  //     name: "kashif",
  //     email: "kashif@gmail.com",
  //     image: "profile image",
  //   });
  //   const [input, setInput] = useState("");
  //   const changeUser = () => {
  //     setUser((user) => ({ ...user, name: input }));
  //   };

  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         justifycontent: "center",
  //         flexDirection: "column",
  //         alignItems: "center",
  //         gap: "1rem",
  //       }}
  //     >
  //       <h1>user: </h1>
  //       <input type="text" onChange={(e) => setInput(e.target.value)} />
  //       <button onClick={changeUser}>change user name</button>
  //       <span>username is: {user && user.name}</span>
  //       <span>preview input: {input}</span>
  //     </div>
  //   );
  //==============================problem 4================================
  // multiple form values handle
  //handle multiple inputs
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    country: "",
    city: "",
    address: "",
  });
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(user);
  };

  return (
    <div
      style={{
        display: "flex",
        justifycontent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h1>hello</h1>
      <form
        style={{
          display: "flex",
          justifycontent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
        name=""
      >
        <input
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="name"
        />
        <input
          type="text"
          onChange={handleChange}
          name="lastname"
          placeholder="lastname"
        />
        <input
          type="text"
          onChange={handleChange}
          name="username"
          placeholder="username "
        />
        <input
          type="text"
          onChange={handleChange}
          name="email"
          placeholder="email"
        />
        <input
          type="text"
          onChange={handleChange}
          name="password"
          placeholder="password"
        />
        <input
          type="text"
          onChange={handleChange}
          name="country"
          placeholder="country"
        />
        <input
          type="text"
          onChange={handleChange}
          name="city"
          placeholder="city"
        />
        <input
          type="text"
          onChange={handleChange}
          name="address"
          placeholder="address"
        />
        <button>submit</button>
        <span>preview : {user.name}</span>
        <span>preview : {user.lastname}</span>
        <span>preview : {user.username}</span>
        <span>preview : {user.email}</span>
        <span>preview : {user.password}</span>
        <span>preview : {user.country}</span>
        <span>preview : {user.city}</span>
        <span>preview : {user.address}</span>
      </form>
    </div>
  );
};

export default ProblemInReact;
