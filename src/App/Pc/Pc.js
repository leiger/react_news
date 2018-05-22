import React, { Component } from 'react';
import PcHeader from './Header/PcHeader';
import PcFooter from './Footer/PcFooter';
import './Pc.css';
import 'antd/dist/antd.css';

class Pc extends Component {
  render() {
    return (
      <div id={"pc"}>
        <PcHeader/>
        <PcFooter/>
      </div>
    )
  }
}

export default Pc;