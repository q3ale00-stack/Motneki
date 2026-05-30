import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { isSoldOut } from '../utils/productStatus';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id)) || products[10]; // fallback to Idol Angel
  const { addItem } = useCart();
  const [activeTab, setActiveTab] = useState('desc');
  const related = products.filter(p => p.id !== product.id).slice(0, 5);
  const soldOut = isSoldOut(product);
  const specs = product.specs || { escala: product.scale || '1/7', altura: 'Aprox. 250mm', material: 'PVC, ABS', escultor: 'Studio Artist', pintura: 'Motneki Studio', categoria: 'Figura Completa' };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="pd container-narrow">
        {/* Breadcrumb */}
        <div className="pd__breadcrumb">
          <Link to="/">Inicio</Link><span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
          <Link to="/catalogo">Figuras a Escala</Link><span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
          <span>{product.name}</span>
        </div>

        <div className="pd__top">
          {/* Images */}
          <div className="pd__gallery">
            <div className="pd__main-img">
              {product.badge && <span className="product-card__badge badge--preorder" style={{ top: 16, left: 16 }}>PREVENTA</span>}
              <img src={product.image} alt={product.name} />
            </div>
            <div className="pd__thumbs">
              {[...Array(5)].map((_, i) => (
                <div key={i} className={`pd__thumb ${i === 0 ? 'pd__thumb--active' : ''}`}>
                  <img src={product.image} alt={`Thumb ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="pd__info">
            <p className="pd__series">Serie {product.series}</p>
            <h1 className="font-h1" style={{ fontSize: 28 }}>{product.name}</h1>
            <p className="pd__manufacturer">Fabricante: <span style={{ color: 'var(--primary)' }}>{product.manufacturer}</span></p>

            <div className="pd__price-box">
              <div className="pd__prices">
                <span className="font-price-lg" style={{ color: 'var(--on-surface)' }}>{product.currency} {product.price.toFixed(2)}</span>
                {product.originalPrice && <span className="pd__old-price">{product.currency} {product.originalPrice.toFixed(2)}</span>}
                {product.originalPrice && <span className="pd__discount">AHORRA {Math.round((1 - product.price / product.originalPrice) * 100)}%</span>}
              </div>
              {product.releaseDate && <div className="pd__date-row"><span>Fecha de Lanzamiento</span><strong>{product.releaseDate}</strong></div>}
              {product.preorderClose && <div className="pd__date-row"><span>Cierre de Preventa</span><strong style={{ color: 'var(--primary-container)' }}>{product.preorderClose}</strong></div>}
              {product.reserved && (
                <div className="pd__reserve-bar-wrap">
                  <div className="pd__reserve-bar"><div style={{ width: `${product.reserved}%` }} /></div>
                  <span>{product.reserved}% de los cupos de preventa reservados</span>
                </div>
              )}
              <button
                className="btn btn--primary btn--lg pd__add-btn"
                onClick={() => !soldOut && addItem(product)}
                disabled={soldOut}
                style={{ width: '100%', opacity: soldOut ? 0.65 : 1, cursor: soldOut ? 'not-allowed' : 'pointer' }}
              >
                <span className="material-symbols-outlined">{soldOut ? 'lock' : 'shopping_cart'}</span>
                {soldOut ? 'AGOTADO' : 'AGREGAR AL CARRITO'}
              </button>
              <div className="pd__secondary-actions">
                <button className="btn btn--outline" style={{ flex: 1 }}><span className="material-symbols-outlined" style={{ fontSize: 18 }}>favorite</span>FAVORITOS</button>
                <button className="btn btn--outline" style={{ flex: 1 }}><span className="material-symbols-outlined" style={{ fontSize: 18 }}>share</span>COMPARTIR</button>
              </div>
            </div>

            <div className="pd__guarantees">
              <div className="pd__guarantee"><span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>local_shipping</span><div><strong>Envío para Coleccionistas</strong><p>Empaque doble con protección de burbujas de alta resistencia. Envíos seguros a todo el Perú.</p></div></div>
              <div className="pd__guarantee"><span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>verified</span><div><strong>Envío para Coleccionistas</strong><p>Empaque doble con protección de burbujas de alta resistencia. Envíos seguros a todo el Perú.</p></div></div>
            </div>
          </div>
        </div>

        {/* Tabs & Specs */}
        <div className="pd__bottom">
          <div className="pd__tabs-area">
            <div className="pd__tabs">
              <button className={`pd__tab ${activeTab === 'desc' ? 'pd__tab--active' : ''}`} onClick={() => setActiveTab('desc')}>Descripción</button>
              <button className={`pd__tab ${activeTab === 'shipping' ? 'pd__tab--active' : ''}`} onClick={() => setActiveTab('shipping')}>Envío y Devoluciones</button>
              <button className={`pd__tab ${activeTab === 'reviews' ? 'pd__tab--active' : ''}`} onClick={() => setActiveTab('reviews')}>Opiniones (48)</button>
            </div>
            <div className="pd__tab-content">
              {activeTab === 'desc' && (
                <div>
                  <p>{product.description || `¡De la exitosa serie "${product.series}" llega esta increíble figura! Cada detalle ha sido fielmente recreado con la máxima calidad.`}</p>
                  <ul style={{ marginTop: 16 }}>
                    <li>• Pose flotante dinámica lograda con soporte estructural reforzado</li>
                    <li>• Material translúcido utilizado en las puntas del cabello</li>
                    <li>• Placa facial intercambiable incluida como bono de primera edición</li>
                    <li>• Micrófono y accesorios de estrella esculpidos con precisión</li>
                  </ul>
                </div>
              )}
              {activeTab === 'shipping' && <p>Envío express asegurado a todo el Perú. Empaque doble con protección de burbujas. Tiempo estimado: 2-3 días hábiles para Lima, 5-7 días para provincias.</p>}
              {activeTab === 'reviews' && <p>48 opiniones verificadas. Calificación promedio: 4.8/5 estrellas.</p>}
            </div>
          </div>
          <div className="pd__specs">
            <h3 className="font-label" style={{ marginBottom: 16 }}>ESPECIFICACIONES TÉCNICAS</h3>
            <table className="pd__specs-table">
              <tbody>
                {Object.entries(specs).map(([key, val]) => (
                  <tr key={key}><td>{key.charAt(0).toUpperCase() + key.slice(1)}</td><td>{val}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Related */}
        <section className="pd__related">
          <div className="section__header"><div><h2 className="font-h1">Productos Relacionados</h2><p className="section__subtitle">Otros coleccionistas también compraron estos artículos</p></div><Link to="/catalogo" className="section__view-all font-label">Ver Catálogo →</Link></div>
          <div className="product-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
