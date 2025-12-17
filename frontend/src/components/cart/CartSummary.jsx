import React, { useState } from 'react';
// using inline SVGs instead of lucide-react

const CartSummary = ({ subtotal, tax = 0, shipping = 0, onCheckout }) => {
    const [coupon, setCoupon] = useState('');
    const total = subtotal + tax + shipping;

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>

            <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax Estimate</span>
                    <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-medium text-green-600">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>

                <div className="pt-3 pb-3">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Promo code"
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            className="w-full pl-9 pr-20 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all placeholder:text-gray-400"
                        />
                        <div className="absolute left-3 top-2.5 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l5 5a2 2 0 0 0 2.828 0l7.172-7.172a2 2 0 0 0 0-2.828z" /><path d="M7 7h.01" /></svg>
                        </div>
                        <button
                            className="absolute right-1.5 top-1.5 bg-white text-teal-600 px-3 py-1 rounded text-xs font-bold shadow-sm border border-gray-100 hover:bg-gray-50 disabled:opacity-50"
                            disabled={!coupon}
                        >
                            Apply
                        </button>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

            <button
                onClick={onCheckout}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3.5 rounded-full shadow-lg shadow-teal-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0 text-sm flex items-center justify-center gap-2 group"
            >
                Proceed to Checkout
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </button>

            <div className="mt-6 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-gray-500 justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-500"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 4.8 17 6 19 6a1 1 0 0 1 1 1Z" /><path d="m9 12 2 2 4-4" /></svg>
                    <span>Secure SSL Encryption</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 justify-center">
                    <svg className="w-3.5 h-3.5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Pharmacist Verified</span>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;
