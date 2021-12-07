import "./styles.css";
import React, { createContext, useState } from "react";
// import { UseState } from "./funcComponents/UseState";
// import UseState from "./classComponents/UseState";
// import UseEffect from "./classComponents/UseEffect";
// import { UseEffect } from "./funcComponents/UseEffect";
// import { CountUp } from "./funcComponents/UseEffect";
import ContextA from "./funcComponents/ContextSample/ContextA";
import { UseReducer } from "./funcComponents/UseReducer";
import { Counter } from "./funcComponents/Counter";
import ContextC from "./funcComponents/ContextSample/ContextC";
import UseCallback from "./funcComponents/UseCallback";
export const UserCount = createContext();

export default function App() {
  // const [open, setOpen] = useState(false);
  const [count, setCount] = useState(50);
  // useStateの値と関数も簡単に共有できる
  const value = {
    count,
    setCount
  };

  return (
    <div className="App">
      <h1>Learn useContext</h1>
      <UseCallback />
      {/* <UseReducer /> */}
      {/* <Counter /> */}
      {/* <ContextA value={value} />
      <UserCount.Provider value={value}>
        <ContextC />
      </UserCount.Provider> */}
    </div>
  );
}
