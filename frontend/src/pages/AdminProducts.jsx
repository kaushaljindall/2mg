import { useState, useEffect } from 'react';
import api from '../services/api';

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const { data } = await api.get('/products');
            setProducts(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this product?')) return;
        try {
            await api.delete(`/products/${id}`); // Assuming delete endpoint exists
            setProducts(products.filter(p => p._id !== id));
        } catch (error) {
            alert('Failed to delete product');
        }
    };

    if (loading) return <div>Loading admin panel...</div>;

    return (
        <div className="bg-white rounded-3xl shadow-lg p-8 font-sans">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Product Management</h1>
                <button className="bg-teal-600 text-white px-6 py-3 rounded-full font-bold hover:bg-teal-700 transition shadow-md">
                    + Add Product
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-100 text-gray-400 text-sm uppercase tracking-wider">
                            <th className="py-4 font-semibold">Product</th>
                            <th className="py-4 font-semibold">Category</th>
                            <th className="py-4 font-semibold">Stock</th>
                            <th className="py-4 font-semibold">Expiry</th>
                            <th className="py-4 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {products.map((product) => {
                            const isExpired = new Date(product.expiryDate) < new Date();
                            const isLowStock = product.stock < 10;

                            return (
                                <tr key={product._id} className="hover:bg-gray-50 transition">
                                    <td className="py-4">
                                        <div className="font-bold text-gray-900">{product.name}</div>
                                        <div className="text-xs text-gray-500">${product.price}</div>
                                    </td>
                                    <td className="py-4">
                                        <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
                                            {product.category}
                                        </span>
                                    </td>
                                    <td className="py-4">
                                        <span className={`font-bold ${product.stock === 0 ? 'text-red-500' : isLowStock ? 'text-orange-500' : 'text-emerald-500'}`}>
                                            {product.stock} units
                                        </span>
                                    </td>
                                    <td className="py-4">
                                        <div className={isExpired ? 'text-red-500 font-bold' : 'text-gray-600'}>
                                            {new Date(product.expiryDate).toLocaleDateString()}
                                            {isExpired && <span className="block text-[10px] uppercase">Expired</span>}
                                        </div>
                                    </td>
                                    <td className="py-4 text-right space-x-2">
                                        <button className="text-teal-600 font-bold hover:underline text-sm">Edit</button>
                                        <button
                                            onClick={() => handleDelete(product._id)}
                                            className="text-red-500 font-bold hover:underline text-sm"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminProducts;
