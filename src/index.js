import React from 'react'
import ReactDOM  from 'react-dom'
// import App from './app'
// const app =<div>nihao </div>
// 函数式组件
// const App = (props)=> {
//   return  <div><h1>叶小婷{props.title}</h1> </div>
// }
// 类组件
class App extends React.Component {
  render() {
    return (
      <div> 未来 你好 {this.props.title}</div>
    )
  }
}

// const app = new App()      app.render()
ReactDOM.render(
  // <div>hellow</div>,
  // app(' is beautiful'),
  <App title=' is so beautiful'></App>,
  // <App/>,
  document.querySelector('#root')
)

