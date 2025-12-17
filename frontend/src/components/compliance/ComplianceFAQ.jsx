import React, { useState } from 'react';

const faqs = [
    { q: "How are products verified vegan?", a: "We require third-party certification from Vegan Action or similar bodies, plus we conduct our own supply chain audits to ensure no animal derivatives are used in processing." },
    { q: "Are your products FDA registered?", a: "Yes, all our manufacturing partners are FDA-registered facilities and adhere to cGMP (Current Good Manufacturing Practice) regulations." },
    { q: "How often are audits performed?", a: "We conduct supplier audits annually, with surprise spot-checks performed quarterly on high-risk ingredients." },
    { q: "Do you test for heavy metals?", a: "Absolutely. Every batch is tested for lead, mercury, arsenic, and cadmium before it ever reaches our warehouse." },
    { q: "Is the packaging eco-friendly?", a: "Our bottles are made from 100% post-consumer recycled plastic (PCR) or glass, and our shipping materials are fully biodegradable." }
];

const ComplianceFAQ = () => {
    const [openIdx, setOpenIdx] = useState(0);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal-200">
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                                className="w-full flex items-center justify-between p-6 text-left bg-white focus:outline-none"
                            >
                                <span className="font-bold text-gray-900 text-lg">{faq.q}</span>
                                <span className={`p-2 rounded-full bg-gray-50 text-gray-500 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 bg-teal-50 text-teal-600' : ''}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-48' : 'max-h-0'}`}>
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
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

export default ComplianceFAQ;
