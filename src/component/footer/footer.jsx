import React from 'react';
import './footer.css';
import {FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaRegEnvelope} from 'react-icons/fa';

function Footer() {
    return (
        <>
        <div className="Footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-5 col-12 ft-1">
                        <div className="titleFooter">
                            <span className='title'>GuitarKu</span>
                        </div>
                        <p>Place with owning some best guitars sales and product for guitar antusiast and accomplished in mission to bring great music for every people to be an artist.</p>
                        <div className="footer-icons">
                            <i class="twitter"><FaTwitter/></i>
                            <i class="instagram"><FaInstagram/></i>
                            <i class="linkedin"><FaLinkedinIn/></i>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-12 ft-2">
                        <h5>Services</h5>
                        <ul>
                            <li className="nav-item">
                                <a className="" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="" href="/">Collection</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-4 col-12 ft-3">
                        <h5>Contact Us</h5>
                        <p><i class="phone"><FaPhoneAlt/></i> +62 217359083</p>
                        <p><i class="envelope"><FaRegEnvelope/></i> guitarku@mail.com</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;