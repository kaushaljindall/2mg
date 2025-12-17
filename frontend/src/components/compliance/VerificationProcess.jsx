import React from 'react';

const steps = [
    {
        title: "Ingredient Sourcing",
        desc: "We audit every supplier to ensure 100% plant-based origins and ethical labor practices.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 11v 8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" /></svg>
        )
    },
    {
        title: "Lab Testing",
        desc: "Samples are sent to ISO-certified labs for microbial, heavy metal, and potency analysis.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-8" /><path d="M16 4.053a2 2 0 0 1 2.122-2H22" /><path d="M12 18h10" /></svg>
        )
    },
    {
        title: "Pharmacist Review",
        desc: "Our clinical team reviews the testing data to verify safety and efficacy claims.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
        )
    },
    {
        title: "Final Approval",
        desc: "Only products that pass all 3 stages receive the VEGANMED seal of approval.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
        )
    }
];

const VerificationProcess = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">The Verification Journey</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">From raw earth to your medicine cabinet, we track every step.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="group flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-white border-4 border-gray-50 shadow-soft mb-6 flex items-center justify-center text-teal-600 group-hover:border-teal-100 group-hover:scale-110 transition-all duration-300 relative">
                                    {step.icon}
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-teal-600 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                                        {idx + 1}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed px-4">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VerificationProcess;
