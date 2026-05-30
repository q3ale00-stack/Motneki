import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import './OrderReview.css';

export default function OrderReview() {
  const { items, subtotal } = useCart();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="review container-narrow">
        <div className="checkout-steps">
          <div className="step step--done"><div className="step__circle">1</div><span>CARRITO</span></div>
          <div className="step__line step__line--done" />
          <div className="step step--done"><div className="step__circle">2</div><span>ENVÍO & PAGO</span></div>
          <div className="step__line step__line--done" />
          <div className="step step--active"><div className="step__circle">3</div><span>REVISIÓN</span></div>
        </div>

        <h1 className="font-display" style={{ marginBottom: 32 }}>Revisa tu Pedido</h1>
        <div className="review-layout">
          <div className="review-details">
            <div className="review-cards-row">
              <div className="review-card"><div className="review-card__header"><span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>location_on</span><strong>DIRECCIÓN DE ENVÍO</strong><button>Editar</button></div><p><strong>Carlos Mendoza</strong></p><p>Av. Javier Prado Este 1235, Dpto 402</p><p>San Borja, Lima, Perú</p><p>+51 987 654 321</p></div>
              <div className="review-card"><div className="review-card__header"><span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>local_shipping</span><strong>MÉTODO DE ENVÍO</strong><button>Editar</button></div><p><strong>Olva Courier</strong></p><p style={{ fontStyle: 'italic', color: 'var(--on-surface-variant)' }}>Entrega estimada: 2-3 días hábiles</p></div>
            </div>
            <div className="review-card"><div className="review-card__header"><span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>credit_card</span><strong>MÉTODO DE PAGO</strong><button>Editar</button></div><div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ border: '1px solid var(--outline-variant)', padding: '4px 10px', borderRadius: 4, fontSize: 12, fontWeight: 700 }}>VISA</span><div><p>Tarjeta terminada en **** 4242</p><p style={{ fontSize: 12, color: 'var(--on-surface-variant)' }}>Vencimiento: 12/26</p></div></div></div>

            <h2 className="font-h1" style={{ marginTop: 32, marginBottom: 16 }}>Artículos en tu pedido</h2>
            {items.map((item) => (
              <div key={item.id} className="review-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p className="cart-item__mfr">{item.manufacturer}</p>
                  <strong>{item.name}</strong>
                  <p style={{ fontSize: 12, color: 'var(--on-surface-variant)' }}>Cantidad: {item.quantity}</p>
                </div>
                <span className="font-price" style={{ color: 'var(--primary-container)' }}>
                  S/. {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="review-summary">
            <h3 className="font-h1" style={{ marginBottom: 20 }}>Resumen</h3>
            <div className="checkout-summary__rows">
              <div><span>Subtotal ({items.length} item{items.length !== 1 ? 's' : ''})</span><span>S/. {subtotal.toFixed(2)}</span></div>
              <div><span>Envío (Olva Courier)</span><span>S/. 30.00</span></div>
              <div><span>Impuestos (IGV 18%)</span><span style={{ fontStyle: 'italic' }}>Incluido</span></div>
            </div>
            <div className="review-summary__total">
              <span className="font-h1">TOTAL</span>
              <div>
                <span className="font-price-lg" style={{ color: 'var(--primary-container)' }}>
                  S/. {(subtotal + 30).toFixed(2)}
                </span>
                <p style={{ fontSize: 10, textAlign: 'right', color: 'var(--on-surface-variant)', marginTop: 2 }}>SOLES PERUANOS</p>
              </div>
            </div>
            <Link to="/gracias" className="btn btn--primary btn--lg" style={{ width: '100%', marginTop: 16 }}>Finalizar Compra</Link>
            <p style={{ fontSize: '11px', color: 'var(--on-surface-variant)', marginTop: 12, textAlign: 'center', lineHeight: 1.5 }}>Tu compra está protegida por nuestra <strong>Garantía de Autenticidad</strong> Moneki Store. Transacción segura con cifrado SSL de 256 bits.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
