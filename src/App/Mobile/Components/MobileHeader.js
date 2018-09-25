import React, {Component} from 'react';
import {NavBar, Icon} from 'antd-mobile';

class MobileHeader extends Component {
  constructor() {
    super();
    this.state = {
      sidebarState: true,
      action: 'login',

      userInfo: false,
      hasLogined: false,
      userNickName: 'none',
      userId: 0,

    };
  }

  render() {
    return (
      <div id="mobileHeader">
        {/*NavBar*/}
        <NavBar
          mode="light"
          leftContent={this.props.leftContent}
        >
          ReactNews
        </NavBar>
      </div>
    )
  }
}

export default MobileHeader;