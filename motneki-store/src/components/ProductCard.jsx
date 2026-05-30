import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { isSoldOut } from '../utils/productStatus';
import './ProductCard.css';

const badgeMap = {
  'popular': { label: 'POPULAR', className: 'badge--popular' },
  'limited': { label: 'LIMITED', className: 'badge--limited' },
  'exclusive': { label: 'EXCLUSIVO', className: 'badge--exclusive' },
  'pre-order': { label: 'PREVENTA', className: 'badge--preorder' },
  'in-stock': { label: 'EN STOCK', className: 'badge--stock' },
  'sold-out': { label: 'AGOTADO', className: 'badge--soldout' },
  'sale': { label: 'OFERTA', className: 'badge--sale' },
  'new': { label: 'NEW', className: 'badge--new' },
};

export default function ProductCard({ product, index = 0 }) {
  const badge = product.badge ? badgeMap[product.badge] : null;
  const soldOut = isSoldOut(product);

  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link to={`/producto/${product.id}`} className="product-card__link">
        <div className="product-card__image-wrap">
          <img src={product.image} alt={product.name} className="product-card__image" loading="lazy" />
          {badge && (
            <span className={`product-card__badge ${badge.className}`}>{badge.label}</span>
          )}
          <button className="product-card__fav" aria-label="Agregar a favoritos" onClick={e => e.preventDefault()}>
            <span className="material-symbols-outlined">favorite</span>
          </button>
        </div>
        <div className="product-card__info">
          <p className="product-card__manufacturer">{product.manufacturer}</p>
          <h3 className="product-card__name">{product.name}</h3>
          <p className="product-card__series">{product.series}</p>
          <div className="product-card__footer">
            <span className={`product-card__price ${soldOut ? 'product-card__price--muted' : ''}`}>
              {product.currency} {product.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </span>
            {product.reserved && (
              <div className="product-card__reserve">
                <div className="product-card__reserve-bar">
                  <div className="product-card__reserve-fill" style={{ width: `${product.reserved}%` }} />
                </div>
                <span className="product-card__reserve-text">{product.reserved}% Reservado</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
