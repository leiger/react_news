import React, { Component } from 'react';
import MobileHeader from './Header/MobileHeader';
import MobileFooter from './Footer/MobileFooter';
// import 'antd-mobile/dist/antd-mobile.css';
import 'antd/dist/antd.css';

class Mobile extends Component {
  render() {
    return (
      <div id={"mobile"}>
        <MobileHeader/>
        <MobileFooter/>
      </div>
    )
  }
}

export default Mobile;