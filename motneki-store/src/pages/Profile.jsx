import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Profile.css';

const tabs = ['Perfil', 'Mis Pedidos', 'Preventas', 'Direcciones', 'Métodos de Pago'];

export default function Profile() {
  const [activeTab, setActiveTab] = useState('Perfil');
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="profile-page">
        {/* Sidebar */}
        <aside className="profile-sidebar">
          <div className="profile-user"><div className="profile-avatar">MC</div><div><strong>Motneki Collector</strong><p>MIEMBRO NIVEL 4</p></div></div>
          <nav className="profile-nav">
            <Link to="/" className="profile-nav__link"><span className="material-symbols-outlined">home</span>Inicio</Link>
            <Link to="/catalogo" className="profile-nav__link"><span className="material-symbols-outlined">grid_view</span>Catálogo</Link>
            <Link to="/rastrear" className="profile-nav__link profile-nav__link--active"><span className="material-symbols-outlined">local_shipping</span>Rastreador de Preventas</Link>
            <a href="#" className="profile-nav__link"><span className="material-symbols-outlined">favorite</span>Lista de Deseos</a>
            <Link to="/pedidos-personalizados" className="profile-nav__link"><span className="material-symbols-outlined">edit_note</span>Pedidos Personalizados</Link>
          </nav>
          <Link to="/pedidos-personalizados" className="sidebar-custom-btn" style={{ marginTop: 'auto' }}>Solicitar Figura Personalizada</Link>
        </aside>

        {/* Main */}
        <main className="profile-main">
          <h1 className="font-display" style={{ marginBottom: 8 }}>Panel del Coleccionista</h1>
          <p style={{ color: 'var(--on-surface-variant)', marginBottom: 24 }}>Gestiona tus colecciones, rastrea envíos y descubre nuevos artículos exclusivos.</p>
          <div className="profile-tabs">{tabs.map(t => <button key={t} className={`profile-tab ${activeTab === t ? 'profile-tab--active' : ''}`} onClick={() => setActiveTab(t)}>{t}</button>)}</div>

          <div className="profile-grid">
            {/* Recent Orders */}
            <div className="profile-card">
              <div className="profile-card__header"><h3 className="font-h2">Pedidos Recientes</h3><a href="#" className="font-label" style={{ color: 'var(--primary)' }}>VER TODO</a></div>
              {[{ name: 'Cyberpunk 2077: ...', order: '#MK-88219', status: 'ENVIADO', price: 425.00, color: '#22c55e' },
                { name: 'Hatsune Miku: Ma...', order: '#MK-88104', status: 'PROCESANDO', price: 150.00, color: 'var(--primary-container)' }
              ].map((o, i) => (
                <div key={i} className="profile-order"><img src="https://cdn.somoskudasai.com/image/73131d3edd3000934189c27a01519dc2/1619x1080/a2-4.jpg" alt="" /><div><strong>{o.name}</strong><p style={{ fontSize: 11, color: '#9ca3af' }}>Pedido {o.order}</p><span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4, background: o.color, color: 'white', display: 'inline-block', marginTop: 4 }}>{o.status}</span></div><span className="font-price">S/. {o.price.toFixed(2)}</span></div>
              ))}
            </div>

            {/* Preorder Tracker */}
            <div className="profile-card">
              <div className="profile-card__header"><h3 className="font-h2">Rastreador de Preventas</h3></div>
              <table className="profile-table"><thead><tr><th>PRODUCTO</th><th>FECHA</th><th>ESTADO</th><th>PROGRESO</th></tr></thead>
              <tbody>
                {[{ name: 'Elden Ring: Malenia 1/4', date: 'Dec 2024', status: 'Producción', color: 'var(--primary-container)', pct: 70 },
                  { name: 'Spy x Family: Yor Forger', date: 'Oct 2024', status: 'Control de Calidad', color: 'var(--tertiary)', pct: 85 },
                  { name: 'Genshin: Raiden Shogun', date: 'Q1 2025', status: 'Preventa Abierta', color: '#9ca3af', pct: 30 }
                ].map((p, i) => (
                  <tr key={i}><td><strong>{p.name}</strong></td><td>{p.date}</td><td><span style={{ fontSize: 11, fontWeight: 700, color: p.color }}>{p.status}</span></td><td><div className="profile-progress"><div style={{ width: `${p.pct}%`, background: p.color }} /></div><span className="material-symbols-outlined" style={{ fontSize: 16, color: '#ccc', cursor: 'pointer' }}>chevron_right</span></td></tr>
                ))}
              </tbody></table>
            </div>

            {/* Loyalty */}
            <div className="profile-card profile-card--loyalty">
              <span className="font-label" style={{ color: 'var(--primary)' }}>BENEFICIOS DE MIEMBRO</span>
              <h3 className="font-h1" style={{ marginTop: 8 }}>Lealtad de Coleccionista Nivel 4</h3>
              <p style={{ fontSize: 13, color: 'var(--on-surface-variant)', margin: '8px 0' }}>Estás a 250 puntos del Nivel 5: Curador Élite. Desbloquea un 15% de descuento fijo en envíos.</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}><span className="font-price-lg" style={{ color: 'var(--primary)' }}>1,750 PTS</span><span className="material-symbols-outlined" style={{ color: 'var(--primary-container)' }}>star</span></div>
            </div>

            {/* Security */}
            <div className="profile-card">
              <h3 className="font-h2" style={{ marginBottom: 16 }}>Security & Account</h3>
              <div className="profile-security-row"><span className="material-symbols-outlined">mail</span><div><p style={{ fontSize: 11, color: '#9ca3af', letterSpacing: '0.06em' }}>CORREO DE LA CUENTA</p><p>collector.kenji@tokyo.net</p></div><button style={{ color: 'var(--primary)', fontSize: 13, marginLeft: 'auto' }}>Edit</button></div>
              <div className="profile-security-row"><span className="material-symbols-outlined">lock</span><div><p style={{ fontSize: 11, color: '#9ca3af', letterSpacing: '0.06em' }}>CONTRASEÑA DE LA CUENTA</p><p>••••••••••••</p></div><button style={{ color: 'var(--primary)', fontSize: 13, marginLeft: 'auto' }}>Update</button></div>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
