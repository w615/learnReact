import React ,{Component,createRef} from 'react'
class Control extends Component{
  constructor(props){
    super(props)
    this.ipt = createRef()
  }
  state={
    textValue:'hello'
  }
  handleChange(e){
    this.setState({
      textValue:e.target.value
    })
    // console.log(this.state.textValue);
  }
  render(){
    return( 
      // 受控组件 定义了属性就可能会被控制
      // <input type="text"  value={this.state.textValue}  onChange = {this.handleChange.bind(this)}/>
      // 非受控组件 
    <input type="text" onInput = {this.handleChange.bind(this)} ref ={this.ipt}/>
    )
  }
  componentDidMount(){
    setTimeout(() => {
      console.log(this.state.textValue);
    }, 5000);
  }
}
export default Control