import React from 'react';

const categories = [
    "All", "Supplements", "Prescriptions", "Devices", "Wellness", "Safety", "Compliance", "Research"
];

const InsightsHero = () => {
    return (
        <div className="relative bg-gradient-to-b from-teal-50 to-white pt-24 pb-16 overflow-hidden">
            {/* Background Abstract Shapes */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-mint-100 rounded-full blur-[80px] opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100 rounded-full blur-[60px] opacity-40 -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                    Verified Medical Content
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                    Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Wellness Knowledge</span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 leading-relaxed">
                    Trusted articles, guides, and pharmacist-backed explanations to help you make informed decisions about your health.
                </p>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto relative mb-12 group">
                    <div className="absolute inset-0 bg-teal-200 rounded-full blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                    <div className="relative bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center p-2">
                        <div className="pl-4 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search for supplements, symptoms, or ingredients..."
                            className="flex-1 px-4 py-3 bg-transparent border-none focus:outline-none text-gray-700 placeholder:text-gray-400 text-lg"
                        />
                        <button className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition shadow-md hover:shadow-lg hover:-translate-y-0.5">
                            Search
                        </button>
                    </div>
                </div>

                {/* Category Chips */}
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${idx === 0
                                    ? 'bg-teal-600 text-white shadow-lg shadow-teal-500/30'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InsightsHero;
