import React, {Component} from 'react';
import {Form, Input, Button, Divider, List, Skeleton} from 'antd';

const FormItem = Form.Item;

class Comment extends Component {

  constructor() {
    super();

    this.state = {
      comments: [],
      commentsLoading: true
    };
  };

  componentDidMount() {
    let myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          comments: json,
          commentsLoading: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleSubmit(e) {
    e.preventDefault();
    let myFetchOptions = {
      method: 'GET'
    };
    let formData = this.props.form.getFieldsValue();
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userId + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formData.comment, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.componentDidMount();
      });
  }

  render() {
    const {getFieldDecorator, getFieldError, isFieldTouched} = this.props.form;
    const commentError = isFieldTouched('comment') && getFieldError('comment');
    let num = this.props.num;

    return (
      <div className="commentBox" style={{marginTop: '30px'}}>
        <Divider style={{fontSize: '14px'}} dashed orientation="left">{this.props.title}</Divider>

        <Skeleton loading={this.state.commentsLoading} active>
          <List size="small" itemLayout="horizontal" dataSource={this.state.comments.slice(-num).reverse()}
                renderItem={comment => (
                  <List.Item actions={[<span>posted on {comment.datetime}</span>]}>
                    <List.Item.Meta title={comment.UserName} description={comment.Comments}/>
                  </List.Item>

                )}>
          </List>
        </Skeleton>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormItem validateStatus={commentError ? 'error' : ''} help={commentError || ''}>
            {getFieldDecorator('comment', {
              rules: [{required: true, message: 'Please input your comment'}]
            })(
              <Input type="textarea" placeholder="comment"/>
            )}
          </FormItem>
          <Button type="primary" ghost htmlType="submit" style={{float: 'right'}}>SUBMIT COMMENT</Button>
        </Form>

      </div>
    )
  }
}

export default Comment = Form.create()(Comment);