import React from 'react';
import {  Row, Col, Card } from 'antd';
import WorkerListTable from './workerListTable';

const Worker = () => (
  <div className="gutter-example">    
    <Row gutter={16}>
      <Col className="gutter-row" md={24}>
        <div className="gutter-box">
          <Card title="worker管理" >
            <WorkerListTable />
          </Card>
        </div>
      </Col>
    </Row>
  </div>
)

export default Worker;