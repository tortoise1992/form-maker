import React from 'react'
import { Card } from 'antd'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Designer from './components/bottom/container'
import CompArea from './components/bottom/compArea'
import PropArea from './components/bottom/propArea'
import './index.less'
export default ()=> {
    return (
        <Card title='表单设计器'>
            <DndProvider backend={HTML5Backend}>
                <div className='designer'>
                    <CompArea/>
                    <Designer />
                    <PropArea/>
                </div>                
			</DndProvider>
        </Card>
    )
}
