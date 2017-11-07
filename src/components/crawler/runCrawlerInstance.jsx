import React from 'react';
import { Table, Row, Col, Card, Modal } from 'antd';

class CrawlerInstanceTable extends React.Component {
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
      title: '实例ID',
      dataIndex: 'workerId',
      key: 'workerId',
      render: (text, record, index) => { return text; },
    }, {
      title: '运行状态',
      dataIndex: 'systemIp',
      key: 'systemIp',
      width: '10%',
      render: (text, record, index) => { return text },
    }, {
      title: '总线程数',
      dataIndex: 'contextPath',
      key: 'contextPath',
      width: '15%',
      render: (text, record, index) => { return text },
    }, {
      title: '运行线程数',
      dataIndex: 'workerType',
      key: 'workerType',
      width: '10%',
      render: (text, record, index) => { return text },
    }, {
      title: '链接请求数',
      dataIndex: 'status',
      key: 'status',
      width: '10%',
      render: (text, record, index) => { return text },
    }, {
      title: '启动时间',
      dataIndex: 'startTime',
      key: 'startTime',
      width: '15%',
      render: (text, record, index) => { return text },
    }, {
      title: '上次心跳时间',
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
              <a className="table-action" onClick={() => this.showInstanceDetail(record)}>查看</a>
            </span>
          </div>
        );
      },
    }];
  }
  showInstanceDetail(record) {
    // console.log(record);
    Modal.info({
      title: 'Worker详情',
      content: (
        <div className="modal-list">
          <p>实例ID{record.workerId}</p>
          <p>运行状态：{record.systemIp}</p>
          <p>总线程数：{record.contextPath}</p>
          <p>运行线程数：{record.workerType}</p>
          <p>上次心跳时间：{record.lastHeartbeatTime}</p>
          <p>启动时间：{record.startTime}</p>
          <p>结束时间：{record.systemHost}</p>
          <p>WorkerID：{record.runSystem}</p>
          <p>链接请求总数：{record.status}</p>
          <p>爬取成功数：{record.workerId}</p>
          <p>爬取失败数：{record.workerId}</p>
        </div>
      ),
      okText: '确定'
    })
  }
  render() {
    const data = this.worker.result;
    const dataSource = data.map((item) => {
      item['key'] = item.workerId;
      return item;
    })
    return (
      <Row gutter={16}>
        <Col className="gutter-row" md={24}>
          <div className="gutter-box">
            <Card title="运行实例">
              <Table dataSource={dataSource} columns={this.columns} />
            </Card>
          </div>
        </Col>
      </Row>
    )
  }
}

const CrawlerInstance = () => (
  <div className="gutter-example">
    <Row gutter={16}>
      <Col className="gutter-row" md={24}>
        <div className="gutter-box">
          <CrawlerInstanceTable />
        </div>
      </Col>
    </Row>
  </div>
)

export default CrawlerInstance;
