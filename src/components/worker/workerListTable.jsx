import React from 'react';
import axios from 'axios'
import { Table, Modal } from 'antd';

class WorkerListTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "pagination": {
        "pages": 10,
        "total": 104,
        "pageSize": 5,
        "pageNum": 1
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
          "statusDesc": "运行"
        }, {
          "workerId": "56-78",
          "runSystem": "Windows",
          "systemIp": "10.8.23.1",
          "contextPath": "xxx/test",
          "workerType": "通用爬虫2",
          "systemHost": "CRAWLER-1",
          "startTime": "2017-10-10 10:11:11",
          "lastHeartbeatTime": "2017-10-10 10:11:11",
          "statusDesc": "运行"
        }
      ]
    }
    this.columns = [{
      title: '系统IP',
      dataIndex: 'systemIp',
      key: 'systemIp',
      width: '10%',
      render: (text, record, index) => { return text },
    }, {
      title: '应用路径',
      dataIndex: 'contextPath',
      key: 'contextPath',
      width: '15%',
      render: (text, record, index) => { return text },
    }, {
      title: '类型',
      dataIndex: 'workerType',
      key: 'workerType',
      width: '10%',
      render: (text, record, index) => { return text },
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: '10%',
      render: (text, record, index) => { return text },
    }, {
      title: '运行系统',
      dataIndex: 'runSystem',
      key: 'runSystem',
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
              <a className="table-action" onClick={() => this.showWorkerDetail(record)}>查看</a> | <a className="table-action" onClick={() => this.showCrawlerList(record)}>爬虫列表</a>
            </span>
          </div>
        );
      },
    }];

  }
  showWorkerDetail(record) {
    // console.log(record);
    Modal.info({
      title: 'Worker详情',
      content: (
        <div className="modal-list">
          <p>worker_id：{record.workerId}</p>
          <p>系统IP：{record.systemIp}</p>
          <p>应用路径：{record.contextPath}</p>
          <p>类型：{record.workerType}</p>
          <p>主机名：{record.systemHost}</p>
          <p>运行系统：{record.runSystem}</p>
          <p>启动时间：{record.startTime}</p>
          <p>上一次心跳时间：{record.lastHeartbeatTime}</p>
          <p>状态：{record.statusDesc}</p>
        </div>
      ),
      okText: '确定'
    })
  }
  showCrawlerList(record) {
    console.log(record);
    let spider = ['1', '2', '3'];
    Modal.info({
      title: 'Worker详情',
      content: (
        <div className="modal-list">
          <p>爬虫UUID</p>
          {
            record.spiderUUIDs.map((item) => {
              return (
                <p>{item}</p>
              )
            })
          }
        </div>
      ),
      okText: '确定'
    })
  }

  componentDidMount() {
    var page = this.state.pagination.pageNum;
    var pageSize = this.state.pagination.pageSize;
    axios.get('http://10.17.2.10:7001/api/worker/list?pageNum=' + page + '&pageSize=' + pageSize)
      .then(res => {
        this.setState(res.data);
        console.log(res);
      });
  }

  clickPagination(page, pageSize) {
    axios.get('http://10.17.2.10:7001/api/worker/list?pageNum=' + page + '&pageSize=' + pageSize)
      .then(res => {
        console.log(res);
        this.setState({
          result: res.data.result
        })
      });
  }

  render() {
    const data = this.state.result;
    // var index = 1;
    const dataSource = data.map((item,index) => {
      item['key'] = item.workerId + index;
      return item;
    })
    const pagination = {
      pageSize: this.state.pagination.pageSize,
      defaultPageSize: this.state.pagination.pageSize,
      total: this.state.pagination.total,
      onChange: (page,pageSize) => {
        this.clickPagination(page,pageSize);
      }
    }

    return <Table expandedRowKeys={[1, 2, 3]} dataSource={dataSource} columns={this.columns} pagination={pagination} />;
  }
}

export default WorkerListTable;