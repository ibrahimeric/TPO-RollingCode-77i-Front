import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { sliderData } from '../js/data';
import '../css/Slider.css';

const Slider = () => {
    return (
        <Carousel id="carousel-principal">
            {sliderData.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div className="carousel-item-wrapper">
                        <img
                            className="carousel-imagen"
                            src={slide.image}
                            alt={slide.alt}
                        />
                        <div className="custom-carousel-caption">
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Slider;


