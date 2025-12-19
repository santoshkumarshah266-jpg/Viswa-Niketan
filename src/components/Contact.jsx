import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <span className="section-tag">Get in Touch</span>
                        <h2 className="section-title">Contact Us</h2>
                        <p className="mb-4 description">We are here to answer any questions you may have about our programs and admissions.</p>

                        <div className="info-list">
                            <div className="info-item">
                                <div className="icon-box"><Phone size={20} /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+977-1-4261623</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><Mail size={20} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>info@vns.edu.np</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><MapPin size={20} /></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Tripureswor, Kathmandu, Nepal</p>
                                </div>
                            </div>
                        </div>

                        <div className="map-placeholder">
                            <iframe
                                title="Viswa Niketan Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.7032768565256!2d85.312158876114!3d27.695551976189387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ad263e5f43%3A0xe5263174577237e1!2sViswa%20Niketan%20Secondary%20School!5e0!3m2!1sen!2snp!4v1709123456789!5m2!1sen!2snp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <h3>Send Inquiry</h3>
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <select>
                                    <option>General Inquiry</option>
                                    <option>Admissions</option>
                                    <option>Scholarships</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="4" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="button" className="btn btn-primary w-100">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;
