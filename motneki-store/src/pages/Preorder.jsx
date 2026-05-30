import { motion } from 'framer-motion';
import './Preorder.css';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Preorder() {
  const popularPreorders = [
    {
      id: 27,
      name: 'Marco el Fénix STL',
      price: 'S/ 849.00',
      eta: 'OCT 2024',
      progress: 85,
      image: 'https://i.redd.it/marco-the-phoenix-s-h-figuarts-one-piece-world-figure-v0-lf8hdsxrllsf1.jpg?width=750&format=pjpg&auto=webp&s=94c37cf547b990f4d20b888ff6f07b568c7e88e2',
      badge: 'TOP 1'
    },
    {
      id: 28,
      name: 'Diablo C Ichiban Kuji Tensei Shitara Slime.',
      price: 'S/ 620.00',
      eta: 'DIC 2024',
      progress: 42,
      image: 'https://shandorashop.com/cdn/shop/files/tensl_magecut_C2_1080px_0423.jpg?v=1715970129&width=1445',
      badge: null
    },
    {
      id: 29,
      name: 'Beserker: Guts',
      price: 'S/ 1,299.00',
      eta: 'NOV 2024',
      progress: 92,
      image: 'https://m.media-amazon.com/images/I/61c9mfRaILL._AC_UF894,1000_QL80_.jpg',
      badge: null
    }
  ];

  const allPreorders = [
    { id: 19, name: "Saber Lily: Victory", price: "S/ 580.00", eta: "ENE 2025", progress: 30, img: "https://www.navitoworld.com/cdn/shop/products/saber_ef511412-e8df-413c-aa76-882530621f99.jpg?v=1458133871" },
    { id: 20, name: "Hunter X: Silent Night", price: "S/ 420.00", eta: "DIC 2024", progress: 65, img: "https://m.media-amazon.com/images/I/71K4yg03D9L._AC_SL1500_.jpg" },
    { id: 21, name: "Nerissa - Hololive", price: "S/ 710.00", eta: "FEB 2025", progress: 15, img: "https://i.etsystatic.com/52557119/r/il/6a0622/6813954875/il_fullxfull.6813954875_av9c.jpg" },
    { id: 22, name: "Cyberpunk Edge", price: "S/ 940.00", eta: "MAR 2025", progress: 45, img: "https://superanimestore.com/cdn/shop/files/POPUPPARADERebecca_5.jpg?v=1724097088&width=1445" },
    { id: 23, name: "Kaido One Piece PVC Figure 7.5 ", price: "S/ 390.00", eta: "DIC 2024", progress: 80, img: "https://i.ebayimg.com/images/g/5oAAAeSwWxpqCE1h/s-l1600.webp" },
    { id: 24, name: "Figuarts ZERO Charlotte Pudding", price: "S/ 1,500.00", eta: "ABR 2025", progress: 10, img: "https://nerdvana.club/wp-content/uploads/2025/11/SF1964-600x600.png" },
    { id: 25, name: "One Piece Roronoa Zoro Premium", price: "S/ 670.00", eta: "OCT 2024", progress: 95, img: "https://m.media-amazon.com/images/I/71yGUu8sQIL._AC_SL1500_.jpg" },
    { id: 26, name: "Factory Supply Hu Tao Genshin", price: "S/ 525.00", eta: "NOV 2024", progress: 55, img: "https://image.made-in-china.com/202f0j00ubtoSjUFCQqB/Factory-Supply-Hu-Tao-Genshin-Impact-Wholesale-Japanese-Anime-Cartoon-Character-Figure-Toy.webp" }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero / Featured Section */}
      <section className="preorder-hero container">
        <div className="preorder-hero__card">
          <img className="preorder-hero__img" src="https://i.pinimg.com/1200x/a3/99/a4/a399a494b0cbd5286b12a6fa7fccadd6.jpg" />
          <div className="preorder-hero__overlay">
            <div className="preorder-hero__content">
              <span className="preorder-hero__tag font-label">LANZAMIENTO ESTELAR</span>
              <h1 className="font-display-lg preorder-hero__title">Masterpiece: <br/>Mahito - Jujutsu Kaisen</h1>
              <p className="font-body-lg preorder-hero__desc">Reserva hoy la pieza central de tu colección. Edición limitada de 100 unidades para todo el Perú.</p>
              <div className="preorder-hero__actions">
                <button className="btn btn--primary btn--lg preorder-btn-shadow">RESERVAR AHORA</button>
                <button className="btn btn--outline-light btn--lg">DETALLES</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Pre-orders Carousel */}
      <section className="preorder-popular container">
        <div className="preorder-popular__header">
          <div>
            <span className="font-label" style={{ color: 'var(--primary)' }}>DESTACADOS DE LA SEMANA</span>
            <h2 className="font-display">Preventas Más Populares</h2>
          </div>
          <div className="preorder-popular__nav">
            <button className="preorder-nav-btn"><span className="material-symbols-outlined">chevron_left</span></button>
            <button className="preorder-nav-btn"><span className="material-symbols-outlined">chevron_right</span></button>
          </div>
        </div>
        
        <div className="preorder-carousel">
          {popularPreorders.map((po) => (
            <Link key={po.id} to={`/producto/${po.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="preorder-carousel__item" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                <div className="preorder-carousel__img-wrap" style={{ height: '430px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                  <img src={po.image} alt={po.name} className="preorder-carousel__img" style={{ width: '100%', height: '460px', objectFit: 'cover' }}/>
                  
                  <div className="preorder-carousel__badges">
                    <span className="badge badge--preorder">PREVENTA</span>
                    {po.badge && <span className="badge badge--dark">{po.badge}</span>}
                  </div>
                </div>
                <div className="preorder-carousel__info" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '160px' }}>
                  <h3 className="font-h1" style={{ minHeight: '52px', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{po.name}</h3>
                  <div className="preorder-carousel__price-row">
                    <span className="font-price-lg" style={{ color: 'var(--primary)' }}>{po.price}</span>
                    <span className="font-label" style={{ color: 'var(--secondary)' }}>ETA: {po.eta}</span>
                  </div>
                  <div className="preorder-progress">
                    <div className="preorder-progress__labels font-label">
                      <span>RESERVAS</span>
                      <span>{po.progress}%</span>
                    </div>
                    <div className="preorder-progress__track">
                      <div className="preorder-progress__fill" style={{ width: `${po.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bento Grid: Why Pre-order with us */}
      <section className="preorder-bento container">
        <div className="preorder-bento__grid">
          <div className="preorder-bento__main">
            <div className="preorder-bento__main-content">
              <span className="material-symbols-outlined preorder-icon-large" style={{ color: 'var(--primary)' }}>verified_user</span>
              <h2 className="font-display">Garantía de Autenticidad Motneki</h2>
              <p className="font-body-lg" style={{ color: 'var(--secondary)' }}>Cada preventa está respaldada por una certificación única que asegura que tu pieza es 100% original de fabricante. Sin intermediarios dudosos.</p>
            </div>
            <button className="preorder-text-btn font-label">LEER MÁS <span className="material-symbols-outlined">arrow_forward</span></button>
          </div>
          
          <div className="preorder-bento__side">
            <div className="preorder-bento__card preorder-bento__card--primary">
              <span className="material-symbols-outlined preorder-icon-large" style={{ color: 'var(--on-primary-container)' }}>local_shipping</span>
              <h3 className="font-h2" style={{ color: 'var(--on-primary-container)' }}>Envío Preferencial</h3>
              <p className="font-body-md" style={{ color: 'var(--on-primary-container)' }}>Los usuarios que reservan reciben sus productos 48h antes del lanzamiento oficial en tienda.</p>
            </div>
            <div className="preorder-bento__card preorder-bento__card--surface">
              <span className="material-symbols-outlined preorder-icon-large" style={{ color: 'var(--primary)' }}>payments</span>
              <h3 className="font-h2">Cuotas Sin Intereses</h3>
              <p className="font-body-md" style={{ color: 'var(--secondary)' }}>Reserva con solo el 20% y paga el resto en hasta 6 cuotas fijas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* All Pre-orders Grid */}
      <section className="preorder-all container">
        <div className="preorder-all__header">
          <h2 className="font-h1">Todas las Preventas</h2>
          <div className="preorder-all__divider"></div>
        </div>
        
        <div className="product-grid product-grid--4">
          {allPreorders.map((po) => (
            <Link key={po.id} to={`/producto/${po.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="preorder-card-simple" style={{ cursor: 'pointer' }}>
                <div className="preorder-card-simple__img-wrap">
                  <img src={po.img} alt={po.name} className="preorder-card-simple__img" />
                  <div className="preorder-card-simple__action">
                    <button className="preorder-card-simple__btn" onClick={(e) => e.preventDefault()}>
                      <span className="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                  </div>
                  <div className="preorder-card-simple__badge">
                    <span className="font-label">PREVENTA</span>
                  </div>
                </div>
                <div className="preorder-card-simple__info">
                  <h4 className="font-body-md" style={{ fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{po.name}</h4>
                  <div className="preorder-card-simple__price-row">
                    <span className="font-price" style={{ color: 'var(--on-surface)' }}>{po.price}</span>
                    <span className="font-label" style={{ color: 'var(--secondary-fixed-dim)' }}>{po.eta}</span>
                  </div>
                  <div className="preorder-progress__track" style={{ height: 4, marginTop: 8 }}>
                    <div className="preorder-progress__fill" style={{ width: `${po.progress}%` }}></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="preorder-all__more">
          <button className="btn btn--outline btn--lg">CARGAR MÁS PRODUCTOS</button>
        </div>
      </section>
      
      {/* FAB */}
      <button className="fab-chat" aria-label="Chat">
        <span className="material-symbols-outlined">chat_bubble</span>
      </button>
    </motion.div>
  );
}
