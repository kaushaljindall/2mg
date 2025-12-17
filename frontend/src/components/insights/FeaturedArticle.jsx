import React from 'react';

const FeaturedArticle = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 mb-16">
            <div className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white aspect-[21/9] min-h-[500px] flex items-end">
                {/* Background Image */}
                <img
                    src="https://images.unsplash.com/photo-1544367563-12123d895951?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Featured Article"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 max-w-3xl">
                    <span className="inline-block px-3 py-1 bg-teal-500/20 backdrop-blur-md border border-teal-500/30 text-teal-100 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                        Editor's Choice
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:text-teal-50 transition-colors">
                        The Comprehensive Guide to Plant-Based Supplements: What Actually Works?
                    </h2>
                    <div className="flex items-center gap-4 text-gray-300 text-sm mb-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center font-bold text-white border border-white/20">
                                JD
                            </div>
                            <span className="font-semibold text-white">Dr. Jane Doe, PharmD</span>
                        </div>
                        <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                        <span>Dec 12, 2024</span>
                        <span className="w-1 h-1 rounded-full bg-gray-500"></span>
                        <span>10 min read</span>
                    </div>
                    <p className="text-gray-300 text-lg mb-8 line-clamp-2 md:line-clamp-none opacity-90">
                        Navigating the world of vegan supplements can be confusing. Our lead pharmacist breaks down the science behind absorption, bioavailability, and essential nutrients you might be missing.
                    </p>
                    <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-teal-50 transition flex items-center gap-2 group/btn">
                        Read Full Article
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedArticle;
