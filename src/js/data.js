// Imagenes importacion
/* slider */
import slider1 from '../assets/slider/slider1.jpg';
import slider2 from '../assets/slider/slider2.jpg';
import slider3 from '../assets/slider/slider3.jpg';
import slider4 from '../assets/slider/slider4.jpg';
import slider5 from '../assets/slider/slider5.jpg';

// footer: redes sociales
import GitHubIco from '../../public/social-media/github.ico';
import LinkedInIco from '../../public/social-media/linkedin.ico';
import InstagramIco from '../../public/social-media/instagram.ico';


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
  {
    // Primera diapositiva
    image: slider1,
    alt: "First slide",
    title: "Registro Único de Mascotas",
    description: "Facilitamos el registro único de mascotas, brindando una plataforma centralizada para almacenar y acceder a la información de tus mascotas de forma fácil y segura.",
  },
  {
    // Segunda diapositiva
    image: slider2,
    alt: "Second slide",
    title: "Portal de Adopción",
    description: "Conectamos a dueños cariñosos con animales necesitados de un hogar amoroso. Nuestro portal de adopción simplifica el proceso de búsqueda y encuentro de tu nueva mascota.",
  },
  {
    // Tercera diapositiva
    image: slider3,
    alt: "Third slide",
    title: "Vacunación Completa",
    description: "Garantizamos registros completos de vacunación para todas las mascotas en nuestro sistema. La salud y el bienestar de tu mascota son nuestra prioridad.",
  },
  {
    // Cuarta diapositiva
    image: slider4,
    alt: "Fourth slide",
    title: "Comunidad de Amantes de las Mascotas",
    description: "Únete a nuestra comunidad de amantes de las mascotas. Comparte tus experiencias, consejos y fotos con otros dueños de mascotas apasionados como tú.",
  },
  {
    // Quinta diapositiva
    image: slider5,
    alt: "Fifth slide",
    title: "Apoyo Experto",
    description: "Recibe orientación durante todo el proceso de adopción y cuidado de mascotas. Estamos aquí para brindarte el apoyo que necesitas en cada paso del camino."
  }
];


/* tarjetas */
const cardsData = [
  {
    imagen: "/public/cards/card1.webp",
    title: "Registro de Mascotas",
    text: "Registra y gestiona la información de tus mascotas fácilmente",
    route: "/formulario-contacto"
  },
  {
    imagen: "/public/cards/card2.webp",
    title: "Adopción de Mascotas",
    text: "Encuentra una nueva familia para mascotas necesitadas",
    route: "/ruta-deseada"
  },
  {
    imagen: "/public/cards/card3.webp",
    title: "Reserva de Turnos",
    text: "Agenda turnos para vacunación y castración de manera sencilla",
    route: "/ruta-deseada"
  }
  // Agrega más objetos aquí si necesitas más tarjetas
];

/* experiencias de usuarios */
const userExperiences = [
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

/* footer */
const socialMediaLinks = [  /* enlaces de redes sociales */
  { href: "https://github.com/petwebportal", icon: GitHubIco, alt: "Pet Web Portal GitHub" },
  { href: "https://www.linkedin.com/in/petwebportal", icon: LinkedInIco, alt: "Pet Web Portal LinkedIn" },
  { href: "https://instagram.com/@petwebportal", icon: InstagramIco, alt: "Pet Web Portal Instagram" }
];

const footerLinks = [
  // { title: "Acerca de nosotros", items: ["Misión y visión", "Nuestro equipo", "Testimonios", "Blog"] },
  { title: "Servicios", items: ["Registro de mascotas", "Portal de adopción", "Vacunación", "Cuidado de mascotas"] },
  { title: "Contacto", items: ["Soporte", "Formulario de contacto", "Ubicación", "Redes sociales"] }
];

const footerParagraph = [
  { title: "Sobre Nosotros", paragraph: ["Descubre tu compañero ideal en nuestro portal de adopción de mascotas. Con un registro único y completo, facilitamos la conexión entre dueños amorosos y mascotas necesitadas. Únete a nuestra comunidad comprometida con el bienestar animal hoy mismo"] }
];

/* MOdal */
const contactData = {
  address: "9 de Julio 112, Concepción, Tucumán, Argentina.",
  addressLink: "https://www.google.com.gt/maps/place/La+Oferta/@-27.3477648,-65.5910017,18z/data=!4m10!1m2!2m1!1sla+oferta!3m6!1s0x9423cf5c99bfe997:0x1e14071c27ac474d!8m2!3d-27.3466769!4d-65.5894634!15sCglsYSBvZmVydGFaCyIJbGEgb2ZlcnRhkgEOY2xvdGhpbmdfc3RvcmXgAQA!16s%2Fg%2F11b7xmqvg8?entry=ttu",
  whatsappLink: "https://api.whatsapp.com/send?phone=543865653191&text=Hola%2C%20estoy%20interesado%20en%20contactarme%20por%20una%20mascota",
  phone: "+54 9 3865-653191",
  phoneLink: "tel:+5493865-396343",
  email: "petwebp@gmail.com",
  emailLink: "mailto:petwebp@gmail.com?subject=Me%20Contacto%20Por%20Una%20Mascota",
};

const socialMediaLinksModal = {
  facebook: "https://www.facebook.com/municipalidadeconcepcion",
  instagram: "https://www.instagram.com/municipalidadconcepcion/",
  twitter: "https://x.com/Concepcion_Tuc/",
};

export {
  cardsData,
  menuItems,
  sliderData,
  userExperiences,
  socialMediaLinks,
  footerLinks,
  footerParagraph,
  contactData,
  socialMediaLinksModal
};
