import React, { useRef } from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import Types from '../../../type'
const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
  float:'left',
  width:'50%'
}
const Card = ({ text, isDragging, connectDragSource, connectDropTarget,isOver }) => {
  const opacity = isDragging ? 0 : 1
  const borderBottom = isOver ? '1px solid red' : '1px dashed gray'
  const ref = useRef(null)
  connectDragSource(ref)
  connectDropTarget(ref)
  return (
    <div ref={ref} style={{ ...style, opacity,borderBottom }}>
      {text}
    </div>
  )
}
export default DropTarget(
  Types.CARD,
  {
    canDrop: () => false,
    hover(props, monitor) {
      const { id: draggedId } = monitor.getItem()
      const { id: overId } = props
      if (draggedId !== overId) {
        // const { index: overIndex } = props.findCard(overId)
        // if(!monitor.isDragging){
        //     props.moveCard(draggedId, overIndex)
        // }
      }
    },
    
  },
  (connect,monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }),
)(
  DragSource(
    Types.CARD,
    {
      beginDrag: props => ({
        id: props.id,
        // originalIndex: props.findCard(props.id).index,
      }),
      endDrag(props, monitor) {
        const { id: droppedId, originalIndex } = monitor.getItem()
        const didDrop = monitor.didDrop()
        if (!didDrop) {
          // props.moveCard(droppedId, originalIndex)
        }
      },
    },
    (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    }),
  )(Card),
)
