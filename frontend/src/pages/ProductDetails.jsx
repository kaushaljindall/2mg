import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data } = await api.get(`/products/${id}`);
                setProduct(data);
            } catch (err) {
                setError('Product not found');
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <div className="min-h-screen flex items-center justify-center text-teal-600 font-bold bg-slate-50">Loading details...</div>;
    if (error) return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-50">
            <h2 className="text-2xl font-bold text-gray-800">Product Not Found</h2>
            <button onClick={() => navigate('/products')} className="text-teal-600 underline font-bold">Back to Products</button>
        </div>
    );

    const isExpired = new Date(product.expiryDate) < new Date();
    const isOutOfStock = product.stock <= 0;

    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-32 font-sans relative overflow-x-hidden">
            {/* Background Blob Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Breadcrumbs */}
                <div className="text-sm text-gray-500 mb-8 flex items-center gap-2 font-medium">
                    <span onClick={() => navigate('/products')} className="cursor-pointer hover:text-teal-600 transition">Products</span>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-900">{product.category}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Image Gallery */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-[40px] aspect-[4/3] flex items-center justify-center shadow-2xl shadow-teal-50/50 border border-white relative overflow-hidden group">
                            {/* Frosted Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/20 to-transparent pointer-events-none"></div>
                            <span className="text-9xl opacity-20 filter grayscale-0 group-hover:scale-110 transition duration-700">💊</span>

                            {/* Floating Status Badges */}
                            <div className="absolute top-6 left-6 flex flex-col gap-2">
                                {isExpired && <span className="px-4 py-2 bg-rose-50 text-rose-600 text-xs font-extrabold rounded-full border border-rose-100 shadow-sm uppercase tracking-wider backdrop-blur-md">Expired</span>}
                                {product.isPrescriptionRequired && <span className="px-4 py-2 bg-indigo-50 text-indigo-600 text-xs font-extrabold rounded-full border border-indigo-100 shadow-sm flex items-center gap-2 backdrop-blur-md"><svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> Rx Required</span>}
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`bg-white rounded-2xl aspect-square cursor-pointer border-2 transition-all duration-300 ${i === 1 ? 'border-teal-500 ring-2 ring-teal-100' : 'border-transparent hover:border-teal-200'}`}></div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col h-full">
                        <div className="mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">{product.name}</h1>
                            <div className="flex items-center gap-5 mb-6">
                                <span className="text-4xl font-bold text-teal-700 tracking-tight">${product.price}</span>
                                {isOutOfStock ? (
                                    <span className="text-rose-600 font-bold bg-rose-50 px-4 py-1.5 rounded-full text-sm border border-rose-100">Out of Stock</span>
                                ) : (
                                    <span className="text-emerald-600 font-bold bg-emerald-50 px-4 py-1.5 rounded-full text-sm border border-emerald-100 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                        In Stock
                                    </span>
                                )}
                            </div>
                            <div className="h-px bg-gray-100 w-full mb-6"></div>
                            <p className="text-lg text-gray-500 leading-relaxed font-medium">{product.description}</p>
                            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                                Formulated with premium ingredients, verified by pharmacists, and designed for optimal efficacy. 100% Vegan and Cruelty-Free.
                            </p>
                        </div>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            <div className="p-5 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
                                <span className="block text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Expiry Date</span>
                                <span className={`text-lg font-bold ${isExpired ? 'text-rose-500' : 'text-gray-900'}`}>
                                    {new Date(product.expiryDate).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="p-5 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
                                <span className="block text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Category</span>
                                <span className="text-lg font-bold text-gray-900">{product.category}</span>
                            </div>
                        </div>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex flex-col gap-4 mt-auto">
                            <button
                                onClick={() => addToCart(product)}
                                disabled={isOutOfStock || isExpired}
                                className={`w-full py-5 rounded-full font-bold text-lg shadow-xl shadow-teal-100 transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-3
                                ${isOutOfStock || isExpired
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-teal-200'}`}
                            >
                                {isOutOfStock ? (
                                    'Sold Out'
                                ) : isExpired ? (
                                    <span className="flex items-center gap-2"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> Unavailable</span>
                                ) : (
                                    <>
                                        <span>Add to Cart — ${product.price}</span>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                    </>
                                )}
                            </button>

                            {product.isPrescriptionRequired && !isExpired && (
                                <button className="w-full py-5 rounded-full font-bold text-lg border-2 border-indigo-100 text-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 transition flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                                    Upload Prescription
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-20 pt-10 border-t border-gray-200 flex flex-wrap gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition duration-500 justify-center md:justify-start">
                    {['FDA Registered', 'GMP Certified', '100% Vegan', 'Cruelty Free', 'Non-GMO'].map((badge) => (
                        <div key={badge} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold">✓</div>
                            <span className="text-sm font-bold text-gray-900">{badge}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Sticky Floating Action Bar */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-gray-200 p-4 z-50 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] pb-8">
                <div className="flex gap-4">
                    {product.isPrescriptionRequired && (
                        <button className="p-4 rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        </button>
                    )}
                    <button
                        onClick={() => addToCart(product)}
                        disabled={isOutOfStock || isExpired}
                        className={`flex-1 py-4 rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center gap-2
                        ${isOutOfStock || isExpired
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : 'bg-teal-600 text-white active:bg-teal-700'}`}
                    >
                        {isOutOfStock ? 'Sold Out' : isExpired ? 'Expired' : `Add to Cart - $${product.price}`}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
