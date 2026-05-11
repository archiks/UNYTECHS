import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, X, Book, FileText, CreditCard, Calendar, Lock, User, CheckCircle } from 'lucide-react';
import { Product, OrderStatus } from '../types';
import { MockBackend } from '../services/mockBackend';

interface PurchaseModalProps {
    onClose: () => void;
    product: Product;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ onClose, product }) => {
    const [step, setStep] = useState<'PAYMENT' | 'INVOICE_INFO'>('PAYMENT');
    const [loading, setLoading] = useState(false);

    // Card Form State
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');

    const handleCardPayment = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call to Stripe
        setTimeout(async () => {
            try {
                // In a real app, this is where we'd confirm with Stripe
                await MockBackend.createOrder(
                    product.id,
                    cardName,
                    "customer@example.com", // Placeholder until we add email input or get from auth
                    'STRIPE',
                    OrderStatus.COMPLETED,
                    "123 Stripe St",
                    "US"
                );

                alert("Payment Successful! Access to your store will be sent to your email.");
                onClose();
            } catch (error) {
                console.error("Payment failed", error);
                alert("Payment processing failed. Please try again.");
            } finally {
                setLoading(false);
            }
        }, 2000);
    };

    const handleInvoice = async () => {
        setStep('INVOICE_INFO');
    };

    // Formatters
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="bg-[#1d1d1f] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] w-full max-w-md overflow-hidden border border-white/10 relative"
            >
                {/* Glow Effect */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-teal/20 blur-[80px] rounded-full pointer-events-none" />

                <div className="p-6 border-b border-white/10 flex justify-between items-center relative z-10">
                    <div>
                        <h3 className="text-xl font-bold text-white tracking-tight">Secure Checkout</h3>
                        <p className="text-xs text-[#00ff88] flex items-center gap-1 font-medium mt-1"><Shield className="w-3 h-3" /> 256-bit SSL Encrypted</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 relative z-10">
                    {/* Product Summary */}
                    <div className="flex gap-4 p-4 bg-black/50 rounded-xl mb-6 border border-white/5 shadow-inner">
                        <div className="w-16 h-20 bg-brand-navy border border-white/10 rounded-lg flex items-center justify-center shadow-md">
                            <Book className="w-8 h-8 text-[#00ff88]" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="font-bold text-white text-sm">{product.name}</h4>
                            <p className="text-xs text-slate-400 mb-2 line-clamp-1">{product.tagline}</p>
                            <span className="font-bold text-[#00ff88]">€{product.price}</span>
                        </div>
                    </div>

                    {step === 'PAYMENT' ? (
                        <div className="space-y-4">
                            <form onSubmit={handleCardPayment} className="space-y-4">
                                {/* Name on Card */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide">Name on Card</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input
                                            type="text"
                                            required
                                            placeholder="John Doe"
                                            value={cardName}
                                            onChange={(e) => setCardName(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00ff88]/30 focus:border-[#00ff88] font-medium text-white placeholder:text-slate-600 transition-all shadow-inner"
                                        />
                                    </div>
                                </div>

                                {/* Card Number */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide">Card Number</label>
                                    <div className="relative">
                                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                        <input
                                            type="text"
                                            required
                                            placeholder="0000 0000 0000 0000"
                                            value={cardNumber}
                                            onChange={handleCardNumberChange}
                                            maxLength={19}
                                            className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00ff88]/30 focus:border-[#00ff88] font-medium text-white placeholder:text-slate-600 font-mono transition-all shadow-inner"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {/* Expiry */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide">Expiry</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                            <input
                                                type="text"
                                                required
                                                placeholder="MM/YY"
                                                value={expiry}
                                                onChange={handleExpiryChange}
                                                maxLength={5}
                                                className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00ff88]/30 focus:border-[#00ff88] font-medium text-white placeholder:text-slate-600 font-mono transition-all shadow-inner"
                                            />
                                        </div>
                                    </div>

                                    {/* CVC */}
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wide">CVC</label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                            <input
                                                type="text"
                                                required
                                                placeholder="123"
                                                value={cvc}
                                                onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').substring(0, 4))}
                                                maxLength={4}
                                                className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00ff88]/30 focus:border-[#00ff88] font-medium text-white placeholder:text-slate-600 font-mono transition-all shadow-inner"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-4 mt-2 bg-brand-teal text-black font-bold rounded-xl hover:opacity-90 transition-all shadow-[0_0_20px_rgba(0,230,118,0.2)] flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <>Processing...</>
                                    ) : (
                                        <>
                                            <CheckCircle className="w-5 h-5" /> Pay €{product.price}
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="relative py-4">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-white/10"></div>
                                </div>
                                <div className="relative flex justify-center text-xs uppercase tracking-wider">
                                    <span className="bg-[#1d1d1f] px-4 text-slate-500 font-bold">Or</span>
                                </div>
                            </div>

                            <button
                                onClick={handleInvoice}
                                disabled={loading}
                                className="w-full py-4 bg-transparent text-white font-bold rounded-xl border border-white/20 hover:border-brand-teal hover:bg-brand-teal/5 transition-all flex items-center justify-center gap-2"
                            >
                                <img src="/assets/paypal.png" alt="PayPal" className="h-5 w-auto" /> Request Invoice (B2B)
                            </button>
                        </div>
                    ) : (
                        <div className="text-center py-6">
                            <div className="w-20 h-20 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-teal/20 shadow-[0_0_30px_rgba(0,230,118,0.1)]">
                                <FileText className="w-8 h-8 text-[#00ff88]" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Request an Invoice</h4>
                            <p className="text-sm text-slate-400 mb-8 px-4 leading-relaxed">
                                For corporate orders and B2B invoicing, please contact our support team directly. We will process your order manually and issue an official invoice.
                            </p>
                            <div className="p-4 bg-black/40 rounded-xl border border-white/10 mb-8 shadow-inner">
                                <span className="block text-xs text-slate-500 uppercase font-bold tracking-wide mb-2">Contact Email</span>
                                <span className="font-mono text-[#00ff88] font-bold text-lg select-all">info@unytechs.com</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-full py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all"
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
