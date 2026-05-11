import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface CallToActionProps {
    onCtaClick: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onCtaClick }) => {
    return (
        <section className="relative py-32 bg-brand-navy overflow-hidden">
            {/* Full-bleed cinematic backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.18),transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(114,47,55,0.3),transparent_55%)] pointer-events-none" />
            <div className="absolute inset-0 bg-grain opacity-[0.08] mix-blend-overlay pointer-events-none" />

            <motion.div
                aria-hidden
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-[conic-gradient(from_180deg_at_50%_0%,transparent_0deg,rgba(212,175,55,0.12)_25deg,transparent_50deg)] blur-3xl pointer-events-none"
            />

            <div className="relative max-w-3xl mx-auto px-6 text-center">
                <p className="font-script text-brand-gold text-2xl mb-4">Ready when you are</p>

                <h2 className="font-serif text-5xl md:text-6xl text-brand-cream tracking-tight leading-[1.05] mb-6">
                    Ready to move with <span className="italic text-brand-gold">intention</span>?
                </h2>

                <p className="text-brand-cream/65 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                    Book a complimentary discovery call. Twenty minutes, no obligation —
                    just a conversation about where you are and where you want to dance.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onCtaClick}
                        className="group px-9 py-4 bg-brand-gold text-brand-navy font-bold tracking-wide rounded-full inline-flex items-center justify-center gap-2 shadow-[0_0_50px_rgba(212,175,55,0.3)] hover:shadow-[0_0_70px_rgba(212,175,55,0.5)] transition-all"
                    >
                        Book Your Session
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <a
                        href="mailto:info@powkiddy.io?subject=Discovery%20Call%20Request"
                        className="px-9 py-4 border border-brand-cream/30 text-brand-cream font-medium tracking-wide rounded-full hover:border-brand-gold hover:text-brand-gold transition-all inline-flex items-center justify-center gap-2"
                    >
                        <Calendar className="w-4 h-4" />
                        Request Discovery Call
                    </a>
                </div>

                {/* Calendar embed slot — swap in your Calendly/Cal.com iframe here */}
                <div className="mt-16 inline-block bg-brand-ink/60 backdrop-blur border border-brand-cream/10 rounded-2xl px-8 py-6 text-left">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-brand-gold mb-2">Next openings</div>
                    <div className="font-serif text-brand-cream text-xl">
                        Mon — Fri · 10:00 to 19:00 GMT
                    </div>
                    <div className="text-brand-cream/50 text-sm mt-1">
                        Limited weekend slots available for Pro & Bespoke clients.
                    </div>
                </div>
            </div>
        </section>
    );
};
