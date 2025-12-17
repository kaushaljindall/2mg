import React from 'react';

const ComplianceOverview = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute inset-0 bg-gradient-to-tr from-teal-50 to-white rounded-3xl transform rotate-3 scale-105 -z-10 border border-teal-50"></div>
                        <div className="bg-white rounded-3xl shadow-soft-xl p-8 border border-gray-100 relative overflow-hidden">
                            {/* Abstract graphic representing audit */}
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Supplier Audit Complete</h4>
                                        <p className="text-xs text-gray-500">Verified: Oct 24, 2024</p>
                                    </div>
                                    <div className="ml-auto text-green-600 font-bold text-xs uppercase tracking-wider bg-white px-2 py-1 rounded shadow-sm">
                                        Pass
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100 opacity-80">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-8" /><path d="M16 4.053a2 2 0 0 1 2.122-2H22" /><path d="M12 18h10" /></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Chemical Analysis</h4>
                                        <p className="text-xs text-gray-500">In Progress: Batch #9921</p>
                                    </div>
                                    <div className="ml-auto animate-pulse">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-4 px-2">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900">100%</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Vegan</div>
                                    </div>
                                    <div className="w-px h-8 bg-gray-200"></div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900">0</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Contaminants</div>
                                    </div>
                                    <div className="w-px h-8 bg-gray-200"></div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-gray-900">FDA</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Guidelines</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Compliance Matters</h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed">
                            <p>
                                Ideally, medicine should heal without harm. That’s why we mandate strict compliance protocols that exceed standard requirements. We don't just rely on third-party certifications; we perform our own robust audits.
                            </p>
                            <p>
                                From identifying the origin of every raw ingredient to rigorous stability testing, our compliance team ensures that when you see the VEGANMED seal, you can trust it completely.
                            </p>

                            <ul className="space-y-4 mt-8">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mt-0.5 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <span>
                                        <strong className="text-gray-900 block">Ingredient Sourcing Audit</strong>
                                        Verifying zero animal by-products in the entire supply chain.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mt-0.5 shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <span>
                                        <strong className="text-gray-900 block">Pharmacist Verification</strong>
                                        Every product is reviewed by a licensed pharmacist for efficacy.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ComplianceOverview;
