import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import './TeacherTeams.css';

const teachers = [
    {
        name: "Morning Shift Team",
        role: "The Architects of Early Success",
        desc: "Morning Session • +2 Wing",
        image: "/assets/team/morning.png",
        bio: "Before the city fully wakes, this powerhouse team is already shaping the leaders of tomorrow. With a unique blend of rigorous discipline and warm mentorship, our Morning Shift educators create a high-focus environment where ambition meets opportunity. They don't just teach syllabus; they set the rhythm for a lifetime of achievement.",
    },
    {
        name: "Day Shift Team",
        role: "Champions of Holistic Growth",
        desc: "Day Session • +2 Wing",
        image: "/assets/team/day.jpg",
        bio: "In the vibrant pulse of the day, our Day Shift faculty transforms classrooms into hubs of innovation and debate. These educators specialize in turning academic concepts into real-world wisdom, fostering a spirited community where every student finds their voice. It's not just about grades; it's about building character under the bright sun.",
    }
];

const TeacherCard = ({ teacher, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2, type: "spring", bounce: 0.3 }}
            className={`relative flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} gap-12 items-center`}
        >
            {/* Background Glow for entire row area */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] radial-gradient-glow opacity-30 pointer-events-none hidden md:block ${isEven ? 'bg-blue-900/10' : 'bg-purple-900/10'} blur-[100px] rounded-full`} />

            {/* Image Card - with 3D feel */}
            <motion.div
                className="w-full md:w-5/12 relative group perspective-1000"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
            >
                <div className={`relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/50 backdrop-blur-sm h-[450px] transform transition-transform duration-500 group-hover:rotate-1`}>
                    {/* Image */}
                    <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />

                    {/* Floating Badge */}
                    <div className={`absolute top-6 ${isEven ? 'right-6' : 'left-6'} bg-gradient-to-r from-blue-600 to-purple-600 border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg z-20`}>
                        {teacher.desc}
                    </div>
                </div>

                {/* Decorative Elements behind image */}
                <div className={`absolute -inset-4 border border-white/5 rounded-3xl -z-10 ${isEven ? 'rotate-3' : '-rotate-3'} group-hover:rotate-0 transition-transform duration-500`} />
                <div className={`absolute -inset-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl -z-20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            </motion.div>

            {/* Text Content */}
            <div className="w-full md:w-7/12 relative z-10">
                <div className={`flex flex-col ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} items-center text-center`}>

                    {/* Name & Role */}
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="mb-6 relative"
                    >
                        {/* Large Decorative Quote */}
                        <Quote className={`absolute -top-10 ${isEven ? '-left-12' : '-right-12'} w-24 h-24 text-white/5 rotate-12`} />

                        <h3 className="text-4xl md:text-6xl font-black font-heading text-white mb-2 leading-tight tracking-tight relative z-10">
                            {teacher.name.split(' ').map((word, i) => (
                                <span key={i} className={i === 0 ? "text-white drop-shadow-lg" : "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-300"}>
                                    {word}
                                </span>
                            ))}
                        </h3>
                        <div className={`h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ${isEven ? 'mr-auto' : 'ml-auto'} mb-4`} />
                        <p className="text-2xl text-blue-200 font-medium tracking-wide">{teacher.role}</p>
                    </motion.div>

                    {/* Stylized Bio */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className={`relative p-8 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm mb-8 max-w-2xl group hover:bg-white/10 transition-colors duration-500`}
                    >
                        {/* Corner Accents */}
                        <div className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-4 h-4 border-t-2 border-${isEven ? 'l' : 'r'}-2 border-blue-400 rounded-tl-lg`} />
                        <div className={`absolute bottom-0 ${isEven ? 'right-0' : 'left-0'} w-4 h-4 border-b-2 border-${isEven ? 'r' : 'l'}-2 border-purple-400 rounded-br-lg`} />

                        <p className="text-slate-300 text-lg leading-loose font-light">
                            {teacher.bio}
                        </p>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-wrap items-center gap-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-blue-500/25 transition-all group"
                        >
                            Meet the Team
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        {/* Social Icons removed as requested */}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const TeacherTeams = () => {
    return (
        <section className="relative py-32 overflow-hidden bg-slate-950">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="container relative z-10 mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 px-6 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-semibold tracking-wider uppercase"
                    >
                        The Pillars of Excellence
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold text-white mb-8 font-heading tracking-tight"
                    >
                        Meet Our <span className="relative">
                            Mentors
                            <svg className="absolute w-full h-3 -bottom-2 left-0 text-blue-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
                    >
                        The dedicated educators guiding the intellectual and personal growth of our Morning and Day shift students.
                    </motion.p>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-32">
                    {teachers.map((teacher, index) => (
                        <TeacherCard key={index} teacher={teacher} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeacherTeams;
