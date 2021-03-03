import React,{Component} from 'react'

class Form extends Component{
  state ={
    textValue:''
  }
  handleChange = ()=>{
    return (e)=>{
      this.setState({
      textValue : e.target.value
      })
      
      console.log(this.state.textValue);
    }
  }
  handleSubmit= ()=>{
    return (e)=>{
      e.preventDefault()
    }
  }
  render(){
    return( 
      <>
      <form onSubmit={this.handleSubmit()} >
        <input type="text" value={ this.state.textValue} onChange = {this.handleChange()}/>
        <input type="submit" value="提交"/>
      </form>
      </>
    )
  }
}
export default Form