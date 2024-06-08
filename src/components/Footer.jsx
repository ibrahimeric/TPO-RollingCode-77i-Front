import { socialMediaLinks, footerLinks, footerParagraph } from '../js/data';
import '../css/Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="page-footer font-small blue">
                    <div className="text-center text-md-left">
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">
                                <h5 className="text-uppercase">{footerParagraph[0].title}</h5>
                                <p className="text-paragraph">
                                    {footerParagraph[0].paragraph.map((paragraph, index) => (
                                        <span key={index}>{paragraph}</span>
                                    ))}
                                </p>
                            </div>

                            <hr className="clearfix w-100 d-md-none pb-0" />

                            {footerLinks.map((linkGroup, index) => (
                                <div key={index} className="col-md-3 mb-md-0 mb-3">
                                    <h5 className="text-uppercase">{linkGroup.title}</h5>
                                    <ul className="list-unstyled">
                                        {linkGroup.items.map((item, i) => (
                                            <li key={i}><a href="#!">{item}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <div className="justify-content-center">
                                <div className="iconos">
                                    {socialMediaLinks.map((socialMediaLink, index) => (
                                        <a key={index} href={socialMediaLink.href}>
                                            <img className="icono-img"
                                                src={socialMediaLink.icon}
                                                alt={socialMediaLink.alt}
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="justify-content-center footer-copyright text-center py-3 list-unstyled">
                                <span>© 2024 Copyright:</span>
                                <li><a href="https://petwebportal.com/">PetWebPortal.com</a></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;