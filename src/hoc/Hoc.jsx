import React from 'react'
// 函数式组件
const hoc = (Comp)=>{
    return class extends React.Component{
      render(){
        return <Comp title="future" {...this.props}> 高阶组件</Comp>
      }
      componentDidMount(){
      console.log(this);
      }
    }
   
    
}
export default  hoc