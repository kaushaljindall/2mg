import React from 'react';

const ArticleCard = ({ article }) => {
    const { title, summary, category, author, date, readTime, image } = article;

    return (
        <div className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-soft-xl transition-all duration-300 hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                    src={image || "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800"}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur text-teal-700 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                        {category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                    {title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                    {summary}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 text-xs font-bold">
                            {author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-xs font-semibold text-gray-700">{author}</span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">{readTime}</span>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
