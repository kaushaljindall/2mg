import React from 'react';
// Icons replaced with inline SVGs

const QuantitySelector = ({ quantity, onIncrease, onDecrease, min = 1, max = 99, disabled = false }) => {
    return (
        <div className={`flex items-center bg-gray-50 rounded-full border border-gray-200 px-1 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
            <button
                onClick={onDecrease}
                disabled={disabled || quantity <= min}
                className="p-1.5 rounded-full hover:bg-white hover:shadow-sm text-gray-500 transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:shadow-none focus:outline-none"
                aria-label="Decrease quantity"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
            </button>

            <span className="w-8 text-center text-sm font-medium text-gray-700 tabular-nums">
                {quantity}
            </span>

            <button
                onClick={onIncrease}
                disabled={disabled || quantity >= max}
                className="p-1.5 rounded-full hover:bg-white hover:shadow-sm text-teal-600 transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:shadow-none focus:outline-none"
                aria-label="Increase quantity"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
            </button>
        </div>
    );
};

export default QuantitySelector;
