import React, {Component} from 'react';
import {ListView, Card, WingBlank, WhiteSpace, Flex} from 'antd-mobile';
import {Link} from 'react-router-dom';

class MobileListBlock extends Component {
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
      margin: '5px 0 0 0'
    };
    let resourceStyle = {
      fontSize: '14px',
      marginBottom: '0',
      color: 'rgba(0, 0, 0, 0.65)'
    };
    let timeStyle = {
      color: 'rgba(0, 0, 0, 0.45)',
      fontSize: '14px',
      marginBottom: '0',
      marginTop: '5px',
    };

    return (
      <div style={{backgroundColor: '#fff', margin: '15px 0'}}>
        {this.state.news.map((item, index) => (
          <WingBlank key={index}>
            <WhiteSpace size="lg"/>

            <Link to={`/details/${item.uniquekey}`}>
              <div style={{display: 'flex', padding: '10px 0', borderBottom: '1px solid #ddd'}}>
                <div className="imgBox"
                     style={{flexGrow: 1}}>
                  <img style={{height: '80px',borderRadius: '6px'}} src={item.thumbnail_pic_s} alt={item.title}/>
                </div>
                <div style={{marginLeft: '15px', flexGrow: 3}}>
                  <p style={resourceStyle}>{item.author_name}</p>
                  <h3 style={titleStyle}>{item.title}</h3>
                  <p style={timeStyle}>{item.date}</p>
                </div>
              </div>
            </Link>

            {/*<Card>*/}
            {/*<Card.Body>*/}
            {/*<Link to={`/details/${item.uniquekey}`}>*/}

            {/*<div className="imgBox" style={{height: '160px', overflow: 'hidden', borderRadius: '6px'}}>*/}
            {/*<img width="100%" src={item.thumbnail_pic_s} alt={item.title}/>*/}
            {/*</div>*/}
            {/*<p style={resourceStyle}>{item.author_name}</p>*/}
            {/*<h3 style={titleStyle}>{item.title}</h3>*/}
            {/*<p style={timeStyle}>{item.date}</p>*/}
            {/*</Link>*/}
            {/*</Card.Body>*/}
            {/*</Card>*/}
          </WingBlank>
        ))}
      </div>


    )
  }
}

export default MobileListBlock;