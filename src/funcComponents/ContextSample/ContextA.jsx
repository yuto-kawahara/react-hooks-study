import React from "react";
import ContextB from "./ContextB";

const ContextA = () => {
  // const { value } = props;
  // const { count, setCount } = value;
  // const onClickCountUp = () => setCount(count + 1);
  // console.log(setCount);
  return (
    <div>
      <p>ContextA</p>
      {/* <p>{value.count}</p> */}
      {/* <button onClick={onClickCountUp}>+1</button> */}
      {/* <ContextB value={value} /> */}
    </div>
  );
};
export default ContextA;
