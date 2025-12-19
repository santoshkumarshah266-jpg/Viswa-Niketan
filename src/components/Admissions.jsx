import React from 'react';
import { ClipboardCheck, UserCheck, FileText, CreditCard, School } from 'lucide-react';
import ScrollFloat from './ScrollFloat';
import './Admissions.css';

const admissionSteps = [
    {
        id: "01",
        title: "Online Application",
        description: "Fill out the entrance exam form via our online portal or visit the college administration.",
        icon: <ClipboardCheck size={28} />
    },
    {
        id: "02",
        title: "Entrance Examination",
        description: "Appear for the written entrance test covering Science, Math, and English fundamentals.",
        icon: <FileText size={28} />
    },
    {
        id: "03",
        title: "Interview",
        description: "Shortlisted candidates are called for a personal interview with their guardians.",
        icon: <UserCheck size={28} />
    },
    {
        id: "04",
        title: "Result Publication",
        description: "Merit list is published on our website and college notice board.",
        icon: <CreditCard size={28} />
    },
    {
        id: "05",
        title: "Admission Enrollment",
        description: "Complete the payment process and submit original documents to secure your seat.",
        icon: <School size={28} />
    }
];

const Admissions = () => {
    return (
        <section id="admissions" className="admissions-section">
            <div className="container">
                <div className="section-header">
                    <ScrollFloat animationDuration={1} ease="back.inOut(2)" scrollStart="center bottom+=50%" containerClassName="section-title">
                        Admission Process
                    </ScrollFloat>
                    <p>Your simple 5-step journey to joining Viswa Niketan</p>
                </div>

                <div className="steps-grid">
                    {admissionSteps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-header">
                                <div className="step-number">{step.id}</div>
                                <div className="step-icon">
                                    {step.icon}
                                </div>
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Admissions;
