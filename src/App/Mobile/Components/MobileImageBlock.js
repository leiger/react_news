import React, {Component} from 'react';
import {ListView, Card, WingBlank, WhiteSpace, Flex} from 'antd-mobile';
import {Link} from 'react-router-dom';

class MobileImageBlock extends Component {
  constructor() {
    super();

    this.state = {
      news: [],
      loading: true
    }
  }

  init() {
    let myFetchOptions = {
      method: 'GET'
    };
    this.setState({
      loading: true
    });

    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          loading: false,
          news: json,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentWillMount() {
    this.init();
  }

  render() {
    let titleStyle = {
      fontSize: '18px',
      margin: '5px 0 5px 0'
    };
    let resourceStyle = {
      fontSize: '14px',
    };
    let linkStyle = {};

    return (
      <div>
        {this.state.news.map((item, index) => (
          <WingBlank key={index}>
            <WhiteSpace size="lg"/>
            <Link style={linkStyle} to={`/details/${item.uniquekey}`}>

              <div className="imgBox" style={{height: '160px', overflow: 'hidden', borderRadius: '6px'}}>
                <img width="100%" src={item.thumbnail_pic_s} alt={item.title}/>
              </div>
              <h3 style={titleStyle}>{item.title}</h3>
              <p style={resourceStyle}>{item.author_name}</p>
            </Link>
          </WingBlank>
        ))}
      </div>


    )
  }
}

export default MobileImageBlock;