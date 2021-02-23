import React ,{Component} from 'react'
import DataChild from './components/DataChild'

class DataMount extends Component{
  render(){
    return(
      <>
      <div>父组件</div>
      <DataChild title="主题">
        <div>slot</div>
      </DataChild>
      </>
    )
  }
}
export default DataMount