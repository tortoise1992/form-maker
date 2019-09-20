import React, { Component } from 'react'
import './index.less'
import Item from './item'
import {Collapse} from 'antd'
const { Panel } = Collapse
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
                <Collapse defaultActiveKey={['1']} bordered={false}>
                    <Panel header="常规组件" key="1">
                        <div className='wrapper'>
                            {
                                this.state.typeList.map((item,index)=>{
                                    return <Item item={item} key={index}/>
                                })
                            } 
                        </div>                         
                    </Panel>
                    {/* <Panel header="栅格组件" key="2">
                        <div className='wrapper'>
                            <Item 
                                item={{
                                    name:'栅格',
                                    value:'ROWS'
                                }}
                            />
                        </div>                        
                    </Panel>                     */}
                </Collapse>
                              
            </div>
        )
    }
}
