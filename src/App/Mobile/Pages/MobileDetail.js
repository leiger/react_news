import React, {Component} from 'react';

class MobileDetail extends Component {
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
        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}/>
      </div>
    )
  }
}

export default MobileDetail;