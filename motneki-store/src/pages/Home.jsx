import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products, preorders } from '../data/products';
import './Home.css';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

function Slider() {
  const slides = [
    '/imagen/portadaPolos.png',
    '/imagen/PortadaPeluches2.png',
    '/imagen/PortadaFiguras.png',
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="hero__slide-wrapper">
        {slides.map((src, i) => (
          <Link to="/catalogo" key={src} className={`hero__slide ${i === index ? 'is-active' : ''}`}>
            <img src={src} alt={`Portada ${i + 1}`} className="hero__img" />
            <span className="hero__slide-cta">VER CATÁLOGO <span className="hero__cta-arrow">▶</span></span>
          </Link>
        ))}
      </div>
      <button className="hero__nav hero__nav--prev" onClick={() => setIndex((index - 1 + slides.length) % slides.length)} aria-label="Anterior">‹</button>
      <button className="hero__nav hero__nav--next" onClick={() => setIndex((index + 1) % slides.length)} aria-label="Siguiente">›</button>
      <div className="hero__indicators">
        {slides.map((_, i) => (
          <button key={i} className={`hero__dot ${i === index ? 'active' : ''}`} onClick={() => setIndex(i)} aria-label={`Ir a slide ${i + 1}`} />
        ))}
      </div>
    </>
  );
}

export default function Home() {
  const trending = products.slice(0, 4);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__slider" aria-roledescription="carousel">
            {/** Slider controlled in component state */}
            <Slider />
          </div>
          <div className="hero__gradient" />
        </div>
        {/** Hero text removed: each portada now has its own CTA button linking to /catalogo */}
      </section>

      {/* Trending */}
      <section className="section container">
        <div className="section__header">
          <div>
            <h2 className="font-display">Tendencias de la Semana</h2>
            <p className="section__subtitle">Las piezas más buscadas por coleccionistas de todo el mundo.</p>
          </div>
          <Link to="/catalogo" className="section__view-all font-label">VER TODAS</Link>
        </div>
        <div className="product-grid product-grid--4">
          {trending.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>

      {/* Akihabara Exclusives */}
      <section className="akihabara-section">
        <div className="container">
          <div className="akihabara">
            <motion.div className="akihabara__text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
              <motion.span className="font-label" style={{ color: 'var(--primary)' }} variants={fadeUp}>IMPORTACIÓN DIRECTA</motion.span>
              <motion.h2 className="font-display" variants={fadeUp}>Joyas de Akihabara en tu puerta</motion.h2>
              <motion.p className="akihabara__desc" variants={fadeUp}>Nuestra red exclusiva de proveedores en Tokio nos permite ofrecerte ediciones limitadas que rara vez salen de Japón. Autenticidad garantizada y empaque premium en cada envío.</motion.p>
              <motion.div className="akihabara__features" variants={fadeUp}>
                <div className="akihabara__feature"><span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>verified</span><div><h4>Certificado de Autenticidad</h4><p>Cada pieza incluye holograma oficial y registro de fabricante.</p></div></div>
                <div className="akihabara__feature"><span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>flight_takeoff</span><div><h4>Envío Express Asegurado</h4><p>Logística especializada para figuras frágiles con rastreo global.</p></div></div>
              </motion.div>
              <motion.div variants={fadeUp}><Link to="/catalogo" className="btn btn--dark btn--lg">EXPLORAR EXCLUSIVOS</Link></motion.div>
            </motion.div>
            <div className="akihabara__images">
              <div className="akihabara__img-1"><img src="https://www.ociostock.com/productos/imagenes/img_403845_dd1867fe046334406ad81b13a144e41f_20.jpg" alt="Anime figure closeup" /></div>
              <div className="akihabara__img-2"><img src="https://scontent.flim14-1.fna.fbcdn.net/v/t39.30808-6/519666783_122252096060191890_4691145302134726429_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHyqQQ_4PZLrxb_WCaCFu_Zza5i9WAofKXNrmL1YCh8pQrfKb0bWA_2C-ApGNOdo5bJ-jiC1MlSs7PIX7pUTqKQ&_nc_ohc=nKFmxW9xG7QQ7kNvwGzZwYv&_nc_oc=AdrZAd93IDkLX3cea_TOMTDmaethiemQTO_Eq9gvCgMVack4RGh0VgY2vktrHfU1Rg8&_nc_zt=23&_nc_ht=scontent.flim14-1.fna&_nc_gid=SLDSeidyq2Za__SV1urHMA&_nc_ss=7b2a8&oh=00_Af48ipzLLzAVdo8PnsBXBljir88HMuCBePpyTnb4L1GzMw&oe=6A16C368" alt="Anime display" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Releases */}
      <section className="section container">
        <div className="section__header section__header--center">
          <h2 className="font-display">Próximos Lanzamientos</h2>
          <p className="section__subtitle">Asegura tu lugar en la historia. Reservas abiertas para 2024.</p>
        </div>
        <div className="preorder-grid">
          {preorders.map((po, i) => (
            <motion.div key={po.id} className="preorder-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <div className="preorder-card__header"><span className="preorder-card__date">{po.date}</span><span className="material-symbols-outlined">event</span></div>
              <div className="preorder-card__img"><img src={po.image} alt={po.name} /></div>
              <div><h3 className="font-h2">{po.name}</h3><p className="preorder-card__desc">{po.description}</p></div>
              <div className="preorder-card__footer"><span className="font-price">${po.price.toFixed(2)}</span><Link to="/catalogo" className="preorder-card__cta font-label">PREVENTA <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span></Link></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Community CTA */}
      <section className="section container">
        <div className="cta-banner">
          <div className="cta-banner__text">
            <h2 className="font-display">Únete a la elite del coleccionismo</h2>
            <p>Recibe acceso anticipado a preventas exclusivas, eventos VIP y descuentos de comunidad antes que nadie.</p>
            <div className="cta-banner__form"><input type="email" placeholder="Tu correo electrónico" className="cta-banner__input" /><button className="btn btn--primary">SUSCRIBIRSE</button></div>
          </div>
          <div className="cta-banner__circle"><div className="cta-banner__circle-inner"><span>MOTNEKI<br/>INNER CIRCLE</span></div></div>
          <div className="cta-banner__blur1" /><div className="cta-banner__blur2" />
        </div>
      </section>

      {/* Chat FAB */}
      <motion.button className="fab" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="Chat">
        <span className="material-symbols-outlined">chat_bubble</span>
      </motion.button>
    </motion.div>
  );
}
