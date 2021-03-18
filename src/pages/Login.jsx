import React,{useState,useEffect} from 'react'
// useState： 解决状态问题

// useEffect：类似生命周期,didmount 和 didupdate中执行 修改app.js
export default function Login() {
//useState,效果与有状态组件state={}相同
const [count,setCount] = useState(10)
useEffect(()=>{
  console.log("执行了useEffect");
  setCount(100)
},[])


    return <>
          <div>This is 登陆界面</div>
          <p>
                  当前count次数:{count}
          </p>
          <button  onClick={()=>setCount(count+1)}> 更新次数</button>
          </>
}