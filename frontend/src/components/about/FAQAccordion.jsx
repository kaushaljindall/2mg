import React, { useState } from 'react';

const FAQAccordion = () => {
    const faqs = [
        { q: 'How do you verify if a product is truly vegan?', a: 'We use a 4-step verification process involving ingredient audits, source tracing, and pharmacist reviews. We explicitly check for hidden animal derivatives like magnesium stearate (often from stearic acid) and gelatin.' },
        { q: 'Do you require a prescription?', a: 'For prescription medications, yes. You can easily upload your doctor’s prescription during checkout. For over-the-counter supplements and devices, no prescription is needed.' },
        { q: 'Are your products also gluten-free?', a: 'Most of our verified vegan products are also gluten-free, but check the specific product "Free From" badges on the product page to be 100% sure.' },
        { q: 'Do you ship internationally?', a: 'Currently we ship to the US, Canada, and UK. We are working on expanding our global shipping capabilities to Europe and Australia in late 2025.' },
        { q: 'What is your return policy?', a: 'We accept returns on unopened supplements and devices within 30 days. Due to pharmacy regulations, we cannot accept returns on prescription medications once they leave our facility.' },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-500">Everything you need to know about our standards.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal-100">
                            <button
                                onClick={() => toggle(idx)}
                                className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-100 inset-0"
                                aria-expanded={openIndex === idx}
                            >
                                <span className={`font-bold text-lg ${openIndex === idx ? 'text-teal-700' : 'text-gray-800'}`}>
                                    {faq.q}
                                </span>
                                <span className={`transform transition-transform duration-300 text-teal-500 ${openIndex === idx ? 'rotate-180' : ''}`}>
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-white">
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

export default FAQAccordion;
