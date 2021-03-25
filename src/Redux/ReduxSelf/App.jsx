import React,{Component} from'react';
import store from './store'
class App extends Component{
  render(){
    return(
      <>
    <div>
      redux
      <button onClick={ store.dispatch.bind(this,{type:'COUNT_DECREMENT',number:10}) }>-</button>

      <span id="count"></span>
      <button onClick={store.dispatch.bind(this,{type:'COUNT_INCREMENT',number:10}) }>+</button>
    </div>
    </>)
  }
  // 组件渲染完毕之后
  componentDidMount(){
    store.dispatch()
  }
}
export default App