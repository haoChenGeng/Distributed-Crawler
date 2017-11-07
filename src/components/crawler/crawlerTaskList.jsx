import React from 'react';
import { Table, Row, Col, Card, Modal, Tabs, Input, Select, Button, Icon, Progress } from 'antd';

const TabPane = Tabs.TabPane;
const Option = Select.Option;
const InputGroup = Input.Group;

class CrawlerTaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      Visible: false,
      Detail: {}
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
      title: '任务ID',
      dataIndex: 'workerId',
      key: 'workerId',
      render: (text, record, index) => { return text; },
    }, {
      title: '查询ID',
      dataIndex: 'systemIp',
      key: 'systemIp',
      width: '10%',
      render: (text, record, index) => { return text },
    }, {
      title: '重试次数',
      dataIndex: 'contextPath',
      key: 'contextPath',
      width: '15%',
      render: (text, record, index) => { return text },
    },  {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: '10%',
      render: (text, record, index) => { return text },
    },{
      title: '上次运行时间',
      dataIndex: 'startTime',
      key: 'startTime',
      width: '15%',
      render: (text, record, index) => { return text },
    }, {
      title: '创建时间',
      dataIndex: 'lastHeartbeatTime',
      key: 'lastHeartbeatTime',
      width: '15%',
      render: (text, record, index) => { return text },
    }, {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      render: (text, record, index) => {
        return (
          <div className="editable-row-operations">
            <span>
              <a className="table-action" onClick={() => this.showDetail(record)}>查看</a>
            </span>
          </div>
        );
      },
    }];
  }
  searchTable(e) {
    console.log(e);
  }
  showDetail(record) {
    this.setState({
      Visible: true,
      Detail: record
    })
    console.log(record);
  }
  closeModal(e) {
    this.setState({
      Visible: false
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
    const { Detail } = this.state;
    return (
      <Row gutter={16}>
        <Col className="gutter-row" md={24}>
          <div className="gutter-box">
            <Card>
              <h3 className="task-detail">爬虫UUID</h3>
              <p className="task-content">123</p>
              <h3 className="task-detail">任务队列</h3>
              <p className="realtime-progress">实时队列 <Progress percent={30} strokeWidth={12} /><span className="task-count">1800/1000</span></p>
              <p className="default-progress">默认队列<Progress percent={50} strokeWidth={12} /><span className="task-count">1800/1000</span></p>
              <p className="offline-progress">离线队列<Progress percent={70} strokeWidth={12} /><span className="task-count">1800/1000</span></p>
              <h3 className="task-detail">任务详情</h3>
              <InputGroup compact>
                <Select defaultValue="searchId" size="large">
                  <Option value="searchId">查询ID</Option>
                  <Option value="searchKey">任务ID</Option>
                  {/* <Option value="searchName">接口名称</Option > */}
                </Select>
                <Input style={{ width: '25%' }} size="large" defaultValue="请输入搜索内容" suffix={suffix} value={searchValue} /><Button type="primary" size="large" style={{ backgroundColor: '#49a9ee', border: '#49a9ee' }}>搜索</Button>
              </InputGroup>
              <Tabs type="card" style={{ marginTop: '10px' }} onChange={this.searchTable} >
                <TabPane tab="所有" key="1">
                  <Table dataSource={dataSource} columns={this.columns} />
                </TabPane>
                <TabPane tab="成功" key="2">
                  <Table dataSource={dataSource} columns={this.columns} />
                </TabPane>
                <TabPane tab="初始化" key="3">
                  <Table dataSource={dataSource} columns={this.columns} />
                </TabPane>
                <TabPane tab="失败" key="4">
                  <Table dataSource={dataSource} columns={this.columns} />
                </TabPane>
              </Tabs>
            </Card>
          </div>
        </Col>
        <Modal title="接口调用详情" visible={this.state.Visible}
          footer={null}
          onCancel={this.closeModal.bind(this)}
          className="interface-modal"
        >
          <Row className="interface-row">
            <p className="modal-module">基本信息</p>
            <Col md={12}>
              <p className="modal-name">查询ID: </p><span>{Detail.workerId}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">App Key: </p><span>{Detail.runSystem}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">请求号: </p><span>{Detail.status}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">请求方法: </p><span>{Detail.systemHost}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">查询接口: </p><span>{Detail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">客户端IP: </p><span>{Detail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">状态: </p><span>{Detail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">创建时间: </p><span>{Detail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">完成时间: </p><span>{Detail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">是否同步调用: </p><span>{Detail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">请求头: </p><span>{Detail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">是否需要回调: </p><span>{Detail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">请求数据: </p><span>{Detail.systemIp}</span>
            </Col>
            <Col md={24}>
              <p className="modal-module">回调信息</p>
            </Col>
            <Col md={12}>
              <p className="modal-name">回调URL: </p><span>{Detail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">回调数据: </p><span>{Detail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">回调重试次数: </p><span>{Detail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">上次回调状态: </p><span>{Detail.systemIp}</span>
            </Col>
            <Col md={12}>
              <p className="modal-name">上次回调时间: </p><span>{Detail.systemIp}</span>
            </Col>
          </Row>
        </Modal>
      </Row>
    )
  }
}

export default CrawlerTaskList;
