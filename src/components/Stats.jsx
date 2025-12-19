import React, { useRef, useEffect } from 'react';
import { Users, Award, Book, Clock } from 'lucide-react';
import VariableProximity from './VariableProximity';
import CountUp from './CountUp';
import './Stats.css';

const statsData = [
    { icon: <Users size={32} />, value: 2000, suffix: '+', label: 'Happy Students', color: '#1B3A57' },
    { icon: <Book size={32} />, value: 4, suffix: '', label: 'Specialized Streams', color: '#F7931E' },
    { icon: <Award size={32} />, value: 'Top', isString: true, label: 'National Edu Award', color: '#2ECC71' },
    { icon: <Clock size={32} />, value: 2003, suffix: ' BS', label: 'Established', color: '#E74C3C' },
];

const Stats = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        // Add font link dynamically if not present for variable font support
    }, []);

    return (
        <section className="stats-section" ref={containerRef}>
            <div className="container">
                <div className="stats-grid">
                    {statsData.map((stat, index) => (
                        <div key={index} className="stat-card-main" style={{ borderTopColor: stat.color }}>
                            <div className="stat-icon" style={{ color: stat.color, backgroundColor: `${stat.color}15` }}>
                                {stat.icon}
                            </div>
                            <h3>
                                {stat.isString ? (
                                    stat.value
                                ) : (
                                    <>
                                        <CountUp
                                            to={stat.value}
                                            separator=","
                                            direction="up"
                                            duration={1.5}
                                            className="count-up"
                                        />
                                        {stat.suffix}
                                    </>
                                )}
                            </h3>
                            <p>
                                <VariableProximity
                                    label={stat.label}
                                    className="variable-prox-text"
                                    fromFontVariationSettings="'wght' 600"
                                    toFontVariationSettings="'wght' 800"
                                    radius={80}
                                    falloff="linear"
                                    containerRef={containerRef}
                                    style={{ color: 'inherit', cursor: 'default' }}
                                />
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Stats;
