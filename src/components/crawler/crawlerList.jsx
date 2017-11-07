import React from 'react';
import { Table, Icon, Row, Col, Card, Modal, Menu, Dropdown, Button } from 'antd';
import { Link } from 'react-router';

class CrawlerListTable extends React.Component {  
  constructor(props) {
    super(props);
    this.operate = {};
    const menu = <Menu onClick={this.operateCrawler} className="crawler-operation" >
                    <Menu.Item key="start" data={this.props}>启动</Menu.Item>
                    <Menu.Item key="stop">停止</Menu.Item>
                    <Menu.Item key="delete">删除</Menu.Item>
                </Menu>
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
      title: 'UUID',
      dataIndex: 'workerId',
      key: 'workerId',
      width: '10%',
      render: (text, record, index) => { return text },
    }, {
      title: '名称',
      dataIndex: 'workerType',
      key: 'workerType',
      width: '15%',
      render: (text, record, index) => { return text },
    }, {
      title: '所属用户',
      dataIndex: 'systemIp',
      key: 'systemIp',
      width: '10%',
      render: (text, record, index) => { return text },
    },{
      title: '所属项目',
      dataIndex: 'status',
      key: 'status',
      width: '10%',
      render: (text, record, index) => { return text },
    },{
      title: '运行模式',
      dataIndex: 'runSystem',
      key: 'runSystem',
      width: '10%',
      render: (text, record, index) => { return text },
    },{
      title: '运行状态',
      dataIndex: 'startTime',
      key: 'startTime',
      width: '15%',
      render: (text, record, index) => { return text },
    },{
      title: '创建时间',
      dataIndex: 'lastHeartbeatTime',
      key: 'lastHeartbeatTime',
      width: '15%',
      render: (text, record, index) => { return text },
    }, {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: '20%',
      render: (text, record, index,key) => {
        return (
          <div className="editable-row-operations">
            <span>
              <Link to={'/app/crawler/crawlerDetail'} className="table-action">查看</Link> |  &nbsp;
              <Link to={'/app/crawler/crawlerInstance'} className="table-action">运行实例</Link> |  &nbsp;
              <Link to={'/app/crawler/crawlerTaskList'} className="table-action">任务列表</Link> | <Dropdown onVisibleChange={this.checkFirstTag.bind(this,record)} overlay={menu} >
                                                                                                    <Button className="crawler-operation table-action">
                                                                                                      更多
                                                                                                    </Button>
                                                                                                  </Dropdown>
              
            </span>            
          </div>
        );
      },
    }];    
  }  
  
  operateCrawler(e) {
    console.log(e.key);    
  }
  checkFirstTag(obj,data) {
    // console.log(obj);
    // console.log(data);
    if (data) {
      this.operate = obj;
    }else {
      this.operate = {};
    }
    console.log(this.operate);
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
          <p>状态：{record.status}</p>
        </div>
      ),
      okText: '确定'
    })
  }
  showCrawlerList(record) {
    // console.log(record);
    Modal.info({
      title: 'Worker详情',
      content: (
        <div className="modal-list">
          <p>爬虫UUID</p>
          {
           /*  record.spiderUUIDs.map((item) => {
              return (
                <p>{item} + '...'</p>
              )
            }) */
          }
        </div>
      ),
      okText: '确定'
    })
  }
  render() {
    const data = this.worker.result;
    /* const dataSource = data.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    }); */
    const dataSource = data.map((item) => {
      item['key'] = item.workerId;
      return item;
    });
    return <Table className="crawler-table" dataSource={dataSource} columns={this.columns} />;
  }
}

const CrawlerList = () => (
  <div className="gutter-example">
    <Row gutter={16}>
      <Col className="gutter-row" md={24}>
        <div className="gutter-box">
          <Card title="爬虫列表" >
            <CrawlerListTable />
          </Card>
        </div>
      </Col>
    </Row>
  </div>
)

export default CrawlerList;
