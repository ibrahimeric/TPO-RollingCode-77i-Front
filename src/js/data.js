import slider1 from '../assets/slider/slider1.jpg';
import slider2 from '../assets/slider/slider2.jpg';
import slider3 from '../assets/slider/slider3.jpg';
import slider4 from '../assets/slider/slider4.jpg';
import slider5 from '../assets/slider/slider5.jpg';

import GitHubIco from '../../public/social-media/github.ico';
import LinkedInIco from '../../public/social-media/linkedin.ico';
import InstagramIco from '../../public/social-media/instagram.ico';

import turno1 from '../assets/turnos/turno1.webp';
import turno2 from '../assets/turnos/turno2.webp';

import pet1 from '../assets/pets/pet1.webp';
import pet2 from '../assets/pets/pet2.webp';


export const menuItems = [
  { title: "Inicio", url: "/" },
  { title: "Mascotas", url: "/mascotas" },
  { title: "Turnos", url: "/turnos" },
  { title: "Adopción", url: "/adopcion" },
  // Agrega más elementos de menú según sea necesario
];

export const sliderData = [
  {
    image: slider1,
    alt: "First slide",
    title: "Registro Único de Mascotas",
    description: "Facilitamos el registro único de mascotas, brindando una plataforma centralizada para almacenar y acceder a la información de tus mascotas de forma fácil y segura.",
  },
  {
    image: slider2,
    alt: "Second slide",
    title: "Portal de Adopción",
    description: "Conectamos a dueños cariñosos con animales necesitados de un hogar amoroso. Nuestro portal de adopción simplifica el proceso de búsqueda y encuentro de tu nueva mascota.",
  },
  {
    image: slider3,
    alt: "Third slide",
    title: "Vacunación Completa",
    description: "Garantizamos registros completos de vacunación para todas las mascotas en nuestro sistema. La salud y el bienestar de tu mascota son nuestra prioridad.",
  },
  {
    image: slider4,
    alt: "Fourth slide",
    title: "Comunidad de Amantes de las Mascotas",
    description: "Únete a nuestra comunidad de amantes de las mascotas. Comparte tus experiencias, consejos y fotos con otros dueños de mascotas apasionados como tú.",
  },
  {
    image: slider5,
    alt: "Fifth slide",
    title: "Apoyo Experto",
    description: "Recibe orientación durante todo el proceso de adopción y cuidado de mascotas. Estamos aquí para brindarte el apoyo que necesitas en cada paso del camino."
  }
];

export const userExperiences = [
  {
    image: 'https://www.cronica.com.ar/img/2022/12/20/compleja_1_crop1671549518508.jpg?__scale=w:720,h:406,t:2',
    text: '"Fácil de encontrar a mi compañero y rastrear registros de vacunación."',
    name: '- Maria'
  },
  {
    image: 'https://images.unsplash.com/photo-1517256673644-36ad11246d21?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: '"Proceso de registro único y función de registro de vacunación eficiente".',
    name: '- Ana'
  },
  {
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: '"Encontré al amigo peludo perfecto para mi familia."',
    name: '- Pablo'
  }
];

/* footer */
export const socialMediaLinks = [  /* enlaces de redes sociales */
  { href: "https://github.com/ibrahimeric/TPO-RollingCode-77i-Front", icon: GitHubIco, alt: "Pet Web Portal GitHub" },
  { href: "https://www.linkedin.com/in/petwebportal", icon: LinkedInIco, alt: "Pet Web Portal LinkedIn" },
  { href: "https://www.instagram.com/municipalidadconcepcion/", icon: InstagramIco, alt: "Pet Web Portal Instagram" }
];

export const footerLinks = [
  { title: "Servicios", items: ["Mis mascotas", "Adopcion", "Turnos"] },
  { title: "Contacto", items: ["Soporte", "Contacto", "Acerca de"] }
];

export const contactData = {
  address: "9 de Julio 112, Concepción, Tucumán, Argentina.",
  addressLink: "https://www.google.com.gt/maps/place/La+Oferta/@-27.3477648,-65.5910017,18z/data=!4m10!1m2!2m1!1sla+oferta!3m6!1s0x9423cf5c99bfe997:0x1e14071c27ac474d!8m2!3d-27.3466769!4d-65.5894634!15sCglsYSBvZmVydGFaCyIJbGEgb2ZlcnRhkgEOY2xvdGhpbmdfc3RvcmXgAQA!16s%2Fg%2F11b7xmqvg8?entry=ttu",
  whatsappLink: "https://api.whatsapp.com/send?phone=543865653191&text=Hola%2C%20estoy%20interesado%20en%20contactarme%20por%20una%20mascota",
  phone: "+54 9 3865-653191",
  phoneLink: "tel:+5493865-396343",
  email: "petwebp@gmail.com",
  emailLink: "mailto:petwebp@gmail.com?subject=Me%20Contacto%20Por%20Una%20Mascota",
};

export const socialMediaLinksModal = {
  facebook: "https://www.facebook.com/municipalidadeconcepcion",
  instagram: "https://www.instagram.com/municipalidadconcepcion/",
  twitter: "https://x.com/Concepcion_Tuc/",
};


export const pets = [

];