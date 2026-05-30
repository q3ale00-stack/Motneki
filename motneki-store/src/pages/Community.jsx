import { motion } from 'framer-motion';
import './Community.css';

export default function Community() {
  const showcaseImages = [
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8ZRAlM4mwQi3xys_ZtyW6oLhBIIxnMXIhwvHEtJld6KUhs2xj4CQlpc1ktVkQYRGffiaZFPi4NddfvtNFs2bH6yZlPRs5061Dc91d8KIgK6G9YvUbZ_-agaaBx4lhvWFKK3Bh54MDfQc9KdRTKW5ovU6Kj1ORa_ymIPEhnK016tlFFt3jo0FDvdX7uXL3SunZEIB6zf8-iu_luh8nnFOOeZLL2E6iDmEJRRRZbsTT844CBvzD_JVjLVXLoiubYjCbqbLi_uEmVxB4', handle: '@SandroCollects', desc: 'Edición Limitada "Zenith" - Sala Principal', span: 'col-span-2 row-span-2' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGtBIagIGU0H5HUtVuJlqxo7BSDUECwP_590d5RWDcQD06d7byvuvmMeiHpXRlIYVY6FTXKkd1udvL9OyFBHv6zG_ETzIQq9IVeVmWO26PuSIumPe_lMPS1sRrCM30e7Vz-2tl85Rnel-Ux9DmKFZNcQX8JRlgmQH28mHRRPeQyTSbJZroHpIAsYl4VO5Ka0NJxCJIzfLJbPMrRBunvuBvAqhk5DlQ-tK4qq7wVFqsjtijIY6dDjO68ySArExZPgyXmgLi0TnDtZy7', handle: '', desc: '', span: 'col-span-1 row-span-1' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJOwWgjXBlFLOWuzDFQfcw_kOVeITjwzbO26yDeUTStJFxBQZlO1YfoVVJvsCG5U12XKN8DA6OnjqsgaXlu3QQVQrSK9Wz8rnAyPOR9oMOiAUhcAo6nUn0Mssgf9a7ivZMjlm1U1Ik9v_vWklKatNyWIsBmuZ8B00w_fTEB5rLZ2RhGjDlJLSGNTLAowoadFUwP9db_mlwP2-ExRcQrDlR_ZcUfxYzOCwdSJtU_u0EXqAOx7Roh0nvsy0sNxDGXC9fGiQauF0cZHm-', handle: '', desc: '', span: 'col-span-1 row-span-1' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEj8-zTdGmIImoHgDUqK9wjwUcT7r-o_Qk4yGCQGDu7Am0EphEh8bxpwJpCrpFvkm7QT6v6RHvt61blAkeHwGGsIho-zuZ13B5NbX8cXFJLar8_l7yKlDbT2PP5zlcOs1FjadOnc5HC9G6ht6C5jN3hAJ8G1fkBhV_nsMxz9Oy10zco4EHANo7z4czVpzQ_e9yU1HlmMzlpzuHP_iNwJs3LmtDJ0bAVlYKrvPMd1MknMC7SAd8PhJQMvZw5BTJIcbcbl4GjzPoPZRr', handle: '', desc: '', span: 'col-span-2 row-span-1' }
  ];

  return (
    <motion.div className="community-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero Section */}
      <section className="community-hero container">
        <span className="community-hero__tag font-label">MOTNEKI COMMUNITY PERÚ</span>
        <h1 className="font-display-lg community-hero__title">Coleccionismo Elevado a una Experiencia Compartida</h1>
        <p className="font-body-lg community-hero__desc">Únete a la legión de coleccionistas más exclusiva de Perú. Comparte tu pasión, asiste a eventos únicos y debate sobre los próximos lanzamientos.</p>
        <div className="community-hero__actions">
          <button className="btn btn--primary btn--lg preorder-btn-shadow">Unirse al Club</button>
          <button className="btn btn--outline btn--lg">Ver Eventos</button>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="community-showcase container">
        <div className="community-showcase__header">
          <div>
            <h2 className="font-display">Showcase de Coleccionistas</h2>
            <p className="font-body-md" style={{ color: 'var(--secondary)', marginTop: 8 }}>Inspiración real de los espacios de nuestra comunidad en Perú.</p>
          </div>
          <button className="preorder-text-btn font-label">Ver Galería Completa <span className="material-symbols-outlined">arrow_forward</span></button>
        </div>
        
        <div className="showcase-grid">
          {showcaseImages.map((img, i) => (
            <div key={i} className={`showcase-grid__item ${img.span}`}>
              <img src={img.src} alt="Showcase" className="showcase-grid__img" />
              {img.handle && (
                <div className="showcase-grid__overlay">
                  <p className="font-body-md" style={{ fontWeight: 700 }}>{img.handle}</p>
                  <p className="font-body-sm">{img.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Events & Forum Bento Grid */}
      <section className="community-bento container">
        {/* Events Calendar */}
        <div className="community-bento__events">
          <div className="community-bento__header">
            <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: 32 }}>calendar_month</span>
            <h2 className="font-display">Calendario Local Perú</h2>
          </div>
          <div className="event-list">
            <div className="event-card group">
              <div className="event-date event-date--primary">
                <span className="event-month">Oct</span>
                <span className="event-day">12</span>
              </div>
              <div className="event-info">
                <h3 className="font-h2 group-hover:text-primary transition-colors">Private Unveiling: The Katana Series</h3>
                <p className="font-body-sm text-secondary flex-center"><span className="material-symbols-outlined">location_on</span> San Isidro, Lima - Hotel Westin</p>
              </div>
              <span className="material-symbols-outlined text-secondary ml-auto">chevron_right</span>
            </div>
            <div className="event-card group">
              <div className="event-date event-date--surface">
                <span className="event-month">Nov</span>
                <span className="event-day">05</span>
              </div>
              <div className="event-info">
                <h3 className="font-h2 group-hover:text-primary transition-colors">Workshop: Preservación de Resina</h3>
                <p className="font-body-sm text-secondary flex-center"><span className="material-symbols-outlined">location_on</span> Online Exclusive - Zoom Premium</p>
              </div>
              <span className="material-symbols-outlined text-secondary ml-auto">chevron_right</span>
            </div>
            <div className="event-card group">
              <div className="event-date event-date--surface">
                <span className="event-month">Dic</span>
                <span className="event-day">20</span>
              </div>
              <div className="event-info">
                <h3 className="font-h2 group-hover:text-primary transition-colors">Gala de Coleccionistas: Fin de Año</h3>
                <p className="font-body-sm text-secondary flex-center"><span className="material-symbols-outlined">location_on</span> Barranco, Lima - MAC Lima</p>
              </div>
              <span className="material-symbols-outlined text-secondary ml-auto">chevron_right</span>
            </div>
          </div>
        </div>

        {/* Forum / Discussion */}
        <div className="community-bento__forum-col">
          <div className="forum-card">
            <h3 className="font-display" style={{ marginBottom: 24 }}>Discusiones Activas</h3>
            <div className="forum-list">
              <div className="forum-item">
                <p className="font-body-md" style={{ fontWeight: 700, marginBottom: 4 }}>¿Qué opinan del nuevo material de las bases?</p>
                <span className="font-body-sm" style={{ opacity: 0.7 }}>42 comentarios • Último hace 5 min</span>
              </div>
              <div className="forum-item">
                <p className="font-body-md" style={{ fontWeight: 700, marginBottom: 4 }}>Especulación: Lanzamiento "Bloodmoon" 2025</p>
                <span className="font-body-sm" style={{ opacity: 0.7 }}>128 comentarios • Último hace 2 horas</span>
              </div>
              <div className="forum-item" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                <p className="font-body-md" style={{ fontWeight: 700, marginBottom: 4 }}>Guía para importación de piezas exclusivas</p>
                <span className="font-body-sm" style={{ opacity: 0.7 }}>15 comentarios • Último hace 1 día</span>
              </div>
            </div>
            <button className="btn btn--light" style={{ width: '100%', marginTop: 24, fontWeight: 700 }}>Entrar al Foro</button>
          </div>
          <div className="trivia-card">
            <p className="font-label" style={{ color: 'var(--on-surface-variant)', marginBottom: 8 }}>TRIVIA DEL MES</p>
            <p className="font-body-md" style={{ fontWeight: 700, marginBottom: 16 }}>¿Cuál fue la primera pieza de Motneki en llegar a Perú?</p>
            <button className="font-label" style={{ color: 'var(--primary)', textDecoration: 'underline', textUnderlineOffset: 4 }}>Participar y ganar puntos</button>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="community-reviews container">
        <h2 className="font-display-lg" style={{ textAlign: 'center', marginBottom: 64 }}>Voces de la Comunidad</h2>
        <div className="reviews-grid">
          <div className="review-card">
            <span className="material-symbols-outlined review-quote-icon">format_quote</span>
            <div className="review-stars">
              <span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span>
            </div>
            <p className="font-body-md review-text">"La atención al detalle en MotnekiStore Perú es incomparable. No solo compras una figura, te unes a un círculo de personas que aprecian el arte real."</p>
            <div className="review-author">
              <div className="review-avatar"></div>
              <div>
                <p className="font-body-sm" style={{ fontWeight: 700 }}>Mauricio V.</p>
                <p className="font-label" style={{ color: 'var(--secondary)' }}>Coleccionista Nivel Onyx</p>
              </div>
            </div>
          </div>
          <div className="review-card">
            <span className="material-symbols-outlined review-quote-icon">format_quote</span>
            <div className="review-stars">
              <span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span>
            </div>
            <p className="font-body-md review-text">"El evento privado en Lima fue espectacular. Poder hablar con otros coleccionistas y ver las piezas en vivo cambió mi forma de coleccionar."</p>
            <div className="review-author">
              <div className="review-avatar"></div>
              <div>
                <p className="font-body-sm" style={{ fontWeight: 700 }}>Elena R.</p>
                <p className="font-label" style={{ color: 'var(--secondary)' }}>Fundadora Lima Art Toys</p>
              </div>
            </div>
          </div>
          <div className="review-card">
            <span className="material-symbols-outlined review-quote-icon">format_quote</span>
            <div className="review-stars">
              <span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span><span className="material-symbols-outlined">star</span>
            </div>
            <p className="font-body-md review-text">"El soporte en Perú es de primer nivel. Tuve una duda con mi preventa y la resolvieron en minutos con un trato muy humano y profesional."</p>
            <div className="review-author">
              <div className="review-avatar"></div>
              <div>
                <p className="font-body-sm" style={{ fontWeight: 700 }}>Carlos D.</p>
                <p className="font-label" style={{ color: 'var(--secondary)' }}>Coleccionista desde 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="community-newsletter container">
        <div className="community-newsletter__card">
          <div className="community-newsletter__content">
            <h2 className="font-display-lg">No te pierdas ningún drop en Perú</h2>
            <p className="font-body-lg" style={{ color: 'var(--secondary)', marginBottom: 32 }}>Recibe notificaciones exclusivas sobre eventos en Lima, preventas locales y noticias de la comunidad directo en tu correo.</p>
            <div className="community-newsletter__form">
              <input type="email" placeholder="Tu correo electrónico" className="community-newsletter__input" />
              <button className="btn btn--dark" style={{ borderRadius: 'var(--rounded-full)', padding: '16px 32px' }}>Suscribirme</button>
            </div>
          </div>
          <div className="community-newsletter__blob"></div>
        </div>
      </section>

      {/* FAB Post */}
      <button className="fab-add" aria-label="Nuevo Post">
        <span className="material-symbols-outlined">add</span>
      </button>
    </motion.div>
  );
}
