import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    const isExpired = new Date(product.expiryDate) < new Date();
    const isLowStock = product.stock < 10 && product.stock > 0;
    const isOutOfStock = product.stock <= 0;

    return (
        <div
            className={`group bg-white rounded-[20px] p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-100 flex flex-col h-full relative overflow-hidden
            ${isExpired ? 'opacity-70 grayscale' : ''}`}
        >
            {/* Top Badge Area - Replaces Image */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex flex-col gap-2">
                    {/* Status Badge */}
                    {isExpired ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-500 border border-red-100">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Expired
                        </span>
                    ) : (
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${product.category === 'Prescription' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                                product.category === 'Device' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                    'bg-teal-50 text-teal-700 border-teal-100'
                            }`}>
                            {product.category}
                        </span>
                    )}
                </div>

                {/* Rx Icon for Prescription Items */}
                {product.isPrescriptionRequired && (
                    <div className="text-indigo-400 group-hover:text-indigo-600 transition-colors" title="Prescription Required">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                )}
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-teal-700 transition-colors">
                    {product.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {product.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-gray-100 w-full mb-4"></div>

                {/* Price and Stock Status */}
                <div className="flex items-end justify-between mb-6">
                    <div>
                        <span className="block text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Price</span>
                        <span className="text-2xl font-bold text-gray-900 tracking-tight">${product.price}</span>
                    </div>

                    <div className="text-right pb-1">
                        {isOutOfStock ? (
                            <span className="flex items-center gap-1.5 text-xs font-bold text-gray-400">
                                <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                                Out of Stock
                            </span>
                        ) : isLowStock ? (
                            <span className="flex items-center gap-1.5 text-xs font-bold text-amber-500">
                                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                                Low Stock
                            </span>
                        ) : (
                            <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                In Stock
                            </span>
                        )}
                    </div>
                </div>

                {/* Action Button */}
                <button
                    onClick={() => onAddToCart(product)}
                    disabled={isOutOfStock || isExpired}
                    className={`w-full py-3 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2
                    ${isOutOfStock || isExpired
                            ? 'bg-gray-50 text-gray-400 cursor-not-allowed border border-gray-100'
                            : 'bg-teal-700 text-white hover:bg-teal-800 shadow-md hover:shadow-lg hover:-translate-y-0.5'}`}
                >
                    {product.isPrescriptionRequired && !isExpired && !isOutOfStock ? (
                        <>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            <span>Upload Rx</span>
                        </>
                    ) : isOutOfStock ? (
                        "Sold Out"
                    ) : isExpired ? (
                        "Unavailable"
                    ) : (
                        <>
                            <span>Add to Cart</span>
                            <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
