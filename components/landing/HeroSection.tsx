import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
    onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
    const scrollToPrograms = () => {
        const el = document.getElementById('programs');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-navy">
            {/* Cinematic background — drop a /assets/hero.mp4 file here to enable video, otherwise the gradient renders */}
            <video
                className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/hero-poster.jpg"
            >
                <source src="/assets/hero.mp4" type="video/mp4" />
            </video>

            {/* Layered gradients for depth when no video is present */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.18),transparent_55%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(114,47,55,0.28),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 via-brand-navy/60 to-brand-navy pointer-events-none" />

            {/* Film grain texture */}
            <div className="absolute inset-0 bg-grain opacity-[0.18] mix-blend-overlay pointer-events-none" />

            {/* Subtle spotlight beam */}
            <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.25, 0.45, 0.25] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[conic-gradient(from_180deg_at_50%_0%,transparent_0deg,rgba(212,175,55,0.08)_15deg,transparent_30deg)] blur-2xl pointer-events-none"
            />

            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-24 text-center">
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="font-script text-brand-gold text-2xl md:text-3xl mb-6 tracking-wide"
                >
                    Move with purpose.
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.9, ease: 'easeOut' }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-cream leading-[1.05] tracking-tight mb-6"
                >
                    Master Your Movement.
                    <br />
                    <span className="italic text-brand-gold">One Session at a Time.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
                    className="text-lg md:text-xl text-brand-cream/70 max-w-2xl mx-auto leading-relaxed font-light mb-12"
                >
                    Personalised 1-on-1 dance coaching designed to transform beginners
                    into confident performers — at your pace, on your floor.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.8, ease: 'easeOut' }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <button
                        onClick={onCtaClick}
                        className="group relative px-9 py-4 bg-brand-gold text-brand-navy font-bold tracking-wide rounded-full overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.25)] hover:shadow-[0_0_60px_rgba(212,175,55,0.45)] transition-all"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Book Your Session
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                    <button
                        onClick={scrollToPrograms}
                        className="px-9 py-4 border border-brand-cream/30 text-brand-cream font-medium tracking-wide rounded-full hover:border-brand-gold hover:text-brand-gold transition-all backdrop-blur-sm"
                    >
                        Explore Programs
                    </button>
                </motion.div>

                {/* Trust bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.95, duration: 1 }}
                    className="mt-20 grid grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-brand-cream/10 pt-8"
                >
                    {[
                        { stat: '500+', label: 'Dancers Coached' },
                        { stat: '12 yrs', label: 'Stage & Studio Experience' },
                        { stat: '4 ', label: 'Continents Reached' },
                    ].map((item, i) => (
                        <div key={i} className="text-center">
                            <div className="font-serif text-3xl md:text-4xl text-brand-cream tracking-tight">{item.stat}</div>
                            <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-cream/50 mt-1">{item.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={scrollToPrograms}
                aria-label="Scroll to programs"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-cream/50 hover:text-brand-gold transition-colors z-10"
            >
                <ChevronDown className="w-6 h-6" />
            </motion.button>
        </section>
    );
};
