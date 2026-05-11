import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface HeroSectionProps {
    onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#0a0a0c] min-h-[90vh] flex items-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.03)_0%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-teal/10 via-[#0a0a0c] to-[#0a0a0c] pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <div className="space-y-8 order-2 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#1d1d1f]/50 rounded-full border border-white/10 shadow-lg backdrop-blur-md relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse drop-shadow-[0_0_8px_rgba(0,255,136,0.8)]" />
                        <span className="text-xs font-bold tracking-wide uppercase text-white/90">Done-For-You Service</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                    >
                        The Ultimate <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-[#00ff88] to-emerald-400 drop-shadow-lg">
                            Ecommerce Engine.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        className="text-xl text-slate-400 max-w-lg leading-relaxed font-light"
                    >
                        Pro-level Shopify stores, engineered for scale. We design, build, and launch your brand so you can focus on growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="space-y-4"
                    >
                        {['High-Converting Design', 'Mobile Optimized', 'Payment & Shipping Setup'].map((item, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
                                className="flex items-center gap-4 text-white font-medium bg-[#1d1d1f]/40 w-max px-4 py-2.5 rounded-xl border border-white/5 backdrop-blur-sm shadow-sm"
                            >
                                <CheckCircle className="w-5 h-5 text-brand-teal drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]" />
                                <span className="text-sm md:text-base tracking-wide">{item}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <button
                            onClick={onCtaClick}
                            className="group relative px-8 py-4 bg-brand-teal text-black font-bold rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,230,118,0.3)] hover:shadow-[0_0_60px_rgba(0,230,118,0.5)] transition-all flex items-center justify-center gap-2"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative z-10 flex items-center gap-2">View Our Packages <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                        </button>
                    </motion.div>
                </div>

                {/* Visual Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                    className="relative hidden lg:block order-1 lg:order-1"
                >
                    <motion.div 
                        animate={{ y: [-10, 10, -10] }} 
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        {/* Glow Behind Image */}
                        <div className="absolute inset-0 bg-brand-teal/20 blur-[100px] rounded-full scale-90" />
                        
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group bg-[#1d1d1f]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none" />
                            <img
                                src="/assets/unytechs-hero.png"
                                alt="UNYTECHS Store Mockup"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 relative z-10"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
