import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import CountUp from './CountUp';
import LightRays from './LightRays';
import DecryptedText from './DecryptedText';
import TextType from './TextType';
import './Hero.css';


import useIsMobile from '../hooks/useIsMobile';

const Hero = () => {
    const isMobile = useIsMobile();

    const handleScroll = () => {
        const admissionSection = document.getElementById('admissions');
        if (admissionSection) {
            admissionSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                {/* Only calculate LightRays on non-mobile devices */}
                {!isMobile && (
                    <LightRays
                        raysColor="#F7931E"
                        raysSpeed={0.2}
                        lightSpread={0.6}
                        rayLength={0.8}
                        mouseInfluence={0.05}
                        raysOrigin="top-center"
                        className="hero-rays"
                    />
                )}
                <div className="hero-overlay"></div>
                {/* Abstract shapes for depth */}
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text">
                    <div className="hero-badge">
                        <DecryptedText
                            text="Est. 2003 BS | National Education Award Winner"
                            speed={50}
                            maxIterations={20}
                            characters="ABCD1234!?"
                            className="hero-badge-text"
                            parentClassName="hero-badge-wrapper"
                            animateOn="view"
                            revealDirection="center"
                        />
                    </div>
                    <h1>
                        Pioneering Excellence in <br />
                        <span className="highlight">
                            <TextType
                                text={['+2 Education', 'Science & Tech', 'Management', 'Law & Justice']}
                                typingSpeed={100}
                                deletingSpeed={50}
                                pauseDuration={2000}
                                textColors={['#F7931E', '#3498db', '#F7931E', '#9b59b6']}
                                cursorCharacter="|"
                            />
                        </span>
                    </h1>
                    <p>
                        One of Nepal’s most prestigious government colleges offering quality programs in Science, Management, Law, and Electronics.
                        Join a legacy of over 2000 students achieving greatness.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={handleScroll}>
                            Apply Now <ArrowRight size={18} />
                        </button>
                        <button className="btn btn-secondary btn-outline-white">
                            Explore Programs <BookOpen size={18} />
                        </button>
                    </div>


                    <div className="hero-stats-mini">
                        <div className="stat-item">
                            <strong><CountUp to={2000} separator="," />+</strong>
                            <span>Students</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <strong><CountUp to={4} /></strong>
                            <span>Streams</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <strong><CountUp to={100} />+</strong>
                            <span>Years Legacy</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    {/* Main Visual Composition */}
                    <div className="composition-wrapper">
                        <div className="main-image-placeholder">
                            <img src="/assets/hero-bg-new.jpg" alt="Viswa Niketan Excellence" className="hero-main-img" />
                        </div>

                        {/* Floating Cards */}
                        <div className="float-card card-science">
                            <div className="icon-box science-icon">🔬</div>
                            <div>
                                <strong>Science</strong>
                                <span className="small">Top Choice</span>
                            </div>
                        </div>

                        <div className="float-card card-management">
                            <div className="icon-box mgmt-icon">📊</div>
                            <div>
                                <strong>Management</strong>
                                <span className="small">Future Leaders</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
