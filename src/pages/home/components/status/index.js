import React, { Component } from 'react'
import { Card } from 'antd'
import {BarChart} from '@/components/Echarts'
export default class Index extends Component {
    render() {
        return (
            <Card title='状态' style={{marginBottom:20}}>
                <BarChart/>
            </Card>
        )
    }
}
