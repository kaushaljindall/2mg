import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 font-sans">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-teal-500 rounded-br-lg rounded-tl-lg"></div>
                            <span className="text-2xl font-bold tracking-wide">Aesthesic Programs</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Compassionate care for a kinder world. We provide 100% plant-based, pharmacist-verified medications and supplements.
                        </p>
                    </div>

                    {/* Quick Link 1 */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-teal-400">Shop</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/products" className="hover:text-white transition">All Products</Link></li>
                            <li><Link to="/products" className="hover:text-white transition">Vitamins & Supplements</Link></li>
                            <li><Link to="/products" className="hover:text-white transition">Personal Care</Link></li>
                            <li><Link to="/products" className="hover:text-white transition">Prescriptions</Link></li>
                        </ul>
                    </div>

                    {/* Quick Link 2 */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-teal-400">Company</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
                            <li><Link to="/certification" className="hover:text-white transition">Our Standards</Link></li>
                            <li><Link to="/resources" className="hover:text-white transition">Careers</Link></li>
                            <li><Link to="/resources" className="hover:text-white transition">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-teal-400">Stay Healthy</h4>
                        <p className="text-gray-400 mb-4">Join our community for wellness tips and exclusive offers.</p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                            <button className="bg-teal-500 text-white px-4 py-3 rounded font-bold hover:bg-teal-600 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Aesthesic Programs. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <span className="hover:text-white cursor-pointer transition">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer transition">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
