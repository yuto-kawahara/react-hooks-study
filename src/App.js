import "./styles.css";
import React, { useState } from "react";
// import { UseState } from "./funcComponents/UseState";
// import UseState from "./classComponents/UseState";
// import UseEffect from "./classComponents/UseEffect";
import { UseEffect } from "./funcComponents/UseEffect";
import { CountUp } from "./funcComponents/UseEffect";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(!open)}>Toggle</button>
      {open && <CountUp />}
    </div>
  );
}
