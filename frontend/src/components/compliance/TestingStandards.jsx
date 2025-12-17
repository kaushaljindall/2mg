import React from 'react';

const TestingStandards = () => {
    return (
        <section className="py-20 bg-teal-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-teal-800 text-teal-200 text-xs font-bold uppercase tracking-wider mb-6">
                            Rigorous Science
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">We test for what others ignore.</h2>
                        <p className="text-teal-100 mb-8 max-w-lg leading-relaxed">
                            Most brands test for the bare minimum. We test for over 200 contaminants, heavy metals, and adulterants. If it's not pure, it doesn't make the cut.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 bg-teal-800/50 rounded-xl border border-teal-700/50 backdrop-blur-sm">
                                <div className="text-2xl font-bold mb-1">0%</div>
                                <div className="text-xs text-teal-300 uppercase">Heavy Metals</div>
                            </div>
                            <div className="p-4 bg-teal-800/50 rounded-xl border border-teal-700/50 backdrop-blur-sm">
                                <div className="text-2xl font-bold mb-1">100%</div>
                                <div className="text-xs text-teal-300 uppercase">Microbial Free</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {[
                            { title: "Microbial Analysis", desc: "Ensures no bacteria, yeast, or mold.", icon: "🦠" },
                            { title: "Heavy Metal Screening", desc: "Checks for lead, mercury, arsenic, cadmium.", icon: "⚖️" },
                            { title: "Pesticide Residue", desc: "Verifies organic purity standards.", icon: "🌱" },
                            { title: "Allergen Testing", desc: "Guarantees gluten-free & dairy-free claims.", icon: "🌾" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-4 bg-teal-800 rounded-xl border border-teal-700 hover:bg-teal-700 transition-colors">
                                <div className="text-2xl">{item.icon}</div>
                                <div>
                                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                                    <p className="text-xs text-teal-200">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestingStandards;
