
import React from 'react'
// useParams：获取参数（内部封装）
// useHistory：通过js api操作路由跳转
import {useParams,useHistory} from "react-router-dom";
export default class Detail extends React.Component{

  render() {
      return <div className="container">
          <h1>this is detail</h1>
      </div>
  }
}

