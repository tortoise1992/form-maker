import React, { Component } from 'react'
import { DropTarget } from 'react-dnd';
import Types from '../../../type'
class Index extends Component {
  render() {
    const { connectDropTarget } = this.props
    return connectDropTarget(
      <div className='designer-container' style={{height:500,width:500}}>

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
