import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { HeroSection } from './landing/HeroSection';
import { HowItWorks } from './landing/HowItWorks';
import { WhatYouGet } from './landing/WhatYouGet';
import { Pricing } from './landing/Pricing';
import { WhyUs } from './landing/WhyUs';
import { FAQ } from './landing/FAQ';
import { CallToAction } from './landing/CallToAction';
import { PurchaseModal } from './PurchaseModal';

export const LandingPage: React.FC = () => {
    const [showPurchaseModal, setShowPurchaseModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleBuy = (product: Product) => {
        // Bespoke programs route to a mail-to inquiry instead of the checkout flow
        if (product.customPricing) {
            window.location.href = `mailto:info@powkiddy.io?subject=Custom%20Consultation%20Inquiry%20—%20${encodeURIComponent(product.name)}&body=Hi%20Kitija%2C%0A%0AI%27d%20love%20to%20discuss%20a%20custom%20program.%0A%0AWhat%20I%27m%20training%20for%3A%20%0ATimeline%3A%20%0AAnything%20else%3A%20%0A`;
            return;
        }
        setSelectedProduct(product);
        setShowPurchaseModal(true);
    };

    const scrollToPrograms = () => {
        const el = document.getElementById('programs');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-brand-navy text-brand-cream font-sans relative min-h-screen selection:bg-brand-gold selection:text-brand-navy">

            <HeroSection onCtaClick={scrollToPrograms} />

            <Pricing onSelectPlan={handleBuy} />

            <HowItWorks />

            <WhatYouGet />

            <WhyUs />

            <FAQ />

            <CallToAction onCtaClick={scrollToPrograms} />

            {/* FOOTER */}
            <footer className="bg-brand-ink border-t border-brand-cream/10 pt-20 pb-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="md:col-span-2">
                            <p className="font-serif font-bold text-3xl text-brand-cream tracking-tighter mb-2">
                                POWKIDDY<span className="text-brand-gold">.</span>
                            </p>
                            <p className="font-script text-brand-gold text-xl mb-4">Move with purpose.</p>
                            <p className="text-brand-cream/60 text-sm max-w-md leading-relaxed">
                                Premium 1-on-1 dance coaching. Boutique studio meets digital
                                mentorship — for dancers who want to be truly seen.
                            </p>

                            {/* Newsletter */}
                            <form
                                className="mt-8 flex max-w-md gap-2"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert('Thank you — you are on the list.');
                                }}
                            >
                                <input
                                    type="email"
                                    required
                                    placeholder="Your email"
                                    className="flex-1 bg-transparent border border-brand-cream/20 rounded-full px-5 py-2.5 text-sm text-brand-cream placeholder:text-brand-cream/40 focus:outline-none focus:border-brand-gold transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="px-5 py-2.5 bg-brand-gold text-brand-navy rounded-full text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                                >
                                    Join
                                </button>
                            </form>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-cream/40 mt-3">
                                Movement notes · Monthly insights
                            </p>
                        </div>

                        <div>
                            <h4 className="text-[10px] uppercase tracking-[0.25em] text-brand-gold mb-5">Studio</h4>
                            <ul className="space-y-3 text-sm text-brand-cream/70">
                                <li><a href="#programs" className="hover:text-brand-gold transition-colors">Programs</a></li>
                                <li><a href="mailto:info@powkiddy.io" className="hover:text-brand-gold transition-colors">Book a Call</a></li>
                                <li><a href="https://www.powkiddy.io" target="_blank" rel="noreferrer" className="hover:text-brand-gold transition-colors">www.powkiddy.io</a></li>
                                <li><a href="mailto:info@powkiddy.io" className="hover:text-brand-gold transition-colors">info@powkiddy.io</a></li>
                            </ul>
                            <div className="flex gap-3 mt-6">
                                <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-brand-cream/20 flex items-center justify-center text-brand-cream/60 hover:border-brand-gold hover:text-brand-gold transition-all">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-[10px] uppercase tracking-[0.25em] text-brand-gold mb-5">Registered Office</h4>
                            <address className="not-italic text-sm text-brand-cream/70 leading-relaxed">
                                POWKIDDY LTD<br />
                                Flat 23 Cavendish House,<br />
                                6 Boulevard Drive,<br />
                                London, England, NW9 5QG<br />
                                <span className="block mt-3 text-brand-cream/50 text-xs">
                                    Company No. 15465273
                                </span>
                                <span className="block text-brand-cream/50 text-xs">
                                    Owner: Kitija Jerfane
                                </span>
                            </address>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-cream/40">
                        <p>© {new Date().getFullYear()} POWKIDDY LTD. All rights reserved.</p>
                        <p className="flex gap-4">
                            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
                            <span className="opacity-30">·</span>
                            <a href="#" className="hover:text-brand-gold transition-colors">Terms & Conditions</a>
                        </p>
                    </div>
                </div>
            </footer>

            {/* PURCHASE MODAL */}
            <AnimatePresence>
                {showPurchaseModal && selectedProduct && (
                    <PurchaseModal onClose={() => setShowPurchaseModal(false)} product={selectedProduct} />
                )}
            </AnimatePresence>
        </div>
    );
};
