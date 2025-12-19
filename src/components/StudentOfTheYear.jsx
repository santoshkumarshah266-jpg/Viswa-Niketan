import React from 'react';
import { Award, Star, Quote } from 'lucide-react';
import { MagicBento, ParticleCard } from './MagicBento';
import ScrollFloat from './ScrollFloat';
import DecryptedText from './DecryptedText';
import './StudentOfTheYear.css';

const StudentOfTheYear = ({ isMobile = false }) => {
    return (
        <section id="student-of-the-year" className="soty-section">
            <div className="container">
                <div className="section-header text-center">
                    <ScrollFloat
                        animationDuration={1.2}
                        ease="back.inOut(2)"
                        scrollStart="top bottom+=20%"
                        containerClassName="section-title"
                    >
                        Student of the Year
                    </ScrollFloat>
                    <p>Celebrating academic excellence and outstanding character.</p>
                </div>

                <div className="soty-wrapper">
                    <MagicBento
                        enableSpotlight={!isMobile} // Disable spotlight tracking on mobile for performance
                        spotlightRadius={400}
                        glowColor="247, 147, 30" // Brand Orange
                    >
                        <ParticleCard
                            className="soty-card magic-bento-card magic-bento-card--border-glow"
                            glowColor="247, 147, 30"
                            style={{ '--glow-color': '247, 147, 30' }}
                            isActive={true}
                            particleCount={isMobile ? 0 : 130} // 0 particles on mobile
                        >
                            <div className="soty-content">
                                <div className="soty-image-wrapper">
                                    <div className="soty-image-container">
                                        <img
                                            src="/assets/student-of-the-year.jpg"
                                            alt="Santosh Kumar Shah - Student of the Year"
                                            className="soty-image"
                                        />
                                    </div>
                                    <div className="rank-badge">
                                        <Award size={24} /> #1
                                    </div>
                                </div>

                                <div className="soty-details">
                                    <div className="soty-header">
                                        <span className="batch-tag">Batch 2081/2082</span>
                                        <h2>
                                            <span className="highlighted-name">Santosh Kumar Shah</span>
                                        </h2>
                                        <p className="stream-text">Management Stream</p>
                                    </div>

                                    <div className="quote-box">
                                        <Quote size={20} className="quote-icon-start" />
                                        <p>
                                            "Consistency is the key to mastering any subject. Viswa Niketan provided me the environment to thrive and the guidance to excel beyond my limits."
                                        </p>
                                    </div>

                                    <div className="achievements-grid">
                                        <div className="achievement-item">
                                            <Star size={16} className="star-icon" />
                                            <span>Best Coder in Viswa Niketan</span>
                                        </div>
                                        <div className="achievement-item">
                                            <Star size={16} className="star-icon" />
                                            <span>Robotics Club President</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ParticleCard>
                    </MagicBento>
                </div>
            </div>
        </section>
    );
};

export default StudentOfTheYear;
