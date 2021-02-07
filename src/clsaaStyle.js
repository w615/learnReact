import React,{Component} from 'react'
import './style.css'
// 动态添加css
const styles = {
  color:'red',
  fontSize:'100px'
}
class ClassStyle extends Component {
  render () {
    return (
      // <div style = { {fontSize: '50px'} ,styles}>王</div>
      <div className={'font'}>王</div>
    )
  }
}
export default ClassStyle