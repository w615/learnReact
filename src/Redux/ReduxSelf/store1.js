// 定义一个默认的状态
 export  const defaultState = {
  count :0
}
// 定义一个方法
const changeState = (action)=>{
  action = action || {type:''}
  switch(action.type){
    case 'COUNT_DECREMENT':
    defaultState.count --;
    break;
    case 'COUNT_INCREMENT':
    defaultState.count ++
    break;
    default:
    break;
  }
}
// 渲染dom 的方法
const RenderDom = ()=>{
  let countEl = document.querySelector("#count")
  countEl.innerHTML = defaultState.count
}

// 定义一个dispatch 方法，接收到动作后自动调用
const  dispatch = (action)=>{
  changeState(action)
  RenderDom(defaultState)
}
export  {
  dispatch
}