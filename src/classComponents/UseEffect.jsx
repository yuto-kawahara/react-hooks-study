// ReactのUIライブラリを使用
import { Button, ButtonGroup } from "@material-ui/core";
import { Component } from "react";

export default class EffectClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log("constructor");
  }
  componentDidMount() {
    document.title = `${this.state.count}回クリックされました`;
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    document.title = `${this.state.count}回クリックされました`;
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <>
        <p>{`${this.state.count}回クリックされました`}</p>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            ボタン
          </Button>
          <Button onClick={() => this.setState({ count: 0 })}>リセット</Button>
        </ButtonGroup>
      </>
    );
  }
}
