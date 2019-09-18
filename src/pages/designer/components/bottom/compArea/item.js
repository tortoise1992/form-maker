import React, { useRef } from 'react'
import { DragSource } from 'react-dnd'
import Types from '../../../type'
import { Icon } from 'antd'
const icon = {
    'TEXT': 'file-text',
    'INPUT': 'edit',
    'TEXTAREA': 'form'
}
const Card = ({ item, connectDragSource }) => {
    const ref = useRef(null)
    connectDragSource(ref)
    return (
        <div ref={ref} className='item' >
            <Icon type={icon[item.value]} className='icon'></Icon>
            <div className='text'>{item.name}</div>
        </div>
    )
}
export default DragSource(
    Types.CARD,
    {
        beginDrag: props => {
            return {
                type: props.item.value,
                tag: 'add'
            }
        },
        endDrag(props, monitor) {

        },
    },
    (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }),
)(Card)

