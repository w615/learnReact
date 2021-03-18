import React from "react";
import {Link} from 'react-router-dom'

class App extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  handleJump=()=>{
    this.props.history.push('/about')
    }
    
  render() {
    return (
      <div>
        <h1>欢迎来到React的世界</h1>
            {/*Link的使用*/}
            {/*如果是HashRouter  浏览器地址栏输入http://localhost:3000/#/login#/即可跳转到登录页 */}
            <Link to="/new">点击跳转到新闻页</Link>
            <br/>
            <Link to="/profile">点击跳转到个人中心面</Link>
            <p> <Link to="/detail">点击跳转到详情中心面</Link></p>
            <p> <Link to="/login">点击跳转到登录面</Link></p>
            <br/>
            <button onClick={this.handleJump}>跳转到关于</button>
      </div>
    );
  }
  // constructor()
  // supper()
}
export default App;
