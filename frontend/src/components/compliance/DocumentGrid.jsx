import React from 'react';

const DocumentGrid = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Transparency Reports</h2>
                    <p className="text-gray-600">Download our latest compliance documents and certificates.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        "Certificate of Compliance",
                        "Ingredient Transparency",
                        "Audit Summary 2024",
                        "Vegan Standard Checklist"
                    ].map((doc, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-teal-200 shadow-sm hover:shadow-lg transition-all group cursor-pointer">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-red-50 rounded-lg text-red-500 group-hover:bg-red-100 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
                                </div>
                                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">PDF</span>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors">{doc}</h3>
                            <button className="text-sm text-teal-600 font-semibold flex items-center gap-2 mt-4 group/btn">
                                Download
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:translate-y-1 transition-transform"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DocumentGrid;
