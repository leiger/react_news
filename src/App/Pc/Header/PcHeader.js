import React, {Component} from 'react';
import {Layout, Menu, Icon, Form, Tabs, Modal, message, Input, Button} from 'antd';
import './PcHeader.css';

const {Header} = Layout;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class PcHeader extends Component {
  constructor() {
    super();
    this.state = {
      sections: ['World', 'Local', 'Technology', 'Entertainment', 'Sports', 'Science'],
      selectedSection: '0',

      modalVisible: false,
      action: 'login',

      hasLogined: false,
      userNickName: 'none',
      userId: 0,
    };
  }

  componentWillMount() {
    if (localStorage.userId !== '') {
      this.setState({
        hasLogined: true,
        userNickName: localStorage.userNickName,
        userId: localStorage.userId
      })
    }
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
  };

  setAction(key) {
    this.setState({
      action: key === 'login' ? 'login' : 'register'
    })
  }

  logout() {
    let self = this;
    Modal.confirm({
      title: 'Confirm',
      content: 'Are you sure to log out?',
      okText: 'OK',
      cancelText: 'CANCEL',
      onOk() {
        localStorage.userId = '';
        localStorage.userNickName = '';
        self.setState({
          hasLogined: false
        });
        message.success('success!');
      }
    });

  }

  handleSubmit(e) {
    e.preventDefault();
    let myFetchOptions = {
      method: 'GET'
    };
    let formData = this.props.form.getFieldsValue();
    console.log(formData);

    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
      + "&username=" + formData.username + "&password=" + formData.password
      + "&r_userName=" + formData.r_username + "&r_password="
      + formData.r_password + "&r_confirmPassword="
      + formData.r_confirmPassword, myFetchOptions)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          userNickName: json.NickUserName,
          userid: json.UserId
        });
        localStorage.userId = json.UserId;
        localStorage.userNickName = json.NickUserName;
        this.setModalVisible(false);
        message.success('success!');
      })
      .catch(error => {
        console.error(error);
        message.error('error');
      });


    this.setState({
      hasLogined: true
    });
  }

  render() {

    let {getFieldDecorator} = this.props.form;

    // log in or not
    let userShow = this.state.hasLogined
      ?
      <span className="userInfo">
        <span>{this.state.userNickName}</span>
        <Button type="dashed" shape="circle" icon="logout" onClick={this.logout.bind(this)}/>
      </span>
      :
      <span className="userInfo">
        <Button type="dashed" shape="circle" icon="login" onClick={() => this.setModalVisible(true)}/>
      </span>
    ;

    return (
      <Header className="header">

        {/*logo*/}
        <a href="/" className="logo">
          <h1>ReactNews</h1>
        </a>

        {/*menu*/}
        <Menu id="menu" mode="horizontal" selectedKeys={[this.state.selectedSection]}>
          {this.state.sections.map((item, index) => {
            return (
              <Menu.Item key={index}> {item} </Menu.Item>
            )
          })}
        </Menu>

        {/*userInfo*/}
        {userShow}

        {/*modal*/}
        <Modal
          className="modal"
          title={null}
          wrapClassName="vertical-center-modal"
          visible={this.state.modalVisible}
          footer={null}
          onCancel={() => this.setModalVisible(false)}
        >
          <Tabs defaultActiveKey="login" onChange={this.setAction.bind(this)}>
            {/*login form*/}
            <TabPane tab="LOGIN" key="login">
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormItem>
                  {getFieldDecorator('username', {
                    rules: [{required: true, message: 'Please input your username!'}],
                  })(
                    <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{required: true, message: 'Please input your Password!'}],
                  })(
                    <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                           placeholder="Password"/>
                  )}
                </FormItem>
                <Button className="confirmButton" type="primary" ghost htmlType="submit">
                  login
                </Button>
              </Form>
            </TabPane>

            {/*register form*/}
            <TabPane tab="REGISTER" key="register">
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormItem>
                  {getFieldDecorator('r_username', {
                    rules: [{required: true, message: 'Please input your username!'}],
                  })(
                    <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>} placeholder="Username"/>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('r_password', {
                    rules: [{required: true, message: 'Please input your Password!'}],
                  })(
                    <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                           placeholder="Password"/>
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('r_confirmPassword', {
                    rules: [{required: true, message: 'Please input your Password again!'}],
                  })(
                    <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                           placeholder="Password again"/>
                  )}
                </FormItem>
                <Button className="confirmButton" type="primary" htmlType="submit">
                  register
                </Button>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>

      </Header>
    )
  }
}

export default PcHeader = Form.create()(PcHeader);