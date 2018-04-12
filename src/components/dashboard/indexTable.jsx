import React from 'react';
import { Table, Modal } from 'antd';

class IndexTable extends React.Component {
  constructor(props) {
    super(props);
    this.worker = {
      pagination: {
        pages: 10,
        total: 104,
        pageSize: 10,
        pageNum: 2
      },
      result: [
        {
          systemIp: '12-34',
          contextPath: 'Windows',
          workerType: '10.8.23.1',
          runSystem: 'xxx/test',
          startTime: '20',
          lastHeartbeatTime: 'CRAWLER-1',
          status: '10'
        },
        {
          systemIp: '56-78',
          contextPath: 'Windows',
          workerType: '10.8.23.1',
          runSystem: 'xxx/test',
          startTime: '30',
          lastHeartbeatTime: 'CRAWLER-1',
          status: '10'
        }
      ]
    };
  }
  state = {};
  showWorkerDetail(record) {
    console.log(record);
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
          <p>状态：{record.status}</p>
        </div>
      ),
      okText: '确定'
    });
  }
  render() {
    const data = this.worker.result;
    const dataSource = data.map(item => {
      item['key'] = item.workerId;
      return item;
    });
    const { columns } = this.props;

    return <Table dataSource={this.props.dataSource} columns={this.props.columns} pagination={this.props.pagination} />;
  }
}

export default IndexTable;
