import React from 'react'
import ReactDOM  from 'react-dom'

import { Example,ClassStyle} from './clsaaStyle'
import DataMount from './DataMouted'

// import App from './app'
// const app =<div>nihao </div>
// 函数式组件
// const App = (props)=> {
//   return  <div><h1>叶小婷{props.title}</h1> </div>
// }
// 类组件
// class App extends React.Component {
//   render() {
//     return (
//       <div> 未来 你好 {this.props.title}</div>
//     )
//   }
// }

class Title extends React.Component {
  render() {
    return (
      <div>我是标题</div>
    )
  }
}

class Article extends React.Component {
  render() {
    return (
      <div>我是内容</div>
    )
  }
}
// const app = new App()      app.render()
ReactDOM.render(
  // <div>hellow</div>,
  // app(' is beautiful'),
  // <App title=' is so beautiful'></App>,
  // <App/>,
  <>
  <DataMount></DataMount>
  <Title></Title>
  <Article></Article>
  <ClassStyle></ClassStyle>
  <Example></Example>
  </>,
  document.querySelector('#root')
)

