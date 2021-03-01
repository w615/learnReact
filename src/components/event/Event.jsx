import React,{Component} from 'react'
class Event extends Component{
  // 绑定this 一次
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  state = {
    count:0,
  }
  // handleClick(data){
  //   console.log(this);
  //   console.log('事件'+data+ this.state.count);
  // }
    handleClick = (args)=>{
      return (event)=>{
        console.log(event.target);
        console.log(args)
        console.log(this);;}
    }
  render(){
    return (
      <>
      {/* <button onClick = {this.handleClick}>事件</button>  不传参的 */}
      {/* 函数柯里化 */}
      {/* <button onClick = {()=>{this.handleClick('xxx')}}>事件</button>  对应第11 行 */}
      <button onClick = {this.handleClick('xxx')}>事件</button> 


      </>
    )
  }
}
export default Event