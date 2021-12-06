import React, { useContext } from "react";
import { UserCount } from "../../App";

const ContextC = () => {
  const { count, setCount } = useContext(UserCount);
  const onClickCountUp = () => setCount(count + 1);
  return (
    <div>
      <p>ContextC</p>
      <p>{count}</p>
      <button onClick={onClickCountUp}>+1</button>
    </div>
  );
};

export default ContextC;
