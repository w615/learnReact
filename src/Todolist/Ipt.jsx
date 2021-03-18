import React, { Component } from "react";
class Ipt extends Component {
  state = {
    value: "",
  };
  handleChange = () => {
    return (e) => {
      this.setState({
        value: e.target.value,
      });
    };
  };
  handleKeyUp = () => {
    return (e) => {
      console.log("输入了回车键");
      if (e.keyCode === 13) {
        // 把数据传到父组件
        console.log("enter");
        this.props.onReceiveKeyWord(this.state.value);
        this.setState({
          value: "",
        });
      } else {
        console.log(123);
      }
    };
  };
  render() {
    return (
      <>
        添加任务
        <form action="">
          {/* 受控组件 */}
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange()}
            onKeyUp={this.handleKeyUp()}
          />
        </form>
      </>
    );
  }
}
export default Ipt;
