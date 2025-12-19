import React from 'react';
import Ballpit from './Ballpit';
import './Ballpit.css';
import './StudentLife.css';
import { ImageAutoSlider } from './ui/image-auto-slider';

import useIsMobile from '../hooks/useIsMobile';

const StudentLife = () => {
    const isMobile = useIsMobile();

    return (
        <section id="student-life" className="student-life-section">
            <div className="ballpit-section">
                {!isMobile && (
                    <Ballpit
                        className="ballpit-canvas"
                        followCursor={true}
                        colors={['#F7931E', '#3498db', '#9b59b6', '#2ECC71']}
                        count={150}
                        gravity={0.6}
                        friction={0.9}
                        wallBounce={0.8}
                    />
                )}
                <div className="container ballpit-content">
                    <h2>Vibrant Student Life</h2>
                    <p>Experience a dynamic campus environment filled with creativity, fun, and growth.</p>
                </div>
            </div>

            <div className="container">
                <div className="w-full mt-12">
                    <ImageAutoSlider images={[
                        '/assets/club/group_steps.jpg',
                        '/assets/club/club3.jpg',
                        '/assets/club/group_field.jpg',
                        '/assets/club/club1.jpg',
                        '/assets/club/award_ceremony.jpg',
                        '/assets/club/club2.jpg',
                        '/assets/club/assembly.jpg',
                        '/assets/club/club4.jpg',
                        '/assets/club/club5.jpg'
                    ]} />
                </div>
            </div>
        </section >
    );
};
export default StudentLife;
