/**
 * 
 * Routes:
 *   - ./src/routes/PrivateRoute.js 
 */
import React, { Component,Fragment } from 'react'
import { Card,Row,Col } from 'antd'
import Status from './components/status'
import OverView from './components/overview'
import SoftWare from './components/software'
import Flow from './components/flow'
export default class Home extends Component {  
  render() {
    return (
      <Fragment>
        <Status/>
        <OverView/>
        <Row gutter={20}>
          <Col span={12}>
            <Card title='软件'>
              <SoftWare/>
            </Card>
          </Col>
          <Col span={12}>
            <Card title='流量'>
              <Flow/>
            </Card>            
          </Col>
        </Row>
      </Fragment>
    )
  }
}
