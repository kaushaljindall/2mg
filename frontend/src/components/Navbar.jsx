import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const { cartItems } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    // State
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    // Refs for click outside handling
    const profileRef = useRef(null);
    const megaMenuRef = useRef(null);
    const searchRef = useRef(null);

    // Scroll Effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Click Outside Handling
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) setIsProfileDropdownOpen(false);
            if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) setIsMegaMenuOpen(false);
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Route change cleanup
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsMegaMenuOpen(false);
        setIsProfileDropdownOpen(false);
    }, [location]);

    const handleSearch = (e) => {
        e.preventDefault();
        // Implement search logic or navigation
        console.log("Searching for:", searchQuery);
        setIsSearchOpen(false);
    };

    const navLinks = [
        { name: 'Compliance & Certification', path: '/compliance' },
        { name: 'Insights', path: '/insights' },
        { name: 'About', path: '/about' },
    ];

    // SVG Icons for Category Menu
    const productCategories = [
        {
            name: 'Supplements',
            icon: <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
            desc: 'Plant-based vitality'
        },
        {
            name: 'Prescription',
            icon: <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
            desc: 'Doctor verified meds'
        },
        {
            name: 'Devices',
            icon: <svg className="w-8 h-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            desc: 'Home health monitoring'
        },
        {
            name: 'Wellness',
            icon: <svg className="w-8 h-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
            desc: 'Holistic care items'
        },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans border-b
            ${isScrolled
                    ? 'bg-white/80 backdrop-blur-xl border-gray-200 shadow-sm py-3'
                    : 'bg-white/95 border-transparent py-4'}`}
            role="navigation"
            aria-label="Main Navigation"
        >
            <div className="container mx-auto px-6 flex justify-between items-center h-full relative">

                {/* --- LEFT: LOGO --- */}
                <Link to="/" className="flex items-center gap-3 group z-50" aria-label="Home">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-xl shadow-lg flex items-center justify-center transform group-hover:scale-105 transition duration-300">
                        <span className="text-white text-lg font-bold">2</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-teal-600 transition">
                        2mg
                    </span>
                </Link>

                {/* --- CENTER: MAIN NAV --- */}
                <div className="hidden lg:flex items-center space-x-8">
                    {/* Products Mega Menu Trigger */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsMegaMenuOpen(true)}
                        ref={megaMenuRef}
                        onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                        <button
                            className="flex items-center gap-1 text-sm font-bold text-gray-700 hover:text-teal-600 transition py-4 group-hover:text-teal-600"
                            aria-expanded={isMegaMenuOpen}
                        >
                            Products
                            <svg className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180 text-teal-600' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>

                        {/* Mega Menu Dropdown */}
                        <div
                            className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-[24px] shadow-2xl border border-gray-100 p-6 transition-all duration-300 origin-top
                            ${isMegaMenuOpen ? 'opacity-100 scale-100 visible translate-y-2' : 'opacity-0 scale-95 invisible translate-y-0'}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-teal-50/30 rounded-[24px] z-0 pointer-events-none"></div>

                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                {productCategories.map((cat) => (
                                    <Link
                                        key={cat.name}
                                        to="/products"
                                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-lg hover:shadow-teal-50/50 hover:ring-1 ring-teal-50 transition group/item"
                                    >
                                        <span className="bg-gray-50 p-2.5 rounded-xl group-hover/item:scale-110 transition duration-300 group-hover/item:bg-teal-50">
                                            {cat.icon}
                                        </span>
                                        <div>
                                            <h4 className="font-bold text-gray-900 group-hover/item:text-teal-600 transition">{cat.name}</h4>
                                            <p className="text-xs text-gray-500 mt-1 font-medium">{cat.desc}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-50 relative z-10 flex justify-between items-center group/all">
                                <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Explore Catalog</span>
                                <Link to="/products" className="text-sm font-bold text-teal-600 hover:text-teal-800 flex items-center gap-1 group-hover/all:gap-2 transition-all">
                                    View All Products <span className="transform group-hover/all:translate-x-1 transition">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Standard Links */}
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition duration-300 relative group
                                ${location.pathname === link.path ? 'text-teal-600 font-bold' : 'text-gray-600 hover:text-teal-600'}`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-teal-500 transition-all duration-300 rounded-full
                                ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </Link>
                    ))}
                </div>

                {/* --- RIGHT: ACTIONS --- */}
                <div className="hidden lg:flex items-center gap-5">

                    {/* Search */}
                    <div className="relative" ref={searchRef}>
                        {isSearchOpen ? (
                            <form onSubmit={handleSearch} className="absolute right-0 top-1/2 -translate-y-1/2 w-64 flex bg-white border border-gray-200 rounded-full shadow-lg overflow-hidden animate-fade-in-right">
                                <input
                                    type="text"
                                    autoFocus
                                    className="flex-1 px-4 py-2 text-sm focus:outline-none"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onBlur={() => !searchQuery && setIsSearchOpen(false)}
                                />
                                <button type="submit" className="px-3 text-teal-600">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </form>
                        ) : (
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 text-gray-500 hover:text-teal-600 transition rounded-full hover:bg-gray-100"
                                aria-label="Search"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        )}
                    </div>

                    {/* Cart */}
                    <Link to="/cart" className="relative p-2 text-gray-500 hover:text-teal-600 transition" aria-label="Cart">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                        {cartItems.length > 0 && (
                            <span className="absolute top-0 right-0 w-5 h-5 bg-teal-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full ring-2 ring-white animate-bounce-short shadow-md">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>

                    {/* User Dropdown */}
                    {user ? (
                        <div className="relative" ref={profileRef}>
                            <button
                                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                                className="flex items-center gap-2 focus:outline-none group"
                                aria-expanded={isProfileDropdownOpen}
                            >
                                <div className="w-9 h-9 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold border border-teal-200 group-hover:ring-2 ring-teal-100 transition">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <svg className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </button>

                            {isProfileDropdownOpen && (
                                <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 animate-fade-in-down origin-top-right">
                                    <div className="px-5 py-3 border-b border-gray-50 mb-2">
                                        <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Signed in as</p>
                                        <p className="text-sm font-bold text-gray-900 truncate mt-1">{user.email}</p>
                                    </div>
                                    <Link to="/orders" className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition">My Orders</Link>
                                    {user.role === 'admin' && <Link to="/admin/products" className="block px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition">Admin Dashboard</Link>}
                                    <div className="h-px bg-gray-100 my-2"></div>
                                    <button
                                        onClick={logout}
                                        className="w-full text-left px-5 py-2.5 text-sm text-red-500 hover:bg-red-50 font-bold transition"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/auth/login" className="text-sm font-bold text-gray-700 hover:text-teal-600">Log In</Link>
                    )}

                    {/* CTA */}
                    <Link
                        to="/certification"
                        className="bg-gray-900 text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-teal-600 transition shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5 active:scale-95"
                    >
                        Get Certified
                    </Link>
                </div>

                {/* --- MOBILE: HAMBURGER --- */}
                <button
                    className="lg:hidden p-2 text-gray-800"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open Menu"
                >
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
            </div>

            {/* --- MOBILE: SLIDE-OVER MENU --- */}
            {/* Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

            {/* Panel */}
            <div
                className={`fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-out flex flex-col
                ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Header */}
                <div className="p-5 flex justify-between items-center border-b border-gray-100">
                    <span className="font-bold text-lg text-gray-900">Menu</span>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                    >
                        <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>

                {/* Search Mobile */}
                <div className="p-5 border-b border-gray-100 bg-gray-50">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-full pl-10 pr-4 py-3 rounded-xl border-none shadow-sm focus:ring-2 focus:ring-teal-500 text-sm"
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                </div>

                {/* Links */}
                <div className="flex-1 overflow-y-auto p-5 space-y-6">
                    {/* Collapsible Products */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Categories</h4>
                        <div className="space-y-3">
                            {productCategories.map((cat) => (
                                <Link key={cat.name} to="/products" className="flex items-center gap-3 p-3 rounded-lg hover:bg-teal-50 transition">
                                    <span className="text-xl w-8 h-8 flex items-center justify-center bg-gray-50 rounded-lg">{cat.icon}</span>
                                    <span className="font-semibold text-gray-700">{cat.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Company</h4>
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.path} className="text-lg font-bold text-gray-800 hover:text-teal-600">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sticky Bottom Actions */}
                <div className="p-5 border-t border-gray-100 bg-gray-50 mt-auto">
                    {/* Mobile Bottom Auth */}
                    {user ? (
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold">
                                    {user.name.charAt(0).toUpperCase()}
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold text-gray-900">{user.name}</span>
                                    <button onClick={logout} className="text-xs text-red-500 font-semibold text-left">Logout</button>
                                </div>
                            </div>
                            <Link to="/cart" className="relative p-2 bg-white rounded-full shadow-sm">
                                <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-teal-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                                    {cartItems.length}
                                </span>
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <Link to="/auth/login" className="py-3 text-center border border-gray-300 rounded-xl font-bold bg-white text-gray-700 hover:border-teal-500 hover:text-teal-600 transition">Log In</Link>
                            <Link to="/auth/signup" className="py-3 text-center bg-gray-900 text-white rounded-xl font-bold hover:bg-teal-600 transition">Sign Up</Link>
                        </div>
                    )}
                    <Link to="/certification" className="block w-full py-4 bg-teal-600 text-white text-center font-bold rounded-xl shadow-lg hover:bg-teal-700 transition">
                        Get Certified
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
