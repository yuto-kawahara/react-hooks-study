import React from "react";
import ContextC from "./ContextC";

const ContextB = (props) => {
  const { value } = props;
  const { count, setCount } = value;
  const onClickCountUp = () => setCount(count + 1);
  return (
    <div>
      <p>ContextB</p>
      <p>{count}</p>
      <button onClick={onClickCountUp}>+1</button>
      <ContextC value={value} />
    </div>
  );
};
export default ContextB;
