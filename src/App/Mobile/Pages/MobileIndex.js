import React, {Component} from 'react';
import {TabBar} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faReadme} from '@fortawesome/free-brands-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import MobileContainer from './../Components/MobileContainer';
import MobileHeader from './../Components/MobileHeader';

class MobileIndex extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'news'
    };
  }

  render() {
    return (
      <div>
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 ,transform: 'translate3d(0,0,0)', overflowScrolling: "touch", WebkitOverflowScrolling: "touch"}}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            tabBarPosition="bottom"
            prerenderingSiblingsNumber={0}
          >
            <TabBar.Item
              title="News"
              key="news"
              icon={<FontAwesomeIcon icon={faReadme} size="lg"/>}
              selectedIcon={<FontAwesomeIcon icon={faReadme} size="lg"/>}
              selected={this.state.selectedTab === 'news'}
              onPress={() => {
                this.setState({
                  selectedTab: 'news',
                });
              }}
              data-seed="logId"
            >
              <MobileHeader/>
              <MobileContainer/>
            </TabBar.Item>
            <TabBar.Item
              icon={<FontAwesomeIcon icon={faUser} size="lg"/>}
              selectedIcon={<FontAwesomeIcon icon={faUser} size="lg"/>}
              title="User"
              key="user"
              selected={this.state.selectedTab === 'user'}
              onPress={() => {
                this.setState({
                  selectedTab: 'user',
                });
              }}
              data-seed="logId1"
            >
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    )
  }
}

export default MobileIndex;