import React from 'react';
import ArticleCard from './ArticleCard';

const dummyArticles = [
    {
        id: 1,
        title: "The Ultimate Guide to Vitamin B12 for Vegans",
        summary: "Why B12 matters, how much you really need, and the best sources for optimal absorption without animal products.",
        category: "Supplements",
        author: "Dr. Sarah Chen",
        readTime: "6 min read",
        date: "Oct 24, 2024",
        image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Interactions Warning: Supplements & Prescriptions",
        summary: "Taking herbal remedies with medication? Here are 5 common interactions that pharmacists warn against.",
        category: "Safety",
        author: "Emily Davis, RDN",
        readTime: "8 min read",
        date: "Oct 20, 2024",
        image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Understanding 'Clean Label' Medicine",
        summary: "What does it mean for a medicine to be clean? We explore the hidden fillers and binders you should avoid.",
        category: "Education",
        author: "Dr. James Wilson",
        readTime: "5 min read",
        date: "Oct 18, 2024",
        image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Top 5 Vegan-Friendly Pain Relief Options",
        summary: "From turmeric to specialized NSAIDs, discover effective pain management strategies that align with your values.",
        category: "Prescriptions",
        author: "Dr. Sarah Chen",
        readTime: "7 min read",
        date: "Oct 15, 2024",
        image: "https://images.unsplash.com/photo-1544367563-12123d895951?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        title: "The Science of Gut Health: Prebiotics vs Probiotics",
        summary: "Gut health is complex. We simplify the science and explain how to build a healthy microbiome.",
        category: "Wellness",
        author: "Emily Davis, RDN",
        readTime: "10 min read",
        date: "Oct 10, 2024",
        image: "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        title: "Eco-Friendly Packaging: Our 2025 Pledge",
        summary: "How VEGANMED is eliminating single-use plastics from our supply chain by 2025.",
        category: "Compliance",
        author: "Dr. Michael Ross",
        readTime: "4 min read",
        date: "Oct 05, 2024",
        image: "https://images.unsplash.com/photo-1620503374955-c90f8441e84e?auto=format&fit=crop&q=80&w=800"
    }
];

const ArticleGrid = () => {
    return (
        <div className="space-y-12">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>Sort by:</span>
                    <select className="bg-transparent font-bold text-gray-900 focus:outline-none cursor-pointer">
                        <option>Newest</option>
                        <option>Popular</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {dummyArticles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="flex justify-center pt-8">
                <button className="px-8 py-3 bg-white border border-gray-200 text-gray-600 font-semibold rounded-full hover:bg-gray-50 hover:text-teal-600 transition shadow-sm">
                    Load More Articles
                </button>
            </div>
        </div>
    );
};

export default ArticleGrid;
