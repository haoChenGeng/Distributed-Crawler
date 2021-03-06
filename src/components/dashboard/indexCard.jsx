import React from 'react';
import { Card, Icon } from 'antd';

class IndexCard extends React.Component{
  render() {
    return (
      <Card>
      <div className="clear y-center">
        <div className="pull-left mr-m">
          <img src={this.props.img} alt="" className="text-2x text-danger" />
        </div>
        <div className="clear">
          <div className="text-muted">{this.props.title}</div>
          <h2>{this.props.data}</h2>
        </div>
      </div>
    </Card>
    )
  }
}

export default IndexCard;