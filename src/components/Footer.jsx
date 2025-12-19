import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container footer-grid">
                <div className="footer-col">
                    <h3>Viswa Niketan</h3>
                    <p>Pioneering excellence in education since 2003 BS. Producing capable, moral, and intellectual citizens.</p>
                    <div className="social-links">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#academics">Academics</a></li>
                        <li><a href="#admissions">Admissions</a></li>
                        <li><a href="#fees">Fee Structure</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <ul className="contact-list">
                        <li><MapPin size={18} /> Tripureswor, Kathmandu</li>
                        <li><Phone size={18} /> +977-1-4261623</li>
                        <li><Mail size={18} /> info@vns.edu.np</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Newsletter</h4>
                    <p>Subscribe for latest updates.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Your email" />
                        <button className="btn-sm btn-primary">Go</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom relative z-10">
                <p>&copy; {new Date().getFullYear()} Viswa Niketan Secondary School. All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;
