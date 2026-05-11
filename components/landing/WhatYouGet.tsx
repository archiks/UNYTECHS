import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Music2 } from 'lucide-react';

export const WhatYouGet: React.FC = () => {
    return (
        <section className="relative py-28 bg-brand-cream overflow-hidden">
            <div className="absolute inset-0 bg-grain opacity-[0.04] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Editorial portrait — drop /assets/coach.jpg into public for the real photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-[0_30px_80px_-20px_rgba(10,10,10,0.4)]">
                            <img
                                src="/assets/coach.jpg"
                                alt="Kitija Jerfane, founder & lead coach"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                                }}
                            />
                            {/* Fallback gradient portrait if image is missing */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-wine via-brand-navy to-brand-ink flex items-center justify-center">
                                <span className="font-serif text-[180px] text-brand-gold/30 italic leading-none">K</span>
                            </div>
                            <div className="absolute inset-0 ring-1 ring-inset ring-brand-navy/10 pointer-events-none" />
                        </div>

                        {/* Caption plaque */}
                        <div className="absolute -bottom-6 -right-4 md:-right-8 bg-brand-navy text-brand-cream px-6 py-4 rounded-sm shadow-xl max-w-[80%]">
                            <div className="text-[10px] uppercase tracking-[0.25em] text-brand-gold mb-1">Founder & Coach</div>
                            <div className="font-serif text-2xl tracking-tight">Kitija Jerfane</div>
                        </div>
                    </motion.div>

                    {/* Editorial copy */}
                    <div className="lg:col-span-7">
                        <p className="font-script text-brand-wine text-2xl mb-3">About your coach</p>
                        <h2 className="font-serif text-4xl md:text-5xl text-brand-navy tracking-tight leading-[1.1] mb-8">
                            Coaching is a conversation. <br />
                            <span className="italic text-brand-wine">Yours starts here.</span>
                        </h2>

                        <div className="space-y-5 text-brand-navy/75 leading-relaxed text-lg">
                            <p>
                                I've spent the last twelve years on stages, in studios and on
                                wedding floors — coaching dancers who arrive uncertain and leave
                                with something to say.
                            </p>
                            <p>
                                My approach is unhurried and exact. We work in private, we work
                                slowly, and we work toward the version of yourself you can only
                                find one session at a time.
                            </p>
                        </div>

                        <blockquote className="my-10 pl-6 border-l-2 border-brand-gold">
                            <p className="font-script text-3xl text-brand-wine leading-tight">
                                "Technique is a language. I'll teach you the alphabet, then
                                help you write your own sentence."
                            </p>
                            <footer className="mt-3 text-sm uppercase tracking-[0.2em] text-brand-navy/50">
                                — Kitija
                            </footer>
                        </blockquote>

                        <div className="grid sm:grid-cols-3 gap-6 pt-6 border-t border-brand-navy/10">
                            {[
                                { icon: Award, label: 'Certified Coach', value: 'IDTA & ISTD' },
                                { icon: MapPin, label: 'Based In', value: 'London, UK' },
                                { icon: Music2, label: 'Styles', value: 'Ballroom · Latin · Contemporary' },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="flex flex-col gap-1"
                                >
                                    <item.icon className="w-5 h-5 text-brand-gold mb-2" strokeWidth={1.5} />
                                    <div className="text-[10px] uppercase tracking-[0.2em] text-brand-navy/50">{item.label}</div>
                                    <div className="font-serif text-brand-navy text-base">{item.value}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
