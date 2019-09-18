import React from 'react'
import { Card } from 'antd'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Designer from './components/bottom/containerArea'
import CompArea from './components/bottom/compArea'
import PropArea from './components/bottom/propArea'
import Config from './config'
import './index.less'
export default class Index extends React.Component {
    state={
        compList:[],
        currentComp:null
    }
    /**
     *根据传值type添加不同的类型，index确定插入的位置     *
     * @memberof Index
     */
    addComp=(type,index)=>{

    }
    /**
     *删除某个组件     *
     * @memberof Index
     */
    deleteComp=()=>{

    }
    /**
     *更新某个组件对应的属性值     *
     * @memberof Index
     */
    updateComp=()=>{

    }
    render(){
        const {compList,currentComp}=this.state
        return (
            <Card title='表单设计器'>
                <DndProvider backend={HTML5Backend}>
                    <div className='designer'>
                        <CompArea/>
                        <Designer 
                            compList={compList}
                            currentComp={compList}
                        />
                        <PropArea
                            compList={compList}
                            currentComp={compList}
                        />
                    </div>                
                </DndProvider>
            </Card>
        )
    }
}
