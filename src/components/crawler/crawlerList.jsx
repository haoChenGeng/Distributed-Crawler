import React from 'react';
import axios from 'axios'
import { Table, Icon, Row, Col, Card, Modal, Menu, Dropdown, Button } from 'antd';
import { Link } from 'react-router';

import { createHistory } from 'history';
import * as Http from '../../axios/tools';


class CrawlerListTable extends React.Component {  
  constructor(props) {
    super(props);
    this.operate = {};
    const menu = <Menu onClick={this.operateCrawler.bind(this)} className="crawler-operation" >
                    <Menu.Item key="start" data={this.props}>启动</Menu.Item>
                    <Menu.Item key="stop">停止</Menu.Item>
                    <Menu.Item key="delete">删除</Menu.Item>
                </Menu>
    this.state = {
      "pagination": {
        "pages": 10,
        "total": 104,
        "pageSize": 10,
        "pageNum": 2
      },
      "result": [
        {
          "spiderUUID":"123",
          "spiderName":"string",
          "user":"string",
          "project":"string",
          "isExplorer":true,
          "statusDesc":"停止",
          "createTime":"2017-10-25 16:30:25",
        }, {
          "spiderUUID":"string1",
          "spiderName":"string",
          "user":"string",
          "project":"string",
          "isExplorer":true,
          "statusDesc":"停止",
          "createTime":"2017-10-25 16:30:25",
        }
      ],
    }
    this.columns = [{
      title: 'UUID',
      dataIndex: 'spiderUUID',
      key: 'spiderUUID',
      width: '10%',
      render: (text, record, index) => { return text },
    }, {
      title: '名称',
      dataIndex: 'spiderName',
      key: 'spiderName',
      width: '15%',
      render: (text, record, index) => { return text },
    }, {
      title: '所属用户',
      dataIndex: 'user',
      key: 'user',
      width: '10%',
      render: (text, record, index) => { return text },
    },{
      title: '所属项目',
      dataIndex: 'project',
      key: 'project',
      width: '10%',
      render: (text, record, index) => { return text },
    },{
      title: '运行模式',
      dataIndex: 'isExplorer',
      key: 'isExplorer',
      width: '10%',
      render: (text, record, index) => { return text },
    },{
      title: '运行状态',
      dataIndex: 'statusDesc',
      key: 'statusDesc',
      width: '15%',
      render: (text, record, index) => { return text },
    },{
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
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
              <Link to={'/app/crawler/crawlerDetail'}   className="table-action">查看</Link> |  &nbsp;
              <Link to={{ pathname: '/app/crawler/crawlerInstance', query: { name: record.spiderUUID } }} className="table-action">运行实例</Link> |  &nbsp;
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
  componentDidMount() {
    const head = {'head': '123'}
    Http.get({
      url: 'api/spider/list',
      data: {        
        pageNum: 1,
        pageSize: 10        
      },
      headers: head
    })
    .then(res => console.log(res));    
  }
  
  operateCrawler(e) {
    console.log(e.key);    
    console.log(this.operate);
  }
  checkFirstTag(obj,data) {
    console.log(obj);
    console.log(data);
    if (data) {
      this.operate = obj;
    }else {
      this.operate = {};
    }
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
    const data = this.state.result;
    /* const dataSource = data.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    }); */
    const dataSource = data.map((item) => {
      item['key'] = item.spiderUUID;
      return item;
    });
    return <Table className="crawler-table" dataSource={dataSource} columns={this.columns} />;
  }
}
// let pagination = this.state.pagination;
// const {pagination} = this.state;
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
