import React from 'react';

const EthicalStandards = () => {
    return (
        <section className="py-20 bg-teal-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft-xl flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-bold uppercase tracking-wider">
                            For the Planet
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Better for you. Better for the earth.</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Compliance isn't just about safety rules; it's about ethical responsibility. We refuse to use animal testing, and we are committed to reducing our carbon footprint through sustainable packaging and carbon-neutral shipping.
                        </p>
                        <button className="text-teal-700 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                            Read our Sustainability Report
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                        </button>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-4 w-full">
                        <div className="aspect-square bg-brand-light rounded-2xl flex flex-col items-center justify-center text-center p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600 mb-4"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                            <span className="font-bold text-gray-900">100% Recyclable</span>
                        </div>
                        <div className="aspect-square bg-brand-light rounded-2xl flex flex-col items-center justify-center text-center p-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600 mb-4"><path d="M4.5 9.5V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v5.5" /><path d="M2 20v2c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-2" /><path d="M2 13v7" /><path d="M22 13v7" /><path d="M2 13h20" /><path d="M12 13v7" /></svg>
                            <span className="font-bold text-gray-900">Carbon Neutral</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EthicalStandards;
