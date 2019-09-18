import React, { Component } from 'react'
import { DropTarget } from 'react-dnd';
import Types from '../../../type'
import Item from './item'
import './index.less'
class Index extends Component {
  state={
    list:['hahahah','dajdkaj','dhadadjakjhdahkdhakh','dhahdakhdhkahkd']
  }
  render() {
    const { connectDropTarget } = this.props
    return connectDropTarget(
      <div className='designer-container'>
        {
          this.state.list.map((item,index)=><Item key={index} text={item}></Item>)
        }
      </div>
    )
  }
}

export default DropTarget(
  Types.CARD,
  {    
    drop(props, monitor, component) {
      console.log(component)
      let dragData = monitor.getItem()      
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  }),
)(Index)
