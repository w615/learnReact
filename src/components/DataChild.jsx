import React ,{Component} from 'react'
// 类组件
// class DataChild extends Component{
//   // 静态属性
//   // static defaultProps = {
//   //   title:"default value "
//   // }
//   render(){
//     return(
//       <>
//       <div>子组件:{this.props.title}</div>
      
//       </>
//     )
//   }
// }
// DataChild.defaultProps ={
//   title:"default value "
// }
// 函数式组件  无状态组件
export default (props)=>{
  return(
    <>
    <div>Child:{props.title}--{props.name}</div>
    {props.children}
    </>
  )
}

// export default DataChild