import React, {Component} from 'react';
import {Row, Col, Skeleton, BackTop} from 'antd';
import PcHeader from './../Components/PcHeader';
import PcFooter from './../Components/PcFooter';
import PcNewsImageBlock from './../Components/PcNewsImageBlock';

class PcDetail extends Component {
  constructor() {
    super();

    this.state = {
      newsDetail: '',
      loading: true
    };
  };

  componentDidMount() {
    this.init();
  }

  componentWillReceiveProps() {
    this.init();
  }

  init() {
    this.state.loading = true;
    let myFetchOptions = {
      method: 'GET'
    };
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, myFetchOptions)
      .then(res => res.json())
      .then(json => {
        this.setState({
          newsDetail: json,
          loading: false
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
              <Skeleton loading={this.state.loading} active paragraph={{rows: 15}}>
                <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}/>
              </Skeleton>
            </Col>
            <Col span={8}>
              <PcNewsImageBlock title="RELATED NEWS" count={12} colGrid={8} type="top"/>
            </Col>
          </Row>
        </div>
        <PcFooter/>

        <BackTop />
      </div>
    )
  }
}

export default PcDetail;