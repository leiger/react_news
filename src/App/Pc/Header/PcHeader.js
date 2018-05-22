import React, {Component} from 'react';
import {Row, Col, Menu, Icon} from 'antd';
import Logo from '../../images/logo.png';
import './PcHeader.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class PcHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 'World'
    };
  }
  setSection = (e) => {
    this.setState({
      section: e.key
    })
  };

  render() {
    return (
      <header>
        <Row>
          <Col span={4} offset={2}>
            <a href="/" className="logo">
              <img src={Logo} alt="logo"/>
              <h1>ReactNews</h1>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" selectedKeys={[this.state.section]} onClick={this.setSection}>
              <Menu.Item key="World">
                <Icon type="appstore"/>World
              </Menu.Item>
              <Menu.Item key="Local">
                <Icon type="appstore"/>Local
              </Menu.Item>
              <Menu.Item key="Business">
                <Icon type="appstore"/>Business
              </Menu.Item>
              <Menu.Item key="Technology">
                <Icon type="appstore"/>Technology
              </Menu.Item>
              <Menu.Item key="Entertainment">
                <Icon type="appstore"/>Entertainment
              </Menu.Item>
              <Menu.Item key="Sports">
                <Icon type="appstore"/>Sports
              </Menu.Item>
              <Menu.Item key="Science">
                <Icon type="appstore"/>Science
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={2}></Col>
        </Row>
      </header>
    )
  }
}

export default PcHeader;