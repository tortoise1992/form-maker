import React, { Component } from 'react'
import './index.less'
import Item from './item'
export default class Index extends Component {
    state={
        typeList:[{
            name:'纯文本',
            value:'TEXT'
        },{
            name:'单行输入框',
            value:'INPUT'
        },{
            name:'多行输入框',
            value:'TEXTAREA'
        }]
    }
    render() {
        return (
            <div className='designer-comp'>
                {
                    this.state.typeList.map((item,index)=>{
                        return <Item item={item} key={index}/>
                    })
                }                
            </div>
        )
    }
}
