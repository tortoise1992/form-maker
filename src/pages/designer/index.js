import React from 'react'
import { Card,message } from 'antd'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import ContainerArea from './components/bottom/containerArea'
import CompArea from './components/bottom/compArea'
import PropArea from './components/bottom/propArea'
import Config from './config'
import './index.less'
import config from './config'
export default class Index extends React.Component {
    state={
        compList:[],
        currentComp:null
    }
    /**
     *挂载的时候先请求之前设计的表单     *
     * @memberof Index
     */
    componentDidMount() {
        
    }
    
    /**
     *根据传值type添加不同的类型，index确定插入的位置     *
     * @memberof Index
     */
    addComp=(type,index)=>{
        if(config[type]){
            let newList=[...this.state.compList,config[type]]
            this.setState({
                compList:newList
            })
        }else{
            message.info('组件开发中')
        }        
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
                        <ContainerArea 
                            compList={compList}
                            currentComp={compList}
                            addComp={this.addComp}
                        />
                        {/* <PropArea
                            compList={compList}
                            currentComp={compList}
                        /> */}
                    </div>                
                </DndProvider>
            </Card>
        )
    }
}
