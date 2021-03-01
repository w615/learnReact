import React,{Component} from 'react'

const data = '<h1>放大</h1>'
class SetData extends Component{
  render(){
    return(
      <div
      dangerouslySetInnerHTML={{__html:data}}
      ></div>
    )
  }
}
export default SetData