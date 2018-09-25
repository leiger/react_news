import React, {Component} from 'react';
import {WingBlank, WhiteSpace, Flex} from 'antd-mobile';
import MobileCarousel from './MobileCarousel';
import MobileImageBlock from './MobileImageBlock';
import MobileListBlock from './MobileListBlock';

import carouselImg1 from './../../images/carousel_1.jpg';
import carouselImg2 from './../../images/carousel_2.jpg';
import carouselImg3 from './../../images/carousel_3.jpg';
import carouselImg4 from './../../images/carousel_4.jpg';

class MobileContainer extends Component {
  constructor() {
    super();
    this.state = {
      images: [carouselImg1, carouselImg2, carouselImg3, carouselImg4]
    };
  }

  render() {
    return (
      <div>
        <MobileCarousel images={this.state.images}/>
        <MobileImageBlock title="GLOBAL NEWS" count={6} type="guonei"/>
        <MobileListBlock title="GLOBAL NEWS" count={6} type="guonei"/>
      </div>

    )
  }
}

export default MobileContainer;