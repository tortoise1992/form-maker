import React, { useRef } from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import Types from '../../../type'
import BaseText from './baseComp/BaseText'
import BaseInput from './baseComp/BaseInput'
import BaseTextarea from './baseComp/BaseTextarea'
import BaseSelect from './baseComp/BaseSelect'
import BaseCheckbox from './baseComp/BaseCheckbox'
import BaseRadio from './baseComp/BaseRadio'
import BaseDate from './baseComp/BaseDate'
import BaseTable from './baseComp/BaseTable'
import {flow} from 'lodash'
const compDict=(props)=>{
    return {
        "TEXT":<BaseText {...props}/>,
        "INPUT":<BaseInput {...props}/>,
        "TEXTAREA":<BaseTextarea {...props}/>,
        "SELECT":<BaseSelect {...props}/>,
        "CHECKBOX":<BaseCheckbox {...props}/>,
        "RADIO":<BaseRadio {...props}/>,
        "DATE":<BaseDate {...props}/>,
        "TABLE":<BaseTable {...props}/>
    }
}
const style = {
    border: '1px dashed gray',
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    backgroundColor: 'white',
    cursor: 'move',
    float: 'left',
    width: '50%'
}
const Card = ({ item, isDragging, connectDragSource, connectDropTarget, isOver }) => {
    const opacity = isDragging ? 0 : 1
    const borderBottom = isOver ? '1px solid red' : '1px dashed gray'    
    let props={
        item
    }
    return connectDragSource(connectDropTarget(
        <div style={{ ...style, opacity, borderBottom }}>
            {compDict(props)[item.type]}
        </div>
    ))
}
export default flow(
    DragSource(Types.CARD,
        {
            beginDrag: props => {
                return {

                }
            },
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
    ),
    DropTarget(Types.CARD,
        {
            canDrop: () => false,
            hover(props, monitor,component) {
                if(props.hoverId !== props.item.id){
                    props.getCurrent(props.item.id)
                }               
               
            },            
        },
        (connect, monitor) => ({
            connectDropTarget: connect.dropTarget(),
            isOver: monitor.isOver()
        }))
)(Card)
