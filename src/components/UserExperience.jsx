import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import '../css/UserExperience.css';

const UserExperience = () => {
    const experiences = [
        {
            image: '/src/assets/user-experience/perfil1.jpg',
            text: '"Fácil de encontrar a mi compañero y rastrear registros de vacunación."',
            name: '- Maria'
        },
        {
            image: '/src/assets/user-experience/perfil2.jpg',
            text: '"Proceso de registro único y función de registro de vacunación eficiente".',
            name: '- Ana'
        },
        {
            image: '/src/assets/user-experience/perfil3.jpg',
            text: '"Encontré al amigo peludo perfecto para mi familia."',
            name: '- Pablo'
        }
    ];

    return (
        <div className='contenedor'>
            <Carousel className='user-experience-carousel'>
                {experiences.map((experience, index) => (
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

