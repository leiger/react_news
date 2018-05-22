import React, { Component } from 'react';
import Logo from '../../images/logo.png';
import './MobileHeader.css';

class MobileHeader extends Component {
  render() {
    return (
      <div id="mobileHeader">
        <header>
          <img src={Logo} alt="logo"/>
          <span>ReactNews</span>
        </header>
      </div>
    )
  }
}

export default MobileHeader