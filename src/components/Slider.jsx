import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { sliderData } from '../js/data';
import '../css/Slider.css';


const Slider = () => {
    return (
        <div className="carousel-container"> {/* Contenedor adicional */}
            <Carousel>
                {/* Mapear las diapositivas */}
                {sliderData.map((slide, index) => (
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


