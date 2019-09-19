import React, { Component } from 'react'
import { DropTarget } from 'react-dnd';
import Types from '../../../type'
import Item from './item'
import './index.less'
class Index extends Component {    
    render() {
        const { connectDropTarget,compList } = this.props
        return connectDropTarget(
            <div className='designer-container'>
                {
                    compList.map((item, index) => <Item key={index} item={item}></Item>)
                }
            </div>
        )
    }
}

export default DropTarget(
    Types.CARD,
    {
        drop(props, monitor, component) {            
            let dragData = monitor.getItem()
            if(dragData.tag && dragData.tag === 'add'){
                component.props.addComp(dragData.type)
            }
        },
    },
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget()
    }),
)(Index)
