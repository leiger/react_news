import React, {Component} from 'react';
import {List, Skeleton} from 'antd';
import {Link} from 'react-router-dom';

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
    fetch("https://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
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
    const linkStyle = {
      display: 'block',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      color: '#8c8c8c'
    };

    return (
      <div className="newsList">
        <Skeleton loading={this.state.loading} active paragraph={{rows: 10}}>
          <List
            size="small"
            dataSource={news}
            renderItem={item => (
              <List.Item style={{width: '100%'}}>
                <Link to={`details/${item.uniquekey}`} style={linkStyle}>
                  {item.title}
                </Link>
              </List.Item>
            )}
          />
        </Skeleton>
      </div>
    )
  }
}

export default PcNewsBlock;