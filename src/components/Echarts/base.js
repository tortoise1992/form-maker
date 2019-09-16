import React, { Component } from 'react'
import echarts from 'echarts'
import {merge} from 'lodash'
export default class BaseEchart extends Component{
    state={
        chartId:'',
        chartIns:null,
        baseOption:null
    }
    componentDidMount() {
        let chartId=new Date().getTime+Math.random()
        let chartIns=echarts.init(this.node)
        this.setState({
            chartId,
            chartIns
        },()=>{
            this.setChart()
        })
    }
    
    componentDidUpdate(prevProps) {
        if(JSON.stringify(this.props) !== JSON.stringify(prevProps)){
            this.setChart()
        }        
    }
    setChart=()=>{
        if(this.state.chartIns){
            let option=merge(this.state.baseOption,this.props.option)
            this.state.chartIns.setOption(option)
        }
    }
    render(){
        const {chartId}=this.state
        let defaultHeight=this.props.height || 350
        return (
            <div id={chartId} ref={node=>this.node=node} style={{height:defaultHeight}}></div>
        )
    }
}