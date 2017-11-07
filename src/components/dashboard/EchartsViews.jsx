import React from 'react';
import ReactEcharts from 'echarts-for-react';
// import echarts from 'echarts';

class ChartViews extends React.Component {
    render() {
        return (
            <ReactEcharts
                option={this.props.option}
                style={{ height: '350px', width: '100%' }}
                className={'react_for_echarts'}
            />
        )
    }
}

export default ChartViews;