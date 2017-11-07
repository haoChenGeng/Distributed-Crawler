import React from 'react';
import { Progress } from 'antd';

const columns = {
  interfaceQuery: [{
    title: '排名',
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
    title: '查询数量',
    dataIndex: 'workerType',
    key: 'workerType',
    width: '10%',
    render: (text, record, index) => { return text },
  },{
    title: '成功率',
    dataIndex: 'status',
    key: 'status',
    width: '10%',
    render: (text, record, index) => { return text },
  },{
    title: '平均响应时间',
    dataIndex: 'runSystem',
    key: 'runSystem',
    width: '10%',
    render: (text, record, index) => { return text },
  },{
    title: '占比',
    dataIndex: 'startTime',
    key: 'startTime',
    width: '20%',
    render: (text, record, index) => (
      <span>{text + '%'}<Progress percent={100} style={{width: text + '%',marginLeft: 10}} showInfo={false} strokeWidth={8} /></span>
    ),
  },{
    title: '环比',
    dataIndex: 'lastHeartbeatTime',
    key: 'lastHeartbeatTime',
    width: '15%',
    render: (text, record, index) => { return text },
  }],
  interfaceApp: [{
    title: '排名',
    dataIndex: 'systemIp',
    key: 'systemIp',
    width: '10%',
    render: (text, record, index) => { return text },
  }, {
    title: '调用方',
    dataIndex: 'contextPath',
    key: 'contextPath',
    width: '15%',
    render: (text, record, index) => { return text },
  }, {
    title: '占比',
    dataIndex: 'startTime',
    key: 'startTime',
    width: '20%',
    render: (text, record, index) => (
      <span>{text + '%'}<Progress percent={100} style={{ width: text + '%', marginLeft: 10 }} showInfo={false} strokeWidth={8} /></span>
    ),
  }, {
    title: '环比',
    dataIndex: 'status',
    key: 'status',
    width: '10%',
    render: (text, record, index) => { return text },
  }],
  linkQuest: [{
    title: '排名',
    dataIndex: 'systemIp',
    key: 'systemIp',
    width: '10%',
    render: (text, record, index) => { return text },
  }, {
    title: '爬虫名称',
    dataIndex: 'contextPath',
    key: 'contextPath',
    width: '15%',
    render: (text, record, index) => { return text },
  }, {
    title: '链接数量',
    dataIndex: 'workerType',
    key: 'workerType',
    width: '10%',
    render: (text, record, index) => { return text },
  }, {
    title: '成功率',
    dataIndex: 'status',
    key: 'status',
    width: '10%',
    render: (text, record, index) => { return text },
  }, {
    title: '平均重试次数',
    dataIndex: 'runSystem',
    key: 'runSystem',
    width: '10%',
    render: (text, record, index) => { return text },
  }, {
    title: '占比',
    dataIndex: 'startTime',
    key: 'startTime',
    width: '25%',
    render: (text, record, index) => (
      <span>{text + '%'}<Progress percent={100} style={{ width: text + '%', marginLeft: 10 }} showInfo={false} strokeWidth={8} /></span>
    ),
  }, {
    title: '环比',
    dataIndex: 'lastHeartbeatTime',
    key: 'lastHeartbeatTime',
    width: '15%',
    render: (text, record, index) => { return text },
  }],
  failStatus: [{
    title: '排名',
    dataIndex: 'systemIp',
    key: 'systemIp',
    width: '10%',
    render: (text, record, index) => { return text },
  }, {
    title: '调用方',
    dataIndex: 'contextPath',
    key: 'contextPath',
    width: '15%',
    render: (text, record, index) => { return text },
  }, {
    title: '占比',
    dataIndex: 'startTime',
    key: 'startTime',
    width: '20%',
    render: (text, record, index) => (
      <span>{text + '%'}<Progress percent={100} style={{ width: text + '%', marginLeft: 10 }} showInfo={false} strokeWidth={8} /></span>
    ),
  }, {
    title: '环比',
    dataIndex: 'status',
    key: 'status',
    width: '10%',
    render: (text, record, index) => { return text },
  }],
  dbRecord: [{
    title: '排名',
    dataIndex: 'systemIp',
    key: 'systemIp',
    width: '10%',
    render: (text, record, index) => { return text },
  }, {
    title: '爬虫名称',
    dataIndex: 'contextPath',
    key: 'contextPath',
    width: '15%',
    render: (text, record, index) => { return text },
  }, {
    title: '库名',
    dataIndex: 'workerType',
    key: 'workerType',
    width: '10%',
    render: (text, record, index) => { return text },
  }, {
    title: '表数量',
    dataIndex: 'status',
    key: 'status',
    width: '10%',
    render: (text, record, index) => { return text },
  }, {
    title: '入库记录数',
    dataIndex: 'runSystem',
    key: 'runSystem',
    width: '10%',
    render: (text, record, index) => { return text },
  }, {
    title: '占比',
    dataIndex: 'startTime',
    key: 'startTime',
    width: '25%',
    render: (text, record, index) => (
      <span>{text + '%'}<Progress percent={100} style={{ width: text + '%', marginLeft: 10 }} showInfo={false} strokeWidth={8} /></span>
    ),
  }, {
    title: '环比',
    dataIndex: 'lastHeartbeatTime',
    key: 'lastHeartbeatTime',
    width: '15%',
    render: (text, record, index) => { return text },
  }],
  dataCount: [{
    title: '排名',
    dataIndex: 'systemIp',
    key: 'systemIp',
    width: '10%',
    render: (text, record, index) => { return text },
  }, {
    title: '库名',
    dataIndex: 'contextPath',
    key: 'contextPath',
    width: '15%',
    render: (text, record, index) => { return text },
  }, {
    title: '占比',
    dataIndex: 'startTime',
    key: 'startTime',
    width: '20%',
    render: (text, record, index) => (
      <span>{text + '%'}<Progress percent={100} style={{ width: text + '%', marginLeft: 10 }} showInfo={false} strokeWidth={8} /></span>
    ),
  }, {
    title: '环比',
    dataIndex: 'status',
    key: 'status',
    width: '10%',
    render: (text, record, index) => { return text },
  }]
}

export default columns;