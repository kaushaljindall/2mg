import React from 'react';

const ComplianceHero = () => {
    return (
        <div className="relative bg-gradient-to-br from-teal-50 to-brand-light overflow-hidden pt-20 pb-28">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-mint-100/50 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-2/3 bg-teal-100/40 blur-[80px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    Safety First Policy
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                    Transparency, Quality, and <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-700">Care—backed by science.</span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed">
                    At VEGANMED, we go beyond industry standards. Every product is rigorously tested, ethically sourced, and pharmacist-verified to ensure you get the safest, purest care possible.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full shadow-lg shadow-teal-500/30 transition-all hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        Download Certificates
                    </button>
                    <button className="px-8 py-3.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-semibold rounded-full shadow-sm transition-all w-full sm:w-auto">
                        View Testing Standards
                    </button>
                </div>

                {/* Trust Badges Inline */}
                <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-teal-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 16v.01" /><path d="M12 12v.01" /><path d="M8.5 16v.01" /><path d="M16 8.5v.01" /></svg>
                        </div>
                        <span className="text-xs font-semibold text-gray-500">Vegan Certified</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-teal-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                        </div>
                        <span className="text-xs font-semibold text-gray-500">GMP Standard</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-teal-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" /></svg>
                        </div>
                        <span className="text-xs font-semibold text-gray-500">Cruelty-Free</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-teal-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                        </div>
                        <span className="text-xs font-semibold text-gray-500">FDA Compliant</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComplianceHero;
