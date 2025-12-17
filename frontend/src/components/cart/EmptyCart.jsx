import React from 'react';
// Icon removed to use inline SVG
import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 animate-fade-in">
            {/* Ambient background blob */}
            <div className="absolute w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-50 -z-10" />

            {/* Illustration */}
            <div className="relative mb-8">
                <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-soft-xl relative z-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-20 h-20 text-teal-500"
                    >
                        <path d="M11.5 21H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4.5" />
                        <path d="m19 12-2.5 2.5" />
                        <path d="m21.5 14.5-5 5" />
                    </svg>
                    {/* Floating elements */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-mint-100 rounded-full animate-bounce-slow opacity-80" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-teal-100 rounded-full animate-pulse opacity-60" />
                </div>
            </div>

            {/* Content */}
            <h2 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">Your Cart is Empty</h2>
            <p className="text-gray-500 text-lg mb-8 max-w-md">
                Let’s find what you need to feel better. Browse our catalog for supplements, medicines, and devices.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    to="/products"
                    className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full shadow-lg shadow-teal-500/20 transition-all hover:-translate-y-0.5"
                >
                    Browse Products
                </Link>
                <Link
                    to="/"
                    className="px-8 py-3 bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium rounded-full transition-all flex items-center justify-center gap-2 group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
                        <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
                    </svg>
                    Go Back
                </Link>
            </div>
        </div>
    );
};

export default EmptyCart;
