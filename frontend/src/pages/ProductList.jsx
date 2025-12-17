import { useState, useEffect } from 'react';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { addToCart } = useCart();
    const navigate = useNavigate();

    // Filters
    const categories = ['All', 'Vitamins', 'Prescription', 'First Aid', 'Devices', 'Skincare', 'Digestion'];
    const [activeCategory, setActiveCategory] = useState('All');

    // Mock Data for Demo/Fallback
    const MOCK_PRODUCTS = [
        { _id: '1', name: 'Vitamin D3 5000 IU', category: 'Vitamins', price: 24.99, stock: 15, isPrescriptionRequired: false, description: 'High potency Vitamin D3 support for bone and immune health.', expiryDate: '2025-12-31' },
        { _id: '2', name: 'Amoxicillin 500mg', category: 'Prescription', price: 12.50, stock: 42, isPrescriptionRequired: true, description: 'Antibiotic used to treat a wide variety of bacterial infections.', expiryDate: '2024-10-20' },
        { _id: '3', name: 'Digital Thermometer', category: 'Devices', price: 45.00, stock: 8, isPrescriptionRequired: false, description: 'Fast 10-second reading with professional accuracy.', expiryDate: '2099-12-31' },
        { _id: '4', name: 'Expired Pain Relief', category: 'First Aid', price: 8.99, stock: 0, isPrescriptionRequired: false, description: 'Effective pain relief for headaches and muscle aches.', expiryDate: '2022-01-01' },
        { _id: '5', name: 'Probiotic Complex', category: 'Digestion', price: 32.00, stock: 3, isPrescriptionRequired: false, description: 'Supports healthy digestion and immune system function.', expiryDate: '2025-06-15' },
        { _id: '6', name: 'Retinol Serum', category: 'Skincare', price: 55.00, stock: 20, isPrescriptionRequired: false, description: 'Advanced anti-aging serum for younger looking skin.', expiryDate: '2025-08-30' },
        { _id: '7', name: 'Blood Pressure Monitor', category: 'Devices', price: 89.99, stock: 0, isPrescriptionRequired: false, description: 'Automatic upper arm blood pressure monitor with cuff.', expiryDate: '2099-12-31' },
        { _id: '8', name: 'Iron Supplement', category: 'Vitamins', price: 18.50, stock: 100, isPrescriptionRequired: false, description: 'Gentle iron supplement to fight fatigue.', expiryDate: '2026-03-10' },
    ];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await api.get('/products');
                setProducts(data);
            } catch (err) {
                console.warn('Backend unavailable, using mock data for demo.');
                setProducts(MOCK_PRODUCTS);
                // setError('Failed to load products'); // Removed blocking error
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    // Skeleton Loader Component - Updated to match new card height/style
    const SkeletonCard = () => (
        <div className="bg-white rounded-[20px] p-6 border border-gray-100 flex flex-col h-[300px] animate-pulse">
            <div className="flex justify-between mb-6">
                <div className="h-6 w-24 bg-gray-100 rounded-full"></div>
                <div className="h-6 w-6 bg-gray-100 rounded-full"></div>
            </div>
            <div className="h-8 bg-gray-100 rounded w-3/4 mb-3"></div>
            <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-100 rounded w-2/3 mb-6"></div>

            <div className="mt-auto border-t border-gray-50 pt-4">
                <div className="flex justify-between items-end mb-4">
                    <div className="h-8 w-20 bg-gray-100 rounded"></div>
                    <div className="h-6 w-16 bg-gray-100 rounded"></div>
                </div>
                <div className="h-10 bg-gray-100 rounded-full"></div>
            </div>
        </div>
    );

    if (error) return <div className="text-center mt-32 text-red-500 font-bold">{error}</div>;

    return (
        <div className="bg-brand-light min-h-screen pt-24 pb-32 relative font-sans text-gray-800">
            {/* Soft Medical Gradient Background */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white via-brand-light to-transparent z-0 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">

                {/* Header Section - Clean & Minimal */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 animate-fade-in">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-3">
                            All Products
                        </h1>
                        <p className="text-gray-500 font-medium text-lg">
                            Browsing <span className="text-teal-700 font-semibold">{filteredProducts.length}</span> medical-grade items
                        </p>
                    </div>

                    {/* Sort Dropdown - Floating & Clean */}
                    <div className="relative group min-w-[160px] hidden md:block">
                        <button className="flex items-center justify-between w-full px-5 py-3 bg-white border border-gray-200 rounded-2xl font-bold text-gray-700 shadow-sm hover:border-teal-400 hover:shadow-md transition-all duration-300">
                            <span>Sort By</span>
                            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right z-50">
                            {['Recommended', 'Newest Arrivals', 'Price: Low to High', 'Price: High to Low'].map((sort) => (
                                <button key={sort} className="block w-full text-left px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-teal-50 hover:text-teal-700 rounded-xl transition">
                                    {sort}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Categories Filter - Scrollable Pill Row */}
                <div className="sticky top-20 z-30 bg-brand-light/95 backdrop-blur-md py-4 mb-10 -mx-6 px-6 md:mx-0 md:px-0 md:bg-transparent md:backdrop-blur-none border-b border-gray-100 md:border-none transition-all duration-300">
                    <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 no-scrollbar mask-image-fade">
                        {categories.map((cat, idx) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border
                                ${activeCategory === cat
                                        ? 'bg-teal-700 text-white border-teal-700 shadow-md transform scale-105'
                                        : 'bg-white text-gray-500 border-gray-200 hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50 shadow-sm'}`}
                                style={{ animationDelay: `${idx * 50}ms` }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <SkeletonCard key={n} />)}
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                    onAddToCart={() => handleAddToCart(product)}
                                />
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredProducts.length === 0 && (
                            <div className="text-center py-32 bg-white rounded-[30px] shadow-sm border border-dashed border-gray-200 mt-8">
                                <div className="text-6xl mb-6 opacity-20 filter grayscale">🩺</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">No products found</h3>
                                <p className="text-gray-500 mb-8 max-w-sm mx-auto">We couldn't find any matches for "{activeCategory}".</p>
                                <button
                                    onClick={() => setActiveCategory('All')}
                                    className="px-8 py-3 bg-gray-900 text-white rounded-full font-bold hover:bg-black transition shadow-lg hover:shadow-xl hover:-translate-y-1"
                                >
                                    View All Products
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Mobile Floating Cart Button */}
            <div className="md:hidden fixed bottom-6 right-6 z-40">
                <button
                    onClick={() => navigate('/cart')}
                    className="bg-teal-700 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 hover:scale-110 transition active:scale-95 ring-4 ring-teal-100"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                    <span className="font-bold">Cart</span>
                </button>
            </div>
        </div>
    );
};

export default ProductList;
