import React, { Component } from 'react'
import { DropTarget } from 'react-dnd';
import Types from '../../../type'
import Item from './item'
import './index.less'
class Index extends Component {   
    state={
        hoverId:''
    } 
    getCurrent=(id)=>{
        this.setState({
            hoverId:id
        })
        console.log('触发了拖拽',id)
    }
    render() {
        const { connectDropTarget,compList } = this.props
        return connectDropTarget(
            <div className='designer-container'>
                {
                    compList.map((item, index) => <Item hoverId={this.state.hoverId} getCurrent={this.getCurrent} key={index} item={item}></Item>)
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
                component.setState({
                    hoverId:''
                })
                component.props.addComp(dragData.type)
            }
        },
    },
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget()
    }),
)(Index)
