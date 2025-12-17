import React from 'react';

const trendingPosts = [
    { id: 1, title: "Is 'Natural' Always Better? The Truth About Synthetics", category: "Myth Busting" },
    { id: 2, title: "5 Signs You Have a Vitamin D Deficiency", category: "Diagnostics" },
    { id: 3, title: "How to Read a Supplement Label Like a Pro", category: "Education" },
    { id: 4, title: "The Rise of Personalized Medicine", category: "Future Tech" },
    { id: 5, title: "Understanding GMP Certification Standards", category: "Compliance" },
];

const TrendingSidebar = () => {
    return (
        <div className="sticky top-24 space-y-8">
            {/* Trending List */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-6 bg-teal-500 rounded-full"></span>
                    <h3 className="text-xl font-bold text-gray-900">Trending Now</h3>
                </div>

                <div className="space-y-6">
                    {trendingPosts.map((post, idx) => (
                        <div key={post.id} className="group cursor-pointer">
                            <div className="flex gap-4 items-start">
                                <span className="text-2xl font-bold text-gray-200 group-hover:text-teal-200 transition-colors font-mono">
                                    0{idx + 1}
                                </span>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm leading-snug group-hover:text-teal-600 transition-colors mb-1">
                                        {post.title}
                                    </h4>
                                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                </div>
                            </div>
                            {idx !== trendingPosts.length - 1 && (
                                <div className="h-px bg-gray-50 mt-4 w-full"></div>
                            )}
                        </div>
                    ))}
                </div>

                <button className="w-full mt-6 py-2.5 bg-gray-50 text-gray-600 font-semibold text-sm rounded-xl hover:bg-teal-50 hover:text-teal-700 transition flex items-center justify-center gap-2">
                    View All Trending
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </button>
            </div>

            {/* Topic Cloud */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-2 mb-6">
                    <span className="w-1.5 h-6 bg-teal-500 rounded-full"></span>
                    <h3 className="text-xl font-bold text-gray-900">Popular Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {[
                        "Immunity", "Gut Health", "Sleep", "Stress", "Vegan", "Keto", "Pregnancy", "Seniors", "Kids", "Pet Health"
                    ].map((tag, i) => (
                        <span
                            key={i}
                            className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-semibold rounded-lg hover:bg-teal-50 hover:text-teal-600 transition cursor-pointer"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendingSidebar;
