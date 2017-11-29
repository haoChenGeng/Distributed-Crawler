import React from 'react';
import axios from 'axios'
import { Table, Row, Col, Card, Modal } from 'antd';

class CrawlerInstanceTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      interfaceModalVisible: false,
      interfaceDetail: {},
      pagination: {
        "pages": 10,
        "total": 104,
        "pageSize": 10,
        "pageNum": 1
      },
      result: [
        {
          "spiderUUID":"string",
          "instanceId":"string",
          "pageCount":0,
          "successPageCount":0,
          "errorPageCount":0,
          "threadNum":0,
          "runningThreadNum":0,
          "runStat":0,
          "startTime":"2017-09-15 16:22:07",
          "endTime":"2017-09-15 16:22:07",
          "lastHeartbeatTime":"2017-09-15 16:22:08"
        }, {
          "spiderUUID":"42cf1564-8d76-11e7-bb31-be2e44b06b34",
          "instanceId":"42cf1564-8d76-11e7-bb31-be2e44b06b34",
          "pageCount":1,
          "successPageCount":1,
          "errorPageCount":0,
          "threadNum":3,
          "runningThreadNum":0,
          "runStat":1,
          "startTime":"2017-09-20 13:57:40",
          "endTime":"2017-09-20 13:57:40",
          "lastHeartbeatTime":"2017-09-20 14:41:25"
        }
      ]
    }
    this.columns = [{
      title: '实例ID',
      dataIndex: 'instanceId',
      key: 'instanceId',
      render: (text, record, index) => { return text; },
    }, {
      title: '运行状态',
      dataIndex: 'runStat',
      key: 'runStat',
      width: '10%',
      render: (text, record, index) => { return text },
    }, {
      title: '总线程数',
      dataIndex: 'threadNum',
      key: 'threadNum',
      width: '15%',
      render: (text, record, index) => { return text },
    }, {
      title: '运行线程数',
      dataIndex: 'runningThreadNum',
      key: 'runningThreadNum',
      width: '10%',
      render: (text, record, index) => { return text },
    }, {
      title: '链接请求数',
      dataIndex: 'pageCount',
      key: 'pageCount',
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
          <p>实例ID{record.instanceId}</p>
          <p>运行状态：{record.runStat}</p>
          <p>总线程数：{record.threadNum}</p>
          <p>运行线程数：{record.runningThreadNum}</p>
          <p>上次心跳时间：{record.lastHeartbeatTime}</p>
          <p>启动时间：{record.startTime}</p>
          <p>结束时间：{record.endTime}</p>
          <p>spiderUUID：{record.spiderUUID}</p>
          <p>链接请求总数：{record.pageCount}</p>
          <p>爬取成功数：{record.successPageCount}</p>
          <p>爬取失败数：{record.errorPageCount}</p>
        </div>
      ),
      okText: '确定'
    })
  }

  componentDidMount() {
    var pageNum = this.state.pagination.pageNum;
    var pageSize = this.state.pagination.pageSize;
    var api = "http://10.17.2.10:7001/api/spider/running/{pageNum}/{pageSize}?pageNum=" + pageNum + "&pageSize=" + pageSize;

    console.log(this.props.location);

    axios.get(api)
    .then(res => {
      console.log(res);
        this.setState({
          result: res.data.result,
          pagination: res.data.pagination
        });
        console.log(res);
      });
  }

  render() {
    const data = this.state.result;
    const dataSource = data.map((item) => {
      item['key'] = item.instanceId;
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
