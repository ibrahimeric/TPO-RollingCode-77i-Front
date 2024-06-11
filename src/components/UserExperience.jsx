import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { userExperiences } from '../js/data';
import '../css/UserExperience.css';

const UserExperience = () => {
    return (
        <div className='contenedor-experiences'>
            <Carousel
                className='user-experience-carousel'
                controls={true} // botones de control
                indicators={false} // indicadores
                interval={3000} // reproducción automática
                pause={false} // No pausa el Carousel al pasar el mouse
            >
                {userExperiences.map((experience, index) => (
                    <Carousel.Item key={index} className='item-container'>
                        <div className='user-slide'>
                            <div className='image-container'>
                                <Image
                                    className='rounded-circle'
                                    src={experience.image}
                                    alt={`Profile ${index}`}
                                />

                            </div>
                            <div className='text-container'>
                                <h5 className='text-comment'>{experience.text}</h5>
                                <p className='text-name'>{experience.name}</p>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default UserExperience;

