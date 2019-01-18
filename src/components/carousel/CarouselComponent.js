import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = ({ classname, img1, img2, img3, img4 }) => (
  <Carousel
    className={classname}
    autoPlay
    infiniteLoop
    interval={8000}
    transitionTime={3000}
    showIndicators={false}
    showStatus={false}
  >
    <div>
      <img src={img1} alt="image_carousel_1" />
      <p className="legend">Legend 1</p>
    </div>
    <div>
      <img src={img2} alt="image_carousel_2" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img src={img3} alt="image_carousel_3" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img src={img4} alt="image_carousel_4" />
      <p className="legend">Legend 4</p>
    </div>
  </Carousel>
);

export default CarouselComponent;
