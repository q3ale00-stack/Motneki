import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import './Cart.css';

export default function Cart() {
  const { items, updateQuantity, removeItem, itemCount, subtotal } = useCart();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="cart-page container-narrow">
        <div className="cart-header">
          <h1 className="font-display">Tu Carrito ({itemCount} artículos)</h1>
          <button className="cart-wishlist-link"><span className="material-symbols-outlined" style={{ fontSize: 18 }}>favorite</span>Mover a Lista de Deseos</button>
        </div>

        <div className="cart-layout">
          <div className="cart-items">
            <div className="cart-table-header">
              <span>DETALLES DEL PRODUCTO</span><span>CANTIDAD</span><span>PRECIO UNITARIO</span><span>SUBTOTAL</span>
            </div>
            {items.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item__product">
                  <img src={item.image} alt={item.name} className="cart-item__img" />
                  <div>
                    <p className="cart-item__mfr">{item.manufacturer}</p>
                    <h3 className="cart-item__name">{item.name}</h3>
                    {item.badges && <div className="cart-item__badges">{item.badges.map(b => <span key={b} className={`product-card__badge badge--${b === 'pre-order' ? 'preorder' : b === 'in-stock' ? 'stock' : b}`} style={{ position: 'static' }}>{b === 'pre-order' ? 'PREVENTA' : b === 'exclusive' ? 'EXCLUSIVO' : b === 'in-stock' ? 'LISTO PARA ENVIAR' : b.toUpperCase()}</span>)}</div>}
                    <div className="cart-item__actions">
                      <button className="cart-item__action"><span className="material-symbols-outlined" style={{ fontSize: 16 }}>favorite</span>Mover a Lista de Deseos</button>
                      <button className="cart-item__action cart-item__action--remove" onClick={() => removeItem(item.id)}><span className="material-symbols-outlined" style={{ fontSize: 16 }}>close</span>Eliminar</button>
                    </div>
                  </div>
                </div>
                <div className="cart-item__qty">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <span className="cart-item__unit-price">{item.currency} {item.price.toFixed(2)}</span>
                <span className="cart-item__subtotal" style={{ color: 'var(--primary-container)', fontWeight: 700 }}>{item.currency} {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2 className="font-h1">Resumen del Pedido</h2>
            <div className="cart-summary__row"><span>Subtotal ({itemCount} artículos)</span><span>S/. {subtotal.toFixed(2)}</span></div>
            <div className="cart-summary__row"><span>Estimación de Envío</span><span style={{ fontSize: 12 }}>Calculado al finalizar compra</span></div>
            <div className="cart-summary__row" style={{ color: 'var(--primary)' }}><span>Puntos de Recompensa Collector</span><span>+370 pts</span></div>
            <div className="cart-summary__total"><span>Total del Pedido</span><span className="font-price-lg" style={{ color: 'var(--primary-container)' }}>S/. {subtotal.toFixed(2)}</span></div>
            <Link to="/checkout" className="btn btn--primary btn--lg" style={{ width: '100%', marginTop: 16, fontSize: 14, letterSpacing: '0.1em' }}>PROCEDER AL PAGO</Link>
            <div className="cart-summary__trust">
              <div><span className="material-symbols-outlined">verified</span><div><strong>Garantía de Autenticidad</strong><p>CADA FIGURA ES 100% MERCANCÍA OFICIAL LICENCIADA.</p></div></div>
              <div><span className="material-symbols-outlined">local_shipping</span><div><strong>Envío Global Express</strong><p>ENVÍO ASEGURADO A TODO EL MUNDO DESDE AKIHABARA, TOKIO.</p></div></div>
            </div>
            <div className="cart-promo">
              <p>¿Tienes un código promocional?</p>
              <div className="cart-promo__form"><input placeholder="Ingresar código" /><button className="font-label">APLICAR</button></div>
            </div>
          </div>
        </div>

        {/* Saved for later */}
        <section className="cart-saved">
          <div className="cart-saved__header"><h2 className="font-h1">Guardado para más tarde</h2><Link to="#" className="font-label" style={{ color: 'var(--primary)', letterSpacing: '0.1em' }}>VER LISTA DE DESEOS</Link></div>
          <div className="cart-saved__grid">
            {[{ name: 'Bleach Ulquiorra Cifer Resurreccion', mfr: 'MAX FACTORY', price: 85.00, img: products_img1 }, { name: 'Chainsaw Man Denji figura Anime', mfr: 'KOTOBUKIYA', price: 159.00, img: products_img2 }].map((item, i) => (
              <div key={i} className="cart-saved__card">
                <div className="cart-saved__card-img"><img src={item.img} alt={item.name} /><button className="cart-saved__card-add"><span className="material-symbols-outlined">shopping_cart</span></button></div>
                <p className="cart-item__mfr">{item.mfr}</p>
                <h3 style={{ fontWeight: 700, fontSize: 14 }}>{item.name}</h3>
                <span className="font-price" style={{ color: 'var(--primary-container)' }}>S/. {item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}

const products_img1 = 'https://i.pinimg.com/736x/a1/fd/18/a1fd18aeaa38e4c7e2191412ae1f77f3.jpg';
const products_img2 = 'https://i.pinimg.com/736x/f9/63/35/f963350b147bcb08b342bb69fe6ccd25.jpg';
