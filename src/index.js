import React from "react";
import ReactDOM from "react-dom";
import Todo from "./Todolist/Todolist";
// 引入路由
import Router from './router'
// import Parent from "./components/props/Stateparent";
// // 引入表单组件
// import Form from "./components/from/From";
// 引入受控组件
// import Control from "./components/controlComponent/Control";
// import SetData from "./components/RenderData/RenderData";
// import Event from "./components/event/Event";
// import { Example, ClassStyle } from "./clsaaStyle";
// import DataMount from "./DataMouted";

// import State from "./State";
// import App from './app'
// const app =<div>nihao </div>
// 函数式组件
// const App = (props)=> {
//   return  <div><h1>小婷{props.title}</h1> </div>
// }
// 类组件
// class App extends React.Component {
//   render() {
//     return (
//       <div> 未来 你好 {this.props.title}</div>
//     )
//   }
// }

// class Title extends React.Component {
//   render() {
//     return (
//       <>
//         <div>我是标题</div>
//         {this.props.data}
//       </>
//     );
//   }
// }

// class Article extends React.Component {
//   render() {
//     return <div>我是内容</div>;
//   }
// }
// const app = new App()      app.render()
ReactDOM.render(
  // <div>hellow</div>,
  // app(' is beautiful'),
  // <App title=' is so beautiful'></App>,
  // <App/>,
  <>
    <Router/>
    {/* <Todo></Todo> */}
    {/* <Form></Form> */}
    {/* <Event></Event> */}
    {/* <Parent></Parent> */}
    {/* <Control></Control>
    <SetData></SetData> */}
    {/* <State></State>
    <DataMount></DataMount>
    <Title data="2021"></Title>
    <Article></Article>
    <ClassStyle></ClassStyle>
    <Example></Example> */}
  </>,
  document.querySelector("#root")
);
