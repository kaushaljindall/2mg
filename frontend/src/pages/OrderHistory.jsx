import { useState, useEffect } from 'react';
import api from '../services/api';

const OrderHistory = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                // Assuming GET /orders/myorders exists or similar
                const { data } = await api.get('/orders/myorders');
                setOrders(data);
            } catch (error) {
                console.error("Failed to fetch orders", error);
            } finally {
                setLoading(false);
            }
        };
        fetchOrders();
    }, []);

    if (loading) return <div className="py-20 text-center text-gray-400">Loading your history...</div>;

    if (orders.length === 0) return (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-xl font-bold text-gray-900">No orders yet</h3>
            <p className="text-gray-500 mb-6">Start your wellness journey today.</p>
        </div>
    );

    return (
        <div className="space-y-6">
            {orders.map((order) => (
                <div key={order._id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                    <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 pb-6 border-b border-gray-50 gap-4">
                        <div>
                            <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Order ID</span>
                            <div className="font-mono text-sm font-bold text-gray-800">#{order._id.slice(-8).toUpperCase()}</div>
                        </div>
                        <div>
                            <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Date</span>
                            <div className="text-sm font-semibold text-gray-800">{new Date(order.createdAt).toLocaleDateString()}</div>
                        </div>
                        <div>
                            <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Total</span>
                            <div className="text-lg font-bold text-teal-600">${order.totalAmount}</div>
                        </div>
                        <div>
                            <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide
                                ${order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' :
                                    order.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                                        'bg-blue-100 text-blue-700'}`}>
                                {order.status || 'Processing'}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {order.orderItems.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center text-sm">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">💊</div>
                                    <div>
                                        <div className="font-bold text-gray-900">{item.name || 'Product Name'}</div>
                                        <div className="text-gray-400">Qty: {item.qty}</div>
                                    </div>
                                </div>
                                <div className="font-bold text-gray-800">${item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderHistory;
