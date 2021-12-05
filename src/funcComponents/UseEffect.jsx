import { Button, ButtonGroup } from "@material-ui/core";
import { useEffect, useState } from "react";

export const CountUp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffectが実行されました");

    const interval = setInterval(() => {
      setCount((count) => count + 1);
      console.log("カウントが1アップしました。");
    }, 1000);
    // useEffext内でreturn clearItervalでsetIntervalを無効化する
    // アンマウント時に解除しないと、そのままイベントなどが継続して実行されてしまう
    return () => {
      clearInterval(interval);
      console.log("コンポーネントがアンマウントしました");
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
};

// export const UseEffect = () => {
//   const [count, setCount] = useState(0);

//   // useEffectの2つ目の引数に[]空配列を指定することで初回レンダリングのみの実行となる
//   // useEffectの2つ目の引数に[count]を指定すると、countに変化があったときのみ実行される
//   useEffect(() => {
//     document.title = `${count}回クリックされました`;
//     console.log("再レンダリングされました");
//     return () => {};
//   });
//   return (
//     <>
//       <p>{`${count}回クリックされました`}</p>
//       <ButtonGroup color="primary" aria-label="outlined primary button group">
//         <Button onClick={() => setCount((prev) => prev + 1)}>ボタン</Button>
//         <Button onClick={() => setCount(0)}>リセット</Button>
//       </ButtonGroup>
//     </>
//   );
// };
