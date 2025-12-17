import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import EmptyCart from '../components/cart/EmptyCart';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
// Icon removed to use inline SVG


const Cart = () => {
    const { cartItems, removeFromCart, addToCart } = useCart();
    const navigate = useNavigate();

    const subtotal = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
    const tax = subtotal * 0.08; // Estimated 8% tax
    const shipping = subtotal > 100 ? 0 : 5.99; // Free shipping over $100

    const handleUpdateQuantity = (item, change) => {
        addToCart(item, change);
    };

    const handleRemoveItem = (id) => {
        removeFromCart(id);
    };

    const handleCheckout = () => {
        navigate('/checkout');
    };

    if (cartItems.length === 0) {
        return <EmptyCart />;
    }

    return (
        <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Shopping Cart</h1>
                    <span className="bg-gray-200 text-gray-600 px-2.5 py-0.5 rounded-full text-sm font-medium ml-2">
                        {cartItems.length} items
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left Column: Cart Items */}
                    <div className="lg:col-span-8 space-y-4">
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 hidden sm:block">
                            <div className="grid grid-cols-12 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                                <div className="col-span-6">Product</div>
                                <div className="col-span-3 text-center">Quantity</div>
                                <div className="col-span-3 text-right">Total</div>
                            </div>
                        </div>

                        {cartItems.map((item) => (
                            <CartItem
                                key={item._id}
                                item={item}
                                onUpdateQuantity={handleUpdateQuantity}
                                onRemove={handleRemoveItem}
                            />
                        ))}
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:col-span-4">
                        <CartSummary
                            subtotal={subtotal}
                            tax={tax}
                            shipping={shipping}
                            onCheckout={handleCheckout}
                        />

                        <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
                            <h4 className="text-sm font-bold text-blue-800 mb-2">Free Shipping</h4>
                            <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
                                <div
                                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${Math.min((subtotal / 100) * 100, 100)}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-blue-600">
                                {subtotal >= 100
                                    ? "You've qualified for free shipping!"
                                    : `Add $${(100 - subtotal).toFixed(2)} more to get free shipping.`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
