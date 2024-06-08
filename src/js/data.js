// Imagenes importacion
/* slider */
import slider1 from '../assets/slider/slider1.jpg';
import slider2 from '../assets/slider/slider2.jpg';
import slider3 from '../assets/slider/slider3.jpg';
import slider4 from '../assets/slider/slider4.jpg';
import slider5 from '../assets/slider/slider5.jpg';

// Datos
/* navbar */
const menuItems = [
  { title: "Inicio", url: "#home" },
  { title: "Servicios", url: "#services" },
  { title: "Turnos", url: "#shifts" },
  // Agrega más elementos de menú según sea necesario
];

/* slider */
const sliderData = [
  { image: slider1, alt: "First slide" },
  { image: slider2, alt: "Second slide" },
  { image: slider3, alt: "Third slide" },
  { image: slider4, alt: "Fourth slide" },
  { image: slider5, alt: "Fifth slide" }
];

/* tarjetas */
const cardsData = [
  {
    imagen: "/public/cards/card1.webp",
    title: "Registro de Mascotas",
    text: "Registra y gestiona la información de tus mascotas fácilmente"
  },
  {
    imagen: "/public/cards/card2.webp",
    title: "Adopción de Mascotas",
    text: "Encuentra una nueva familia para mascotas necesitadas"
  },
  {
    imagen: "/public/cards/card3.webp",
    title: "Reserva de Turnos",
    text: "Agenda turnos para vacunación y castración de manera sencilla"
  }
  // Agrega más objetos aquí si necesitas más tarjetas
];

const userExperiences  = [
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

export { cardsData, menuItems, sliderData, userExperiences  };
