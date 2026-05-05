import React from 'react';
import { MousePointerClick, Hammer, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: MousePointerClick,
            title: "1. Select Architecture",
            desc: "Choose the foundation that fits your goals. From streamlined setups to enterprise-grade builds."
        },
        {
            icon: Hammer,
            title: "2. Precision Engineering",
            desc: "Our engineers construct the theme, integrate products, and optimize the payment flow."
        },
        {
            icon: Rocket,
            title: "3. Ignite Growth",
            desc: "Receive your keys. Your highly-optimized engine is ready to capture traffic and convert."
        }
    ];

    return (
        <section className="bg-brand-navy py-24 relative border-y border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-[#00ff88]">Process</span></h2>
                    <p className="text-slate-400">Your path to digital dominance in 3 streamlined steps.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-brand-teal/10 via-brand-teal/50 to-brand-teal/10" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="relative flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 rounded-2xl bg-brand-light border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(0,230,118,0.05)]">
                                <step.icon className="w-10 h-10 text-brand-teal" />
                                <div className="absolute -bottom-3 px-3 py-1 bg-black rounded-full text-xs font-bold text-brand-teal border border-brand-teal/30">
                                    Phase {i + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-slate-400 leading-relaxed max-w-xs">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
