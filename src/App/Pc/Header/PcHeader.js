import React, {Component} from 'react';
import {Row, Col, Menu, Icon, Form, Tabs, Modal, message, Input, Button, Checkbox} from 'antd';
import Logo from '../../images/logo.png';
import './PcHeader.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PcHeader extends Component {
  constructor() {
    super();
    this.state = {
      section: 'World',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: 'none',
      userId: 0,
    };
  }

  setSection = (e) => {
    this.setState({
      section: e.key
    })
  };

  setModalVisible(val) {
    this.setState({
      modalVisible: val
    })
  }

  render() {
    let {getFieldDecorator} = this.props.form;
    let userShow = this.state.hasLogined
      ?
      <span>
        <Button>{this.state.userNickName}</Button>
        <Button type="ghoast">logout</Button>
      </span>
      :
      <Button onClick={() => this.setModalVisible(true)}>
        register/login
      </Button>
    ;

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
              {userShow}
            </Menu>
          </Col>
        </Row>

        {/*modal*/}
        <Modal title="register/login" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
               onOk={() => this.setModalVisible(false)} onCancel={() => this.setModalVisible(false)}>
          <Tabs defaultActiveKey="login">
            <TabPane tab="login" key="login">
              tabpane1
            </TabPane>
            <TabPane tab="register" key="register">
              tabpane2
            </TabPane>
          </Tabs>
        </Modal>

      </header>
    )
  }
}

export default PcHeader = Form.create()(PcHeader);