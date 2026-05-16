import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About/About';
import DataEntry from './DataEntry/DataEntry';
import ContactUs from './ContactUs/ContactUs';
import Dashboard from './Dashboard/Dashboard';
import NavBar from './Navbar/Navbar';
import Footer from "./Footer/Footer";
import Login from './Login/Login';
import Checkout from './Checkout/Checkout';
import PaymentGateway from './PaymentGateway/PaymentGateway';
import CartContext from "./CartContext/CartContext";
import ProductCard from './ProductCard/ProductCard';
import Shop from './Shop/Shop';
import ProductDetail from './ProductDetails/ProductDetail';
import Cart from './Cart/Cart';
import Electronics from './Electronics/Electronics';
import Sidebar from './Sidebar/Sidebar';
import Project from './Project/Project';
import BuyPage from './BuyPage/BuyPage';
import Packages from './Packages/Packages';
import Interior from './Interior/Interior';
import Plumbing from './Plumbing/Plumbing';

function App() {
  return (
    <Router>
      <div>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/data-entry" element={<DataEntry />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/navBar" element={<NavBar />} />
            <Route path='/footer' element={<Footer />} />
            <Route path='/login' element={<Login />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/paymentgateway' element={<PaymentGateway />} />
            <Route path='/productcard' element={<ProductCard />} />
            <Route path='cartcontext' element={<CartContext />} />
            <Route path="/shop" element={<Shop />} /> {/* Corrected this line */}
            <Route path="/product/:id" element={<ProductDetail />} /> {/* Corrected this line */}
            <Route path='/cart' element={<Cart />} />
            <Route path='/electronics' element={<Electronics />} />
            <Route path='/sidebar' element={<Sidebar />} />
            <Route path='/project' element={<Project />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/interior" element={<Interior />} />
            <Route path="/plumbing" element={<Plumbing />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
