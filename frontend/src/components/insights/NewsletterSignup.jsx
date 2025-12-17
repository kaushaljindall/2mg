import React from 'react';

const NewsletterSignup = () => {
    return (
        <div className="relative overflow-hidden bg-teal-900 rounded-[2rem] my-20 mx-4 lg:mx-0">
            {/* Abstract Background */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-mint-400 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="relative z-10 px-8 py-16 md:p-16 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-8 backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-200"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Science-backed wellness, <br /> delivered weekly.
                </h2>
                <p className="text-teal-100 text-lg mb-10 max-w-2xl mx-auto">
                    Join 50,000+ subscribers getting exclusive pharmacist insights, new product alerts, and wellness tips. No spam, ever.
                </p>

                <form className="max-w-md mx-auto relative flex items-center">
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full h-14 pl-6 pr-36 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white placeholder:text-teal-200/50 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                    />
                    <button className="absolute right-1.5 h-11 px-6 bg-white text-teal-900 font-bold rounded-full hover:bg-teal-50 transition shadow-lg">
                        Subscribe
                    </button>
                </form>

                <div className="flex items-center justify-center gap-8 mt-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2 text-white/80 text-xs font-semibold uppercase tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                        Verified
                    </div>
                    <div className="flex items-center gap-2 text-white/80 text-xs font-semibold uppercase tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 16v.01" /><path d="M12 12v.01" /><path d="M8.5 16v.01" /><path d="M16 8.5v.01" /></svg>
                        Vegan
                    </div>
                    <div className="flex items-center gap-2 text-white/80 text-xs font-semibold uppercase tracking-wider">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        Secure
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSignup;
