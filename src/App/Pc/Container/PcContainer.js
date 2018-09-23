import React, {Component} from 'react';
import {Row, Col, Carousel, Menu, Icon, Form, Tabs, Modal, message, Input, Button, Divider} from 'antd';
import './PcContainer.css';
import PcNewsBlock from './PcNewsBlock';

import carouselImg1 from './../../images/carousel_1.jpg';
import carouselImg2 from './../../images/carousel_2.jpg';
import carouselImg3 from './../../images/carousel_3.jpg';
import carouselImg4 from './../../images/carousel_4.jpg';

const TabPane = Tabs.TabPane;

class PcContainer extends Component {
  constructor() {
    super();
    this.state = {
      carouselImgs: [carouselImg1, carouselImg2, carouselImg3, carouselImg4]
    }
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      autoplay: true
    };

    return (
      <div className="container">
        <Row gutter={24}>
          <Col span={6}>
            {/*carousel*/}
            <div className="leftContainer">
              <div className="carousel">
                <Carousel {...settings}>
                  {this.state.carouselImgs.map((img, index) => {
                    return (<div key={index}><img src={img}/></div>)
                  })}
                </Carousel>
              </div>
            </div>
          </Col>
          <Col span={8}>
            {/*tabs*/}
            <Tabs size="small" className="tabsNews">
              <TabPane tab="TOP NEWS" key="1">
                <PcNewsBlock count={15} type="top" width="100%" bordered="false"/>
              </TabPane>
              <TabPane tab="TOP NEWS" key="2">
                <PcNewsBlock count={15} type="guoji" width="100%" bordered="false"/>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </div>
    )
  }
}

export default PcContainer;