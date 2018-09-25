import React, {Component} from 'react';
import {Carousel} from 'antd-mobile';

class MobileCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
          {this.props.images.map((image, index) => (
            <img key={index} src={image} alt="index" width="100%"/>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default MobileCarousel;