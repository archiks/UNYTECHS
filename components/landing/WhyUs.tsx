import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';

export const WhyUs: React.FC = () => {
    const [active, setActive] = useState(0);
    const total = TESTIMONIALS.length;

    const prev = () => setActive((a) => (a - 1 + total) % total);
    const next = () => setActive((a) => (a + 1) % total);

    const current = TESTIMONIALS[active];

    return (
        <section className="relative py-28 bg-brand-navy overflow-hidden">
            <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(114,47,55,0.25),transparent_70%)] pointer-events-none" />

            <div className="relative max-w-4xl mx-auto px-6 text-center">
                <p className="font-script text-brand-gold text-xl mb-3">In their words</p>
                <h2 className="font-serif text-4xl md:text-5xl text-brand-cream tracking-tight leading-tight mb-16">
                    Where they started.
                    <br />
                    <span className="italic text-brand-gold">Where they are now.</span>
                </h2>

                <div className="relative">
                    <Quote className="w-12 h-12 text-brand-gold/30 mx-auto mb-8" strokeWidth={1} />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -14 }}
                            transition={{ duration: 0.5, ease: 'easeOut' }}
                            className="space-y-8"
                        >
                            <p className="font-serif text-2xl md:text-3xl text-brand-cream/90 italic leading-relaxed">
                                "{current.text}"
                            </p>

                            <div className="flex items-center justify-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-wine to-brand-gold flex items-center justify-center text-brand-cream font-serif text-lg shadow-lg">
                                    {current.initials}
                                </div>
                                <div className="text-left">
                                    <div className="text-brand-cream font-medium">{current.name}</div>
                                    <div className="text-[10px] uppercase tracking-[0.2em] text-brand-cream/50">{current.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center justify-center gap-6 mt-12">
                        <button
                            onClick={prev}
                            aria-label="Previous testimonial"
                            className="w-10 h-10 rounded-full border border-brand-cream/20 text-brand-cream/60 hover:border-brand-gold hover:text-brand-gold transition-all flex items-center justify-center"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                    className={`h-1 rounded-full transition-all ${
                                        i === active ? 'w-8 bg-brand-gold' : 'w-4 bg-brand-cream/20 hover:bg-brand-cream/40'
                                    }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            aria-label="Next testimonial"
                            className="w-10 h-10 rounded-full border border-brand-cream/20 text-brand-cream/60 hover:border-brand-gold hover:text-brand-gold transition-all flex items-center justify-center"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
