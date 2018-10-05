import React, {Component} from 'react';
import {Row, Col, Skeleton, BackTop, Affix} from 'antd';
import PcHeader from './../Components/PcHeader';
import PcFooter from './../Components/PcFooter';
import PcNewsImageBlock from './../Components/PcNewsImageBlock';
import Comment from './../Components/Comment';

class PcDetail extends Component {
  constructor() {
    super();

    this.state = {
      newsDetail: '',
      articleLoading: true
    };
  };

  componentDidMount() {
    this.init();
  }

  componentWillReceiveProps() {
    this.init();
  }

  init() {
    this.setState({
      loading: true
    });
    let myFetchOptions = {
      method: 'GET'
    };
    fetch("https://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions)
      .then(res => res.json())
      .then(json => {
        this.setState({
          newsDetail: json,
          articleLoading: false
        });
        document.title = `ReactNews- ${this.state.newsDetail.title}`;
      });
  }

  createMarkup() {
    return {__html: this.state.newsDetail.pagecontent};
  }

  render() {
    return (
      <div>
        <PcHeader/>
        <div className="container">
          <Row gutter={24}>
            <Col span={16}>
              <Skeleton loading={this.state.articleLoading} active paragraph={{rows: 15}}>
                <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}/>
              </Skeleton>

              <Comment uniquekey={this.props.match.params.uniquekey} num={5} title="LATEST COMMENT"/>
            </Col>
            <Col span={8}>
              <Affix offsetTop={15}>
                <PcNewsImageBlock title="RELATED NEWS" count={12} colGrid={8} type="top"/>
              </Affix>
            </Col>
          </Row>
        </div>
        <PcFooter/>

        <BackTop/>
      </div>
    )
  }
}

export default PcDetail;