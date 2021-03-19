import React from 'react'
import 'antd/dist/antd.css'
import{Input,Button,List} from 'antd'
import store from 'Redux/store/index'

export default class Dolist extends React.Component{
  constructor(props){
    super(props)
    console.log( store.getState());
    // 1 通过store(reducer)给state 赋值
    this.state = store.getState()
    //4 订阅 并改变状态组件   store <=>  组件数据变化
    store.subscribe(this.storeChange.bind(this))
  }
  storeChange(){
    this.setState(store.getState)
  }
  //2 处理输入事件
  handleInputChange =(event)=>{
    let val = event.target.value;
    console.log(val);
    const action = {
      type:'inputChange',
      value:val
    }
    // 3 接收到了 input 传递给 reducer
    store.dispatch(action)
  }
  // 5 dispatch 处理按钮事件
  handAdd = ()=>{
    const action  = {type:'additem'}
    store.dispatch(action)
  }
  // 6 删除事件 带参数传入antion
  deleteItem(index){
    const action = {type:'deleteItem',index}
    store.dispatch(action)
  }
  render(){
    return <>
      <div>
        <Input
          placeholder = {this.state.placeHolder}
          style={{width:"250px"}}
          onChange = {this.handleInputChange}
          value = {this.state.inputValue}/>
        <Button
          className = {'button'}
          type={'primary'}
          onClick = {this.handleAdd}
        >添加任务</Button>
      </div>
      <div className={'list'}>
        <List
          bordered
          dataSource = {this.state.list}
          renderItem ={(item,index)=>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Iten>)}
        />
      </div>
    </>
  }
}