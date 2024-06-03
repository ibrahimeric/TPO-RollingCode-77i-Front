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
                    <h3>Tu Viaje de Adopción Simplificado</h3>
                    <p>Sitio enfocado en facilitar la adopción de mascotas conectando dueños cariñosos con animales necesitados de un hogar amoroso. Destacan un proceso de adopción simplificado con un registro fácil, registros completos de vacunación y orientación experta durante todo el proceso.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Tu Viaje de Adopción Simplificado</h3>
                    <p>Sitio enfocado en facilitar la adopción de mascotas conectando dueños cariñosos con animales necesitados de un hogar amoroso. Destacan un proceso de adopción simplificado con un registro fácil, registros completos de vacunación y orientación experta durante todo el proceso.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel"
                    src={slider3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Tu Viaje de Adopción Simplificado</h3>
                    <p>Sitio enfocado en facilitar la adopción de mascotas conectando dueños cariñosos con animales necesitados de un hogar amoroso. Destacan un proceso de adopción simplificado con un registro fácil, registros completos de vacunación y orientación experta durante todo el proceso.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel"
                    src={slider4}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Tu Viaje de Adopción Simplificado</h3>
                    <p>Sitio enfocado en facilitar la adopción de mascotas conectando dueños cariñosos con animales necesitados de un hogar amoroso. Destacan un proceso de adopción simplificado con un registro fácil, registros completos de vacunación y orientación experta durante todo el proceso.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carousel"
                    src={slider5}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Tu Viaje de Adopción Simplificado</h3>
                    <p>Sitio enfocado en facilitar la adopción de mascotas conectando dueños cariñosos con animales necesitados de un hogar amoroso. Destacan un proceso de adopción simplificado con un registro fácil, registros completos de vacunación y orientación experta durante todo el proceso.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider
