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

  handleSubmit(e) {
    e.preventDefault();
    let myFetchOptions = {
      method: 'GET'
    };
    let formData = this.props.form.getFieldsValue();
    console.log(formData);

    fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=${this.state.action}&username=${formData.username}&password=${formData.password}&r_userName=${formData.r_username}&r_password=${formData.r_password}&r_confirmPassword=${formData.r_confirmPassword}`, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          userNickName: json.NickUserName,
          userid: json.UserId
        })
      });

    message.success('success!');
    this.setModalVisible(false)
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
              <Menu.Item key="userInfo">
                {userShow}
              </Menu.Item>
            </Menu>
          </Col>
        </Row>

        {/*modal*/}
        <Modal title="register/login" wrapClassName="vertical-center-modal" visible={this.state.modalVisible} footer={null} onCancel={() => this.setModalVisible(false)}>
          <Tabs defaultActiveKey="login">
            {/*login form*/}
            <TabPane tab="login" key="login">
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormItem>
                  {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                  )}
                </FormItem>
                <Button type="primary" htmlType="submit">
                  login
                </Button>
              </Form>
            </TabPane>

            {/*register form*/}
            <TabPane tab="register" key="register">
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormItem>
                  {getFieldDecorator('r_userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('r_password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('r_confirmPassword', {
                    rules: [{ required: true, message: 'Please input your Password again!' }],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password again" />
                  )}
                </FormItem>
                <Button type="primary" htmlType="submit">
                  register
                </Button>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>

      </header>
    )
  }
}

export default PcHeader = Form.create()(PcHeader);