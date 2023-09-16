import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  const imgsrc = "/Website-build-v0.1/src/components/Imagerotation/AGNIRATH logo.png"; // Use forward slashes

  return (
    <Carousel>
      <Carousel.Item>
        <img src={imgsrc} alt="First slide" /> {/* Add the 'alt' attribute */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgsrc} alt="Second slide" /> {/* Add the 'alt' attribute */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imgsrc} alt="Third slide" /> {/* Add the 'alt' attribute */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
