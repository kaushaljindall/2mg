import React, { useState } from 'react';

const faqs = [
    { q: "Is the medical information here reviewed by professionals?", a: "Yes. Every medical article is written or reviewed by a licensed pharmacist (PharmD) or medical doctor (MD) to ensure accuracy and safety." },
    { q: "How often do you update your content?", a: "We audit our content quarterly to ensure it aligns with the latest clinical research and guidelines." },
    { q: "Can I request a topic?", a: "Absolutely! We love hearing from our community. Send your questions to verify@veganmed.org." },
    { q: "Do you accept guest posts?", a: "We maintain strict editorial standards but welcome contributions from qualified healthcare professionals." },
];

const InsightsFAQ = () => {
    const [openIdx, setOpenIdx] = useState(0);

    return (
        <section className="py-16">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300">
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="font-bold text-gray-900 text-base">{faq.q}</span>
                                <span className={`p-2 rounded-full bg-white shadow-sm text-gray-500 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-teal-600' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-48' : 'max-h-0'}`}>
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed text-sm">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InsightsFAQ;
