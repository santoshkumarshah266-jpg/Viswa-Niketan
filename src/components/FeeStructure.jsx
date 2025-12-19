import React, { useState } from 'react';
import { Award, DollarSign } from 'lucide-react';
import { MagicBento, ParticleCard } from './MagicBento';
import './FeeStructure.css';

const FeeStructure = ({ isMobile = false }) => {
    const [activeTab, setActiveTab] = useState('scholarship');

    return (
        <section id="fees" className="section-padding bg-light">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title">Fees & Scholarships</h2>
                    <p className="section-subtitle">Transparent fee details and rewarding excellence.</p>

                    <div className="fee-tabs">
                        <button
                            className={`tab-btn ${activeTab === 'scholarship' ? 'active' : ''}`}
                            onClick={() => setActiveTab('scholarship')}
                        >
                            <Award size={18} /> Scholarships
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'fees' ? 'active' : ''}`}
                            onClick={() => setActiveTab('fees')}
                        >
                            <DollarSign size={18} /> Fee Structure
                        </button>
                    </div>
                </div>

                {activeTab === 'scholarship' ? (
                    <MagicBento
                        enableSpotlight={!isMobile} // Disable spotlight on mobile
                        spotlightRadius={300}
                        glowColor="247, 147, 30"
                    >
                        <ParticleCard
                            className="scholar-card rank-1 magic-bento-card magic-bento-card--border-glow"
                            glowColor="247, 147, 30"
                            style={{ '--glow-color': '247, 147, 30' }}
                            isActive={true}
                            particleCount={isMobile ? 0 : 130} // 0 on mobile
                        >
                            <div className="badge-rank">GPA 4.0</div>
                            <h3>Full Scholarship</h3>
                            <ul>
                                <li>Admission Fee: <strong>Free</strong></li>
                                <li>Monthly Fee: <strong>Free</strong></li>
                                <li>Annual Charge: <strong>Free</strong></li>
                            </ul>
                            <button className="btn btn-primary w-100">Apply</button>
                        </ParticleCard>

                        <ParticleCard
                            className="scholar-card rank-2 magic-bento-card magic-bento-card--border-glow"
                            glowColor="74, 222, 128"
                            style={{ '--glow-color': '74, 222, 128' }}
                            isActive={true}
                            particleCount={isMobile ? 0 : 130} // 0 on mobile
                        >
                            <div className="badge-rank">GPA 3.90 - 3.99</div>
                            <h3>Tuition Waiver</h3>
                            <ul>
                                <li>Admission Fee: <strong>Free</strong></li>
                                <li>Monthly Fee: <strong>100% Off</strong></li>
                                <li>Annual Charge: Standard</li>
                            </ul>
                            <button className="btn btn-secondary w-100">Apply</button>
                        </ParticleCard>

                        <ParticleCard
                            className="scholar-card rank-3 magic-bento-card magic-bento-card--border-glow"
                            glowColor="52, 152, 219"
                            style={{ '--glow-color': '52, 152, 219' }}
                            isActive={true}
                            particleCount={isMobile ? 0 : 130} // 0 on mobile
                        >
                            <div className="badge-rank">GPA 3.25+</div>
                            <h3>Partial Aid</h3>
                            <ul>
                                <li>Note: Merit based discounts available on admission and monthly fees depending on availability.</li>
                            </ul>
                            <button className="btn btn-secondary w-100">Apply</button>
                        </ParticleCard>
                    </MagicBento>
                ) : (
                    <div className="fee-table-wrapper">
                        <table className="fee-table">
                            <thead>
                                <tr>
                                    <th>Particulars</th>
                                    <th>Science</th>
                                    <th>Mgmt</th>
                                    <th>Humanities</th>
                                    <th>Education</th>
                                    <th>Law</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Admission Fee</td><td>6000</td><td>6000</td><td>5000</td><td>5000</td><td>5000</td></tr>
                                <tr><td>Annual Charge</td><td>4000</td><td>4000</td><td>3000</td><td>3000</td><td>3000</td></tr>
                                <tr><td>Lab Fee</td><td>6000</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
                                <tr><td>Deposit</td><td>1000</td><td>1000</td><td>1000</td><td>1000</td><td>1000</td></tr>
                                <tr><td>Monthly Fee</td><td>2000</td><td>900</td><td>700</td><td>700</td><td>900</td></tr>
                                <tr className="total-row"><td>Total (At Admission)</td><td>19000</td><td>11900</td><td>9700</td><td>9700</td><td>9900</td></tr>
                            </tbody>
                        </table>
                        <p className="note text-center mt-3">* For Hotel Management & Computer Science, add Rs. 400/- monthly.</p>
                    </div>
                )}
            </div>
        </section>
    );
};
export default FeeStructure;
