import React, { Component } from "react";
import classNames from "classnames/bind";
import DivContainer from "./styleCss.js";
import styles from "./style.css";

let cx = classNames.bind(styles);
// 动态添加css
// const styles = {
//   color:'red',
//   fontSize:'100px'
// }
class ClassStyle extends Component {
  render() {
    // js逻辑
    let className = cx({
      font: true,
    });
    return (
      // <div style = { {fontSize: '50px'} ,styles}>王</div>
      // <div className={'font'}>王</div>
      <>
        <div className={className}>王</div>
        <DivContainer>东</DivContainer>
        <div>东</div>
      </>
    );
  }
}
export default ClassStyle;
