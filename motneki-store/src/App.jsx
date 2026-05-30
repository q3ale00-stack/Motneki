import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderReview from './pages/OrderReview';
import ThankYou from './pages/ThankYou';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CustomOrders from './pages/CustomOrders';
import OrderTracking from './pages/OrderTracking';
import Preorder from './pages/Preorder';
import Exclusive from './pages/Exclusive';
import Community from './pages/Community';
import Search from './pages/Search';
import SearchOverlay from './components/SearchOverlay';
import ScrollToTop from './components/ScrollToTop';

import SearchResults from './pages/SearchResults';



export default function App() {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <main style={{ marginTop: 64 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/resultados" element={<SearchResults />} />
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/revision" element={<OrderReview />} />
            <Route path="/gracias" element={<ThankYou />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/pedidos-personalizados" element={<CustomOrders />} />
            <Route path="/rastrear" element={<OrderTracking />} />
            <Route path="/preventas" element={<Preorder />} />
            <Route path="/exclusivos" element={<Exclusive />} />
            <Route path="/busqueda" element={<Search />} />
            <Route path="/comunidad" element={<Community />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
