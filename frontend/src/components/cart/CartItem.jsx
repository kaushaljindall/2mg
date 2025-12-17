import React, { useState } from 'react';
import QuantitySelector from './QuantitySelector';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    const { _id, name, price, qty, image, stock, isPrescriptionRequired, category, description } = item;
    const [isRemoving, setIsRemoving] = useState(false);

    const handleRemove = () => {
        setIsRemoving(true);
        // Wait for animation to finish
        setTimeout(() => {
            onRemove(_id);
        }, 300);
    };

    const isOutOfStock = stock <= 0;
    const isLowStock = stock > 0 && stock < 5;

    return (
        <div
            className={`group relative bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md mb-4 ${isRemoving ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'}`}
        >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* Image Area */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-gray-50 rounded-xl overflow-hidden relative">
                    {image ? (
                        <img src={image} alt={name} className="w-full h-full object-cover mix-blend-multiply" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                    )}
                    {isPrescriptionRequired && (
                        <div className="absolute top-1 left-1 bg-white/90 backdrop-blur text-blue-600 p-1 rounded-md shadow-sm tooltip-trigger" title="Prescription Required">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                        </div>
                    )}
                </div>

                {/* Content Area */}
                <div className="flex-1 min-w-0 w-full">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            {category && (
                                <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase mb-1 ${category === 'Medicine' ? 'bg-blue-50 text-blue-600' :
                                    category === 'Supplement' ? 'bg-green-50 text-green-600' :
                                        'bg-gray-100 text-gray-500'
                                    }`}>
                                    {category}
                                </span>
                            )}
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors leading-tight">
                                {name}
                            </h3>
                            <p className="text-sm text-gray-500 line-clamp-1 mt-0.5">{description}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-bold text-gray-900">${(price * qty).toFixed(2)}</p>
                            {qty > 1 && <p className="text-xs text-gray-400 font-medium">${price} each</p>}
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                        <div className="flex items-center gap-4">
                            <QuantitySelector
                                quantity={qty}
                                onIncrease={() => onUpdateQuantity(item, 1)}
                                onDecrease={() => onUpdateQuantity(item, -1)}
                                max={stock}
                                disabled={isOutOfStock}
                            />
                            {isLowStock && (
                                <span className="text-xs font-medium text-amber-600 flex items-center gap-1 animate-pulse">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
                                    Only {stock} left
                                </span>
                            )}
                        </div>

                        <button
                            onClick={handleRemove}
                            className="text-xs font-medium text-gray-400 hover:text-red-500 flex items-center gap-1.5 transition-colors group/remove px-2 py-1 rounded hover:bg-red-50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/remove:scale-110 transition-transform"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
