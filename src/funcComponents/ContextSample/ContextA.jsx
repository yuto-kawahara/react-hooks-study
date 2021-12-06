import React from "react";
import ContextB from "./ContextB";

const ContextA = (props) => {
  const { value } = props;

  return (
    <div>
      <p>ContextA</p>
      <p>{value}</p>
      <ContextB />
    </div>
  );
};
export default ContextA;
