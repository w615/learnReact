import React ,{Component} from 'react'
// 引入高阶组件
import hoc  from './hoc'

class Hello extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//       username:''
//     }
//   }
//   componentWillMount(){
//     this.setState({
//       username="汪咚床"
//     })

// } 
render(){
    return(
        <>
          <div>Hello{this.state.username}</div>
        </>
    )
  }
}
export default hoc(Hello)