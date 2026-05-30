import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import './Checkout.css';

export default function Checkout() {
  const [method, setMethod] = useState('card');
  const { items, subtotal } = useCart();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="checkout container-narrow">
        {/* Steps */}
        <div className="checkout-steps">
          <div className="step step--done"><div className="step__circle"><span className="material-symbols-outlined">check</span></div><span>ENVÍO</span></div>
          <div className="step__line step__line--done" />
          <div className="step step--active"><div className="step__circle">2</div><span>PAGO</span></div>
          <div className="step__line" />
          <div className="step"><div className="step__circle">3</div><span>REVISIÓN</span></div>
        </div>

        <div className="checkout-layout">
          <div className="checkout-form-area">
            <h2 className="font-display" style={{ marginBottom: 24 }}>Método de Pago</h2>
            <div className={`payment-option ${method === 'card' ? 'payment-option--active' : ''}`} onClick={() => setMethod('card')}>
              <div className="payment-option__radio"><div className={method === 'card' ? 'radio--filled' : ''} /></div>
              <span>Tarjeta de Crédito / Débito</span>
              <span className="material-symbols-outlined" style={{ marginLeft: 'auto' }}>credit_card</span>
            </div>
            {method === 'card' && (
              <div className="card-form">
                <div className="form-group"><label>Número de Tarjeta</label><input placeholder="0000 0000 0000 0000" /></div>
                <div className="form-row">
                  <div className="form-group"><label>Fecha de Expiración</label><input placeholder="MM/AA" /></div>
                  <div className="form-group"><label>CVC</label><input placeholder="123" /></div>
                </div>
                <div className="form-group"><label>Nombre en la Tarjeta</label><input placeholder="Nombre completo" /></div>
              </div>
            )}
            <div className={`payment-option ${method === 'paypal' ? 'payment-option--active' : ''}`} onClick={() => setMethod('paypal')}>
              <div className="payment-option__radio"><div className={method === 'paypal' ? 'radio--filled' : ''} /></div><span>PayPal</span>
            </div>
            <div className={`payment-option ${method === 'yape' ? 'payment-option--active' : ''}`} onClick={() => setMethod('yape')}>
              <div className="payment-option__radio"><div className={method === 'yape' ? 'radio--filled' : ''} /></div><span>Yape / Plin (QR)</span>
              <span className="material-symbols-outlined" style={{ marginLeft: 'auto' }}>qr_code_2</span>
            </div>
          </div>

          <div className="checkout-summary">
            <h3 className="font-h1" style={{ marginBottom: 20 }}>Resumen de Orden</h3>
            {items.map((item) => (
              <div key={item.id} className="checkout-summary__product">
                <img src={item.image} alt={item.name} />
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.manufacturer}</p>
                  <span style={{ color: 'var(--primary)', fontSize: 13 }}>
                    {item.quantity}x {item.currency} {item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
            <div className="checkout-summary__rows">
              <div><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div><span>Envío Estimado</span><span>Por calcular</span></div>
            </div>
            <div className="checkout-summary__total"><span className="font-h1">Total Hoy</span><span className="font-price-lg" style={{ color: 'var(--primary-container)' }}>${subtotal.toFixed(2)}</span></div>
            <div className="checkout-summary__trust"><span className="material-symbols-outlined">verified</span><span>100% ORIGINAL</span><span className="material-symbols-outlined">lock</span><span>SSL SEGURO</span></div>
          </div>
        </div>

        <div className="checkout-actions">
          <Link to="/carrito" className="font-label" style={{ color: 'var(--on-surface-variant)' }}>← VOLVER A ENVÍO</Link>
          <Link to="/revision" className="btn btn--primary btn--lg">CONTINUAR A REVISIÓN →</Link>
        </div>
      </div>
    </motion.div>
  );
}
