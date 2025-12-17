import React from 'react';

export const SustainabilityBlock = () => {
    return (
        <section className="py-20 bg-teal-900 text-white rounded-[40px] mx-4 md:mx-6 my-12 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

            <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                <div className="inline-block px-4 py-1 border border-teal-500 rounded-full text-teal-300 text-xs font-bold uppercase tracking-widest mb-6">
                    Our Commitment
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                    Healing the planet while we <br /> heal ourselves.
                </h2>
                <p className="text-teal-100 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                    We know that healthcare generates massive waste. That's why we're pioneering the industry's first closed-loop packaging system for pharmacies.
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-left mb-12">
                    <div className="bg-teal-800/50 p-6 rounded-2xl border border-teal-700 backdrop-blur-sm">
                        <div className="text-2xl mb-3">📦</div>
                        <h3 className="font-bold text-lg mb-2">Compostable Mailers</h3>
                        <p className="text-teal-200 text-sm">Every shipment uses 100% biodegradable corn-starch based materials.</p>
                    </div>
                    <div className="bg-teal-800/50 p-6 rounded-2xl border border-teal-700 backdrop-blur-sm">
                        <div className="text-2xl mb-3">🌲</div>
                        <h3 className="font-bold text-lg mb-2">Carbon Neutral</h3>
                        <p className="text-teal-200 text-sm">We offset 2x the carbon emissions from every delivery.</p>
                    </div>
                    <div className="bg-teal-800/50 p-6 rounded-2xl border border-teal-700 backdrop-blur-sm">
                        <div className="text-2xl mb-3">🐰</div>
                        <h3 className="font-bold text-lg mb-2">Sanctuary Support</h3>
                        <p className="text-teal-200 text-sm">5% of profits go directly to certified animal sanctuaries.</p>
                    </div>
                </div>
                <button className="text-white border-b-2 border-teal-400 hover:text-teal-300 transition-colors pb-1 text-lg font-bold">
                    Read our full 2024 Impact Report &rarr;
                </button>
            </div>
        </section>
    );
};

export const NewsletterCTA = () => {
    return (
        <section className="py-24 bg-brand-light">
            <div className="container mx-auto px-6 text-center max-w-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the Compassionate Care Movement</h2>
                <p className="text-gray-500 mb-8">
                    Get the latest updates on animal-free medication, wellness tips, and exclusive community discounts.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 mb-6">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
                        required
                    />
                    <button type="submit" className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Subscribe
                    </button>
                </form>

                <p className="text-xs text-gray-400">
                    We respect your privacy. Unsubscribe at any time. <br />
                    Trusted by 50,000+ subscribers.
                </p>
            </div>
        </section>
    );
};
