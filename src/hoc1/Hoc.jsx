import React,{Component} from 'react'
export default const hoc = (Comp)=>{
  return class extends Component{
    constructor(psops){
      super(props)
      this.state = {
        username:''
      }
    }
    componentWillMount(){
      this.setState({
        username="汪咚床"
      })
    render(){
      return (
        <Comp username = {this.state.username}></Comp>
      )
    }
  }
}
