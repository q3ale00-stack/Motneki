import { motion } from 'framer-motion';
import './Exclusive.css';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Exclusive() {
  const exclusiveProducts = products.filter(p => p.id >= 15 && p.id <= 18);

  return (
    <motion.div className="exclusive-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero Section */}
      <section className="exclusive-hero container">
        <div className="exclusive-hero__grid">
          <div className="exclusive-hero__text">
            <span className="exclusive-hero__tag font-label">DIRECTO DE JAPÓN</span>
            <h1 className="font-display-lg exclusive-hero__title">
              La Figura más Exclusiva de <span style={{ color: 'var(--primary)' }}>Tokio</span> en Perú.
            </h1>
            <p className="font-body-lg exclusive-hero__desc">
              Piezas de archivo, ediciones limitadas de Akihabara y objetos de subasta certificados. Elevamos el coleccionismo a una experiencia de arte puro.
            </p>
            <div className="exclusive-hero__actions">
              <button className="btn btn--primary btn--lg preorder-btn-shadow">Explorar Archivo</button>
              <button className="btn btn--outline btn--lg">Cómo Importamos</button>
            </div>
          </div>
          
          <div className="exclusive-hero__image-wrap">
            <div className="exclusive-hero__card">
              <img src="https://i.pinimg.com/1200x/8c/8f/9d/8c8f9dfd08b54fffb3f7d7b50a6b322f.jpg" alt="Luxury Anime Figure" />
            </div>
            <div className="exclusive-hero__badge glass-card">
              <div className="exclusive-hero__badge-title">
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>verified</span>
                <span className="font-label" style={{ color: 'var(--primary)' }}>AUTENTICIDAD NIVEL S</span>
              </div>
              <p className="font-body-sm" style={{ color: 'var(--secondary)', fontStyle: 'italic' }}>
                "Cada pieza es seleccionada personalmente en subastas privadas de Chiyoda, garantizando exclusividad absoluta."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Featured Rarity */}
      <section className="exclusive-bento container">
        <div className="exclusive-bento__header">
          <div style={{ marginTop: '60px' }}></div>
          <h2 className="font-display-lg">Rarezas del Mes</h2>
          <p className="font-body-md" style={{ color: 'var(--secondary)' }}>Selección mensual de piezas que rara vez cruzan el Pacífico. Unidades 01/01 disponibles mediante invitación o lista de espera.</p>
        </div>
        
        <div className="exclusive-bento__grid">
          {/* Main Highlight */}
          <div className="exclusive-bento__main">
            <img src="https://m.media-amazon.com/images/I/71OZdUErIEL._AC_UF894,1000_QL80_.jpg" />
            <div className="exclusive-bento__main-overlay">
              <span className="exclusive-badge">ITEM DE SUBASTA</span>
              <h3 className="font-display-lg">Evangelion Type-01</h3>
              <p className="font-body-md" style={{ opacity: 0.9, marginBottom: 28, maxWidth: 450 }}>Una de las 50 unidades producidas para el 25 aniversario. Acabado en cromo pulido a mano y certificado por Studio Khara.</p>
              <div style={{ display: 'flex', gap: 16 }}>
                <button className="btn" style={{ background: 'white', color: 'var(--primary)' }}>Solicitar Acceso</button>
                <button className="btn btn--outline-light">Ver Detalles</button>
              </div>
            </div>
          </div>
          
          {/* Secondary 1 */}
          <div className="exclusive-bento__sub">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCokz_18MPQwC-js2DqzyzJsQ1C2C7B7nmq7vR0Qr0DbskhNXptvYARlxmTOKH1v3tOTw2wt70VRpx83_vCNr5WOgLtb_vER4VPYzvAyfrZDeKYKaDgpzobQWxEdW8162GIsV0nprDIzB9rtFk7c1uHhspSeWREkoMvn6Zi33Gywopih7ghsUp2HqW13iKeO2MKxGPDOF0yfQuv0dDnilHwYgCOAOAnnSCpBYcPzguaXXmUOYuqkX_wuIFi9AK7VtrKhrPi6mQYqKH" alt="Katana" className="exclusive-bento__sub-img" />
            <div className="exclusive-bento__sub-overlay">
              <h4 className="font-h1">Master Craft Katana</h4>
              <p className="font-body-sm" style={{ opacity: 0.8, marginBottom: 12 }}>Réplica de acero Tamahagane, edición Kyoto.</p>
              <span className="font-price-lg">$2,450.00</span>
            </div>
          </div>
          
          {/* Secondary 2 */}
          <div className="exclusive-bento__sub exclusive-bento__sub--solid">
            <div>
              <span className="material-symbols-outlined preorder-icon-large" style={{ color: 'var(--primary)', marginBottom: 16 }}>auto_awesome</span>
              <h4 className="font-h1" style={{ marginBottom: 8 }}>Servicio Concierge Japan</h4>
              <p className="font-body-md" style={{ color: 'var(--secondary)' }}>¿Buscas una pieza específica? Nuestros agentes en Tokio la encuentran por ti en subastas cerradas.</p>
            </div>
            <a href="#" className="preorder-text-btn font-label" style={{ marginTop: 'auto' }}>Contactar Agente <span className="material-symbols-outlined">arrow_forward</span></a>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="exclusive-gallery container">
        <div className="exclusive-gallery__bg"></div>
        <div className="exclusive-gallery__content">
          <div className="exclusive-gallery__header">
            <div>
              <div style={{ marginTop: '60px' }}></div>
              <h2 className="font-display-lg">Figuras Disponible</h2>
              <p className="font-body-md" style={{ color: 'var(--secondary)' }}>Artículos en stock con envío inmediato desde Lima.</p>
            </div>
            <div className="exclusive-gallery__filters">
              <button className="exclusive-filter exclusive-filter--active">Todos</button>
              <button className="exclusive-filter">Figuras</button>
              <button className="exclusive-filter">Arte</button>
              <button className="exclusive-filter">Relojería</button>
            </div>
          </div>

          <div className="product-grid product-grid--4">
            {exclusiveProducts.map(p => (
              <Link key={p.id} to={`/producto/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="exclusive-product" style={{ cursor: 'pointer' }}>
                  <div className="exclusive-product__img-wrap">
                    <img src={p.image} alt={p.name} className="exclusive-product__img" />
                    {p.badge && (
                      <div className="exclusive-product__badge">
                        <span className={`badge ${p.status === 'sold-out' ? 'badge--tertiary' : p.badge === 'popular' ? 'badge--primary' : 'badge--dark'}`}>{p.badge.toUpperCase()}</span>
                      </div>
                    )}
                    {p.status === 'sold-out' ? (
                      <div className="exclusive-product__waitlist-overlay">
                        <button className="btn" style={{ background: 'white', color: 'var(--on-surface)' }} onClick={(e) => e.preventDefault()}>Lista de Espera</button>
                      </div>
                    ) : (
                      <div className="exclusive-product__hover-bg"></div>
                    )}
                  </div>
                  <h3 className="font-body-lg" style={{ fontWeight: 600, marginBottom: 4 }}>{p.name}</h3>
                  <p className="font-body-sm" style={{ color: 'var(--secondary)', marginBottom: 12 }}>{p.description || p.series}</p>
                  <div className="exclusive-product__footer">
                    <span className="font-price" style={{ color: 'var(--primary)' }}>{p.currency} {p.price}</span>
                    {p.status === 'sold-out' ? (
                      <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>lock</span>
                    ) : (
                      <button className="exclusive-product__cart-btn" onClick={(e) => e.preventDefault()}>
                        <span className="material-symbols-outlined">add_shopping_cart</span>
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Trust Section */}
      <div style={{ marginTop: '80px' }}></div>
      <section className="exclusive-trust container">
        <div className="exclusive-trust__card">
          <div className="exclusive-trust__grid">
            <div className="exclusive-trust__info">
              <h2 className="font-display-lg exclusive-trust__title">Garantía de Autenticidad Motneki</h2>
              <p className="font-body-lg exclusive-trust__desc">Nuestro equipo en Tokio inspecciona cada milímetro de las piezas de subasta. Cada envío incluye un certificado de autenticidad con sello holográfico y procedencia verificada.</p>
              <div className="exclusive-trust__features">
                <div className="exclusive-trust__feature">
                  <span className="material-symbols-outlined">security</span>
                  <span className="font-body-md" style={{ fontWeight: 700 }}>Protección 100%</span>
                </div>
                <div className="exclusive-trust__feature">
                  <span className="material-symbols-outlined">flight_takeoff</span>
                  <span className="font-body-md" style={{ fontWeight: 700 }}>Envío Asegurado</span>
                </div>
              </div>
            </div>
            <div className="exclusive-trust__form-card">
              <h4 className="font-h1" style={{ marginBottom: 16 }}>¿Buscas algo específico?</h4>
              <form className="exclusive-trust__form" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Nombre de la pieza o franquicia" className="exclusive-input" />
                <input type="email" placeholder="Tu correo electrónico" className="exclusive-input" />
                <button className="btn btn--primary" style={{ width: '100%', padding: '16px', borderRadius: 'var(--rounded-full)' }}>Solicitar Información</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
