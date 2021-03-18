// import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

import React from 'react'
import About from './pages/About'
import New from './pages/New'
import Profile from './pages/Profile'
import NoMatch from './pages/NoMatch'
import Detail from './pages/Detail'
import App from './App'
import Login from './pages/Login'
export default function IRouter(){
    return  <Router>
            {/*普通方式，根据path匹配,但是App的内容会出现在Login上方 ->图1所示*/}
            {/*<Route path = "/" component={App}></Route>*/}
            {/*<Route path = "/login" component={Login}></Route>*/}
            {/*<Route path = "/home" component={Home}></Route>*/}
        {/*如果用swithc，浏览器输入/home也只会加载App页，因为/home先匹配了/*/}
        {/*加上 exact 可以精准匹配 ->图2所示*/}
        {/*如果导入的是HashRouter，会自动加上# 如 http://localhost:3000/login#/ ->图3所示*/}
        <Switch>
            <Route  exact  path='/'  component={App}></Route>
            <Route  path = "/login"  component={Login}></Route>
            <Route  path='/detail/:goodsId'   component={Detail}></Route>
            <Route path = "/detail/:goodsId" component={Detail}>
                <Redirect to={'/login'}/>
            </Route>
            <Route path = "/about"  component={About}></Route>
            <Route path = "/new"     component={New}></Route>
            <Route path = "/profile" component={Profile}></Route>
            <Route path = "*"         component={NoMatch}/>
        </Switch>
    </Router>
}
