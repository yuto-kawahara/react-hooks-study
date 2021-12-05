/**
 * クラスコンポーネントの作成方法
 */

import React from "react";
//countの初期値として、1～10までのランダムな数値を生成
const initialState = Math.floor(Math.random() * 10) + 1;
// class クラス名 extends 継承するクラス {
//   // クラスの処理
// }
// extends React.Componentを継承して今からComponentを作るよ～という宣言
class UseState extends React.Component {
  constructor(props) {
    // superにpropsを渡すことによって継承元のコンポーネントの機能が使えるようになる
    // super()だけでも機能を使うことができるがpropsの値はundefinedになる
    // super(props)で書くことによってpropsの値がundefinedにならず値を保障できる
    super(props);
    this.state = {
      count: initialState,
      open: false
    };
  }
  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <>
        <button onClick={this.toggle}>
          {this.state.open ? "close" : "open"}
        </button>
        <div className={this.state.open ? "isOpen" : "isClose"}>
          <p>現在の数字は{this.state.count}です</p>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +1
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -1
          </button>
          <button onClick={() => this.setState({ count: 0 })}>0に戻す</button>
          <button onClick={() => this.setState({ count: initialState })}>
            最初の数値に戻す
          </button>
        </div>
      </>
    );
  }
}
export default Counter;
