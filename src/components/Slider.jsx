import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/Slider.css';

import slider1 from '../assets/slider/slider1.jpg';
import slider2 from '../assets/slider/slider2.jpg';
import slider3 from '../assets/slider/slider3.jpg';
import slider4 from '../assets/slider/slider4.jpg';
import slider5 from '../assets/slider/slider5.jpg';

const Slider = () => {
    // Array de objetos con la información de las diapositivas
    const slides = [
        { image: slider1, alt: "First slide" },
        { image: slider2, alt: "Second slide" },
        { image: slider3, alt: "Third slide" },
        { image: slider4, alt: "Fourth slide" },
        { image: slider5, alt: "Fifth slide" }
    ];

    return (
        <div className="carousel-container"> {/* Contenedor adicional */}
            <Carousel>
                {/* Mapear las diapositivas */}
                {slides.map((slide, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="carousel"
                            src={slide.image}
                            alt={slide.alt}
                        />
                        <Carousel.Caption>
                            <h3>Tu Viaje de Adopción Simplificado</h3>
                            <p>Sitio enfocado en facilitar la adopción de mascotas conectando dueños cariñosos con animales necesitados de un hogar amoroso. Destacan un proceso de adopción simplificado con un registro fácil, registros completos de vacunación y orientación experta durante todo el proceso.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default Slider;


