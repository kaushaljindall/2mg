import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InsightsHero from '../components/insights/InsightsHero';
import FeaturedArticle from '../components/insights/FeaturedArticle';
import ArticleGrid from '../components/insights/ArticleGrid';
import TrendingSidebar from '../components/insights/TrendingSidebar';
import NewsletterSignup from '../components/insights/NewsletterSignup';
import AuthorSpotlight from '../components/insights/AuthorSpotlight';
import InsightsFAQ from '../components/insights/InsightsFAQ';

const Insights = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar />

            <main>
                <InsightsHero />
                <FeaturedArticle />

                {/* Main Content Layout */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Column: Articles */}
                        <div className="lg:w-2/3">
                            <ArticleGrid />
                        </div>

                        {/* Right Column: Sidebar */}
                        <aside className="lg:w-1/3">
                            <TrendingSidebar />
                        </aside>
                    </div>
                </div>

                <AuthorSpotlight />
                <NewsletterSignup />
                <InsightsFAQ />

                {/* Final CTA */}
                <div className="bg-white py-24 text-center border-t border-gray-100">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Knowledge is the best medicine.</h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Ready to put these insights into practice? Explore our range of pharmacist-verified, vegan-certified products.
                        </p>
                        <a href="/products" className="inline-block px-10 py-4 bg-teal-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:bg-teal-700 hover:-translate-y-1 transition-all">
                            Explore Products
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Insights;
