import React from 'react';
import { Target, Eye, Quote } from 'lucide-react';
import ScrollFloat from './ScrollFloat';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="about-layout-stacked">
                    {/* Principal Showcase - Split Layout */}
                    <div className="principal-showcase-split">
                        {/* Left Side: Content & Quote */}
                        <div className="principal-content-panel">
                            <div className="quote-icon-large"><Quote size={48} /></div>
                            <p className="principal-quote-large">
                                “Education is not just about imparting knowledge but about shaping responsible and empowered citizens. At Viswa Niketan, we guide students towards success and integrity.”
                            </p>

                            <div className="principal-meta-row">
                                <div className="principal-identity">
                                    <div className="identity-marker"></div>
                                    <div>
                                        <h3>Heramba Raj Kadel</h3>
                                        <p>Principal</p>
                                    </div>
                                </div>
                                <div className="exp-badge">
                                    <strong>70+</strong>
                                    <span>Years</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Large Image */}
                        <div className="principal-image-panel">
                            <img
                                src={`${import.meta.env.BASE_URL}assets/principal.jpg`}
                                alt="Heramba Raj Kadel"
                                className="principal-split-img"
                            />
                        </div>
                    </div>

                    {/* Text Content - Legacy of Excellence (Moved Down) */}
                    <div className="about-content-centered">
                        <span className="section-tag">Since 2003 BS</span>
                        <ScrollFloat animationDuration={1.2} ease="back.inOut(2)" scrollStart="center bottom+=50%" containerClassName="section-title">
                            A Legacy of Excellence
                        </ScrollFloat>
                        <p className="lead-text">
                            Viswa Niketan Secondary School has stood as a pillar of educational excellence in the heart of Kathmandu for over a century.
                        </p>
                        <p className="body-text">
                            From our humble beginnings in Tripureswor, we have grown into one of the nation's premier government institutions, recognized for our outstanding results in +2 Board examinations and our commitment to holistic student development.
                        </p>
                        {/* Mission/Vision removed as requested */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
