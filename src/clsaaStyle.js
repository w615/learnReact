import React,{Component,useState} from 'react';
import classNames from 'classnames/bind';
import DivContainer  from  './styleCss.js';
import styles from './style.css';

let cx = classNames.bind(styles);
// 动态添加css
// const styles = {
//   color:'red',
//   fontSize:'100px'

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
 class ClassStyle extends Component {
  render () {
    // js逻辑
    let className = cx({
      font:true,
    })
    return (
      // <div style = { {fontSize: '50px'} ,styles}>王</div>
      // <div className={'font'}>王</div>
      <>
       <div className={className}>王</div>
       <DivContainer>东</DivContainer>   
        <div>东</div>
        </>
    )
  }
}
export  {
  Example,
  ClassStyle

}
