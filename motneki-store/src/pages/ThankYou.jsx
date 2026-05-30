import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ThankYou.css';

export default function ThankYou() {
  const { items, subtotal } = useCart();
  const recommended = products.slice(11, 14);
  const shipping = 25.00;
  const taxes = ((subtotal + shipping) * 0.18).toFixed(2);
  const total = (subtotal + shipping + parseFloat(taxes)).toFixed(2);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Success banner */}
      <div className="ty-banner">
        <motion.div className="ty-check" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}>
          <span className="material-symbols-outlined">check_circle</span>
        </motion.div>
        <h1 className="font-display">¡Gracias por tu compra, Coleccionista!</h1>
        <p>Tu pedido <strong style={{ color: 'var(--primary-container)' }}>#MT-8294</strong> ha sido procesado con éxito. Pronto recibirás un correo con los detalles de seguimiento.</p>
      </div>

      <div className="ty-content container-narrow">
        <div className="ty-grid">
          {/* Order summary */}
          <div className="ty-card">
            <h3 className="font-h2" style={{ marginBottom: 16 }}>Resumen del Pedido</h3>
            {items.map((item) => (
              <div key={item.id} className="ty-product">
                <img src={item.image} alt={item.name} />
                <div>
                  {item.badges && item.badges.length > 0 && (
                    <span className={`product-card__badge badge--${item.badges[0]}`} style={{ position: 'static', marginBottom: 6 }}>
                      {item.badges[0].toUpperCase()}
                    </span>
                  )}
                  <strong>{item.name}</strong>
                  <p>{item.manufacturer}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                    <span style={{ fontSize: 12 }}>Cantidad: {item.quantity}</span>
                    <span style={{ fontSize: 12 }}>Subtotal: {item.currency} {(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
                <span className="font-price">{item.currency} {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="ty-totals">
              <div><span>Envío Express (Asegurado)</span><span>${shipping.toFixed(2)}</span></div>
              <div><span>Impuestos aplicados</span><span>${taxes}</span></div>
              <div className="ty-total-row"><span>Total</span><span className="font-price" style={{ color: 'var(--primary-container)' }}>${total}</span></div>
            </div>
          </div>

          {/* What's next */}
          <div className="ty-card ty-card--center">
            <h3 className="font-h2">¿Qué sigue ahora?</h3>
            <p style={{ color: 'var(--on-surface-variant)', margin: '12px 0 20px', fontSize: 14 }}>Estamos preparando tu pieza de colección con el mayor cuidado. Puedes monitorear el progreso en tiempo real.</p>
            <Link to="/" className="btn btn--primary" style={{ width: '100%', marginBottom: 12 }}>Volver al Inicio</Link>
            <Link to="/rastrear" className="btn btn--outline" style={{ width: '100%' }}><span className="material-symbols-outlined" style={{ fontSize: 18 }}>local_shipping</span>Rastrear Pedido</Link>
            <p className="font-label" style={{ marginTop: 20, color: 'var(--on-surface-variant)' }}>COMPARTE TU NUEVA ADQUISICIÓN</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 8 }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--on-surface-variant)', cursor: 'pointer' }}>share</span>
              <span className="material-symbols-outlined" style={{ color: 'var(--on-surface-variant)', cursor: 'pointer' }}>photo_camera</span>
              <span className="material-symbols-outlined" style={{ color: 'var(--on-surface-variant)', cursor: 'pointer' }}>chat</span>
            </div>
          </div>
        </div>

        {/* Points & Insurance */}
        <div className="ty-info-row">
          <div className="ty-points"><span className="material-symbols-outlined" style={{ color: 'var(--primary-container)', fontSize: 32 }}>star</span><div><strong style={{ color: 'var(--primary-container)' }}>Has ganado 5,000 Motneki Points</strong><p>¡Felicidades! Estos puntos se han añadido a tu cuenta y pueden ser canjeados en tu próxima adquisición exclusiva.</p></div></div>
          <div className="ty-insurance"><span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>verified_user</span><div><strong>Seguro de Envío Motneki</strong><p>Tu pieza viaja protegida contra cualquier daño o pérdida durante el tránsito internacional.</p></div></div>
        </div>

        {/* Recommended */}
        <section style={{ marginTop: 48 }}>
          <div className="section__header"><h2 className="font-display">Completa tu vitrina</h2><Link to="/catalogo" className="section__view-all font-label">Ver catálogo completo →</Link></div>
          <div className="product-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {recommended.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
