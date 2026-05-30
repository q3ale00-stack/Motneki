import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Inicio' },
  { to: '/catalogo', label: 'Catálogo' },
  { to: '/preventas', label: 'Preventas' },
  { to: '/exclusivos', label: 'Exclusivos' },
  { to: '/comunidad', label: 'Comunidad' },
];

export default function Navbar({ onSearchOpen }) {
  const location = useLocation();
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isCheckout = location.pathname === '/checkout' || location.pathname === '/revision';

  if (isCheckout) {
    return (
      <header className="navbar navbar--checkout">
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo">MotnekiStore</Link>
          <div className="navbar__secure">
            <span className="material-symbols-outlined">lock</span>
            PAGO SEGURO
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="navbar glass-nav">
      <div className="navbar__inner">
        <div className="navbar__left">
          <Link to="/" className="navbar__logo">MotnekiStore</Link>
          <nav className="navbar__nav">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="navbar__right">
          <button className="navbar__icon-btn" aria-label="Buscar" onClick={() => { setMobileOpen(false); onSearchOpen(); }}>
            <span className="material-symbols-outlined">search</span>
          </button>
          <Link to="/login" className="navbar__icon-btn" aria-label="Iniciar Sesión">
            <span className="material-symbols-outlined">person</span>
          </Link>
          <button className="navbar__icon-btn" aria-label="Favoritos">
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <Link to="/carrito" className="navbar__icon-btn navbar__cart-btn" aria-label="Carrito">
            <span className="material-symbols-outlined">shopping_cart</span>
            {itemCount > 0 && (
              <motion.span
                className="navbar__cart-badge"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                key={itemCount}
              >
                {itemCount}
              </motion.span>
            )}
          </Link>
          <button className="navbar__mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menú">
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="navbar__mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {navLinks.map(link => (
              <Link key={link.to} to={link.to} className="navbar__mobile-link" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
