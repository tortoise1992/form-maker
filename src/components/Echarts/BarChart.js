import React, { Component } from 'react'
import BaseChart from './base'
// import {merge} from 'lodash'
export default class PieChart extends Component {
    state={
        chartdata:[]
    }
    componentDidMount() {
        let data=[
            {
                name:'衬衫',
                value:30
            },
            {
                name:'裤子',
                value:50
            }
        ]
        this.setState({
            chartdata:data
        })
    }    
    render() {
        let {chartdata}=this.state
        let option={
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: chartdata.map(item=>item.name)
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: chartdata.map(item=>item.value)
            }]
        }
        return <BaseChart height={this.props.height} option={option}/>
    }
}
