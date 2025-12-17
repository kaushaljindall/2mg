import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Checkout = () => {
    const { cartItems, clearCart } = useCart();
    const { user, api } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [prescriptionId, setPrescriptionId] = useState('');

    const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
    const requiresPrescription = cartItems.some(item => item.isPrescriptionRequired);

    const handlePlaceOrder = async () => {
        if (requiresPrescription && !prescriptionId) {
            setMessage('Prescription ID is required for this order.');
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            const orderData = {
                orderItems: cartItems.map(item => ({
                    product: item._id,
                    name: item.name,
                    qty: item.qty,
                    price: item.price
                })),
                totalPrice: total,
                prescriptionId: requiresPrescription ? prescriptionId : undefined
            };

            await api.post('/orders', orderData);
            clearCart();
            setMessage('Order placed successfully!');
            setTimeout(() => navigate('/'), 2000);
        } catch (error) {
            console.error('[CHECKOUT] Order Error:', error);
            console.error('[CHECKOUT] Response Data:', error.response?.data);

            const msg = error.response?.data?.error || error.response?.data?.message || 'Failed to place order';
            setMessage(msg);
        } finally {
            setLoading(false);
        }
    };

    if (cartItems.length === 0) {
        return <div className="text-center mt-10">Your cart is empty</div>;
    }

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
                {cartItems.map(item => (
                    <div key={item._id} className="flex justify-between text-gray-700">
                        <span>{item.name} x {item.qty}</span>
                        <span>${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                ))}
                <div className="border-t mt-4 pt-2 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

            {requiresPrescription && (
                <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
                    <h3 className="text-lg font-bold text-yellow-800 mb-2">Prescription Required</h3>
                    <p className="text-sm text-yellow-700 mb-4">
                        One or more items in your cart require a valid prescription.
                        Please enter your approved Prescription ID below.
                    </p>
                    {/* In a real app, this would be a dropdown of user's approved prescriptions */}
                    <input
                        type="text"
                        placeholder="Enter Approved Prescription ID"
                        value={prescriptionId}
                        onChange={(e) => setPrescriptionId(e.target.value)}
                        className="w-full border p-2 rounded"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                        Don't have one? <button onClick={() => navigate('/upload-prescription')} className="text-blue-600 underline">Upload here</button> and wait for approval.
                    </p>
                </div>
            )}

            {message && (
                <div className={`p-3 mb-4 rounded text-center ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {message}
                </div>
            )}

            <button
                onClick={handlePlaceOrder}
                disabled={loading}
                className="w-full bg-green-600 text-white py-3 rounded font-bold hover:bg-green-700 disabled:bg-gray-400"
            >
                {loading ? 'Processing...' : 'Place Order'}
            </button>
        </div>
    );
};

export default Checkout;
