
import React,{Component} from 'react'
import hoc from './Hoc'
class Cut extends Component{
  render(){
    return <div  msg="组件">参数组件</div>
  }
 componentDidMount(){
  console.log(this,9);
 }
}

export default hoc(Cut)