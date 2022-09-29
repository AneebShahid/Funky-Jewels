import Carousel from 'react-bootstrap/Carousel';
import slide1 from './slide1.png';
import slide2 from './slide2.png';
import slide3 from './slide3.png';

function Slider() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          style={{
            borderRadius: 40,
          }}
          className="d-block w-100"
          src={slide1}
          alt="First slide"
          opacity="0.7"
        />
        <Carousel.Caption>
          {/* <h3
            style={{
              color: 'white',
            }}
          >
            Cutomization Available
          </h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            borderRadius: 40,
          }}
          className="d-block w-100"
          src={slide3}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3
            style={{
              color: 'white',
            }}
          >
            100% Handmade Products
          </h3> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            borderRadius: 40,
          }}
          className="d-block w-100"
          src={slide2}
          alt="Third slide"
        />

        <Carousel.Caption>{/* <h3>Third slide label</h3> */}</Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
