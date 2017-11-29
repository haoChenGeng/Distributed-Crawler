import React from 'react';
import { Table, Row, Col, Card, Modal, Tabs, Input, Select, Button, Icon } from 'antd';
const TabPane = Tabs.TabPane;
const Option = Select.Option;
const InputGroup = Input.Group;

class InterfaceCallList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      interfaceModalVisible: false,
      interfaceDetail: {}
    }
    this.worker = {
      "pagination": {
        "pages": 10,
        "total": 104,
        "pageSize": 10,
        "pageNum": 2
      },
      "result": [
        {
          "workerId": "12-34",
          "runSystem": "Windows",
          "systemIp": "10.8.23.1",
          "contextPath": "xxx/test",
          "workerType": "通用爬虫1",
          "systemHost": "CRAWLER-1",
          "startTime": "2017-10-10 10:11:11",
          "lastHeartbeatTime": "2017-10-10 10:11:11",
          "status": "运行"
        }, {
          "workerId": "56-78",
          "runSystem": "Windows",
          "systemIp": "10.8.23.1",
          "contextPath": "xxx/test",
          "workerType": "通用爬虫2",
          "systemHost": "CRAWLER-1",
          "startTime": "2017-10-10 10:11:11",
          "lastHeartbeatTime": "2017-10-10 10:11:11",
          "status": "运行"
        }
      ]
    }
    this.columns = [{
      title: '查询ID',
      dataIndex: 'workerId',
      key: 'workerId',
      render: (text,record,index) => { return text;},
    },{
      title: 'App Key',
      dataIndex: 'systemIp',
      key: 'systemIp',
      width: '10%',
      render: (text, record, index) => { return text },
    }, {
      title: '接口名称',
      dataIndex: 'contextPath',
      key: 'contextPath',
      width: '15%',
      render: (text, record, index) => { return text },
    }, {
      title: '客户端IP',
      dataIndex: 'workerType',
      key: 'workerType',
      width: '10%',
      render: (text, record, index) => { return text },
    },{
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: '10%',
      render: (text, record, index) => { return text },
    },{
      title: '创建时间',
      dataIndex: 'startTime',
      key: 'startTime',
      width: '15%',
      render: (text, record, index) => { return text },
    },{
      title: '完成时间',
      dataIndex: 'lastHeartbeatTime',
      key: 'lastHeartbeatTime',
      width: '15%',
      render: (text, record, index) => { return text },
    },{
      title: '是否同步调用',
      dataIndex: 'runSystem',
      key: 'runSystem',
      width: '10%',
      render: (text, record, index) => { return text },
    },{
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: (text, record, index) => {
        return (
          <div className="editable-row-operations">
            <span>
              <a className="table-action" onClick={() => this.showWorkerDetail(record)}>查看</a>
            </span>
          </div>
        );
      },
    }];    
  } 

  
  handle(e) {
    console.log(e.target.value);
    console.log(e);
    this.setState({
      searchValue: e.target.value
    })
  }
  searchInterfaceCallTable(e) {
console.log(e);
  }
  showWorkerDetail(record) {
    this.setState({
      interfaceModalVisible: true,
      interfaceDetail: record
    })
console.log(record);
  }
  closeInterfaceModal(e) {
    this.setState({
      interfaceModalVisible: false
    })
  }
  render() {
    const data = this.worker.result;
    const dataSource = data.map((item) => {
      item['key'] = item.workerId;
      return item;
    })
    const { searchValue } = this.state;
    const suffix = searchValue ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    const { interfaceDetail } = this.state;
    return ( 
      <Row gutter={16}>
        <Col className="gutter-row" md={24}>
          <div className="gutter-box">
            <Card>
              <InputGroup compact>
                <Select defaultValue="searchId" size="large">
                  <Option value="searchId">查询ID</Option>
                  <Option value="searchKey">App Key</Option>
                  <Option value="searchName">接口名称</Option >
                </Select>
                <Input style={{ width: '25%' }} size="large" defaultValue="请输入搜索内容" value={searchValue} ref="123" suffix={suffix} onChange={this.handle.bind(this)} /><Button type="primary" size="large"  style={{ backgroundColor: '#49a9ee',border: '#49a9ee' }}>搜索</Button>
              </InputGroup>
              <Tabs type="card" style={{ marginTop: '10px' }} onChange={this.searchInterfaceCallTable} >
                <TabPane tab="所有" key="1">
                  <Table dataSource={dataSource} columns={this.columns} />
                </TabPane>
                <TabPane tab="成功" key="2">
                  <Table dataSource={dataSource} columns={this.columns} />
                </TabPane>
                <TabPane tab="回调失败" key="3">
                  <Table dataSource={dataSource} columns={this.columns} />                  
                </TabPane>
                <TabPane tab="爬虫失败" key="4">
                  <Table dataSource={dataSource} columns={this.columns} />
                </TabPane>
              </Tabs>
            </Card>
          </div>
        </Col>
        <Modal title="接口调用详情" visible={this.state.interfaceModalVisible}
          footer={null}
          onCancel={this.closeInterfaceModal.bind(this)}
          className="interface-modal"
        >
          <Row className="interface-row">
            <p className="modal-module">基本信息</p>
            <Col md={12}>
              <p className="modal-name">查询ID: </p><span>{interfaceDetail.workerId}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">App Key: </p><span>{interfaceDetail.runSystem}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">请求号: </p><span>{interfaceDetail.status}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">请求方法: </p><span>{interfaceDetail.systemHost}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">查询接口: </p><span>{interfaceDetail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">客户端IP: </p><span>{interfaceDetail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">状态: </p><span>{interfaceDetail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">创建时间: </p><span>{interfaceDetail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">完成时间: </p><span>{interfaceDetail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">是否同步调用: </p><span>{interfaceDetail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">请求头: </p><span>{interfaceDetail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">是否需要回调: </p><span>{interfaceDetail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">请求数据: </p><span>{interfaceDetail.systemIp}</span>
            </Col>
            <Col md={24}>
              <p className="modal-module">回调信息</p>            
            </Col>
            <Col md={12}>
              <p className="modal-name">回调URL: </p><span>{interfaceDetail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">回调数据: </p><span>{interfaceDetail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">回调重试次数: </p><span>{interfaceDetail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">上次回调状态: </p><span>{interfaceDetail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">上次回调时间: </p><span>{interfaceDetail.systemIp}</span>
            </Col>
          </Row>
        </Modal>
      </Row>
    )
  }
}

export default InterfaceCallList;