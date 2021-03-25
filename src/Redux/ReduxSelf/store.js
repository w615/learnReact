import {state,changeState} from './reducer'


const createStore= ()=>{
//   获取状态 getState
const getState = ()=>{
  return state
}

// dom  渲染的发布订阅 观察者模式
const listeners =[]  
const subScribe = (fun)=>{
    
}

  const dispatch = (action)=>{ 
    changeState(action)
    render(state)
  }
  return { 
    dispatch,
    getState,
  }
}




   const render = (state)=>{
    document.querySelector("#count").innerHTML = state.count
  }
const store =createStore()

export default store



