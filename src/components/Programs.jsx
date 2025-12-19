import React from 'react';
import { Microscope, Briefcase, Gavel, Cpu, BookOpen } from 'lucide-react';
import { MagicBento, ParticleCard } from './MagicBento';
import ScrollFloat from './ScrollFloat';
import './Programs.css';

const programsData = [
    {
        icon: <Microscope size={40} />,
        title: "Science",
        desc: "Physics, Chemistry, Biology, Mathematics/Computer with state-of-the-art labs.",
        color: "#3498db"
    },
    {
        icon: <Briefcase size={40} />,
        title: "Management",
        desc: "Accounting, Economics, Business Studies, Marketing, and Hotel Management.",
        color: "#F7931E"
    },
    {
        icon: <Gavel size={40} />,
        title: "Law",
        desc: "Constitutional Law, Civil Law, Criminal Law, and Human Rights.",
        color: "#9b59b6"
    },
    {
        icon: <Cpu size={40} />,
        title: "Electronics",
        desc: "Computer Hardware, Networking, Digital Systems, and Communication.",
        color: "#e74c3c"
    },
    {
        icon: <BookOpen size={40} />,
        title: "Humanities/Education",
        desc: "Sociology, Mass Communication, English, Nepali, and Educational Theory.",
        color: "#2ECC71"
    }
];

import useIsMobile from '../hooks/useIsMobile';

const Programs = () => {
    const isMobile = useIsMobile();

    return (
        <section id="programs" className="programs-section">
            <div className="container">
                <div className="section-header">
                    <div className="section-title">
                        Our Academic Streams
                    </div>
                    <p>Choose your path to success with our comprehensive +2 programs.</p>
                </div>

                <MagicBento
                    enableStars={!isMobile}
                    enableSpotlight={!isMobile}
                    spotlightRadius={300}
                    glowColor="247, 147, 30" // Brand Orange
                >
                    {programsData.map((program, index) => (
                        <ParticleCard
                            key={index}
                            className="program-card magic-bento-card"
                            glowColor={program.color.replace('#', '') === 'F7931E' ? '247, 147, 30' :
                                program.color === '#3498db' ? '52, 152, 219' :
                                    program.color === '#9b59b6' ? '155, 89, 182' :
                                        program.color === '#e74c3c' ? '231, 76, 60' :
                                            '46, 204, 113'} // Convert hex to rgb mostly manually for now or use single glow
                            style={{
                                borderTop: `4px solid ${program.color}`,
                                '--glow-color': '247, 147, 30' // Global spotlight color
                            }}
                        >
                            <div className="icon-wrapper" style={{ color: program.color, background: `${program.color}15` }}>
                                {program.icon}
                            </div>
                            <h3>{program.title}</h3>
                            <p>{program.desc}</p>
                            <a href="#" className="learn-more" style={{ color: program.color }}>
                                Learn More &rarr;
                            </a>
                        </ParticleCard>
                    ))}
                </MagicBento>
            </div>
        </section>
    );
};

export default Programs;
