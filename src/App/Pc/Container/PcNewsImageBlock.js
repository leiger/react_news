import React, {Component} from 'react';
import {Card, Col, Row, Skeleton, Divider} from 'antd';

class PcNewsImageBlock extends Component {
  constructor() {
    super();

    this.state = {
      news: [],
      loading: true
    }
  }

  componentWillMount() {
    let myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions).then(response => response.json())
      .then(json => {
        this.setState({
          news: json,
          loading: false
        })
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    let titleStyle = {
      fontSize: '12px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      marginBottom: 0
    };
    let resourceStyle = {
      marginBottom: 0,
      fontSize: '12px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      color: '#bfbfbf'
    };

    return (
      <div className="imageNews">
        <Divider style={{fontSize: '14px'}} dashed orientation="left">{this.props.title}</Divider>
        <Skeleton loading={this.state.loading} active paragraph={{rows: 10}}>
          <Card bordered={false} title="" bodyStyle={{padding: '0 5px'}}>
            <Row gutter={8}>
              {this.state.news.map((item, index) => (
                <Col key={index} span={this.props.colGrid} style={{marginBottom: '8px'}}>
                  <div className="newImg">
                    <img width="100%" src={item.thumbnail_pic_s} alt={item.title}/>
                    <h3 style={titleStyle}>{item.title}</h3>
                    <p style={resourceStyle}>{item.author_name}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Card>
        </Skeleton>
      </div>
    )
  }
}

export default PcNewsImageBlock;