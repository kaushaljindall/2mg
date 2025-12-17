import React from 'react';

const badges = [
    {
        title: "Vegan Certified",
        desc: "Certified by Vegan Action. Contains no animal products or by-products.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 16v.01" /><path d="M12 12v.01" /><path d="M8.5 16v.01" /><path d="M16 8.5v.01" /></svg>
        ),
        color: "bg-green-50 text-green-600 border-green-100"
    },
    {
        title: "GMP Verified",
        desc: "Manufactured in Good Manufacturing Practice (GMP) compliant facilities.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
        ),
        color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
        title: "Cruelty Free",
        desc: "No animal testing was performed at any stage of product development.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" /></svg>
        ),
        color: "bg-pink-50 text-pink-600 border-pink-100"
    },
    {
        title: "Eco Packaging",
        desc: "Packaged using recycled or minimal materials to reduce environmental impact.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
        ),
        color: "bg-amber-50 text-amber-600 border-amber-100"
    }
];

const CertificationBadges = () => {
    return (
        <section className="py-20 bg-gray-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Stamps of Approval</h2>
                    <p className="text-gray-600">We proudly display these badges not just as marketing, but as a commitment to our core values of safety, ethics, and transparency.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {badges.map((badge, idx) => (
                        <div key={idx} className={`group bg-white p-6 rounded-2xl border ${badge.color.split(' ')[2]} shadow-sm hover:shadow-soft-xl transition-all hover:-translate-y-1 duration-300`}>
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${badge.color.split(' ')[0]} ${badge.color.split(' ')[1]} group-hover:scale-110 transition-transform`}>
                                {badge.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{badge.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">{badge.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationBadges;
