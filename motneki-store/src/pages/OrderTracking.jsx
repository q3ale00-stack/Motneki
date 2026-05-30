import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './OrderTracking.css';

const steps = [
  { label: 'RECIBIDO', done: true },
  { label: 'PREPARACIÓN', done: true },
  { label: 'EN TRÁNSITO JP', done: true },
  { label: 'ADUANAS PE', active: true },
  { label: 'REPARTO', done: false },
  { label: 'ENTREGADO', done: false },
];

export default function OrderTracking() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="tracking container-narrow">
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h1 className="font-display" style={{ marginBottom: 8 }}>Rastrear Pedido</h1>
          <p style={{ color: 'var(--on-surface-variant)', maxWidth: 480, margin: '0 auto' }}>Sigue el viaje de tu pieza de colección desde nuestros talleres en Japón hasta la puerta de tu casa en Perú.</p>
        </div>
        <div className="tracking-search">
          <input placeholder="Ingresa tu número de rastreo (ej. MNK-8829-JP)" />
          <button className="btn btn--primary">BUSCAR</button>
        </div>

        <div className="tracking-content">
          <div className="tracking-left">
            {/* Status bar */}
            <div className="tracking-card">
              <h2 className="font-h2" style={{ marginBottom: 20 }}>Estado del Envío</h2>
              <div className="tracking-steps">
                {steps.map((s, i) => (
                  <div key={i} className={`tracking-step ${s.done ? 'tracking-step--done' : ''} ${s.active ? 'tracking-step--active' : ''}`}>
                    <div className="tracking-step__icon">
                      {s.done ? <span className="material-symbols-outlined">check_circle</span> :
                       s.active ? <span className="material-symbols-outlined">flare</span> :
                       <span className="material-symbols-outlined">radio_button_unchecked</span>}
                    </div>
                    <span className="tracking-step__label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* History */}
            <div className="tracking-card">
              <h2 className="font-h2" style={{ marginBottom: 16 }}>Historial de Rastreo</h2>
              <div className="tracking-timeline">
                {[{ time: 'HOY, 14:32', title: 'Procesado en Lima Hub Central', desc: 'Llegada a terminal terrestre - Lima, Perú', active: true },
                  { time: 'AYER, 09:15', title: 'Liberación de Aduanas', desc: 'Trámite de importación completado - Callao, Perú' },
                  { time: '02 DIC, 23:45', title: 'Salida de Vuelo Internacional', desc: 'Narita International Airport - Chiba, Japón' },
                  { time: '30 NOV, 10:00', title: 'Pedido Preparado', desc: 'Akihabara Warehouse - Tokyo, Japón' },
                ].map((ev, i) => (
                  <div key={i} className="timeline-event">
                    <div className={`timeline-dot ${ev.active ? 'timeline-dot--active' : ''}`} />
                    <div>
                      <span className="timeline-time">{ev.time}</span>
                      <strong>{ev.title}</strong>
                      <p>{ev.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="tracking-right">
            <div className="tracking-card">
              <h3 className="font-h2" style={{ marginBottom: 12 }}>Detalles de Orden</h3>
              <div className="tracking-detail-row"><span>Orden N°</span><strong>#MNK-8829-JP</strong></div>
              <div className="tracking-detail-row"><span>Fecha</span><strong>28 Nov, 2024</strong></div>
              <div className="tracking-detail-row"><span>Total</span><strong className="font-price" style={{ color: 'var(--primary-container)' }}>S/ 1,450.00</strong></div>
            </div>

            <div className="tracking-card">
              <p className="font-label" style={{ color: 'var(--on-surface-variant)', marginBottom: 8 }}>PRODUCTO EN CAMINO</p>
              <div style={{ display: 'flex', gap: 12 }}>
                <img src="https://http2.mlstatic.com/D_Q_NP_938838-MLM45178451064_032021-O.webp" alt="" style={{ width: 64, height: 80, borderRadius: 8, objectFit: 'cover' }} />
                <div><strong style={{ fontSize: 14 }}>Evangelion Unit-01</strong><p style={{ fontSize: 12, color: 'var(--on-surface-variant)' }}>Articulated Prototype - Limited Edition</p><span className="product-card__badge badge--limited" style={{ position: 'static', marginTop: 6 }}>LIMITED</span></div>
              </div>
            </div>

            <div className="tracking-card" style={{ background: 'var(--primary-container)', color: 'white', border: 'none' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span className="material-symbols-outlined">support_agent</span>
                <div><strong>¿Necesitas ayuda?</strong><p style={{ fontSize: 13, opacity: 0.85, marginTop: 4 }}>Nuestro equipo de soporte exclusivo está disponible para asistirte con el rastreo de tu orden.</p></div>
              </div>
              <button style={{ width: '100%', marginTop: 16, padding: '12px', background: 'white', color: 'var(--on-surface)', border: 'none', borderRadius: 8, fontWeight: 600, fontSize: 13, cursor: 'pointer' }}>CONTACTAR SOPORTE</button>
            </div>

            <Link to="/" className="tracking-back font-label">← VOLVER A LA TIENDA</Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
