import React from 'react';
import './Footer.css';
import logo from '../../images/white-logo.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container footer-info">
                <div className='row row-cols-md-2'>
                    <div className="col-lg-4 footer-brand">
                        <a className="footer-logo" href="/">
                            <img src={logo} alt="logo" width="80" height="25" />
                        </a>
                        <p>Address: 60-49 Road 11378 New York</p>
                        <p>Phone: +65 11.188.888</p>
                        <p>Email: hello.hava@gmail.com</p>
                    </div>

                    <div className="col-lg-3 footer-links">
                        <h4>Information</h4>
                        <ul>
                            <li><a href="/">Privacy and Policy</a></li>
                            <li><a href="/">Legal Information</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 footer-links">
                        <h4>My Account</h4>
                        <ul>
                            <li><a href="/">My Account</a></li>
                            <li><a href="/">Products</a></li>
                            <li><a href="/">Shopping Cart</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 footer-newsletter">
                        <h4>Join Our Newsletter Now</h4>
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
