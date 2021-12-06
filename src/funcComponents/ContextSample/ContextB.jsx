import React from "react";
import ContextC from "./ContextC";

const ContextB = (props) => {
  const { value } = props;
  return (
    <div>
      <p>ContextB</p>
      <p>{value}</p>
      <ContextC />
    </div>
  );
};
export default ContextB;
