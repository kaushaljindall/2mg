import React, { useState } from 'react';

const MissionTimeline = () => {
    const milestones = [
        { year: '2024', title: 'Aesthesic Programs Launched', desc: 'Started with a mission to bring transparency to pharmacy.' },
        { year: '2024', title: '1st Certification', desc: 'Partnered with major labs to verify our first batch of 100 products.' },
        { year: '2025', title: '10k Products Verified', desc: 'Reached a major milestone in building the largest animal-free database.' },
        { year: 'Future', title: 'Global Standard', desc: 'Aiming to become the worldwide standard for vegan medication.' },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Mission Text */}
                    <div className="md:pr-12">
                        <div className="inline-block px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            Our Mission
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                            Healthcare should heal, <br />
                            <span className="text-teal-600">not harm.</span>
                        </h2>

                        <div className="prose prose-lg text-gray-600 leading-relaxed">
                            <p className="mb-6">
                                Did you know that 3 out of 4 common medications contain animal-derived ingredients like lactose, gelatin, or magnesium stearate? For millions of vegans, vegetarians, and people with alpha-gal syndrome, this is a hidden barrier to healthcare.
                            </p>
                            <p className="mb-6">
                                Traditional pharmacies specificially rarely disclose the source of these inactive ingredients. We believe you have the right to know exactly what you're putting into your body.
                            </p>
                            <p>
                                <strong>Aesthesic Programs</strong> was born from a simple promise: complete transparency. Our team of pharmacists meticulously traces every ingredient to its source, ensuring that your path to recovery aligns with your values.
                            </p>
                        </div>

                        <div className="mt-10 flex gap-4">
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 w-32 text-center">
                                <div className="text-3xl mb-2">🌿</div>
                                <div className="text-xs font-bold text-gray-500 uppercase">Plant Based</div>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 w-32 text-center">
                                <div className="text-3xl mb-2">🐇</div>
                                <div className="text-xs font-bold text-gray-500 uppercase">Cruelty Free</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Timeline */}
                    <div className="relative pl-8 border-l-2 border-gray-100 lg:mt-12">
                        {milestones.map((item, index) => (
                            <div key={index} className="mb-12 relative group last:mb-0">
                                {/* Dot */}
                                <div className="absolute top-1.5 -left-[41px] w-5 h-5 bg-white border-4 border-teal-200 rounded-full group-hover:border-teal-500 group-hover:scale-125 transition-all duration-300"></div>

                                {/* Content */}
                                <div className="relative top-0 transition-transform duration-300 group-hover:-translate-y-1">
                                    <span className="text-teal-600 font-bold text-sm tracking-widest">{item.year}</span>
                                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{item.title}</h3>
                                    <p className="text-gray-500 leading-relaxed max-w-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MissionTimeline;
