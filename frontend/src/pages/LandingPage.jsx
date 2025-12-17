import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import Footer from '../components/Footer';

const LandingPage = () => {
    const navigate = useNavigate();
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const { data } = await api.get('/products');
                // Simulate "Trending" by taking the first 4 products
                setTrendingProducts(data.slice(0, 4));
            } catch (err) {
                console.error("Failed to fetch trending products", err);
            } finally {
                setLoading(false);
            }
        };
        fetchTrending();
    }, []);

    const categories = [
        { name: "Vitamins", icon: "💊", color: "bg-orange-100 text-orange-600" },
        { name: "Syrups", icon: "🍯", color: "bg-amber-100 text-amber-600" },
        { name: "Supplements", icon: "🌿", color: "bg-green-100 text-green-600" },
        { name: "Personal Care", icon: "🛁", color: "bg-blue-100 text-blue-600" },
        { name: "Devices", icon: "🩺", color: "bg-purple-100 text-purple-600" },
        { name: "First Aid", icon: "🩹", color: "bg-red-100 text-red-600" },
    ];

    const testimonials = [
        { name: "Sarah J.", role: "Vegan Athlete", text: "Finding medicine that aligns with my values used to be a nightmare. Aesthesic Programs made it effortless.", rating: 5 },
        { name: "Dr. Mark T.", role: "Pharmacist", text: "I recommend Aesthesic Programs to all my patients looking for clean, transparent ingredient lists.", rating: 5 },
        { name: "Emily R.", role: "Mother of two", text: "Safe, effective, and delivered to my door. I love the peace of mind knowing it's cruelty-free.", rating: 5 },
    ];

    const certifications = [
        "FDA Registered", "GMP Certified", "100% Vegan", "Cruelty Free", "Non-GMO"
    ];

    return (
        <div className="font-sans text-gray-900 bg-gray-50 selection:bg-teal-100 selection:text-teal-900">

            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white pt-24 pb-20 lg:pt-32 lg:pb-28">
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-700 text-xs font-bold tracking-widest uppercase mb-6 animate-fade-in-up">
                        The Future of Pharmacy
                    </span>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight animate-fade-in-up delay-100">
                        Medicine simply. <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
                            Purely better.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
                        We believe healing shouldn't hurt the planet. Experience the world's first curated marketplace for 100% animal-free medications.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                        <button
                            onClick={() => navigate('/products')}
                            className="px-8 py-4 bg-teal-600 text-white rounded-full font-semibold shadow-lg shadow-teal-200 hover:shadow-xl hover:-translate-y-1 transition duration-300 text-lg"
                        >
                            Shop Now
                        </button>
                        <button
                            onClick={() => navigate('/about')}
                            className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 hover:border-gray-300 transition duration-300 text-lg"
                        >
                            Our Story
                        </button>
                    </div>
                </div>

                {/* Abstract Background Blobs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </section>

            {/* CATEGORIES SECTION */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
                        <p className="text-gray-500">Essential care for every need.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((cat, idx) => (
                            <div
                                key={idx}
                                onClick={() => navigate('/products')}
                                className="group cursor-pointer flex flex-col items-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300 border border-transparent hover:border-gray-100"
                            >
                                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 ${cat.color} bg-opacity-20 group-hover:scale-110 transition duration-300`}>
                                    {cat.icon}
                                </div>
                                <h3 className="font-semibold text-gray-800">{cat.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRENDING PRODUCTS SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <span className="text-teal-600 font-bold tracking-wider uppercase text-sm">Customer Favorites</span>
                            <h2 className="text-3xl font-bold mt-2">Trending Now</h2>
                        </div>
                        <button onClick={() => navigate('/products')} className="hidden md:block text-teal-600 font-semibold hover:text-teal-800 transition">
                            View All Products &rarr;
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {loading ? (
                            <p className="col-span-4 text-center text-gray-400 py-10">Loading trending health...</p>
                        ) : (
                            trendingProducts.map((product) => (
                                <div key={product._id} className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-2xl transition duration-300 group">
                                    <div className="bg-gray-100 rounded-2xl h-56 w-full mb-5 flex items-center justify-center relative overflow-hidden">
                                        <span className="text-6xl opacity-20 group-hover:scale-110 transition duration-500">🧴</span>
                                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-gray-800 shadow-sm">
                                            {product.category}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-teal-600 transition">{product.name}</h3>
                                        <p className="text-gray-500 text-sm line-clamp-1">{product.description}</p>
                                        <div className="flex justify-between items-center pt-2">
                                            <span className="text-xl font-bold text-gray-900">${product.price}</span>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); navigate('/products'); }}
                                                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition duration-300"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="mt-12 text-center md:hidden">
                        <button onClick={() => navigate('/products')} className="text-teal-600 font-semibold hover:text-teal-800 transition">
                            View All Products &rarr;
                        </button>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-24 bg-teal-900 text-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Aesthesic Programs?</h2>
                        <p className="text-teal-100 text-lg">We hold the highest standards for transparency. No hidden ingredients, no animal testing, just pure science and compassion.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300">
                            <div className="text-5xl mb-6">🌱</div>
                            <h3 className="text-xl font-bold mb-3">100% Plant-Based</h3>
                            <p className="text-teal-200 text-sm leading-relaxed">Every item is rigorously vetted to be free of animal-derived ingredients like gelatin, lactose, or carmine.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300">
                            <div className="text-5xl mb-6">🔬</div>
                            <h3 className="text-xl font-bold mb-3">Pharmacist Verified</h3>
                            <p className="text-teal-200 text-sm leading-relaxed">Our panel of licensed pharmacists reviews clinical efficacy and safety profiles for all stock.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition duration-300">
                            <div className="text-5xl mb-6">🌍</div>
                            <h3 className="text-xl font-bold mb-3">Eco-Conscious</h3>
                            <p className="text-teal-200 text-sm leading-relaxed">We offset carbon for every shipment and use biodegradable packaging whenever possible.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Trusted by Community</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="bg-gray-50 p-8 rounded-2xl relative">
                                <span className="text-teal-200 text-6xl font-serif absolute top-4 left-6">"</span>
                                <p className="text-gray-600 italic mb-6 relative z-10 pt-4">{t.text}</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-400 to-blue-500"></div>
                                    <div>
                                        <h4 className="font-bold text-sm text-gray-900">{t.name}</h4>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider">{t.role}</p>
                                    </div>
                                    <div className="ml-auto text-yellow-400 text-sm">
                                        {"★".repeat(t.rating)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CERTIFICATIONS STRIP */}
            <div className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
                <div className="container mx-auto px-6">
                    <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mb-8">Our Standards</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition duration-500">
                        {certifications.map((cert, idx) => (
                            <span key={idx} className="text-xl font-bold text-gray-800 flex items-center gap-2">
                                <span className="text-2xl text-teal-600">✓</span> {cert}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* NEWSLETTER */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="bg-teal-50 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto border border-teal-100">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-teal-900">Join the Wellness Revolution</h2>
                        <p className="text-teal-700 mb-8 max-w-lg mx-auto">Subscribe for exclusive offers, health tips, and new product drops. No spam, just health.</p>
                        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-4 rounded-full border-0 shadow-sm focus:ring-2 focus:ring-teal-500 text-gray-800"
                            />
                            <button className="px-8 py-4 bg-teal-600 text-white rounded-full font-bold shadow-lg hover:bg-teal-700 transition duration-300">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LandingPage;
