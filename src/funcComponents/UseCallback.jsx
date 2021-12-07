import React, { memo, useCallback, useState } from "react";

//Titleコンポーネント(子)
//memo化したことにより一度目のレンダリング以降は再レンダリングされない
//memoではコンポーネントが返したReact要素を記録し、再レンダーされそうになった時に、本当に
//再レンダーが必要かどうかをチェックして、必要な場合のみレンダーする
//計算結果を保持し、それを再利用する手法のこと
//キャッシュのようなもの
//要は1回目にキャッシュにコンポーネントを保存しておき、2回目のレンダリングが行われる際に、
//前回保存した内容と比べて変化があった場合にキャッシュの内容を更新するイメージ
//コンポーネントをメモ化するReact公式のAPI

const Title = memo(() => {
  console.log("Title component");
  return <h2>useCallBackTest vol.1</h2>;
});

//Buttonコンポーネント(子)
const Button = memo(({ handleClick, value }) => {
  console.log("Button child component", value);
  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
});

//Countコンポーネント(子)
// memo化
const Count = memo(({ text, countState }) => {
  console.log("Count child component", text);
  return (
    <p>
      {text}:{countState}
    </p>
  );
});

//Counterコンポーネント（親）
const UseCallback = () => {
  const [firstCountState, setFirstCountState] = useState(0);
  const [secondCountState, setSecondCountState] = useState(10);
  // useCallbackを使用しない場合、+1ボタンが押下された場合、UseCallbackの再レンダリングが行われるため
  // incrementSecondCounterは新しく生成されてしまうため、+10ボタンを押下していないにも関わらず再レンダリングされてしまう
  //+ 1 ボタンのstateセット用関数
  const incrementFirstCounter = useCallback(
    () => setFirstCountState(firstCountState + 1),
    [firstCountState]
  );

  //+ 10 ボタンのstateセット用関数
  const incrementSecondCounter = useCallback(
    () => setSecondCountState(secondCountState + 10),
    [secondCountState]
  );

  //子コンポーネントを呼び出す
  return (
    <>
      <Title />
      <Count text="+ 1 ボタン" countState={firstCountState} />
      <Count text="+ 10 ボタン" countState={secondCountState} />
      <Button handleClick={incrementFirstCounter} value={"+1 ボタン"} />
      <Button handleClick={incrementSecondCounter} value={"+10 ボタン"} />
    </>
  );
};

export default UseCallback;
