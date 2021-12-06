import { useReducer, useState } from "react";

/**
 * useReducerの使い方
 */
export const UseReducer = () => {
  // javascriptのreduceの使い方
  const test = [10, 20, 30];
  const sum = test.reduce((prev, curr) => prev + curr);
  console.log(sum);

  // const [state, setState] = useState(initialState);

  return <div></div>;
};
