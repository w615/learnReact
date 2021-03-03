import React, { Component } from "react";
import Ipt from "./Ipt";
import List from "./List";
class Todo extends Component {
  state = {
    list: [
      {
        id: "1",
        taskName: "aaa",
      },
    ],
  };
  handleReceiveKeyWord = () => {
    return (keyWord) => {
      // console.log(keyWord);
      this.state.list.push({
        id: new Date.getTime(),
        taskName: keyWord,
      });
      this.setState({});
    };
  };
  render() {
    return (
      <>
        <div>
          <h1>待办列表</h1>
          <Ipt onReceiveKeyWord={this.handleReceiveKeyWord()}></Ipt>
          <List list={this.state.list}></List>
        </div>
      </>
    );
  }
}
export default Todo;
