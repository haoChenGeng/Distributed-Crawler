import React from 'react';
import { Row, Col, Card, Icon, Radio } from 'antd';
// import EchartsViews from './EchartsViews';
// import EchartsProjects from './EchartsProjects';
// import b1 from '../../style/imgs/b1.jpg';

import IndexCard from './indexCard';
import IndexTableCard from './indexTableCard';
import img1 from '../../style/imgs/homeCard1.jpg';
import img2 from '../../style/imgs/homeCard2.jpg';
import img3 from '../../style/imgs/homeCard3.jpg';
import img4 from '../../style/imgs/homeCard4.jpg';
import Columns from './tableConfig';
import Options from './chartConfig';
// import Get from '../../axios/tools';
import * as http from '../../axios/tools';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
      size: 'default',
    }
  }
  componentDidmount() {
    http.get({},{})
      .then(console.log())
      
  }
  setConfig() {

  }
  handleDateChange(e) {
// console.log(e.target);
    this.setState({
      size: e.target.value
    })
  }
  render() {
    const count = 123;
    return (
      <div className="gutter-example button-demo">
        <Row gutter={10}>
          <p>概览</p>
          <Col className="gutter-row" md={6}>
            <div className="gutter-box">
              <IndexCard img={img1} title="今日接口查询量" data={count} />
            </div>
            <div className="gutter-box">
              <IndexCard img={img1} title="机器数量" data={count} />
            </div>
          </Col>
          <Col className="gutter-row" md={6}>
            <div className="gutter-box">
              <IndexCard img={img2} title="今日接口成功率" data={count} />
            </div>
            <div className="gutter-box">
              <IndexCard img={img2} title="爬虫数量" data={count} />
            </div>
          </Col>
          <Col className="gutter-row" md={6}>
            <div className="gutter-box">
              <IndexCard img={img3} title="今日链接请求量" data={count} />
            </div>
            <div className="gutter-box">
              <IndexCard img={img3} title="代理数量" data={count} />
            </div>
          </Col>
          <Col className="gutter-row" md={6}>
            <div className="gutter-box">
              <IndexCard img={img4} title="今日数据量" data={count} />
            </div>
            <div className="gutter-box">
              <IndexCard img={img4} title="验证码数量" data={count} />
            </div>
          </Col>
          <Col className="card-title" md={24}>
            <p>接口调用</p>
          </Col>
          <Col className="" md={15}>
            <IndexTableCard needToday="true" default="today" columns={Columns.interfaceQuery} name="接口调用Top5" needMore="true" />
          </Col>
          <Col className="" md={9}>
            <IndexTableCard needToday="true" default="today" columns={Columns.interfaceApp} name="调用方Top5" needMore="true" />
          </Col>
          <Col className="" md={15} style={{ marginTop: 10 }}>
            <IndexTableCard needToday="true" default="today" name="调用次数及成功率趋势" option={Options.lineOption} needMore="false" />
          </Col>
          <Col className="" md={9} style={{ marginTop: 10 }}>
            <IndexTableCard needToday="true" default="today" name="响应时间分布" option={Options.barOption} needMore="false" />
          </Col>
          <Col className="" md={24}>
            <p>链接请求</p>
          </Col>
          <Col className="" md={15}>
            <IndexTableCard needToday="false" default="yesterday" columns={Columns.linkQuest}  name="链接请求Top5" needMore="true" />
          </Col>
          <Col className="" md={9}>
            <IndexTableCard needToday="false" default="yesterday" columns={Columns.failStatus} name="失败状态Top5" needMore="true" />
          </Col>
          <Col className="" md={24} style={{ marginTop: 10 }}>
            <IndexTableCard needToday="false" default="yesterday" name="链接请求及成功率趋势" option={Options.lineOption} needMore="false" />
          </Col>
          <Col className="" md={24}>
            <p>数据量</p>
          </Col>
          <Col className="" md={15}>
            <IndexTableCard needToday="false" default="yesterday" columns={Columns.dbRecord} name="入库记录数Top5" needMore="true" />
          </Col>
          <Col className="" md={9}>
            <IndexTableCard needToday="false" default="yesterday" columns={Columns.dataCount} name="库数据量Top5" needMore="true" />
          </Col>
          <Col className="" md={24} style={{ marginTop: 10 }}>
            <IndexTableCard needToday="false" default="yesterday" name="入库记录数趋势" option={Options.lineOption} needMore="false" />
          </Col>
          {/* <Col className="gutter-row" md={8}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="pb-m">
                  <h3>任务</h3>
                  <small>10个已经完成，2个待完成，1个正在进行中</small>
                </div>
                <a className="card-tool"><Icon type="sync" /></a>
                <Timeline>
                  <Timeline.Item color="green">新版本迭代会</Timeline.Item>
                  <Timeline.Item color="green">完成网站设计初版</Timeline.Item>
                  <Timeline.Item color="red">
                    <p>联调接口</p>
                    <p>功能验收</p>
                  </Timeline.Item>

                  <Timeline.Item color="#108ee9">
                    <p>登录功能设计</p>
                    <p>权限验证</p>
                    <p>页面排版</p>
                  </Timeline.Item>
                </Timeline>
              </Card>
            </div>
          </Col>
          <Col className="card-title" md={24}>
            <p>接口调用</p>
          </Col>
          <Col className="gutter-row" md={8}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="pb-m">
                  <h3>消息栏</h3>
                </div>
                <a className="card-tool"><Icon type="sync" /></a>
                <ul className="list-group no-border">
                  <li className="list-group-item">
                    <a href="" className="pull-left w-40 mr-m">
                      <img src={b1} className="img-responsive img-circle" alt="test" />
                    </a>
                    <div className="clear">
                      <a href="" className="block">鸣人</a>
                      <span className="text-muted">终于当上火影了！</span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <a href="" className="pull-left w-40 mr-m">
                      <img src={b1} className="img-responsive img-circle" alt="test" />
                    </a>
                    <div className="clear">
                      <a href="" className="block">佐助</a>
                      <span className="text-muted">吊车尾~~</span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <a href="" className="pull-left w-40 mr-m">
                      <img src={b1} className="img-responsive img-circle" alt="test" />
                    </a>
                    <div className="clear">
                      <a href="" className="block">小樱</a>
                      <span className="text-muted">佐助，你好帅！</span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <a href="" className="pull-left w-40 mr-m">
                      <img src={b1} className="img-responsive img-circle" alt="test" />
                    </a>
                    <div className="clear">
                      <a href="" className="block">雏田</a>
                      <span className="text-muted">鸣人君。。。那个。。。我。。喜欢你..</span>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </Col>
          <Col className="gutter-row" md={8}>
            <div className="gutter-box">
              <Card bordered={false}>
                <div className="pb-m">
                  <h3>访问量统计</h3>
                  <small>最近7天用户访问量</small>
                </div>
                <a className="card-tool"><Icon type="sync" /></a>
                <EchartsViews />
              </Card>
            </div>
          </Col> */}
        </Row>
      </div>
    )
  }
}

export default Dashboard;