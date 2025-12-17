import React from 'react';

const FeatureGrid = () => {
    const features = [
        { icon: '🌱', title: '100% Plant-Based', desc: 'Guaranteed free from gelatin, lactose, and carmine.' },
        { icon: '🔬', title: 'Pharmacist Verified', desc: 'Every product is clinically reviewed for safety.' },
        { icon: '🐇', title: 'Cruelty-Free', desc: 'We never test on animals, and neither do our partners.' },
        { icon: '🔎', title: 'Transparent Sourcing', desc: 'We trace every ingredient back to its origin.' },
        { icon: '♻️', title: 'Eco Packaging', desc: 'Plastic-free and biodegradable shipping materials.' },
        { icon: '🤝', title: 'Donations', desc: '5% of profits go to animal sanctuaries.' },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Aesthesic Programs?</h2>
                    <p className="text-gray-500">More than just a pharmacy. A movement.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex gap-6 p-6 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
