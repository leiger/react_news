import React, {Component} from 'react';
import {Row, Col} from 'antd';

class PcFooter extends Component {
  render() {
    return (
      <footer style={{textAlign: 'center'}}>
        <Row>
          <Col span={2}/>
          <Col span={20}>
            &copy;&nbsp;2018 ReactNews. All Rights Reserved.
          </Col>
          <Col span={2}/>
        </Row>
      </footer>
    )
  }
}

export default PcFooter;