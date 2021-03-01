import React from 'react'
// son  把信息传递给 parent  再传递给GIRL 状态提升

export default (props)=>{

return(
  <div style={{cursor:'pointer'}} onClick={props.onReceiveData.bind(this,'hello')}>Son组件</div>
)
}