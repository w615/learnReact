import React,{Component} from 'react'
import Son from './Son'
import Girl from './Girl'
class Parent extends Component{
  state = {
    data:''
  }
  
  handReceiveData(data){
    this.setState({
      data
    })
    console.log('接受信息'+ data);
  }
  render() {
    return (
      <>
      <div>
        父组件
      </div>
      <Son onReceiveData={this.handReceiveData.bind(this)}></Son>
      <Girl data={this.state.data}></Girl>
      </>
    )
  }
}
export default  Parent