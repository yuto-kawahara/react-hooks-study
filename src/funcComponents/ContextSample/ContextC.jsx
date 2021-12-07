import React, { useContext } from "react";
import { UserCount } from "../../App";

// useContextを使用することでstateをバケツリレーしなくて済む
// バケツリレーの場合、propsに渡していくことになるので処理が面倒
// useContextはstateをグローバルなstateとして管理するので、
// 簡単な処理だけで子コンポーネントに渡すことができる
// 使い方としては親コンポーネントでcreateContextでコンテキストを作成
// 作成したコンテキストのProviderのpropsとしてvalueを受け取るので、
// このvalueに入れるのが渡したい値をしているする。この場合value
// 子コンポーネントでvalueを受け取る際は、useContextでインポートしてきたコンテキストを指定する
// コンテキストってなんやねん？
// コンテキストは各階層で手動でプロパティを下に渡すことなく、コンポーネントツリー内でデータを渡す方法
// 要はpropsでバケツリレーしなくてもすむやり方のこと
//
const ContextC = (props) => {
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
