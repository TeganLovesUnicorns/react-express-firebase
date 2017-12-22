import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-bootstrap';
// import data from '../../res/imgdb/home.json';

// const CarouselItem = props => (
//   <Carousel.Item>
//     <img width={750} height={500} alt={props.alt} src={props.src} />
//   </Carousel.Item>
// );

CarouselItem.propTypes = {
  alt: React.propTypes.string.isRequired,
  src: React.propTypes.string.isRequired,
}

const Home = () => (
  <div className="home">
    <Carousel interval={5000}>
      {/* <CarouselItem /> */}
      <Carousel.Item>
        <img width={750} height={500} alt="Amos Lee 1" src="https://firebasestorage.googleapis.com/v0/b/eclipse-lighting-solutions.appspot.com/o/img%2FAL1701.jpg?alt=media&token=e66b31ea-4dfb-4af4-ba1f-c9b885581b8a" />
      </Carousel.Item>
      <Carousel.Item>
        <img width={750} height={500} alt="Amos Lee 2" src="https://firebasestorage.googleapis.com/v0/b/eclipse-lighting-solutions.appspot.com/o/img%2FAL1702.jpg?alt=media&token=12b2e38b-61d7-48ad-a34a-1e992f24fead" />
      </Carousel.Item>
      <Carousel.Item>
        <img width={750} height={500} alt="Amos Lee 3" src="https://firebasestorage.googleapis.com/v0/b/eclipse-lighting-solutions.appspot.com/o/img%2FAL1703.jpg?alt=media&token=0cf3d18c-c5e1-4222-b51f-a084b1683b88" />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default Home;
