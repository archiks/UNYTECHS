import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, X, Sparkles, FileText, CreditCard, Calendar, Lock, User, CheckCircle } from 'lucide-react';
import { Product, OrderStatus } from '../types';
import { MockBackend } from '../services/mockBackend';

interface PurchaseModalProps {
    onClose: () => void;
    product: Product;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ onClose, product }) => {
    const [step, setStep] = useState<'PAYMENT' | 'INVOICE_INFO'>('PAYMENT');
    const [loading, setLoading] = useState(false);

    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');

    const handleCardPayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(async () => {
            try {
                await MockBackend.createOrder(
                    product.id,
                    cardName,
                    'student@example.com',
                    'STRIPE',
                    OrderStatus.COMPLETED,
                    'Studio TBD',
                    'United Kingdom',
                    undefined,
                    undefined,
                    'GBP'
                );

                alert('Payment received. We will be in touch within 24 hours to schedule your first session.');
                onClose();
            } catch (error) {
                console.error('Payment failed', error);
                alert('Payment processing failed. Please try again.');
            } finally {
                setLoading(false);
            }
        }, 2000);
    };

    const handleInvoice = async () => {
        setStep('INVOICE_INFO');
    };

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '').substring(0, 16);
        const parts = value.match(/[\s\S]{1,4}/g) || [];
        setCardNumber(parts.join(' '));
    };

    const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        setExpiry(value.substring(0, 5));
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/85 backdrop-blur-md"
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-brand-ink rounded-2xl shadow-[0_30px_80px_-10px_rgba(0,0,0,0.8)] w-full max-w-md overflow-hidden border border-brand-cream/10 relative"
            >
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-gold/15 blur-[80px] rounded-full pointer-events-none" />

                <div className="p-6 border-b border-brand-cream/10 flex justify-between items-center relative z-10">
                    <div>
                        <h3 className="font-serif text-2xl text-brand-cream tracking-tight">Reserve Your Programme</h3>
                        <p className="text-xs text-brand-gold flex items-center gap-1 font-medium mt-1">
                            <Shield className="w-3 h-3" /> Stripe · 256-bit SSL
                        </p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-brand-cream/5 rounded-full transition-colors text-brand-cream/60 hover:text-brand-cream">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 relative z-10">
                    {/* Programme Summary */}
                    <div className="flex gap-4 p-4 bg-brand-navy/60 rounded-xl mb-6 border border-brand-cream/5 shadow-inner">
                        <div className="w-16 h-20 bg-brand-navy border border-brand-gold/30 rounded-lg flex items-center justify-center shadow-md">
                            <Sparkles className="w-7 h-7 text-brand-gold" strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold/80 mb-0.5">{product.label}</div>
                            <h4 className="font-serif text-brand-cream text-base">{product.name}</h4>
                            <p className="text-xs text-brand-cream/55 mb-2 line-clamp-1 italic">{product.tagline}</p>
                            <span className="font-serif text-brand-gold text-lg">£{product.price.toLocaleString()}</span>
                        </div>
                    </div>

                    {step === 'PAYMENT' ? (
                        <div className="space-y-4">
                            <form onSubmit={handleCardPayment} className="space-y-4">
                                <div>
                                    <label className="block text-[10px] font-bold text-brand-cream/50 mb-1 uppercase tracking-[0.2em]">Name on Card</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-cream/40" />
                                        <input
                                            type="text"
                                            required
                                            placeholder="Your full name"
                                            value={cardName}
                                            onChange={(e) => setCardName(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 bg-brand-navy/60 border border-brand-cream/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold font-medium text-brand-cream placeholder:text-brand-cream/30 transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] font-bold text-brand-cream/50 mb-1 uppercase tracking-[0.2em]">Card Number</label>
                                    <div className="relative">
                                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-cream/40" />
                                        <input
                                            type="text"
                                            required
                                            placeholder="0000 0000 0000 0000"
                                            value={cardNumber}
                                            onChange={handleCardNumberChange}
                                            maxLength={19}
                                            className="w-full pl-10 pr-4 py-3 bg-brand-navy/60 border border-brand-cream/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold font-medium text-brand-cream placeholder:text-brand-cream/30 font-mono transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-bold text-brand-cream/50 mb-1 uppercase tracking-[0.2em]">Expiry</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-cream/40" />
                                            <input
                                                type="text"
                                                required
                                                placeholder="MM/YY"
                                                value={expiry}
                                                onChange={handleExpiryChange}
                                                maxLength={5}
                                                className="w-full pl-10 pr-4 py-3 bg-brand-navy/60 border border-brand-cream/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold font-medium text-brand-cream placeholder:text-brand-cream/30 font-mono transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] font-bold text-brand-cream/50 mb-1 uppercase tracking-[0.2em]">CVC</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-cream/40" />
                                            <input
                                                type="text"
                                                required
                                                placeholder="123"
                                                value={cvc}
                                                onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').substring(0, 4))}
                                                maxLength={4}
                                                className="w-full pl-10 pr-4 py-3 bg-brand-navy/60 border border-brand-cream/10 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold font-medium text-brand-cream placeholder:text-brand-cream/30 font-mono transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 mt-2 bg-brand-gold text-brand-navy font-bold rounded-xl hover:opacity-90 transition-all shadow-[0_0_30px_rgba(212,175,55,0.25)] flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>Processing...</>
                                    ) : (
                                        <>
                                            <CheckCircle className="w-5 h-5" /> Confirm £{product.price.toLocaleString()}
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="relative py-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-brand-cream/10"></div>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase tracking-[0.2em]">
                                    <span className="bg-brand-ink px-4 text-brand-cream/40 font-bold">Or</span>
                                </div>
                            </div>

                            <button
                                onClick={handleInvoice}
                                disabled={loading}
                                className="w-full py-4 bg-transparent text-brand-cream font-medium rounded-xl border border-brand-cream/20 hover:border-brand-gold hover:text-brand-gold transition-all flex items-center justify-center gap-2"
                            >
                                <FileText className="w-4 h-4" /> Request Invoice (Bank Transfer)
                            </button>
                        </div>
                    ) : (
                        <div className="text-center py-6">
                            <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-gold/30">
                                <FileText className="w-8 h-8 text-brand-gold" strokeWidth={1.5} />
                            </div>
                            <h4 className="font-serif text-2xl text-brand-cream mb-2">Request an Invoice</h4>
                            <p className="text-sm text-brand-cream/60 mb-8 px-4 leading-relaxed">
                                For bank transfer or B2B billing, drop me a line. I'll issue
                                an official invoice and confirm your first session.
                            </p>
                            <div className="p-4 bg-brand-navy/60 rounded-xl border border-brand-cream/10 mb-8 shadow-inner">
                                <span className="block text-[10px] text-brand-cream/40 uppercase font-bold tracking-[0.2em] mb-2">Contact</span>
                                <span className="font-mono text-brand-gold font-bold text-lg select-all">info@powkiddy.io</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-full py-4 bg-brand-cream/5 border border-brand-cream/10 text-brand-cream font-medium rounded-xl hover:bg-brand-cream/10 transition-all"
                            >
                                Go Back
                            </button>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
};
