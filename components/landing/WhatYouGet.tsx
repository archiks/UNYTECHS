import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Smartphone, CreditCard, Layout, Box } from 'lucide-react';

export const WhatYouGet: React.FC = () => {
    const features = [
        { icon: Layout, title: "Premium Theme Setup", desc: "A professional, high-converting design tailored to your niche." },
        { icon: Box, title: "Product Uploads", desc: "We add your initial products with optimized titles and descriptions." },
        { icon: Smartphone, title: "Mobile Optimization", desc: "100% responsive design that looks perfect on every device." },
        { icon: CreditCard, title: "Payment Gateways", desc: "Stripe, PayPal, and other payment processors fully configured." },
        { icon: Zap, title: "Speed Optimization", desc: "Fast loading times to ensure customers don't bounce." },
        { icon: Check, title: "Legal Pages", desc: "Privacy Policy, Terms of Service, and Refund Policy included." }
    ];

    return (
        <section className="py-24 bg-black overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-teal/5 via-black to-black pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl font-bold text-white mb-6">Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-[#00ff88]">Scale</span></h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            We don't just build a website; we build a business asset. Every store includes the essential features required to run a successful e-commerce brand.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center shrink-0 border border-white/10 shadow-[0_0_15px_rgba(0,230,118,0.1)]">
                                        <feature.icon className="w-5 h-5 text-brand-teal" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm">{feature.title}</h4>
                                        <p className="text-xs text-slate-400 mt-1">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 to-[#00ff88]/10 blur-[100px] rounded-full pointer-events-none" />
                        
                        <div className="relative rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,230,118,0.1)] border border-white/10 bg-[#1d1d1f]">
                            {/* Shopify Partner Badge */}
                            <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                                <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                                <span className="text-white text-xs font-bold tracking-wide">Shopify Partner Integration</span>
                            </div>

                            <img
                                src="/assets/unytechs-store.png"
                                alt="UNYTECHS Shopify Store Mockup"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
