import React,{Component} from "react"


// 定义状态的方法有两种 ，一种是构造函数  一种是属性
export default class State extends Component{

  constructor(props){
    // super  调用父类构造函数
    super(props)
    this.state = {name:"定义内部状态"}
  }
  render(){
    return(
      <div >state：{this.state.name}</div>
    )
  }
}