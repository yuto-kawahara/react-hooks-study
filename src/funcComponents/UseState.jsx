/**
 * useStateを使用した関数コンポーネントの作成
 */

import React, { useState } from "react";
const initialState = Math.floor(Math.random() * 10) + 1;

// setStateを使用するとclass componentよりもコードをスッキリかける
export const UseState = () => {
  // [] = 分割代入でuseStateのhooksから最初のレンダリング中に返されるstateと
  // stateを更新するための関数を取得する
  // initialStateは再レンダリングされても最初に読み込んだ値を保持し続ける
  const [count, setCount] = useState(initialState);
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  // console.log("Counter");
  // stateが更新される度にコンポーネントが再レンダリングされる
  // htmlの中でjavascriptを使用するには{}を使用する
  return (
    <>
      <button onClick={toggle}>{open ? "close" : "open"}</button>
      <div className={open ? "isOpen" : "isClose"}>
        <p>現在の数字は{count}です</p>
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          +1
        </button>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>0に戻す</button>
        <button onClick={() => setCount(initialState)}>最初の数値に戻す</button>
      </div>
    </>
  );
};
