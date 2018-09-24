import React, { Component } from 'react';
import PcHeader from '../Components/PcHeader';
import PcFooter from '../Components/PcFooter';
import PcContainer from '../Components/PcContainer';

import 'antd/dist/antd.css';

class Pc extends Component {
  render() {
    return (
      <div id={"pc"}>
        <PcHeader/>
        <PcContainer/>
        <PcFooter/>
      </div>
    )
  }
}

export default Pc;