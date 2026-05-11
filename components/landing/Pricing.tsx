import React from 'react';
import { motion } from 'framer-motion';
import { Check, Crown, Footprints, Users, Compass, ArrowRight } from 'lucide-react';
import { Product } from '../../types';
import { PRODUCTS } from '../../constants';

interface PricingProps {
    onSelectPlan: (plan: Product) => void;
}

const tierIcon = (label?: string) => {
    switch (label) {
        case 'FOUNDATIONS':
            return Footprints;
        case 'STARTER':
            return Users;
        case 'BESPOKE':
            return Compass;
        default:
            return Crown; // PRO
    }
};

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
    const plans = PRODUCTS;

    return (
        <section className="relative py-28 bg-gradient-to-b from-brand-navy via-brand-ink to-brand-navy overflow-hidden" id="programs">
            <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <p className="font-script text-brand-gold text-xl mb-3">Choose your path</p>
                    <h2 className="font-serif text-4xl md:text-5xl text-brand-cream tracking-tight leading-tight">
                        Programs designed for <span className="italic text-brand-gold">every stage</span>.
                    </h2>
                    <p className="text-brand-cream/60 mt-5 leading-relaxed">
                        Three signature programs and one bespoke track — each built around private 1-on-1 attention.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {plans.map((plan, i) => {
                        const Icon = tierIcon(plan.label);
                        const featured = plan.featured;
                        return (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ delay: i * 0.1, duration: 0.7, ease: 'easeOut' }}
                                className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                                    featured
                                        ? 'bg-gradient-to-b from-brand-ink to-brand-navy border-2 border-brand-gold shadow-[0_0_60px_rgba(212,175,55,0.18)] lg:scale-[1.04] lg:-translate-y-2 z-10'
                                        : 'bg-brand-ink/70 border border-brand-cream/10 hover:border-brand-gold/40'
                                }`}
                            >
                                {featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-brand-gold text-brand-navy text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg whitespace-nowrap">
                                        {plan.label}
                                    </div>
                                )}

                                {!featured && plan.label && (
                                    <div className="text-[10px] uppercase tracking-[0.25em] text-brand-gold/80 font-semibold mb-4">
                                        {plan.label}
                                    </div>
                                )}

                                {featured && (
                                    <div className="text-[10px] uppercase tracking-[0.25em] text-brand-gold/0 font-semibold mb-4">
                                        spacer
                                    </div>
                                )}

                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 border ${featured ? 'bg-brand-gold/15 border-brand-gold/40' : 'bg-brand-gold/8 border-brand-gold/20'}`}>
                                    <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                                </div>

                                <h3 className="font-serif text-2xl text-brand-cream tracking-tight mb-2">{plan.name}</h3>
                                <p className="text-brand-cream/55 text-sm italic mb-6 min-h-[40px]">{plan.tagline}</p>

                                <div className="mb-6">
                                    {plan.customPricing ? (
                                        <>
                                            <div className="font-serif text-3xl text-brand-cream">Custom</div>
                                            <div className="text-[10px] uppercase tracking-[0.2em] text-brand-cream/40 mt-1">By quote</div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="flex items-baseline gap-1">
                                                <span className="font-serif text-4xl text-brand-cream tracking-tight">£{plan.price.toLocaleString()}</span>
                                            </div>
                                            <div className="text-[10px] uppercase tracking-[0.2em] text-brand-cream/40 mt-1">Full programme</div>
                                        </>
                                    )}
                                </div>

                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features.map((feat, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-brand-cream/75 text-sm leading-snug">
                                            <Check className="w-4 h-4 mt-0.5 shrink-0 text-brand-gold" strokeWidth={2.5} />
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>

                                {plan.bestFor && (
                                    <div className="mb-6 pt-5 border-t border-brand-cream/10">
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-brand-cream/40 mb-2">Best for</div>
                                        <p className="text-brand-cream/70 text-sm italic">{plan.bestFor}</p>
                                    </div>
                                )}

                                <button
                                    onClick={() => onSelectPlan(plan)}
                                    className={`w-full py-3.5 px-4 font-medium text-sm tracking-wide rounded-full transition-all flex items-center justify-center gap-2 group ${
                                        featured
                                            ? 'bg-brand-gold text-brand-navy hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]'
                                            : 'border border-brand-cream/30 text-brand-cream hover:border-brand-gold hover:text-brand-gold'
                                    }`}
                                >
                                    {plan.ctaLabel || 'Select Program'}
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
