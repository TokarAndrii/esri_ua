import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent = ({ classname, images = [] }) => (
  <Carousel
    className={classname}
    autoPlay
    infiniteLoop
    interval={15000}
    transitionTime={5000}
    showIndicators={false}
    showStatus={false}
  >
    {images.map(image => (
      <div key={image.id}>
        <img src={image.imageUrl} alt={`image_carousel_${image.id}`} />
        <p className="legend">{image.legend}</p>
      </div>
    ))}
  </Carousel>
);

export default CarouselComponent;
