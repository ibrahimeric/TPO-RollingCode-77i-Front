import GitHubIco from '/public/social-media/github.ico';
import LinkedInIco from '/public/social-media/linkedin.ico';
import InstagramIco from '/public/social-media/instagram.ico';
import '../css/Footer.css';

const Footer = () => {
    return (
        <div className="footer-container fixed-bottom">
            <div className="page-footer font-small blue">
                <div className="text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Footer Content</h5>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum dolor corrupti reiciendis neque,
                                soluta, obcaecati veritatis cumque itaque aperiam hic id mollitia rerum quibusdam consectetur ipsa
                                minima provident tenetur reprehenderit
                            </p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </div>
                        <div className="justify-content-center">
                            <div className="iconos">
                                <a href="https://github.com/petwebportal">
                                    <img className="icono-img"
                                        src={GitHubIco}
                                        alt="Pet Web Portal GitHub"
                                    />
                                </a>
                                <a href="https://www.linkedin.com/in/petwebportal">
                                    <img
                                        className="icono-img"
                                        src={LinkedInIco}
                                        alt="Pet Web Portal LinkedIn"
                                    />
                                </a>
                                <a href="https://instagram.com/@petwebportal">
                                    <img
                                        className="icono-img"
                                        src={InstagramIco}
                                        alt="Pet Web Portal Instagram"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="justify-content-center footer-copyright text-center py-3 list-unstyled">
                            <span>© 2020 Copyright:</span>
                            <li><a href="https://petwebportal.com/">PetWebPortal.com</a></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
