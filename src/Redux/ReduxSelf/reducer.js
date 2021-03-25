let state ={
  count:0
}
const changeState = (action)=>{
  action = action || { type:''}
  switch(action.type){
    case 'COUNT_DECREMENT':
    state.count --;
    break;
    case 'COUNT_INCREMENT':
    state.count ++
    break;
    default:
    break;
  }
}
export {
  state,
  changeState
}