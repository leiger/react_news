import React, {Component} from 'react';
import {List, Skeleton } from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './PcNewsBlock.css';

class PcNewsBlock extends Component {
  constructor() {
    super();

    this.state = {
      news: '',
      loading: true
    }
  }

  componentWillMount() {
    // get news list
    let myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
      .then(res => res.json())
      .then(json => {
        this.setState({
          news: json,
          loading: false
        });
      });
  }

  render() {
    const {news} = this.state;

    return (
      <Router>
        <div className="newsList">
          <Skeleton loading={ this.state.loading } active paragraph={{ rows: 10 }}>
          <List
            size="small"
            dataSource={news}
            renderItem={item => (
              <List.Item className="newsTitle">

                  {item.title}
              </List.Item>
            )}
          />
          </Skeleton>
        </div>
      </Router>
    )
  }
}

export default PcNewsBlock;