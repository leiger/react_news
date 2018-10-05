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

    fetch("https://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, myFetchOptions)
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
      margin: '5px 0 0 0'
    };
    let resourceStyle = {
      fontSize: '14px',
      marginBottom: '0',
      marginTop: '5px',
      color: 'rgba(0, 0, 0, 0.65)'
    };
    let timeStyle = {
      color: 'rgba(0, 0, 0, 0.45)',
      fontSize: '14px',
      marginBottom: '0',
      marginTop: '5px',
    };

    return (
      <div>
        {this.state.news.map((item, index) => (
          <WingBlank key={index}>
            <WhiteSpace size="lg"/>
            <Card>
              <Card.Body>
                <Link to={`/details/${item.uniquekey}`}>

                  <div className="imgBox" style={{height: '160px', overflow: 'hidden', borderRadius: '6px'}}>
                    <img width="100%" src={item.thumbnail_pic_s} alt={item.title}/>
                  </div>
                  <p style={resourceStyle}>{item.author_name}</p>
                  <h3 style={titleStyle}>{item.title}</h3>
                  <p style={timeStyle}>{item.date}</p>
                </Link>
              </Card.Body>
            </Card>
          </WingBlank>
        ))}
      </div>


    )
  }
}

export default MobileImageBlock;