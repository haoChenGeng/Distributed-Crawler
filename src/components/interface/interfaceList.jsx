import React from 'react';
import { Table, Icon, Row, Col, Card } from 'antd';
// import BasicTable from '../tables/BasicTable';

const columns = [{
  title: '接口名称',
  dataIndex: 'name',
  key: 'name',
  render: text => <a>{text}</a>,
}, {
  title: '接口URL',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '接口请求方法',
  dataIndex: 'address',
  key: 'address',
}, {
  title: '接口后台爬虫UUID',
  dataIndex: 'crawler',
  key: 'crawler',
  // render: (text, record) => {text},
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  crawler: 'xxxx-xxxx',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  crawler: 'xxxx-xxxx',  
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  crawler: 'xxxx-xxxx'  
}];

const InterfaceList = () => (
  <div className="gutter-example">
    <Row gutter={16}>
      <Col className="gutter-row" md={24}>
        <div className="gutter-box">
          <Card title="接口列表" >
            <Table dataSource={data} columns={columns} />
          </Card>
        </div>
      </Col>
    </Row>
  </div>
)

export default InterfaceList;
