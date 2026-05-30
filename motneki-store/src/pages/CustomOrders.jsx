import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './CustomOrders.css';

export default function CustomOrders() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="custom-page">
        <aside className="profile-sidebar">
          <div className="profile-user"><div className="profile-avatar">MC</div><div><strong>MotnekiStore Collector</strong><p>MIEMBRO NIVEL 4</p></div></div>
          <nav className="profile-nav">
            <Link to="/" className="profile-nav__link"><span className="material-symbols-outlined">home</span>Inicio</Link>
            <Link to="/catalogo" className="profile-nav__link"><span className="material-symbols-outlined">grid_view</span>Catálogo</Link>
            <Link to="/rastrear" className="profile-nav__link"><span className="material-symbols-outlined">local_shipping</span>Rastreador de Preventas</Link>
            <a href="#" className="profile-nav__link"><span className="material-symbols-outlined">favorite</span>Lista de Deseos</a>
            <Link to="/pedidos-personalizados" className="profile-nav__link profile-nav__link--active"><span className="material-symbols-outlined">edit_note</span>Pedidos Personalizados</Link>
          </nav>
          <button className="sidebar-custom-btn" style={{ marginTop: 'auto' }}><span className="material-symbols-outlined" style={{ fontSize: 18 }}>search</span>Solicitar Figura Personalizada</button>
        </aside>

        <main className="profile-main">
          {/* Hero */}
          <div className="custom-hero">
            <div><h1 className="font-display">El Concierge de Akihabara</h1><p style={{ color: 'var(--on-surface-variant)', marginTop: 8, maxWidth: 520, lineHeight: 1.6 }}>¿No encuentras esa edición limitada de 2012? Nuestro equipo en Tokio recorre tiendas físicas y colecciones privadas a diario. Envía tu solicitud y lo importamos directamente hasta Perú por ti.</p></div>
            <div className="custom-hero-img"><img src="https://i.pinimg.com/originals/d0/62/a0/d062a054db706da542a505e96bd851b8.gif" alt="Akihabara" /><div className="custom-hero-img__overlay">EN VIVO DESDE TOKIO<br/>Sucursal Distrito 4, Akihabara</div></div>
          </div>

          <div className="custom-layout">
            {/* Form */}
            <div className="custom-form-card">
              <h2 className="font-h1" style={{ marginBottom: 20 }}><span className="material-symbols-outlined" style={{ color: 'var(--primary)', verticalAlign: 'middle', marginRight: 8 }}>search</span>Nueva Solicitud de Adquisición</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="form-group"><label className="font-label">NOMBRE DE LA FIGURA</label><input placeholder="e.g. Saber Motored Cuirassier" /></div>
                <div className="form-group"><label className="font-label">URL DE REFERENCIA (MYFIGURECOLLECTION, ETC.)</label><input placeholder="e.g. Fate/Zero" /></div>
              </div>
              <div className="form-group"><label className="font-label">URL DE REFERENCIA (MYFIGURECOLLECTION, ETC.)</label><input placeholder="https://..." /></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div className="form-group"><label className="font-label">PRESUPUESTO ESTIMADO (USD)</label><input placeholder="$ 250.00" /></div>
                <div className="form-group"><label className="font-label">NIVEL DE PRIORIDAD</label><select style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--outline-variant)', borderRadius: 8, fontSize: 14 }}><option>Búsqueda Estándar</option><option>Urgente</option><option>Premium</option></select></div>
              </div>
              <div className="form-group"><label className="font-label">NOTAS ADICIONALES (PREFERENCIA DE CONDICIÓN, ESTADO DE LA CAJA, ETC.)</label><textarea rows="4" placeholder="Menciona si requieres caja sellada o si una condición Grado A es aceptable..." style={{ width: '100%', padding: 14, border: '1px solid var(--outline-variant)', borderRadius: 8, resize: 'vertical', fontSize: 14 }}></textarea></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                <span style={{ fontSize: 12, color: '#9ca3af' }}><span className="material-symbols-outlined" style={{ fontSize: 14, verticalAlign: 'middle' }}>schedule</span> Response time: 24-48 hours</span>
                <button className="btn btn--primary">Enviar Solicitud</button>
              </div>
            </div>

            {/* Guarantee */}
            <div>
              <div className="custom-guarantee"><h3 className="font-label" style={{ color: 'var(--primary)' }}>NUESTRA GARANTÍA</h3><ul><li><span className="material-symbols-outlined" style={{ fontSize: 16 }}>check_circle</span>Verificación de autenticidad de distribuidores autorizados en Tokio.</li><li><span className="material-symbols-outlined" style={{ fontSize: 16 }}>check_circle</span>Fotos de alta resolución antes de confirmar tu compra.</li><li><span className="material-symbols-outlined" style={{ fontSize: 16 }}>check_circle</span>Envío internacional seguro con embalaje reforzado profesional.</li></ul></div>
              <div className="custom-help"><h3 className="font-label" style={{ color: 'var(--primary)' }}>¿NECESITAS AYUDA?</h3><p>Habla con un especialista en sourcing para obtener valoraciones de mercado en tiempo real.</p><button className="btn btn--outline" style={{ width: '100%', marginTop: 12 }}>ABRIR CHAT EN VIVO</button></div>
            </div>
          </div>

          {/* History */}
          <div style={{ marginTop: 40 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}><div><h2 className="font-h1">Tu Historial de Búsquedas</h2><p style={{ fontSize: 13, color: '#9ca3af' }}>Sigue tus búsquedas activas y adquisiciones previas.</p></div><button className="font-label" style={{ color: 'var(--primary)' }}>EXPORTAR HISTORIAL</button></div>
            <table className="profile-table" style={{ background: 'white', borderRadius: 8, overflow: 'hidden' }}>
              <thead><tr><th>DETALLES DE LA FIGURA</th><th>FECHA DE SOLICITUD</th><th>ESTADO</th><th>PRECIO DE MERCADO</th><th>ACCIÓN</th></tr></thead>
              <tbody>
                <tr><td><strong>Saber Motored Cuirassier</strong></td><td>Oct 12, 2024</td><td><span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4, background: '#22c55e', color: 'white' }}>ENCONTRADO</span></td><td>$320.00</td><td><button className="btn btn--primary" style={{ padding: '6px 14px', fontSize: 11 }}>VER OFERTA</button></td></tr>
                <tr><td><strong>Hatsune Miku Racing Ver.</strong></td><td>Nov 02, 2024</td><td><span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4, background: 'var(--tertiary)', color: 'white' }}>EN REVISIÓN</span></td><td>--</td><td><button style={{ fontSize: 12, color: '#9ca3af' }}>GESTIONAR</button></td></tr>
                <tr><td><strong>Nendoroid Petit Set 2012</strong></td><td>Sep 28, 2024</td><td><span style={{ fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 4, background: 'var(--error)', color: 'white' }}>NO DISPONIBLE</span></td><td>--</td><td><button style={{ fontSize: 12, color: 'var(--primary)' }}>BUSCAR SIMILAR</button></td></tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
