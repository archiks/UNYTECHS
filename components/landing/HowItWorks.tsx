import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ClipboardCheck, Video, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: Phone,
            title: 'Discovery Call',
            desc: 'A relaxed 20-minute conversation. We get to know your goals, your story and the way you move.',
        },
        {
            icon: ClipboardCheck,
            title: 'Personalised Plan',
            desc: 'A bespoke roadmap mapped to your timeline — technique, repertoire, and the moment you are training for.',
        },
        {
            icon: Video,
            title: 'Live Sessions',
            desc: 'Private 1-on-1 sessions on Zoom or in-studio in London. Every detail watched, every step refined.',
        },
        {
            icon: Sparkles,
            title: 'Ongoing Support',
            desc: 'Session replays, between-class feedback and direct access — so progress never pauses.',
        },
    ];

    return (
        <section className="relative py-28 bg-brand-navy overflow-hidden">
            <div className="absolute inset-0 bg-grain opacity-[0.06] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <p className="font-script text-brand-gold text-xl mb-3">The coaching experience</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-brand-cream tracking-tight leading-tight">
                        A studio built around <span className="italic text-brand-gold">you</span>.
                    </h2>
                    <p className="text-brand-cream/60 mt-5 leading-relaxed">
                        Coaching that pays attention. Every program is shaped to your body,
                        your music and the version of yourself you are training toward.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ delay: i * 0.12, duration: 0.7, ease: 'easeOut' }}
                            className="group relative bg-brand-ink/60 backdrop-blur-sm border border-brand-cream/10 rounded-2xl p-7 hover:border-brand-gold/40 transition-all"
                        >
                            <div className="absolute -top-4 left-7 text-xs tracking-[0.25em] text-brand-gold/70 font-medium">
                                0{i + 1}
                            </div>
                            <div className="w-14 h-14 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
                                <step.icon className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-2xl text-brand-cream mb-3 tracking-tight">{step.title}</h3>
                            <p className="text-brand-cream/60 text-sm leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
