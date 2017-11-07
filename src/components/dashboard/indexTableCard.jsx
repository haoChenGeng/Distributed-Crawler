import React from 'react';
import { Card, Radio, Modal } from 'antd';
import IndexTable from './indexTable';
import ChartViews from './EchartsViews';

class IndexTableCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.default || 'today',
      visible: false
    }
  }
  handleDateChange(e) {
    this.setState({
      size: e.target.value
    })
  }
  showTotal() {
    this.setState({
      visible: true
    })
  }
  handleCancel() {
    this.setState({
      visible: false
    })
  }
  render() {
    // console.log(this.props);
    const { needToday } = this.props;
    const { name } = this.props;
    const { size } = this.state;

    const more = this.props.needMore === 'true' ? (
      <a onClick={this.showTotal.bind(this)} className="showmore">更多</a>
    ) : null
    return (
      <Card title={name} extra={more}>
        <Radio.Group
          value={size}
          onChange={this.handleDateChange.bind(this)}
          style={{ marginBottom: 10 }}
        >
          {
            needToday === 'true' ? <Radio.Button value="today">今日</Radio.Button> : null
          }
          <Radio.Button value="yesterday">昨日</Radio.Button>
          <Radio.Button value="thismonth">本月</Radio.Button>
          <Radio.Button value="lastmonth">上月</Radio.Button>
        </Radio.Group>
        {
          this.props.needMore === 'true' ? <IndexTable columns={this.props.columns} pagination={false} /> : <ChartViews option={this.props.option} />
        }
        <Modal 
        title="更多" 
        visible={this.state.visible}
        footer={false} 
        onCancel={this.handleCancel.bind(this)}
        width={1000}
        >
          <Card title={name} >
            <Radio.Group 
              value={size}
              onChange={this.handleDateChange.bind(this)}
              style={{ marginBottom: 10 }}
            >
              {
                needToday === 'true' ? <Radio.Button value="today">今日</Radio.Button> : null
              }
              <Radio.Button value="yesterday">昨日</Radio.Button>
              <Radio.Button value="thismonth">本月</Radio.Button>
              <Radio.Button value="lastmonth">上月</Radio.Button>
            </Radio.Group>
            <IndexTable columns={this.props.columns}  />
          </Card>
        </Modal>
      </Card>
    )
  }
}

export default IndexTableCard;