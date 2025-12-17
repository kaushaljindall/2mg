import React from 'react';

const CertificationsCarousel = () => {
    // In a real app, these would be logo images
    const certs = [
        { name: 'Certified Vegan', org: 'Vegan.org', code: 'V-2024-88', color: 'bg-green-50 text-green-700' },
        { name: 'Cruelty Free', org: 'Leaping Bunny', code: 'LB-9921', color: 'bg-pink-50 text-pink-700' },
        { name: 'Non-GMO', org: 'Project Verified', code: 'NG-112', color: 'bg-blue-50 text-blue-700' },
        { name: 'GMP Certified', org: 'FDA Standards', code: 'Class A', color: 'bg-gray-50 text-gray-700' },
        { name: 'B-Corp Pending', org: 'B Lab', code: '2025', color: 'bg-purple-50 text-purple-700' }
    ];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-10 text-center">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Officially Recognized By</p>
            </div>

            {/* Horizontal Scroll / Carousel */}
            <div className="flex flex-nowrap items-center justify-center gap-6 overflow-hidden relative">
                {/* Gradient Masks for infinite scroll illusion */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused] whitespace-nowrap">
                    {[...certs, ...certs].map((cert, idx) => ( // Duplicate for infinite effect
                        <div key={idx} className={`inline-flex flex-col items-center justify-center w-48 h-32 rounded-2xl border border-gray-100 ${cert.color} bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 cursor-default`}>
                            <span className="font-bold text-lg mb-1">{cert.name}</span>
                            <span className="text-xs opacity-70">{cert.org}</span>
                            <span className="text-[10px] mt-2 px-2 py-0.5 bg-white bg-opacity-50 rounded-full font-mono opacity-60">
                                {cert.code}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsCarousel;
