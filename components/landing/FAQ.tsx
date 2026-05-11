import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "How long does it take to get my store?",
            a: "Depending on the plan you choose, delivery takes between 3 to 7 days. We start working immediately after your order."
        },
        {
            q: "Do I have to know how to code?",
            a: "Not at all. We handle all the technical setup. Once we hand it over, you can easily manage orders and products through the simple Shopify dashboard."
        },
        {
            q: "Do I own the store 100%?",
            a: "Yes. Once transferred, you are the legal owner of the store, domain, and all data. We just build it for you."
        },
        {
            q: "What if I need help after delivery?",
            a: "Our Pro plan includes 30 days of priority support. For other plans, we ensure everything is working perfectly upon handover and provide a guide on how to use your new store."
        },
        {
            q: "Are there any monthly fees?",
            a: "Our service is a one-time fee. However, you will need to pay Shopify's monthly subscription to keep the platform active."
        }
    ];

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-black">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-white mb-12 text-center tracking-tight">Questions & Answers</h2>
                <div className="space-y-4">
                    {faqs.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div 
                                key={i} 
                                className={`rounded-2xl border transition-colors overflow-hidden ${isOpen ? 'bg-[#1d1d1f] border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)]' : 'bg-[#1d1d1f]/50 border-transparent hover:border-white/10'}`}
                            >
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className={`font-semibold text-lg ${isOpen ? 'text-brand-teal' : 'text-white'}`}>{item.q}</span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <ChevronDown className={`w-5 h-5 ${isOpen ? 'text-brand-teal' : 'text-slate-400'}`} />
                                    </motion.div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-slate-400 leading-relaxed pt-2">
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
