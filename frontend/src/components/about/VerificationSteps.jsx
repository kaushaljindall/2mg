import React from 'react';

const VerificationSteps = () => {
    const steps = [
        { id: 1, title: 'Ingredient Audit', icon: '📝', desc: 'We request full ingredient lists from manufacturers, including "trade secret" inactives.' },
        { id: 2, title: 'Source Tracing', icon: '🔎', desc: 'Our team traces excipients like magnesium stearate back to their plant or mineral origin.' },
        { id: 3, title: 'Pharmacist Review', icon: '👩‍⚕️', desc: 'A licensed pharmacist reviews the data to ensure clinical safety and efficacy.' },
        { id: 4, title: 'Certified Animal-Free', icon: '✅', desc: 'Only after 100% verification do we grant the Aesthesic Programs Animal-Free badge.' },
    ];

    return (
        <section className="py-20 bg-brand-light relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#cbd5e0 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Verify</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        Our 4-step "Animal-Free" certification process is the most rigorous in the industry.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((step) => (
                        <div key={step.id} className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
                            {/* Step Number Pill */}
                            <div className="absolute top-4 right-4 bg-gray-50 text-gray-300 font-bold px-3 py-1 rounded-full text-xs group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                                Step 0{step.id}
                            </div>

                            <div className="w-16 h-16 bg-gradient-to-br from-teal-50 to-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">
                                {step.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VerificationSteps;
