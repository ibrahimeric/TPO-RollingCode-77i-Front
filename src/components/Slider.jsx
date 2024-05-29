import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../assets/slider/slider1.jpg';
import slider2 from '../assets/slider/slider2.jpg';
import slider3 from '../assets/slider/slider3.jpg';
import slider4 from '../assets/slider/slider4.jpg';
import slider5 from '../assets/slider/slider5.jpg';
import '../css/Slider.css'

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="carousel"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>La nueva tendencia</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quis! Eum, animi! Odio magni rerum maxime consectetur fugiat? Deleniti doloremque aliquid sunt suscipit dolores, possimus minima molestiae odit perferendis enim?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>La nueva tendencia</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quis! Eum, animi! Odio magni rerum maxime consectetur fugiat? Deleniti doloremque aliquid sunt suscipit dolores, possimus minima molestiae odit perferendis enim?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel"
                    src={slider3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>La nueva tendencia</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quis! Eum, animi! Odio magni rerum maxime consectetur fugiat? Deleniti doloremque aliquid sunt suscipit dolores, possimus minima molestiae odit perferendis enim?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel"
                    src={slider4}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>La nueva tendencia</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quis! Eum, animi! Odio magni rerum maxime consectetur fugiat? Deleniti doloremque aliquid sunt suscipit dolores, possimus minima molestiae odit perferendis enim?</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel"
                    src={slider5}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>La nueva tendencia</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quis! Eum, animi! Odio magni rerum maxime consectetur fugiat? Deleniti doloremque aliquid sunt suscipit dolores, possimus minima molestiae odit perferendis enim?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider
