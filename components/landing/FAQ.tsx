import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: 'How do sessions work — Zoom or in-person?',
            a: 'Both. Most students start on Zoom with HD camera setups, and we offer in-studio sessions in London for those nearby. Pro and Bespoke clients can mix formats throughout their program.'
        },
        {
            q: 'I am a complete beginner — is this for me?',
            a: 'Absolutely. The Foundations and Starter programs are built specifically for first-time and returning dancers. The pace is yours; the attention is undivided.'
        },
        {
            q: 'How do I book and pay?',
            a: 'After choosing a program you receive a deposit invoice and a private booking link. Sessions are scheduled around your calendar with at least 48 hours notice. Full payment can be split across the program length.'
        },
        {
            q: 'What is your refund and cancellation policy?',
            a: 'Sessions cancelled more than 48 hours in advance are rescheduled at no cost. Unused sessions in a program can be transferred to a future block within 12 months. Full refund within 7 days of purchase, before the first session.'
        },
        {
            q: 'Do I need a special floor, mirrors or equipment?',
            a: 'Comfortable clothes, a phone or laptop on a tripod, and roughly 2.5 × 2.5 metres of clear space. Anything else we will recommend during your discovery call.'
        },
        {
            q: 'Can I prepare for a specific event — wedding, audition, performance?',
            a: 'Yes. The Custom Consultation track is designed exactly for that. We reverse-engineer the timeline from your event date and build a focused program around it.'
        }
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-28 bg-brand-cream overflow-hidden">
            <div className="absolute inset-0 bg-grain opacity-[0.04] pointer-events-none" />

            <div className="relative max-w-3xl mx-auto px-6">
                <div className="text-center mb-14">
                    <p className="font-script text-brand-wine text-xl mb-3">You asked</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-brand-navy tracking-tight">
                        Questions, <span className="italic text-brand-wine">answered</span>.
                    </h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className={`border-b transition-colors ${isOpen ? 'border-brand-gold' : 'border-brand-navy/15'}`}
                            >
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
                                >
                                    <span className={`font-serif text-lg md:text-xl pr-6 transition-colors ${isOpen ? 'text-brand-wine' : 'text-brand-navy group-hover:text-brand-wine'}`}>
                                        {item.q}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 45 : 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center ${isOpen ? 'border-brand-gold bg-brand-gold/10' : 'border-brand-navy/20'}`}
                                    >
                                        <Plus className={`w-4 h-4 ${isOpen ? 'text-brand-gold' : 'text-brand-navy/60'}`} />
                                    </motion.div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                                        >
                                            <div className="pb-6 pr-12 text-brand-navy/70 leading-relaxed">
                                                {item.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
