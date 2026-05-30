import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Register.css';

export default function Register() {
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="register-page">
      <div className="register-layout container-narrow">
        <div className="register-promo">
          <span className="product-card__badge badge--preorder" style={{ position: 'static', marginBottom: 16 }}>MEMBRESÍA EXCLUSIVA</span>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 36, fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}>Eleva tu colección al siguiente nivel.</h1>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: 16, lineHeight: 1.6, marginBottom: 32 }}>Únete a la comunidad de coleccionistas premium y accede a piezas únicas directamente desde Japón.</p>
          <div className="register-promo-img"><img src="https://i.pinimg.com/1200x/c7/6c/4c/c76c4cd7a7298c23091893282baba66a.jpg" /></div>
        </div>
        <div className="register-form-card">
          <h2 className="font-h1" style={{ textAlign: 'center', marginBottom: 4 }}>Crear una cuenta</h2>
          <p style={{ textAlign: 'center', color: 'var(--on-surface-variant)', marginBottom: 24 }}>Completa tus datos para empezar.</p>
          <div className="form-group"><label className="font-label">NOMBRE DE USUARIO</label><div className="input-icon"><span className="material-symbols-outlined">person</span><input placeholder="Tu nombre artístico" /></div></div>
          <div className="form-group"><label className="font-label">CORREO ELECTRÓNICO</label><div className="input-icon"><span className="material-symbols-outlined">mail</span><input type="email" placeholder="ejemplo@correo.com" /></div></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div className="form-group"><label className="font-label">CONTRASEÑA</label><div className="input-icon"><span className="material-symbols-outlined">lock</span><input type="password" placeholder="••••••••" /></div></div>
            <div className="form-group"><label className="font-label">CONFIRMAR</label><div className="input-icon"><span className="material-symbols-outlined">verified_user</span><input type="password" placeholder="••••••••" /></div></div>
          </div>
          <div className="form-group"><label className="font-label">ANIME FAVORITO</label><div className="input-icon"><span className="material-symbols-outlined">favorite</span><select style={{ width: '100%', padding: '14px 14px 14px 44px', border: '1px solid var(--outline-variant)', borderRadius: 10, fontSize: 15, outline: 'none', background: 'var(--surface-container-lowest)', appearance: 'none' }}><option>Selecciona tu serie...</option><option>Genshin Impact</option><option>Chainsaw Man</option><option>One Piece</option><option>Dragon Ball</option><option>Naruto</option></select></div></div>
          <button onClick={() => navigate('/perfil')} className="btn btn--primary btn--lg" style={{ width: '100%', marginTop: 8, fontSize: 16, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}>Crear Cuenta</button>
          <p style={{ textAlign: 'center', marginTop: 16, fontSize: 14, color: 'var(--on-surface-variant)' }}>¿Ya tienes cuenta? <Link to="/login" style={{ color: 'var(--primary-container)', fontWeight: 600 }}>Inicia Sesión</Link></p>
        </div>
      </div>
    </motion.div>
  );
}
