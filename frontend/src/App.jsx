import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductList from './pages/ProductList';
import UploadPrescription from './pages/UploadPrescription';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './components/ProtectedRoute';

import LandingPage from './pages/LandingPage';
import About from './pages/About';
import ProductDetails from './pages/ProductDetails';
import OrderHistory from './pages/OrderHistory';
import AdminProducts from './pages/AdminProducts';
import Compliance from './pages/Compliance';
import Insights from './pages/Insights';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-white font-sans">
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<div className="container mx-auto p-4"><ProductList /></div>} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/signup" element={<Signup />} />
              <Route path="/register" element={<Signup />} /> {/* Alias for old link */}
              <Route path="/login" element={<Login />} /> {/* Alias for old link */}
              <Route path="/upload-prescription" element={<div className="container mx-auto p-4"><UploadPrescription /></div>} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/orders" element={<ProtectedRoute><div className="container mx-auto p-4"><div className="text-2xl font-bold mb-4">Your Orders</div><OrderHistory /></div></ProtectedRoute>} />
              <Route path="/admin/products" element={<ProtectedRoute adminOnly={true}><div className="container mx-auto p-4"><AdminProducts /></div></ProtectedRoute>} />
              <Route path="/cart" element={<div className="container mx-auto p-4"><Cart /></div>} />
              <Route path="/checkout" element={<ProtectedRoute><div className="container mx-auto p-4"><Checkout /></div></ProtectedRoute>} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/insights" element={<Insights />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
