import React from 'react';
import { Table, Icon, Row, Col, Card } from 'antd';
import BasicTable from '../tables/BasicTable';

const AddCrawler = () => (
  <div className="gutter-example">
    <Row gutter={16}>
      <Col className="gutter-row" md={24}>
        <div className="gutter-box">
          <Card title="爬虫列表" >
            <BasicTable />
          </Card>
        </div>
      </Col>
    </Row> 
  </div>
)

export default AddCrawler;
