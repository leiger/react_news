import React, {Component} from 'react';
import {Row, Col} from 'antd';

class PcFooter extends Component {
  render() {
    return (
      <footer style={{textAlign: 'center', margin: '10px 0', color: '#bfbfbf'}}>
        <Row>
          <Col span={20} offset={2}>
            &copy;&nbsp;leiger - 2018 ReactNews.&nbsp;&nbsp; All Rights Reserved.
          </Col>
        </Row>
      </footer>
    )
  }
}

export default PcFooter;